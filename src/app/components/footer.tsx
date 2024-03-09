"use client"
import Image from 'next/image'

const Footer = () => {
    return (
        <>
            <section>
                <div className="mainfooter relative bg-[#3258A8] w-full h-24 text-center text-lg text-[white]">
                    <div className="absolute top-[calc(50%_-_16px)] left-[calc(50%_-_600px)] w-[1200px] flex flex-row items-center justify-between">
                        <div className="relative leading-[28px] font-medium">
                            © 2023 All rights reserved legacy marker.
                        </div>
                        <div className="shrink-0 flex flex-row items-start justify-start gap-[40px]">
                            <a href="#" className="relative leading-[28px] font-medium">Home</a>
                            <a href="#" className="relative leading-[28px] font-medium">Help</a>
                            <a href="#" className="relative leading-[28px] font-medium">Contact</a>
                        </div>
                        <div className="shrink-0 flex flex-row items-start justify-start gap-[20px]">
                            <a href="#">
                                <Image
                                    width={30}
                                    height={20}
                                    className="relative  object-cover"
                                    alt=""
                                    src="https://smellmeloveme.shop/wp-content/uploads/2023/12/Facebook-1.png"
                                    
                                />
                            </a>
                            <a href="#">
                                <Image
                                    width={30}
                                    height={20}
                                    className="relative  object-cover"
                                    alt=""
                                    src="https://smellmeloveme.shop/wp-content/uploads/2023/12/Linkedin-1.png"
                                />
                            </a>
                            <a href="#">
                                <Image
                                    width={30}
                                    height={20}
                                    className="relative  object-cover"
                                    alt=""
                                    src="https://smellmeloveme.shop/wp-content/uploads/2023/12/Instagram-1.png"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="mobile_footer absolute left-[0px] flex justify-center bg-[#38589C] w-full h-[118px] text-sm text-[white]">
                <div className="flex flex-col mt-[20px] items-center justify-start gap-[20px]">
                    <div className="shrink-0 flex flex-col items-start justify-start gap-[16px]">
                        <div className="w-[336px] shrink-0 flex flex-row items-center justify-between">
                            <div className="w-[182px] shrink-0 flex flex-row items-start justify-between">
                                <a href="#" className="relative leading-[20px] font-medium">Home</a>
                                <a href="#" className="relative leading-[20px] font-medium">Help</a>
                                <a href="#" className="relative leading-[20px] font-medium">
                                    Contact
                                </a>
                            </div>
                            <div className="shrink-0 flex flex-row items-start justify-start gap-[12px]">
                                <a href="#">
                                    <Image
                                        width={20}
                                        height={10}
                                        className="relative  object-cover"
                                        alt=""
                                        src="https://smellmeloveme.shop/wp-content/uploads/2023/12/Facebook-1.png"
                                    /></a>
                                <a href="#">
                                    <Image
                                        width={20}
                                        height={10}
                                        className="relative object-cover"
                                        alt=""
                                        src="https://smellmeloveme.shop/wp-content/uploads/2023/12/Linkedin-1.png"
                                    /></a>
                                <a href="#">
                                    <Image
                                         width={20}
                                         height={10}
                                        className="relative object-cover"
                                        alt=""
                                        src="https://smellmeloveme.shop/wp-content/uploads/2023/12/Instagram-1.png"
                                    /></a>
                            </div>
                        </div>
                        <div className="relative rounded-[22px] bg-blue-grey-500 w-[335px] h-[0.5px]" />
                    </div>
                    <div className="relative leading-[20px]">
                        © 2023 All rights reserved.
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;