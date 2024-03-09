"use client"
import { color } from 'framer-motion';
import { useState } from 'react';
// import  Link  from 'next/link';
import Image from 'next/image'



const Checkout = () => {
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
                            <b className="relative leading-[59.5px] font_custom">Checkout</b>
                        </div>
                        <div className="w-full shadow-lg bg-white px-[30px] py-[30px] sm:p-[50px] md:p-[50px] lg:p-[50px] xl:p-[50px] rounded-[50px]">
                            <form className="space-y-6">
                                {step === 1 && (
                                    <div className='container flex flex-col sm:flex-row md:flex-col lg:flex-row xl:flex-row gap-[30px] items-center'>
                                        <div className="">
                                            <h2 className="font-[poppins] text-2xl font-bold mb-4 text-left">Purchase Information</h2>
                                            <div className="flex flex-col justify-center items-center">
                                                <div className="w-[330px] sm:w-[500px] md:w-[500px] lg:w-[500px] xl:w-[500px]">
                                                    <div className="bg-[#EEF4FD] p-5 rounded-[20px] flex justify-between mb-4">
                                                        <div className="flex items-center">
                                                            <Image src="https://smellmeloveme.shop/wp-content/uploads/2023/12/Frame-2024.png" alt="Product Image" width={50} height={0} className="mr-[5px] w-[50px]" />
                                                            <div>
                                                                <h2 className="font-[poppins] text-[#4C4448] text-[20px] font-bold">LegacyMarker PLapue</h2>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <span className="font-[poppins] text-[#858588] font-bold">$19.99</span>
                                                        </div>
                                                    </div>
                                                    <div className="mx-4 my-4">
                                                        <div className="flex justify-between items-center">
                                                            <span className="font-[poppins] text-[#858588] font-bold">Subtotal:</span>
                                                            <span className="font-[poppins] text-[#858588] font-bold">$19.99</span>
                                                        </div>
                                                        <div className="flex justify-between items-center mt-4">
                                                            <span className='font-[poppins] text-[#858588]'>Taxes:</span>
                                                            <span className='font-[poppins] text-[#858588]'>$1.00</span>
                                                        </div>
                                                        <div className="my-4">
                                                            <div className="flex justify-between items-center">
                                                                <span className="font-[poppins] text-[#858588] font-bold">Total:</span>
                                                                <span className="font-[poppins] text-[#858588] font-bold">$20.99</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex justify-between'>
                                                <h2 className="inline font-[poppins] text-[#38589C] text-[40px] font-bold mt-[30px] sm:mt-[40px] md:mt-[40px] lg:mt-[40px] xl:mt-[40px]">$20.100</h2>
                                                <button type="button" onClick={nextStep} className="rounded-[34px] bg-[#38589C] w-[137px] sm:w-[137px] md:w-[137px] lg:w-[137px] xl:w-[137px] h-14 mt-[30px] sm:mt-[40px] md:mt-[40px] lg:mt-[40px] xl:mt-[40px] py-[13px] px-5 text-base tracking-[2px] font-[poppins] text-[white]">
                                                    Pay
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                )}

                                {step === 2 && (
                                    <section className="antialiased text-gray-600 p-4">
                                        {/* <!-- Pay component --> */}
                                        <div>
                                            <div className="relative">
                                                <h2 className="font-[poppins] text-2xl font-bold mb-4 text-left">Payment</h2>
                                                {/* <!-- Card form --> */}
                                                <div className="mt-[40px] card">
                                                    <div className="space-y-4">
                                                        {/* <!-- Card Number --> */}
                                                        <div>
                                                            <label className="block text-sm font-[poppins] font-medium mb-1 text-left" htmlFor="card-nr">Card Number <span className="text-red-500">*</span></label>
                                                            <input id="card-nr" className="font-[poppins] border rounded-[10px] p-3 font-[poppins] w-full" type="text" placeholder="1234 1234 1234 1234" />
                                                        </div>
                                                        {/* <!-- Expiry and CVC --> */}
                                                        <div className="flex space-x-4">
                                                            <div className="flex-1">
                                                                <label className="block text-sm font-[poppins] font-medium mb-1 text-left" htmlFor="card-expiry">Expiration Date <span className="text-red-500">*</span></label>
                                                                <input id="card-expiry" className="font-[poppins] border rounded-[10px] p-3 font-[poppins] w-full" type="text" placeholder="MM/YY" />
                                                            </div>
                                                            <div className="flex-1">
                                                                <label className="block text-sm font-[poppins] font-medium mb-1 text-left" htmlFor="card-cvc">CVC <span className="text-red-500">*</span></label>
                                                                <input id="card-cvc" className="font-[poppins] border rounded-[10px] p-3 font-[poppins] w-full" type="text" placeholder="CVC" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- Form footer --> */}
                                                    <div className="mt-6">
                                                        <div className="mb-4">
                                                            <button className="font-[poppins] font-medium text-sm inline-flex items-center justify-center px-3 py-4 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out w-full bg-[#497FF3] hover:bg-[#38589C] text-white focus:outline-none focus-visible:ring-2">Pay $253.00</button>
                                                        </div>
                                                        <div className="text-xs text-gray-500 text-left">Your personal data will be used to process your order, support your experience throughout this website, and for<br /> other purposes described in our <a className='text-[#38589C] hover:underline' href="">privacy policy.</a></div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </section>
                                )}
                            </form>
                        </div >

                    </div >
                </div >
            </div >
        </>
    )
}

export default Checkout;