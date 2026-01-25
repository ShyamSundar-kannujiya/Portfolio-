import React from "react";
import { motion } from "framer-motion";
import { aboutInfo, assets } from "../assets/assets";
import { div } from "framer-motion/client";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="about"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-0 px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-4">
          {" "}
          About
          <span className="text-purple">Me</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Get to know more about my background and passion
        </p>
        {/* Image + My jouarney */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* image */}
          <div className="md:w-1/2 rounded-2xl overflow-hidden">
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="w-full h-full object-cover"
              src={assets.profileImg}
              alt="profileImg"
            />
        </div>
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="md:w-1/2"
          >
            <div className="rounded=2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">My Joureney</h3>
              <ul>
                <b>From Curiosity to Crafting Experiences </b>
              </ul>
              <p className="text-gray-300 mb-6">
                My path into web development has been driven by a single goal:
                to build things that actually matter. What started as learning
                the basics has transformed into a deep passion for creating
                fast, responsive, and visually stunning digital products.
                <br />
                Recently, while building this portfolio, I took a massive leap
                forward in my technical journey. I didn't just want a website; I
                wanted a high-performance machine. That’s why I chose Vite for
                its lightning speed and React to build a scalable architecture.
              </p>

              <h1>
                <b>The breakthrough moments of this project </b>
              </h1>
              <p className="text-gray-300 mb-12">
                <li>
                  <b>Mastering the Flow:</b>I dived deep into Props and
                  component architecture, learning how to manage data
                  efficiently and keep my code clean and reusable.
                </li>
                <li>
                  <b>Bringing Code to Life:</b> I integrated Framer Motion to
                  move beyond static layouts. Adding smooth, purposeful
                  animations taught me how to guide a user’s attention and
                  create a truly immersive feel.
                </li>
                <li>
                  <b>Utility-First Design:</b> With Tailwind CSS, I bridged the
                  gap between complex logic and pixel-perfect design, ensuring
                  every element is responsive and modern.
                </li>
                <br />I am a developer who thrives at the intersection of logic
                and creativity. I don’t just write lines of code; I solve
                problems and build experiences. My journey is a work in
                progress, and I’m always ready for the next challenge.
              </p>
               
               {/* Cards */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                   aboutInfo.map((data, index) => (
                    <div key={index} className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 
                    cursor-pointer">
                      <div className="text-purple text-4xl mb-4">
                         < data.icon />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{data.title}</h3>
                      <p className="text-gray-400">{data.description}</p>
                    </div>

                   ))
                }

               </div>
            </div>
          </motion.div>
        
        </div>
      </div>
    </motion.div>
  );
};

export default About;
