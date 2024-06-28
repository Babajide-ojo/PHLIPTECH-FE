"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Plus_Jakarta_Sans } from "next/font/google";
const plusJakarta = Plus_Jakarta_Sans({ weight: '700', subsets: ["latin"] });


export default function Testimonials() {
    const phraseClass = 'leading-5 font-medium text-lg lg:text-xl text-ptDarkBg600'
    const commentClass = 'text-sm lg:text-base font-normal text-ptDarkBg500 leading-7 my-5'
    const cardClass = 'w-full shadow-md rounded-2xl h-fit md:mx-2 lg:mx-5'
    const commentName = 'leading-5 text-ptDarkBg600 text-sm lg:text-lg pl-4'
    const posClass = 'font-normal text-xs lg:text-sm leading-5 text-ptGray50'

    return (
        <div>
            <div className='text-ptDarkBg600'>
                <div className='w-fit mx-auto py-3 px-6 text-center bg-ptNeutral100 rounded-3xl font-bold mb-5 leading-4 text-base'>
                    They already love our work 😍
                </div>
                <h1 className='mx-auto text-center text-2xl md:text-3xl lg:text-4xl font-medium leading-8 lg:leading-10'>
                    See what our clients say about us
                </h1>
            </div>

            <div className='py-20'>
                {/* Row 1 */}
                <div className="md:flex md:justify-between">
                    <div className={`p-4 bg-ptWhite50 ${cardClass} mb-10 md:mb-12`}>
                        <div className="flex justify-between">
                        <div className={`${phraseClass}`}>“Standard Processes”</div>
                            <div>⭐⭐⭐⭐⭐</div>
                        </div>

                        <p className={`${commentClass}`}>
                            If you are looking for a reliable software service provider, choose Phliptech, their process are exceptinally standard.
                        </p>

                        <div className="flex justify-between mt-10 mb-3">
                            <div className='flex '>
                            
                                <p className={`${plusJakarta.className} ${commentName}`}>Ini Etuk</p>
                            </div>

                            <div className={`${posClass}`}>
                                CTO, Second Wallet
                            </div>
                        </div>
                    </div>

                    <div className={`p-4 bg-ptWhite50 ${cardClass}`}>
                        <div className="flex justify-between">
                            <div className={`${phraseClass}`}>“Saves me time”</div>
                            <div>⭐⭐⭐⭐⭐</div>
                        </div>

                        <p className={`${commentClass}`}>
            Since we onboarded Phliptech as our technology service provider, all our processes has been seamless
                        </p>

                        <div className="flex justify-between mt-10 mb-3">
                            <div className='flex '>
                               
                                <p className={`${plusJakarta.className} ${commentName}`}>Omole Daniel</p>
                            </div>

                            <div className={`${posClass}`}>
                                Head of Operations, Swiftwings
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

