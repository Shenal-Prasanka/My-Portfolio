import { CONTACT } from "../constants";
import { FaHome, FaPhone, FaEnvelope } from "react-icons/fa";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa6";
import { motion } from "framer-motion";
import emailjs from 'emailjs-com';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these with your actual Service ID, Template ID, and User ID
    const serviceID = 'service_o1rf74j';
    const templateID = 'template_l9h4c9i';
    const userID = 'Guy6oCnLmwAot1E0W';

    // Send the email using Email.js
    emailjs.send(serviceID, templateID, {
      from_email: email,
      message: message
    }, userID)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        alert('Email sent successfully!');
        setEmail('');
        setMessage('');
      }, (error) => {
        console.error('Failed to send email:', error);
        alert('Failed to send email. Please try again.');
      });
  };

  return (
    <div id="contact" className="pb-4 pt-3 w-full px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <h1 className="my-10 text-center text-3xl sm:text-4xl font-serif">Thanks for Watching</h1>
      

      <div className="flex flex-col lg:flex-row justify-between gap-8 mx-auto max-w-7xl">
        {/* Contact Details */}
        <div className="text-left tracking-tighter my-4 w-full lg:w-auto border border-indigo-600 p-4">
          {/* Home */}
          <div className="flex items-center my-4">
            <FaHome className="mr-2 w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-sm sm:text-base">- {CONTACT.address}</span>
          </div>

          {/* Phone */}
          <div className="flex items-center my-4">
            <FaPhone className="mr-2 w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-sm sm:text-base">- {CONTACT.phoneNo}</span>
          </div>

          {/* Email */}
          <div className="flex items-center my-4">
            <FaEnvelope className="mr-2 w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-sm sm:text-base">- {CONTACT.email}</span>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center my-4">
            <FaLinkedin className="mr-2 w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-sm sm:text-base">- {CONTACT.linkedin}</span>
          </div>

          {/* GitHub */}
          <div className="flex items-center my-4">
            <FaGithub className="mr-2 w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-sm sm:text-base">- {CONTACT.github}</span>
          </div>

          {/* Facebook */}
          <div className="flex items-center my-4">
            <FaFacebook className="mr-2 w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-sm sm:text-base">- {CONTACT.facebook}</span>
          </div>
        </div>

        {/* Form */}
        <div className="w-full max-w-md mx-auto lg:mx-0 p-4 sm:p-6 shadow-md rounded-lg border border-indigo-600 dark:bg-gray-800">
          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-white dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 text-black"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Message Textarea */}
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-white dark:text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 text-black"
                placeholder="Type your message here"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex justify-end"
            >
              <button
                type="submit"
                className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-md transition duration-300"
              >
                Submit
              </button>
            </motion.div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;