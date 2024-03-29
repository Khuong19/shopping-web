import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <div className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative p-3">
                <img className='img-fluid rounded-3' 
                src="images/main-banner-1.jpg" 
                alt="main-banner " 
                />
                <div className="main-banner-content position-absolute">
                  <h4>BEST SALE</h4>
                  <h5>Laptop Max</h5>
                  <p>From $999 to $1000/month.</p>
                  <Link className='button'>BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className='d-flex flex-wrap justify-content-between align-items-center'>
                <div className="small-banner position-relative p-3">
                    <img className='img-fluid rounded-3' 
                    src="images/catbanner-01.jpg" 
                    alt="main-banner " 
                    />
                    <div className="small-banner-content position-absolute">
                      <h4>SUPERCHARGED FOR PROS.</h4>
                      <h5>iPad S13 Pro+</h5>
                      <p>From $999 to $1000/month.</p>
                    </div>
                </div>
                <div className="small-banner position-relative p-3">
                    <img className='img-fluid rounded-3' 
                    src="images/catbanner-02.jpg" 
                    alt="main-banner " 
                    />
                    <div className="small-banner-content position-absolute">
                      <h4>NEW ARRIVAL</h4>
                      <h5>Laptop Max</h5>
                      <p>From $999 to $1000/month.</p>
                    </div>
                </div>
                <div className="small-banner position-relative p-3">
                    <img className='img-fluid rounded-3' 
                    src="images/catbanner-03.jpg" 
                    alt="main-banner " 
                    />
                    <div className="small-banner-content position-absolute">
                      <h4>15% OFF</h4>
                      <h5>iPad S13 Pro+</h5>
                      <p>From $999 to $1000/month.</p>
                    </div>
                </div>
                <div className="small-banner position-relative p-3">
                    <img className='img-fluid rounded-3' 
                    src="images/catbanner-04.jpg" 
                    alt="main-banner " 
                    />
                    <div className="small-banner-content position-absolute">
                      <h4>15% OFF</h4>
                      <h5>iPad S13 Pro+</h5>
                      <p>From $999 to $1000/month.</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home