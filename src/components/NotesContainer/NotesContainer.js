import { useState, useEffect } from 'react';
import NotesList from '../NotesList/NotesList';
import { getProds, getProdsByTitle } from '../../asyncMock';
import { useParams } from 'react-router-dom';
import React from 'react';

const NotesContainer = () => {
  
    const [prods, setProds] = useState([])
    const { titleId } = useParams()

    useEffect(() => {

      if(!titleId) {

        getProds()

        .then(response => {
          setProds(response)
        })

        .catch(error => {
          console.log(error)
        })  

      } else {
        
        getProdsByTitle(titleId)

        .then(response => {
          setProds(response)
        })

        .catch(error => {
          console.log(error)
        })  
      }
    }, [titleId])

    return(
        <div>
           <NotesList prods={prods}/>
        </div>
    )
}

export default NotesContainer