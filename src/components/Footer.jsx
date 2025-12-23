import { CONTACT } from "../constants";
import { FaHome, FaPhone, FaEnvelope } from "react-icons/fa";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa6";
import { motion } from "framer-motion";
import emailjs from 'emailjs-com';
import { useState } from 'react';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_o1rf74j';
    const templateID = 'template_l9h4c9i';
    const userID = 'Guy6oCnLmwAot1E0W';

    // Send the email using Email.js
    emailjs.send(serviceID, templateID, {
      to_email: 'shenalpresanka99@gmail.com',
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      reply_to: formData.email
    }, userID)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        console.error('Failed to send email:', error);
        alert('Failed to send message. Please try again.');
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div id="contact" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-neutral-900">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="mx-auto w-full px-4 text-center lg:w-6/12 mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-300">Feel free to reach out for collaborations or just a friendly hello</p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-20">
          {/* Email Card */}
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 text-center">
            <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaEnvelope className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
            <p className="text-gray-300">{CONTACT.email}</p>
          </div>

          {/* Phone Card */}
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 text-center">
            <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaPhone className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
            <p className="text-gray-300">{CONTACT.phoneNo}</p>
          </div>

          {/* Location Card */}
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 text-center">
            <div className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaHome className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
            <p className="text-gray-300">{CONTACT.address}</p>
          </div>

          {/* Social Media Card */}
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 text-center">
            <div className="w-14 h-14 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaLinkedin className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Connect</h3>
            <div className="flex justify-center space-x-4">
              <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <FaFacebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Send Me a Message</h2>
            <p className="text-xl text-gray-300">I'll get back to you as soon as possible</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                />
              </div>
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                required
              ></textarea>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-700 rounded bg-gray-800"
                required
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-300">
                I agree to the <a href="#" className="text-blue-400 hover:underline">Terms and Conditions</a>
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-opacity text-lg"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Copyright */}
        <div className="mt-20 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            Copyright &copy; 2025 All rights reserved by Shenal Prasanka
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;