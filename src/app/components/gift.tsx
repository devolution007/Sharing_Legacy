"use client"
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from 'next/image'

const Gift = () => {
    const [isPlaqueChecked, setIsPlaqueChecked] = useState(false);
    const [isGiftCardChecked, setIsGiftCardChecked] = useState(false);

    const handlePlaqueCheckboxChange = () => {
        setIsPlaqueChecked(!isPlaqueChecked);
        setIsGiftCardChecked(false);
    };

    const handleGiftCardCheckboxChange = () => {
        setIsGiftCardChecked(!isGiftCardChecked);
        setIsPlaqueChecked(false);
    };

    return (
        <>
            <div className="bg-[url('https://smellmeloveme.shop/wp-content/uploads/2024/01/Frame-2097.png')] w-100 h-[50px] lg:h-[150px] md:h-[150px] sm:h-[150px] bg-cover bg-center bg-no-repeat"></div>
            <div className="relative pt-[80px] pb-[80px] bg-[aliceblue] left-[0px] flex flex-col items-start justify-end">
                <div className="w-full gift_section flex flex-col items-center justify-center text-center">
                    <div className="flex flex-col items-center justify-start gap-[56px]">
                        <div className="shrink-0 flex flex-col items-center justify-start gap-[36px]">
                            <b className="relative leading-[59.5px] inline-block font_custom">Select a Gift </b>
                        </div>
                        <div className="shrink-0 w-full flex flex-col sm:flex-row md:flex-col lg:flex-row xl:flex-row items-center justify-center gap-[32px] text-11xl text-blue-grey-800">
                            <div className="flex items-center">
                                <label htmlFor="myCheckbox" className="cursor-pointer">
                                    <div className="rounded-[50px] bg-[white] w-full sm:w-[585px] p-5 md:w-[585px] lg:w-[585px] xl:w-[585px] h-[500px] flex flex-col items-center justify-center">
                                        <input className="round"
                                            type="checkbox"
                                            id="myCheckbox"
                                            checked={isPlaqueChecked}
                                            onChange={handlePlaqueCheckboxChange}
                                        />
                                        <div className="flex flex-col items-center justify-start gap-[26px]">
                                            <div className="shrink-0 flex flex-col items-center justify-start gap-[32px]">
                                                <div className="shrink-0 flex flex-col items-center justify-start gap-[28px]">
                                                    <div className="shrink-0 flex flex-col items-center justify-start gap-[24px]">
                                                        <div className="font-[poppins] text-[50px] text-[#4C4448] relative leading-[36px] font-bold inline-block w-[397px]">
                                                            $99
                                                        </div>
                                                        <div className="text_base_subhead relative leading-[36px] font-semibold inline-block w-[397px]">
                                                            LegacyMarker Plaque
                                                        </div>
                                                        <div
                                                            className="text_mini_subhead relative text-lg leading-[26px] font-medium text-blue-grey-700 inline-block w-[398px] sm:w-[472px] md:w-[472px] lg:w-[472px] xl:w-[472px]">
                                                            A physical Stainless steel plaque will be shipped to
                                                            the recipient. A perfect gift in lieu of flowers.
                                                        </div>
                                                    </div>
                                                    <div className="relative text-sm leading-[20px] text-blue-grey-600 inline-block w-[346px] sm:w-[521px] md:w-[521px] lg:w-[521px] xl:w-[521px]">
                                                        <ul className="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                                                            <li className="text_mini_desc">
                                                                Requires recipients name, address and email address
                                                            </li>
                                                            <li className="text_mini_desc">
                                                                Recommend a photo to upload to the profile.
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </label>
                            </div>


                            <div className="flex items-center">
                                <label htmlFor="myCheckbox2" className="cursor-pointer">
                                    <div className="rounded-[50px] relative bg-[white] w-full sm:w-[585px] md:w-[585px] lg:w-[585px] xl:w-[585px] h-[500px] flex flex-col items-center justify-center">
                                        <input
                                            className="round1"
                                            type="checkbox"
                                            id="myCheckbox2"
                                            checked={isGiftCardChecked}
                                            onChange={handleGiftCardCheckboxChange}
                                        />
                                        <div className="flex flex-col items-center justify-start gap-[26px]">
                                            <div className="shrink-0 flex flex-col items-center justify-start gap-[32px]">
                                                <div className="shrink-0 flex flex-col items-center justify-start gap-[28px]">
                                                    <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
                                                        <div className="font-[poppins] text-[50px] text-[#4C4448] relative leading-[36px] font-bold inline-block w-[397px]">
                                                            $89
                                                        </div>
                                                        <div className="text_base_subhead relative leading-[36px] font-semibold inline-block w-[397px]">
                                                            LegacyMarker Gift Card
                                                        </div>
                                                        <div
                                                            className="text_mini_subhead relative text-lg leading-[26px] font-medium text-blue-grey-700 inline-block w-[398px] sm:w-[472px] md:w-[472px] lg:w-[472px] xl:w-[472px]">
                                                            You will be emailed a code that you can gift to a
                                                            friend. The code will cover the cost of a LagacyMarker
                                                            Plaque.
                                                        </div>
                                                    </div>
                                                    <div className="relative text-sm leading-[20px] text-blue-grey-600 inline-block w-[346px] sm:w-[521px] md:w-[521px] lg:w-[521px] xl:w-[521px]">
                                                        <ul className="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                                                            <li className="text_mini_desc">
                                                                Does not require recipients any information.
                                                            </li>
                                                            <li className="text_mini_desc">
                                                                Recommend a photo to upload to the profile.                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </div>

                        <Link to={isPlaqueChecked ? '/Legacyplaque' : isGiftCardChecked ? '/LegacyGift' : '/'}>
                            <div className="rounded-[34px] bg-[#38589C] w-[237px] h-14 flex flex-row items-center justify-center py-[13px] px-5 box-border text-base text-[white]">
                                Next
                            </div>
                        </Link>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Gift;