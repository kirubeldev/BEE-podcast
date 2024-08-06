import React, { useState } from "react";
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

export default function Update() {
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
                  <a href="/inbox" className="side-menu ">
                    <div className="side-menu__icon">
                      <RiInboxLine className="stroke-1.5 w-5 h-5" />
                    </div>
                    <div className="side-menu__title">Inbox</div>
                  </a>
                </li>

                <li>
                  <a href="/post" className="side-menu ">
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
                  <a href="/user" className="side-menu ">
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
                  <a href="/update" className="side-menu side-menu--active">
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
                <a href="#">Dashboard</a>
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
                    <div className="ml-3">Denzel Washington</div>
                    <div className="ml-auto w-48 truncate text-right text-xs text-slate-500">
                      denzelwashington@left4code.com
                    </div>
                  </a>
                  <a className="mt-2 flex items-center" href="#">
                    <div className="image-fit h-8 w-8">
                      <img
                        className="rounded-full"
                        src="assetsd/images/fakers/profile-14.jpg"
                        alt="Midone - Tailwind Admin Dashboard Template"
                      />
                    </div>
                    <div className="ml-3">Al Pacino</div>
                    <div className="ml-auto w-48 truncate text-right text-xs text-slate-500">
                      alpacino@left4code.com
                    </div>
                  </a>
                  <a className="mt-2 flex items-center" href="#">
                    <div className="image-fit h-8 w-8">
                      <img
                        className="rounded-full"
                        src="assetsd/images/fakers/profile-2.jpg"
                        alt="Midone - Tailwind Admin Dashboard Template"
                      />
                    </div>
                    <div className="ml-3">Johnny Depp</div>
                    <div className="ml-auto w-48 truncate text-right text-xs text-slate-500">
                      johnnydepp@left4code.com
                    </div>
                  </a>
                  <a className="mt-2 flex items-center" href="#">
                    <div className="image-fit h-8 w-8">
                      <img
                        className="rounded-full"
                        src="assetsd/images/fakers/profile-8.jpg"
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
                      src="assetsd/images/fakers/preview-2.jpg"
                      alt="Midone - Tailwind Admin Dashboard Template"
                    />
                  </div>
                  <div className="ml-3">Dell XPS 13</div>
                  <div className="ml-auto w-48 truncate text-right text-xs text-slate-500">
                    PC &amp; Laptop
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
                  <div className="ml-3">Sony A7 III</div>
                  <div className="ml-auto w-48 truncate text-right text-xs text-slate-500">
                    Photography
                  </div>
                </a>
                <a className="mt-2 flex items-center" href="#">
                  <div className="image-fit h-8 w-8">
                    <img
                      className="rounded-full"
                      src="assetsd/images/fakers/preview-7.jpg"
                      alt="Midone - Tailwind Admin Dashboard Template"
                    />
                  </div>
                  <div className="ml-3">Nike Tanjun</div>
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
                        Denzel Washington
                      </a>
                      <div className="ml-auto whitespace-nowrap text-xs text-slate-400">
                        05:09 AM
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
                      src="assetsd/images/fakers/profile-14.jpg"
                      alt="Midone - Tailwind Admin Dashboard Template"
                    />
                    <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-success dark:border-darkmode-600"></div>
                  </div>
                  <div className="ml-2 overflow-hidden">
                    <div className="flex items-center">
                      <a className="mr-5 truncate font-medium" href="#">
                        Al Pacino
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
                <div className="cursor-pointer relative flex items-center mt-5">
                  <div className="image-fit relative mr-1 h-12 w-12 flex-none">
                    <img
                      className="rounded-full"
                      src="assetsd/images/fakers/profile-2.jpg"
                      alt="Midone - Tailwind Admin Dashboard Template"
                    />
                    <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-success dark:border-darkmode-600"></div>
                  </div>
                  <div className="ml-2 overflow-hidden">
                    <div className="flex items-center">
                      <a className="mr-5 truncate font-medium" href="#">
                        Johnny Depp
                      </a>
                      <div className="ml-auto whitespace-nowrap text-xs text-slate-400">
                        05:09 AM
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
                      src="assetsd/images/fakers/profile-8.jpg"
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
                        06:05 AM
                      </div>
                    </div>
                    <div className="mt-0.5 w-full truncate text-slate-500">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500
                    </div>
                  </div>
                </div>
                <div className="cursor-pointer relative flex items-center mt-5">
                  <div className="image-fit relative mr-1 h-12 w-12 flex-none">
                    <img
                      className="rounded-full"
                      src="assetsd/images/fakers/profile-8.jpg"
                      alt="Midone - Tailwind Admin Dashboard Template"
                    />
                    <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-success dark:border-darkmode-600"></div>
                  </div>
                  <div className="ml-2 overflow-hidden">
                    <div className="flex items-center">
                      <a className="mr-5 truncate font-medium" href="#">
                        Arnold Schwarzenegger
                      </a>
                      <div className="ml-auto whitespace-nowrap text-xs text-slate-400">
                        01:10 PM
                      </div>
                    </div>
                    <div className="mt-0.5 w-full truncate text-slate-500">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500
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
                src="assetsd/images/fakers/profile-8.jpg"
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
                  <div className="font-medium">Denzel Washington</div>
                  <div className="mt-0.5 text-xs text-white/70 dark:text-slate-500">
                    Frontend Engineer
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
        <div className="intro-y mt-8 flex items-center">
          <h2 className="mr-auto text-lg font-medium">Update Profile</h2>
        </div>
        <div className="grid grid-cols-12 gap-6">
          {/* BEGIN: Profile Menu */}
          <div className="col-span-12 flex flex-col-reverse lg:col-span-4 lg:block 2xl:col-span-3">
            <div className="intro-y box mt-5">
              <div className="relative flex items-center p-5">
                <div className="image-fit h-12 w-12">
                  <img
                    className="rounded-full"
                    src="assetsd/images/fakers/profile-13.jpg"
                    alt="Midone - Tailwind Admin Dashboard Template"
                  />
                </div>
                <div className="ml-4 mr-auto">
                  <div className="text-base font-medium">Al Pacino</div>
                  <div className="text-slate-500">DevOps Engineer</div>
                </div>
                <div
                  data-tw-merge=""
                  data-tw-placement="bottom-end"
                  className="dropdown relative"
                >
                  <button
                    data-tw-toggle="dropdown"
                    aria-expanded="false"
                    className="cursor-pointer block h-5 w-5"
                    // tag="a"
                  >
                    <i
                      data-tw-merge=""
                      data-lucide="more-horizontal"
                      className="stroke-1.5 w-5 h-5 text-slate-500"
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
                      className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-56"
                    >
                      <div className="p-2 font-medium">Export Options</div>
                      <div className="h-px my-2 -mx-2 bg-slate-200/60 dark:bg-darkmode-400"></div>
                      <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                        <i
                          data-tw-merge=""
                          data-lucide="activity"
                          className="stroke-1.5 mr-2 h-4 w-4"
                        />
                        English
                      </a>
                      <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                        <i
                          data-tw-merge=""
                          data-lucide="box"
                          className="stroke-1.5 mr-2 h-4 w-4"
                        />
                        Indonesia
                        <div className="ml-auto rounded-full bg-danger px-1 text-xs text-white">
                          10
                        </div>
                      </a>
                      <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                        <i
                          data-tw-merge=""
                          data-lucide="layout"
                          className="stroke-1.5 mr-2 h-4 w-4"
                        />
                        English
                      </a>
                      <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                        <i
                          data-tw-merge=""
                          data-lucide="sidebar"
                          className="stroke-1.5 mr-2 h-4 w-4"
                        />
                        Indonesia
                      </a>
                      <div className="h-px my-2 -mx-2 bg-slate-200/60 dark:bg-darkmode-400"></div>
                      <div className="flex p-1">
                        <button
                          data-tw-merge=""
                          type="button"
                          className="transition duration-200 border shadow-sm inline-flex items-center justify-center rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-primary border-primary text-white dark:border-primary px-2 py-1"
                        >
                          Settings
                        </button>
                        <button
                          data-tw-merge=""
                          type="button"
                          className="transition duration-200 border shadow-sm inline-flex items-center justify-center rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-secondary/70 border-secondary/70 text-slate-500 dark:border-darkmode-400 dark:bg-darkmode-400 dark:text-slate-300 [&:hover:not(:disabled)]:bg-slate-100 [&:hover:not(:disabled)]:border-slate-100 [&:hover:not(:disabled)]:dark:border-darkmode-300/80 [&:hover:not(:disabled)]:dark:bg-darkmode-300/80 ml-auto px-2 py-1"
                        >
                          View Profile
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-t border-slate-200/60 p-5 dark:border-darkmode-400">
                <a
                  className="flex items-center font-medium text-primary"
                  href="#"
                >
                  <i
                    data-tw-merge=""
                    data-lucide="activity"
                    className="stroke-1.5 mr-2 h-4 w-4"
                  />
                  Personal Information
                </a>
                <a className="mt-5 flex items-center" href="#">
                  <i
                    data-tw-merge=""
                    data-lucide="box"
                    className="stroke-1.5 mr-2 h-4 w-4"
                  />
                  Account Settings
                </a>
                <a className="mt-5 flex items-center" href="/changepassword">
                  <i
                    data-tw-merge=""
                    data-lucide="lock"
                    className="stroke-1.5 mr-2 h-4 w-4"
                  />
                  Change Password
                </a>
                <a className="mt-5 flex items-center" href="#">
                  <i
                    data-tw-merge=""
                    data-lucide="settings"
                    className="stroke-1.5 mr-2 h-4 w-4"
                  />
                  User Settings
                </a>
              </div>
              <div className="border-t border-slate-200/60 p-5 dark:border-darkmode-400">
                <a className="flex items-center" href="#">
                  <i
                    data-tw-merge=""
                    data-lucide="activity"
                    className="stroke-1.5 mr-2 h-4 w-4"
                  />
                  Email Settings
                </a>
                <a className="mt-5 flex items-center" href="#">
                  <i
                    data-tw-merge=""
                    data-lucide="box"
                    className="stroke-1.5 mr-2 h-4 w-4"
                  />
                  Saved Credit Cards
                </a>
                <a className="mt-5 flex items-center" href="#">
                  <i
                    data-tw-merge=""
                    data-lucide="lock"
                    className="stroke-1.5 mr-2 h-4 w-4"
                  />
                  Social Networks
                </a>
                <a className="mt-5 flex items-center" href="#">
                  <i
                    data-tw-merge=""
                    data-lucide="settings"
                    className="stroke-1.5 mr-2 h-4 w-4"
                  />
                  Tax Information
                </a>
              </div>
              <div className="flex border-t border-slate-200/60 p-5 dark:border-darkmode-400">
                <button
                  data-tw-merge=""
                  type="button"
                  className="transition duration-200 border shadow-sm inline-flex items-center justify-center rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-primary border-primary text-white dark:border-primary px-2 py-1"
                >
                  New Group
                </button>
                <button
                  data-tw-merge=""
                  type="button"
                  className="transition duration-200 border shadow-sm inline-flex items-center justify-center rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed border-secondary text-slate-500 dark:border-darkmode-100/40 dark:text-slate-300 [&:hover:not(:disabled)]:bg-secondary/20 [&:hover:not(:disabled)]:dark:bg-darkmode-100/10 ml-auto px-2 py-1"
                >
                  New Quick Link
                </button>
              </div>
            </div>
          </div>
          {/* END: Profile Menu */}
          <div className="col-span-12 lg:col-span-8 2xl:col-span-9">
            {/* BEGIN: Display Information */}
            <div className="intro-y box lg:mt-5">
              <div className="flex items-center border-b border-slate-200/60 p-5 dark:border-darkmode-400">
                <h2 className="mr-auto text-base font-medium">
                  Display Information
                </h2>
              </div>
              <div className="p-5">
                <div className="flex flex-col xl:flex-row">
                  <div className="mt-6 flex-1 xl:mt-0">
                    <div className="grid grid-cols-12 gap-x-5">
                      <div className="col-span-12 2xl:col-span-6">
                        <div>
                          <label
                            data-tw-merge=""
                            htmlFor="update-profile-form-1"
                            className="inline-block mb-2 group-[.form-inline]:mb-2 group-[.form-inline]:sm:mb-0 group-[.form-inline]:sm:mr-5 group-[.form-inline]:sm:text-right"
                          >
                            Display Name
                          </label>
                          <input
                            data-tw-merge=""
                            id="update-profile-form-1"
                            type="text"
                            defaultValue="Al Pacino"
                            placeholder="Input text"
                            disabled={true}
                            className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10"
                          />
                        </div>
                        <div className="mt-3">
                          <label
                            data-tw-merge=""
                            htmlFor="update-profile-form-2"
                            className="inline-block mb-2 group-[.form-inline]:mb-2 group-[.form-inline]:sm:mb-0 group-[.form-inline]:sm:mr-5 group-[.form-inline]:sm:text-right"
                          >
                            Nearest MRT Station
                          </label>
                          <select
                            id="update-profile-form-2"
                            className="tom-select w-full"
                          >
                            <option value={1}>Admiralty</option>
                            <option value={2}>Aljunied</option>
                            <option value={3}>Ang Mo Kio</option>
                            <option value={4}>Bartley</option>
                            <option value={5}>Beauty World</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-span-12 2xl:col-span-6">
                        <div className="mt-3 2xl:mt-0">
                          <label
                            data-tw-merge=""
                            htmlFor="update-profile-form-3"
                            className="inline-block mb-2 group-[.form-inline]:mb-2 group-[.form-inline]:sm:mb-0 group-[.form-inline]:sm:mr-5 group-[.form-inline]:sm:text-right"
                          >
                            Postal Code
                          </label>
                          <select
                            id="update-profile-form-3"
                            className="tom-select w-full"
                          >
                            <option value={1}>
                              018906 - 1 STRAITS BOULEVARD SINGA...
                            </option>
                            <option value={2}>
                              018910 - 5A MARINA GARDENS DRIVE...
                            </option>
                            <option value={3}>
                              018915 - 100A CENTRAL BOULEVARD...
                            </option>
                            <option value={4}>
                              018925 - 21 PARK STREET MARINA...
                            </option>
                            <option value={5}>
                              018926 - 23 PARK STREET MARINA...
                            </option>
                          </select>
                        </div>
                        <div className="mt-3">
                          <label
                            data-tw-merge=""
                            htmlFor="update-profile-form-4"
                            className="inline-block mb-2 group-[.form-inline]:mb-2 group-[.form-inline]:sm:mb-0 group-[.form-inline]:sm:mr-5 group-[.form-inline]:sm:text-right"
                          >
                            Phone Number
                          </label>
                          <input
                            data-tw-merge=""
                            id="update-profile-form-4"
                            type="text"
                            defaultValue={65570828}
                            placeholder="Input text"
                            className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10"
                          />
                        </div>
                      </div>
                      <div className="col-span-12">
                        <div className="mt-3">
                          <label
                            data-tw-merge=""
                            htmlFor="update-profile-form-5"
                            className="inline-block mb-2 group-[.form-inline]:mb-2 group-[.form-inline]:sm:mb-0 group-[.form-inline]:sm:mr-5 group-[.form-inline]:sm:text-right"
                          >
                            Address
                          </label>
                          <textarea
                            data-tw-merge=""
                            id="update-profile-form-5"
                            value="10 Anson Road, International Plaza, #10-11, 079903
                  Singapore, Singapore"
                            placeholder="Adress"
                            className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      data-tw-merge=""
                      type="button"
                      className="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-primary border-primary text-white dark:border-primary mt-3 w-20"
                    >
                      Save
                    </button>
                  </div>
                  <div className="mx-auto w-52 xl:ml-6 xl:mr-0">
                    <div className="rounded-md border-2 border-dashed border-slate-200/60 p-5 shadow-sm dark:border-darkmode-400">
                      <div className="image-fit zoom-in relative mx-auto h-40 cursor-pointer">
                        <img
                          className="rounded-md"
                          src="assetsd/images/fakers/profile-13.jpg"
                          alt="Midone - Tailwind Admin Dashboard Template"
                        />
                        <div
                          data-placement="top"
                          title="Remove this profile photo?"
                          className="tooltip cursor-pointer absolute right-0 top-0 -mr-2 -mt-2 flex h-5 w-5 items-center justify-center rounded-full bg-danger text-white"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="x"
                            className="stroke-1.5 h-4 w-4"
                          />
                        </div>
                      </div>
                      <div className="relative mx-auto mt-5 cursor-pointer">
                        <button
                          data-tw-merge=""
                          type="button"
                          className="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-primary border-primary text-white dark:border-primary w-full"
                        >
                          Change Photo
                        </button>
                        <input
                          data-tw-merge=""
                          type="file"
                          className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10 absolute left-0 top-0 h-full opacity-0"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END: Display Information */}
            {/* BEGIN: Personal Information */}
            <div className="intro-y box mt-5">
              <div className="flex items-center border-b border-slate-200/60 p-5 dark:border-darkmode-400">
                <h2 className="mr-auto text-base font-medium">
                  Personal Information
                </h2>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-12 gap-x-5">
                  <div className="col-span-12 xl:col-span-6">
                    <div>
                      <label
                        data-tw-merge=""
                        htmlFor="update-profile-form-6"
                        className="inline-block mb-2 group-[.form-inline]:mb-2 group-[.form-inline]:sm:mb-0 group-[.form-inline]:sm:mr-5 group-[.form-inline]:sm:text-right"
                      >
                        Email
                      </label>
                      <input
                        data-tw-merge=""
                        id="update-profile-form-6"
                        type="text"
                        defaultValue="alpacino@left4code.com"
                        placeholder="Input text"
                        disabled={true}
                        className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10"
                      />
                    </div>
                    <div className="mt-3">
                      <label
                        data-tw-merge=""
                        htmlFor="update-profile-form-7"
                        className="inline-block mb-2 group-[.form-inline]:mb-2 group-[.form-inline]:sm:mb-0 group-[.form-inline]:sm:mr-5 group-[.form-inline]:sm:text-right"
                      >
                        Name
                      </label>
                      <input
                        data-tw-merge=""
                        id="update-profile-form-7"
                        type="text"
                        defaultValue="Al Pacino"
                        placeholder="Input text"
                        disabled={true}
                        className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10"
                      />
                    </div>
                    <div className="mt-3">
                      <label
                        data-tw-merge=""
                        htmlFor="update-profile-form-8"
                        className="inline-block mb-2 group-[.form-inline]:mb-2 group-[.form-inline]:sm:mb-0 group-[.form-inline]:sm:mr-5 group-[.form-inline]:sm:text-right"
                      >
                        ID Type
                      </label>
                      <select
                        data-tw-merge=""
                        id="update-profile-form-8"
                        className="disabled:bg-slate-100 disabled:cursor-not-allowed disabled:dark:bg-darkmode-800/50 [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md py-2 px-3 pr-8 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 group-[.form-inline]:flex-1"
                      >
                        <option>IC</option>
                        <option>FIN</option>
                        <option>Passport</option>
                      </select>
                    </div>
                    <div className="mt-3">
                      <label
                        data-tw-merge=""
                        htmlFor="update-profile-form-9"
                        className="inline-block mb-2 group-[.form-inline]:mb-2 group-[.form-inline]:sm:mb-0 group-[.form-inline]:sm:mr-5 group-[.form-inline]:sm:text-right"
                      >
                        ID Number
                      </label>
                      <input
                        data-tw-merge=""
                        id="update-profile-form-9"
                        type="text"
                        defaultValue={357821204950001}
                        placeholder="Input text"
                        className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10"
                      />
                    </div>
                  </div>
                  <div className="col-span-12 xl:col-span-6">
                    <div className="mt-3 xl:mt-0">
                      <label
                        data-tw-merge=""
                        htmlFor="update-profile-form-10"
                        className="inline-block mb-2 group-[.form-inline]:mb-2 group-[.form-inline]:sm:mb-0 group-[.form-inline]:sm:mr-5 group-[.form-inline]:sm:text-right"
                      >
                        Phone Number
                      </label>
                      <input
                        data-tw-merge=""
                        id="update-profile-form-10"
                        type="text"
                        defaultValue={65570828}
                        placeholder="Input text"
                        className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10"
                      />
                    </div>
                    <div className="mt-3">
                      <label
                        data-tw-merge=""
                        htmlFor="update-profile-form-11"
                        className="inline-block mb-2 group-[.form-inline]:mb-2 group-[.form-inline]:sm:mb-0 group-[.form-inline]:sm:mr-5 group-[.form-inline]:sm:text-right"
                      >
                        Address
                      </label>
                      <input
                        data-tw-merge=""
                        id="update-profile-form-11"
                        type="text"
                        defaultValue="10 Anson Road, International Plaza, #10-11, 079903 Singapore, Singapore"
                        placeholder="Input text"
                        className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10"
                      />
                    </div>
                    <div className="mt-3">
                      <label
                        data-tw-merge=""
                        htmlFor="update-profile-form-12"
                        className="inline-block mb-2 group-[.form-inline]:mb-2 group-[.form-inline]:sm:mb-0 group-[.form-inline]:sm:mr-5 group-[.form-inline]:sm:text-right"
                      >
                        Bank Name
                      </label>
                      <select
                        id="update-profile-form-12"
                        className="tom-select w-full"
                      >
                        <option value={1}>SBI - STATE BANK OF INDIA</option>
                        <option value={2}>CITI BANK - CITI BANK</option>
                      </select>
                    </div>
                    <div className="mt-3">
                      <label
                        data-tw-merge=""
                        htmlFor="update-profile-form-13"
                        className="inline-block mb-2 group-[.form-inline]:mb-2 group-[.form-inline]:sm:mb-0 group-[.form-inline]:sm:mr-5 group-[.form-inline]:sm:text-right"
                      >
                        Bank Account
                      </label>
                      <input
                        data-tw-merge=""
                        id="update-profile-form-13"
                        type="text"
                        defaultValue="DBS Current 011-903573-0"
                        placeholder="Input text"
                        className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <button
                    data-tw-merge=""
                    type="button"
                    className="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-primary border-primary text-white dark:border-primary mr-auto w-20"
                  >
                    Save
                  </button>
                  <a className="flex items-center text-danger" href="#">
                    <i
                      data-tw-merge=""
                      data-lucide="trash"
                      className="stroke-1.5 mr-1 h-4 w-4"
                    />
                    Delete Account
                  </a>
                </div>
              </div>
            </div>
            {/* END: Personal Information */}
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
