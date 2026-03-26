import { useState } from 'react'
import { MapPin, Phone, Mail } from "lucide-react";
import Navbar from '../../Navbar';

const ContactPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const contacts = [
    { icon: <MapPin size={20} />, label: "Address", value: "Phnom Penh, Cambodia" },
    { icon: <Phone size={20} />, label: "Phone", value: "+855123456789" },
    { icon: <Mail size={20} />, label: "Email", value: "Example@gmail.com" },
  ];

  return (
    <div>

      {/* Header */}
      <div className='w-full flex justify-center'>
        <div className="w-[70%] p-6 mt-8 flex justify-center items-center bg-amber-800 text-white text-3xl sm:text-4xl font-extrabold tracking-wide rounded-xl">
          Contact
        </div>
      </div>

      {/* Form + Contact Info */}
      <div className="w-full flex flex-col md:flex-row justify-evenly items-start mt-8 px-4 gap-10">

        {/* Form */}
        <form className="flex flex-col gap-4 w-full max-w-md">

          {/* First Name & Last Name */}
          <div className="flex gap-4 w-full">
            <label className="flex flex-col gap-1 w-full">
              <span className="text-sm font-medium text-gray-700">First Name</span>
              <input
                type="text"
                placeholder="First Name"
                className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-amber-800"
              />
            </label>
            <label className="flex flex-col gap-1 w-full">
              <span className="text-sm font-medium text-gray-700">Last Name</span>
              <input
                type="text"
                placeholder="Last Name"
                className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-amber-800"
              />
            </label>
          </div>

          {/* Email */}
          <label className="flex flex-col gap-1 w-full">
            <span className="text-sm font-medium text-gray-700">Email</span>
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-amber-800"
            />
          </label>

          {/* Phone */}
          <label className="flex flex-col gap-1 w-full">
            <span className="text-sm font-medium text-gray-700">Phone</span>
            <input
              type="tel"
              placeholder="Your Phone Number"
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-amber-800"
            />
          </label>

          {/* Message */}
          <label className="flex flex-col gap-1 w-full">
            <span className="text-sm font-medium text-gray-700">Message</span>
            <textarea
              placeholder="Your Message"
              rows={5}
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-amber-800 resize-none"
            />
          </label>

          <button
            type="submit"
            className="bg-amber-800 text-white font-bold py-5 rounded-md hover:bg-amber-700 transition"
          >
            Submit
          </button>
        </form>


      </div>
    </div>
  );
}

export default ContactPage;
