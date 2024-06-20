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
                            <div className={`${phraseClass}`}>“The best hiring app ever”</div>
                            <div>⭐⭐⭐⭐⭐</div>
                        </div>

                        <p className={`${commentClass}`}>
                            If you are looking for a reliable and easy-to-use app, look no further!
                            This app has everything you need, and it is made my life so much easier
                        </p>

                        <div className="flex justify-between mt-10 mb-3">
                            <div className='flex '>
                                <Image src="/lady-1.png" alt="Icon" className="rounded-e-full -mt-3" height={40} width={40} />
                                <p className={`${plusJakarta.className} ${commentName}`}>Sophie Moore</p>
                            </div>

                            <div className={`${posClass}`}>
                                Head of Marketing
                            </div>
                        </div>
                    </div>

                    <div className={`p-4 bg-ptWhite50 ${cardClass}`}>
                        <div className="flex justify-between">
                            <div className={`${phraseClass}`}>“Saves me time”</div>
                            <div>⭐⭐⭐⭐⭐</div>
                        </div>

                        <p className={`${commentClass}`}>
                            I hired two VA’s on frowork two months ago. Impressed is an understatement! Both Froworker have delivered
                            exceptionally well. They are creative and understand the needs of the business without any input from me.
                            I would highly recommend frowork. It’s better than any freelance website I have used in the past.
                        </p>

                        <div className="flex justify-between mt-10 mb-3">
                            <div className='flex '>
                                <Image src="/lady-1.png" alt="Icon" className="rounded-e-full -mt-3" height={40} width={40} />
                                <p className={`${plusJakarta.className} ${commentName}`}>Johana Smith</p>
                            </div>

                            <div className={`${posClass}`}>
                                Founder of a cool SaaS
                            </div>
                        </div>
                    </div>
                </div>

                {/* Row 2 */}
                <div className="md:flex md:justify-between mt-10">
                    <div className={`p-4 bg-ptWhite50 ${cardClass} mb-10 md:mb-6`}>
                        <div className="flex justify-between">
                            <div className={`${phraseClass}`}>“Better than the rest”</div>
                            <div>⭐⭐⭐⭐⭐</div>
                        </div>

                        <p className={`${commentClass}`}>
                            I got to know frowork on linkedin, i thought the signup process was going to take longer than necessary
                            like other job apps but in 2mins i registered successfully, I applied for gig which i got, the fun part
                            was the payment was so swift no glitches no delays. Amazing product
                        </p>

                        <div className="flex justify-between mt-10 mb-3">
                            <div className='flex '>
                                <Image src="/lady-2.png" alt="Icon" className="rounded-e-full -mt-3" height={40} width={40} />
                                <p className={`${plusJakarta.className} ${commentName}`}>Annie Devy</p>
                            </div>

                            <div className={`${posClass}`}>
                                Designer
                            </div>
                        </div>
                    </div>

                    <div className={`p-4 bg-ptWhite50 ${cardClass}`}>
                        <div className="flex justify-between">
                            <div className={`${phraseClass}`}>“No more anxiety”</div>
                            <div>⭐⭐⭐⭐⭐</div>
                        </div>

                        <p className={`${commentClass}`}>
                            My experience on frowork has been so exceptional. Working with a froworker has taken away my anxiety about
                            handling my social media platforms and has given me the peace of mind i need to focus on my core business.
                            I will always recommend frowork as a platform for business owners like me seeking to engage enterprising
                            individuals
                        </p>

                        <div className="flex justify-between mt-10 mb-3">
                            <div className='flex '>
                                <Image src="/guy-1.png" alt="Icon" className="rounded-e-full -mt-3" height={40} width={40} />
                                <p className={`${plusJakarta.className} ${commentName}`}>Michel O Neil</p>
                            </div>

                            <div className={`${posClass}`}>
                                Head of Sales
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

