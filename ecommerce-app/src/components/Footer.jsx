import React from 'react'
import { NavLink, Link} from 'react-router-dom'
import { BsYoutube, BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs'
const Footer = () => {
  return (
    <div>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className='mb-0 text-white'>Sign Up News Letter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input type="text" className="form-control py-1" placeholder="Your Email Address" 
                aria-label="Your Email Address" aria-describedby="basic-addon2"/>
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className='text-white mb-4'>Contact Us</h4>
              <div>
                <address className='text-white fs-6'>
                  <p>8901 Marmora Road,<br/>Glasg</p>
                  <a className='text-white d-block mt-2 mb-2' href="tel:+932329329">0932329329</a>
                  <a className='text-white' href="mailto:example@gmail.com">example@gmail.com</a>
                </address>
              </div>
              <div className="social-icons d-flex align-items-center gap-30">
                <a href="" className='text-white fs-4'>
                  <BsFacebook/>
                </a>
                <a href="" className='text-white fs-4'>
                  <BsGithub/>
                </a>
                <a href="" className='text-white fs-4'>
                  <BsLinkedin/>
                </a>
                <a href="" className='text-white fs-4'>
                  <BsYoutube/>
                </a>
              </div>
            </div>
            <div className="col-3">
              <h4 className='text-white mb-4'>Information</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Privacy Policy</Link>
                <Link className='text-white py-2 mb-1'>Refund Policy</Link>
                <Link className='text-white py-2 mb-1'>Shipping Policy</Link>
                <Link className='text-white py-2 mb-1'>Terms of Service</Link>
                <Link className='text-white py-2 mb-1'>Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className='text-white mb-4'>Account</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Search</Link>
                <Link className='text-white py-2 mb-1'>About Us</Link>
                <Link className='text-white py-2 mb-1'>Faq</Link>
                <Link className='text-white py-2 mb-1'>Contact</Link>
                <Link className='text-white py-2 mb-1'>Size Chart</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className='text-white mb-4'>Quick Links</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Laptop</Link>
                <Link className='text-white py-2 mb-1'>Headphones</Link>
                <Link className='text-white py-2 mb-1'>Tablet</Link>
                <Link className='text-white py-2 mb-1'>Mobile Phone</Link>
                <Link className='text-white py-2 mb-1'>Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-left text-white mb-0">
                &copy; { new Date().getFullYear() } {" "} 
                Powered By Developers
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer