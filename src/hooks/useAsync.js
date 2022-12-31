import React from 'react';
import { useState, useEffect } from 'react';

export const useAsync = (asyncFunction, dependencies) => {

    const [data, setData] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(true)

    if(!Array.isArray(dependencies)){
        dependencies = []
    }

    useEffect(() => {
        setLoading(true)

        asyncFunction()

        .then(data => {
            setData(data)
        })
        .catch(error => {
            setError(error)
        })
        .finally(() => {
            setLoading(false)
        })

    }, [...dependencies])

    return(
        data,
        error,
        loading
    )
}