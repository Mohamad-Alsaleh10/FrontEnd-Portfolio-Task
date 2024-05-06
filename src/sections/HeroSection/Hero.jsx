// import React from 'react'
import './Hero.css'
import Button from '../../components/Button/Button'

export const Hero = () => {
  return (

    <div>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item carousel-item1 active">
                    <div className='carousel-caption'>
                        <span  className='sp'>
                            HELLO!
                        </span>
                        <h1>I`m <span>Clark Thompson</span></h1>
                        <h2>A Freelance Web Designer</h2>

                        <div className='buttons d-flex'>
                            <button className='btn warning'> her me </button>
                            <button className='btn'>my work</button>
                        </div>
                    </div>
                </div>

                <div className="carousel-item carousel-item2">
                    <div className='carousel-caption'>
                        <span className='sp'>HELLO!</span>
                        <h1> I`m a <span>web designer</span> based in London </h1>
                        <div className='buttons d-flex'>
                            <Button text='her me'/>
                            <button className='btn'>my work</button>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </>
  )
}
