import React from 'react';
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e69b311a-5e33-406d-80f1-b0c0c65ad571tgc k");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      alert("Submitted");
      event.target.reset();
    } else {
      console.log("Error", data);
      alert(data.message);
      setResult("");
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' 
      id='Contact'
    >
      <br /><br />
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        Contact Us, <span className='underline underline-offset-4 decoration-1 font-light'>Today</span>
      </h1>
      <p className='text-lg text-gray-800 mb-6 text-center'>
        Your Questions Matter – Message Us!
      </p>
      <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8'>
        <div className='flex flex-wrap'>
          <div className='w-full md:w-1/2 text-left'>
            Your Name
            <input className="w-full border border-gray-300 rounded py-3 px-4 mt-2" type="text" name='Name' placeholder='Your Name' required />
          </div>
          <div className='w-full md:w-1/2 text-left md:pl-4 mt-4 md:mt-0'>
            Your E-Mail
            <input className="w-full border border-gray-300 rounded py-3 px-4 mt-2" type="email" name='Email' placeholder='Your Email' required />
          </div>
        </div>
        <div className='my-6 text-left'>
          Message
          <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none' placeholder='Raise your Query' name="Message" required></textarea>
        </div>
        <div className="flex justify-center">
          <button type="submit" className='bg-blue-600 text-white py-2 px-12 mb-10 rounded'>
           {result ? result : "Send Message"}
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default Contact;
