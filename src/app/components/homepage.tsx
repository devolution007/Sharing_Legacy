"use client"
import Image from "next/image";


const Mainsection = () => {
    return (
        <>
            <div className="desktop_version relative bg-basic-white w-full  text-left text-29xl text-brand-primary font-lg-regular">
                <section className="flex items-center py-10 font-poppins">
                    <div className="justify-center flex-1 container py-4 mx-auto lg:py-6 md:px-6">
                        <div className="flex flex-wrap items-center">
                            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                                <div className="relative">
                                    <h1 className="pl-2 font-bold dark:text-black">
                                        LegacyMarker is a modern way of cherishing the memories of your loved ones
                                    </h1>
                                </div>
                                <div className="my-10 flex items-center">
                                    <a href="#"
                                        className="rounded-[34px] font-[poppins] bg-[#38589C] w-[237px] h-14 flex flex-row items-center justify-center py-[13px] px-5 box-border text-base text-[white] hover:opacity-75 shadow-md hover:bg-[#38589C] focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        Get Started
                                    </a>
                                    <Image width={50} height={50} alt="" src="https://smellmeloveme.shop/wp-content/uploads/2024/01/Group-1.png" className="newsideimg" />
                                    <p className="text_mini">Watch Video</p>
                                </div>
                            </div>
                            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                                <div className="relative">
                                    <Image width={1000} height={1000} src="https://smellmeloveme.shop/wp-content/uploads/2024/01/Group-1000000830-1.png" alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="relative h-[2310px]">
                        {/* <div
                            className="absolute top-[84px] left-[-84px] rounded-[50%] bg-darkslateblue-300 [filter:blur(572.5px)] w-[347px] h-[347px]">
                        </div>
                        <div
                            className="absolute top-[293px] left-[1307px] rounded-[50%] bg-darkslateblue-300 [filter:blur(572.5px)] w-[275px] h-[275px]">
                        </div>
                        <div
                            className="absolute top-[1267.5px] left-[1127px] rounded-[50%] bg-darkslateblue-300 [filter:blur(638.39px)] w-[436px] h-[436px]">
                        </div>
                        <div
                            className="absolute top-[1606px] left-[-178px] rounded-[50%] bg-darkslateblue-300 [filter:blur(572.5px)] w-[391px] h-[391px]">
                        </div> */}
                        <div
                            className="absolute top-[166px] lg:left-[calc(50%_-_608px)] sm:left-auto md:left-auto">
                            <div className="shrink-0 text-center flex flex-col lg:w-[1200px] sm:width-auto md:width-auto mib-16">
                                <b className="relative leading-[56px] font_custom mb-4">How it Started</b>
                                <div
                                    className="relative text-lg tracking-[0.25px] leading-[26px] text-darkslategray text-center flex lg:items-center sm:align-items:start sm:align-itmes:start md justify-center h-[105px] shrink-0 cutom_txt_style">
                                    During a family reunion in rural Kansas surrounded, I found
                                    myself in a cemetery, by unfamiliar headstones. This sparked an
                                    idea: what if each headstone could connect to a personal
                                    website, preserving and sharing the individual's unique legacy?
                                    That's how Legacy Marker came about.
                                </div>
                            </div>
                            <div className="shrink-0">
                                <div className="relative leading-[70px] font-semibold text-center font_custom mib-16">
                                    How it Works
                                </div>
                                <div className="relative container h-[1654.1px]">
                                    <Image width={1000} height={1000}
                                        src="https://smellmeloveme.shop/wp-content/uploads/2023/12/Vector-2.png"
                                        className="absolute top-[212px] left-[202.2px] w-[686.9px] h-[1325px] object-cover"
                                        alt=""
                                    />

                                    <div className="absolute top-[0px] left-[0px] w-[1193px] h-[472.9px]">
                                        <div className="absolute top-[0px] left-[0px] w-[495.1px] h-[472.9px]">
                                            <Image width={1000} height={1000}
                                                src="https://smellmeloveme.shop/wp-content/uploads/2023/12/Vector.png"
                                                className="absolute top-[306px] left-[0px] w-[217.7px] h-[166.9px] object-cover"
                                                alt=""
                                            />
                                            <div className="absolute top-[0px] left-[80.3px] w-[414.8px] h-[406.7px]">
                                                <Image width={1000} height={1000}
                                                    src="https://smellmeloveme.shop/wp-content/uploads/2023/12/Rectangle-4312.png"
                                                    className="absolute top-[49.9px] left-[0px] rounded-[16.36px] w-[366.6px] h-[356.8px] object-contain"
                                                    alt=""
                                                />

                                                <Image width={1000} height={1000}
                                                    src="https://smellmeloveme.shop/wp-content/uploads/2023/12/hw_image_21_01_20_1579617945.jpeg.png"
                                                    className="absolute top-[0px] left-[212.7px] rounded-[12.27px] w-[202.1px] h-[160.4px] overflow-hidden object-cover"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div className="absolute lg:top-[33px] lg:left-[633px] md:left-[33px] md:top-[521px] sm:top-[521px] sm:left-[33px] flex flex-col items-start justify-start gap-[32px]">
                                            <div className="shrink-0 flex flex-col items-start justify-start gap-[28px]">
                                                <b className="relative leading-[45.96px] font_custom">Register</b>
                                                <div
                                                    className="relative text_base tracking-[0.25px] leading-[30px] text-darkslategray flex items-center w-[560px]">
                                                    After creating your account and verifying your email
                                                    address, you're ready to create your first LegacyMarker.
                                                    You can add an unlimited number of markers to your
                                                    account. Each LegacyMarker created has a unique QR code
                                                    that will be engraved on a metal plaque. This code links
                                                    to your loved one's memorial site that you create with
                                                    our easy to use web application.
                                                </div>
                                            </div>
                                            <div
                                                className="rounded-34xl bg-brand-primary w-[210px] h-14 flex flex-row items-center justify-center box-border text-center text-base text-basic-white">
                                                <div className="relative tracking-[-0.01em]">
                                                    <a href="#"
                                                        className="font-[poppins] rounded-[34px] bg-[#38589C] w-[237px] h-14 flex flex-row items-center justify-center py-[13px] px-5 box-border text-base text-[white] hover:opacity-75 shadow-md hover:bg-[#38589C] focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                        Register Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute top-[532px] left-[73px] w-[1142px] h-[462.2px]">
                                        <div
                                            className="absolute top-[81px] left-[0px] flex flex-col items-start justify-start gap-[32px]">
                                            <div className="shrink-0 flex flex-col items-start justify-start gap-[28px]">
                                                <b className="relative leading-[45.96px] font_custom">Add Details</b>
                                                <div
                                                    className="relative text_base tracking-[0.25px] leading-[30px] text-darkslategray flex items-center w-[560px]">
                                                    LegacyMarker will provide you the tools to build a
                                                    timeline, create a biography, upload photos, link to
                                                    online videos and web pages. People that visit the
                                                    online memorial will be able to sign a guestbook or
                                                    share a story about the loved one. You can now enhance
                                                    your physical memorial with an electronic one that
                                                    provides so much more information than a stone can.
                                                </div>
                                            </div>
                                            <div
                                                className="rounded-34xl bg-brand-primary w-[210px] h-14 flex flex-row items-center justify-center box-border text-center text-base text-basic-white">
                                                <div className="relative tracking-[-0.01em]">
                                                    <a href="#"
                                                        className="font-[poppins] rounded-[34px] bg-[#38589C] w-[237px] h-14 flex flex-row items-center justify-center py-[13px] px-5 box-border text-base text-[white] hover:opacity-75 shadow-md hover:bg-[#38589C] focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                        Get Started
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute top-[0px] left-[647px] w-[495px] h-[462.2px]">
                                            <Image width={1000} height={1000}
                                                src="https://smellmeloveme.shop/wp-content/uploads/2023/12/Vector.png"
                                                alt=""
                                                className="absolute top-[0px] left-[276.3px] w-[218.7px] h-[167.7px] object-cover"
                                            />

                                            <div className="absolute top-[56.8px] left-[0px] w-[414.7px] h-[405.4px]">
                                                <Image width={1000} height={1000}
                                                    src="https://smellmeloveme.shop/wp-content/uploads/2023/12/Rectangle-4312.png"
                                                    alt=""
                                                    className="absolute top-[0px] left-[46.3px] rounded-[16.45px] w-[368.4px] h-[358.5px] object-contain"
                                                />

                                                <Image width={1000} height={1000}
                                                    src="https://smellmeloveme.shop/wp-content/uploads/2023/12/hw_image_21_01_20_1579617945.jpeg.png"
                                                    alt=""
                                                    className="absolute top-[244.2px] left-[0px] rounded-[12.33px] w-[203.1px] h-[161.2px] overflow-hidden object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute top-[1181.1px] left-[0px] w-[1186px] h-[472.9px]">
                                        <div className="absolute top-[0px] left-[0px] w-[495.1px] h-[472.9px]">
                                            <Image width={1000} height={1000}
                                                src="https://smellmeloveme.shop/wp-content/uploads/2023/12/Vector.png"
                                                alt=""
                                                className="absolute top-[306px] left-[0px] w-[217.7px] h-[166.9px] object-cover"
                                            />
                                            <div className="absolute top-[0px] left-[80.3px] w-[414.8px] h-[406.7px]">
                                                <Image width={1000} height={1000}
                                                    src="https://smellmeloveme.shop/wp-content/uploads/2023/12/Rectangle-4312.png"
                                                    alt=""
                                                    className="absolute top-[49.9px] left-[0px] rounded-[16.36px] w-[366.6px] h-[356.8px] object-contain"
                                                />

                                                <Image width={1000} height={1000}
                                                    className="absolute top-[0px] left-[212.7px] rounded-[12.27px] w-[202.1px] h-[160.4px] overflow-hidden object-cover"
                                                    alt=""
                                                    src="https://smellmeloveme.shop/wp-content/uploads/2023/12/hw_image_21_01_20_1579617945.jpeg.png"
                                                />
                                            </div>
                                        </div>
                                        <div
                                            className="absolute top-[49.9px] left-[626px] flex flex-col items-start justify-start gap-[32px]">
                                            <div className="shrink-0 flex flex-col items-start justify-start gap-[28px]">
                                                <b className="relative leading-[45.96px] font_custom">Scan Code</b>
                                                <div
                                                    className="relative text_base tracking-[0.25px] leading-[30px] text-darkslategray flex items-center w-[560px]">
                                                    A LegacyMarker is a stainless steel plaque that
                                                    references your memorial website through its QR code.
                                                    Visitors of the memorial can scan the QR code with a
                                                    smartphone to relive or learn about the Legacy of the
                                                    loved one. Don't worry if you are unable to visit the
                                                    physical memorial. All LegacyMarkers can be searched
                                                    anytime by name or marker number at LegacyMarker.com.
                                                </div>
                                            </div>
                                            <div
                                                className="rounded-34xl bg-brand-primary w-[200px] h-14 flex flex-row items-center justify-center box-border text-center text-base text-basic-white">
                                                <div className="relative tracking-[-0.01em]">
                                                    <a href="#"
                                                        className="font-[poppins] rounded-[34px] bg-[#38589C] w-[237px] h-14 flex flex-row items-center justify-center py-[13px] px-5 box-border text-base text-[white] hover:opacity-75 shadow-md hover:bg-[#38589C] focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                        Get Started
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="absolute top-[937px] left-[1178px] rounded-[50%] bg-darkslateblue-200 w-[370px] h-[370px]">
                            <Image width={1000} height={1000}
                                src="https://smellmeloveme.shop/wp-content/uploads/2023/12/Vector-2.png"
                                alt=""
                                className="absolute top-[12px] left-[191px] w-[158px] h-[202.1px] object-contain"
                            />
                        </div> */}
                        <div className="absolute top-[1633px] left-[-196px] rounded-[50%] bg-darkslateblue-200 w-[370px] h-[370px]">
                            <Image width={1000} height={1000}
                                src="https://smellmeloveme.shop/wp-content/uploads/2023/12/Vector-2.png"
                                alt=""
                                className="absolute top-[0px] left-[1126px] w-[158px] h-[202.1px] object-contain"
                            />
                        </div>
                    </div>
                </section>
                <section>
                    <div className="relative mt-[100px] bg-[aliceblue] left-[0px] flex flex-col items-start justify-end">
                        <div className="gift_section h-[829px] flex flex-col items-center justify-center text-center">
                            <div className="flex flex-col items-center justify-start gap-[56px]">
                                <div className="shrink-0 flex flex-col items-center justify-start gap-[36px]">
                                    <b className="relative leading-[59.5px] inline-block w-[840px] font_custom">Give a gift that will last a lifetime</b>
                                    <div
                                        className="relative text_base text-lg tracking-[0.25px] leading-[26px] text-darkslategray flex items-center justify-center w-[782px]">
                                        Flowers are nice but they will be gone in a week. We have two
                                        gift options that will be sure to stand out and help someone
                                        through the morning process.
                                    </div>
                                </div>
                                <div className="shrink-0 flex flex-row items-start justify-start gap-[32px] text-11xl text-blue-grey-800">
                                    <div className="rounded-[50px] bg-[white] w-[585px] h-[500px] flex flex-col items-center justify-center">
                                        <div className="flex flex-col items-center justify-start gap-[26px]">
                                            <Image width={1000} height={1000} className="relative w-16 h-16 object-cover" alt="" src="https://smellmeloveme.shop/wp-content/uploads/2023/12/Frame-2024.png" />

                                            <div className="shrink-0 flex flex-col items-center justify-start gap-[32px]">
                                                <div className="shrink-0 flex flex-col items-center justify-start gap-[28px]">
                                                    <div className="shrink-0 flex flex-col items-center justify-start gap-[24px]">
                                                        <div className="text_base_subhead relative leading-[36px] font-semibold inline-block w-[397px]">
                                                            LegacyMarker Plaque
                                                        </div>
                                                        <div
                                                            className="text_mini_subhead relative text-lg leading-[26px] font-medium text-blue-grey-700 inline-block w-[472px]">
                                                            A physical Stainless steel plaque will be shipped to
                                                            the recipient. A perfect gift in lieu of flowers.
                                                        </div>
                                                    </div>
                                                    <div className="relative text-sm leading-[20px] text-blue-grey-600 inline-block w-[521px]">
                                                        <p className="m-0 text_mini_desc">
                                                            You give the name and picture for the Legacy Marker.
                                                            We engrave them, along with a unique QR code, on aOrder
                                                            stainless steel plaque linked to their personal site.
                                                            Recipients can connect it to their account and
                                                        </p>
                                                        <p className="m-0">complete their profile.</p>
                                                    </div>
                                                </div>
                                                <div className="">
                                                    <a href="#" className="relative tracking-[-0.01em] font-semibold">
                                                        <div className="font-[poppins] rounded-[34px] bg-[#38589C] w-[237px] h-14 flex flex-row items-center justify-center py-[13px] px-5 box-border text-base text-[white] hover:opacity-75 shadow-md hover:bg-[#38589C] focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                            Order Plaque Now
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-[50px] relative bg-[white] w-[585px] h-[500px] flex flex-col items-center justify-center">
                                        <div className="flex flex-col items-center justify-start gap-[26px]">
                                            <Image width={1000} height={1000} className="relative w-16 h-16 object-cover" alt="" src="https://smellmeloveme.shop/wp-content/uploads/2023/12/Frame-2024-1.png" />
                                            <div className="shrink-0 flex flex-col items-center justify-start gap-[32px]">
                                                <div className="shrink-0 flex flex-col items-center justify-start gap-[28px]">
                                                    <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
                                                        <div className="text_base_subhead relative leading-[36px] font-semibold inline-block w-[397px]">
                                                            LegacyMarker Gift Card
                                                        </div>
                                                        <div
                                                            className="text_mini_subhead self-stretch relative text-lg leading-[26px] font-medium text-blue-grey-700 whitespace-pre-wrap">
                                                            You will be emailed a code that you can gift to a
                                                            friend. The code will cover the cost of a LagacyMarker
                                                            Plaque.
                                                        </div>
                                                    </div>
                                                    <div className="relative text-sm leading-[20px] text-blue-grey-600 inline-block w-[521px]">
                                                        <p className="m-0 text_mini_desc">
                                                            You give the name and picture for the Legacy Marker.
                                                            We engrave them, along with a unique QR code, on a
                                                            stainless steel plaque linked to their personal site.
                                                            Recipients can connect it to their account and
                                                        </p>
                                                        <p className="m-0">complete their profile.</p>
                                                    </div>
                                                </div>
                                                <a href="#" className="relative tracking-[-0.01em] font-semibold">
                                                    <div className="font-[poppins] rounded-[34px] bg-[#38589C] w-[237px] h-14 flex flex-row items-center justify-center py-[13px] px-5 box-border text-base text-[white] hover:opacity-75 shadow-md hover:bg-[#38589C] focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                        Order Gift Card Now
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="dedicated_webpage">
                    <div className="dedicated_webpage relative w-full h-[958px] text-[52px]">
                        <div className="absolute bg-[aliceblue] top-[0px] right-[0px] w-[579px] h-[549px]"></div>
                        <div className="absolute bg-[aliceblue] bottom-[0px] left-[0px] w-[579px] h-[549px]"></div>
                        {/* <Image width={1000} height={1000} className="absolute top-[0px] right-[0px] w-[579px] h-[549px] object-cover" alt=""
                            src="/public/rectangle-4314@2x.png" /> */}

                        {/* <Image width={1000} height={1000} className="absolute bottom-[0px] left-[0px] w-[579px] h-[549px] object-contain" alt=""
                            src="/public/rectangle-4316@2x.png" /> */}

                        <div className="absolute top-[calc(50%_-_359px)] left-[calc(50%_-_720px)] w-[1440px] h-[718px]">
                            <div
                                className="absolute top-[65px] left-[1243px] rounded-[50%] bg-darkslateblue-300 [filter:blur(439.9px)] w-[286px] h-[286px]">
                            </div>
                            <div className="absolute top-[52px] left-[75px] w-[523px] h-[614.6px]">
                                <Image width={1000} height={1000} className="absolute top-[56.3px] left-[78.3px] rounded-[15.58px] w-[390.6px] h-[494.3px] object-cover"
                                    alt="" src="https://smellmeloveme.shop/wp-content/uploads/2023/12/Rectangle-3480.png" />

                                <Image width={1000} height={1000} className="absolute top-[0px] left-[312.3px] rounded-[15.58px] w-[210.7px] h-[233.9px] object-cover" alt=""
                                    src="https://smellmeloveme.shop/wp-content/uploads/2023/12/Rectangle-3481.png" />

                                <Image width={1000} height={1000} className="absolute top-[339.8px] left-[0px] rounded-[15.58px] w-[235.5px] h-[274.8px] object-cover" alt=""
                                    src="https://smellmeloveme.shop/wp-content/uploads/2023/12/Rectangle-3482.png" />
                            </div>
                            <div className="absolute top-[calc(50%_-_239px)] left-[702px] flex flex-col items-start justify-start gap-[56px]">
                                <div className="shrink-0 flex flex-col items-start justify-start gap-[54px]">
                                    <b className="relative leading-[64.55px] font_custom">LegacyMarker</b>
                                    <div className="relative text-5xl leading-[42px] flex items-center w-[677px]">
                                        <span className="w-full">
                                            <p className="m-0 cutom_txt_style">
                                                A LegacyMarker is a dedicated webpage to a loved one.
                                                Anyone can view the LegacyMarker by scanning the dedicated
                                                QR code with there smart phone. You can also find a
                                                LegacyMarker by searching the name or number on our
                                                website.
                                            </p>
                                            <p className="m-0 cutom_txt_style">
                                                LegacyMarkers preserve there memory which is easy to
                                                revisit or be introduced to them for the first time.
                                            </p>
                                        </span>
                                    </div>
                                </div>
                                <a href="#" className="relative tracking-[-0.01em] font-semibold">
                                    <div className="font-[poppins] rounded-[34px] bg-[#38589C] w-[237px] h-14 flex flex-row items-center justify-center py-[13px] px-5 box-border text-base text-[white]">
                                        Lean More
                                    </div>
                                </a>
                                {/* <div
                                    className="rounded-40xl bg-brand-primary w-[220px] h-[62px] flex flex-row items-center justify-center py-[14.359164237976074px] px-[22.091022491455078px] box-border text-center text-xl text-basic-white">
                                    <div className="relative tracking-[-0.01em] font-medium">
                                        Lean More
                                    </div>
                                </div> */}
                            </div>
                            <Image width={1000} height={1000} className="absolute top-[14px] left-[1257px] w-[128.7px] h-[102.4px] object-contain" alt=""
                                src="https://smellmeloveme.shop/wp-content/uploads/2023/12/Vector-8-1-1.png" />

                            <Image width={1000} height={1000} className="absolute top-[602px] left-[605px] w-[128.7px] h-[102.4px] object-contain" alt=""
                                src="https://smellmeloveme.shop/wp-content/uploads/2023/12/Vector-9-1-1.png" />
                        </div>
                    </div>
                </section>
                <section>
                    <div className="Personalized Memorial Website relative bg-[aliceblue] w-full h-[1142px] flex flex-col items-center justify-center py-0 px-[79.0335693359375px] box-border text-blue-grey-900">
                        <div className="relative w-[1243px] h-[712px]">
                            <div className="absolute top-[122px] left-[656px] w-[587px] h-[545.3px]">
                                <Image width={1000} height={1000} className="absolute top-[0px] left-[176.2px] rounded-[19px] w-[410.7px] h-[545.3px] object-cover" alt=""
                                    src="https://smellmeloveme.shop/wp-content/uploads/2023/12/Rectangle-579.png" />

                                <Image width={1000} height={1000} className="absolute top-[70.1px] left-[0px] rounded-[9px] w-[312.6px] h-[365.5px] object-contain" alt=""
                                    src="https://smellmeloveme.shop/wp-content/uploads/2023/12/Rectangle-580.png" />
                            </div>
                            <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start gap-[53px]">
                                <div className="shrink-0 flex flex-col justify-start gap-[56px]">
                                    <div className="relative leading-[65.5px] font-semibold inline-block w-[839px]">
                                        <p className="m-0 default_new_font">Personalized Memorial Website</p>
                                        <p className="m-0 default_new_font">& Custom QR Code Plaque Engraving</p>
                                    </div>
                                    <div className="w-[606px] flex flex-col justify-start gap-[24px] text-lg text-darkslategray">
                                        <div className="self-stretch flex flex-row items-center justify-start gap-[7px]">
                                            <Image width={1000} height={1000} className="relative w-[13px] h-[13px] object-cover" alt="" src="https://smellmeloveme.shop/wp-content/uploads/2023/12/Frame-43.png" />

                                            <div className="flex-1 relative leading-[26px] text_mini_desc1">
                                                Personalized memorial website
                                            </div>
                                        </div>
                                        <div className="self-stretch flex flex-row items-center justify-start gap-[7px]">
                                            <Image width={1000} height={1000} className="relative w-[13px] h-[13px] object-cover" alt="" src="https://smellmeloveme.shop/wp-content/uploads/2023/12/Frame-43.png" />

                                            <div className="flex-1 relative leading-[26px] text_mini_desc1">
                                                Simple instructions to help you get all setup
                                            </div>
                                        </div>
                                        <div className="self-stretch flex flex-row items-center justify-start gap-[7px]">
                                            <Image width={1000} height={1000} className="relative w-[13px] h-[13px] object-cover" alt="" src="https://smellmeloveme.shop/wp-content/uploads/2023/12/Frame-43.png" />

                                            <div className="flex-1 relative leading-[26px] text_mini_desc1">
                                                Unlimited photo uploads
                                            </div>
                                        </div>
                                        <div className="self-stretch flex flex-row items-center justify-start gap-[7px]">
                                            <Image width={1000} height={1000} className="relative w-[13px] h-[13px] object-cover" alt="" src="https://smellmeloveme.shop/wp-content/uploads/2023/12/Frame-43.png" />

                                            <div className="flex-1 relative leading-[26px] text_mini_desc1">
                                                Enter biographies, stories, and other memories of your
                                                loved one
                                            </div>
                                        </div>
                                        <div className="self-stretch flex flex-row items-center justify-start gap-[7px]">
                                            <Image width={1000} height={1000} className="relative w-[13px] h-[13px] object-cover" alt="" src="https://smellmeloveme.shop/wp-content/uploads/2023/12/Frame-43.png" />

                                            <div className="flex-1 relative leading-[26px] text_mini_desc1">
                                                Embed as many YouTube videos as you like
                                            </div>
                                        </div>
                                        <div className="self-stretch flex flex-row justify-start gap-[7px]">
                                            <Image width={1000} height={1000} className="relative w-[13px] mt-1 h-[13px] object-cover" alt="" src="https://smellmeloveme.shop/wp-content/uploads/2023/12/Frame-43.png" />

                                            <div className="flex-1 relative leading-[26px] text_mini_desc1">
                                                Reference links from other online sources such as
                                                Ancestry, Facebook or Find A Grave
                                            </div>
                                        </div>
                                        <div className="self-stretch flex flex-row items-center justify-start gap-[7px]">
                                            <Image width={1000} height={1000} className="relative w-[13px] h-[13px] object-cover" alt="" src="https://smellmeloveme.shop/wp-content/uploads/2023/12/Frame-43.png" />

                                            <div className="flex-1 relative leading-[26px] text_mini_desc1">
                                                Mobile optimized website to look great on a phone
                                            </div>
                                        </div>
                                        <div className="self-stretch flex flex-row items-start justify-start gap-[7px]">
                                            <Image width={1000} height={1000} className="relative w-[13px] mt-1 h-[13px] object-cover" alt="" src="https://smellmeloveme.shop/wp-content/uploads/2023/12/Frame-43.png" />

                                            <div className="flex-1 relative leading-[26px] text_mini_desc1">
                                                Website can be accessed by scanning the QR code with your
                                                phone, or for those family members who can’t visit the
                                                memorial often or don’t have a smart phone, you can view
                                                your website from any desktop computer as well.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="relative tracking-[-0.01em] font-semibold">
                                    <div className="font-[poppins] rounded-[34px] bg-[#38589C] w-[237px] h-14 flex flex-row items-center justify-center py-[13px] px-5 box-border text-base text-[white]">
                                        Lean More
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="our_story w-full h-[700px] relative overflow-hidden shrink-0 flex flex-col items-center justify-end py-[115px] px-[255px] box-border bg-[url('https://smellmeloveme.shop/wp-content/uploads/2023/12/Section-→-hs_image_24_01_20_1579840566.jpeg.png')] bg-cover bg-no-repeat bg-[top] text-[56px] text-[white]">
                        <div className="flex flex-col items-center justify-start gap-[56px]">
                            <div className="shrink-0 flex flex-col items-center justify-start gap-[32px]">
                                <b className="relative leading-[73.58px] font-[poppins]">Our Story</b>
                                <div className="relative text-[32px] font-[poppins] leading-[40px] font-medium text-center">
                                    <p className="m-0">
                                        LegacyMarker is a family owned and operated company,
                                    </p>
                                    <p className="m-0">
                                        born out of a desire to share our own father's legacy with
                                    </p>
                                    <p className="m-0">
                                        the grandchildren he never knew.  Through modern
                                    </p>
                                    <p className="m-0">
                                        technology we set out to do our very best to introduce our
                                    </p>
                                    <p className="m-0">
                                        children to their ancestors.  We hope that you will find
                                    </p>
                                    <p className="m-0">peace in doing the same. </p>
                                </div>
                            </div>
                            <div className="rounded-[34px] bg-[white] w-[201px] font-[poppins] text-[black] h-14 flex flex-row items-center justify-center py-[13px] px-5 box-border text-center text-base">
                                <a href="#" className="relative tracking-[-0.01em] font-semibold">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="w-10/12 mx-auto h-[900px] flex items-center justify-center text-oscuro">
                        <div className="flex flex-col w-[935px]">
                            <h3 className="mb-8 text-center">
                                <span className="text-3xl sm:text-4xl lg:text-5xl font_custom leading-titles font-bold sm:w-6/12 lg:w-full">
                                    Frequently asked Questions
                                </span>
                                <p className="m-0 mt-[25px] text_mini_desc1">
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit placerat mi, blandit habitant duis vel id et natoque congue in, augue fermentum cubilia fusce laoreet suscipit iaculis torquent. Penatibus at hac bibendum vitae mauris laoreet.
                                </p>
                            </h3>
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
                </section>
            </div>

            {/* mobile version */}

            <div
                className="mobile_version relative bg-basic-white w-full h-[7270px] overflow-hidden text-center text-5xl text-brand-primary font-sm-medium z-[-1]">
                <div className="absolute top-[0px] left-[0px] w-full h-[793px] overflow-hidden text-[28px] flex justify-center">
                    <Image width={1000} height={1000} className="absolute top-[0px] w-full h-[793px] object-cover" alt=""
                        src="https://smellmeloveme.shop/wp-content/uploads/2024/01/Rectangle-4313.png" />
                    <div className="absolute top-[65px] flex flex-col items-center justify-start gap-[32px]">
                        <div className="relative leading-[36px] main_heading inline-block w-[335px]">
                            <p className="m-0">LegacyMarker is a</p>
                            <p className="m-0">modern way of cherishing the memories of your</p>
                            <p className="m-0">loved ones</p>
                        </div>
                        <div
                            className="self-stretch shrink-0 flex flex-row items-center justify-center gap-[13.46px] text-sm">
                            <a href="#"
                                className="color_font rounded-[67px] bg-[#38589C] text-base shadow-[0px_8.4px_11.22px_-5.61px_rgba(28,_53,_237,_0.1)] w-[159px] h-10 flex flex-row items-center justify-center py-[7.291563987731934px] px-[11.217789649963379px] box-border">
                                <div className="relative leading-[20px] font-medium">
                                    Get started
                                </div>
                            </a>
                            <div className="shrink-0 flex flex-row items-center justify-start gap-[4.49px] text-xs text-brand-primary">
                                <Image width={1000} height={1000} className="relative w-[30.1px] h-[30.1px] object-cover" alt="" src="https://smellmeloveme.shop/wp-content/uploads/2024/01/Group-1.png" />
                                <a href="#" className="relative leading-[16px] font-medium">
                                    Watch Video
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        className="absolute top-[365px] flex flex-col items-center justify-start gap-[16px]">
                        <div className="relative rounded-[12.68px] bg-basic-white w-[103px] h-[103px] overflow-hidden shrink-0">
                            <Image width={1000} height={1000}
                                className="absolute w-[calc(100%_-_9px)] top-[4.5px] right-[4.5px] left-[4.5px] rounded-[2.19px] max-w-full overflow-hidden h-[94px] object-cover"
                                alt="" src="https://smellmeloveme.shop/wp-content/uploads/2024/01/home_qrcode.png.png" />
                        </div>
                        <Image width={1000} height={1000} className="relative w-[350px] h-[247.8px] object-cover" alt="" src="https://smellmeloveme.shop/wp-content/uploads/2024/01/Group-1000000826.png" />
                    </div>
                    {/* <div className="absolute top-[0px] left-[0px] w-[375px] h-[94px] text-mini text-light-text-color">
                        <div className="absolute top-[64px] left-[20px] w-[335px] flex flex-row items-center justify-between">
                            <Image width={1000} height={1000} className="relative w-[187px] h-[30px] object-cover" alt="" src="/-1@2x.png" />
                            <div className="shrink-0 flex flex-row items-center justify-start gap-[16px]">
                                <div className="shrink-0 flex flex-row items-center justify-start gap-[16px]">
                                    <div className="shrink-0 flex flex-row items-center justify-start">
                                        <Image width={1000} height={1000} className="relative w-6 h-6 overflow-hidden shrink-0 object-cover" alt="" src="/gift@2x.png" />
                                    </div>
                                    <Image width={1000} height={1000} className="relative w-5 h-5 overflow-hidden shrink-0 object-cover" alt="" src="/firssearch@2x.png" />
                                </div>
                                <Image width={1000} height={1000} className="relative w-6 h-6 overflow-hidden shrink-0 object-cover" alt=""
                                    src="/fibrmenuburger@2x.png" />
                            </div>
                        </div>
                        <div className="absolute top-[0px] left-[calc(50%_-_187.5px)] w-[375px] h-12">
                            <div className="absolute top-[19.3px] right-[20.4px] w-[24.3px] h-[11.3px]">
                                <div
                                    className="absolute top-[0px] right-[2.3px] rounded-[2.67px] box-border w-[22px] h-[11.3px] opacity-[0.35] mix-blend-normal border-[1px] border-solid border-light-text-color" />
                                <Image width={1000} height={1000} className="absolute top-[3.7px] right-[0px] w-[1.3px] h-1 object-cover opacity-[0.4] mix-blend-normal"
                                    alt="" src="/cap@2x.png" />
                                <div className="absolute top-[2px] right-[4.3px] rounded-[1.33px] bg-light-text-color w-[18px] h-[7.3px]" />
                            </div>
                            <Image width={1000} height={1000} className="relative w-[14.7px] h-[11px] object-cover" alt="" src="/wifi@2x.png" />
                            <Image width={1000} height={1000} className="relative w-[16.3px] h-[10.7px] object-cover" alt="" src="/cellular-connection@2x.png" />
                            <div className="absolute top-[12px] left-[21px] w-[54px] h-[21px]">
                                <div className="absolute top-[calc(50%_-_7.5px)] left-[0px] font-semibold inline-block w-[54px]">
                                    9:41
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div
                    className="w-full absolute top-[853px] flex flex-col items-center justify-start gap-[64px] text-left text-11xl">
                    <div className="shrink-0 flex flex-col items-center justify-start gap-[20px]">
                        <b className="relative leading-[36px] font_custom_resp">How it Started</b>
                        <div
                            className="relative cutom_txt_style_resp text-xs leading-[20px] text-darkslategray text-center flex items-center justify-center w-[335px]">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit placerat mi,
                            blandit habitant duis vel id et natoque congue in, augue fermentum
                            cubilia fusce laoreet suscipit iaculis torquent. Penatibus at hac
                            bibendum vitae mauris laoreet.
                        </div>
                    </div>
                    <div className="shrink-0 flex flex-col items-center justify-start gap-[48px]">
                        <div className="relative leading-[36px] font_custom_resp font-semibold">
                            How it works
                        </div>
                        <div className="shrink-0 flex flex-col items-start justify-start gap-[56px] text-5xl">
                            <div className="shrink-0 flex flex-col items-center justify-start gap-[32px]">
                                <div className="relative w-[214.6px] h-[205px]">
                                    <Image width={1000} height={1000} className="absolute top-[132.6px] left-[0px] w-[94.3px] h-[72.4px] object-cover" alt=""
                                        src="https://smellmeloveme.shop/wp-content/uploads/2024/01/Vector.png" />
                                    <div className="absolute top-[0px] left-[34.8px] w-[179.8px] h-[176.3px]">
                                        <Image width={1000} height={1000}
                                            className="absolute top-[21.6px] left-[0px] rounded-[7.09px] w-[158.9px] h-[154.6px] object-contain"
                                            alt="" src="https://smellmeloveme.shop/wp-content/uploads/2024/01/Rectangle-4312.png" />
                                        <Image width={1000} height={1000}
                                            className="absolute top-[0px] left-[92.2px] rounded-[5.32px] w-[87.6px] h-[69.5px] overflow-hidden object-cover"
                                            alt="" src="https://smellmeloveme.shop/wp-content/uploads/2024/01/hw_image_21_01_20_1579617945.jpeg.png" />
                                    </div>
                                </div>
                                <div className="shrink-0 flex flex-col items-center justify-start gap-[24px]">
                                    <div className="shrink-0 flex flex-col items-center justify-start gap-[20px]">
                                        <div className="relative text_resp leading-[36px] font-semibold">
                                            Register
                                        </div>
                                        <div
                                            className="relative font-[poppins] text-xs leading-[20px] text-darkslategray text-center flex items-center justify-center w-[335px]">
                                            After creating your account and verifying your email
                                            address, you're ready to create your first LegacyMarker. You
                                            can add an unlimited number of markers to your account. Each
                                            LegacyMarker created has a unique QR code that will be
                                            engraved on a metal plaque. This code links to your loved
                                            one's memorial site that you create with our easy to use web
                                            application.
                                        </div>
                                    </div>
                                    <a href="#"
                                        className="color_font rounded-[67px] bg-[#38589C] w-[145px] h-10 flex flex-row items-center justify-center py-[13px] px-5 box-border text-center text-xs text-basic-white">
                                        <b className="relative leading-[16px]">Register now</b>
                                    </a>
                                </div>
                            </div>
                            <div className="shrink-0 flex flex-col items-center justify-start gap-[32px]">
                                <div className="relative w-[214.6px] h-[205px]">
                                    <Image width={1000} height={1000} className="absolute top-[132.6px] left-[0px] w-[94.3px] h-[72.4px] object-cover" alt=""
                                        src="https://smellmeloveme.shop/wp-content/uploads/2024/01/Vector-1.png" />
                                    <div className="absolute top-[0px] left-[34.8px] w-[179.8px] h-[176.3px]">
                                        <Image width={1000} height={1000}
                                            className="absolute top-[21.6px] left-[0px] rounded-[7.09px] w-[158.9px] h-[154.6px] object-contain"
                                            alt="" src="https://smellmeloveme.shop/wp-content/uploads/2024/01/Rectangle-4312-1.png" />
                                        <Image width={1000} height={1000}
                                            className="absolute top-[0px] left-[92.2px] rounded-[5.32px] w-[87.6px] h-[69.5px] overflow-hidden object-cover"
                                            alt="" src="https://smellmeloveme.shop/wp-content/uploads/2024/01/hw_image_21_01_20_1579617945.jpeg-1.png" />
                                    </div>
                                </div>
                                <div className="shrink-0 flex flex-col items-center justify-start gap-[24px]">
                                    <div className="shrink-0 flex flex-col items-center justify-start gap-[20px]">
                                        <div className="relative text_resp leading-[36px] font-semibold">
                                            Add Details
                                        </div>
                                        <div
                                            className="relative text-xs font-[poppins] leading-[20px] text-darkslategray text-center flex items-center w-[335px]">
                                            <span className="w-full">
                                                <p className="m-0">LegacyMarker will provide you the tools to build a timeline, create a
                                                    biography, upload photos, link to online videos and web pages. People that visit the online
                                                    memorial will be able to sign a guestbook or share a story about the loved one. You can now
                                                    enhance your physical memorial with an electronic one that provides so much more information
                                                </p>
                                                <p className="m-0">than a stone can.</p>
                                            </span>
                                        </div>
                                    </div>
                                    <a href="#"
                                        className="color_font rounded-[67px] bg-[#38589C] w-[145px] h-10 flex flex-row items-center justify-center py-[13px] px-5 box-border text-center text-xs text-basic-white">
                                        <b className="relative leading-[16px]">Get Started</b>
                                    </a>
                                </div>
                            </div>
                            <div className="shrink-0 flex flex-col items-center justify-start gap-[32px]">
                                <div className="relative w-[214.6px] h-[205px]">
                                    <Image width={1000} height={1000} className="absolute top-[132.6px] left-[0px] w-[94.3px] h-[72.4px] object-cover" alt=""
                                        src="https://smellmeloveme.shop/wp-content/uploads/2024/01/Vector-1.png" />
                                    <div className="absolute top-[0px] left-[34.8px] w-[179.8px] h-[176.3px]">
                                        <Image width={1000} height={1000}
                                            className="absolute top-[21.6px] left-[0px] rounded-[7.09px] w-[158.9px] h-[154.6px] object-contain"
                                            alt="" src="https://smellmeloveme.shop/wp-content/uploads/2024/01/Rectangle-4312-3.png" />
                                        <Image width={1000} height={1000}
                                            className="absolute top-[0px] left-[92.2px] rounded-[5.32px] w-[87.6px] h-[69.5px] overflow-hidden object-cover"
                                            alt="" src="https://smellmeloveme.shop/wp-content/uploads/2024/01/hw_image_21_01_20_1579617945.jpeg-3.png" />
                                    </div>
                                </div>
                                <div className="shrink-0 flex flex-col items-center justify-start gap-[24px]">
                                    <div className="shrink-0 flex flex-col items-center justify-start gap-[20px]">
                                        <div className="relative text_resp leading-[36px] font-semibold">
                                            Scan Code
                                        </div>
                                        <div
                                            className="relative font-[poppins] text-xs leading-[20px] text-darkslategray text-center flex items-center justify-center w-[335px]">
                                            A LegacyMarker is a stainless steel plaque that references
                                            your memorial website through its QR code. Visitors of the
                                            memorial can scan the QR code with a smartphone to relive or
                                            learn about the Legacy of the loved one. Don't worry if you
                                            are unable to visit the physical memorial. All LegacyMarkers
                                            can be searched anytime by name or marker number at
                                            LegacyMarker.com.
                                        </div>
                                    </div>
                                    <a href="#"
                                        className="color_font rounded-[67px] bg-[#38589C] w-[145px] h-10 flex flex-row items-center justify-center py-[13px] px-5 box-border text-center text-xs text-basic-white">
                                        <b className="relative leading-[16px]">Get Started</b>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute top-[2979px] bg-aliceblue w-full h-[1328px] overflow-hidden flex justify-center">
                    <div className="absolute top-[60px] flex flex-col items-start justify-start gap-[32px]">
                        <div className="w-[335px] flex flex-col items-center justify-start gap-[24px]">
                            <div className="self-stretch text_resp relative leading-[36px] font-semibold">
                                <p className="m-0">Give a gift that will</p>
                                <p className="m-0">last a lifetime</p>
                            </div>
                            <div className="self-stretch font-[poppins] relative text-xs leading-[20px] text-darkslategray">
                                Flowers are nice but they will be gone in a week. We have two gift
                                options that will be sure to stand out and help someone through
                                the morning process.
                            </div>
                        </div>
                        <div className="shrink-0 flex flex-col items-start justify-start gap-[24px] text-xl text-blue-grey-800">
                            <div className="relative rounded-2xl bg-[white] w-[335px] h-[488px]">
                                <div
                                    className="absolute top-[calc(50%_-_170px)] left-[calc(50%_-_147.5px)] w-[295px] flex flex-col items-center justify-start gap-[24px]">
                                    <Image width={1000} height={1000} className="relative w-12 h-12 object-cover" alt="" src="https://smellmeloveme.shop/wp-content/uploads/2023/12/Frame-2024.png" />
                                    <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
                                        <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
                                            <div className="self-stretch flex flex-col items-center justify-start gap-[20px]">
                                                <div className="text_base_subhead_resp self-stretch relative leading-[26px] font-semibold">
                                                    LegacyMarker Plaque
                                                </div>
                                                <div className="text_mini_subhead_resp self-stretch relative text-sm leading-[20px] font-medium text-blue-grey-700">
                                                    A physical Stainless steel plaque will be shipped to the
                                                    recipient. A perfect gift in lieu of flowers.
                                                </div>
                                            </div>
                                            <div className="text_mini_desc self-stretch relative text-xs leading-[20px] text-blue-grey-600">
                                                You give the name and picture for the Legacy Marker. We
                                                engrave them, along with a unique QR code, on a stainless
                                                steel plaque linked to their personal site. Recipients can
                                                connect it to their account and complete their profile.
                                            </div>
                                        </div>
                                        <a href="#"
                                            className="self-stretch color_font rounded-[67px] bg-[#38589C] h-12 flex flex-row items-center justify-center py-[13px] px-5 box-border text-xs text-basic-white">
                                            <div className="relative leading-[16px] font-semibold">
                                                Order Plaque Now
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="relative rounded-2xl bg-[white] w-[335px] h-[488px]">
                                <div className="absolute top-[calc(50%_-_180px)] left-[calc(50%_-_147.5px)] w-[295px] flex flex-col items-center justify-start gap-[24px]">
                                    <Image width={1000} height={1000} className="relative w-12 h-12 object-cover" alt="" src="https://smellmeloveme.shop/wp-content/uploads/2023/12/Frame-2024-1.png" />
                                    <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
                                        <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
                                            <div className="self-stretch flex flex-col items-center justify-start gap-[20px]">
                                                <div className="text_base_subhead_resp self-stretch relative leading-[26px] font-semibold">
                                                    LegacyMarker Gift Card
                                                </div>
                                                <div
                                                    className="text_mini_subhead_resp self-stretch relative text-sm leading-[20px] font-medium text-blue-grey-700 whitespace-pre-wrap">
                                                    You will be emailed a code that you can gift to a
                                                    friend. The code will cover the cost of a LagacyMarker
                                                    Plaque.
                                                </div>
                                            </div>
                                            <div className="text_mini_desc self-stretch relative text-xs leading-[20px] text-blue-grey-600">
                                                <p className="m-0">
                                                    You give the name and picture for the Legacy Marker. We
                                                    engrave them, along with a unique QR code, on a
                                                    stainless steel plaque linked to their personal site.
                                                    Recipients can connect it to their account and
                                                </p>
                                                <p className="m-0"> complete their profile.</p>
                                            </div>
                                        </div>
                                        <a href="#"
                                            className="self-stretch color_font rounded-[67px] bg-[#38589C] h-12 flex flex-row items-center justify-center py-[13px] px-5 box-border text-xs text-basic-white">
                                            <div className="relative leading-[16px] font-semibold">
                                                Order Plaque Now
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="absolute top-[4351px] flex flex-col items-center justify-start gap-[48px] text-left">
                        <div className="relative w-[162.7px] h-[191.2px]">
                            <Image width={1000} height={1000} className="absolute top-[17.5px] left-[24.4px] rounded-[6.64px] w-[121.5px] h-[153.8px] object-cover"
                                alt="" src="https://smellmeloveme.shop/wp-content/uploads/2023/12/Rectangle-3480.png" />
                            <Image width={1000} height={1000} className="absolute top-[0px] left-[97.2px] rounded-[6.64px] w-[65.6px] h-[72.8px] object-cover" alt=""
                                src="https://smellmeloveme.shop/wp-content/uploads/2023/12/Rectangle-3481.png" />
                            <Image width={1000} height={1000} className="absolute top-[105.7px] left-[0px] rounded-[6.64px] w-[73.3px] h-[85.5px] object-cover" alt=""
                                src="https://smellmeloveme.shop/wp-content/uploads/2023/12/Rectangle-3482.png" />
                        </div>
                        <div className="shrink-0 flex flex-col items-center justify-start gap-[32px]">
                            <div className="shrink-0 flex flex-col items-center justify-start gap-[24px]">
                                <b className="relative leading-[32px] text_resp ">LegacyMarker</b>
                                <div className="relative text-sm leading-[20px] text-[#38589C] text-center flex items-center justify-center w-[335px]">
                                    LegacyMarker was established in 2019 to harness the use of QR code
                                    technologies to bring your memories of deceased loved ones back to
                                    life. LegacyMarker specializes in placing a special plaque on
                                    headstones and other memorials. This plaque has a special symbol
                                    engraved in it, called a QR code.
                                </div>
                            </div>
                            <a href="#"
                                className="color_font rounded-[67px] bg-[#38589C] w-40 h-12 flex flex-row items-center justify-center py-[14.359164237976074px] px-[22.091022491455078px] box-border text-center text-xs text-basic-white">
                                <div className="relative leading-[16px] font-semibold">
                                    Lean More
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute top-[5949px] bottom-[950px] w-full h-[400px] flex justify-center overflow-hidden bg-[url('https://smellmeloveme.shop/wp-content/uploads/2023/12/Section-→-hs_image_24_01_20_1579840566.jpeg.png')] bg-cover bg-no-repeat bg-[top] text-left text-basic-white">
                    <div
                        className="absolute top-[calc(50%_-_117.5px)] w-[335px] flex flex-col items-center justify-start gap-[24px]">
                        <div className="self-stretch flex flex-col items-center justify-start gap-[16px]">
                            <b className="relative leading-[32px] font-[poppins] text-[24px] text-[white]">Our Story</b>
                            <div className="self-stretch relative text-sm leading-[20px] text-center font-[poppins] text-[18px] text-[white]">
                                <p className="m-0">
                                    LegacyMarker is a family owned and operated company, born out of
                                    a desire to share our own father's legacy with the grandchildren
                                    he never knew.  Through modern technology we set out to do our
                                    very best to introduce our children to their ancestors.  We hope
                                    that you will find
                                </p>
                                <p className="m-0">peace in doing the same. </p>
                            </div>
                        </div>
                        <a href="#" className="rounded-[67px] bg-[#ffff] text-[] w-[201px] h-12 flex flex-row items-center justify-center py-[13px] px-5 box-border text-center text-base text-brand-primary">
                            <div className="relative tracking-[-0.01em] font-semibold">
                                Learn More
                            </div>
                        </a>
                    </div>
                </div>
                <section>
                    <div className="w-full mx-auto h-[1000px] p-[30px] absolute bottom-[0px] flex items-center justify-center text-oscuro">
                        <div className="flex flex-col w-[935px]">
                            <h3 className="mb-8 text-center">
                                <span className="text_resp text-3xl sm:text-4xl lg:text-5xl font_custom leading-titles font-bold sm:w-6/12 lg:w-full">
                                    Frequently asked Questions
                                </span>
                                <p className="m-0 mt-[25px] text_mini_desc1">
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit placerat mi, blandit habitant duis vel id et natoque congue in, augue fermentum cubilia fusce laoreet suscipit iaculis torquent. Penatibus at hac bibendum vitae mauris laoreet.
                                </p>
                            </h3>
                            <div>
                                <div className="relative mb-4 rounded-[30px] p-[30px] bg-[#F6F8FB]">
                                    <input type="checkbox" id="toggle1" className="toggle hidden" />
                                    <label className="title text_base_subhead_resp  bg-[#F6F8FB] block p-4 cursor-pointer" htmlFor="toggle1">
                                        What is gift cards?
                                    </label>
                                    <div className="content  overflow-hidden">
                                        <p className="p-4 text_mini_desc">The average monthly cost for a gym in the UK is about £40. The price really depends if you are looking for a budget gym or a premium gym. The price also varies if you decide to have a membership which allows you to use one gym or multiple gyms.</p>
                                    </div>
                                </div>
                                <div className="relative mb-4 rounded-[30px] p-[30px] bg-[#F6F8FB]">
                                    <input type="checkbox" id="toggle2" className="toggle hidden" />
                                    <label className="title text_base_subhead_resp  bg-[#F6F8FB] block p-4 cursor-pointer" htmlFor="toggle2">
                                        What is gift cards?
                                    </label>
                                    <div className="content overflow-hidden">
                                        <p className="p-4 text_mini_desc">The average monthly cost for a gym in the UK is about £40. The price really depends if you are looking for a budget gym or a premium gym. The price also varies if you decide to have a membership which allows you to use one gym or multiple gyms.</p>
                                    </div>
                                </div>
                                <div className="relative mb-4 rounded-[30px] p-[30px] bg-[#F6F8FB]">
                                    <input type="checkbox" id="toggle3" className="toggle hidden" />
                                    <label className="title text_base_subhead_resp  bg-[#F6F8FB] block p-4 cursor-pointer" htmlFor="toggle3">
                                        What is gift cards?
                                    </label>
                                    <div className="content  overflow-hidden">
                                        <p className="p-4 text_mini_desc">The average monthly cost for a gym in the UK is about £40. The price really depends if you are looking for a budget gym or a premium gym. The price also varies if you decide to have a membership which allows you to use one gym or multiple gyms.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <div
                    className="absolute top-[5685px] left-[calc(50%_-_167.5px)] w-[335px] flex flex-col items-center justify-start gap-[47px] text-left">
                    <div className="self-stretch h-[120px] flex flex-col items-center justify-start gap-[29px]">
                        <div className="relative leading-[36px] font-semibold">
                            Frequently asked Questions
                        </div>
                        <div className="self-stretch relative text-xs leading-[20px] text-darkslategray text-center">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit placerat mi,
                            blandit habitant duis vel id et natoque congue in, augue fermentum
                            cubilia fusce laoreet suscipit iaculis torquent. Penatibus at hac
                            bibendum vitae mauris laoreet.
                        </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start text-base text-gray">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                            <div
                                className="self-stretch rounded-3xs bg-whitesmoke flex flex-col items-start justify-start p-4 gap-[16px]">
                                <div className="flex flex-row items-center justify-start gap-[14px]">
                                    <Image width={1000} height={1000} className="relative w-6 h-6 object-cover" alt="" src="/icon@2x.png" />
                                    <div className="relative leading-[24px] font-medium">
                                        What is gift cards?
                                    </div>
                                </div>
                                <div
                                    className="self-stretch flex flex-row items-center justify-start py-0 pr-[54px] pl-9 text-xs text-dimgray">
                                    <div className="relative leading-[20px] inline-block w-[253px] shrink-0">
                                        The average monthly cost for a gym in the UK is about £40. The
                                        price really depends if you are looking for a budget gym or a
                                        premium gym. The price also varies if you decide to have a
                                        membership which allows you to use one gym or multiple gyms.
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                                <div
                                    className="self-stretch rounded-3xs bg-whitesmoke flex flex-col items-start justify-start p-4 gap-[24px]">
                                    <div className="self-stretch flex flex-row items-center justify-start gap-[14px]">
                                        <Image width={1000} height={1000} className="relative w-6 h-6 object-cover" alt="" src="/icon@2x.png" />
                                        <div className="relative leading-[24px] font-medium">
                                            What is gift cards?
                                        </div>
                                    </div>
                                    <div
                                        className="self-stretch hidden flex-row items-center justify-start py-0 px-[75px] text-sm text-dimgray">
                                        <div className="relative leading-[24px] inline-block w-[737px] shrink-0">
                                            The average monthly cost for a gym in the UK is about £40.
                                            The price really depends if you are looking for a budget gym
                                            or a premium gym. The price also varies if you decide to
                                            have a membership which allows you to use one gym or
                                            multiple gyms.
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="self-stretch rounded-3xs bg-whitesmoke flex flex-col items-start justify-start p-4 gap-[24px]">
                                    <div className="self-stretch flex flex-row items-center justify-start gap-[14px]">
                                        <Image width={1000} height={1000} className="relative w-6 h-6 object-cover" alt="" src="/icon@2x.png" />
                                        <div className="relative leading-[24px] font-medium">
                                            What is gift cards?
                                        </div>
                                    </div>
                                    <div
                                        className="self-stretch hidden flex-row items-center justify-start py-0 px-[75px] text-sm text-dimgray">
                                        <div className="relative leading-[24px] inline-block w-[737px] shrink-0">
                                            The average monthly cost for a gym in the UK is about £40.
                                            The price really depends if you are looking for a budget gym
                                            or a premium gym. The price also varies if you decide to
                                            have a membership which allows you to use one gym or
                                            multiple gyms.
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="self-stretch rounded-3xs bg-whitesmoke flex flex-col items-start justify-start p-4 gap-[24px]">
                                    <div className="self-stretch flex flex-row items-center justify-start gap-[14px]">
                                        <Image width={1000} height={1000} className="relative w-6 h-6 object-cover" alt="" src="/icon@2x.png" />
                                        <div className="relative leading-[24px] font-medium">
                                            What is gift cards?
                                        </div>
                                    </div>
                                    <div
                                        className="self-stretch hidden flex-row items-center justify-start py-0 px-[75px] text-sm text-dimgray">
                                        <div className="relative leading-[24px] inline-block w-[737px] shrink-0">
                                            The average monthly cost for a gym in the UK is about £40.
                                            The price really depends if you are looking for a budget gym
                                            or a premium gym. The price also varies if you decide to
                                            have a membership which allows you to use one gym or
                                            multiple gyms.
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="self-stretch rounded-3xs bg-whitesmoke flex flex-col items-start justify-start p-4 gap-[24px]">
                                    <div className="self-stretch flex flex-row items-center justify-start gap-[14px]">
                                        <Image width={1000} height={1000} className="relative w-6 h-6 object-cover" alt="" src="/icon@2x.png" />
                                        <div className="relative leading-[24px] font-medium">
                                            What is gift cards?
                                        </div>
                                    </div>
                                    <div
                                        className="self-stretch hidden flex-row items-center justify-start py-0 px-[75px] text-sm text-dimgray">
                                        <div className="relative leading-[24px] inline-block w-[737px] shrink-0">
                                            The average monthly cost for a gym in the UK is about £40.
                                            The price really depends if you are looking for a budget gym
                                            or a premium gym. The price also varies if you decide to
                                            have a membership which allows you to use one gym or
                                            multiple gyms.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="absolute top-[4930px] bg-aliceblue w-full h-[916px] overflow-hidden">
                    <div
                        className="absolute top-[66px] left-[calc(50%_-_167.5px)] flex flex-col items-start justify-start gap-[32px]">
                        <div className="shrink-0 flex flex-col items-center justify-start gap-[32px]">
                            <div className="relative w-[203.4px] h-[189px]">
                                <Image width={1000} height={1000} className="absolute top-[0px] left-[61.1px] rounded-[6.58px] w-[142.4px] h-[189px] object-cover" alt=""
                                    src="https://smellmeloveme.shop/wp-content/uploads/2023/12/Rectangle-579.png" />
                                <Image width={1000} height={1000} className="absolute top-[24.3px] left-[0px] rounded-[3.12px] w-[108.3px] h-[126.7px] object-contain"
                                    alt="" src="https://smellmeloveme.shop/wp-content/uploads/2023/12/Rectangle-580.png" />
                            </div>
                            <div className="w-[335px] flex flex-col items-start justify-start gap-[32px]">
                                <div className="self-stretch relative leading-[30px] text_resp font-semibold">Personalized Memorial Website & Custom
                                    QR Code Plaque Engraving</div>
                                <div
                                    className="w-[335px] flex flex-col items-start justify-start gap-[16px] text-left text-xs text-darkslategray">
                                    <div className="self-stretch flex flex-row items-start justify-start gap-[7px]">
                                        <Image width={1000} height={1000} className="relative    w-[13px] h-[13px] object-cover" alt="" src="https://smellmeloveme.shop/wp-content/uploads/2023/12/Frame-43.png" />
                                        <div className="flex-1 relative leading-[20px]">
                                            Personalized memorial website
                                        </div>
                                    </div>
                                    <div className="self-stretch flex flex-row items-start justify-start gap-[7px]">
                                        <Image width={1000} height={1000} className="relative w-[13px] h-[13px] object-cover" alt="" src="https://smellmeloveme.shop/wp-content/uploads/2023/12/Frame-43.png" />
                                        <div className="flex-1 relative leading-[20px]">
                                            Simple instructions to help you get all setup
                                        </div>
                                    </div>
                                    <div className="self-stretch flex flex-row items-start justify-start gap-[7px]">
                                        <Image width={1000} height={1000} className="relative w-[13px] h-[13px] object-cover" alt="" src="https://smellmeloveme.shop/wp-content/uploads/2023/12/Frame-43.png" />
                                        <div className="flex-1 relative leading-[20px]">
                                            Unlimited photo uploads
                                        </div>
                                    </div>
                                    <div className="self-stretch flex flex-row items-start justify-start gap-[7px]">
                                        <Image width={1000} height={1000} className="relative w-[13px] h-[13px] object-cover" alt="" src="https://smellmeloveme.shop/wp-content/uploads/2023/12/Frame-43.png" />
                                        <div className="flex-1 relative leading-[20px]">
                                            Enter biographies, stories, and other memories of your loved
                                            one
                                        </div>
                                    </div>
                                    <div className="self-stretch flex flex-row items-start justify-start gap-[7px]">
                                        <Image width={1000} height={1000} className="relative w-[13px] h-[13px] object-cover" alt="" src="https://smellmeloveme.shop/wp-content/uploads/2023/12/Frame-43.png" />
                                        <div className="flex-1 relative leading-[20px]">
                                            Embed as many YouTube videos as you like
                                        </div>
                                    </div>
                                    <div className="self-stretch flex flex-row items-start justify-start gap-[7px]">
                                        <Image width={1000} height={1000} className="relative w-[13px] h-[13px] object-cover" alt="" src="https://smellmeloveme.shop/wp-content/uploads/2023/12/Frame-43.png" />
                                        <div className="flex-1 relative leading-[20px]">
                                            Reference links from other online sources such as Ancestry,
                                            Facebook or Find A Grave
                                        </div>
                                    </div>
                                    <div className="self-stretch flex flex-row items-start justify-start gap-[7px]">
                                        <Image width={1000} height={1000} className="relative w-[13px] h-[13px] object-cover" alt="" src="https://smellmeloveme.shop/wp-content/uploads/2023/12/Frame-43.png" />
                                        <div className="flex-1 relative leading-[20px]">
                                            Mobile optimized website to look great on a phone
                                        </div>
                                    </div>
                                    <div className="self-stretch flex flex-row items-start justify-start gap-[7px]">
                                        <Image width={1000} height={1000} className="relative w-[13px] h-[13px] object-cover" alt="" src="https://smellmeloveme.shop/wp-content/uploads/2023/12/Frame-43.png" />
                                        <div className="flex-1 relative leading-[20px]">
                                            Website can be accessed by scanning the QR code with your
                                            phone, or for those family members who can’t visit the
                                            memorial often or don’t have a smart phone, you can view
                                            your website from any desktop computer as well.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="#"
                            className="color_font rounded-[67px] bg-[#38589C] w-[168px] h-12 flex flex-row items-center justify-center py-[14.359164237976074px] px-[22.091022491455078px] box-border text-sm text-basic-white">
                            <div className="relative leading-[20px] font-medium">Lean More</div>
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Mainsection;
