"use client"
import React, { useState, useEffect } from 'react';

export default function AboutUs() {
    const cardHeadClass = 'border-solid border-l-2 text-lg lg:text-2xl font-bold leading-8 pl-2 mb-6 lg:mb-4'
    const cardInfoClass = 'leading-8 font-normal text-base lg:text-lg w-fit'
    const abtPosClass = 'text-center lg:text-left'
    const cardClass = 'mx-3 rounded-3xl gap-3 mb-7 md:mb-0 py-12 px-10 md:py-7 md:px-7 lg:hover:scale-105'

    return (
        <div className='lg:flex lg:justify-between'   data-aos="fade-right"
        data-aos-duration="3000"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine">
            <div className='mt-40'>
                <p className={`font-medium text-lg lg:text-2xl leading-8 ${abtPosClass}`}>Who we <i className='text-ptLightBlue'>are ?</i></p>
                <h1 className={`font-medium text-2xl lg:text-4xl leading-10 text-ptDarkBg900 py-6 mb-3 ${abtPosClass}`}>About Us</h1>
                <p className={`text-base lg:text-2xl leading-8 lg:leading-10 font-normal text-ptNeutral600 ${abtPosClass}`}>
                    At Philip Tech, our core values shape all our actions and decisions. We prioritize innovation
                    customer satisfaction, excellence, and integrity, ensuring that every step we take aligns with
                    our commitment to these principles.
                </p>
            </div>

            {/* Cards */}
            <div className='md:ml-7 mt-10'>
                <div className='md:flex md:justify-end mb-7 md:mb-5'>
                    <div className={`w-fit bg-ptDarkBlue50 ${cardClass} mt-10`}>
                        <h3 className={`border-blue-700 text-ptDarkBlue ${cardHeadClass}`}>Innovation</h3>
                        <p className={`${cardInfoClass} text-ptDarkBlue`}>
                            We embrace creativity and push the boundaries of what is possible, constantly seeking new
                            ways to innovate and drive positive change in the tech industry.
                        </p>
                    </div>
                    <div className={`w-fit bg-ptSkyBlue ${cardClass}`}>
                        <h3 className={`border-blue-700 text-ptDarkBlue ${cardHeadClass}`}>
                            Intergrity
                        </h3>
                        <p className={`${cardInfoClass} text-ptDarkBlue`}>
                            We uphold the highest standardsof honesty, transparency, and ethical behavior in all our
                            interactions, building trust and credibility with our clients partners, and stakeholders.
                        </p>
                    </div>
                </div>

                <div className='md:flex md:justify-end'>
                    <div className={`w-fit bg-ptLightGreen50 ${cardClass}`}>
                        <h3 className={`border-green-700 text-ptGreen900 ${cardHeadClass}`}>
                            Customer-Centricity
                        </h3>
                        <p className={`${cardInfoClass} text-ptGreen900`}>
                            We prioritize the needs and satisfaction of our clients above all else, striving to exceed their
                            expectations by delivering exceptional products and services tailored to their unique requirements.
                        </p>
                    </div>
                    <div className={`w-fit bg-ptNeutral50 ${cardClass}`}>
                        <h3 className={`border-gray-400 text-ptNeutral800 ${cardHeadClass}`}>
                            Collaboration
                        </h3>
                        <p className={`${cardInfoClass} text-ptNeutral700`}>
                            We foster a culture of collaboration and teamwork, recognizing that our collective strength lies
                            in our diversity of talents, perspectives, and experiences.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

