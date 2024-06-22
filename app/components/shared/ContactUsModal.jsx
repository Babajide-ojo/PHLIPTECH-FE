import { IoClose } from "react-icons/io5";

const ContactUsModal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <main className="fixed w-screen h-screen top-0 left-0 bg-black bg-opacity-25 flex justify-center items-center p-5 z-50">
      <div className="max-w-3xl w-full rounded-xl bg-white p-5 relative">
        <div
          className="absolute rounded-full border-2 bg-white border-ptBlue text-ptBlue right-0 top-0 translate-x-1/2 -translate-y-1/2 cursor-pointer"
          onClick={() => onClose(false)}
        >
          <IoClose size={25} />
        </div>
        <div className="my-20 max-w-xl w-full p-5 mx-auto">
          <p className="text-center text-6xl font-medium">How can we help ?</p>
          <p className="text-ptNeutral600 text-center text-xl mt-10">
            Looking to build innovative solutions but don’t know how. Fill out
            the contact form and we will be in touch
          </p>
        </div>
      </div>
    </main>
  );
};

export default ContactUsModal;
