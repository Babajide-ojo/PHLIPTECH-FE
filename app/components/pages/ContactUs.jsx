"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

export default function ContactUs() {
    return (
        <div>
            <div className='flex justify-center bg-contact-card rounded-2xl'>
                <div className="flex flex-col lg:flex-row justify-between p-10 gap-10">
                    <div className='relative w-full'>
                        <Image src="/spiral.svg" alt="Star" className="opacity-30 absolute" height={154} width={154} />
                        <div className='lg:pl-16 mx-auto'>
                            <h1 className='text-2xl md:text-3xl lg:text-4xl pt-20 pb-10 text-ptWhite font-medium leading-10'>
                                Spend less time worrying about how
                            </h1>
                            <p className='font-normal text-base lg:text-xl leading-5 lg:leading-8 text-ptWhite lg:w-8/12 mb-10 lg:mb-6 text-center'>
                                Have an amazing idea but not sure how to go about it ?
                            </p>
                            <div className='flex lg:block justify-center lg:justify-normal'>
                            <button className="py-4 px-12 rounded-lg bg-ptWhite text-ptDarkBlue900 hover:text-ptLightBlue text-lg leading-6 font-medium">
                                Book a consultation
                            </button>
                            </div>
                        </div>
                    </div>

                    <div className='w-full relative'>
                        <Image src="/rocket.png" alt="Star" className="rounded-md mx-auto lg:ml-20 mb-20 lg:mb-1" height={398.97} width={378.53} />
                        <Image src="/dots.svg" alt="Star" className="rounded-md absolute -bottom-10 -right-36 lg:-right-10" height={109} width={138} />
                    </div>
                </div>
            </div>
        </div>
    )
}

