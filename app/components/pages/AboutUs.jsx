"use client"
import React, { useState, useEffect } from 'react';

export default function AboutUs() {
    return (
        <div className='flex justify-between'>
            <div className='mt-40'>
                <p className='font-medium'>Who we <i className='text-ptLightBlue'>are ?</i></p>
                <h1 className='font-medium text-4xl leading-10 text-ptDarkBg900 py-6 mb-3'>About Us</h1>
                <p className='text-xl leading-10 font-normal text-ptNeutral600'>
                    At Philip Tech, our core values shape all our actions and decisions. We prioritize innovation
                    customer satisfaction, excellence, and integrity, ensuring that every step we take aligns with
                    our commitment to these principles.
                </p>
            </div>

            {/* Cards */}
            <div className=''>
                <div className='flex justify-end mb-5'>
                    <div className='w-2/5 bg-ptDarkBlue50 mx-3 rounded-3xl gap-3 p-7 hover:scale-105 mt-10'>
                        <h3 className='border-solid border-l-2 border-blue-700 text-ptDarkBlue text-lg font-bold leading-8 pl-2 mb-4'>Innovation</h3>
                        <p className='leading-8 font-normal text-ptDarkBlue'>
                            We embrace creativity and push the boundaries of what is possible, constantly seeking new
                            ways to innovate and drive positive change in the tech industry.
                        </p>
                    </div>
                    <div className='w-2/5 bg-ptSkyBlue mx-3 rounded-3xl gap-3 p-7 hover:scale-105'>
                        <h3 className='border-solid border-l-2 border-blue-700 text-ptDarkBlue text-lg font-bold leading-8 pl-2 mb-4'>
                            Intergrity
                        </h3>
                        <p className='leading-8 font-normal text-ptDarkBlue'>
                            We uphold the highest standardsof honesty, transparency, and ethical behavior in all our
                            interactions, building trust and credibility with our clients partners, and stakeholders.
                        </p>
                    </div>
                </div>

                <div className='flex justify-end'>
                    <div className='w-2/5 bg-ptLightGreen50 mx-3 rounded-3xl gap-3 p-7 hover:scale-105 '>
                        <h3 className='border-solid border-l-2 border-green-700 text-ptGreen900 text-lg font-bold leading-8 pl-2 mb-4'>
                            Customer-Centricity
                        </h3>
                        <p className='leading-8 font-normal text-ptGreen900'>
                            We prioritize the needs and satisfaction of our clients above all else, striving to exceed their
                            expectations by delivering exceptional products and services tailored to their unique requirements.
                        </p>
                    </div>
                    <div className='w-2/5 bg-ptNeutral50 mx-3 rounded-3xl gap-3 p-7 hover:scale-105 '>
                        <h3 className='border-solid border-l-2 border-gray-400 text-ptNeutral800 text-lg font-bold leading-8 pl-2 mb-4'>
                            Collaboration
                        </h3>
                        <p className='leading-8 font-normal text-ptNeutral700'>
                            We foster a culture of collaboration and teamwork, recognizing that our collective strength lies
                            in our diversity of talents, perspectives, and experiences.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

