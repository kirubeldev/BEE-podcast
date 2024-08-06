import React,{useState}from 'react'
import {
  RiArrowDropDownLine,
  RiInboxLine,
  RiFileTextLine,
  RiCalendarLine,
  RiUserLine,
  RiLoginBoxLine,
  RiUserAddLine,
  RiErrorWarningLine,
  RiSettings3Line,
  RiLockPasswordLine,
  RiVideoLine,
  RiArticleLine,
  
} from "react-icons/ri";
import { AiOutlineDollar,AiOutlineHome,AiOutlineClose } from 'react-icons/ai';


import { FaBars } from 'react-icons/fa';

export default function Inbox() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
    <>
   
  <div className="rubick px-5 sm:px-8 py-5 before:content-[''] before:bg-gradient-to-b before:from-theme-1 before:to-theme-2 dark:before:from-darkmode-800 dark:before:to-darkmode-800 before:fixed before:inset-0 before:z-[-1]">
    {/* BEGIN: Mobile Menu */}
    <div
          className={`mobile-menu group top-0 inset-x-0 fixed bg-theme-1/90 z-[60] 
      border-b border-white/[0.08] dark:bg-darkmode-800/90 md:hidden 
      before:content-[''] before:w-full before:h-screen before:z-10 
      before:fixed before:inset-x-0 before:bg-black/90 
      before:transition-opacity before:duration-200 before:ease-in-out w-full
      before:invisible before:opacity-0 ${
        isMenuOpen ? "mobile-menu--active" : ""
      }`}
        >
          <div className="flex h-[70px] items-center px-3 sm:px-8">
            <a className="mr-auto flex" href="#">
              <img
                className="w-6"
                src="assetsd/images/logo2.svg"
                alt="logo picture"
              />
            </a>
            <div style={{flexGrow:1}}></div>
            {!isMenuOpen ? (
              <a className="mobile-menu-toggler" href="#" onClick={toggleMenu}>
                <FaBars className="stroke-1.5 w-8 h-8 -rotate-45 transform text-white" />
              </a>
            ) : (
              <a href="#" onClick={toggleMenu}>
                <AiOutlineClose className="stroke-1.5 w-8 h-8 text-white" />
              </a>
            )}
          </div>
          {isMenuOpen && (
            <div
              className={`scrollable h-screen z-20 top-0 left-0 w-[270px] -ml-[100%] bg-primary 
        transition-all duration-300 ease-in-out dark:bg-darkmode-800 
        ${isMenuOpen ? "ml-0" : ""}`}
            >
              <ul className="py-2">
                <li>
                  <a className="menu menu--active" href="/">
                    <div className="menu__icon">
                      <AiOutlineHome className="stroke-1.5 w-5 h-5" />
                    </div>
                    <div className="menu__title">Dashboard</div>
                  </a>
                </li>
                <li>
                  <a className="menu" href="/inbox">
                    <div className="menu__icon">
                      <RiInboxLine className="stroke-1.5 w-5 h-5" />
                    </div>
                    <div className="menu__title">Inbox</div>
                  </a>
                </li>
                <li>
                  <a className="menu" href="/post">
                    <div className="menu__icon">
                      <RiFileTextLine className="stroke-1.5 w-5 h-5" />
                    </div>
                    <div className="menu__title">Post</div>
                  </a>
                </li>
                <li>
                  <a className="menu" href="/calendar">
                    <div className="menu__icon">
                      <RiCalendarLine className="stroke-1.5 w-5 h-5" />
                    </div>
                    <div className="menu__title">Calendar</div>
                  </a>
                </li>
                <li>
                  <a className="menu" href="/blog">
                    <div className="menu__icon">
                      <RiArticleLine className="stroke-1.5 w-5 h-5" />
                    </div>
                    <div className="menu__title">Blog</div>
                  </a>
                </li>
                <li>
                  <a className="menu" href="/pricing">
                    <div className="menu__icon">
                      <AiOutlineDollar className="stroke-1.5 w-5 h-5" />
                    </div>
                    <div className="menu__title">Pricing</div>
                  </a>
                </li>
                <li>
                  <a className="menu" href="/user">
                    <div className="menu__icon">
                      <RiUserLine className="stroke-1.5 w-5 h-5" />
                    </div>
                    <div className="menu__title">User</div>
                  </a>
                </li>
                <li>
                  <a className="menu" href="/login">
                    <div className="menu__icon">
                      <RiLoginBoxLine className="stroke-1.5 w-5 h-5" />
                    </div>
                    <div className="menu__title">Login</div>
                  </a>
                </li>
                <li>
                  <a className="menu" href="/signup">
                    <div className="menu__icon">
                      <RiUserAddLine className="stroke-1.5 w-5 h-5" />
                    </div>
                    <div className="menu__title">Signup</div>
                  </a>
                </li>
                <li>
                  <a className="menu" href="/error">
                    <div className="menu__icon">
                      <RiErrorWarningLine className="stroke-1.5 w-5 h-5" />
                    </div>
                    <div className="menu__title">Error Page</div>
                  </a>
                </li>
                <li>
                  <a className="menu" href="/update">
                    <div className="menu__icon">
                      <RiSettings3Line className="stroke-1.5 w-5 h-5" />
                    </div>
                    <div className="menu__title">Update profile</div>
                  </a>
                </li>
                <li>
                  <a className="menu" href="/changepassword">
                    <div className="menu__icon">
                      <RiLockPasswordLine className="stroke-1.5 w-5 h-5" />
                    </div>
                    <div className="menu__title">Change Password</div>
                  </a>
                </li>
                <li>
                  <a href="/video" className="menu">
                    <div className="menu__icon">
                      <RiVideoLine className="stroke-1.5 w-5 h-5" />
                    </div>
                    <div className="menu__title">Update Video</div>
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
    {/* END: Mobile Menu */}
    <div className="mt-[4.7rem] flex md:mt-0">
      {/* BEGIN: Side Menu */}
      <nav className="side-nav hidden w-[80px] overflow-x-hidden pb-16 pr-5 md:block xl:w-[230px]">
              <a className="flex items-center pt-4 pl-5 intro-x" href="#">
                <img
                  className="w-6"
                  src="assetsd/images/logo2.svg"
                  alt="Midone - Tailwind Admin Dashboard Template"
                />
                <span className="hidden ml-3 text-lg text-white xl:block">
                  {" "}
                  BEE{" "}
                </span>
              </a>
              <div className="my-6 side-nav__divider" />
              <ul>
                <li>
                  <a href="/" className="side-menu ">
                    <div className="side-menu__icon">
                      <AiOutlineHome className="stroke-1.5 w-5 h-5" />
                    </div>
                    <div className="side-menu__title">Dashboard</div>
                    <div className="side-menu__sub-icon transform rotate-180">
                      {/* <RiArrowDropDownLine className="stroke-1.5 w-5 h-5" /> */}
                    </div>
                  </a>
                </li>

                <li>
                  <a href="/inbox" className="side-menu side-menu--active">
                    <div className="side-menu__icon">
                      <RiInboxLine className="stroke-1.5 w-5 h-5" />
                    </div>
                    <div className="side-menu__title">Inbox</div>
                  </a>
                </li>

                <li>
                  <a href="/post" className="side-menu">
                    <div className="side-menu__icon">
                      <RiFileTextLine className="stroke-1.5 w-5 h-5" />
                    </div>
                    <div className="side-menu__title">Post</div>
                  </a>
                </li>

                <li>
                  <a href="/calendar" className="side-menu">
                    <div className="side-menu__icon">
                      <RiCalendarLine className="stroke-1.5 w-5 h-5" />
                    </div>
                    <div className="side-menu__title">Calendar</div>
                  </a>
                </li>
                <li>
                  <a href="/blog" className="side-menu">
                    <div className="side-menu__icon">
                    <RiArticleLine className="stroke-1.5 w-5 h-5" />
                    </div>
                    <div className="side-menu__title">Blog</div>
                  </a>
                </li>
                <li className="my-4 side-nav__divider" />
                <li>
                  <a href="/pricing" className="side-menu">
                    <div className="side-menu__icon">
                    <AiOutlineDollar className="stroke-1.5 w-5 h-5" />
                    </div>
                    <div className="side-menu__title">Pricing</div>
                  </a>
                </li>
                <li>
                  <a href="/user" className="side-menu">
                    <div className="side-menu__icon">
                      <RiUserLine className="stroke-1.5 w-5 h-5" />
                    </div>
                    <div className="side-menu__title">User</div>
                  </a>
                </li>

                <li>
                  <a href="/login" className="side-menu">
                    <div className="side-menu__icon">
                      <RiLoginBoxLine className="stroke-1.5 w-5 h-5" />
                    </div>
                    <div className="side-menu__title">Login</div>
                  </a>
                </li>

                <li>
                  <a href="/signup" className="side-menu">
                    <div className="side-menu__icon">
                      <RiUserAddLine className="stroke-1.5 w-5 h-5" />
                    </div>
                    <div className="side-menu__title">Sign Up</div>
                  </a>
                </li>

                <li>
                  <a href="/error" className="side-menu">
                    <div className="side-menu__icon">
                      <RiErrorWarningLine className="stroke-1.5 w-5 h-5" />
                    </div>
                    <div className="side-menu__title">Error Page</div>
                  </a>
                </li>

                <li>
                  <a href="/update" className="side-menu">
                    <div className="side-menu__icon">
                      <RiSettings3Line className="stroke-1.5 w-5 h-5" />
                    </div>
                    <div className="side-menu__title">Update Profile</div>
                  </a>
                </li>

                <li>
                  <a href="/changepassword" className="side-menu">
                    <div className="side-menu__icon">
                      <RiLockPasswordLine className="stroke-1.5 w-5 h-5" />
                    </div>
                    <div className="side-menu__title">Change Password</div>
                  </a>
                </li>
                <li>
                  <a href="/video" className="side-menu">
                    <div className="side-menu__icon">
                      <RiVideoLine className="stroke-1.5 w-5 h-5" />
                    </div>
                    <div className="side-menu__title">Update Video</div>
                  </a>
                </li>
              </ul>
            </nav>
      {/* END: Side Menu */}
      {/* BEGIN: Content */}
      <div className="md:max-w-auto min-h-screen min-w-0 max-w-full flex-1 rounded-[30px] bg-slate-100 px-4 pb-10 before:block before:h-px before:w-full before:content-[''] dark:bg-darkmode-700 md:px-[22px]">
        {/* BEGIN: Top Bar */}
        <div className="relative z-[51] flex h-[67px] items-center border-b border-slate-200">
          {/* BEGIN: Breadcrumb */}
          <nav
            aria-label="breadcrumb"
            className="flex -intro-x mr-auto hidden sm:flex"
          >
            <ol className="flex items-center text-theme-1 dark:text-slate-300">
              <li className="">
                <a href="#">Application</a>
              </li>
              <li className="relative ml-5 pl-0.5 before:content-[''] before:w-[14px] before:h-[14px] before:bg-chevron-black before:transform before:rotate-[-90deg] before:bg-[length:100%] before:-ml-[1.125rem] before:absolute before:my-auto before:inset-y-0 dark:before:bg-chevron-white text-slate-800 cursor-text dark:text-slate-400">
                <a href="/">Dashboard</a>
              </li>
            </ol>
          </nav>
          {/* END: Breadcrumb */}
          {/* BEGIN: Search */}
          <div className="search intro-x relative mr-3 sm:mr-6">
            <div className="relative hidden sm:block">
              <input
                data-tw-merge=""
                type="text"
                placeholder="Search..."
                className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent ease-in-out text-sm placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-opacity-40 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10 w-56 rounded-full border-transparent bg-slate-300/50 pr-8 shadow-none transition-[width] duration-300 focus:w-72 focus:border-transparent dark:bg-darkmode-400/70"
              />
              <i
                data-tw-merge=""
                data-lucide="search"
                className="stroke-1.5 w-5 h-5 absolute inset-y-0 right-0 my-auto mr-3 text-slate-600 dark:text-slate-500"
              />
            </div>
            <a className="relative text-slate-600 sm:hidden" href="#">
              <i
                data-tw-merge=""
                data-lucide="search"
                className="stroke-1.5 w-5 h-5 dark:text-slate-500"
              />
            </a>
            <div
              data-transition=""
              data-selector=".show"
              data-enter="transition-all ease-linear duration-150"
              data-enter-from="mt-5 invisible opacity-0 translate-y-1"
              data-enter-to="mt-[3px] visible opacity-100 translate-y-0"
              data-leave="transition-all ease-linear duration-150"
              data-leave-from="mt-[3px] visible opacity-100 translate-y-0"
              data-leave-to="mt-5 invisible opacity-0 translate-y-1"
              className="search-result absolute right-0 z-10 mt-[3px] hidden"
            >
              <div className="box w-[450px] p-5">
                <div className="mb-2 font-medium">Pages</div>
                <div className="mb-5">
                  <a className="flex items-center" href="#">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-success/20 text-success dark:bg-success/10">
                      <i
                        data-tw-merge=""
                        data-lucide="inbox"
                        className="stroke-1.5 h-4 w-4"
                      />
                    </div>
                    <div className="ml-3">Mail Settings</div>
                  </a>
                  <a className="mt-2 flex items-center" href="#">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pending/10 text-pending">
                      <i
                        data-tw-merge=""
                        data-lucide="users"
                        className="stroke-1.5 h-4 w-4"
                      />
                    </div>
                    <div className="ml-3">Users &amp; Permissions</div>
                  </a>
                  <a className="mt-2 flex items-center" href="#">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary/80 dark:bg-primary/20">
                      <i
                        data-tw-merge=""
                        data-lucide="credit-card"
                        className="stroke-1.5 h-4 w-4"
                      />
                    </div>
                    <div className="ml-3">Transactions Report</div>
                  </a>
                </div>
                <div className="mb-2 font-medium">Users</div>
                <div className="mb-5">
                  <a className="mt-2 flex items-center" href="#">
                    <div className="image-fit h-8 w-8">
                      <img
                        className="rounded-full"
                        src="assetsd/images/fakers/profile-12.jpg"
                        alt="Midone - Tailwind Admin Dashboard Template"
                      />
                    </div>
                    <div className="ml-3">Sylvester Stallone</div>
                    <div className="ml-auto w-48 truncate text-right text-xs text-slate-500">
                      sylvesterstallone@left4code.com
                    </div>
                  </a>
                  <a className="mt-2 flex items-center" href="#">
                    <div className="image-fit h-8 w-8">
                      <img
                        className="rounded-full"
                        src="assetsd/images/fakers/profile-1.jpg"
                        alt="Midone - Tailwind Admin Dashboard Template"
                      />
                    </div>
                    <div className="ml-3">Angelina Jolie</div>
                    <div className="ml-auto w-48 truncate text-right text-xs text-slate-500">
                      angelinajolie@left4code.com
                    </div>
                  </a>
                  <a className="mt-2 flex items-center" href="#">
                    <div className="image-fit h-8 w-8">
                      <img
                        className="rounded-full"
                        src="assetsd/images/fakers/profile-4.jpg"
                        alt="Midone - Tailwind Admin Dashboard Template"
                      />
                    </div>
                    <div className="ml-3">Denzel Washington</div>
                    <div className="ml-auto w-48 truncate text-right text-xs text-slate-500">
                      denzelwashington@left4code.com
                    </div>
                  </a>
                  <a className="mt-2 flex items-center" href="#">
                    <div className="image-fit h-8 w-8">
                      <img
                        className="rounded-full"
                        src="assetsd/images/fakers/profile-1.jpg"
                        alt="Midone - Tailwind Admin Dashboard Template"
                      />
                    </div>
                    <div className="ml-3">Kevin Spacey</div>
                    <div className="ml-auto w-48 truncate text-right text-xs text-slate-500">
                      kevinspacey@left4code.com
                    </div>
                  </a>
                </div>
                <div className="mb-2 font-medium">Products</div>
                <a className="mt-2 flex items-center" href="#">
                  <div className="image-fit h-8 w-8">
                    <img
                      className="rounded-full"
                      src="assetsd/images/fakers/preview-1.jpg"
                      alt="Midone - Tailwind Admin Dashboard Template"
                    />
                  </div>
                  <div className="ml-3">Sony A7 III</div>
                  <div className="ml-auto w-48 truncate text-right text-xs text-slate-500">
                    Photography
                  </div>
                </a>
                <a className="mt-2 flex items-center" href="#">
                  <div className="image-fit h-8 w-8">
                    <img
                      className="rounded-full"
                      src="assetsd/images/fakers/preview-13.jpg"
                      alt="Midone - Tailwind Admin Dashboard Template"
                    />
                  </div>
                  <div className="ml-3">Nike Tanjun</div>
                  <div className="ml-auto w-48 truncate text-right text-xs text-slate-500">
                    Sport &amp; Outdoor
                  </div>
                </a>
                <a className="mt-2 flex items-center" href="#">
                  <div className="image-fit h-8 w-8">
                    <img
                      className="rounded-full"
                      src="assetsd/images/fakers/preview-12.jpg"
                      alt="Midone - Tailwind Admin Dashboard Template"
                    />
                  </div>
                  <div className="ml-3">Sony Master Series A9G</div>
                  <div className="ml-auto w-48 truncate text-right text-xs text-slate-500">
                    Electronic
                  </div>
                </a>
                <a className="mt-2 flex items-center" href="#">
                  <div className="image-fit h-8 w-8">
                    <img
                      className="rounded-full"
                      src="assetsd/images/fakers/preview-2.jpg"
                      alt="Midone - Tailwind Admin Dashboard Template"
                    />
                  </div>
                  <div className="ml-3">Nike Air Max 270</div>
                  <div className="ml-auto w-48 truncate text-right text-xs text-slate-500">
                    Sport &amp; Outdoor
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* END: Search  */}
          {/* BEGIN: Notifications */}
          <div
            data-tw-merge=""
            data-tw-placement="bottom-end"
            className="dropdown relative intro-x mr-auto sm:mr-6"
          >
            <div
              data-tw-toggle="dropdown"
              aria-expanded="false"
              className="cursor-pointer relative block text-slate-600 outline-none before:absolute before:right-0 before:top-[-2px] before:h-[8px] before:w-[8px] before:rounded-full before:bg-danger before:content-['']"
            >
              <i
                data-tw-merge=""
                data-lucide="bell"
                className="stroke-1.5 w-5 h-5 dark:text-slate-500"
              />
            </div>
            <div
              data-transition=""
              data-selector=".show"
              data-enter="transition-all ease-linear duration-150"
              data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1"
              data-enter-to="!mt-1 visible opacity-100 translate-y-0"
              data-leave="transition-all ease-linear duration-150"
              data-leave-from="!mt-1 visible opacity-100 translate-y-0"
              data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1"
              className="dropdown-menu absolute z-[9999] hidden"
            >
              <div
                data-tw-merge=""
                className="dropdown-content rounded-md border-transparent bg-white shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 mt-2 w-[280px] p-5 sm:w-[350px]"
              >
                <div className="mb-5 font-medium">Notifications</div>
                <div className="cursor-pointer relative flex items-center">
                  <div className="image-fit relative mr-1 h-12 w-12 flex-none">
                    <img
                      className="rounded-full"
                      src="assetsd/images/fakers/profile-12.jpg"
                      alt="Midone - Tailwind Admin Dashboard Template"
                    />
                    <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-success dark:border-darkmode-600"></div>
                  </div>
                  <div className="ml-2 overflow-hidden">
                    <div className="flex items-center">
                      <a className="mr-5 truncate font-medium" href="#">
                        Sylvester Stallone
                      </a>
                      <div className="ml-auto whitespace-nowrap text-xs text-slate-400">
                        06:05 AM
                      </div>
                    </div>
                    <div className="mt-0.5 w-full truncate text-slate-500">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem
                    </div>
                  </div>
                </div>
                <div className="cursor-pointer relative flex items-center mt-5">
                  <div className="image-fit relative mr-1 h-12 w-12 flex-none">
                    <img
                      className="rounded-full"
                      src="assetsd/images/fakers/profile-1.jpg"
                      alt="Midone - Tailwind Admin Dashboard Template"
                    />
                    <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-success dark:border-darkmode-600"></div>
                  </div>
                  <div className="ml-2 overflow-hidden">
                    <div className="flex items-center">
                      <a className="mr-5 truncate font-medium" href="#">
                        Angelina Jolie
                      </a>
                      <div className="ml-auto whitespace-nowrap text-xs text-slate-400">
                        03:20 PM
                      </div>
                    </div>
                    <div className="mt-0.5 w-full truncate text-slate-500">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem
                    </div>
                  </div>
                </div>
                <div className="cursor-pointer relative flex items-center mt-5">
                  <div className="image-fit relative mr-1 h-12 w-12 flex-none">
                    <img
                      className="rounded-full"
                      src="assetsd/images/fakers/profile-4.jpg"
                      alt="Midone - Tailwind Admin Dashboard Template"
                    />
                    <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-success dark:border-darkmode-600"></div>
                  </div>
                  <div className="ml-2 overflow-hidden">
                    <div className="flex items-center">
                      <a className="mr-5 truncate font-medium" href="#">
                        Denzel Washington
                      </a>
                      <div className="ml-auto whitespace-nowrap text-xs text-slate-400">
                        01:10 PM
                      </div>
                    </div>
                    <div className="mt-0.5 w-full truncate text-slate-500">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 20
                    </div>
                  </div>
                </div>
                <div className="cursor-pointer relative flex items-center mt-5">
                  <div className="image-fit relative mr-1 h-12 w-12 flex-none">
                    <img
                      className="rounded-full"
                      src="assetsd/images/fakers/profile-1.jpg"
                      alt="Midone - Tailwind Admin Dashboard Template"
                    />
                    <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-success dark:border-darkmode-600"></div>
                  </div>
                  <div className="ml-2 overflow-hidden">
                    <div className="flex items-center">
                      <a className="mr-5 truncate font-medium" href="#">
                        Kevin Spacey
                      </a>
                      <div className="ml-auto whitespace-nowrap text-xs text-slate-400">
                        01:10 PM
                      </div>
                    </div>
                    <div className="mt-0.5 w-full truncate text-slate-500">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 20
                    </div>
                  </div>
                </div>
                <div className="cursor-pointer relative flex items-center mt-5">
                  <div className="image-fit relative mr-1 h-12 w-12 flex-none">
                    <img
                      className="rounded-full"
                      src="assetsd/images/fakers/profile-7.jpg"
                      alt="Midone - Tailwind Admin Dashboard Template"
                    />
                    <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-success dark:border-darkmode-600"></div>
                  </div>
                  <div className="ml-2 overflow-hidden">
                    <div className="flex items-center">
                      <a className="mr-5 truncate font-medium" href="#">
                        Kevin Spacey
                      </a>
                      <div className="ml-auto whitespace-nowrap text-xs text-slate-400">
                        01:10 PM
                      </div>
                    </div>
                    <div className="mt-0.5 w-full truncate text-slate-500">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END: Notifications  */}
          {/* BEGIN: Account Menu */}
          <div
            data-tw-merge=""
            data-tw-placement="bottom-end"
            className="dropdown relative"
          >
            <button
              data-tw-toggle="dropdown"
              aria-expanded="false"
              className="cursor-pointer image-fit zoom-in intro-x block h-8 w-8 overflow-hidden rounded-full shadow-lg"
            >
              <img
                src="assetsd/images/fakers/profile-7.jpg"
                alt="Midone - Tailwind Admin Dashboard Template"
              />
            </button>
            <div
              data-transition=""
              data-selector=".show"
              data-enter="transition-all ease-linear duration-150"
              data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1"
              data-enter-to="!mt-1 visible opacity-100 translate-y-0"
              data-leave="transition-all ease-linear duration-150"
              data-leave-from="!mt-1 visible opacity-100 translate-y-0"
              data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1"
              className="dropdown-menu absolute z-[9999] hidden"
            >
              <div
                data-tw-merge=""
                className="dropdown-content rounded-md border-transparent p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 mt-px w-56 bg-theme-1 text-white"
              >
                <div className="p-2 font-medium font-normal">
                  <div className="font-medium">Sylvester Stallone</div>
                  <div className="mt-0.5 text-xs text-white/70 dark:text-slate-500">
                    DevOps Engineer
                  </div>
                </div>
                <div className="h-px my-2 -mx-2 bg-slate-200/60 dark:bg-darkmode-400 bg-white/[0.08]"></div>
                <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item hover:bg-white/5">
                  <i
                    data-tw-merge=""
                    data-lucide="user"
                    className="stroke-1.5 mr-2 h-4 w-4"
                  />
                  Profile
                </a>
                <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item hover:bg-white/5">
                  <i
                    data-tw-merge=""
                    data-lucide="edit"
                    className="stroke-1.5 mr-2 h-4 w-4"
                  />
                  Add Account
                </a>
                <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item hover:bg-white/5">
                  <i
                    data-tw-merge=""
                    data-lucide="lock"
                    className="stroke-1.5 mr-2 h-4 w-4"
                  />
                  Reset Password
                </a>
                <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item hover:bg-white/5">
                  <i
                    data-tw-merge=""
                    data-lucide="help-circle"
                    className="stroke-1.5 mr-2 h-4 w-4"
                  />
                  Help
                </a>
                <div className="h-px my-2 -mx-2 bg-slate-200/60 dark:bg-darkmode-400 bg-white/[0.08]"></div>
                <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item hover:bg-white/5">
                  <i
                    data-tw-merge=""
                    data-lucide="toggle-right"
                    className="stroke-1.5 mr-2 h-4 w-4"
                  />
                  Logout
                </a>
              </div>
            </div>
          </div>
          {/* END: Account Menu */}
        </div>
        {/* END: Top Bar */}
        <div className="mt-8 grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-3 2xl:col-span-2">
            <h2 className="intro-y mr-auto mt-2 text-lg font-medium">Inbox</h2>
            {/* BEGIN: Inbox Menu */}
            <div className="intro-y box mt-6 bg-primary p-5">
              <button
                data-tw-merge=""
                type="button"
                className="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed mt-1 w-full bg-white text-slate-600 dark:border-darkmode-300 dark:bg-darkmode-300 dark:text-slate-300"
              >
                <i
                  data-tw-merge=""
                  data-lucide="edit"
                  className="stroke-1.5 mr-2 h-4 w-4"
                />
                Compose
              </button>
              <div className="mt-6 border-t border-white/10 pt-6 text-white dark:border-darkmode-400">
                <a
                  className="flex items-center rounded-md bg-white/10 px-3 py-2 font-medium dark:bg-darkmode-700"
                  href="#"
                >
                  <i
                    data-tw-merge=""
                    data-lucide="mail"
                    className="stroke-1.5 mr-2 h-4 w-4"
                  />
                  Inbox
                </a>
                <a
                  className="mt-2 flex items-center rounded-md px-3 py-2"
                  href="#"
                >
                  <i
                    data-tw-merge=""
                    data-lucide="star"
                    className="stroke-1.5 mr-2 h-4 w-4"
                  />
                  Marked
                </a>
                <a
                  className="mt-2 flex items-center rounded-md px-3 py-2"
                  href="#"
                >
                  <i
                    data-tw-merge=""
                    data-lucide="inbox"
                    className="stroke-1.5 mr-2 h-4 w-4"
                  />
                  Draft
                </a>
                <a
                  className="mt-2 flex items-center rounded-md px-3 py-2"
                  href="#"
                >
                  <i
                    data-tw-merge=""
                    data-lucide="send"
                    className="stroke-1.5 mr-2 h-4 w-4"
                  />
                  Sent
                </a>
                <a
                  className="mt-2 flex items-center rounded-md px-3 py-2"
                  href="#"
                >
                  <i
                    data-tw-merge=""
                    data-lucide="trash"
                    className="stroke-1.5 mr-2 h-4 w-4"
                  />
                  Trash
                </a>
              </div>
              <div className="mt-4 border-t border-white/10 pt-4 text-white dark:border-darkmode-400">
                <a className="flex items-center truncate px-3 py-2" href="#">
                  <div className="mr-3 h-2 w-2 rounded-full bg-pending" />
                  Custom Work
                </a>
                <a
                  className="mt-2 flex items-center truncate rounded-md px-3 py-2"
                  href="#"
                >
                  <div className="mr-3 h-2 w-2 rounded-full bg-success" />
                  Important Meetings
                </a>
                <a
                  className="mt-2 flex items-center truncate rounded-md px-3 py-2"
                  href="#"
                >
                  <div className="mr-3 h-2 w-2 rounded-full bg-warning" />
                  Work
                </a>
                <a
                  className="mt-2 flex items-center truncate rounded-md px-3 py-2"
                  href="#"
                >
                  <div className="mr-3 h-2 w-2 rounded-full bg-pending" />
                  Design
                </a>
                <a
                  className="mt-2 flex items-center truncate rounded-md px-3 py-2"
                  href="#"
                >
                  <div className="mr-3 h-2 w-2 rounded-full bg-danger" />
                  Next Week
                </a>
                <a
                  className="mt-2 flex items-center truncate rounded-md px-3 py-2"
                  href="#"
                >
                  <i
                    data-tw-merge=""
                    data-lucide="plus"
                    className="stroke-1.5 mr-2 h-4 w-4"
                  />
                  Add New Label
                </a>
              </div>
            </div>
            {/* END: Inbox Menu */}
          </div>
          <div className="col-span-12 lg:col-span-9 2xl:col-span-10">
            {/* BEGIN: Inbox Filter */}
            <div className="intro-y flex flex-col-reverse items-center sm:flex-row">
              <div className="relative mr-auto mt-3 w-full sm:mt-0 sm:w-auto">
                <i
                  data-tw-merge=""
                  data-lucide="search"
                  className="stroke-1.5 absolute inset-y-0 left-0 z-10 my-auto ml-3 h-4 w-4 text-slate-500"
                />
                <input
                  data-tw-merge=""
                  type="text"
                  placeholder="Search mail"
                  className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10 !box px-10 sm:w-64"
                />
                <div
                  data-tw-merge=""
                  data-tw-placement="bottom-start"
                  className="dropdown absolute inset-y-0 right-0 mr-3 flex items-center"
                >
                  <a
                    data-tw-toggle="dropdown"
                    aria-expanded="false"
                    href="javascript:;"
                    className="cursor-pointer block h-4 w-4"
                    role="button"
                  >
                    <i
                      data-tw-merge=""
                      data-lucide="chevron-down"
                      className="stroke-1.5 h-4 w-4 cursor-pointer text-slate-500"
                    />
                  </a>
                  <div
                    data-transition=""
                    data-selector=".show"
                    data-enter="transition-all ease-linear duration-150"
                    data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1"
                    data-enter-to="!mt-1 visible opacity-100 translate-y-0"
                    data-leave="transition-all ease-linear duration-150"
                    data-leave-from="!mt-1 visible opacity-100 translate-y-0"
                    data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1"
                    className="dropdown-menu absolute z-[9999] hidden"
                  >
                    <div
                      data-tw-merge=""
                      className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 !-ml-[228px] mt-2.5 w-[478px] pt-2"
                    >
                      <div className="grid grid-cols-12 gap-4 gap-y-3 p-3">
                        <div className="col-span-6">
                          <label
                            data-tw-merge=""
                            htmlFor="input-filter-1"
                            className="inline-block mb-2 group-[.form-inline]:mb-2 group-[.form-inline]:sm:mb-0 group-[.form-inline]:sm:mr-5 group-[.form-inline]:sm:text-right text-xs"
                          >
                            From
                          </label>
                          <input
                            data-tw-merge=""
                            id="input-filter-1"
                            type="text"
                            placeholder="example@gmail.com"
                            className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10 flex-1"
                          />
                        </div>
                        <div className="col-span-6">
                          <label
                            data-tw-merge=""
                            htmlFor="input-filter-2"
                            className="inline-block mb-2 group-[.form-inline]:mb-2 group-[.form-inline]:sm:mb-0 group-[.form-inline]:sm:mr-5 group-[.form-inline]:sm:text-right text-xs"
                          >
                            To
                          </label>
                          <input
                            data-tw-merge=""
                            id="input-filter-2"
                            type="text"
                            placeholder="example@gmail.com"
                            className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10 flex-1"
                          />
                        </div>
                        <div className="col-span-6">
                          <label
                            data-tw-merge=""
                            htmlFor="input-filter-3"
                            className="inline-block mb-2 group-[.form-inline]:mb-2 group-[.form-inline]:sm:mb-0 group-[.form-inline]:sm:mr-5 group-[.form-inline]:sm:text-right text-xs"
                          >
                            Subject
                          </label>
                          <input
                            data-tw-merge=""
                            id="input-filter-3"
                            type="text"
                            placeholder="Important Meeting"
                            className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10 flex-1"
                          />
                        </div>
                        <div className="col-span-6">
                          <label
                            data-tw-merge=""
                            htmlFor="input-filter-4"
                            className="inline-block mb-2 group-[.form-inline]:mb-2 group-[.form-inline]:sm:mb-0 group-[.form-inline]:sm:mr-5 group-[.form-inline]:sm:text-right text-xs"
                          >
                            Has the Words
                          </label>
                          <input
                            data-tw-merge=""
                            id="input-filter-4"
                            type="text"
                            placeholder="Job, Work, Documentation"
                            className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10 flex-1"
                          />
                        </div>
                        <div className="col-span-6">
                          <label
                            data-tw-merge=""
                            htmlFor="input-filter-5"
                            className="inline-block mb-2 group-[.form-inline]:mb-2 group-[.form-inline]:sm:mb-0 group-[.form-inline]:sm:mr-5 group-[.form-inline]:sm:text-right text-xs"
                          >
                            Doesn't Have
                          </label>
                          <input
                            data-tw-merge=""
                            id="input-filter-5"
                            type="text"
                            placeholder="Job, Work, Documentation"
                            className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10 flex-1"
                          />
                        </div>
                        <div className="col-span-6">
                          <label
                            data-tw-merge=""
                            htmlFor="input-filter-6"
                            className="inline-block mb-2 group-[.form-inline]:mb-2 group-[.form-inline]:sm:mb-0 group-[.form-inline]:sm:mr-5 group-[.form-inline]:sm:text-right text-xs"
                          >
                            Size
                          </label>
                          <select
                            data-tw-merge=""
                            id="input-filter-6"
                            className="disabled:bg-slate-100 disabled:cursor-not-allowed disabled:dark:bg-darkmode-800/50 [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md py-2 px-3 pr-8 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 group-[.form-inline]:flex-1 flex-1"
                          >
                            <option>10</option>
                            <option>25</option>
                            <option>35</option>
                            <option>50</option>
                          </select>
                        </div>
                        <div className="col-span-12 mt-3 flex items-center">
                          <button
                            data-tw-merge=""
                            className="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-secondary/70 border-secondary/70 text-slate-500 dark:border-darkmode-400 dark:bg-darkmode-400 dark:text-slate-300 [&:hover:not(:disabled)]:bg-slate-100 [&:hover:not(:disabled)]:border-slate-100 [&:hover:not(:disabled)]:dark:border-darkmode-300/80 [&:hover:not(:disabled)]:dark:bg-darkmode-300/80 ml-auto w-32"
                          >
                            Create Filter
                          </button>
                          <button
                            data-tw-merge=""
                            className="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-primary border-primary text-white dark:border-primary ml-2 w-32"
                          >
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full sm:w-auto">
                <button
                  data-tw-merge=""
                  className="transition duration-200 border inline-flex items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-primary border-primary text-white dark:border-primary mr-2 shadow-md"
                >
                  Start a Video Call
                </button>
                <div
                  data-tw-merge=""
                  data-tw-placement="bottom-end"
                  className="dropdown relative"
                >
                  <button
                    data-tw-merge=""
                    data-tw-toggle="dropdown"
                    aria-expanded="false"
                    className="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed box px-2"
                  >
                    <span className="flex h-5 w-5 items-center justify-center">
                      <i
                        data-tw-merge=""
                        data-lucide="plus"
                        className="stroke-1.5 h-4 w-4"
                      />
                    </span>
                  </button>
                  <div
                    data-transition=""
                    data-selector=".show"
                    data-enter="transition-all ease-linear duration-150"
                    data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1"
                    data-enter-to="!mt-1 visible opacity-100 translate-y-0"
                    data-leave="transition-all ease-linear duration-150"
                    data-leave-from="!mt-1 visible opacity-100 translate-y-0"
                    data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1"
                    className="dropdown-menu absolute z-[9999] hidden"
                  >
                    <div
                      data-tw-merge=""
                      className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-40"
                    >
                      <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                        <i
                          data-tw-merge=""
                          data-lucide="user"
                          className="stroke-1.5 mr-2 h-4 w-4"
                        />
                        Contacts
                      </a>
                      <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                        <i
                          data-tw-merge=""
                          data-lucide="settings"
                          className="stroke-1.5 mr-2 h-4 w-4"
                        />
                        Settings
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END: Inbox Filter */}
            {/* BEGIN: Inbox Content */}
            <div className="intro-y box mt-5">
              <div className="flex flex-col-reverse border-b border-slate-200/60 p-5 text-slate-500 sm:flex-row">
                <div className="-mx-5 mt-3 flex items-center border-t border-slate-200/60 px-5 pt-5 sm:mx-0 sm:mt-0 sm:border-0 sm:px-0 sm:pt-0">
                  <input
                    data-tw-merge=""
                    type="checkbox"
                    className="transition-all duration-100 ease-in-out shadow-sm cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50 border-slate-400 checked:border-primary"
                  />
                  <div
                    data-tw-merge=""
                    data-tw-placement="bottom-start"
                    className="dropdown relative ml-1"
                  >
                    <button
                      data-tw-toggle="dropdown"
                      aria-expanded="false"
                      className="cursor-pointer block h-5 w-5"
                    >
                      <i
                        data-tw-merge=""
                        data-lucide="chevron-down"
                        className="stroke-1.5 w-5 h-5"
                      />
                    </button>
                    <div
                      data-transition=""
                      data-selector=".show"
                      data-enter="transition-all ease-linear duration-150"
                      data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1"
                      data-enter-to="!mt-1 visible opacity-100 translate-y-0"
                      data-leave="transition-all ease-linear duration-150"
                      data-leave-from="!mt-1 visible opacity-100 translate-y-0"
                      data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1"
                      className="dropdown-menu absolute z-[9999] hidden"
                    >
                      <div
                        data-tw-merge=""
                        className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-32 text-slate-800 dark:text-slate-300"
                      >
                        <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                          All
                        </a>
                        <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                          None
                        </a>
                        <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                          Read
                        </a>
                        <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                          Unread
                        </a>
                        <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                          Starred
                        </a>
                        <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                          Unstarred
                        </a>
                      </div>
                    </div>
                  </div>
                  <a
                    className="ml-5 flex h-5 w-5 items-center justify-center"
                    href="#"
                  >
                    <i
                      data-tw-merge=""
                      data-lucide="refresh-cw"
                      className="stroke-1.5 h-4 w-4"
                    />
                  </a>
                  <a
                    className="ml-5 flex h-5 w-5 items-center justify-center"
                    href="#"
                  >
                    <i
                      data-tw-merge=""
                      data-lucide="more-horizontal"
                      className="stroke-1.5 h-4 w-4"
                    />
                  </a>
                </div>
                <div className="flex items-center sm:ml-auto">
                  <div className="">1 - 50 of 5,238</div>
                  <a
                    className="ml-5 flex h-5 w-5 items-center justify-center"
                    href="#"
                  >
                    <i
                      data-tw-merge=""
                      data-lucide="chevron-left"
                      className="stroke-1.5 h-4 w-4"
                    />
                  </a>
                  <a
                    className="ml-5 flex h-5 w-5 items-center justify-center"
                    href="#"
                  >
                    <i
                      data-tw-merge=""
                      data-lucide="chevron-right"
                      className="stroke-1.5 h-4 w-4"
                    />
                  </a>
                  <a
                    className="ml-5 flex h-5 w-5 items-center justify-center"
                    href="#"
                  >
                    <i
                      data-tw-merge=""
                      data-lucide="settings"
                      className="stroke-1.5 h-4 w-4"
                    />
                  </a>
                </div>
              </div>
              <div className="overflow-x-auto sm:overflow-x-visible">
                <div className="intro-y">
                  <div className="transition duration-200 ease-in-out transform cursor-pointer inline-block sm:block border-b border-slate-200/60 dark:border-darkmode-400 hover:scale-[1.02] hover:relative hover:z-20 hover:shadow-md hover:border-0 hover:rounded bg-white text-slate-800 dark:text-slate-300 dark:bg-darkmode-600">
                    <div className="flex px-5 py-3">
                      <div className="mr-5 flex w-72 flex-none items-center">
                        <input
                          data-tw-merge=""
                          defaultChecked=""
                          type="checkbox"
                          className="transition-all duration-100 ease-in-out shadow-sm cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50 flex-none border-slate-400 checked:border-primary"
                        />
                        <a
                          className="ml-4 flex h-5 w-5 flex-none items-center justify-center text-slate-400"
                          href="#"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="star"
                            className="stroke-1.5 h-4 w-4"
                          />
                        </a>
                        <a
                          className="ml-2 flex h-5 w-5 flex-none items-center justify-center text-slate-400"
                          href="#"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="bookmark"
                            className="stroke-1.5 h-4 w-4"
                          />
                        </a>
                        <div className="image-fit relative ml-5 h-6 w-6 flex-none">
                          <img
                            className="rounded-full"
                            src="assetsd/images/fakers/profile-2.jpg"
                            alt="Midone - Tailwind Admin Dashboard Template"
                          />
                        </div>
                        <div className="ml-3 truncate font-medium">
                          Al Pacino
                        </div>
                      </div>
                      <div className="w-64 truncate sm:w-auto">
                        <span className="ml-3 truncate font-medium">
                          There are many variations of passages of Lorem Ips
                        </span>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomi
                      </div>
                      <div className="pl-10 ml-auto whitespace-nowrap font-medium">
                        05:09 AM
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y">
                  <div className="transition duration-200 ease-in-out transform cursor-pointer inline-block sm:block border-b border-slate-200/60 dark:border-darkmode-400 hover:scale-[1.02] hover:relative hover:z-20 hover:shadow-md hover:border-0 hover:rounded bg-slate-100 text-slate-600 dark:text-slate-500 dark:bg-darkmode-400/70">
                    <div className="flex px-5 py-3">
                      <div className="mr-5 flex w-72 flex-none items-center">
                        <input
                          data-tw-merge=""
                          type="checkbox"
                          className="transition-all duration-100 ease-in-out shadow-sm cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50 flex-none border-slate-400 checked:border-primary"
                        />
                        <a
                          className="ml-4 flex h-5 w-5 flex-none items-center justify-center text-slate-400"
                          href="#"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="star"
                            className="stroke-1.5 h-4 w-4"
                          />
                        </a>
                        <a
                          className="ml-2 flex h-5 w-5 flex-none items-center justify-center text-slate-400"
                          href="#"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="bookmark"
                            className="stroke-1.5 h-4 w-4"
                          />
                        </a>
                        <div className="image-fit relative ml-5 h-6 w-6 flex-none">
                          <img
                            className="rounded-full"
                            src="assetsd/images/fakers/profile-4.jpg"
                            alt="Midone - Tailwind Admin Dashboard Template"
                          />
                        </div>
                        <div className="ml-3 truncate">Sylvester Stallone</div>
                      </div>
                      <div className="w-64 truncate sm:w-auto">
                        <span className="ml-3 truncate">
                          Lorem Ipsum is simply dummy te
                        </span>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500
                      </div>
                      <div className="pl-10 ml-auto whitespace-nowrap">
                        01:10 PM
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y">
                  <div className="transition duration-200 ease-in-out transform cursor-pointer inline-block sm:block border-b border-slate-200/60 dark:border-darkmode-400 hover:scale-[1.02] hover:relative hover:z-20 hover:shadow-md hover:border-0 hover:rounded bg-slate-100 text-slate-600 dark:text-slate-500 dark:bg-darkmode-400/70">
                    <div className="flex px-5 py-3">
                      <div className="mr-5 flex w-72 flex-none items-center">
                        <input
                          data-tw-merge=""
                          type="checkbox"
                          className="transition-all duration-100 ease-in-out shadow-sm cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50 flex-none border-slate-400 checked:border-primary"
                        />
                        <a
                          className="ml-4 flex h-5 w-5 flex-none items-center justify-center text-slate-400"
                          href="#"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="star"
                            className="stroke-1.5 h-4 w-4"
                          />
                        </a>
                        <a
                          className="ml-2 flex h-5 w-5 flex-none items-center justify-center text-slate-400"
                          href="#"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="bookmark"
                            className="stroke-1.5 h-4 w-4"
                          />
                        </a>
                        <div className="image-fit relative ml-5 h-6 w-6 flex-none">
                          <img
                            className="rounded-full"
                            src="assetsd/images/fakers/profile-4.jpg"
                            alt="Midone - Tailwind Admin Dashboard Template"
                          />
                        </div>
                        <div className="ml-3 truncate">Robert De Niro</div>
                      </div>
                      <div className="w-64 truncate sm:w-auto">
                        <span className="ml-3 truncate">
                          There are many variations of passages of Lorem Ips
                        </span>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomi
                      </div>
                      <div className="pl-10 ml-auto whitespace-nowrap">
                        06:05 AM
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y">
                  <div className="transition duration-200 ease-in-out transform cursor-pointer inline-block sm:block border-b border-slate-200/60 dark:border-darkmode-400 hover:scale-[1.02] hover:relative hover:z-20 hover:shadow-md hover:border-0 hover:rounded bg-white text-slate-800 dark:text-slate-300 dark:bg-darkmode-600">
                    <div className="flex px-5 py-3">
                      <div className="mr-5 flex w-72 flex-none items-center">
                        <input
                          data-tw-merge=""
                          defaultChecked=""
                          type="checkbox"
                          className="transition-all duration-100 ease-in-out shadow-sm cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50 flex-none border-slate-400 checked:border-primary"
                        />
                        <a
                          className="ml-4 flex h-5 w-5 flex-none items-center justify-center text-slate-400"
                          href="#"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="star"
                            className="stroke-1.5 h-4 w-4"
                          />
                        </a>
                        <a
                          className="ml-2 flex h-5 w-5 flex-none items-center justify-center text-slate-400"
                          href="#"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="bookmark"
                            className="stroke-1.5 h-4 w-4"
                          />
                        </a>
                        <div className="image-fit relative ml-5 h-6 w-6 flex-none">
                          <img
                            className="rounded-full"
                            src="assetsd/images/fakers/profile-5.jpg"
                            alt="Midone - Tailwind Admin Dashboard Template"
                          />
                        </div>
                        <div className="ml-3 truncate font-medium">
                          Russell Crowe
                        </div>
                      </div>
                      <div className="w-64 truncate sm:w-auto">
                        <span className="ml-3 truncate font-medium">
                          Lorem Ipsum is simply dummy te
                        </span>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500
                      </div>
                      <div className="pl-10 ml-auto whitespace-nowrap font-medium">
                        06:05 AM
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y">
                  <div className="transition duration-200 ease-in-out transform cursor-pointer inline-block sm:block border-b border-slate-200/60 dark:border-darkmode-400 hover:scale-[1.02] hover:relative hover:z-20 hover:shadow-md hover:border-0 hover:rounded bg-slate-100 text-slate-600 dark:text-slate-500 dark:bg-darkmode-400/70">
                    <div className="flex px-5 py-3">
                      <div className="mr-5 flex w-72 flex-none items-center">
                        <input
                          data-tw-merge=""
                          type="checkbox"
                          className="transition-all duration-100 ease-in-out shadow-sm cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50 flex-none border-slate-400 checked:border-primary"
                        />
                        <a
                          className="ml-4 flex h-5 w-5 flex-none items-center justify-center text-slate-400"
                          href="#"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="star"
                            className="stroke-1.5 h-4 w-4"
                          />
                        </a>
                        <a
                          className="ml-2 flex h-5 w-5 flex-none items-center justify-center text-slate-400"
                          href="#"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="bookmark"
                            className="stroke-1.5 h-4 w-4"
                          />
                        </a>
                        <div className="image-fit relative ml-5 h-6 w-6 flex-none">
                          <img
                            className="rounded-full"
                            src="assetsd/images/fakers/profile-5.jpg"
                            alt="Midone - Tailwind Admin Dashboard Template"
                          />
                        </div>
                        <div className="ml-3 truncate">Charlize Theron</div>
                      </div>
                      <div className="w-64 truncate sm:w-auto">
                        <span className="ml-3 truncate">
                          Lorem Ipsum is simply dummy te
                        </span>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500
                      </div>
                      <div className="pl-10 ml-auto whitespace-nowrap">
                        05:09 AM
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y">
                  <div className="transition duration-200 ease-in-out transform cursor-pointer inline-block sm:block border-b border-slate-200/60 dark:border-darkmode-400 hover:scale-[1.02] hover:relative hover:z-20 hover:shadow-md hover:border-0 hover:rounded bg-slate-100 text-slate-600 dark:text-slate-500 dark:bg-darkmode-400/70">
                    <div className="flex px-5 py-3">
                      <div className="mr-5 flex w-72 flex-none items-center">
                        <input
                          data-tw-merge=""
                          type="checkbox"
                          className="transition-all duration-100 ease-in-out shadow-sm cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50 flex-none border-slate-400 checked:border-primary"
                        />
                        <a
                          className="ml-4 flex h-5 w-5 flex-none items-center justify-center text-slate-400"
                          href="#"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="star"
                            className="stroke-1.5 h-4 w-4"
                          />
                        </a>
                        <a
                          className="ml-2 flex h-5 w-5 flex-none items-center justify-center text-slate-400"
                          href="#"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="bookmark"
                            className="stroke-1.5 h-4 w-4"
                          />
                        </a>
                        <div className="image-fit relative ml-5 h-6 w-6 flex-none">
                          <img
                            className="rounded-full"
                            src="assetsd/images/fakers/profile-13.jpg"
                            alt="Midone - Tailwind Admin Dashboard Template"
                          />
                        </div>
                        <div className="ml-3 truncate">Leonardo DiCaprio</div>
                      </div>
                      <div className="w-64 truncate sm:w-auto">
                        <span className="ml-3 truncate">
                          It is a long established fact
                        </span>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem
                      </div>
                      <div className="pl-10 ml-auto whitespace-nowrap">
                        06:05 AM
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y">
                  <div className="transition duration-200 ease-in-out transform cursor-pointer inline-block sm:block border-b border-slate-200/60 dark:border-darkmode-400 hover:scale-[1.02] hover:relative hover:z-20 hover:shadow-md hover:border-0 hover:rounded bg-slate-100 text-slate-600 dark:text-slate-500 dark:bg-darkmode-400/70">
                    <div className="flex px-5 py-3">
                      <div className="mr-5 flex w-72 flex-none items-center">
                        <input
                          data-tw-merge=""
                          type="checkbox"
                          className="transition-all duration-100 ease-in-out shadow-sm cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50 flex-none border-slate-400 checked:border-primary"
                        />
                        <a
                          className="ml-4 flex h-5 w-5 flex-none items-center justify-center text-slate-400"
                          href="#"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="star"
                            className="stroke-1.5 h-4 w-4"
                          />
                        </a>
                        <a
                          className="ml-2 flex h-5 w-5 flex-none items-center justify-center text-slate-400"
                          href="#"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="bookmark"
                            className="stroke-1.5 h-4 w-4"
                          />
                        </a>
                        <div className="image-fit relative ml-5 h-6 w-6 flex-none">
                          <img
                            className="rounded-full"
                            src="assetsd/images/fakers/profile-7.jpg"
                            alt="Midone - Tailwind Admin Dashboard Template"
                          />
                        </div>
                        <div className="ml-3 truncate">Sylvester Stallone</div>
                      </div>
                      <div className="w-64 truncate sm:w-auto">
                        <span className="ml-3 truncate">
                          Lorem Ipsum is simply dummy te
                        </span>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500
                      </div>
                      <div className="pl-10 ml-auto whitespace-nowrap">
                        01:10 PM
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y">
                  <div className="transition duration-200 ease-in-out transform cursor-pointer inline-block sm:block border-b border-slate-200/60 dark:border-darkmode-400 hover:scale-[1.02] hover:relative hover:z-20 hover:shadow-md hover:border-0 hover:rounded bg-slate-100 text-slate-600 dark:text-slate-500 dark:bg-darkmode-400/70">
                    <div className="flex px-5 py-3">
                      <div className="mr-5 flex w-72 flex-none items-center">
                        <input
                          data-tw-merge=""
                          type="checkbox"
                          className="transition-all duration-100 ease-in-out shadow-sm cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50 flex-none border-slate-400 checked:border-primary"
                        />
                        <a
                          className="ml-4 flex h-5 w-5 flex-none items-center justify-center text-slate-400"
                          href="#"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="star"
                            className="stroke-1.5 h-4 w-4"
                          />
                        </a>
                        <a
                          className="ml-2 flex h-5 w-5 flex-none items-center justify-center text-slate-400"
                          href="#"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="bookmark"
                            className="stroke-1.5 h-4 w-4"
                          />
                        </a>
                        <div className="image-fit relative ml-5 h-6 w-6 flex-none">
                          <img
                            className="rounded-full"
                            src="assetsd/images/fakers/profile-4.jpg"
                            alt="Midone - Tailwind Admin Dashboard Template"
                          />
                        </div>
                        <div className="ml-3 truncate">Al Pacino</div>
                      </div>
                      <div className="w-64 truncate sm:w-auto">
                        <span className="ml-3 truncate">
                          It is a long established fact
                        </span>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem
                      </div>
                      <div className="pl-10 ml-auto whitespace-nowrap">
                        01:10 PM
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y">
                  <div className="transition duration-200 ease-in-out transform cursor-pointer inline-block sm:block border-b border-slate-200/60 dark:border-darkmode-400 hover:scale-[1.02] hover:relative hover:z-20 hover:shadow-md hover:border-0 hover:rounded bg-white text-slate-800 dark:text-slate-300 dark:bg-darkmode-600">
                    <div className="flex px-5 py-3">
                      <div className="mr-5 flex w-72 flex-none items-center">
                        <input
                          data-tw-merge=""
                          defaultChecked=""
                          type="checkbox"
                          className="transition-all duration-100 ease-in-out shadow-sm cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50 flex-none border-slate-400 checked:border-primary"
                        />
                        <a
                          className="ml-4 flex h-5 w-5 flex-none items-center justify-center text-slate-400"
                          href="#"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="star"
                            className="stroke-1.5 h-4 w-4"
                          />
                        </a>
                        <a
                          className="ml-2 flex h-5 w-5 flex-none items-center justify-center text-slate-400"
                          href="#"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="bookmark"
                            className="stroke-1.5 h-4 w-4"
                          />
                        </a>
                        <div className="image-fit relative ml-5 h-6 w-6 flex-none">
                          <img
                            className="rounded-full"
                            src="assetsd/images/fakers/profile-13.jpg"
                            alt="Midone - Tailwind Admin Dashboard Template"
                          />
                        </div>
                        <div className="ml-3 truncate font-medium">
                          Denzel Washington
                        </div>
                      </div>
                      <div className="w-64 truncate sm:w-auto">
                        <span className="ml-3 truncate font-medium">
                          There are many variations of passages of Lorem Ips
                        </span>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomi
                      </div>
                      <div className="pl-10 ml-auto whitespace-nowrap font-medium">
                        06:05 AM
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y">
                  <div className="transition duration-200 ease-in-out transform cursor-pointer inline-block sm:block border-b border-slate-200/60 dark:border-darkmode-400 hover:scale-[1.02] hover:relative hover:z-20 hover:shadow-md hover:border-0 hover:rounded bg-white text-slate-800 dark:text-slate-300 dark:bg-darkmode-600">
                    <div className="flex px-5 py-3">
                      <div className="mr-5 flex w-72 flex-none items-center">
                        <input
                          data-tw-merge=""
                          defaultChecked=""
                          type="checkbox"
                          className="transition-all duration-100 ease-in-out shadow-sm cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50 flex-none border-slate-400 checked:border-primary"
                        />
                        <a
                          className="ml-4 flex h-5 w-5 flex-none items-center justify-center text-slate-400"
                          href="#"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="star"
                            className="stroke-1.5 h-4 w-4"
                          />
                        </a>
                        <a
                          className="ml-2 flex h-5 w-5 flex-none items-center justify-center text-slate-400"
                          href="#"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="bookmark"
                            className="stroke-1.5 h-4 w-4"
                          />
                        </a>
                        <div className="image-fit relative ml-5 h-6 w-6 flex-none">
                          <img
                            className="rounded-full"
                            src="assetsd/images/fakers/profile-8.jpg"
                            alt="Midone - Tailwind Admin Dashboard Template"
                          />
                        </div>
                        <div className="ml-3 truncate font-medium">
                          Denzel Washington
                        </div>
                      </div>
                      <div className="w-64 truncate sm:w-auto">
                        <span className="ml-3 truncate font-medium">
                          Lorem Ipsum is simply dummy te
                        </span>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500
                      </div>
                      <div className="pl-10 ml-auto whitespace-nowrap font-medium">
                        01:10 PM
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y">
                  <div className="transition duration-200 ease-in-out transform cursor-pointer inline-block sm:block border-b border-slate-200/60 dark:border-darkmode-400 hover:scale-[1.02] hover:relative hover:z-20 hover:shadow-md hover:border-0 hover:rounded bg-slate-100 text-slate-600 dark:text-slate-500 dark:bg-darkmode-400/70">
                    <div className="flex px-5 py-3">
                      <div className="mr-5 flex w-72 flex-none items-center">
                        <input
                          data-tw-merge=""
                          type="checkbox"
                          className="transition-all duration-100 ease-in-out shadow-sm cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50 flex-none border-slate-400 checked:border-primary"
                        />
                        <a
                          className="ml-4 flex h-5 w-5 flex-none items-center justify-center text-slate-400"
                          href="#"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="star"
                            className="stroke-1.5 h-4 w-4"
                          />
                        </a>
                        <a
                          className="ml-2 flex h-5 w-5 flex-none items-center justify-center text-slate-400"
                          href="#"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="bookmark"
                            className="stroke-1.5 h-4 w-4"
                          />
                        </a>
                        <div className="image-fit relative ml-5 h-6 w-6 flex-none">
                          <img
                            className="rounded-full"
                            src="assetsd/images/fakers/profile-5.jpg"
                            alt="Midone - Tailwind Admin Dashboard Template"
                          />
                        </div>
                        <div className="ml-3 truncate">Tom Cruise</div>
                      </div>
                      <div className="w-64 truncate sm:w-auto">
                        <span className="ml-3 truncate">
                          Contrary to popular belief, Lo
                        </span>
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 20
                      </div>
                      <div className="pl-10 ml-auto whitespace-nowrap">
                        05:09 AM
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y">
                  <div className="transition duration-200 ease-in-out transform cursor-pointer inline-block sm:block border-b border-slate-200/60 dark:border-darkmode-400 hover:scale-[1.02] hover:relative hover:z-20 hover:shadow-md hover:border-0 hover:rounded bg-white text-slate-800 dark:text-slate-300 dark:bg-darkmode-600">
                    <div className="flex px-5 py-3">
                      <div className="mr-5 flex w-72 flex-none items-center">
                        <input
                          data-tw-merge=""
                          defaultChecked=""
                          type="checkbox"
                          className="transition-all duration-100 ease-in-out shadow-sm cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50 flex-none border-slate-400 checked:border-primary"
                        />
                        <a
                          className="ml-4 flex h-5 w-5 flex-none items-center justify-center text-slate-400"
                          href="#"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="star"
                            className="stroke-1.5 h-4 w-4"
                          />
                        </a>
                        <a
                          className="ml-2 flex h-5 w-5 flex-none items-center justify-center text-slate-400"
                          href="#"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="bookmark"
                            className="stroke-1.5 h-4 w-4"
                          />
                        </a>
                        <div className="image-fit relative ml-5 h-6 w-6 flex-none">
                          <img
                            className="rounded-full"
                            src="assetsd/images/fakers/profile-5.jpg"
                            alt="Midone - Tailwind Admin Dashboard Template"
                          />
                        </div>
                        <div className="ml-3 truncate font-medium">
                          Christian Bale
                        </div>
                      </div>
                      <div className="w-64 truncate sm:w-auto">
                        <span className="ml-3 truncate font-medium">
                          There are many variations of passages of Lorem Ips
                        </span>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomi
                      </div>
                      <div className="pl-10 ml-auto whitespace-nowrap font-medium">
                        01:10 PM
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y">
                  <div className="transition duration-200 ease-in-out transform cursor-pointer inline-block sm:block border-b border-slate-200/60 dark:border-darkmode-400 hover:scale-[1.02] hover:relative hover:z-20 hover:shadow-md hover:border-0 hover:rounded bg-slate-100 text-slate-600 dark:text-slate-500 dark:bg-darkmode-400/70">
                    <div className="flex px-5 py-3">
                      <div className="mr-5 flex w-72 flex-none items-center">
                        <input
                          data-tw-merge=""
                          type="checkbox"
                          className="transition-all duration-100 ease-in-out shadow-sm cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50 flex-none border-slate-400 checked:border-primary"
                        />
                        <a
                          className="ml-4 flex h-5 w-5 flex-none items-center justify-center text-slate-400"
                          href="#"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="star"
                            className="stroke-1.5 h-4 w-4"
                          />
                        </a>
                        <a
                          className="ml-2 flex h-5 w-5 flex-none items-center justify-center text-slate-400"
                          href="#"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="bookmark"
                            className="stroke-1.5 h-4 w-4"
                          />
                        </a>
                        <div className="image-fit relative ml-5 h-6 w-6 flex-none">
                          <img
                            className="rounded-full"
                            src="assetsd/images/fakers/profile-8.jpg"
                            alt="Midone - Tailwind Admin Dashboard Template"
                          />
                        </div>
                        <div className="ml-3 truncate">John Travolta</div>
                      </div>
                      <div className="w-64 truncate sm:w-auto">
                        <span className="ml-3 truncate">
                          Lorem Ipsum is simply dummy te
                        </span>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500
                      </div>
                      <div className="pl-10 ml-auto whitespace-nowrap">
                        06:05 AM
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y">
                  <div className="transition duration-200 ease-in-out transform cursor-pointer inline-block sm:block border-b border-slate-200/60 dark:border-darkmode-400 hover:scale-[1.02] hover:relative hover:z-20 hover:shadow-md hover:border-0 hover:rounded bg-slate-100 text-slate-600 dark:text-slate-500 dark:bg-darkmode-400/70">
                    <div className="flex px-5 py-3">
                      <div className="mr-5 flex w-72 flex-none items-center">
                        <input
                          data-tw-merge=""
                          type="checkbox"
                          className="transition-all duration-100 ease-in-out shadow-sm cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50 flex-none border-slate-400 checked:border-primary"
                        />
                        <a
                          className="ml-4 flex h-5 w-5 flex-none items-center justify-center text-slate-400"
                          href="#"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="star"
                            className="stroke-1.5 h-4 w-4"
                          />
                        </a>
                        <a
                          className="ml-2 flex h-5 w-5 flex-none items-center justify-center text-slate-400"
                          href="#"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="bookmark"
                            className="stroke-1.5 h-4 w-4"
                          />
                        </a>
                        <div className="image-fit relative ml-5 h-6 w-6 flex-none">
                          <img
                            className="rounded-full"
                            src="assetsd/images/fakers/profile-10.jpg"
                            alt="Midone - Tailwind Admin Dashboard Template"
                          />
                        </div>
                        <div className="ml-3 truncate">Angelina Jolie</div>
                      </div>
                      <div className="w-64 truncate sm:w-auto">
                        <span className="ml-3 truncate">
                          It is a long established fact
                        </span>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem
                      </div>
                      <div className="pl-10 ml-auto whitespace-nowrap">
                        05:09 AM
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y">
                  <div className="transition duration-200 ease-in-out transform cursor-pointer inline-block sm:block border-b border-slate-200/60 dark:border-darkmode-400 hover:scale-[1.02] hover:relative hover:z-20 hover:shadow-md hover:border-0 hover:rounded bg-white text-slate-800 dark:text-slate-300 dark:bg-darkmode-600">
                    <div className="flex px-5 py-3">
                      <div className="mr-5 flex w-72 flex-none items-center">
                        <input
                          data-tw-merge=""
                          defaultChecked=""
                          type="checkbox"
                          className="transition-all duration-100 ease-in-out shadow-sm cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50 flex-none border-slate-400 checked:border-primary"
                        />
                        <a
                          className="ml-4 flex h-5 w-5 flex-none items-center justify-center text-slate-400"
                          href="#"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="star"
                            className="stroke-1.5 h-4 w-4"
                          />
                        </a>
                        <a
                          className="ml-2 flex h-5 w-5 flex-none items-center justify-center text-slate-400"
                          href="#"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="bookmark"
                            className="stroke-1.5 h-4 w-4"
                          />
                        </a>
                        <div className="image-fit relative ml-5 h-6 w-6 flex-none">
                          <img
                            className="rounded-full"
                            src="assetsd/images/fakers/profile-2.jpg"
                            alt="Midone - Tailwind Admin Dashboard Template"
                          />
                        </div>
                        <div className="ml-3 truncate font-medium">
                          Morgan Freeman
                        </div>
                      </div>
                      <div className="w-64 truncate sm:w-auto">
                        <span className="ml-3 truncate font-medium">
                          Lorem Ipsum is simply dummy te
                        </span>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500
                      </div>
                      <div className="pl-10 ml-auto whitespace-nowrap font-medium">
                        06:05 AM
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y">
                  <div className="transition duration-200 ease-in-out transform cursor-pointer inline-block sm:block border-b border-slate-200/60 dark:border-darkmode-400 hover:scale-[1.02] hover:relative hover:z-20 hover:shadow-md hover:border-0 hover:rounded bg-white text-slate-800 dark:text-slate-300 dark:bg-darkmode-600">
                    <div className="flex px-5 py-3">
                      <div className="mr-5 flex w-72 flex-none items-center">
                        <input
                          data-tw-merge=""
                          defaultChecked=""
                          type="checkbox"
                          className="transition-all duration-100 ease-in-out shadow-sm cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50 flex-none border-slate-400 checked:border-primary"
                        />
                        <a
                          className="ml-4 flex h-5 w-5 flex-none items-center justify-center text-slate-400"
                          href="#"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="star"
                            className="stroke-1.5 h-4 w-4"
                          />
                        </a>
                        <a
                          className="ml-2 flex h-5 w-5 flex-none items-center justify-center text-slate-400"
                          href="#"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="bookmark"
                            className="stroke-1.5 h-4 w-4"
                          />
                        </a>
                        <div className="image-fit relative ml-5 h-6 w-6 flex-none">
                          <img
                            className="rounded-full"
                            src="assetsd/images/fakers/profile-13.jpg"
                            alt="Midone - Tailwind Admin Dashboard Template"
                          />
                        </div>
                        <div className="ml-3 truncate font-medium">
                          John Travolta
                        </div>
                      </div>
                      <div className="w-64 truncate sm:w-auto">
                        <span className="ml-3 truncate font-medium">
                          There are many variations of passages of Lorem Ips
                        </span>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomi
                      </div>
                      <div className="pl-10 ml-auto whitespace-nowrap font-medium">
                        01:10 PM
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y">
                  <div className="transition duration-200 ease-in-out transform cursor-pointer inline-block sm:block border-b border-slate-200/60 dark:border-darkmode-400 hover:scale-[1.02] hover:relative hover:z-20 hover:shadow-md hover:border-0 hover:rounded bg-white text-slate-800 dark:text-slate-300 dark:bg-darkmode-600">
                    <div className="flex px-5 py-3">
                      <div className="mr-5 flex w-72 flex-none items-center">
                        <input
                          data-tw-merge=""
                          defaultChecked=""
                          type="checkbox"
                          className="transition-all duration-100 ease-in-out shadow-sm cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50 flex-none border-slate-400 checked:border-primary"
                        />
                        <a
                          className="ml-4 flex h-5 w-5 flex-none items-center justify-center text-slate-400"
                          href="#"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="star"
                            className="stroke-1.5 h-4 w-4"
                          />
                        </a>
                        <a
                          className="ml-2 flex h-5 w-5 flex-none items-center justify-center text-slate-400"
                          href="#"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="bookmark"
                            className="stroke-1.5 h-4 w-4"
                          />
                        </a>
                        <div className="image-fit relative ml-5 h-6 w-6 flex-none">
                          <img
                            className="rounded-full"
                            src="assetsd/images/fakers/profile-6.jpg"
                            alt="Midone - Tailwind Admin Dashboard Template"
                          />
                        </div>
                        <div className="ml-3 truncate font-medium">
                          Kevin Spacey
                        </div>
                      </div>
                      <div className="w-64 truncate sm:w-auto">
                        <span className="ml-3 truncate font-medium">
                          Lorem Ipsum is simply dummy te
                        </span>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500
                      </div>
                      <div className="pl-10 ml-auto whitespace-nowrap font-medium">
                        05:09 AM
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y">
                  <div className="transition duration-200 ease-in-out transform cursor-pointer inline-block sm:block border-b border-slate-200/60 dark:border-darkmode-400 hover:scale-[1.02] hover:relative hover:z-20 hover:shadow-md hover:border-0 hover:rounded bg-slate-100 text-slate-600 dark:text-slate-500 dark:bg-darkmode-400/70">
                    <div className="flex px-5 py-3">
                      <div className="mr-5 flex w-72 flex-none items-center">
                        <input
                          data-tw-merge=""
                          type="checkbox"
                          className="transition-all duration-100 ease-in-out shadow-sm cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50 flex-none border-slate-400 checked:border-primary"
                        />
                        <a
                          className="ml-4 flex h-5 w-5 flex-none items-center justify-center text-slate-400"
                          href="#"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="star"
                            className="stroke-1.5 h-4 w-4"
                          />
                        </a>
                        <a
                          className="ml-2 flex h-5 w-5 flex-none items-center justify-center text-slate-400"
                          href="#"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="bookmark"
                            className="stroke-1.5 h-4 w-4"
                          />
                        </a>
                        <div className="image-fit relative ml-5 h-6 w-6 flex-none">
                          <img
                            className="rounded-full"
                            src="assetsd/images/fakers/profile-12.jpg"
                            alt="Midone - Tailwind Admin Dashboard Template"
                          />
                        </div>
                        <div className="ml-3 truncate">Russell Crowe</div>
                      </div>
                      <div className="w-64 truncate sm:w-auto">
                        <span className="ml-3 truncate">
                          Contrary to popular belief, Lo
                        </span>
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 20
                      </div>
                      <div className="pl-10 ml-auto whitespace-nowrap">
                        01:10 PM
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y">
                  <div className="transition duration-200 ease-in-out transform cursor-pointer inline-block sm:block border-b border-slate-200/60 dark:border-darkmode-400 hover:scale-[1.02] hover:relative hover:z-20 hover:shadow-md hover:border-0 hover:rounded bg-white text-slate-800 dark:text-slate-300 dark:bg-darkmode-600">
                    <div className="flex px-5 py-3">
                      <div className="mr-5 flex w-72 flex-none items-center">
                        <input
                          data-tw-merge=""
                          defaultChecked=""
                          type="checkbox"
                          className="transition-all duration-100 ease-in-out shadow-sm cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50 flex-none border-slate-400 checked:border-primary"
                        />
                        <a
                          className="ml-4 flex h-5 w-5 flex-none items-center justify-center text-slate-400"
                          href="#"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="star"
                            className="stroke-1.5 h-4 w-4"
                          />
                        </a>
                        <a
                          className="ml-2 flex h-5 w-5 flex-none items-center justify-center text-slate-400"
                          href="#"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="bookmark"
                            className="stroke-1.5 h-4 w-4"
                          />
                        </a>
                        <div className="image-fit relative ml-5 h-6 w-6 flex-none">
                          <img
                            className="rounded-full"
                            src="assetsd/images/fakers/profile-15.jpg"
                            alt="Midone - Tailwind Admin Dashboard Template"
                          />
                        </div>
                        <div className="ml-3 truncate font-medium">
                          Angelina Jolie
                        </div>
                      </div>
                      <div className="w-64 truncate sm:w-auto">
                        <span className="ml-3 truncate font-medium">
                          It is a long established fact
                        </span>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem
                      </div>
                      <div className="pl-10 ml-auto whitespace-nowrap font-medium">
                        05:09 AM
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y">
                  <div className="transition duration-200 ease-in-out transform cursor-pointer inline-block sm:block border-b border-slate-200/60 dark:border-darkmode-400 hover:scale-[1.02] hover:relative hover:z-20 hover:shadow-md hover:border-0 hover:rounded bg-slate-100 text-slate-600 dark:text-slate-500 dark:bg-darkmode-400/70">
                    <div className="flex px-5 py-3">
                      <div className="mr-5 flex w-72 flex-none items-center">
                        <input
                          data-tw-merge=""
                          type="checkbox"
                          className="transition-all duration-100 ease-in-out shadow-sm cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50 flex-none border-slate-400 checked:border-primary"
                        />
                        <a
                          className="ml-4 flex h-5 w-5 flex-none items-center justify-center text-slate-400"
                          href="#"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="star"
                            className="stroke-1.5 h-4 w-4"
                          />
                        </a>
                        <a
                          className="ml-2 flex h-5 w-5 flex-none items-center justify-center text-slate-400"
                          href="#"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="bookmark"
                            className="stroke-1.5 h-4 w-4"
                          />
                        </a>
                        <div className="image-fit relative ml-5 h-6 w-6 flex-none">
                          <img
                            className="rounded-full"
                            src="assetsd/images/fakers/profile-1.jpg"
                            alt="Midone - Tailwind Admin Dashboard Template"
                          />
                        </div>
                        <div className="ml-3 truncate">Angelina Jolie</div>
                      </div>
                      <div className="w-64 truncate sm:w-auto">
                        <span className="ml-3 truncate">
                          Lorem Ipsum is simply dummy te
                        </span>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500
                      </div>
                      <div className="pl-10 ml-auto whitespace-nowrap">
                        06:05 AM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center p-5 text-center text-slate-500 sm:flex-row sm:text-left">
                <div>4.41 GB (25%) of 17 GB used Manage</div>
                <div className="mt-2 sm:ml-auto sm:mt-0">
                  Last account activity: 36 minutes ago
                </div>
              </div>
            </div>
            {/* END: Inbox Content */}
          </div>
        </div>
      </div>
      {/* END: Content */}
    </div>
  </div>
</>

    </div>
  )
}
