import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaGooglePay } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { LiaCcAmex } from "react-icons/lia";
import { FaCcApplePay } from "react-icons/fa";
import { SiPaytm } from "react-icons/si";


import "../App.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-top-contianer">
        <div className="footer-email-container">
          <h3 className="footer-heading">Be the first to know</h3>
          <p className="footer-description">
            Sign up for updates from mettā muse.
          </p>
          <div className="footer-email-button-container">
            <input
              type="email"
              className="footer-email"
              placeholder="Enter your e-mail..."
            />
            <button className="footer-subscribe-button">SUBSCRIBE</button>
          </div>
        </div>
        <div className="footer-contact-us-container">
          <h3 className="footer-heading">CONTACT US</h3>
          <p className="footer-description">+44 221 133 5360</p>
          <p className="footer-description">customercare@mettamuse.com</p>
          <h3 className="footer-heading">Currency</h3>
          <p className="footer-description">.USD</p>
          <h3 className="footer-heading">Currency</h3>
          <p className="footer-description">
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>
      <hr className="footer-hr-line" />
      <div className="footer-bottom-contianer">
        <div className="footer-metta-muse-container">
          <h3 className="footer-heading">mettā muse</h3>
          <p className="footer-bottom-container-description">About Us</p>
          <p className="footer-bottom-container-description">Stories</p>
          <p className="footer-bottom-container-description">Artisans</p>
          <p className="footer-bottom-container-description">Boutiques</p>
          <p className="footer-bottom-container-description">Contact Us</p>
          <p className="footer-bottom-container-description">
            EU Compliances Docs
          </p>
        </div>
        <div className="footer-quick-links-container">
          <h3 className="footer-heading">Quick Links</h3>
          <p className="footer-bottom-container-description">
            Orders & Shipping
          </p>
          <p className="footer-bottom-container-description">
            Join/Login as a Seller
          </p>
          <p className="footer-bottom-container-description">
            Payment & Pricing
          </p>
          <p className="footer-bottom-container-description">
            Return & Refunds
          </p>
          <p className="footer-bottom-container-description">FAQs</p>
          <p className="footer-bottom-container-description">
            Terms & Conditions
          </p>
          <p className="footer-bottom-container-description">
            EU Compliances Docs
          </p>
        </div>
        <div className="footer-follow-us-container">
          <h3 className="footer-heading">Follow Us</h3>
          <div className="footer-icons-container">
            <FaInstagram className="footer-icon"/>
            <CiLinkedin className="footer-icon"/>
          </div>
            <p className="footer-bottom-container-description">
           mettā muse Accepts
          </p>
          <div className="footer-payments-container">
              <FaGooglePay className="footer-payment-icon"/>
              <FaCcMastercard className="footer-payment-icon"/>
              <FaCcPaypal className="footer-payment-icon"/>
              <LiaCcAmex className="footer-payment-icon"/>
              <FaCcApplePay className="footer-payment-icon"/>
              <SiPaytm className="footer-payment-icon"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
