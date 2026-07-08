import React from 'react';
import msg from '../assets/msg.png';
import rig1 from '../assets/rig1.png';
import rig2 from '../assets/rig2.png';
import rig3 from '../assets/rig3.png';
import iconlist from '../assets/iconlist.png';

const Contact = () => {
  return (
    <div className="bg-[#020222] text-white py-20 px-6 md:px-10 lg:px-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-5xl md:text-6xl font-semibold bg-gradient-to-r from-blue-300 via-indigo-300 to-blue-200 bg-clip-text text-transparent mb-4">
          Contacts
        </h1>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Side - Contact Form */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12">
            <div className="flex flex-col items-center text-center mb-10">
              <img src={msg} alt="Message icon" className="w-20 h-20 mb-6" />
              <h3 className="text-3xl md:text-4xl font-semibold mb-4">Let's Start a Conversation</h3>
              <p className="text-gray-400 max-w-md">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint.
              </p>
            </div>

            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <input
                type="text"
                placeholder="What's This About"
                className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <textarea
                placeholder="Tell us more about your project..."
                rows={5}
                className="w-full bg-white/10 border border-white/20 rounded-3xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-y"
              ></textarea>

              <button
                type="submit"
                className="w-full md:w-auto mt-4 bg-[#3e3e8f] hover:bg-[#5050aa] transition-all duration-300 text-white px-12 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side - Contact Info */}
          <div>
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
                Ready to Transform Your Ideas?
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {/* Email */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 group">
                <img src={rig1} alt="Email" className="w-14 h-14 mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-2xl font-semibold mb-2">Email Us</h4>
                <a href="mailto:hello@productdemo.com" className="text-blue-400 hover:text-blue-300 text-xl block mb-1">
                  hello@productdemo.com
                </a>
                <p className="text-gray-500 text-sm">Response in 2-4 hours</p>
              </div>

              {/* Call */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 group">
                <img src={rig2} alt="Call" className="w-14 h-14 mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-2xl font-semibold mb-2">Call Us</h4>
                <a href="tel:+15559876543" className="text-blue-400 hover:text-blue-300 text-xl block mb-1">
                  +1 (555) 987-6543
                </a>
                <p className="text-gray-500 text-sm">Available 9AM - 6PM EST</p>
              </div>

              {/* Visit Office */}
              <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 group">
                <img src={rig3} alt="Office" className="w-14 h-14 mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-2xl font-semibold mb-2">Visit Our Office</h4>
                <p className="text-blue-400 text-xl">4821 Broadway Street, New York, NY 10013</p>
                <p className="text-gray-500 text-sm mt-1">Open Monday - Friday</p>
              </div>
            </div>

            {/* Stats Section */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 grid grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="text-4xl font-bold text-blue-400 mb-1">24h</h4>
                <p className="text-gray-400 text-sm">Average Response</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-blue-400 mb-1">98%</h4>
                <p className="text-gray-400 text-sm">Client Satisfaction</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-blue-400 mb-1">150+</h4>
                <p className="text-gray-400 text-sm">Projects Delivered</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Connect With Us */}
      <div className="mt-24 text-center">
        <h4 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-blue-300 via-indigo-300 to-blue-200 bg-clip-text text-transparent mb-8">
          Connect With Us
        </h4>
        <img src={iconlist} alt="Social icons" className="mx-auto max-w-md w-full" />
      </div>
    </div>
  );
};

export default Contact;