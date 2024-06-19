"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

export default function Services() {
    const cardClass = 'text-center bg-ptNeutral50 w-full mx-5 my-5 p-12 rounded-lg'
    const cardHead = 'text-2xl leading-8 font-medium mb-5 ptDarkBg900'
    const cardText = 'font-normal text-base text-ptNeutral600 leading-6'

    return (
        <div>
            <div>
                <p className='font-medium text-2xl leading-8'>What we <i className='text-ptLightBlue'>do ?</i></p>
                <h1 className='font-medium text-4xl leading-10 text-ptDarkBg900 py-6 mb-3'>Our Services</h1>
            </div>

            <div className='px-10'>
                <div className="flex justify-between">
                    <div className={`${cardClass}`}>
                        <div className='flex justify-center bg-ptRed600 py-7 px-3 m-7 w-32 h-32 mx-auto rounded-3xl'>
                            <Image src="/dev-laptop-icon.svg" alt="Laptop" className="" height={57.65} width={72} />
                        </div>
                        <h4 className={`${cardHead}`}>Web Development Services</h4>
                        <p className={`${cardText}`}>
                            We help companies and entrepreneurs plan and make use of modern day technologies to build innovative solutions
                        </p>
                    </div>

                    <div className={`${cardClass}`}>
                        <div className='flex justify-center bg-ptDarkBlue900 p-7 m-7 w-32 h-32 mx-auto rounded-3xl'>
                            <Image src="/Cloud Icon.svg" alt="Cloud" className="" height={78.85} width={64} />
                        </div>
                        <h4 className={`${cardHead}`}>Cloud Computing</h4>
                        <p className={`${cardText}`}>
                            We help companies and entrepreneurs plan and make use of modern day technologies to build innovative solutions
                        </p>
                    </div>
                </div>

                <div className="flex justify-between">
                    <div className={`${cardClass}`}>
                        <div className='flex justify-center bg-ptDarkBg900 p-7 m-7 w-32 h-32 mx-auto rounded-3xl'>
                            <Image src="/app-dev-icon.svg" alt="App Dev" className="" height={72.55} width={54} />
                        </div>
                        <h4 className={`${cardHead}`}>Mobile App Development</h4>
                        <p className={`${cardText}`}>
                            We help companies and entrepreneurs plan and make use of modern day technologies to build innovative solutions
                        </p>
                    </div>

                    <div className={`${cardClass}`}>
                        <div className='flex justify-center bg-ptGreen900 p-7 m-7 w-32 h-32 mx-auto rounded-3xl'>
                            <Image src="/QA-icon.svg" alt="QA" className="" height={72} width={72} />
                        </div>
                        <h4 className={`${cardHead}`}>Manual Testing, QA, Test Automation</h4>
                        <p className={`${cardText}`}>
                            We help companies and entrepreneurs plan and make use of modern day technologies to build innovative solutions
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

