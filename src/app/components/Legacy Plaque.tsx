"use client"
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from 'next/image'

const Legacyplaque = () => {
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
                            <b className="relative leading-[59.5px] font_custom">Order Legacy Maker Plaque</b>
                        </div>
                        <div className="w-full shadow-lg bg-white px-[30px] py-[30px] sm:p-[50px] md:p-[50px] lg:p-[50px] xl:p-[50px] rounded-[50px]">
                            <form className="space-y-6">
                                {step === 1 && (
                                    <div className='container flex flex-col sm:flex-row md:flex-col lg:flex-row xl:flex-row gap-[30px] items-center'>
                                        <div className="">
                                            <h2 className="font-[poppins] text-2xl font-bold mb-4 text-left">Name</h2>
                                            {/* <label htmlFor="name">Name:</label> */}
                                            <div className="flex flex-col gap-[20px]">
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    placeholder='Name on LegacyMarker'
                                                    className="border rounded-[10px] p-3 font-[poppins]"
                                                />
                                                <input
                                                    type="text"
                                                    id="name_two"
                                                    name="name_two"
                                                    placeholder='Line one of marker'
                                                    className="border rounded-[10px] p-3 font-[poppins]"
                                                />
                                                <input
                                                    type="text"
                                                    id="name_three"
                                                    name="name_three"
                                                    placeholder='Line two of marker'
                                                    className="border rounded-[10px] p-3 font-[poppins]"
                                                />
                                                <div className="flex">
                                                    <div className="w-[20px] mt-[5px]">
                                                        <Image width={1000} height={1000} src="https://smellmeloveme.shop/wp-content/uploads/2024/01/svgexport-17-2023-11-29T150407.298-1.png" alt="" />
                                                    </div>
                                                    <div className="font-[poppins] text-[#62585D] text-[14px] font-[400] tracking-[0.25px] leading-[26px] text-darkslategray text-left">
                                                        The name will be displayed on the Legacy Marker Plaque and there will also be generated <br />a new QR code and a Plaue number.
                                                    </div>
                                                </div>
                                                <div className='text-left mt-[20px]'>
                                                    <label htmlFor="file-upload" className="cursor-pointer rounded-[34px] bg-[#38589C] w-[237px] h-14 py-[13px] px-5 text-base font-[poppins] text-[white]">
                                                        Upload Picture
                                                    </label>
                                                    <input id="file-upload" type="file" className="hidden" />
                                                </div>
                                            </div>
                                            <Link to="/Gift">
                                                <button type="button" className="rounded-[34px] w-[137px] sm:w-[237px] md:w-[237px] lg:w-[237px] xl:w-[237px] h-14 mt-[80px] mr-[10px] py-[13px] px-5  text-base tracking-[2px] font-[poppins] border text-[black]">
                                                    Prev
                                                </button>
                                            </Link>
                                            <button type="button" onClick={nextStep} className="rounded-[34px] bg-[#38589C] w-[137px] sm:w-[237px]  md:w-[237px]  lg:w-[237px]  xl:w-[237px] h-14 mt-[30px] sm:mt-[80px] md:mt-[80px] lg:mt-[80px] xl:mt-[80px] py-[13px] px-5 text-base tracking-[2px] font-[poppins] text-[white]">
                                                Next
                                            </button>
                                        </div>
                                        <div className=''>
                                            <Image width={300} height={500} src="https://smellmeloveme.shop/wp-content/uploads/2024/01/Frame-2115-1.png" alt="" />
                                        </div>
                                    </div>
                                )}

                                {step === 2 && (
                                    <div className='flex flex-col sm:flex-row md:flex-col lg:flex-row xl:flex-row gap-[30px] items-center'>
                                        <div className="">
                                            <h2 className="font-[poppins] text-2xl font-bold mb-4 text-left">Shipping</h2>
                                            {/* <label htmlFor="name">Name:</label> */}
                                            <div className="flex flex-col gap-[20px]">
                                                <input
                                                    type="text"
                                                    id="R_name"
                                                    name="R_name"
                                                    placeholder='Recipient Name'
                                                    className="border rounded-[10px] p-3 font-[poppins]"
                                                />
                                                <input
                                                    type="text"
                                                    id="S_address"
                                                    name="S_address"
                                                    placeholder='Street Address'
                                                    className="border rounded-[10px] p-3 font-[poppins]"
                                                />
                                                <input
                                                    type="text"
                                                    id="Apartment"
                                                    name="Apartment"
                                                    placeholder='Apartment'
                                                    className="border rounded-[10px] p-3 font-[poppins]"
                                                />
                                                <input
                                                    type="text"
                                                    id="City"
                                                    name="City"
                                                    placeholder='City'
                                                    className="border rounded-[10px] p-3 font-[poppins]"
                                                />
                                                <input
                                                    type="text"
                                                    id="State"
                                                    name="State"
                                                    placeholder='State'
                                                    className="border rounded-[10px] p-3 font-[poppins]"
                                                />
                                                <input
                                                    type="text"
                                                    id="Zip Code"
                                                    name="Zip Code"
                                                    placeholder='Zip Code'
                                                    className="border rounded-[10px] p-3 font-[poppins]"
                                                />
                                            </div>
                                            <button type="button" onClick={prevStep} className="rounded-[34px] w-[137px] sm:w-[237px] md:w-[237px] lg:w-[237px] xl:w-[237px] h-14 mt-[80px] mr-[10px] py-[13px] px-5  text-base tracking-[2px] font-[poppins] border text-[black]">
                                                Prev
                                            </button>
                                            <Link to="/checkout">
                                                <button type="button" className="rounded-[34px] bg-[#38589C] w-[137px] sm:w-[237px]  md:w-[237px]  lg:w-[237px]  xl:w-[237px] h-14 mt-[30px] sm:mt-[80px] md:mt-[80px] lg:mt-[80px] xl:mt-[80px] py-[13px] px-5 text-base tracking-[2px] font-[poppins] text-[white]">
                                                    Next
                                                </button></Link>
                                        </div>
                                        <div className=''>
                                            <Image width={300} height={500} src="https://smellmeloveme.shop/wp-content/uploads/2024/01/Frame-2115-1.png" alt="" />
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

export default Legacyplaque;