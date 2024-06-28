"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ContactUsModal from "../ContactUsModal";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About us", link: "/about-us" },
  { name: "Services", link: "/services" },
  { name: "Testimonials", link: "/testimonials" },
  { name: "Contact us", link: "javascript:void(0)" },
];

const Navbar = () => {
  const [contactUsModalOpen, setContactUsModalOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const RenderNavItems = ({ name, link }) => {
    const pathname = usePathname();
    return (
      <Link
        href={link}
        className={`font-medium hover:text-ptLightBlue ${
          name === "Contact us" && "lg:hidden"
        } ${pathname === link ? "text-ptLightBlue" : "text-ptBlack"}`}
        onClick={() => name === "Contact us" && setContactUsModalOpen(true)}
      >
        {name}
      </Link>
    );
  };

  useEffect(() => {
    setDropdownOpen(false);
  }, []);

  return (
    <main className="py-5 px-5 sm:px-10 flex justify-between items-center relative">
      {/* <div className="relative h-auto w-40"> */}
      <Image src="/logo.png" alt="logo" height={70} width={160} />
      {/* </div> */}
      <div className="text-lg items-center gap-10 hidden lg:flex">
        {navItems.map((nav) => (
          <div key={nav.name}>
            <RenderNavItems name={nav.name} link={nav.link} />
          </div>
        ))}
      </div>

      <button
        className="py-2 px-10 rounded-lg bg-ptLightBlue text-white hidden lg:flex"
        onClick={() => setContactUsModalOpen(!contactUsModalOpen)}
      >
        Contact Us
      </button>

      <div className="flex lg:hidden">
        {dropdownOpen ? (
          <IoMdClose size={20} onClick={() => setDropdownOpen(!dropdownOpen)} />
        ) : (
          <RxHamburgerMenu
            size={20}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          />
        )}
      </div>

      <div
        className={`absolute top-full w-screen flex flex-col gap-5 bg-white p-5 transform duration-1000 ${
          dropdownOpen ? "left-0" : "-left-full"
        }`}
      >
        {navItems.map((nav, i) => (
          <div
            key={nav.name}
            style={{
              transitionDuration: `${2000 * (i + 1)}ms`,
              transitionDelay: "500ms",
            }}
            className={`transform delay-500 ${
              dropdownOpen ? "border-opacity-100" : "opacity-0"
            }`}
          >
            <RenderNavItems name={nav.name} link={nav.link} />
          </div>
        ))}
      </div>

      <ContactUsModal
        open={contactUsModalOpen}
        onClose={setContactUsModalOpen}
      />
    </main>
  );
};

export default Navbar;
