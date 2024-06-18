"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

export default function ContactUs() {
    return (
        <div>
            <div className='bg-contact-card rounded-2xl'>
                <div className="flex justify-between p-10">
                    <div className='relative w-full'>
                        <Image src="/spiral.svg" alt="Star" className="opacity-30 absolute" height={154} width={154} />
                        <div className='pl-16'>
                            <h1 className='text-4xl pt-20 pb-10  text-ptWhite font-medium leading-10'>
                                Spend less time worrying about how
                            </h1>
                            <p className='font-normal text-xl leading-8 text-ptWhite w-8/12 mb-6'>
                                Have an amazing idea but not sure how to go about it ?
                            </p>
                            <button className="py-4 px-12 rounded-lg bg-ptWhite text-ptDarkBlue900 hover:text-ptLightBlue text-lg leading-6 ">
                                Book a consultation
                            </button>
                        </div>
                    </div>

                    <div className='w-full relative'>
                        <Image src="/rocket.png" alt="Star" className="rounded-md ml-20" height={398.97} width={378.53} />
                        <Image src="/dots.svg" alt="Star" className="rounded-md absolute -bottom-10 -right-10" height={109} width={138} />
                    </div>
                </div>
            </div>
        </div>
    )
}

