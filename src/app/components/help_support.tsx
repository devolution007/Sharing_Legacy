"use client"
import Image from 'next/image'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


const Helpsupport = () => {
    return (
        <>
            {/* <Image
                width={1000}
                height={0}
                className='img_gift'
                src="https://smellmeloveme.shop/wp-content/uploads/2024/01/Frame-2097-2.png"
                alt=""
            /> */}
            <div className="bg-[url('https://smellmeloveme.shop/wp-content/uploads/2024/01/Frame-2097-2.png')] w-100 h-[50px] lg:h-[150px] md:h-[150px] sm:h-[150px] bg-cover bg-center bg-no-repeat"></div>
            <div className="relative pt-[50px] pb-[80px] flex flex-col items-center justify-end">
                <div className="container mx-auto flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center justify-start gap-[20px]">
                        <div className="shrink-0 flex flex-col">
                            <Image
                                width={1000}
                                height={0}
                                className='img_gift'
                                src="https://smellmeloveme.shop/wp-content/uploads/2024/01/Vector-25.png"
                                alt=""
                            />
                            <b className="relative lg:text-[48px] md:text-[40px] sm:text-[35px] text-[30px] text-[#38589C] text-center font-[poppins] font-bold">Frequently asked Questions</b>
                        </div>
                        <div className="relative text-center text-lg tracking-[0.25px] leading-[35px] text-darkslategray text-center flex w-[100%] lg:w-[1200px] md:w-[700px] sm:w-[300px] lg:items-center sm:align-items:start sm:align-itmes:start md justify-center shrink-0 text-[18px] lg:text-[22px] md:text-[22px] sm:text-[20px] text-[#333333] font-[poppins] mx-[20px]">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit placerat mi, blandit habitant duis vel id et natoque congue in, augue fermentum cubilia fusce laoreet suscipit iaculis torquent. Penatibus at hac bibendum vitae mauris laoreet.
                        </div>
                    </div>
                    <div className="w-full mx-auto p-[30px] flex items-center justify-center text-oscuro">
                        <div className="flex flex-col w-[935px]">
                            <div>
                                <div className="relative mb-4 rounded-[30px] p-[30px] bg-[#F6F8FB]">
                                    <input type="checkbox" id="toggle1" className="toggle hidden" />
                                    <label className="title text_base_subhead  bg-[#F6F8FB] block font-bold p-4 cursor-pointer" htmlFor="toggle1">
                                        What is gift cards?
                                    </label>
                                    <div className="content  overflow-hidden">
                                        <p className="p-4 text_mini_desc">The average monthly cost for a gym in the UK is about £40. The price really depends if you are looking for a budget gym or a premium gym. The price also varies if you decide to have a membership which allows you to use one gym or multiple gyms.</p>
                                    </div>
                                </div>
                                <div className="relative mb-4 rounded-[30px] p-[30px] bg-[#F6F8FB]">
                                    <input type="checkbox" id="toggle2" className="toggle hidden" />
                                    <label className="title text_base_subhead  bg-[#F6F8FB] block font-bold p-4 cursor-pointer" htmlFor="toggle2">
                                        What is gift cards?
                                    </label>
                                    <div className="content overflow-hidden">
                                        <p className="p-4 text_mini_desc">The average monthly cost for a gym in the UK is about £40. The price really depends if you are looking for a budget gym or a premium gym. The price also varies if you decide to have a membership which allows you to use one gym or multiple gyms.</p>
                                    </div>
                                </div>
                                <div className="relative mb-4 rounded-[30px] p-[30px] bg-[#F6F8FB]">
                                    <input type="checkbox" id="toggle3" className="toggle hidden" />
                                    <label className="title text_base_subhead  bg-[#F6F8FB] block font-bold p-4 cursor-pointer" htmlFor="toggle3">
                                        What is gift cards?
                                    </label>
                                    <div className="content  overflow-hidden">
                                        <p className="p-4 text_mini_desc">The average monthly cost for a gym in the UK is about £40. The price really depends if you are looking for a budget gym or a premium gym. The price also varies if you decide to have a membership which allows you to use one gym or multiple gyms.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto bg-[white] my-[80px]">
                <p className="lg:text-[48px] md:text-[40px] sm:text-[35px] text-[30px] text-[#38589C] font-[poppins] font-bold text-center">Affiliate Links</p>
                <div className="relative py-[50px] text-lg tracking-[0.25px] leading-[35px] text-darkslategray text-center flex jusify-center lg:items-center sm:align-items:start sm:align-itmes:start md justify-center shrink-0 text-[18px] lg:text-[22px] md:text-[22px] sm:text-[20px] text-[#333333] font-[poppins] mx-[20px]">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit placerat mi, blandit habitant duis vel id et natoque congue in, augue fermentum cubilia fusce laoreet suscipit iaculis torquent. Penatibus at hac bibendum vitae mauris laoreet.
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* <!-- First Column --> */}
                    <div className="p-4 shadow-xl rounded-[20px]">
                        <div className="flex justify-center">
                            <Image
                                width={80}
                                height={0}
                                className='text-center'
                                src="https://smellmeloveme.shop/wp-content/uploads/2024/01/icon_28_11_19_1574915879.png.png"
                                alt=""
                            />
                        </div>
                        <div className="newof">
                            <h3 className='text-center mt-[20px] lg:text-[30px] md:text-[30px] sm:text-[20px] text-[20px] text-[#3A3A3A] font-[poppins] font-bold'>LegacyBox</h3>
                            <p className='text-[20px] text-center font-[poppins] text-[#9D9D9D]'>Digitize your film, tapes and <br></br>photos.</p>
                        </div>
                    </div>
                    {/* <!-- Second Column --> */}
                    <div className="p-4 shadow-xl rounded-[20px]">
                        <div className="flex justify-center">
                            <Image
                                width={300}
                                height={0}
                                src="https://smellmeloveme.shop/wp-content/uploads/2024/01/icon_17_05_20_1589738634.png.png"
                                alt=""
                            />
                        </div>
                        <div className="newof">
                            <h3 className='text-center mt-[36px] lg:text-[30px] md:text-[30px] sm:text-[20px] text-[20px] text-[#3A3A3A] font-[poppins] font-bold'>File Converter</h3>
                            <p className='text-[20px] text-center font-[poppins] text-[#9D9D9D]'>Digitize your film, tapes and <br></br>
                                photes.</p>
                        </div>
                    </div>
                    {/* <!-- Third Column --> */}
                    <div className="p-4 shadow-xl rounded-[20px]">
                        <div className="flex justify-center">
                            <Image
                                width={100}
                                height={0}
                                src="https://smellmeloveme.shop/wp-content/uploads/2024/01/icon_21_05_20_1590034485.png.png"
                                alt=""
                            />
                        </div>
                        <div className="newof">
                            <h3 className='text-center mt-[36px] lg:text-[30px] md:tnpm install react-slickext-[30px] sm:text-[20px] text-[20px] text-[#3A3A3A] font-[poppins] font-bold'>How to Verify your
                                Account</h3>
                            <p className='text-[20px] text-center font-[poppins] text-[#9D9D9D]'>Digitize your film, tapes and<br></br>
                                photes.</p>
                        </div>
                    </div>
                    {/* <!-- Add more columns as needed --> */}
                </div>
                <div className="mt-[80px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 ">
                    {/* <!-- First Column --> */}
                    <div className="p-4 shadow-xl rounded-[20px]">
                        <div className="flex justify-center">
                            <Image
                                width={100}
                                height={0}
                                className='text-center'
                                src="https://smellmeloveme.shop/wp-content/uploads/2024/01/icon_16_06_20_1592281490.png.png"
                                alt=""
                            />
                        </div>
                        <div className="newof">
                            <h3 className='text-center mt-[20px] lg:text-[30px] md:text-[30px] sm:text-[20px] text-[20px] text-[#3A3A3A] font-[poppins] font-bold'>How to Order a
                                LegacyMarker</h3>
                            <p className='text-[20px] text-center font-[poppins] text-[#9D9D9D]'>Digitize your film, tapes and <br></br>photos.</p>
                        </div>
                    </div>
                    {/* <!-- Second Column --> */}
                    <div className="p-4 shadow-xl rounded-[20px]">
                        <div className="flex justify-center">
                            <Image
                                width={150}
                                height={0}
                                src="https://smellmeloveme.shop/wp-content/uploads/2024/01/icon_13_10_20_1602630204.png.png"
                                alt=""
                            />
                        </div>
                        <div className="newof">
                            <h3 className='text-center mt-[36px] lg:text-[30px] md:text-[30px] sm:text-[20px] text-[20px] text-[#3A3A3A] font-[poppins] font-bold'>Promotional Video</h3>
                            <p className='text-[20px] text-center font-[poppins] text-[#9D9D9D]'>Digitize your film, tapes and <br></br>
                                photes.</p>
                        </div>
                    </div>
                    {/* <!-- Add more columns as needed --> */}
                </div>
            </div>
            <div className="bg-[aliceblue] py-[80px]">
                <div className="container m-auto">
                    <p className="pb-[50px] lg:text-[48px] md:text-[40px] sm:text-[35px] text-[30px] text-[#38589C] font-[poppins] font-bold text-center">How-To Videos</p>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            // when window width is <= 425px
                            425: {
                                slidesPerView: 1,
                            },
                            // when window width is <= 768px
                            768: {
                                slidesPerView: 2,
                            },
                            // when window width is <= 1024px
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <Image
                                width={500}
                                height={300}
                                className='text-center'
                                src="https://smellmeloveme.shop/wp-content/uploads/2024/01/Frame-2089-1.png"
                                alt=""
                            />
                            <p className='text-[20px] text-center font-[poppins] text-[#333333]'>How to scan a QR code iPhone</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                width={500}
                                height={300}
                                className='text-center'
                                src="https://smellmeloveme.shop/wp-content/uploads/2024/01/Frame-2090.png"
                                alt=""
                            />
                            <p className='text-[20px] text-center font-[poppins] text-[#333333]'>How to Setup a Gmail Account</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                width={500}
                                height={300}
                                className='text-center'
                                src="https://smellmeloveme.shop/wp-content/uploads/2024/01/Frame-2089-2.png"
                                alt=""
                            />
                            <p className='text-[20px] text-center font-[poppins] text-[#333333]'>How to Share Video's with YouTube</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                width={500}
                                height={300}
                                className='text-center'
                                src="https://smellmeloveme.shop/wp-content/uploads/2024/01/Frame-2090-1.png"
                                alt=""
                            />
                            <p className='text-[20px] text-center font-[poppins] text-[#333333]'>How to Setup a Gmail Account</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                width={500}
                                height={300}
                                className='text-center'
                                src="https://smellmeloveme.shop/wp-content/uploads/2024/01/Frame-2089-1.png"
                                alt=""
                            />
                            <p className='text-[20px] text-center font-[poppins] text-[#333333]'>How to scan a QR code iPhone</p>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default Helpsupport;