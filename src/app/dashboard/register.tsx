import { Link } from "react-router-dom";
import Image from "next/image";
import React, { useState } from 'react';

const Register = () => {
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [currentPassword, setCurrentPassword] = useState('');

    const toggleCurrentPasswordVisibility = () => {
        setShowCurrentPassword(!showCurrentPassword);
    };

    return (
        <>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1">
                <div className="flex items-center justify-center bg-[#F5F5F5] lg:p-[50px] md:p-[50px] py-[80px]">
                    <div className="w-full md:w-[75%] lg:w-[75%] rounded-[30px] bg-[white] px-3  py-[70px] lg:py-8 md:py-8 lg:px-8 md:px-8">
                        <h2 className="text-4xl font-[poppins] text-center font-bold leading-normal mb-2 text-[#4C4448] mb-2">Register</h2>
                        <p className="text-[#62585D] font-[poppins] text-center">Register to continue with mealmaze</p>
                        <div className="flex flex-col gap-[20px] pt-[40px] px-[20px]">
                            <div className="flex gap-[20px] pt-[20px]">
                                <div className="">
                                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
                                    <input
                                        type="text"
                                        id="f_name"
                                        name="f_name"
                                        placeholder="First Name"
                                        className="w-full lg:pr-[2.75rem] md:pr-[2.75rem] border border-gray-300 rounded-[10px] p-3 font-[poppins]"
                                    />
                                </div>
                                <div className="">
                                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        id="l_name"
                                        name="l_name"
                                        placeholder="Last Name"
                                        className="w-full border lg:pr-[2.75rem] md:pr-[2.75rem] border-gray-300 rounded-[10px] p-3 font-[poppins]"
                                    />
                                </div>
                            </div>
                            <div className="flex gap-[20px]">
                                <div className="">
                                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                                    <input
                                        type="text"
                                        id="u_name"
                                        name="u_name"
                                        placeholder="Username"
                                        className="w-full border lg:pr-[2.75rem] md:pr-[2.75rem] border-gray-300 rounded-[10px] p-3 font-[poppins]"
                                    />
                                </div>
                                <div className="">
                                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                                    <input
                                        type="text"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                        className="w-full border lg:pr-[2.75rem] md:pr-[2.75rem] border-gray-300 rounded-[10px] p-3 font-[poppins]"
                                    />
                                </div>
                            </div>
                            <div className="relative">
                                <label htmlFor="name" className="font-[poppins] block text-gray-700 text-sm font-semibold mb-2">Password</label>
                                <input
                                    type={showCurrentPassword ? 'text' : 'password'}
                                    value={currentPassword}
                                    onChange={(e) => setCurrentPassword(e.target.value)}
                                    className="block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Password"
                                />
                                <button
                                    onClick={toggleCurrentPasswordVisibility}
                                    className="absolute top-[26px] bottom-[0px] right-[9px] flex items-center px-2 focus:outline-none"
                                >
                                    {showCurrentPassword ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-gray-600 hover:text-gray-800"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >{/* Eye icon for hidding new password */}
                                            <path xmlns="http://www.w3.org/2000/svg" d="M12.0011 8.24997C10.9731 8.2176 9.97423 8.59418 9.22347 9.29714C8.47271 10.0001 8.03132 10.9721 7.99609 12C8.03132 13.0279 8.47271 13.9998 9.22347 14.7028C9.97423 15.4058 10.9731 15.7823 12.0011 15.75C13.0291 15.7823 14.028 15.4058 14.7787 14.7028C15.5295 13.9998 15.9709 13.0279 16.0061 12C15.9709 10.9721 15.5295 10.0001 14.7787 9.29714C14.028 8.59418 13.0291 8.2176 12.0011 8.24997ZM12.0011 13.875C11.4712 13.9039 10.9511 13.7236 10.5527 13.373C10.1544 13.0223 9.90962 12.5293 9.87109 12C9.90962 11.4707 10.1544 10.9776 10.5527 10.627C10.9511 10.2763 11.4712 10.0961 12.0011 10.125C12.531 10.0961 13.0511 10.2763 13.4494 10.627C13.8478 10.9776 14.0926 11.4707 14.1311 12C14.0926 12.5293 13.8478 13.0223 13.4494 13.373C13.0511 13.7236 12.531 13.9039 12.0011 13.875Z" fill="black" />
                                            <path xmlns="http://www.w3.org/2000/svg" d="M12 3.74967C9.37751 3.64633 6.79191 4.3939 4.62919 5.88077C2.46647 7.36764 0.842604 9.51408 0 11.9997C0.842604 14.4853 2.46647 16.6317 4.62919 18.1186C6.79191 19.6054 9.37751 20.353 12 20.2497C14.6225 20.353 17.2081 19.6054 19.3708 18.1186C21.5335 16.6317 23.1574 14.4853 24 11.9997C23.1574 9.51408 21.5335 7.36764 19.3708 5.88077C17.2081 4.3939 14.6225 3.64633 12 3.74967ZM20.1 14.9997C19.0789 16.1204 17.8243 17.0035 16.4248 17.5866C15.0252 18.1698 13.5148 18.4388 12 18.3747C10.4852 18.4388 8.97476 18.1698 7.57522 17.5866C6.17569 17.0035 4.92112 16.1204 3.9 14.9997C3.1037 14.1117 2.45999 13.098 1.995 11.9997C2.45999 10.9013 3.1037 9.88762 3.9 8.99967C4.92112 7.87893 6.17569 6.99585 7.57522 6.41271C8.97476 5.82957 10.4852 5.56057 12 5.62467C13.5148 5.56057 15.0252 5.82957 16.4248 6.41271C17.8243 6.99585 19.0789 7.87893 20.1 8.99967C20.8963 9.88762 21.54 10.9013 22.005 11.9997C21.54 13.098 20.8963 14.1117 20.1 14.9997Z" fill="black" />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-gray-600 hover:text-gray-800"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            {/* Eye icon for showing current password */}
                                            <path xmlns="http://www.w3.org/2000/svg" d="M10.73 5.073C11.1516 5.0241 11.5756 4.99973 12 5C16.664 5 20.4 7.903 22 12C21.6127 12.9966 21.0894 13.9348 20.445 14.788M6.52 6.519C4.48 7.764 2.9 9.693 2 12C3.6 16.097 7.336 19 12 19C13.9321 19.0102 15.8292 18.484 17.48 17.48M9.88 9.88C9.6014 10.1586 9.3804 10.4893 9.22963 10.8534C9.07885 11.2174 9.00125 11.6075 9.00125 12.0015C9.00125 12.3955 9.07885 12.7856 9.22963 13.1496C9.3804 13.5137 9.6014 13.8444 9.88 14.123C10.1586 14.4016 10.4893 14.6226 10.8534 14.7734C11.2174 14.9242 11.6075 15.0018 12.0015 15.0018C12.3955 15.0018 12.7856 14.9242 13.1496 14.7734C13.5137 14.6226 13.8444 14.4016 14.123 14.123" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path xmlns="http://www.w3.org/2000/svg" d="M4 4L20 20" stroke="black" stroke-width="2" stroke-linecap="round" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex items-center">
                                    <input type="checkbox" id="checkbox" name="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                                    <label htmlFor="checkbox" className="ml-2 text-[14px] text-gray-700 font-[poppins]">Accept <span className="text-[#2F80ED] font-[poppins] font-semibold">Terms & Condition</span></label>
                                </div>
                                <div className="">
                                    <Link to="">
                                        <p className="text-[#2F80ED] text-[14px] font-[poppins] font-semibold">Forgot Password?</p>
                                    </Link>
                                </div>
                            </div>
                            <Link to="/mainprofile">
                                <button type="button" className="rounded-[20px] bg-[#38589C] w-full h-14 mt-[30px] sm:mt-[80px] md:mt-[30px] lg:mt-[30px] xl:mt-[30px] py-[13px] px-5 text-base tracking-[2px] font-[poppins] text-[white] hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    Register
                                </button>
                            </Link>
                            <p className="text-[#62585D] font-[poppins] text-center">Already have an account? <Link to="/login"><span className="text-[#2F80ED]">Login here</span></Link></p>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block">
                    <div className="bg-gradient-to-r from-[#FFFFFF] to-[#BBD1FF] flex justify-center items-center py-[80px]">
                        <img src="https://smellmeloveme.shop/wp-content/uploads/2024/02/Frame-1000004442.png" alt="kuch bhi" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;