import React, { ChangeEvent, Fragment, useState } from "react";
import Image from "next/image";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Iconsvg from "../components/icon";
import Iconsvgdark from "../components/icondark";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    IconButton,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
} from "@chakra-ui/react";
import PasswordField from "./elements/password_show";
import Editicon from "../components/icons/editicon";
import DeleteIcon from "../components/icons/delete";

import Notes from "./elements/richtexteditot/Newtiptap/Notes";
import Todo from "./elements/richtexteditot/Newtiptap/NotePicker";
const EditMarker = () => {
    //image uploader
    const [selectedprofileFile, setSelectedprofileFile] = useState<File | null>(null);
    const [selectedFileCover, setSelectedFileCover] = useState<File | null>(null);

    const handleFileprofileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            setSelectedprofileFile(files[0]);
        }
    };

    const handleFileChangeCover = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            setSelectedFileCover(files[0]);
        }
    };
    //modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    //DatePicker
    const [selectedDate, setSelectedDate] = useState<string>('');

    const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSelectedDate(e.target.value);
    };
    //VideoUploader
    const [selectedVideo, setSelectedVideo] = useState<File | null>(null);

    const handleVideoChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            setSelectedVideo(files[0]);
        }
    };

    return (
        <>
            <main className="profile-page">
                <section className="relative block h-[300px]">
                    <div className="flex flex-col">
                        <img
                            src="https://smellmeloveme.shop/wp-content/uploads/2024/02/sunrise-1.png"
                            alt="Cover Photo"
                            className="h-[350px] w-full object-cover border border-gray-300"
                        />
                    </div>
                </section>
                <section className="relative py-16 bg-blueGray-200">
                    <div className="container mx-auto px-4 flex flex-col items-center lg:block">
                        <div className="px-9 mb-6 -mt-[94px] ">
                            <img
                                src="https://smellmeloveme.shop/wp-content/uploads/2024/02/Frame-48762.png"
                                alt="Profile"
                                className="h-40 w-40 object-cover"
                            />
                        </div>
                        <div className="fle_dir_col flex justify-between items-center mt-12 ml-5 border-b border-blueGray-200">
                            <div className="">
                                <h3 className="text-[25px] lg:text-4xl font-[poppins] font-bold leading-normal mb-2 text-[#4C4448] mb-2">
                                    Wela Linda <span className="text-[#0D6EFD]">#115</span>
                                </h3>
                                <p className="text-center lg:text-left text-sm leading-normal mt-0 mb-2 text-blueGray-400 text-[#888587] font-bold uppercase">
                                    05 LegacyMarker
                                </p>
                            </div>
                            <div className="btn">
                                <Link to="/mainprofile">
                                    <button className="flex items-center justify-center px-4 py-2 bg-[#38589C] text-white rounded-md hover:opacity-75 shadow-md hover:bg-[#38589C] focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 mr-2"
                                            viewBox="0 0 15 17"
                                            fill="none"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M10.0456 1.61851C10.3971 1.93726 10.4542 2.51867 10.1729 2.91712L6.2325 8.49935L10.1729 14.0816C10.4541 14.48 10.3971 15.0614 10.0456 15.3802C9.69401 15.6989 9.181 15.6343 8.89974 15.2359L4.55194 9.07651C4.31375 8.73908 4.31375 8.25962 4.55194 7.92219L8.89974 1.7628C9.181 1.36435 9.69401 1.29975 10.0456 1.61851Z"
                                                fill="white"
                                            />
                                        </svg>
                                        Back to Dashboard
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="edit_marker_tabs w-full lg:w-[70%] container mx-auto border border-gray-300 shadow-md rounded-[30px] p-[20px] lg:px-[20px] md:py-[20px] mb-[50px]">
                    <Tabs>
                        <TabList className="maintab">
                            <Tab>About</Tab>
                            <Tab>Timeline</Tab>
                            <Tab>Photos</Tab>
                            <Tab>Video</Tab>
                            <Tab>Stories</Tab>
                            <Tab>Web Links</Tab>
                            <Tab>Administrate</Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel>
                                <Tabs>
                                    <div className="flex">
                                        <div className="w-[30%] border-r border-gray-300">
                                            <h1 className="text-[25px] lg:text-[24px] font-[poppins] font-bold leading-normal border-b border-gray-300 pb-2 mb-2 text-[#4C4448]">
                                                About
                                            </h1>
                                            <TabList className="block">
                                                <Tab>Details</Tab>
                                                <Tab>Biography</Tab>
                                                <Tab>Family and Relationships</Tab>
                                                <Tab>Places Lived</Tab>
                                                <Tab>Work and Education</Tab>
                                                <Tab>Eulogy</Tab>
                                            </TabList>
                                        </div>
                                        <div className="w-[70%] flex justify-center items-center">
                                            <TabPanels>
                                                <TabPanel>
                                                    {/* Profile Details Tab */}
                                                    <div className="bg-white rounded-[30px] p-[15px]">
                                                        <div className="for1 flex justify-between items-center pb-5 border-b border-blueGray-200">
                                                            <div>
                                                                <h4 className="text-[20px] lg:text-[30px] font-[poppins] font-bold leading-normal mb-2 text-[#4C4448] mb-2">
                                                                    Wela Linda
                                                                </h4>
                                                            </div>
                                                            <div className="btn">
                                                                <button className="w-[150px] px-4 py-2 bg-[#38589C] text-[14px] font-[poppins] text-white rounded-lg hover:opacity-75 shadow-md hover:bg-[#38589C] focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                                    Save Button
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="flex w-full gap-[20px] pt-[20px] lg:px-[20px]">
                                                            <div className="w-full">
                                                                <label
                                                                    htmlFor="name"
                                                                    className="block text-gray-700 text-sm font-bold mb-2"
                                                                >
                                                                    Date of Birth
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    id="dob"
                                                                    name="dob"
                                                                    className="w-full border border-gray-300 rounded-[10px] p-3 font-[poppins]"
                                                                    placeholder="Sept 7, 1968"
                                                                />
                                                            </div>
                                                            <div className="w-full">
                                                                <label
                                                                    htmlFor="name"
                                                                    className="block text-gray-700 text-sm font-bold mb-2"
                                                                >
                                                                    Date of Death
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    id="dod"
                                                                    name="dod"
                                                                    className="w-full border border-gray-300 rounded-[10px] p-3 font-[poppins]"
                                                                    placeholder="March 18, 2002"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="w-full flex gap-[20px] pt-[20px] lg:px-[20px]">
                                                            <div className="w-full">
                                                                <label
                                                                    htmlFor="name"
                                                                    className="block text-gray-700 text-sm font-bold mb-2"
                                                                >
                                                                    City of Birth
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    id="cob"
                                                                    name="cob"
                                                                    className="w-full border border-gray-300 rounded-[10px] p-3 font-[poppins]"
                                                                    placeholder="California"
                                                                />
                                                            </div>
                                                            <div className="w-full">
                                                                <label
                                                                    htmlFor="name"
                                                                    className="block text-gray-700 text-sm font-bold mb-2"
                                                                >
                                                                    City of Death
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    id="cod"
                                                                    name="cod"
                                                                    className="w-full border border-gray-300 rounded-[10px] p-3 font-[poppins]"
                                                                    placeholder="Los Angales"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </TabPanel>
                                                <TabPanel className="m-[20px] rounded-[20px] border border-blueGray-300">
                                                    {/* Biography Tab */}
                                                    <div className="for1 flex justify-between items-center pb-5 mb-5 border-b border-blueGray-200">
                                                        <div className="btn">
                                                            <button
                                                                onClick={() => setIsModalOpen(true)}
                                                                className="flex w-[180px] items-center justify-center px-4 py-2 bg-[#38589C] text-[14px] font-[poppins] text-white rounded-lg hover:opacity-75 shadow-md hover:bg-[#38589C] focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                            >
                                                                <svg
                                                                    className="mr-2"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    viewBox="0 0 12 12"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M11.25 5.25H6.75V0.75C6.75 0.335789 6.41421 0 6 0C5.58579 0 5.25 0.335789 5.25 0.75V5.25H0.75C0.335789 5.25 0 5.58579 0 6C0 6.41421 0.335789 6.75 0.75 6.75H5.25V11.25C5.25 11.6642 5.58579 12 6 12C6.41421 12 6.75 11.6642 6.75 11.25V6.75H11.25C11.6642 6.75 12 6.41421 12 6C12 5.58579 11.6642 5.25 11.25 5.25Z"
                                                                        fill="white"
                                                                    />
                                                                </svg>
                                                                Add Biography
                                                            </button>
                                                        </div>
                                                        <div className="hs-dropdown relative inline-flex">
                                                            <Menu>
                                                                <MenuButton
                                                                    as={IconButton}
                                                                    aria-label="Options"
                                                                    icon={<Iconsvgdark />}
                                                                    variant="outline"
                                                                    className="bg-[#F0F0F0] menu_tab_bio"
                                                                />
                                                                <MenuList>
                                                                    <MenuItem
                                                                        className="font-[poppins] font-medium"
                                                                        icon={<Editicon />}
                                                                    >
                                                                        Edit
                                                                    </MenuItem>
                                                                    <MenuItem
                                                                        className="font-[poppins] font-medium"
                                                                        icon={<DeleteIcon />}
                                                                    >
                                                                        Delete
                                                                    </MenuItem>
                                                                </MenuList>
                                                            </Menu>
                                                        </div>
                                                        {/* Popup Modal */}
                                                        {isModalOpen && (
                                                            <div className="fixed top-0 left-0 z-50 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
                                                                <div className="bg-white rounded-[30px] p-8 m-[20px]">
                                                                    <h2 className="text-4xl font-[poppins] text-center font-bold leading-normal mb-2 text-[#4C4448] mb-2">New Biography</h2>
                                                                    {/* Add modal content here */}
                                                                    <Todo />
                                                                    <div className="flex gap-[25px]">
                                                                        <button type="button" className="rounded-[34px] bg-[#38589C] w-full h-14 mt-[30px] sm:mt-[80px] md:mt-[300px] lg:mt-[30px] xl:mt-[30px] py-[13px] px-5 text-base tracking-[2px] font-[poppins] text-[white] hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                                            Save Biography
                                                                        </button>
                                                                        <button
                                                                            onClick={() => setIsModalOpen(false)}
                                                                            className="rounded-[34px] bg-[#38589C] w-full h-14 mt-[30px] sm:mt-[80px] md:mt-[300px] lg:mt-[30px] xl:mt-[30px] py-[13px] px-5 text-base tracking-[2px] font-[poppins] text-[white] hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                        >
                                                                            Cancel
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="bg-[#F5F5F5] p-5 rounded-[15px]">
                                                        <p className="text-[14px] font-[poppins]">
                                                            Synergistically visualize clicks-and-mortar
                                                            channels for innovative systems. Appropriately
                                                            reintermediate multifunctional vortals via quality
                                                            intellectual capital. Collaboratively morph team
                                                            building "outside the box" thinking vis-a-vis
                                                            viral niche markets. Professionally evolve
                                                            tactical portals vis-a-vis error-free experiences.
                                                            Seamlessly fabricate diverse web-readiness without
                                                            process-centric resources.
                                                        </p>
                                                    </div>
                                                </TabPanel>
                                                <TabPanel>
                                                    {/* Family and relationships */}
                                                    <div className="for2 flex justify-between items-center pb-5 mt-12 mb-5 ml-5 border-b border-blueGray-200">
                                                        <div className="">
                                                            <h4 className="text-[20px] lg:text-[30px] font-[poppins] font-bold leading-normal mb-2 text-[#4C4448] mb-2">
                                                                Family and relationships
                                                            </h4>
                                                        </div>
                                                        <div className="btn">
                                                            <button
                                                                onClick={() => setIsModalOpen(true)}
                                                                className="flex w-[150px] items-center justify-center px-4 py-2 bg-[#38589C] text-[14px] font-[poppins] text-white rounded-lg hover:opacity-75 shadow-md hover:bg-[#38589C] focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                            >
                                                                <svg
                                                                    className="mr-2"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    viewBox="0 0 12 12"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M11.25 5.25H6.75V0.75C6.75 0.335789 6.41421 0 6 0C5.58579 0 5.25 0.335789 5.25 0.75V5.25H0.75C0.335789 5.25 0 5.58579 0 6C0 6.41421 0.335789 6.75 0.75 6.75H5.25V11.25C5.25 11.6642 5.58579 12 6 12C6.41421 12 6.75 11.6642 6.75 11.25V6.75H11.25C11.6642 6.75 12 6.41421 12 6C12 5.58579 11.6642 5.25 11.25 5.25Z"
                                                                        fill="white"
                                                                    />
                                                                </svg>
                                                                Add new
                                                            </button>
                                                        </div>
                                                        {isModalOpen && (
                                                            <div className="fixed top-0 left-0 z-50 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
                                                                <div className="bg-white rounded-[30px] p-8 m-[20px]">
                                                                    <h2 className="text-4xl font-[poppins] text-center font-bold leading-normal mb-2 text-[#4C4448] mb-2">Add Relationship</h2>
                                                                    <div className="flex justify-center gap-[10px] mb-6 mt-[20px]">
                                                                        <div className="cls">
                                                                            <label htmlFor="fileInputCover" className="cursor-pointer">
                                                                                {selectedprofileFile ? (
                                                                                    <img
                                                                                        src={URL.createObjectURL(selectedprofileFile)}
                                                                                        alt="Profile"
                                                                                        className="h-[7rem] w-[7rem] object-cover rounded-full border border-white-300"
                                                                                    />
                                                                                ) : (
                                                                                    <div className="h-[7rem] w-[7rem] bg-gray-200 flex justify-center items-center rounded-full border border-gray-300">
                                                                                        <svg
                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                            fill="none"
                                                                                            viewBox="0 0 24 24"
                                                                                            stroke="currentColor"
                                                                                            className="h-[30px] text-gray-400"
                                                                                        >
                                                                                            <path
                                                                                                strokeLinecap="round"
                                                                                                strokeLinejoin="round"
                                                                                                strokeWidth="2"
                                                                                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                                                                            />
                                                                                        </svg>
                                                                                    </div>
                                                                                )}
                                                                            </label>
                                                                            <input
                                                                                id="fileInputCover"
                                                                                type="file"
                                                                                accept="image/*"
                                                                                onChange={handleFileprofileChange}
                                                                                className="hidden"
                                                                            />
                                                                        </div>
                                                                        <div className="flex items-center">
                                                                            <p className="text-[#62585D] font-[poppins] leading-[20px]">At least 800x800 px recommended.<br />
                                                                                JPG or PNG and GIF is allowed</p>
                                                                        </div>
                                                                    </div>
                                                                    {/* Add modal content here */}
                                                                    <div className="flex gap-[20px] pt-[20px] lg:px-[20px]">
                                                                        <div className="">
                                                                            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                                                                            <input
                                                                                type="text"
                                                                                id="Apartment"
                                                                                name="Apartment"
                                                                                className="w-full border border-gray-300 rounded-[10px] p-3 font-[poppins]"
                                                                                placeholder="Type Here"
                                                                            />
                                                                        </div>
                                                                        <div className="">
                                                                            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Relationship</label>
                                                                            <input
                                                                                type="text"
                                                                                id="City"
                                                                                name="City"
                                                                                className="w-full border border-gray-300 rounded-[10px] p-3 font-[poppins]"
                                                                                placeholder="Type Here"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex flex-col gap-[20px] pt-[20px] px-[20px]">
                                                                        <div className="">
                                                                            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Add Link</label>
                                                                            <input
                                                                                type="text"
                                                                                id="street_address"
                                                                                name="street_address"
                                                                                className="w-full border border-gray-300 rounded-[10px] p-3 font-[poppins]"
                                                                                placeholder="Paste Existing LegacyMarker or Social media Profile Link"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex gap-[25px]">
                                                                        <button type="button" className="rounded-[34px] bg-[#38589C] w-full h-14 mt-[30px] sm:mt-[80px] md:mt-[300px] lg:mt-[30px] xl:mt-[30px] py-[13px] px-5 text-base tracking-[2px] font-[poppins] text-[white] hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                                            Save Relationship
                                                                        </button>
                                                                        <button
                                                                            onClick={() => setIsModalOpen(false)}
                                                                            className="rounded-[34px] bg-[#38589C] w-full h-14 mt-[30px] sm:mt-[80px] md:mt-[300px] lg:mt-[30px] xl:mt-[30px] py-[13px] px-5 text-base tracking-[2px] font-[poppins] text-[white] hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                        >
                                                                            Cancel
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                                                        <div className="flex items-center bg-[#38589C2A] justify-between shadow-md rounded-[30px] p-5">
                                                            <div className="flex items-center gap-5">
                                                                <div className="w-[50px] lg:w-[50px]">
                                                                    <Image
                                                                        src="https://smellmeloveme.shop/wp-content/uploads/2024/03/Rectangle-4312.png"
                                                                        width={100}
                                                                        height={100}
                                                                        alt="kuch bhi"
                                                                    />
                                                                </div>
                                                                <div className="">
                                                                    <h3 className="text-[18px] lg:text-[18px] font-[poppins] leading-normal text-[#4C4448]">
                                                                        Sr. Thomas Adison
                                                                    </h3>
                                                                    <p className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 text-[#888587] font-bold uppercase">
                                                                        Father
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-center">
                                                                <Menu>
                                                                    <MenuButton
                                                                        as={IconButton}
                                                                        aria-label="Options"
                                                                        icon={<Iconsvgdark />}
                                                                        variant="outline"
                                                                    />
                                                                    <MenuList>
                                                                        <MenuItem icon={<Editicon />}>
                                                                            Edit
                                                                        </MenuItem>
                                                                        <MenuItem icon={<DeleteIcon />}>
                                                                            Delete
                                                                        </MenuItem>
                                                                    </MenuList>
                                                                </Menu>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center bg-[#38589C2A] justify-between shadow-md rounded-[30px] p-5">
                                                            <div className="flex items-center gap-5">
                                                                <div className="w-[50px] lg:w-[50px]">
                                                                    <Image
                                                                        src="https://smellmeloveme.shop/wp-content/uploads/2024/03/Rectangle-4312-1.png"
                                                                        width={100}
                                                                        height={100}
                                                                        alt="kuch bhi"
                                                                    />
                                                                </div>
                                                                <div className="">
                                                                    <h3 className="text-[18px] lg:text-[18px] font-[poppins] leading-normal text-[#4C4448]">
                                                                        Wenee Linda
                                                                    </h3>
                                                                    <p className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 text-[#888587] font-bold uppercase">
                                                                        Mother
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-center">
                                                                <Menu>
                                                                    <MenuButton
                                                                        as={IconButton}
                                                                        aria-label="Options"
                                                                        icon={<Iconsvgdark />}
                                                                        variant="outline"
                                                                    />
                                                                    <MenuList>
                                                                        <MenuItem icon={<Editicon />}>
                                                                            Edit
                                                                        </MenuItem>
                                                                        <MenuItem icon={<DeleteIcon />}>
                                                                            Delete
                                                                        </MenuItem>
                                                                    </MenuList>
                                                                </Menu>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center bg-[#38589C2A] justify-between shadow-md rounded-[30px] p-5">
                                                            <div className="flex items-center gap-5">
                                                                <div className="w-[50px] lg:w-[50px]">
                                                                    <Image
                                                                        src="https://smellmeloveme.shop/wp-content/uploads/2024/03/Rectangle-4312-1.png"
                                                                        width={100}
                                                                        height={100}
                                                                        alt="kuch bhi"
                                                                    />
                                                                </div>
                                                                <div className="">
                                                                    <h3 className="text-[18px] lg:text-[18px] font-[poppins] leading-normal text-[#4C4448]">
                                                                        Wela Linda
                                                                    </h3>
                                                                    <p className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 text-[#888587] font-bold uppercase">
                                                                        Mother
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-center">
                                                                <Menu>
                                                                    <MenuButton
                                                                        as={IconButton}
                                                                        aria-label="Options"
                                                                        icon={<Iconsvgdark />}
                                                                        variant="outline"
                                                                    />
                                                                    <MenuList>
                                                                        <MenuItem icon={<Editicon />}>
                                                                            Edit
                                                                        </MenuItem>
                                                                        <MenuItem icon={<DeleteIcon />}>
                                                                            Delete
                                                                        </MenuItem>
                                                                    </MenuList>
                                                                </Menu>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center bg-[#38589C2A] justify-between shadow-md rounded-[30px] p-5">
                                                            <div className="flex items-center gap-5">
                                                                <div className="w-[50px] lg:w-[50px]">
                                                                    <Image
                                                                        src="https://smellmeloveme.shop/wp-content/uploads/2024/03/Rectangle-4312.png"
                                                                        width={100}
                                                                        height={100}
                                                                        alt="kuch bhi"
                                                                    />
                                                                </div>
                                                                <div className="">
                                                                    <h3 className="text-[18px] lg:text-[18px] font-[poppins] leading-normal text-[#4C4448]">
                                                                        Sr. Thomas Adison
                                                                    </h3>
                                                                    <p className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 text-[#888587] font-bold uppercase">
                                                                        Father
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-center">
                                                                <Menu>
                                                                    <MenuButton
                                                                        as={IconButton}
                                                                        aria-label="Options"
                                                                        icon={<Iconsvgdark />}
                                                                        variant="outline"
                                                                    />
                                                                    <MenuList>
                                                                        <MenuItem icon={<Editicon />}>
                                                                            Edit
                                                                        </MenuItem>
                                                                        <MenuItem icon={<DeleteIcon />}>
                                                                            Delete
                                                                        </MenuItem>
                                                                    </MenuList>
                                                                </Menu>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </TabPanel>
                                                <TabPanel>
                                                    <div className="for3 flex justify-between items-center pb-5 mt-12 mb-5 ml-5 border-b border-blueGray-200">
                                                        {/* Place Lived Tab */}
                                                        <div className="">
                                                            <h4 className="text-[20px] lg:text-[30px] font-[poppins] font-bold leading-normal mb-2 text-[#4C4448] mb-2">
                                                                Place Lived
                                                            </h4>
                                                        </div>
                                                        <div className="btn">
                                                            <button
                                                                onClick={() => setIsModalOpen(true)}
                                                                className="flex w-[150px] items-center justify-center px-4 py-2 bg-[#38589C] text-[14px] font-[poppins] text-white rounded-lg hover:opacity-75 shadow-md hover:bg-[#38589C] focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                            >
                                                                <svg
                                                                    className="mr-2"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    viewBox="0 0 12 12"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M11.25 5.25H6.75V0.75C6.75 0.335789 6.41421 0 6 0C5.58579 0 5.25 0.335789 5.25 0.75V5.25H0.75C0.335789 5.25 0 5.58579 0 6C0 6.41421 0.335789 6.75 0.75 6.75H5.25V11.25C5.25 11.6642 5.58579 12 6 12C6.41421 12 6.75 11.6642 6.75 11.25V6.75H11.25C11.6642 6.75 12 6.41421 12 6C12 5.58579 11.6642 5.25 11.25 5.25Z"
                                                                        fill="white"
                                                                    />
                                                                </svg>
                                                                Add new
                                                            </button>
                                                        </div>
                                                        {isModalOpen && (
                                                            <div className="fixed top-0 left-0 z-50 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
                                                                <div className="bg-white rounded-[30px] p-8 m-[20px]">
                                                                    <h2 className="text-4xl font-[poppins] text-center font-bold leading-normal mb-2 text-[#4C4448] mb-2">Add Place and Live</h2>
                                                                    {/* Add modal content here */}
                                                                    <div className="flex gap-[20px] pt-[20px] lg:px-[20px]">
                                                                        <div className="">
                                                                            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">City</label>
                                                                            <input
                                                                                type="text"
                                                                                id="Apartment"
                                                                                name="Apartment"
                                                                                className="w-full border border-gray-300 rounded-[10px] p-3 font-[poppins]"
                                                                                placeholder="Type Here"
                                                                            />
                                                                        </div>
                                                                        <div className="">
                                                                            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">State</label>
                                                                            <input
                                                                                type="text"
                                                                                id="City"
                                                                                name="City"
                                                                                className="w-full border border-gray-300 rounded-[10px] p-3 font-[poppins]"
                                                                                placeholder="Type Here"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex gap-[20px] pt-[20px] lg:px-[20px]">
                                                                        <div className="w-full">
                                                                            <label htmlFor="datepicker" className="block text-gray-700 text-sm font-bold mb-2">Starting year</label>
                                                                            <input
                                                                                type="date"
                                                                                id="datepicker"
                                                                                name="datepicker"
                                                                                value={selectedDate}
                                                                                onChange={handleDateChange}
                                                                                className="w-full border border-gray-300 rounded-[10px] p-3 font-[poppins]"
                                                                                placeholder="MM-YY-DD"
                                                                            />
                                                                        </div>
                                                                        <div className="w-full">
                                                                            <label htmlFor="datepicker" className="block text-gray-700 text-sm font-bold mb-2">End year</label>
                                                                            <input
                                                                                type="date"
                                                                                id="datepicker"
                                                                                name="datepicker"
                                                                                value={selectedDate}
                                                                                onChange={handleDateChange}
                                                                                className="w-full border border-gray-300 rounded-[10px] p-3 font-[poppins]"
                                                                                placeholder="MM-YY-DD"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex gap-[25px]">
                                                                        <button type="button" className="rounded-[34px] bg-[#38589C] w-full h-14 mt-[30px] sm:mt-[80px] md:mt-[300px] lg:mt-[30px] xl:mt-[30px] py-[13px] px-5 text-base tracking-[2px] font-[poppins] text-[white] hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                                            Save Place & Live
                                                                        </button>
                                                                        <button
                                                                            onClick={() => setIsModalOpen(false)}
                                                                            className="rounded-[34px] bg-[#38589C] w-full h-14 mt-[30px] sm:mt-[80px] md:mt-[300px] lg:mt-[30px] xl:mt-[30px] py-[13px] px-5 text-base tracking-[2px] font-[poppins] text-[white] hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                        >
                                                                            Cancel
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                                                        <div className="flex items-center border border-gray-300 justify-between shadow-md rounded-[30px] p-3">
                                                            <div className="flex items-center gap-3">
                                                                <div className="">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="27" viewBox="0 0 26 27" fill="none">
                                                                        <path d="M17.3333 11.8737C17.3333 13.9678 15.6357 15.6654 13.5417 15.6654C11.4476 15.6654 9.75 13.9678 9.75 11.8737C9.75 9.77962 11.4476 8.08203 13.5417 8.08203C15.6357 8.08203 17.3333 9.77962 17.3333 11.8737Z" stroke="#141B34" stroke-width="1.5" />
                                                                        <path d="M13.5404 2.66602C18.5237 2.66602 22.7487 7.03507 22.7487 12.3356C22.7487 17.7205 18.4549 21.4994 14.4888 24.0691C14.1998 24.2418 13.8729 24.3327 13.5404 24.3327C13.2078 24.3327 12.8809 24.2418 12.5919 24.0691C8.63324 21.4744 4.33203 17.7391 4.33203 12.3356C4.33203 7.03507 8.55706 2.66602 13.5404 2.66602Z" stroke="#141B34" stroke-width="1.5" />
                                                                    </svg>
                                                                </div>
                                                                <div className="">
                                                                    <h3 className="text-[18px] lg:text-[18px] font-[poppins] leading-normal text-[#4C4448]">
                                                                        Manhattan KS
                                                                    </h3>
                                                                    <p className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 text-[#888587] font-bold uppercase">
                                                                        Sep 1990 - May 1995
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-center">
                                                                <Menu>
                                                                    <MenuButton
                                                                        as={IconButton}
                                                                        aria-label="Options"
                                                                        icon={<Iconsvgdark />}
                                                                        variant="outline"
                                                                    />
                                                                    <MenuList>
                                                                        <MenuItem icon={<Editicon />}>
                                                                            Edit
                                                                        </MenuItem>
                                                                        <MenuItem icon={<DeleteIcon />}>
                                                                            Delete
                                                                        </MenuItem>
                                                                    </MenuList>
                                                                </Menu>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center border border-gray-300 justify-between shadow-md rounded-[30px] p-5">
                                                            <div className="flex items-center gap-3">
                                                                <div className="">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="27" viewBox="0 0 26 27" fill="none">
                                                                        <path d="M17.3333 11.8737C17.3333 13.9678 15.6357 15.6654 13.5417 15.6654C11.4476 15.6654 9.75 13.9678 9.75 11.8737C9.75 9.77962 11.4476 8.08203 13.5417 8.08203C15.6357 8.08203 17.3333 9.77962 17.3333 11.8737Z" stroke="#141B34" stroke-width="1.5" />
                                                                        <path d="M13.5404 2.66602C18.5237 2.66602 22.7487 7.03507 22.7487 12.3356C22.7487 17.7205 18.4549 21.4994 14.4888 24.0691C14.1998 24.2418 13.8729 24.3327 13.5404 24.3327C13.2078 24.3327 12.8809 24.2418 12.5919 24.0691C8.63324 21.4744 4.33203 17.7391 4.33203 12.3356C4.33203 7.03507 8.55706 2.66602 13.5404 2.66602Z" stroke="#141B34" stroke-width="1.5" />
                                                                    </svg>
                                                                </div>
                                                                <div className="">
                                                                    <h3 className="text-[18px] lg:text-[18px] font-[poppins] leading-normal text-[#4C4448]">
                                                                        Manhattan KS
                                                                    </h3>
                                                                    <p className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 text-[#888587] font-bold uppercase">
                                                                        Sep 1990 - May 1995
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-center">
                                                                <Menu>
                                                                    <MenuButton
                                                                        as={IconButton}
                                                                        aria-label="Options"
                                                                        icon={<Iconsvgdark />}
                                                                        variant="outline"
                                                                    />
                                                                    <MenuList>
                                                                        <MenuItem icon={<Editicon />}>
                                                                            Edit
                                                                        </MenuItem>
                                                                        <MenuItem icon={<DeleteIcon />}>
                                                                            Delete
                                                                        </MenuItem>
                                                                    </MenuList>
                                                                </Menu>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center border border-gray-300 justify-between shadow-md rounded-[30px] p-5">
                                                            <div className="flex items-center gap-3">
                                                                <div className="">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="27" viewBox="0 0 26 27" fill="none">
                                                                        <path d="M17.3333 11.8737C17.3333 13.9678 15.6357 15.6654 13.5417 15.6654C11.4476 15.6654 9.75 13.9678 9.75 11.8737C9.75 9.77962 11.4476 8.08203 13.5417 8.08203C15.6357 8.08203 17.3333 9.77962 17.3333 11.8737Z" stroke="#141B34" stroke-width="1.5" />
                                                                        <path d="M13.5404 2.66602C18.5237 2.66602 22.7487 7.03507 22.7487 12.3356C22.7487 17.7205 18.4549 21.4994 14.4888 24.0691C14.1998 24.2418 13.8729 24.3327 13.5404 24.3327C13.2078 24.3327 12.8809 24.2418 12.5919 24.0691C8.63324 21.4744 4.33203 17.7391 4.33203 12.3356C4.33203 7.03507 8.55706 2.66602 13.5404 2.66602Z" stroke="#141B34" stroke-width="1.5" />
                                                                    </svg>
                                                                </div>
                                                                <div className="">
                                                                    <h3 className="text-[18px] lg:text-[18px] font-[poppins] leading-normal text-[#4C4448]">
                                                                        Manhattan KS
                                                                    </h3>
                                                                    <p className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 text-[#888587] font-bold uppercase">
                                                                        Sep 1990 - May 1995
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-center">
                                                                <Menu>
                                                                    <MenuButton
                                                                        as={IconButton}
                                                                        aria-label="Options"
                                                                        icon={<Iconsvgdark />}
                                                                        variant="outline"
                                                                    />
                                                                    <MenuList>
                                                                        <MenuItem icon={<Editicon />}>
                                                                            Edit
                                                                        </MenuItem>
                                                                        <MenuItem icon={<DeleteIcon />}>
                                                                            Delete
                                                                        </MenuItem>
                                                                    </MenuList>
                                                                </Menu>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center border border-gray-300 justify-between shadow-md rounded-[30px] p-5">
                                                            <div className="flex items-center gap-3">
                                                                <div className="">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="27" viewBox="0 0 26 27" fill="none">
                                                                        <path d="M17.3333 11.8737C17.3333 13.9678 15.6357 15.6654 13.5417 15.6654C11.4476 15.6654 9.75 13.9678 9.75 11.8737C9.75 9.77962 11.4476 8.08203 13.5417 8.08203C15.6357 8.08203 17.3333 9.77962 17.3333 11.8737Z" stroke="#141B34" stroke-width="1.5" />
                                                                        <path d="M13.5404 2.66602C18.5237 2.66602 22.7487 7.03507 22.7487 12.3356C22.7487 17.7205 18.4549 21.4994 14.4888 24.0691C14.1998 24.2418 13.8729 24.3327 13.5404 24.3327C13.2078 24.3327 12.8809 24.2418 12.5919 24.0691C8.63324 21.4744 4.33203 17.7391 4.33203 12.3356C4.33203 7.03507 8.55706 2.66602 13.5404 2.66602Z" stroke="#141B34" stroke-width="1.5" />
                                                                    </svg>
                                                                </div>
                                                                <div className="">
                                                                    <h3 className="text-[18px] lg:text-[18px] font-[poppins] leading-normal text-[#4C4448]">
                                                                        Manhattan KS
                                                                    </h3>
                                                                    <p className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 text-[#888587] font-bold uppercase">
                                                                        Sep 1990 - May 1995
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-center">
                                                                <Menu>
                                                                    <MenuButton
                                                                        as={IconButton}
                                                                        aria-label="Options"
                                                                        icon={<Iconsvgdark />}
                                                                        variant="outline"
                                                                    />
                                                                    <MenuList>
                                                                        <MenuItem icon={<Editicon />}>
                                                                            Edit
                                                                        </MenuItem>
                                                                        <MenuItem icon={<DeleteIcon />}>
                                                                            Delete
                                                                        </MenuItem>
                                                                    </MenuList>
                                                                </Menu>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </TabPanel>
                                                <TabPanel>
                                                    <div className="for4 flex justify-between items-center pb-5 mt-12 mb-5 ml-5 border-b border-blueGray-200">
                                                        {/* Work and Educaiton */}
                                                        <div className="">
                                                            <h4 className="text-[20px] lg:text-[30px] font-[poppins] font-bold leading-normal mb-2 text-[#4C4448] mb-2">
                                                                Work and Educaiton
                                                            </h4>
                                                        </div>
                                                        <div className="btn">
                                                            <button
                                                                onClick={() => setIsModalOpen(true)}
                                                                className="flex w-[150px] items-center justify-center px-4 py-2 bg-[#38589C] text-[14px] font-[poppins] text-white rounded-lg hover:opacity-75 shadow-md hover:bg-[#38589C] focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                            >
                                                                <svg
                                                                    className="mr-2"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    viewBox="0 0 12 12"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M11.25 5.25H6.75V0.75C6.75 0.335789 6.41421 0 6 0C5.58579 0 5.25 0.335789 5.25 0.75V5.25H0.75C0.335789 5.25 0 5.58579 0 6C0 6.41421 0.335789 6.75 0.75 6.75H5.25V11.25C5.25 11.6642 5.58579 12 6 12C6.41421 12 6.75 11.6642 6.75 11.25V6.75H11.25C11.6642 6.75 12 6.41421 12 6C12 5.58579 11.6642 5.25 11.25 5.25Z"
                                                                        fill="white"
                                                                    />
                                                                </svg>
                                                                Add new
                                                            </button>
                                                        </div>
                                                        {isModalOpen && (
                                                            <div className="fixed top-0 left-0 z-50 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
                                                                <div className="bg-white rounded-[30px] p-8 m-[20px]">
                                                                    <h2 className="text-4xl font-[poppins] text-center font-bold leading-normal mb-2 text-[#4C4448] mb-2">Add Relationship</h2>
                                                                    {/* Add modal content here */}
                                                                    <div className="pt-[20px] lg:px-[20px]">
                                                                        <div className="">
                                                                            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Institution Name</label>
                                                                            <input
                                                                                type="text"
                                                                                id="Apartment"
                                                                                name="Apartment"
                                                                                className="w-full border border-gray-300 rounded-[10px] p-3 font-[poppins]"
                                                                                placeholder="Type Here"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex gap-[20px] pt-[20px] lg:px-[20px]">
                                                                        <div className="w-full">
                                                                            <label htmlFor="datepicker" className="block text-gray-700 text-sm font-bold mb-2">Starting year</label>
                                                                            <input
                                                                                type="date"
                                                                                id="datepicker"
                                                                                name="datepicker"
                                                                                value={selectedDate}
                                                                                onChange={handleDateChange}
                                                                                className="w-full border border-gray-300 rounded-[10px] p-3 font-[poppins]"
                                                                            />
                                                                        </div>
                                                                        <div className="w-full">
                                                                            <label htmlFor="datepicker" className="block text-gray-700 text-sm font-bold mb-2">End year</label>
                                                                            <input
                                                                                type="date"
                                                                                id="datepicker"
                                                                                name="datepicker"
                                                                                value={selectedDate}
                                                                                onChange={handleDateChange}
                                                                                className="w-full border border-gray-300 rounded-[10px] p-3 font-[poppins]"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex gap-[25px]">
                                                                        <button type="button" className="rounded-[34px] bg-[#38589C] w-full h-14 mt-[30px] sm:mt-[80px] md:mt-[300px] lg:mt-[30px] xl:mt-[30px] py-[13px] px-5 text-base tracking-[2px] font-[poppins] text-[white] hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                                            Save Work
                                                                        </button>
                                                                        <button
                                                                            onClick={() => setIsModalOpen(false)}
                                                                            className="rounded-[34px] bg-[#38589C] w-full h-14 mt-[30px] sm:mt-[80px] md:mt-[300px] lg:mt-[30px] xl:mt-[30px] py-[13px] px-5 text-base tracking-[2px] font-[poppins] text-[white] hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                        >
                                                                            Cancel
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                                                        <div className="flex items-center border border-gray-300 justify-between shadow-md rounded-[30px] p-3">
                                                            <div className="flex items-center gap-3">
                                                                <div className="">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none">
                                                                        <path d="M8.66797 5.75C8.66797 4.64543 9.5634 3.75 10.668 3.75H15.3346C16.4392 3.75 17.3346 4.64543 17.3346 5.75V7H8.66797V5.75Z" stroke="black" stroke-width="1.5" stroke-linejoin="round" />
                                                                        <path d="M2.16797 9C2.16797 7.89543 3.0634 7 4.16797 7H21.8346C22.9392 7 23.8346 7.89543 23.8346 9V21.25C23.8346 22.3546 22.9392 23.25 21.8346 23.25H13.0013H4.16797C3.0634 23.25 2.16797 22.3546 2.16797 21.25V9Z" stroke="black" stroke-width="1.5" stroke-linejoin="round" />
                                                                        <path d="M4.16797 7H21.8346C22.9392 7 23.8346 7.89543 23.8346 9V12.4167L13.0013 15.6667L2.16797 12.4167V9C2.16797 7.89543 3.0634 7 4.16797 7Z" stroke="black" stroke-width="1.5" stroke-linejoin="round" />
                                                                        <path d="M13 13.5V17.8333" stroke="black" stroke-width="1.5" stroke-linejoin="round" />
                                                                    </svg>
                                                                </div>
                                                                <div className="">
                                                                    <h3 className="text-[18px] lg:text-[18px] font-[poppins] leading-normal text-[#4C4448]">
                                                                        Company Name
                                                                    </h3>
                                                                    <p className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 text-[#888587] font-bold uppercase">
                                                                        Sep 1990 - May 1995
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-center">
                                                                <Menu>
                                                                    <MenuButton
                                                                        as={IconButton}
                                                                        aria-label="Options"
                                                                        icon={<Iconsvgdark />}
                                                                        variant="outline"
                                                                    />
                                                                    <MenuList>
                                                                        <MenuItem icon={<Editicon />}>
                                                                            Edit
                                                                        </MenuItem>
                                                                        <MenuItem icon={<DeleteIcon />}>
                                                                            Delete
                                                                        </MenuItem>
                                                                    </MenuList>
                                                                </Menu>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center border border-gray-300 justify-between shadow-md rounded-[30px] p-5">
                                                            <div className="flex items-center gap-3">
                                                                <div className="">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none">
                                                                        <path d="M8.66797 5.75C8.66797 4.64543 9.5634 3.75 10.668 3.75H15.3346C16.4392 3.75 17.3346 4.64543 17.3346 5.75V7H8.66797V5.75Z" stroke="black" stroke-width="1.5" stroke-linejoin="round" />
                                                                        <path d="M2.16797 9C2.16797 7.89543 3.0634 7 4.16797 7H21.8346C22.9392 7 23.8346 7.89543 23.8346 9V21.25C23.8346 22.3546 22.9392 23.25 21.8346 23.25H13.0013H4.16797C3.0634 23.25 2.16797 22.3546 2.16797 21.25V9Z" stroke="black" stroke-width="1.5" stroke-linejoin="round" />
                                                                        <path d="M4.16797 7H21.8346C22.9392 7 23.8346 7.89543 23.8346 9V12.4167L13.0013 15.6667L2.16797 12.4167V9C2.16797 7.89543 3.0634 7 4.16797 7Z" stroke="black" stroke-width="1.5" stroke-linejoin="round" />
                                                                        <path d="M13 13.5V17.8333" stroke="black" stroke-width="1.5" stroke-linejoin="round" />
                                                                    </svg>
                                                                </div>
                                                                <div className="">
                                                                    <h3 className="text-[18px] lg:text-[18px] font-[poppins] leading-normal text-[#4C4448]">
                                                                        Company Name
                                                                    </h3>
                                                                    <p className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 text-[#888587] font-bold uppercase">
                                                                        Sep 1990 - May 1995
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-center">
                                                                <Menu>
                                                                    <MenuButton
                                                                        as={IconButton}
                                                                        aria-label="Options"
                                                                        icon={<Iconsvgdark />}
                                                                        variant="outline"
                                                                    />
                                                                    <MenuList>
                                                                        <MenuItem icon={<Editicon />}>
                                                                            Edit
                                                                        </MenuItem>
                                                                        <MenuItem icon={<DeleteIcon />}>
                                                                            Delete
                                                                        </MenuItem>
                                                                    </MenuList>
                                                                </Menu>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center border border-gray-300 justify-between shadow-md rounded-[30px] p-5">
                                                            <div className="flex items-center gap-3">
                                                                <div className="">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none">
                                                                        <path d="M8.66797 5.75C8.66797 4.64543 9.5634 3.75 10.668 3.75H15.3346C16.4392 3.75 17.3346 4.64543 17.3346 5.75V7H8.66797V5.75Z" stroke="black" stroke-width="1.5" stroke-linejoin="round" />
                                                                        <path d="M2.16797 9C2.16797 7.89543 3.0634 7 4.16797 7H21.8346C22.9392 7 23.8346 7.89543 23.8346 9V21.25C23.8346 22.3546 22.9392 23.25 21.8346 23.25H13.0013H4.16797C3.0634 23.25 2.16797 22.3546 2.16797 21.25V9Z" stroke="black" stroke-width="1.5" stroke-linejoin="round" />
                                                                        <path d="M4.16797 7H21.8346C22.9392 7 23.8346 7.89543 23.8346 9V12.4167L13.0013 15.6667L2.16797 12.4167V9C2.16797 7.89543 3.0634 7 4.16797 7Z" stroke="black" stroke-width="1.5" stroke-linejoin="round" />
                                                                        <path d="M13 13.5V17.8333" stroke="black" stroke-width="1.5" stroke-linejoin="round" />
                                                                    </svg>
                                                                </div>
                                                                <div className="">
                                                                    <h3 className="text-[18px] lg:text-[18px] font-[poppins] leading-normal text-[#4C4448]">
                                                                        Company Name
                                                                    </h3>
                                                                    <p className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 text-[#888587] font-bold uppercase">
                                                                        Sep 1990 - May 1995
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-center">
                                                                <Menu>
                                                                    <MenuButton
                                                                        as={IconButton}
                                                                        aria-label="Options"
                                                                        icon={<Iconsvgdark />}
                                                                        variant="outline"
                                                                    />
                                                                    <MenuList>
                                                                        <MenuItem icon={<Editicon />}>
                                                                            Edit
                                                                        </MenuItem>
                                                                        <MenuItem icon={<DeleteIcon />}>
                                                                            Delete
                                                                        </MenuItem>
                                                                    </MenuList>
                                                                </Menu>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center border border-gray-300 justify-between shadow-md rounded-[30px] p-5">
                                                            <div className="flex items-center gap-3">
                                                                <div className="">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none">
                                                                        <path d="M8.66797 5.75C8.66797 4.64543 9.5634 3.75 10.668 3.75H15.3346C16.4392 3.75 17.3346 4.64543 17.3346 5.75V7H8.66797V5.75Z" stroke="black" stroke-width="1.5" stroke-linejoin="round" />
                                                                        <path d="M2.16797 9C2.16797 7.89543 3.0634 7 4.16797 7H21.8346C22.9392 7 23.8346 7.89543 23.8346 9V21.25C23.8346 22.3546 22.9392 23.25 21.8346 23.25H13.0013H4.16797C3.0634 23.25 2.16797 22.3546 2.16797 21.25V9Z" stroke="black" stroke-width="1.5" stroke-linejoin="round" />
                                                                        <path d="M4.16797 7H21.8346C22.9392 7 23.8346 7.89543 23.8346 9V12.4167L13.0013 15.6667L2.16797 12.4167V9C2.16797 7.89543 3.0634 7 4.16797 7Z" stroke="black" stroke-width="1.5" stroke-linejoin="round" />
                                                                        <path d="M13 13.5V17.8333" stroke="black" stroke-width="1.5" stroke-linejoin="round" />
                                                                    </svg>
                                                                </div>
                                                                <div className="">
                                                                    <h3 className="text-[18px] lg:text-[18px] font-[poppins] leading-normal text-[#4C4448]">
                                                                        Company Name
                                                                    </h3>
                                                                    <p className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 text-[#888587] font-bold uppercase">
                                                                        Sep 1990 - May 1995
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-center">
                                                                <Menu>
                                                                    <MenuButton
                                                                        as={IconButton}
                                                                        aria-label="Options"
                                                                        icon={<Iconsvgdark />}
                                                                        variant="outline"
                                                                    />
                                                                    <MenuList>
                                                                        <MenuItem icon={<Editicon />}>
                                                                            Edit
                                                                        </MenuItem>
                                                                        <MenuItem icon={<DeleteIcon />}>
                                                                            Delete
                                                                        </MenuItem>
                                                                    </MenuList>
                                                                </Menu>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </TabPanel>
                                                <TabPanel className="m-[20px] rounded-[20px] border border-blueGray-300">
                                                    <div className="for1 flex justify-between items-center pb-5 mb-5 border-b border-blueGray-200">
                                                        <div className="btn">
                                                            <button
                                                                onClick={() => setIsModalOpen(true)}
                                                                className="flex w-[150px] items-center justify-center px-4 py-2 bg-[#38589C] text-[14px] font-[poppins] text-white rounded-lg hover:opacity-75 shadow-md hover:bg-[#38589C] focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                            >
                                                                <svg
                                                                    className="mr-2"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    viewBox="0 0 12 12"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M11.25 5.25H6.75V0.75C6.75 0.335789 6.41421 0 6 0C5.58579 0 5.25 0.335789 5.25 0.75V5.25H0.75C0.335789 5.25 0 5.58579 0 6C0 6.41421 0.335789 6.75 0.75 6.75H5.25V11.25C5.25 11.6642 5.58579 12 6 12C6.41421 12 6.75 11.6642 6.75 11.25V6.75H11.25C11.6642 6.75 12 6.41421 12 6C12 5.58579 11.6642 5.25 11.25 5.25Z"
                                                                        fill="white"
                                                                    />
                                                                </svg>
                                                                Add Eulogy
                                                            </button>
                                                        </div>
                                                        <div className="hs-dropdown relative inline-flex">
                                                            <Menu>
                                                                <MenuButton
                                                                    as={IconButton}
                                                                    aria-label="Options"
                                                                    icon={<Iconsvgdark />}
                                                                    variant="outline"
                                                                    className="bg-[#F0F0F0] menu_tab_bio"
                                                                />
                                                                <MenuList>
                                                                    <MenuItem
                                                                        className="font-[poppins] font-medium"
                                                                        icon={<Editicon />}
                                                                    >
                                                                        Edit
                                                                    </MenuItem>
                                                                    <MenuItem
                                                                        className="font-[poppins] font-medium"
                                                                        icon={<DeleteIcon />}
                                                                    >
                                                                        Delete
                                                                    </MenuItem>
                                                                </MenuList>
                                                            </Menu>
                                                        </div>
                                                        {isModalOpen && (
                                                            <div className="fixed top-0 left-0 z-50 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
                                                                <div className="bg-white rounded-[30px] p-8 m-[20px]">
                                                                    <h2 className="text-4xl font-[poppins] text-center font-bold leading-normal mb-2 text-[#4C4448] mb-2">New Eulogy</h2>
                                                                    {/* Add modal content here */}
                                                                    <Todo />
                                                                    <div className="flex gap-[25px]">
                                                                        <button type="button" className="rounded-[34px] bg-[#38589C] w-full h-14 mt-[30px] sm:mt-[80px] md:mt-[300px] lg:mt-[30px] xl:mt-[30px] py-[13px] px-5 text-base tracking-[2px] font-[poppins] text-[white] hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                                            Save Eulogy
                                                                        </button>
                                                                        <button
                                                                            onClick={() => setIsModalOpen(false)}
                                                                            className="rounded-[34px] bg-[#38589C] w-full h-14 mt-[30px] sm:mt-[80px] md:mt-[300px] lg:mt-[30px] xl:mt-[30px] py-[13px] px-5 text-base tracking-[2px] font-[poppins] text-[white] hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                        >
                                                                            Cancel
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="bg-[#F5F5F5] p-5 rounded-[15px]">
                                                        <p className="text-[14px] font-[poppins]">
                                                            Synergistically visualize clicks-and-mortar
                                                            channels for innovative systems. Appropriately
                                                            reintermediate multifunctional vortals via quality
                                                            intellectual capital. Collaboratively morph team
                                                            building "outside the box" thinking vis-a-vis
                                                            viral niche markets. Professionally evolve
                                                            tactical portals vis-a-vis error-free experiences.
                                                            Seamlessly fabricate diverse web-readiness without
                                                            process-centric resources.
                                                        </p>
                                                    </div>
                                                </TabPanel>
                                            </TabPanels>
                                        </div>
                                    </div>
                                </Tabs>
                            </TabPanel>
                            <TabPanel>
                                <div className="my-[30px] for1 flex justify-between items-center pb-5 border-b border-blueGray-200">
                                    <div className="">
                                        <h4 className="text-[20px] lg:text-[30px] font-[poppins] font-bold leading-normal mb-2 text-[#4C4448] mb-2">
                                            Timeline
                                        </h4>
                                    </div>
                                    <div className="btn">
                                        <button
                                            onClick={() => setIsModalOpen(true)}
                                            className="flex w-[180px] items-center justify-center px-4 py-2 bg-[#38589C] text-[14px] font-[poppins] text-white rounded-lg hover:opacity-75 shadow-md hover:bg-[#38589C] focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <svg
                                                className="mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="12"
                                                height="12"
                                                viewBox="0 0 12 12"
                                                fill="none"
                                            >
                                                <path
                                                    d="M11.25 5.25H6.75V0.75C6.75 0.335789 6.41421 0 6 0C5.58579 0 5.25 0.335789 5.25 0.75V5.25H0.75C0.335789 5.25 0 5.58579 0 6C0 6.41421 0.335789 6.75 0.75 6.75H5.25V11.25C5.25 11.6642 5.58579 12 6 12C6.41421 12 6.75 11.6642 6.75 11.25V6.75H11.25C11.6642 6.75 12 6.41421 12 6C12 5.58579 11.6642 5.25 11.25 5.25Z"
                                                    fill="white"
                                                />
                                            </svg>
                                            Add Timeline
                                        </button>
                                    </div>
                                </div>
                                <div className="grid grid-cols-5 grid-rows-7 gap-4">
                                    <div className="bg-[#D9D9D9] absolute w-[2px] h-[130vh] left-[50%] transform translate-x-1/2 translate-y-[5%]"></div>
                                    <div className="col-span-2">
                                        <div className="flex items-center border border-[#38589C] justify-between shadow-md rounded-[20px] p-5">
                                            <div className="flex items-center gap-5">
                                                <div className="">
                                                    <h3 className="text-[18px] lg:text-[36px] font-bold font-[poppins] leading-normal text-[#4C4448]">
                                                        Born In
                                                    </h3>
                                                    <p className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 text-[#888587] font-bold uppercase">
                                                        Phoenix AZ
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <Menu>
                                                    <MenuButton
                                                        as={IconButton}
                                                        aria-label="Options"
                                                        icon={<Iconsvgdark />}
                                                        variant="outline"
                                                    />
                                                    <MenuList>
                                                        <MenuItem icon={<Editicon />}>
                                                            Edit
                                                        </MenuItem>
                                                        <MenuItem icon={<DeleteIcon />}>
                                                            Delete
                                                        </MenuItem>
                                                    </MenuList>
                                                </Menu>
                                            </div>
                                            {/* <div className="absolute left-[38.45%] translate-x-[38.45%]">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="30" viewBox="0 0 26 30" fill="none">
                                                    <path d="M26 15L0.499999 29.7224L0.5 0.277567L26 15Z" fill="#38589C" />
                                                </svg>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="col-start-3">
                                        <div className="relative bg-white rounded-[10px] flex items-center border border-[#38589C] justify-center shadow-md p-5 mt-[30px]">
                                            <p className="text-[18px] leading-normal text-blueGray-400 text-[#38589C] font-bold uppercase">
                                                1809
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-start-3 row-start-3">
                                        <div className="relative bg-white rounded-[10px] flex items-center border border-[#38589C] justify-center shadow-md p-5 mt-[30px]">
                                            <p className="text-[18px] leading-normal text-blueGray-400 text-[#38589C] font-bold uppercase">
                                                1809
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-span-2 col-start-4 row-start-3">
                                        <div className="flex items-center border border-[#38589C] justify-between shadow-md rounded-[30px] p-5">
                                            <div className="flex items-center gap-5">
                                                <div className="">
                                                    <h3 className="text-[18px] lg:text-[36px] font-bold font-[poppins] leading-normal text-[#4C4448]">
                                                        Graduate
                                                    </h3>
                                                    <p className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 text-[#888587] font-bold uppercase">
                                                        School name
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <Menu>
                                                    <MenuButton
                                                        as={IconButton}
                                                        aria-label="Options"
                                                        icon={<Iconsvgdark />}
                                                        variant="outline"
                                                    />
                                                    <MenuList>
                                                        <MenuItem icon={<Editicon />}>
                                                            Edit
                                                        </MenuItem>
                                                        <MenuItem icon={<DeleteIcon />}>
                                                            Delete
                                                        </MenuItem>
                                                    </MenuList>
                                                </Menu>
                                            </div>
                                            {/* <div className="absolute right-[39.40%] transform translate-x[39.40%]">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="30" viewBox="0 0 26 30" fill="none">
                                                    <path d="M7.43094e-07 15L25.5 29.7224L25.5 0.277567L7.43094e-07 15Z" fill="#38589C" />
                                                </svg>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="col-span-2 col-start-1 row-start-5">
                                        <div className="flex items-center border border-[#38589C] justify-between shadow-md rounded-[30px] p-5">
                                            <div className="flex items-center gap-5">
                                                <div className="">
                                                    <h3 className="text-[18px] lg:text-[36px] font-bold font-[poppins] leading-normal text-[#4C4448]">
                                                        Becoem president of USA
                                                    </h3>
                                                    <p className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 text-[#888587] font-bold uppercase">
                                                        Phoenix AZ
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <Menu>
                                                    <MenuButton
                                                        as={IconButton}
                                                        aria-label="Options"
                                                        icon={<Iconsvgdark />}
                                                        variant="outline"
                                                    />
                                                    <MenuList>
                                                        <MenuItem icon={<Editicon />}>
                                                            Edit
                                                        </MenuItem>
                                                        <MenuItem icon={<DeleteIcon />}>
                                                            Delete
                                                        </MenuItem>
                                                    </MenuList>
                                                </Menu>
                                            </div>
                                            {/* <div className="absolute left-[38.45%] translate-x-[38.45%]">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="30" viewBox="0 0 26 30" fill="none">
                                                    <path d="M26 15L0.499999 29.7224L0.5 0.277567L26 15Z" fill="#38589C" />
                                                </svg>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="col-start-3 row-start-5">
                                        <div className="relative bg-white rounded-[10px] flex items-center border border-[#38589C] justify-center shadow-md p-5 mt-[54px]">
                                            <p className="text-[18px] leading-normal text-blueGray-400 text-[#38589C] font-bold uppercase">
                                                1809
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-start-3 row-start-7">
                                        <div className="relative rounded-[10px] bg-white flex items-center border border-[#38589C] justify-center shadow-md p-5 mt-[30px]">
                                            <p className="text-[18px] leading-normal text-blueGray-400 text-[#38589C] font-bold uppercase">
                                                1809
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-span-2 col-start-4 row-start-7">
                                        <div className="flex items-center border border-[#38589C] justify-between shadow-md rounded-[30px] p-5">
                                            <div className="flex items-center gap-5">
                                                <div className="">
                                                    <h3 className="text-[18px] lg:text-[36px] font-bold font-[poppins] leading-normal text-[#4C4448]">
                                                        Death In
                                                    </h3>
                                                    <p className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 text-[#888587] font-bold uppercase">
                                                        Phoenix KS
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <Menu>
                                                    <MenuButton
                                                        as={IconButton}
                                                        aria-label="Options"
                                                        icon={<Iconsvgdark />}
                                                        variant="outline"
                                                    />
                                                    <MenuList>
                                                        <MenuItem icon={<Editicon />}>
                                                            Edit
                                                        </MenuItem>
                                                        <MenuItem icon={<DeleteIcon />}>
                                                            Delete
                                                        </MenuItem>
                                                    </MenuList>
                                                </Menu>
                                            </div>
                                            {/* <div className="absolute right-[39.40%] transform translate-x[39.40%]">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="30" viewBox="0 0 26 30" fill="none">
                                                    <path d="M7.43094e-07 15L25.5 29.7224L25.5 0.277567L7.43094e-07 15Z" fill="#38589C" />
                                                </svg>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="my-[30px] for1 flex justify-between items-center pb-5 border-b border-blueGray-200">
                                    <div className="">
                                        <h4 className="text-[20px] lg:text-[30px] font-[poppins] font-bold leading-normal mb-2 text-[#4C4448] mb-2">
                                            Photos
                                        </h4>
                                    </div>
                                    <div className="btn">
                                        <button
                                            onClick={() => setIsModalOpen(true)}
                                            className="flex w-[180px] items-center justify-center px-4 py-2 bg-[#38589C] text-[14px] font-[poppins] text-white rounded-lg hover:opacity-75 shadow-md hover:bg-[#38589C] focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <svg
                                                className="mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="12"
                                                height="12"
                                                viewBox="0 0 12 12"
                                                fill="none"
                                            >
                                                <path
                                                    d="M11.25 5.25H6.75V0.75C6.75 0.335789 6.41421 0 6 0C5.58579 0 5.25 0.335789 5.25 0.75V5.25H0.75C0.335789 5.25 0 5.58579 0 6C0 6.41421 0.335789 6.75 0.75 6.75H5.25V11.25C5.25 11.6642 5.58579 12 6 12C6.41421 12 6.75 11.6642 6.75 11.25V6.75H11.25C11.6642 6.75 12 6.41421 12 6C12 5.58579 11.6642 5.25 11.25 5.25Z"
                                                    fill="white"
                                                />
                                            </svg>
                                            Add Photos
                                        </button>
                                    </div>
                                </div>
                                <div className="grid grid-cols-5 grid-rows-4 gap-4">
                                    <div ><img src="https://smellmeloveme.shop/wp-content/uploads/2024/03/Frame-1000004292.png" alt="img1" /></div>
                                    <div ><img src="https://smellmeloveme.shop/wp-content/uploads/2024/03/Frame-627518.png" alt="img1" /></div>
                                    <div ><img src="https://smellmeloveme.shop/wp-content/uploads/2024/03/Frame-1000004295.png" alt="img1" /></div>
                                    <div ><img src="https://smellmeloveme.shop/wp-content/uploads/2024/03/Frame-1000004294.png" alt="img1" /></div>
                                    <div ><img src="https://smellmeloveme.shop/wp-content/uploads/2024/03/Frame-1000004293.png" alt="img1" /></div>
                                    <div ><img src="https://smellmeloveme.shop/wp-content/uploads/2024/03/Frame-1000004292.png" alt="img1" /></div>
                                    <div ><img src="https://smellmeloveme.shop/wp-content/uploads/2024/03/Frame-627518.png" alt="img1" /></div>
                                    <div ><img src="https://smellmeloveme.shop/wp-content/uploads/2024/03/Frame-1000004295.png" alt="img1" /></div>
                                    <div ><img src="https://smellmeloveme.shop/wp-content/uploads/2024/03/Frame-1000004294.png" alt="img1" /></div>
                                    <div ><img src="https://smellmeloveme.shop/wp-content/uploads/2024/03/Frame-1000004293.png" alt="img1" /></div>
                                    <div ><img src="https://smellmeloveme.shop/wp-content/uploads/2024/03/Frame-1000004292.png" alt="img1" /></div>
                                    <div ><img src="https://smellmeloveme.shop/wp-content/uploads/2024/03/Frame-627518.png" alt="img1" /></div>
                                    <div ><img src="https://smellmeloveme.shop/wp-content/uploads/2024/03/Frame-1000004295.png" alt="img1" /></div>
                                    <div ><img src="https://smellmeloveme.shop/wp-content/uploads/2024/03/Frame-1000004294.png" alt="img1" /></div>
                                    <div ><img src="https://smellmeloveme.shop/wp-content/uploads/2024/03/Frame-1000004293.png" alt="img1" /></div>
                                    <div ><img src="https://smellmeloveme.shop/wp-content/uploads/2024/03/Frame-1000004292.png" alt="img1" /></div>
                                    <div ><img src="https://smellmeloveme.shop/wp-content/uploads/2024/03/Frame-627518.png" alt="img1" /></div>
                                    <div ><img src="https://smellmeloveme.shop/wp-content/uploads/2024/03/Frame-1000004295.png" alt="img1" /></div>
                                    <div ><img src="https://smellmeloveme.shop/wp-content/uploads/2024/03/Frame-1000004294.png" alt="img1" /></div>
                                    <div ><img src="https://smellmeloveme.shop/wp-content/uploads/2024/03/Frame-1000004293.png" alt="img1" /></div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="my-[30px] for1 flex justify-between items-center pb-5 border-b border-blueGray-200">
                                    <div className="">
                                        <h4 className="text-[20px] lg:text-[30px] font-[poppins] font-bold leading-normal mb-2 text-[#4C4448] mb-2">
                                            Videos
                                        </h4>
                                    </div>
                                    <div className="btn">
                                        <button
                                            onClick={() => setIsModalOpen(true)}
                                            className="flex w-[180px] items-center justify-center px-4 py-2 bg-[#38589C] text-[14px] font-[poppins] text-white rounded-lg hover:opacity-75 shadow-md hover:bg-[#38589C] focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <svg
                                                className="mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="12"
                                                height="12"
                                                viewBox="0 0 12 12"
                                                fill="none"
                                            >
                                                <path
                                                    d="M11.25 5.25H6.75V0.75C6.75 0.335789 6.41421 0 6 0C5.58579 0 5.25 0.335789 5.25 0.75V5.25H0.75C0.335789 5.25 0 5.58579 0 6C0 6.41421 0.335789 6.75 0.75 6.75H5.25V11.25C5.25 11.6642 5.58579 12 6 12C6.41421 12 6.75 11.6642 6.75 11.25V6.75H11.25C11.6642 6.75 12 6.41421 12 6C12 5.58579 11.6642 5.25 11.25 5.25Z"
                                                    fill="white"
                                                />
                                            </svg>
                                            Add Videos
                                        </button>
                                    </div>
                                    {isModalOpen && (
                                        <div className="fixed top-0 left-0 z-50 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
                                            <div className="bg-white rounded-[30px] p-8 m-[20px]">
                                                <h2 className="text-4xl font-[poppins] text-center font-bold leading-normal mb-2 text-[#4C4448] mb-2">Add Videos</h2>
                                                {/* Add modal content here */}
                                                <div className="flex gap-[10px] justify-center mt-[20px]">
                                                    <div className="flex items-center">
                                                        <input
                                                            type="radio"
                                                            id="radioButton1"
                                                            name="radioGroup"
                                                            value="option1"
                                                            className="form-radio h-5 w-5 text-blue-600"
                                                        />
                                                        <label htmlFor="radioButton1" className="block font-[poppins] text-gray-700 text-[20px] ml-2">Youtube</label>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <input
                                                            type="radio"
                                                            id="radioButton2"
                                                            name="radioGroup"
                                                            value="option2"
                                                            className="form-radio h-5 w-5 text-blue-600"
                                                        />
                                                        <label htmlFor="radioButton2" className="block font-[poppins] text-gray-700 text-[20px] ml-2">Vimeo</label>
                                                    </div>
                                                </div>
                                                <div className="p-4">
                                                    <label htmlFor="customVideoUpload" className="block font-[poppins] text-gray-700 text-sm font-bold mb-2">Select a Video:</label>
                                                    <input
                                                        type="file"
                                                        id="customVideoUpload"
                                                        name="customVideoUpload"
                                                        accept="video/*"
                                                        onChange={handleVideoChange}
                                                        className="border border-[#D8D5D6] rounded px-3 py-2"
                                                    />
                                                </div>
                                                <div className="flex gap-[25px]">
                                                    <button type="button" className="rounded-[34px] bg-[#38589C] w-full h-14 mt-[30px] sm:mt-[80px] md:mt-[300px] lg:mt-[30px] xl:mt-[30px] py-[13px] px-5 text-base tracking-[2px] font-[poppins] text-[white] hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                        Save Video
                                                    </button>
                                                    <button
                                                        onClick={() => setIsModalOpen(false)}
                                                        className="rounded-[34px] bg-[#38589C] w-full h-14 mt-[30px] sm:mt-[80px] md:mt-[300px] lg:mt-[30px] xl:mt-[30px] py-[13px] px-5 text-base tracking-[2px] font-[poppins] text-[white] hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="grid grid-cols-4 grid-rows-2 gap-4">
                                    <div ><img src="https://smellmeloveme.shop/wp-content/uploads/2024/03/Frame-1000004303.png" alt="img1" /></div>
                                    <div ><img src="https://smellmeloveme.shop/wp-content/uploads/2024/03/Frame-1000004304.png" alt="img1" /></div>
                                    <div ><img src="https://smellmeloveme.shop/wp-content/uploads/2024/03/Frame-1000004301.png" alt="img1" /></div>
                                    <div ><img src="https://smellmeloveme.shop/wp-content/uploads/2024/03/Frame-1000004302.png" alt="img1" /></div>
                                    <div ><img src="https://smellmeloveme.shop/wp-content/uploads/2024/03/Frame-1000004303.png" alt="img1" /></div>
                                    <div ><img src="https://smellmeloveme.shop/wp-content/uploads/2024/03/Frame-1000004304.png" alt="img1" /></div>
                                    <div ><img src="https://smellmeloveme.shop/wp-content/uploads/2024/03/Frame-1000004301.png" alt="img1" /></div>
                                    <div ><img src="https://smellmeloveme.shop/wp-content/uploads/2024/03/Frame-1000004302.png" alt="img1" /></div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="my-[30px] for1 flex justify-between items-center pb-5 border-b border-blueGray-200">
                                    <div className="">
                                        <h4 className="text-[20px] lg:text-[30px] font-[poppins] font-bold leading-normal mb-2 text-[#4C4448] mb-2">
                                            Stories
                                        </h4>
                                    </div>
                                    <div className="btn">
                                        <button
                                            onClick={() => setIsModalOpen(true)}
                                            className="flex w-[180px] items-center justify-center px-4 py-2 bg-[#38589C] text-[14px] font-[poppins] text-white rounded-lg hover:opacity-75 shadow-md hover:bg-[#38589C] focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <svg
                                                className="mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="12"
                                                height="12"
                                                viewBox="0 0 12 12"
                                                fill="none"
                                            >
                                                <path
                                                    d="M11.25 5.25H6.75V0.75C6.75 0.335789 6.41421 0 6 0C5.58579 0 5.25 0.335789 5.25 0.75V5.25H0.75C0.335789 5.25 0 5.58579 0 6C0 6.41421 0.335789 6.75 0.75 6.75H5.25V11.25C5.25 11.6642 5.58579 12 6 12C6.41421 12 6.75 11.6642 6.75 11.25V6.75H11.25C11.6642 6.75 12 6.41421 12 6C12 5.58579 11.6642 5.25 11.25 5.25Z"
                                                    fill="white"
                                                />
                                            </svg>
                                            Add Story
                                        </button>
                                    </div>
                                    {isModalOpen && (
                                        <div className="fixed top-0 left-0 z-50 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
                                            <div className="bg-white rounded-[30px] p-8 m-[20px]">
                                                <h2 className="text-4xl font-[poppins] text-center font-bold leading-normal mb-2 text-[#4C4448] mb-2">New Story</h2>
                                                {/* Add modal content here */}
                                                <Todo />
                                                <div className="flex gap-[25px]">
                                                    <button type="button" className="rounded-[34px] bg-[#38589C] w-full h-14 mt-[30px] sm:mt-[80px] md:mt-[300px] lg:mt-[30px] xl:mt-[30px] py-[13px] px-5 text-base tracking-[2px] font-[poppins] text-[white] hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                        Save Story
                                                    </button>
                                                    <button
                                                        onClick={() => setIsModalOpen(false)}
                                                        className="rounded-[34px] bg-[#38589C] w-full h-14 mt-[30px] sm:mt-[80px] md:mt-[300px] lg:mt-[30px] xl:mt-[30px] py-[13px] px-5 text-base tracking-[2px] font-[poppins] text-[white] hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="bg-[#F4F6F9] p-5 rounded-[15px]">
                                    <div className="for654 flex justify-between items-center pb-5 mb-5 border-b border-blueGray-200">
                                        <div className="btn">
                                            <h3 className="text-[18px] lg:text-[20px] font-[poppins] font-[700] leading-normal mb-2 text-[#4C4448] mb-2">Story Title Here</h3>
                                            <p className="font-[#62585D] font-[poppins]">By: John Wick</p>
                                        </div>
                                        <div className="hs-dropdown relative inline-flex">
                                            <Menu>
                                                <MenuButton
                                                    as={IconButton}
                                                    aria-label="Options"
                                                    icon={<Iconsvgdark />}
                                                    variant="outline"
                                                    className="bg-white menu_tab_bio"
                                                />
                                                <MenuList>
                                                    <MenuItem
                                                        className="font-[poppins] font-medium"
                                                        icon={<Editicon />}
                                                    >
                                                        Edit
                                                    </MenuItem>
                                                    <MenuItem
                                                        className="font-[poppins] font-medium"
                                                        icon={<DeleteIcon />}
                                                    >
                                                        Delete
                                                    </MenuItem>
                                                </MenuList>
                                            </Menu>
                                        </div>
                                    </div>
                                    <p className="text-[14px] font-[poppins]">
                                        Synergistically visualize clicks-and-mortar channels for innovative systems. Appropriately reintermediate multifunctional vortals via quality intellectual capital. Collaboratively morph team building "outside the box" thinking vis-a-vis viral niche markets. Professionally evolve tactical portals vis-a-vis error-free experiences. Seamlessly fabricate diverse web-readiness without process-centric resources.
                                        Synergistically visualize clicks-and-mortar channels for innovative systems. Appropriately reintermediate multifunctional vortals via quality intellectual capital. Collaboratively morph team building "outside the box" thinking vis-a-vis viral niche markets. Professionally evolve tactical portals vis-a-vis error-free experiences. Seamlessly fabricate diverse web-readiness without process-centric resources.
                                    </p>
                                </div>
                                <div className="bg-[#F4F6F9] p-5 mt-5 rounded-[15px]">
                                    <div className="for654 flex justify-between items-center pb-5 mb-5 border-b border-blueGray-200">
                                        <div className="btn">
                                            <h3 className="text-[18px] lg:text-[20px] font-[poppins] font-[700] leading-normal mb-2 text-[#4C4448] mb-2">Story Title Here</h3>
                                            <p className="font-[#62585D] font-[poppins]">By: John Wick</p>
                                        </div>
                                        <div className="hs-dropdown relative inline-flex">
                                            <Menu>
                                                <MenuButton
                                                    as={IconButton}
                                                    aria-label="Options"
                                                    icon={<Iconsvgdark />}
                                                    variant="outline"
                                                    className="bg-white menu_tab_bio"
                                                />
                                                <MenuList>
                                                    <MenuItem
                                                        className="font-[poppins] font-medium"
                                                        icon={<Editicon />}
                                                    >
                                                        Edit
                                                    </MenuItem>
                                                    <MenuItem
                                                        className="font-[poppins] font-medium"
                                                        icon={<DeleteIcon />}
                                                    >
                                                        Delete
                                                    </MenuItem>
                                                </MenuList>
                                            </Menu>
                                        </div>
                                    </div>
                                    <p className="text-[14px] font-[poppins]">
                                        Synergistically visualize clicks-and-mortar channels for innovative systems. Appropriately reintermediate multifunctional vortals via quality intellectual capital. Collaboratively morph team building "outside the box" thinking vis-a-vis viral niche markets. Professionally evolve tactical portals vis-a-vis error-free experiences. Seamlessly fabricate diverse web-readiness without process-centric resources.
                                        Synergistically visualize clicks-and-mortar channels for innovative systems. Appropriately reintermediate multifunctional vortals via quality intellectual capital. Collaboratively morph team building "outside the box" thinking vis-a-vis viral niche markets. Professionally evolve tactical portals vis-a-vis error-free experiences. Seamlessly fabricate diverse web-readiness without process-centric resources.
                                    </p>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="my-[30px] for1 flex justify-between items-center pb-5 border-b border-blueGray-200">
                                    <div className="">
                                        <h4 className="text-[20px] lg:text-[30px] font-[poppins] font-bold leading-normal mb-2 text-[#4C4448] mb-2">
                                            Add Web Links
                                        </h4>
                                    </div>
                                    <div className="btn">
                                        <button
                                            onClick={() => setIsModalOpen(true)}
                                            className="flex w-[180px] items-center justify-center px-4 py-2 bg-[#38589C] text-[14px] font-[poppins] text-white rounded-lg hover:opacity-75 shadow-md hover:bg-[#38589C] focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <svg
                                                className="mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="12"
                                                height="12"
                                                viewBox="0 0 12 12"
                                                fill="none"
                                            >
                                                <path
                                                    d="M11.25 5.25H6.75V0.75C6.75 0.335789 6.41421 0 6 0C5.58579 0 5.25 0.335789 5.25 0.75V5.25H0.75C0.335789 5.25 0 5.58579 0 6C0 6.41421 0.335789 6.75 0.75 6.75H5.25V11.25C5.25 11.6642 5.58579 12 6 12C6.41421 12 6.75 11.6642 6.75 11.25V6.75H11.25C11.6642 6.75 12 6.41421 12 6C12 5.58579 11.6642 5.25 11.25 5.25Z"
                                                    fill="white"
                                                />
                                            </svg>
                                            Add New Links
                                        </button>
                                    </div>
                                    {isModalOpen && (
                                        <div className="fixed top-0 left-0 z-50 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
                                            <div className="bg-white rounded-[30px] p-8 m-[20px]">
                                                <h2 className="text-4xl font-[poppins] text-center font-bold leading-normal mb-2 text-[#4C4448] mb-2">Add New Web Links</h2>
                                                {/* Add modal content here */}
                                                <div className="">
                                                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                                                    <input
                                                        type="text"
                                                        id="Apartment"
                                                        name="Apartment"
                                                        className="w-full border border-gray-300 rounded-[10px] p-3 font-[poppins]"
                                                        placeholder="Type Here"
                                                    />
                                                </div>
                                                <div className="mt-[20px]">
                                                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Links</label>
                                                    <input
                                                        type="text"
                                                        id="City"
                                                        name="City"
                                                        className="w-full border border-gray-300 rounded-[10px] p-3 font-[poppins]"
                                                        placeholder="Type Here"
                                                    />
                                                </div>

                                                <div className="flex gap-[25px]">
                                                    <button type="button" className="rounded-[34px] bg-[#38589C] w-full h-14 mt-[30px] sm:mt-[80px] md:mt-[300px] lg:mt-[30px] xl:mt-[30px] py-[13px] px-5 text-base tracking-[2px] font-[poppins] text-[white] hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                        Save Links
                                                    </button>
                                                    <button
                                                        onClick={() => setIsModalOpen(false)}
                                                        className="rounded-[34px] bg-[#38589C] w-full h-14 mt-[30px] sm:mt-[80px] md:mt-[300px] lg:mt-[30px] xl:mt-[30px] py-[13px] px-5 text-base tracking-[2px] font-[poppins] text-[white] hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>

                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    <div className="flex items-center justify-between border border-[#D8D5D6] shadow-md rounded-[30px] p-5">
                                        <div className="flex items-center gap-5">
                                            <div className="w-[50px] lg:w-[50px]">
                                                <Image
                                                    src="https://smellmeloveme.shop/wp-content/uploads/2024/03/Group-4534534.png"
                                                    width={100}
                                                    height={100}
                                                    alt="kuch bhi"
                                                />
                                            </div>
                                            <div className="">
                                                <h3 className="text-[18px] lg:text-[18px] font-[poppins] font-bold leading-normal text-[#4C4448]">
                                                    Facebook
                                                </h3>
                                                <p className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 text-[#888587]">
                                                    facebook.com/user989
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <Menu>
                                                <MenuButton
                                                    as={IconButton}
                                                    aria-label="Options"
                                                    icon={<Iconsvgdark />}
                                                    variant="outline"
                                                />
                                                <MenuList>
                                                    <MenuItem icon={<Editicon />}>
                                                        Edit
                                                    </MenuItem>
                                                    <MenuItem icon={<DeleteIcon />}>
                                                        Delete
                                                    </MenuItem>
                                                </MenuList>
                                            </Menu>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between border border-[#D8D5D6] shadow-md rounded-[30px] p-5">
                                        <div className="flex items-center gap-5">
                                            <div className="w-[50px] lg:w-[50px]">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 37 37" fill="none">
                                                    <rect width="37" height="37" rx="8" fill="#0480BE" />
                                                    <path d="M14.1381 26.9015V14.5011H10.0201V26.9015H14.1381ZM12.08 12.8084C13.5157 12.8084 14.4096 11.8562 14.4096 10.6662C14.3827 9.44907 13.5157 8.52344 12.1073 8.52344C10.6979 8.52344 9.77734 9.44907 9.77734 10.6661C9.77734 11.856 10.6709 12.8083 12.053 12.8083L12.08 12.8084ZM16.4175 26.9015H20.5352V19.9773C20.5352 19.6072 20.5621 19.2361 20.6709 18.9718C20.9684 18.231 21.646 17.4642 22.7839 17.4642C24.2736 17.4642 24.8699 18.6012 24.8699 20.2684V26.9015H28.9875V19.7915C28.9875 15.9828 26.9562 14.2104 24.2469 14.2104C22.0257 14.2104 21.0501 15.453 20.5081 16.2993H20.5356V14.5016H16.4177C16.4715 15.6649 16.4175 26.9015 16.4175 26.9015Z" fill="white" />
                                                </svg>
                                            </div>
                                            <div className="">
                                                <h3 className="text-[18px] lg:text-[18px] font-[poppins] font-bold leading-normal text-[#4C4448]">
                                                    Linked In
                                                </h3>
                                                <p className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 text-[#888587]">
                                                    linkedin.com/user989
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <Menu>
                                                <MenuButton
                                                    as={IconButton}
                                                    aria-label="Options"
                                                    icon={<Iconsvgdark />}
                                                    variant="outline"
                                                />
                                                <MenuList>
                                                    <MenuItem icon={<Editicon />}>
                                                        Edit
                                                    </MenuItem>
                                                    <MenuItem icon={<DeleteIcon />}>
                                                        Delete
                                                    </MenuItem>
                                                </MenuList>
                                            </Menu>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between border border-[#D8D5D6] shadow-md rounded-[30px] p-5">
                                        <div className="flex items-center gap-5">
                                            <div className="w-[50px] lg:w-[50px]">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 37 37" fill="none">
                                                    <g clip-path="url(#clip0_856_6869)">
                                                        <path d="M2.31108 2.51714C-0.596505 5.53726 -0.00142213 8.74547 -0.00142213 18.4919C-0.00142213 26.5856 -1.41359 34.6994 5.97716 36.6096C8.28504 37.2031 28.7337 37.2031 31.0385 36.6065C34.1157 35.8125 36.6193 33.3166 36.9616 28.9644C37.0094 28.357 37.0094 8.63755 36.96 8.0178C36.5962 3.38201 33.7426 0.710302 29.9825 0.169177C29.1207 0.0443018 28.948 0.00730175 24.5265 -0.00040658C8.84312 0.00730175 5.4052 -0.691073 2.31108 2.51714Z" fill="url(#paint0_linear_856_6869)" />
                                                        <path d="M18.495 4.83936C12.8972 4.83936 7.58154 4.3414 5.55117 9.55223C4.7125 11.7044 4.83429 14.4994 4.83429 18.5016C4.83429 22.0135 4.72175 25.3142 5.55117 27.4494C7.57692 32.6634 12.9358 32.1639 18.4919 32.1639C23.8523 32.1639 29.3792 32.7219 31.4342 27.4494C32.2744 25.2757 32.1511 22.5223 32.1511 18.5016C32.1511 13.1644 32.4455 9.71873 29.8571 7.13181C27.2363 4.51098 23.692 4.83936 18.4888 4.83936H18.495ZM17.2709 7.3014C28.9475 7.2829 30.4337 5.98482 29.6135 24.0177C29.3221 30.3956 24.4659 29.6956 18.4965 29.6956C7.61238 29.6956 7.29942 29.3842 7.29942 18.4954C7.29942 7.48023 8.16275 7.30757 17.2709 7.29832V7.3014ZM25.7871 9.56919C24.8821 9.56919 24.1483 10.303 24.1483 11.208C24.1483 12.1129 24.8821 12.8468 25.7871 12.8468C26.692 12.8468 27.4259 12.1129 27.4259 11.208C27.4259 10.303 26.692 9.56919 25.7871 9.56919ZM18.495 11.4855C14.6208 11.4855 11.4804 14.6274 11.4804 18.5016C11.4804 22.3758 14.6208 25.5162 18.495 25.5162C22.3692 25.5162 25.508 22.3758 25.508 18.5016C25.508 14.6274 22.3692 11.4855 18.495 11.4855ZM18.495 13.9475C24.5152 13.9475 24.5229 23.0557 18.495 23.0557C12.4763 23.0557 12.4671 13.9475 18.495 13.9475Z" fill="white" />
                                                    </g>
                                                    <defs>
                                                        <linearGradient id="paint0_linear_856_6869" x1="2.38203" y1="34.6364" x2="36.7696" y2="4.87431" gradientUnits="userSpaceOnUse">
                                                            <stop stop-color="#FFDD55" />
                                                            <stop offset="0.5" stop-color="#FF543E" />
                                                            <stop offset="1" stop-color="#C837AB" />
                                                        </linearGradient>
                                                        <clipPath id="clip0_856_6869">
                                                            <rect width="37" height="37" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <div className="">
                                                <h3 className="text-[18px] lg:text-[18px] font-[poppins] font-bold leading-normal text-[#4C4448]">
                                                    Instagram
                                                </h3>
                                                <p className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 text-[#888587]">
                                                    instagram.com/user989
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <Menu>
                                                <MenuButton
                                                    as={IconButton}
                                                    aria-label="Options"
                                                    icon={<Iconsvgdark />}
                                                    variant="outline"
                                                />
                                                <MenuList>
                                                    <MenuItem icon={<Editicon />}>
                                                        Edit
                                                    </MenuItem>
                                                    <MenuItem icon={<DeleteIcon />}>
                                                        Delete
                                                    </MenuItem>
                                                </MenuList>
                                            </Menu>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <Tabs>
                                    <div className="flex">
                                        <div className="w-[30%] border-r border-gray-300">
                                            <h1 className="text-[25px] lg:text-[24px] font-[poppins] font-bold leading-normal border-b border-gray-300 pb-2 mb-2 text-[#4C4448]">
                                                Administrate
                                            </h1>
                                            <TabList className="block">
                                                <Tab className="editnth_1">Ownership</Tab>
                                                <Tab className="editnth_1">Order</Tab>
                                            </TabList>
                                        </div>
                                        <div className="w-[70%] flex justify-center items-center">
                                            <TabPanels>
                                                <TabPanel>
                                                    {/* Administrate Details Tab */}
                                                    <div className="for3 flex justify-between items-center pb-5 mt-12 mb-5 ml-5 border-b border-blueGray-200">
                                                        {/* Administrate Lived Tab */}
                                                        <div className="">
                                                            <h4 className="text-[20px] lg:text-[30px] font-[poppins] font-bold leading-normal mb-2 text-[#4C4448] mb-2">
                                                                Administrate
                                                            </h4>
                                                        </div>
                                                        <div className="btn">
                                                            <button
                                                                onClick={() => setIsModalOpen(true)}
                                                                className="flex w-[150px] items-center justify-center px-4 py-2 bg-[#38589C] text-[14px] font-[poppins] text-white rounded-lg hover:opacity-75 shadow-md hover:bg-[#38589C] focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                            >
                                                                <svg
                                                                    className="mr-2"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    viewBox="0 0 12 12"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M11.25 5.25H6.75V0.75C6.75 0.335789 6.41421 0 6 0C5.58579 0 5.25 0.335789 5.25 0.75V5.25H0.75C0.335789 5.25 0 5.58579 0 6C0 6.41421 0.335789 6.75 0.75 6.75H5.25V11.25C5.25 11.6642 5.58579 12 6 12C6.41421 12 6.75 11.6642 6.75 11.25V6.75H11.25C11.6642 6.75 12 6.41421 12 6C12 5.58579 11.6642 5.25 11.25 5.25Z"
                                                                        fill="white"
                                                                    />
                                                                </svg>
                                                                Share Rights
                                                            </button>
                                                        </div>
                                                        {isModalOpen && (
                                                            <div className="fixed top-0 left-0 z-50 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
                                                                <div className="bg-white rounded-[30px] p-8 m-[20px]">
                                                                    <h2 className="text-4xl font-[poppins] text-center font-bold leading-normal mb-2 text-[#4C4448] mb-2">Add Secondary Owner</h2>
                                                                    {/* Add modal content here */}
                                                                    <div className="mt-[20px]">
                                                                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                                                                        <input
                                                                            type="email"
                                                                            id="City"
                                                                            name="City"
                                                                            className="w-full border border-gray-300 rounded-[10px] p-3 font-[poppins]"
                                                                            placeholder="Type Here"
                                                                        />
                                                                    </div>

                                                                    <div className="flex gap-[25px]">
                                                                        <button type="button" className="rounded-[34px] bg-[#38589C] w-full h-14 mt-[30px] sm:mt-[80px] md:mt-[300px] lg:mt-[30px] xl:mt-[30px] py-[13px] px-5 text-base tracking-[2px] font-[poppins] text-[white] hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                                            Add
                                                                        </button>
                                                                        <button
                                                                            onClick={() => setIsModalOpen(false)}
                                                                            className="rounded-[34px] bg-[#38589C] w-full h-14 mt-[30px] sm:mt-[80px] md:mt-[300px] lg:mt-[30px] xl:mt-[30px] py-[13px] px-5 text-base tracking-[2px] font-[poppins] text-[white] hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                        >
                                                                            Cancel
                                                                        </button>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5">
                                                        <div className="flex items-center border border-[#D8D5D6] justify-between shadow-md rounded-[30px] p-5">
                                                            <div className="flex items-center gap-5">
                                                                <div className="w-[73px] lg:w-[73px]">
                                                                    <Image
                                                                        src="https://smellmeloveme.shop/wp-content/uploads/2024/03/Group-4534534-2.png"
                                                                        width={100}
                                                                        height={100}
                                                                        alt="kuch bhi"
                                                                    />
                                                                </div>
                                                                <div className="">
                                                                    <h3 className="text-[20px] lg:text-[20px] font-[poppins] font-semibold leading-normal text-[#4C4448]">
                                                                        Sr. Thomas Adison
                                                                    </h3>
                                                                    <p className="text-sm font-[poppins] leading-normal mt-0 mb-2">
                                                                        Primary Owner
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-center">
                                                                <Menu>
                                                                    <MenuButton
                                                                        as={IconButton}
                                                                        aria-label="Options"
                                                                        icon={<Iconsvgdark />}
                                                                        variant="outline"
                                                                    />
                                                                    <MenuList>
                                                                        <MenuItem icon={<Editicon />}>
                                                                            Edit
                                                                        </MenuItem>
                                                                        <MenuItem icon={<DeleteIcon />}>
                                                                            Delete
                                                                        </MenuItem>
                                                                    </MenuList>
                                                                </Menu>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center border border-[#D8D5D6] justify-between shadow-md rounded-[30px] p-5">
                                                            <div className="flex items-center gap-5">
                                                                <div className="w-[73px] lg:w-[73px]">
                                                                    <Image
                                                                        src="https://smellmeloveme.shop/wp-content/uploads/2024/03/Group-4534534-1.png"
                                                                        width={100}
                                                                        height={100}
                                                                        alt="kuch bhi"
                                                                    />
                                                                </div>
                                                                <div className="">
                                                                    <h3 className="text-[18px] lg:text-[18px] font-[poppins] font-semibold leading-normal text-[#4C4448]">
                                                                        Sr. Thomas Adison
                                                                    </h3>
                                                                    <p className="text-sm font-[poppins] leading-normal mt-0 mb-2">
                                                                        Secondary Owner
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-center">
                                                                <Menu>
                                                                    <MenuButton
                                                                        as={IconButton}
                                                                        aria-label="Options"
                                                                        icon={<Iconsvgdark />}
                                                                        variant="outline"
                                                                    />
                                                                    <MenuList>
                                                                        <MenuItem icon={<Editicon />}>
                                                                            Edit
                                                                        </MenuItem>
                                                                        <MenuItem icon={<DeleteIcon />}>
                                                                            Delete
                                                                        </MenuItem>
                                                                    </MenuList>
                                                                </Menu>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </TabPanel>
                                                <TabPanel className="m-[20px] rounded-[20px] border border-blueGray-300">
                                                    {/* Administrate Tab */}
                                                    <div className="for3 flex justify-between items-center pb-5 mt-12 mb-5 ml-5 border-b border-blueGray-200">
                                                        {/* Administrate Lived Tab */}
                                                        <div className="">
                                                            <h4 className="text-[20px] lg:text-[30px] font-[poppins] font-bold leading-normal mb-2 text-[#4C4448] mb-2">
                                                                LegacyMarker Plaque
                                                            </h4>
                                                        </div>
                                                        <div className="btn flex gap-2">
                                                            <button
                                                                onClick={() => setIsModalOpen(true)}
                                                                className="flex w-[150px] items-center justify-center px-4 py-2 bg-[#38589C] text-[14px] font-[poppins] text-white rounded-lg hover:opacity-75 shadow-md hover:bg-[#38589C] focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                            >
                                                                <svg
                                                                    className="mr-2"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    viewBox="0 0 12 12"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M11.25 5.25H6.75V0.75C6.75 0.335789 6.41421 0 6 0C5.58579 0 5.25 0.335789 5.25 0.75V5.25H0.75C0.335789 5.25 0 5.58579 0 6C0 6.41421 0.335789 6.75 0.75 6.75H5.25V11.25C5.25 11.6642 5.58579 12 6 12C6.41421 12 6.75 11.6642 6.75 11.25V6.75H11.25C11.6642 6.75 12 6.41421 12 6C12 5.58579 11.6642 5.25 11.25 5.25Z"
                                                                        fill="white"
                                                                    />
                                                                </svg>
                                                                Order Plaque
                                                            </button>
                                                            <button className="flex items-center justify-center px-4 py-2 bg-[#EBEEF5] text-black  shadow-md rounded-[30px] focus:outline-none focus:ring-2 focus:ring-blue-500">

                                                                <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                                                    <path d="M11.659 4.00836C12.2551 3.36247 12.5532 3.03952 12.8699 2.85114C13.6342 2.39661 14.5753 2.38247 15.3523 2.81386C15.6743 2.99264 15.9816 3.3065 16.596 3.93421C17.2105 4.56192 17.5177 4.87578 17.6928 5.20474C18.115 5.99849 18.1012 6.95983 17.6563 7.74056C17.4719 8.06413 17.1557 8.36862 16.5234 8.97761L9.0005 16.2234C7.8023 17.3775 7.2032 17.9545 6.45445 18.247C5.7057 18.5394 4.88256 18.5179 3.23629 18.4749L3.0123 18.469C2.51112 18.4559 2.26054 18.4493 2.11487 18.284C1.9692 18.1187 1.98909 17.8635 2.02886 17.3529L2.05046 17.0757C2.16241 15.6388 2.21838 14.9204 2.49897 14.2746C2.77955 13.6288 3.26355 13.1044 4.23154 12.0556L11.659 4.00836Z" stroke="#141B34" stroke-width="1.25" stroke-linejoin="round" />
                                                                    <path d="M10.7969 4.10059L16.3969 9.70059" stroke="#141B34" stroke-width="1.25" stroke-linejoin="round" />
                                                                    <path d="M11.6016 18.5L18.0016 18.5" stroke="#141B34" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                                Edit
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center justify-center">
                                                        <Image
                                                            src="https://smellmeloveme.shop/wp-content/uploads/2024/03/Frame-2115-1.png"
                                                            width={260}
                                                            height={331}
                                                            alt="kuch bhi"
                                                        />
                                                    </div>
                                                </TabPanel>
                                            </TabPanels>
                                        </div>
                                    </div>
                                </Tabs>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </div>
            </main>
        </>
    );
};

export default EditMarker;
