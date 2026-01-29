import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaDribbble, FaEnvelope, FaGithub, FaLinkedin, FaMapMarked, FaPhone, FaTwitter,
  } from "react-icons/fa";

function Contact() {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    //  EmailJS configuration
    emailjs
      .sendForm(
        "service_ycc9oz7",
        "template_7h83wbv",
        form.current,
        "T7P3haI_73_xRlN3D",
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send: " + error.text);
        },
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="contact"
      className="py-20 bg-dark-200"
    >
      <div className="conteiner mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Get In
          <span className="text-purple">Touch</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Have a project in mind or want to collaforate? Let's talk!
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div>
            {/* 3. form mein ref aur onSubmit add kiya */}
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  name="user_name" // 4. 'name' attribute zaroori hai
                  required
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none "
                  type="text"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  name="user_email" // 4. 'name' attribute zaroori hai
                  required
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none "
                  type="email"
                />
              </div>
              <div>
                <label htmlFor="massage" className="block text-gray-300 mb-2">
                  Your Massage
                </label>
                <textarea
                  name="message" // 4. 'name' attribute zaroori hai
                  required
                  className="w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none "
                />
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300 cursor-pointer"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
          {/* Contact Information - No Changes Here */}
          <div className="space-y-8">
            <div className="flex items-start ">
              <div className="text-purple text-2xl mr-4">
                <FaMapMarked />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-gray-400">Delhi, Skurpur</p>
              </div>
            </div>
            <div className="flex items-start ">
              <div className="text-purple text-2xl mr-4">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-400">shyamsundar91vivo@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start ">
              <div className="text-purple text-2xl mr-4">
                <FaPhone />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p className="text-gray-400">+91 7347725364</p>
              </div>
            </div>
            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/ShyamSundar-kannujiya"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-purple hover:text-white transition duration-300"
                >
                  <FaGithub />
                </a>

                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition duration-300"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition duration-300"
                >
                  <FaTwitter />
                </a>

                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-pink hover:bg-pink hover:text-white transition duration-300"
                >
                  <FaDribbble />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
