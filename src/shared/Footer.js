import React from 'react'

const Footer = () => {
  return (
    <div>

<footer className="footer p-10 bg-base-200 text-base-content">
  <div>
    <h1 className='text-5xl font-bold'>
        Khudalagse?
    </h1>
    <p>
    One is to focus on the quality of your meat. If you can call out organic beef, sustainable farming.
    </p>
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>
    </div>
  )
}

export default Footer;