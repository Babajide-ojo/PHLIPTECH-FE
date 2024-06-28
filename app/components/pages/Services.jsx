"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function Services() {
  const cardClass =
    "text-center bg-ptNeutral50 w-full md:mx-2 lg:mx-5 my-5 p-12 rounded-lg";
  const cardHead =
    "text-lg md:text-xl lg:text-2xl leading-6 md:leading-8 font-medium mb-5 ptDarkBg900";
  const cardText =
    "font-normal text-sm lg:text-base text-ptNeutral600 leading-6";

  return (
    <div
      data-aos="fade-left"
      data-aos-duration="2000"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <div>
        <p className="font-medium text-lg lg:text-2xl text-center lg:text-left leading-8">
          What we <i className="text-ptLightBlue">do ?</i>
        </p>
        <h1 className="font-medium text-2xl lg:text-4xl text-center lg:text-left leading-10 text-ptDarkBg900 py-6 mb-3">
          Our Services
        </h1>
      </div>

      <div className="">
        <div className="md:flex md:justify-between">
          <div className={`${cardClass}`}>
            <div className="flex justify-center bg-ptRed600 py-7 px-3 m-7 w-32 h-32 mx-auto rounded-3xl">
              <Image
                src="/dev-laptop-icon.svg"
                alt="Laptop"
                className=""
                height={57.65}
                width={72}
              />
            </div>
            <h4 className={`${cardHead}`}>Web Development Services</h4>
            <p className={`${cardText}`}>
              We help companies and entrepreneurs plan and make use of modern
              day technologies to build innovative solutions
            </p>
          </div>

          <div className={`${cardClass}`}>
            <div className="flex justify-center bg-ptDarkBlue900 p-7 m-7 w-32 h-32 mx-auto rounded-3xl">
              <Image
                src="/Cloud Icon.svg"
                alt="Cloud"
                className=""
                height={78.85}
                width={64}
              />
            </div>
            <h4 className={`${cardHead}`}>Cloud Computing</h4>
<p className={`${cardText}`}>
  We assist companies and entrepreneurs in harnessing modern technologies to design and implement innovative solutions that leverage cloud computing.
</p>

          </div>
        </div>

        <div className="md:flex md:justify-between">
          <div className={`${cardClass}`}>
            <div className="flex justify-center bg-ptDarkBg900 p-7 m-7 w-32 h-32 mx-auto rounded-3xl">
              <Image
                src="/app-dev-icon.svg"
                alt="App Dev"
                className=""
                height={72.55}
                width={54}
              />
            </div>
            <h4 className={`${cardHead}`}>Mobile App Development</h4>
            <p className={`${cardText}`}>
              We collaborate with companies and entrepreneurs to harness
              contemporary technologies, enabling the creation of impactful and
              user-centric mobile applications.
            </p>
          </div>

          <div className={`${cardClass}`}>
            <div className="flex justify-center bg-ptGreen900 p-7 m-7 w-32 h-32 mx-auto rounded-3xl">
              <Image
                src="/QA-icon.svg"
                alt="QA"
                className=""
                height={72}
                width={72}
              />
            </div>
            <h4 className={`${cardHead}`}>
  Quality Assurance and Test Automation
</h4>
<p className={`${cardText}`}>
  We collaborate with companies and entrepreneurs to implement effective QA practices and leverage modern technologies for automated testing. Our goal is to ensure robust, high-quality solutions that meet industry standards and user expectations.
</p>

          </div>
        </div>
      </div>
    </div>
  );
}
