"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ContactUsModal from "../ContactUsModal";
import { useState } from "react";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About us", link: "/about-us" },
  { name: "Services", link: "/services" },
  { name: "Testimonials", link: "/testimonials" },
  { name: "Contact us", link: "javascript:void(0)" },
];

const RenderNavItems = ({ name, link }) => {
  const pathname = usePathname();
  return (
    <Link
      href={link}
      className={`text-lg font-medium hover:text-ptLightBlue hidden lg:flex ${
        pathname === link ? "text-ptLightBlue" : "text-ptBlack"
      }`}
    >
      {name}
    </Link>
  );
};

const Navbar = () => {
  const [contactUsModalOpen, setContactUsModalOpen] = useState(false);
  return (
    <main className="py-5 px-10 flex justify-between items-center">
      {/* <div className="relative h-auto w-40"> */}
      <Image src="/logo.png" alt="logo" height={70} width={160} />
      {/* </div> */}
      <div className="flex items-center gap-10">
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
        <Image src="/menu_icon.svg" alt="logo" height={24} width={24} />
      </div>

      <ContactUsModal
        open={contactUsModalOpen}
        onClose={setContactUsModalOpen}
      />
    </main>
  );
};

export default Navbar;
