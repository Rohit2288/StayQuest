import React, { useContext } from 'react'
import Searchbar from '../../components/Searchbar/Searchbar'
import './homePage.scss'
import { AuthContext } from '../../context/AuthContext'

const HomePage = () => {

  const {currentUser} = useContext(AuthContext)

  console.log(currentUser);
  return (
    <div className="homePage">
        <div className="textContainer">
            <div className="wrapper">
                <h1 className='title'>
                Explore Convenient Living Options with StayQuest
                </h1>
                <p>
                StayQuest simplifies daily accommodation searches with a variety of options, from rooms and hostels to PGs and rentals. Our user-friendly platform ensures effortless matching of preferences, whether you're a student looking for a dorm or a professional seeking a rental. Find your ideal stay effortlessly with StayQuest.
                </p>
                <Searchbar />
                <div className="boxes">
                  <div className="box">
                    <img src="/affordable.png" alt="" />
                    <h4>Affordable</h4>
                  </div>
                  <div className="box">
                    <img src="/convenient.png" alt="" />
                    <h4>Convenient </h4>
                  </div>
                  <div className="box">
                    <img src="/trusted.png" alt="" />
                    <h4>Trusted</h4>
                  </div>
                </div>
            </div>
        </div>
        <div className="imgContainer">
            <img src="/bg2.png" alt="" />
        </div>
    </div>
  )
}

export default HomePage