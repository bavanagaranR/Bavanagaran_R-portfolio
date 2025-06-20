import React, { useContext } from 'react';
import Title from './title/Title';
import database from '../alldata/data';

const Contact = () => {
  let { details } = useContext(database);

  return (
    <section
      id="contact"
      className="bg-[#343A40] text-gray-400 px-4 sm:px-8 lg:px-16 min-h-screen"
    >
      {/* Title */}
      <div className="relative w-full bg-transparent">
        <Title titleOne={"CONTACT"} titleTwo={"Get in Touch"} bg={"#343A40"} />
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 pb-8 lg:pb-0">
        {/* Address Section */}
        <div>
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white">ADDRESS</h3>
            <p>Ponkunduppatti, Kattanipatti, Sivaganga,Tamil Nadu,630553.</p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-white">CONTACT</h3>
            <p className="flex items-center">
              <span role="img" aria-label="phone" className="text-orange-500 mr-2">
                📞
              </span>
              (+91) 9003820720
            </p>

            <p className="flex items-center">
              <span role="img" aria-label="email" className="text-orange-500 mr-2">
                📧
              </span>
              bavanab42@gmail.com
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">FOLLOW ME</h3>
            <div className="flex space-x-4">
              <a href={details.linkin_link} className="text-gray-400 hover:text-white">
                <p>{details.linkdin_logo}</p>
              </a>
              <a href={details.gamil_link} className="text-gray-400 hover:text-white">
                {details.gamil_logo}
              </a>
              <a href={details.git_link} className="text-gray-400 hover:text-white">
                {details.git_logo}
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">SEND US A NOTE</h3>
        <form
  action="https://formsubmit.co/bavanab42@gmail.com"
  method="POST"
  className="space-y-4"
>
  {/* Disable CAPTCHA */}
  <input type="hidden" name="_captcha" value="false" />

  {/* Redirect after submit */}
  <input
    type="hidden"
    name="_next"
    value="https://bavanagaranr.github.io/Bavanagaran_R-portfolio/#/thankyou"
  />

  {/* Name & Email Inputs */}
  <div className="flex space-x-4">
    <input
      type="text"
      name="name"
      required
      placeholder="Name"
      className="w-1/2 p-3 bg-gray-800 rounded text-gray-400 focus:outline-none"
    />
    <input
      type="email"
      name="email"
      required
      placeholder="Email"
      className="w-1/2 p-3 bg-gray-800 rounded text-gray-400 focus:outline-none"
    />
  </div>

  {/* Message Textarea */}
  <textarea
    rows="5"
    name="message"
    required
    placeholder="Tell us more about your needs........"
    className="w-full p-3 bg-gray-800 rounded text-gray-400 focus:outline-none"
  ></textarea>

  {/* Submit Button */}
  <div className="flex justify-center">
    <button
      type="submit"
      className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-full transition duration-300"
    >
      Send Message
    </button>
  </div>
</form>


        </div>
      </div>
    </section>
  );
};

export default Contact;
