import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../assets/images/footer.png'

const Footer = () => {
    const logo= `https://tse2.mm.bing.net/th?id=OIP._EdUPTLj-Cc0WKpFEcQsaAHaE7&pid=Api&P=0`
    return (
        <footer style={{background:`url(${footer})`,backgroundSize:'cover'}} className="footer p-10  my-12">
  <div>
     <img className='w-24 h-24 rounded-lg' src={logo} alt=''></img>
    <p>Doctor's Portal.<br/>Providing reliable tech since 2011</p>
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <Link to='' className="link link-hover">Branding</Link> 
    <Link to='' className="link link-hover">Design</Link> 
    <Link to='' className="link link-hover">Marketing</Link> 
    <Link to='' className="link link-hover">Advertisement</Link>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <Link to="" className="link link-hover">About us</Link> 
    <Link to="" className="link link-hover">Contact</Link> 
    <Link to="" className="link link-hover">Jobs</Link> 
    <Link to="" className="link link-hover">Press kit</Link>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <Link to='' className="link link-hover">Terms of use</Link> 
    <Link to='' className="link link-hover">Privacy policy</Link> 
    <Link to='' className="link link-hover">Cookie policy</Link>
  </div>
</footer>
    );
};

export default Footer;