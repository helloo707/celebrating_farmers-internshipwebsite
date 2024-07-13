import React, { useRef } from 'react';

const Contact = () => {
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    // You can use fetch or axios to handle the form submission if needed
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: new FormData(formRef.current)
    }).then(response => {
      if (response.ok) {
        // Clear the form after successful submission
        alert('Message sent successfully!');
        formRef.current.reset();
      } else {
        alert('Failed to send message. Please try again.');
      }
    }).catch(error => {
      console.error('An error occurred while sending the message:', error);
      alert('An error occurred. Please try again.');
    });
  };

  return (
    <div className="min-h-[89vh] flex items-center justify-evenly bg-gradient-to-b from-pink-100 to-orange-50">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col items-start gap-5 p-5 rounded-lg max-w-lg w-full"
      >
        <input type="hidden" name="access_key" value="2acf454b-f77b-4688-99bb-32473a20adbb" />
        <div>
          <h2 className="font-semibold text-purple-600 text-4xl mb-1">Get in Touch</h2>
          <hr className="w-30 border-none h-1 bg-purple-600 rounded-full mb-5" />
        </div>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          className="w-full h-12 border-none outline-none pl-6 font-medium text-gray-600 rounded-full focus:border-orange-400"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          className="w-full h-12 border-none outline-none pl-6 font-medium text-gray-600 rounded-full focus:border-orange-400"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full h-24 border-none outline-none pl-6 pt-4 font-medium text-gray-600 rounded-xl focus:border-orange-400"
          required
        ></textarea>
        <button
          type="submit"
          className="flex items-center px-6 py-3 text-lg text-white gap-2 border-none rounded-full bg-gradient-to-l from-orange-400 to-pink-500 cursor-pointer"
        >
          Send Message
          <img src="" alt="" />
        </button>
      </form>
      <div className="hidden md:block">
        <img src="../../public/Contact.png" alt="Contact" />
      </div>
    </div>
  );
};

export default Contact;
