import React from 'react'
import Nav from '../common/Nav'
import heroImage from '../../assets/HeroImage.png'
import bgImage from '../../assets/BgImage.png'


const Home = () => {
  
  return (
    <div className='container-fluid home'>
      <Nav/>

      <div className='row header'>
        <div className='col-md-6'>
          <div className='hero'>
            <img src={heroImage} className='img img-responsive hero_img' />
          </div>
        </div>
        <div className='col-md-6'>
          <div className='header-text-section'>
            <h4><span>75%</span> &nbsp;of managers depend on Zaper to get work done</h4>
            <h2>Manage your team <br/>members data.</h2>
            <h1>Data Driven</h1>
            <button className='get-started'>Get started for free</button>
          </div>
          <div className='bg_img'>
            <img src={bgImage}  />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home