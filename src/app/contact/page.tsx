"use client"
import { useState, FormEvent } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isSent, setIsSent] = useState<boolean | null>(null);  // Success or failure message

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Template parameters (data to send)
    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    // Send email using EmailJS
    emailjs
      .send(
        'areeba_fatima',  // Your EmailJS Service ID
        'areeba-fatima',  // Your Template ID
        templateParams,      // Data to be sent (name, email, message)
        '2-ffOv2-Xbt1BVHtX'       // Your EmailJS User ID
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setIsSent(true);  // Show success message
        },
        (error) => {
          console.log('FAILED...', error);
          setIsSent(false);  // Show failure message
        }
      );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
      <h1 className="text-4xl font-semibold mb-8">CONTACT ME</h1>
      <div className="p-6 rounded-lg shadow-lg w-full max-w-3xl bg-gray-900">
        <form
          className="flex flex-col space-y-6 justify-center items-center w-full"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 w-full">
            {/* Name Input */}
            <input
              type="text"
              placeholder="Name"
              className="p-4 rounded-full bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-700 w-full sm:w-1/2"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            {/* Email Input */}
            <input
              type="email"
              placeholder="Email"
              className="p-4 rounded-full bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-700 w-full sm:w-1/2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {/* Message Input */}
          <textarea
            placeholder="Message"
            className="p-4 rounded-xl bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-700 w-full h-40 lg:h-60"
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          {/* Submit Button */}
          <button
            type="submit"
            className="bg-purple-900 w-full sm:w-1/2 hover:bg-purple-100 hover:text-black text-white font-bold py-3 rounded-full transition duration-300"
          >
            Send Message
          </button>
        </form>
        {/* Success/Failure Message */}
        {isSent && (
          <div className="mt-4 text-green-500">
            Your message has been sent successfully!
          </div>
        )}
        {!isSent && isSent !== null && (
          <div className="mt-4 text-red-500">
            Failed to send message. Please try again.
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
