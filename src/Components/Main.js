import React from 'react'

export default function Main(){
    return (
        <div className="main--info">

            <h1>Peter Joseph</h1>
            <h3>Developer</h3>
            <h5> <a href="https://linktr.ee/peter_torki">Peter.accounts</a></h5>
            <a href="mailto:peter.j.torki@gmail.com" target={"_blank"} rel="noreferrer">
                <button className="btn email"> <img src={require('./../assets/email.png')} alt="notFound"/> <span>Email</span> </button>
            </a>

            <a href="https://www.linkedin.com/in/petertorki/" target={"_blank"} rel="noreferrer">
                <button className="btn linkedin"> <img src={require('./../assets/li.png')} alt="notFound"/> <span>LinkedIn</span> </button>
            </a>

            <h1 className="left about title">About</h1>
            <p className="left about info">
                I'm 20 years old Egyptian developer, I'm a semi-senior, I'm currently studying Computer Science at the FCI SCU, I'm in love with js 💛.
            </p>

            <h1 className="left interest title">Interest</h1>
            <p className="left interest info">
                Food chef 🍔, Music 🎶, Movies 🎥, Games 🎮, Programming 🧑‍💻.
            </p>

        </div>
    )
}