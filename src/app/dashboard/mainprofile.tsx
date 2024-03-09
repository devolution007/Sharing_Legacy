import React, { ChangeEvent,useState } from "react";
import Image from "next/image";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import Iconsvg from "../components/icon";
import Iconsvgdark from "../components/icondark"
import { InitialFocus } from "../dashboard/elements/add_address"
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
    Button
} from '@chakra-ui/react'
import PasswordField from "./elements/password_show";
import CartIcon from "../components/icons/cartnew";
import Editicon from "../components/icons/editicon";
import DeleteIcon from "../components/icons/delete";
import Shareicon from "../components/icons/shareIcon";




const Mainprofile = () => {
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
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <main className="profile-page ">
                <section className="relative block h-[300px]">
                    <div className="flex flex-col">
                        <img
                            src="https://smellmeloveme.shop/wp-content/uploads/2024/01/sunrise-1.png"
                            alt="Cover Photo"
                            className="h-[350px] w-full object-cover border border-gray-300"
                        />
                    </div>
                </section>
                <section className="relative py-16 bg-blueGray-200">
                    <div className="container mx-auto px-4 flex flex-col items-center lg:block">
                        <div className="px-9 mb-6 -mt-[94px] ">
                            <img
                                src="https://smellmeloveme.shop/wp-content/uploads/2018/08/chester-wade-415018-unsplash-1.jpg"
                                alt="Profile"
                                className="h-40 w-40 object-cover rounded-full border border-white-300"
                            />
                        </div>
                        <div className="fle_dir_col flex justify-between items-center mt-12 ml-5 border-b border-blueGray-200">
                            <div className="">
                                <h3 className="text-[25px] lg:text-4xl font-[poppins] font-bold leading-normal mb-2 text-[#4C4448] mb-2">
                                    Thomas Addition
                                </h3>
                                <p className="text-center lg:text-left text-sm leading-normal mt-0 mb-2 text-blueGray-400 text-[#888587] font-bold uppercase">
                                    05 LegacyMarker
                                </p>
                            </div>
                            <div className="btn">
                                <Link to="/profile">
                                    <button className="flex items-center justify-center px-4 py-2 bg-[#D8D5D6] text-black rounded-md shadow-md  focus:outline-none focus:ring-2 focus:ring-blue-500">

                                        <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                            <path d="M11.659 4.00836C12.2551 3.36247 12.5532 3.03952 12.8699 2.85114C13.6342 2.39661 14.5753 2.38247 15.3523 2.81386C15.6743 2.99264 15.9816 3.3065 16.596 3.93421C17.2105 4.56192 17.5177 4.87578 17.6928 5.20474C18.115 5.99849 18.1012 6.95983 17.6563 7.74056C17.4719 8.06413 17.1557 8.36862 16.5234 8.97761L9.0005 16.2234C7.8023 17.3775 7.2032 17.9545 6.45445 18.247C5.7057 18.5394 4.88256 18.5179 3.23629 18.4749L3.0123 18.469C2.51112 18.4559 2.26054 18.4493 2.11487 18.284C1.9692 18.1187 1.98909 17.8635 2.02886 17.3529L2.05046 17.0757C2.16241 15.6388 2.21838 14.9204 2.49897 14.2746C2.77955 13.6288 3.26355 13.1044 4.23154 12.0556L11.659 4.00836Z" stroke="#141B34" stroke-width="1.25" stroke-linejoin="round" />
                                            <path d="M10.7969 4.10059L16.3969 9.70059" stroke="#141B34" stroke-width="1.25" stroke-linejoin="round" />
                                            <path d="M11.6016 18.5L18.0016 18.5" stroke="#141B34" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        Edit Profile
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/* newsec */}
                <div className="container mx-auto w-full p-[30px] mb-[50px]">
                    <div className="fle_dir_col flex justify-between items-center lg:pb-5 ml-5 mb-[50px] border-b border-blueGray-200">
                        <div className="">
                            <h3 className="text-[25px] lg:text-[36px] font-[poppins] font-semibold leading-normal mb-2 text-[#4C4448] mb-2">
                                Legacy Markers
                            </h3>
                        </div>
                        <div className="btn flex gap-[20px]">
                            <Link to="">
                                <button className="flex items-center justify-center font-[poppins] rounded-[50px] bg-[#E8EEFB] w-full h-14 py-[13px] px-5 text-base tracking-[2px] font-[poppins] font-semibold text-[#38589C] hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M7.05345 17.1128C5.36832 17.1128 3.8491 16.0977 3.20412 14.5409C2.55914 12.9841 2.91539 11.192 4.10678 10.0003L5.87512 8.23193L7.05345 9.41026L5.28595 11.1778C4.65433 11.8094 4.40766 12.73 4.63885 13.5928C4.87004 14.4556 5.54396 15.1295 6.40676 15.3607C7.26957 15.5919 8.19017 15.3452 8.82178 14.7136L10.5893 12.9461L11.7676 14.1253L10.0001 15.8928C9.22018 16.6765 8.15916 17.1158 7.05345 17.1128ZM7.64262 13.5353L6.46428 12.3569L12.3568 6.46443L13.5351 7.64276L7.64345 13.5344L7.64262 13.5353ZM14.1251 11.7678L12.946 10.5894L14.7135 8.82193C15.3537 8.1922 15.6069 7.26748 15.377 6.39941C15.147 5.53134 14.4691 4.8533 13.6011 4.62313C12.7331 4.39296 11.8083 4.64603 11.1785 5.28609L9.41012 7.0536L8.23178 5.87526L10.0001 4.10693C11.6294 2.4919 14.2576 2.49765 15.8797 4.1198C17.5019 5.74195 17.5076 8.37019 15.8926 9.99943L14.1251 11.7669V11.7678Z" fill="#38589C" />
                                    </svg>
                                    Connect
                                </button>
                            </Link>
                            <Link to="">
                                <button className="flex items-center justify-center text-white font-[poppins] rounded-[50px] bg-[#38589C] w-full h-14 py-[13px] px-5 text-[13px] lg:text-base tracking-[2px] font-[poppins] text-[white] hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <g clip-path="url(#clip0_693_3555)">
                                            <path d="M15 7H9V1C9 0.447719 8.55228 0 8 0C7.44772 0 7 0.447719 7 1V7H1C0.447719 7 0 7.44772 0 8C0 8.55228 0.447719 9 1 9H7V15C7 15.5523 7.44772 16 8 16C8.55228 16 9 15.5523 9 15V9H15C15.5523 9 16 8.55228 16 8C16 7.44772 15.5523 7 15 7Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_693_3555">
                                                <rect width="16" height="16" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    Create New
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                        <div className="flex items-center justify-between border border-gray-300 shadow-md rounded-[30px] p-5">
                            <div className="flex items-center gap-5">
                                <div className="w-[50px] lg:w-[100px]">
                                    <Image
                                        src="https://smellmeloveme.shop/wp-content/uploads/2024/02/Rectangle-4312-4.png"
                                        width={100}
                                        height={100}
                                        alt="kuch bhi"
                                    />
                                </div>
                                <div className="">
                                    <h3 className="text-[22px] lg:text-4xl font-[poppins] leading-normal text-[#4C4448]">
                                        Wela Linda
                                    </h3>
                                    <p className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 text-[#888587] font-bold uppercase">
                                        30 Nov, 2023
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <Menu>
                                    <MenuButton
                                        as={IconButton}
                                        aria-label='Options'
                                        icon={<Iconsvgdark />}
                                        variant='outline'
                                    />
                                    <MenuList>
                                        <Link to="/editmarker">
                                            <MenuItem
                                                className="font-[poppins] font-medium"
                                                icon={<Editicon />}>
                                                Edit
                                            </MenuItem>
                                        </Link>
                                        <MenuItem
                                            className="font-[poppins] font-medium"
                                            icon={<CartIcon />}>
                                            Order Plaque
                                        </MenuItem>
                                        <MenuItem
                                            className="font-[poppins] font-medium"
                                            icon={<DeleteIcon />}>
                                            Delete
                                        </MenuItem>
                                        <MenuItem
                                            className="font-[poppins] font-medium"
                                            icon={<Shareicon />}>
                                            Share Ownership
                                        </MenuItem>
                                    </MenuList>
                                </Menu>
                            </div>
                        </div>
                        <div className="flex items-center justify-between border border-gray-300 shadow-md rounded-[30px] p-5">
                            <div className="flex items-center gap-5">
                                <div className="w-[50px] lg:w-[100px]">
                                    <Image
                                        src="https://smellmeloveme.shop/wp-content/uploads/2024/02/Rectangle-4312-4.png"
                                        width={100}
                                        height={100}
                                        alt="kuch bhi"
                                    />
                                </div>
                                <div className="">
                                    <h3 className="text-[22px] lg:text-4xl font-[poppins] leading-normal text-[#4C4448]">
                                        Wela Linda
                                    </h3>
                                    <p className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 text-[#888587] font-bold uppercase">
                                        30 Nov, 2023
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <Menu>
                                    <MenuButton
                                        as={IconButton}
                                        aria-label='Options'
                                        icon={<Iconsvgdark />}
                                        variant='outline'
                                    />
                                    <MenuList>
                                        <Link to="/editmarker">
                                            <MenuItem icon={<Editicon />}>
                                                Edit
                                            </MenuItem>
                                        </Link>
                                        <MenuItem icon={<CartIcon />}>
                                            Order Plaque
                                        </MenuItem>
                                        <MenuItem icon={<DeleteIcon />}>
                                            Delete
                                        </MenuItem>
                                        <MenuItem icon={<Shareicon />}>
                                            Share Ownership
                                        </MenuItem>
                                    </MenuList>
                                </Menu>
                            </div>
                        </div>
                        <div className="flex items-center justify-between border border-gray-300 shadow-md rounded-[30px] p-5">
                            <div className="flex items-center  gap-5">
                                <div className="w-[50px] lg:w-[100px]">
                                    <Image
                                        src="https://smellmeloveme.shop/wp-content/uploads/2024/02/Rectangle-4312-4.png"
                                        width={100}
                                        height={100}
                                        alt="kuch bhi"
                                    />
                                </div>
                                <div className="">
                                    <h3 className="text-[22px] lg:text-4xl font-[poppins] leading-normal text-[#4C4448]">
                                        Wela Linda
                                    </h3>
                                    <p className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 text-[#888587] font-bold uppercase">
                                        30 Nov, 2023
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <Menu>
                                    <MenuButton
                                        as={IconButton}
                                        aria-label='Options'
                                        icon={<Iconsvgdark />}
                                        variant='outline'
                                    />
                                    <MenuList>
                                        <Link to="/editmarker">
                                            <MenuItem icon={<Editicon />}>
                                                Edit
                                            </MenuItem>
                                        </Link>
                                        <MenuItem icon={<CartIcon />}>
                                            Order Plaque
                                        </MenuItem>
                                        <MenuItem icon={<DeleteIcon />}>
                                            Delete
                                        </MenuItem>
                                        <MenuItem icon={<Shareicon />}>
                                            Share Ownership
                                        </MenuItem>
                                    </MenuList>
                                </Menu>
                            </div>
                        </div>
                        <div className="flex items-center justify-between border border-gray-300 shadow-md rounded-[30px] p-5">
                            <div className="flex items-center  gap-5">
                                <div className="w-[50px] lg:w-[100px]">
                                    <Image
                                        src="https://smellmeloveme.shop/wp-content/uploads/2024/02/Rectangle-4312-4.png"
                                        width={100}
                                        height={100}
                                        alt="kuch bhi"
                                    />
                                </div>
                                <div className="">
                                    <h3 className="text-[22px] lg:text-4xl font-[poppins] leading-normal text-[#4C4448]">
                                        Wela Linda
                                    </h3>
                                    <p className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 text-[#888587] font-bold uppercase">
                                        30 Nov, 2023
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <Menu>
                                    <MenuButton
                                        as={IconButton}
                                        aria-label='Options'
                                        icon={<Iconsvgdark />}
                                        variant='outline'
                                    />
                                    <MenuList>
                                        <Link to="/editmarker">
                                            <MenuItem icon={<Editicon />}>
                                                Edit
                                            </MenuItem>
                                        </Link>
                                        <MenuItem icon={<CartIcon />}>
                                            Order Plaque
                                        </MenuItem>
                                        <MenuItem icon={<DeleteIcon />}>
                                            Delete
                                        </MenuItem>
                                        <MenuItem icon={<Shareicon />}>
                                            Share Ownership
                                        </MenuItem>
                                    </MenuList>
                                </Menu>
                            </div>
                        </div>
                        <div className="flex items-center justify-between border border-gray-300 shadow-md rounded-[30px] p-5">
                            <div className="flex items-center  gap-5">
                                <div className="w-[50px] lg:w-[100px]">
                                    <Image
                                        src="https://smellmeloveme.shop/wp-content/uploads/2024/02/Rectangle-4312-4.png"
                                        width={100}
                                        height={100}
                                        alt="kuch bhi"
                                    />
                                </div>
                                <div className="">
                                    <h3 className="text-[22px] lg:text-4xl font-[poppins] leading-normal text-[#4C4448]">
                                        Wela Linda
                                    </h3>
                                    <p className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 text-[#888587] font-bold uppercase">
                                        30 Nov, 2023
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <Menu>
                                    <MenuButton
                                        as={IconButton}
                                        aria-label='Options'
                                        icon={<Iconsvgdark />}
                                        variant='outline'
                                    />
                                    <MenuList>
                                        <Link to="/editmarker">
                                            <MenuItem icon={<Editicon />}>
                                                Edit
                                            </MenuItem>
                                        </Link>
                                        <MenuItem icon={<CartIcon />}>
                                            Order Plaque
                                        </MenuItem>
                                        <MenuItem icon={<DeleteIcon />}>
                                            Delete
                                        </MenuItem>
                                        <MenuItem icon={<Shareicon />}>
                                            Share Ownership
                                        </MenuItem>
                                    </MenuList>
                                </Menu>
                            </div>
                        </div>
                        <div className="flex items-center justify-between border border-gray-300 shadow-md rounded-[30px] p-5">
                            <div className="flex items-center  gap-5">
                                <div className="w-[50px] lg:w-[100px]">
                                    <Image
                                        src="https://smellmeloveme.shop/wp-content/uploads/2024/02/Rectangle-4312-4.png"
                                        width={100}
                                        height={100}
                                        alt="kuch bhi"
                                    />
                                </div>
                                <div className="">
                                    <h3 className="text-[22px] lg:text-4xl font-[poppins] leading-normal text-[#4C4448]">
                                        Wela Linda
                                    </h3>
                                    <p className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 text-[#888587] font-bold uppercase">
                                        30 Nov, 2023
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <Menu>
                                    <MenuButton
                                        as={IconButton}
                                        aria-label='Options'
                                        icon={<Iconsvgdark />}
                                        variant='outline'
                                    />
                                    <MenuList>
                                        <Link to="/editmarker">
                                            <MenuItem icon={<Editicon />}>
                                                Edit
                                            </MenuItem>
                                        </Link>
                                        <MenuItem icon={<CartIcon />}>
                                            Order Plaque
                                        </MenuItem>
                                        <MenuItem icon={<DeleteIcon />}>
                                            Delete
                                        </MenuItem>
                                        <MenuItem icon={<Shareicon />}>
                                            Share Ownership
                                        </MenuItem>
                                    </MenuList>
                                </Menu>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Mainprofile;
