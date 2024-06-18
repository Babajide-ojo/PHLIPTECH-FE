"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Plus_Jakarta_Sans } from "next/font/google";
const plusJakarta = Plus_Jakarta_Sans({ weight: '700', subsets: ["latin"] });


export default function Testimonials() {
    return (
        <div>
            <div className='text-ptDarkBg600'>
                <div className='w-1/3 mx-auto py-3 px-6 text-center bg-ptNeutral100 rounded-3xl font-bold mb-5'>
                    They already love our work 😍
                </div>
                <h1 className='mx-auto text-center text-4xl font-medium'>
                    See what our clients say about us
                </h1>
            </div>

            <div className='py-20'>
                {/* Row 1 */}
                <div className="flex justify-between">
                    <div className='mx-5 p-4 bg-ptWhite50 w-full shadow-md rounded-2xl mb-12'>
                        <div className="flex justify-between">
                            <div className='leading-5 font-medium text-xl text-ptDarkBg600'>“The best hiring app ever”</div>
                            <div>⭐⭐⭐⭐⭐</div>
                        </div>

                        <p className='text-base font-normal text-ptDarkBg500 leading-7 my-5'>
                            If you are looking for a reliable and easy-to-use app, look no further!
                            This app has everything you need, and it is made my life so much easier
                        </p>

                        <div className="flex justify-between mt-10 mb-3">
                            <div className='flex '>
                                <Image src="/lady-1.png" alt="Icon" className="rounded-e-full -mt-3" height={40} width={40} />
                                <p className={`${plusJakarta.className} leading-5 text-ptDarkBg600 text-lg pl-4`}>Sophie Moore</p>
                            </div>

                            <div className='font-normal text-sm leading-5 text-ptGray50'>
                                Head of Marketing
                            </div>
                        </div>
                    </div>

                    <div className='mx-5 p-4 bg-ptWhite50 w-full shadow-md rounded-2xl'>
                        <div className="flex justify-between">
                            <div className='leading-5 font-medium text-xl text-ptDarkBg600'>“Saves me time”</div>
                            <div>⭐⭐⭐⭐⭐</div>
                        </div>

                        <p className='text-base font-normal text-ptDarkBg500 leading-7 my-5'>
                            I hired two VA’s on frowork two months ago. Impressed is an understatement! Both Froworker have delivered
                            exceptionally well. They are creative and understand the needs of the business without any input from me.
                            I would highly recommend frowork. It’s better than any freelance website I have used in the past.
                        </p>

                        <div className="flex justify-between mt-10 mb-3">
                            <div className='flex '>
                                <Image src="/lady-1.png" alt="Icon" className="rounded-e-full -mt-3" height={40} width={40} />
                                <p className={`${plusJakarta.className} leading-5 text-ptDarkBg600 text-lg pl-4`}>Johana Smith</p>
                            </div>

                            <div className='font-normal text-sm leading-5 text-ptGray50'>
                                Founder of a cool SaaS
                            </div>
                        </div>
                    </div>
                </div>

                {/* Row 2 */}
                <div className="flex justify-between mt-10">
                    <div className='mx-5 p-4 bg-ptWhite50 w-full shadow-md rounded-2xl mb-6'>
                        <div className="flex justify-between">
                            <div className='leading-5 font-medium text-xl text-ptDarkBg600'>“Better than the rest”</div>
                            <div>⭐⭐⭐⭐⭐</div>
                        </div>

                        <p className='text-base font-normal text-ptDarkBg500 leading-7 my-5'>
                            I got to know frowork on linkedin, i thought the signup process was going to take longer than necessary
                            like other job apps but in 2mins i registered successfully, I applied for gig which i got, the fun part
                            was the payment was so swift no glitches no delays. Amazing product
                        </p>

                        <div className="flex justify-between mt-10 mb-3">
                            <div className='flex '>
                                <Image src="/lady-2.png" alt="Icon" className="rounded-e-full -mt-3" height={40} width={40} />
                                <p className={`${plusJakarta.className} leading-5 text-ptDarkBg600 text-lg pl-4`}>Annie Devy</p>
                            </div>

                            <div className='font-normal text-sm leading-5 text-ptGray50'>
                                Designer
                            </div>
                        </div>
                    </div>

                    <div className='mx-5 p-4 bg-ptWhite50 w-full shadow-md rounded-2xl'>
                        <div className="flex justify-between">
                            <div className='leading-5 font-medium text-xl text-ptDarkBg600'>“No more anxiety”</div>
                            <div>⭐⭐⭐⭐⭐</div>
                        </div>

                        <p className='text-base font-normal text-ptDarkBg500 leading-7 my-5'>
                            My experience on frowork has been so exceptional. Working with a froworker has taken away my anxiety about
                            handling my social media platforms and has given me the peace of mind i need to focus on my core business.
                            I will always recommend frowork as a platform for business owners like me seeking to engage enterprising
                            individuals
                        </p>

                        <div className="flex justify-between mt-10 mb-3">
                            <div className='flex '>
                                <Image src="/guy-1.png" alt="Icon" className="rounded-e-full -mt-3" height={40} width={40} />
                                <p className={`${plusJakarta.className} leading-5 text-ptDarkBg600 text-lg pl-4`}>Michel O Neil</p>
                            </div>

                            <div className='font-normal text-sm leading-5 text-ptGray50'>
                                Head of Sales
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

