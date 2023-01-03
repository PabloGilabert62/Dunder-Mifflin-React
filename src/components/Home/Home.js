import './Home.css'
import React from 'react'

const Home = () => {
    return(
        <div>
            <section>
                <article>
                    <div className='title-home animate__animated animate__backInUp'>Home</div>

                    <div className="audio-home animate__animated animate__backInUp">
                        <audio src="../images/the office theme.mp3" controls></audio>
                    </div>

                    <p className="text-home animate__animated animate__backInUp">Dunder Mifflin Paper Company was funded in 1949 by Robert Dunder and Robert Mufflin</p>
                </article>

                <article>
                    <div className="video-title">Meet the office!</div>

                    <div className="flex-video">
                        <video className="video-home" src="../images/learn the alphabet.mp4" controls></video>
                    </div>
                </article>

                <article>
                    <p className="text-home">
                        After many years, Dunder Mufflin continues with the objetive of priorize the service to his clients, beeing always on his side
                        to fix any inconvinient or urgency that can affect him in any way, taking care in a special way and lidering in each stape about
                        the convenience to select the correct product for each client, in order to facilitate her necesities
                    </p>
                </article>
            </section>

            <span className="footer-">
                <img className="footer-logo" src='/images/DunderMifflinLogo.png' alt="Dunder Mifflin Paper Company Logo"/>
                <span className="text-footer">Dunder Mifflin Company Since 2008</span>
            </span>
        </div>
    )
}

export default Home