import React from 'react';

const Footer = () => {
  return (
    <div className="bg-black text-white flex flex-wrap justify-between p-12">
      <div className="flex-1 min-w-[200px] text-center mb-4">
        <h3 className="mb-4">CUSTOMER SERVICES</h3>
        <p className="mb-2 hover:text-blue-500">About Lock The Box</p>
        <p className="mb-2 hover:text-blue-500">How It Works?</p>
        <p className="mb-2 hover:text-blue-500">Upcoming Events</p>
        <p className="mb-2 hover:text-blue-500">FAQs</p>
        <p className="mb-2 hover:text-blue-500">Feedback</p>
      </div>
      <div className="flex-1 min-w-[200px] text-center mb-4">
        <h3 className="mb-4">CONTACT US</h3>
        <p className="mb-2">
          WhatsApp Us <span className="text-blue-500">9050111218</span>
        </p>
        <p className="mb-2">
          Call Us <span className="text-blue-500">9050111218</span>
        </p>
      </div>
      <div className="flex-1 min-w-[200px] text-center mb-4">
        <h3 className="mb-4">SOCIAL PRESENCE</h3>
        <div className="flex justify-center gap-4 mb-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-facebook-f text-xl hover:scale-110 transition-transform" aria-hidden="true"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-instagram text-xl hover:scale-110 transition-transform" aria-hidden="true"></i>
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-twitter text-xl hover:scale-110 transition-transform" aria-hidden="true"></i>
          </a>
          <a href="https://wa.me/9050111218" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-whatsapp text-xl hover:scale-110 transition-transform" aria-hidden="true"></i>
          </a>
        </div>
        <img className="rounded-full h-16 w-16 mx-auto mb-4" src="https://e7.pngegg.com/pngimages/142/76/png-clipart-white-and-orange-book-logo-symbol-yellow-orange-logo-ibooks-orange-logo-thumbnail.png" alt="Download App" />
        <h3 className="mb-4">DOWNLOAD APP</h3>
      </div>
    </div>
  );
};

export default Footer;
