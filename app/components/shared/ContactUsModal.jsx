"use client";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import InputField from "./input/InputField";
import { useState } from "react";

const ContactUsModal = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  console.log(formData);

  if (!open) return null;
  return (
    <main className="fixed w-full h-full top-0 left-0 bg-black bg-opacity-25 flex justify-center items-center p-5 z-50">
      {/* <div className="relative w-full"> */}
      <div className="relative max-w-3xl w-full rounded-xl bg-white py-10">
        <div
          className="absolute rounded-full border-2 bg-white border-ptBlue text-ptBlue right-0 top-0 translate-x-1/2 -translate-y-1/2 cursor-pointer"
          onClick={() => onClose(false)}
        >
          <IoClose size={25} />
        </div>
        <div className="max-w-2xl w-full p-5 mx-auto h-[70vh] overflow-auto hide-scrollbar">
          <p className="text-center text-6xl font-medium gradient-text">
            How can we help ?
          </p>
          <p className="text-ptNeutral600 text-center text-xl mt-10 max-w-xl">
            Looking to build innovative solutions but don&apos;t know how. Fill
            out the contact form and we will be in touch
          </p>

          <div className="flex justify-center my-7">
            <Image
              src="/Message Illustration.png"
              alt="contact us"
              height={150}
              width={150}
            />
          </div>

          <div className="bg-ptNeutral50 p-5 rounded-md flex flex-col gap-5 ">
            <InputField
              label="Name"
              name="name"
              inputPad="p-6"
              placeholder="Enter name"
              onChange={handleInputChange}
            />
            <InputField
              label="Email"
              name="email"
              inputPad="p-6"
              placeholder="Enter email"
              onChange={handleInputChange}
            />
            <div className="">
              <p className="text-gray-700 font-semibold mb-1">Message</p>
              <textarea
                name="message"
                className="w-full p-6 rounded-md border-2 border-gray-300 focus:outline-none"
                rows="5"
                placeholder="Write a message"
                onChange={handleInputChange}
              />
            </div>
            <button className="bg-ptLightBlue text-white rounded-lg py-3 px-8 mt-5 w-fit mb-5">
              Send Message
            </button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </main>
  );
};

export default ContactUsModal;
