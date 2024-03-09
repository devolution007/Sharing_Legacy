"use client"
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from 'next/image'

const LegacyGift = () => {
    const [step, setStep] = useState(1);
    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);



    return (
        <>
            <div className="bg-[url('https://smellmeloveme.shop/wp-content/uploads/2024/01/Frame-2097.png')] w-100 h-[50px] lg:h-[150px] md:h-[150px] sm:h-[150px] bg-cover bg-center bg-no-repeat"></div>
            <div className="relative pt-[80px] pb-[80px] bg-[aliceblue] left-[0px] flex flex-col items-center justify-end">
                <div className="gift_section flex flex-col items-center justify-center text-center">
                    <div className="flex flex-col items-center justify-start gap-[56px]">
                        <div className="shrink-0 flex flex-col">
                            <b className="relative leading-[59.5px] font_custom">Order LegacyMarker Gift Card</b>
                        </div>
                        <div className="w-full shadow-lg bg-white px-[30px] py-[30px] sm:p-[50px] md:p-[50px] lg:p-[50px] xl:p-[50px] rounded-[50px]">
                            <form className="space-y-6">
                                {step === 1 && (
                                    <div className='container flex flex-col sm:flex-row md:flex-col lg:flex-row xl:flex-row gap-[30px] items-center'>
                                        <div className="">
                                            <h2 className="font-[poppins] text-2xl font-bold mb-4 text-left">E-Shopping Information</h2>
                                            <p className='text-[#62585D] font-[poppins] pb-5'>We will Email the below address the gift card. We recommend you email to yourself so the email is not lost</p>
                                            {/* <label htmlFor="name">Name:</label> */}
                                            <div className="flex flex-col gap-[20px]">
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    placeholder='Type Name here'
                                                    className="border rounded-[10px] p-3 font-[poppins]"
                                                />
                                                <input
                                                    type="text"
                                                    id="name_two"
                                                    name="name_two"
                                                    placeholder='Type Email address here'
                                                    className="border rounded-[10px] p-3 font-[poppins]"
                                                />
                                            </div>
                                            <Link to="/Gift">
                                                <button type="button" className="rounded-[34px] w-[137px] sm:w-[237px] md:w-[237px] lg:w-[237px] xl:w-[237px] h-14 mt-[80px] mr-[10px] py-[13px] px-5  text-base tracking-[2px] font-[poppins] border text-[black]">
                                                    Prev
                                                </button>
                                            </Link>
                                            <Link to="/Checkout">
                                                <button type="button" className="rounded-[34px] bg-[#38589C] w-[137px] sm:w-[237px]  md:w-[237px]  lg:w-[237px]  xl:w-[237px] h-14 mt-[30px] sm:mt-[80px] md:mt-[80px] lg:mt-[80px] xl:mt-[80px] py-[13px] px-5 text-base tracking-[2px] font-[poppins] text-[white]">
                                                    Next
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                )}

                            </form>
                        </div >
                    </div >
                </div >
            </div >
        </>
    )
}

export default LegacyGift;