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
import { AiOutlineDollar, AiOutlineHome, AiOutlineClose } from "react-icons/ai";

import { FaBars } from "react-icons/fa";

export default function Post() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [inputText, setInputText] = useState("");

  // Event handler to update inputText state when user types
  const handleChange = (event) => {
    setInputText(event.target.value);
  };



  const [text, setText] = useState('');

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setText(inputValue);
  }
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
              <div style={{ flexGrow: 1 }}></div>
              {!isMenuOpen ? (
                <a
                  className="mobile-menu-toggler"
                  href="#"
                  onClick={toggleMenu}
                >
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
                  <a href="/post" className="side-menu side-menu--active">
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
                              src="assetsd/images/fakers/profile-14.jpg"
                              alt="Midone - Tailwind Admin Dashboard Template"
                            />
                          </div>
                          <div className="ml-3">Hugh Jackman</div>
                          <div className="ml-auto w-48 truncate text-right text-xs text-slate-500">
                            hughjackman@left4code.com
                          </div>
                        </a>
                        <a className="mt-2 flex items-center" href="#">
                          <div className="image-fit h-8 w-8">
                            <img
                              className="rounded-full"
                              src="assetsd/images/fakers/profile-11.jpg"
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
                              src="assetsd/images/fakers/profile-12.jpg"
                              alt="Midone - Tailwind Admin Dashboard Template"
                            />
                          </div>
                          <div className="ml-3">Robert De Niro</div>
                          <div className="ml-auto w-48 truncate text-right text-xs text-slate-500">
                            robertdeniro@left4code.com
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
                          <div className="ml-3">Russell Crowe</div>
                          <div className="ml-auto w-48 truncate text-right text-xs text-slate-500">
                            russellcrowe@left4code.com
                          </div>
                        </a>
                      </div>
                      <div className="mb-2 font-medium">Products</div>
                      <a className="mt-2 flex items-center" href="#">
                        <div className="image-fit h-8 w-8">
                          <img
                            className="rounded-full"
                            src="assetsd/images/fakers/preview-12.jpg"
                            alt="Midone - Tailwind Admin Dashboard Template"
                          />
                        </div>
                        <div className="ml-3">Nikon Z6</div>
                        <div className="ml-auto w-48 truncate text-right text-xs text-slate-500">
                          Photography
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
                        <div className="ml-3">Samsung Galaxy S20 Ultra</div>
                        <div className="ml-auto w-48 truncate text-right text-xs text-slate-500">
                          Smartphone &amp; Tablet
                        </div>
                      </a>
                      <a className="mt-2 flex items-center" href="#">
                        <div className="image-fit h-8 w-8">
                          <img
                            className="rounded-full"
                            src="assetsd/images/fakers/preview-8.jpg"
                            alt="Midone - Tailwind Admin Dashboard Template"
                          />
                        </div>
                        <div className="ml-3">Oppo Find X2 Pro</div>
                        <div className="ml-auto w-48 truncate text-right text-xs text-slate-500">
                          Smartphone &amp; Tablet
                        </div>
                      </a>
                      <a className="mt-2 flex items-center" href="#">
                        <div className="image-fit h-8 w-8">
                          <img
                            className="rounded-full"
                            src="assetsd/images/fakers/preview-9.jpg"
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
                            src="assetsd/images/fakers/profile-14.jpg"
                            alt="Midone - Tailwind Admin Dashboard Template"
                          />
                          <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-success dark:border-darkmode-600"></div>
                        </div>
                        <div className="ml-2 overflow-hidden">
                          <div className="flex items-center">
                            <a className="mr-5 truncate font-medium" href="#">
                              Hugh Jackman
                            </a>
                            <div className="ml-auto whitespace-nowrap text-xs text-slate-400">
                              01:10 PM
                            </div>
                          </div>
                          <div className="mt-0.5 w-full truncate text-slate-500">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500
                          </div>
                        </div>
                      </div>
                      <div className="cursor-pointer relative flex items-center mt-5">
                        <div className="image-fit relative mr-1 h-12 w-12 flex-none">
                          <img
                            className="rounded-full"
                            src="assetsd/images/fakers/profile-11.jpg"
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
                              06:05 AM
                            </div>
                          </div>
                          <div className="mt-0.5 w-full truncate text-slate-500">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500
                          </div>
                        </div>
                      </div>
                      <div className="cursor-pointer relative flex items-center mt-5">
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
                              Robert De Niro
                            </a>
                            <div className="ml-auto whitespace-nowrap text-xs text-slate-400">
                              01:10 PM
                            </div>
                          </div>
                          <div className="mt-0.5 w-full truncate text-slate-500">
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
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
                              Russell Crowe
                            </a>
                            <div className="ml-auto whitespace-nowrap text-xs text-slate-400">
                              01:10 PM
                            </div>
                          </div>
                          <div className="mt-0.5 w-full truncate text-slate-500">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomi
                          </div>
                        </div>
                      </div>
                      <div className="cursor-pointer relative flex items-center mt-5">
                        <div className="image-fit relative mr-1 h-12 w-12 flex-none">
                          <img
                            className="rounded-full"
                            src="assetsd/images/fakers/profile-5.jpg"
                            alt="Midone - Tailwind Admin Dashboard Template"
                          />
                          <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-success dark:border-darkmode-600"></div>
                        </div>
                        <div className="ml-2 overflow-hidden">
                          <div className="flex items-center">
                            <a className="mr-5 truncate font-medium" href="#">
                              Russell Crowe
                            </a>
                            <div className="ml-auto whitespace-nowrap text-xs text-slate-400">
                              05:09 AM
                            </div>
                          </div>
                          <div className="mt-0.5 w-full truncate text-slate-500">
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
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
                      src="assetsd/images/fakers/profile-5.jpg"
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
                        <div className="font-medium">Hugh Jackman</div>
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
              <div className="intro-y mt-8 flex flex-col items-center sm:flex-row">
                <h2 className="mr-auto text-lg font-medium">Add New Post</h2>
                <div className="mt-4 flex w-full sm:mt-0 sm:w-auto">
                  <div
                    data-tw-merge=""
                    data-tw-placement="bottom-end"
                    className="dropdown relative mr-2"
                  >
                    <button
                      data-tw-merge=""
                      data-tw-toggle="dropdown"
                      aria-expanded="false"
                      className="transition duration-200 border shadow-sm items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed !box flex"
                    >
                      English
                      <i
                        data-tw-merge=""
                        data-lucide="chevron-down"
                        className="stroke-1.5 ml-2 h-4 w-4"
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
                        className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-40"
                      >
                        <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                          <i
                            data-tw-merge=""
                            data-lucide="activity"
                            className="stroke-1.5 mr-2 h-4 w-4"
                          />
                          <span className="truncate">English</span>
                        </a>
                        <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                          <i
                            data-tw-merge=""
                            data-lucide="activity"
                            className="stroke-1.5 mr-2 h-4 w-4"
                          />
                          <span className="truncate">Indonesian</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <button
                    data-tw-merge=""
                    type="button"
                    className="transition duration-200 border shadow-sm items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed !box ml-auto mr-2 flex sm:ml-0"
                  >
                    <i
                      data-tw-merge=""
                      data-lucide="eye"
                      className="stroke-1.5 mr-2 h-4 w-4"
                    />
                    Preview
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
                      className="transition duration-200 border items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-primary border-primary text-white dark:border-primary flex shadow-md"
                    >
                      Save
                      <i
                        data-tw-merge=""
                        data-lucide="chevron-down"
                        className="stroke-1.5 ml-2 h-4 w-4"
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
                        className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-40"
                      >
                        <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                          <i
                            data-tw-merge=""
                            data-lucide="file-text"
                            className="stroke-1.5 mr-2 h-4 w-4"
                          />
                          As New Post
                        </a>
                        <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                          <i
                            data-tw-merge=""
                            data-lucide="file-text"
                            className="stroke-1.5 mr-2 h-4 w-4"
                          />
                          As Draft
                        </a>
                        <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                          <i
                            data-tw-merge=""
                            data-lucide="file-text"
                            className="stroke-1.5 mr-2 h-4 w-4"
                          />
                          Export to PDF
                        </a>
                        <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                          <i
                            data-tw-merge=""
                            data-lucide="file-text"
                            className="stroke-1.5 mr-2 h-4 w-4"
                          />
                          Export to Word
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="intro-y mt-5 grid grid-cols-12 gap-5">
                {/* BEGIN: Post Content */}
                <div className="intro-y col-span-12 lg:col-span-8">
                  <input
                    data-tw-merge=""
                    type="text"
                    placeholder="Title"
                    className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10 intro-y !box px-4 py-3 pr-10"
                  />
                  <div className="intro-y box mt-5 overflow-hidden">
                    <ul
                      data-tw-merge=""
                      role="tablist"
                      className="border-b w-full flex flex-col border-transparent bg-slate-200 dark:border-transparent dark:bg-darkmode-800 sm:flex-row"
                    >
                      <li
                        id="content-tab"
                        data-tw-merge=""
                        role="presentation"
                        className="focus-visible:outline-none -mb-px"
                      >
                        <button
                          data-tw-merge=""
                          data-tw-target="#content"
                          role="tab"
                          className="cursor-pointer appearance-none border border-transparent dark:text-slate-400 [&.active]:dark:text-white rounded-t-md dark:border-transparent [&.active]:bg-white [&.active]:font-medium [&.active]:dark:border-b-darkmode-600 [&:not(.active)]:dark:hover:border-transparent active flex items-center justify-center w-full px-0 py-0 sm:w-40 text-slate-500 [&:not(.active)]:hover:border-transparent [&:not(.active)]:hover:bg-transparent [&:not(.active)]:hover:text-slate-600 [&:not(.active)]:hover:dark:bg-transparent [&:not(.active)]:hover:dark:text-slate-300 [&.active]:text-primary [&.active]:border-transparent [&.active]:dark:bg-darkmode-600 [&.active]:dark:border-x-transparent [&.active]:dark:border-t-transparent"
                        >
                          <span
                            data-placement="top"
                            title="Fill in the article content"
                            aria-controls="content"
                            aria-selected="true"
                            className="tooltip cursor-pointer flex w-full items-center justify-center py-4"
                          >
                            <i
                              data-tw-merge=""
                              data-lucide="file-text"
                              className="stroke-1.5 mr-2 h-4 w-4"
                            />
                            Content
                          </span>
                        </button>
                      </li>
                      <li
                        id="meta-title-tab"
                        data-tw-merge=""
                        role="presentation"
                        className="focus-visible:outline-none -mb-px"
                      >
                        <button
                          data-tw-merge=""
                          data-tw-target="#meta-title"
                          role="tab"
                          className="cursor-pointer appearance-none border border-transparent dark:text-slate-400 [&.active]:dark:text-white rounded-t-md dark:border-transparent [&.active]:bg-white [&.active]:font-medium [&.active]:dark:border-b-darkmode-600 [&:not(.active)]:dark:hover:border-transparent flex items-center justify-center w-full px-0 py-0 sm:w-40 text-slate-500 [&:not(.active)]:hover:border-transparent [&:not(.active)]:hover:bg-transparent [&:not(.active)]:hover:text-slate-600 [&:not(.active)]:hover:dark:bg-transparent [&:not(.active)]:hover:dark:text-slate-300 [&.active]:text-primary [&.active]:border-transparent [&.active]:dark:bg-darkmode-600 [&.active]:dark:border-x-transparent [&.active]:dark:border-t-transparent"
                        >
                          <span
                            data-placement="top"
                            title="Adjust the meta title"
                            aria-selected="false"
                            className="tooltip cursor-pointer flex w-full items-center justify-center py-4"
                          >
                            <i
                              data-tw-merge=""
                              data-lucide="code"
                              className="stroke-1.5 mr-2 h-4 w-4"
                            />
                            Meta Title
                          </span>
                        </button>
                      </li>
                      <li
                        id="keywords-tab"
                        data-tw-merge=""
                        role="presentation"
                        className="focus-visible:outline-none -mb-px"
                      >
                        <button
                          data-tw-merge=""
                          data-tw-target="#keywords"
                          role="tab"
                          className="cursor-pointer appearance-none border border-transparent dark:text-slate-400 [&.active]:dark:text-white rounded-t-md dark:border-transparent [&.active]:bg-white [&.active]:font-medium [&.active]:dark:border-b-darkmode-600 [&:not(.active)]:dark:hover:border-transparent flex items-center justify-center w-full px-0 py-0 sm:w-40 text-slate-500 [&:not(.active)]:hover:border-transparent [&:not(.active)]:hover:bg-transparent [&:not(.active)]:hover:text-slate-600 [&:not(.active)]:hover:dark:bg-transparent [&:not(.active)]:hover:dark:text-slate-300 [&.active]:text-primary [&.active]:border-transparent [&.active]:dark:bg-darkmode-600 [&.active]:dark:border-x-transparent [&.active]:dark:border-t-transparent"
                        >
                          <span
                            data-placement="top"
                            title="Use search keywords"
                            aria-selected="false"
                            className="tooltip cursor-pointer flex w-full items-center justify-center py-4"
                          >
                            <i
                              data-tw-merge=""
                              data-lucide="align-left"
                              className="stroke-1.5 mr-2 h-4 w-4"
                            />
                            Keywords
                          </span>
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div
                        data-transition=""
                        data-selector=".active"
                        data-enter="transition-[visibility,opacity] ease-linear duration-150"
                        data-enter-from="!p-0 !h-0 overflow-hidden invisible opacity-0"
                        data-enter-to="visible opacity-100"
                        data-leave="transition-[visibility,opacity] ease-linear duration-150"
                        data-leave-from="visible opacity-100"
                        data-leave-to="!p-0 !h-0 overflow-hidden invisible opacity-0"
                        id="content"
                        role="tabpanel"
                        aria-labelledby="content-tab"
                        className="tab-pane active p-5"
                      >
                        <div className="rounded-md border border-slate-200/60 p-5 dark:border-darkmode-400">
                          <div className="flex items-center border-b border-slate-200/60 pb-5 font-medium dark:border-darkmode-400">
                            <i
                              data-tw-merge=""
                              data-lucide="chevron-down"
                              className="stroke-1.5 mr-2 h-4 w-4"
                            />
                            Text Content
                          </div>
                          <div className="mt-3 w-full flex-1 xl:mt-0">
                          <div className="editor">
                            <textarea
                              value={text}
                              onChange={handleInputChange}
                              className="w-full h-20 p-2 border rounded-md"
                              placeholder="Enter your text here..."
                            />
                          </div>
                          <div
                            className="text-xs text-slate-500 mt-2 text-right"
                          >
                            Maximum characters: {text.length}/2000
                          </div>
                        </div>
                        </div>
                        <div className="mt-5 rounded-md border border-slate-200/60 p-5 dark:border-darkmode-400">
                          <div className="flex items-center border-b border-slate-200/60 pb-5 font-medium dark:border-darkmode-400">
                            <i
                              data-tw-merge=""
                              data-lucide="chevron-down"
                              className="stroke-1.5 mr-2 h-4 w-4"
                            />
                            Caption &amp; Images
                          </div>
                          <div className="mt-5">
                            <div>
                              <label
                                data-tw-merge=""
                                htmlFor="post-form-7"
                                className="inline-block mb-2 group-[.form-inline]:mb-2 group-[.form-inline]:sm:mb-0 group-[.form-inline]:sm:mr-5 group-[.form-inline]:sm:text-right"
                              >
                                Caption
                              </label>
                              <input
                                data-tw-merge=""
                                id="post-form-7"
                                type="text"
                                placeholder="Write caption"
                                className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10"
                              />
                            </div>
                            <div className="mt-3">
                              <label
                                data-tw-merge=""
                                className="inline-block mb-2 group-[.form-inline]:mb-2 group-[.form-inline]:sm:mb-0 group-[.form-inline]:sm:mr-5 group-[.form-inline]:sm:text-right"
                              >
                                Upload Image
                              </label>
                              <div className="rounded-md border-2 border-dashed pt-4 dark:border-darkmode-400">
                                <div className="flex flex-wrap px-4">
                                  <div className="image-fit zoom-in relative mb-5 mr-5 h-24 w-24 cursor-pointer">
                                    <img
                                      className="rounded-md"
                                      src="assetsd/images/fakers/preview-12.jpg"
                                      alt="Midone - Tailwind Admin Dashboard Template"
                                    />
                                    <div
                                      data-placement="top"
                                      title="Remove this image?"
                                      className="tooltip cursor-pointer absolute right-0 top-0 -mr-2 -mt-2 flex h-5 w-5 items-center justify-center rounded-full bg-danger text-white"
                                    >
                                      <i
                                        data-tw-merge=""
                                        data-lucide="x"
                                        className="stroke-1.5 h-4 w-4"
                                      />
                                    </div>
                                  </div>
                                  <div className="image-fit zoom-in relative mb-5 mr-5 h-24 w-24 cursor-pointer">
                                    <img
                                      className="rounded-md"
                                      src="assetsd/images/fakers/preview-14.jpg"
                                      alt="Midone - Tailwind Admin Dashboard Template"
                                    />
                                    <div
                                      data-placement="top"
                                      title="Remove this image?"
                                      className="tooltip cursor-pointer absolute right-0 top-0 -mr-2 -mt-2 flex h-5 w-5 items-center justify-center rounded-full bg-danger text-white"
                                    >
                                      <i
                                        data-tw-merge=""
                                        data-lucide="x"
                                        className="stroke-1.5 h-4 w-4"
                                      />
                                    </div>
                                  </div>
                                  <div className="image-fit zoom-in relative mb-5 mr-5 h-24 w-24 cursor-pointer">
                                    <img
                                      className="rounded-md"
                                      src="assetsd/images/fakers/preview-2.jpg"
                                      alt="Midone - Tailwind Admin Dashboard Template"
                                    />
                                    <div
                                      data-placement="top"
                                      title="Remove this image?"
                                      className="tooltip cursor-pointer absolute right-0 top-0 -mr-2 -mt-2 flex h-5 w-5 items-center justify-center rounded-full bg-danger text-white"
                                    >
                                      <i
                                        data-tw-merge=""
                                        data-lucide="x"
                                        className="stroke-1.5 h-4 w-4"
                                      />
                                    </div>
                                  </div>
                                  <div className="image-fit zoom-in relative mb-5 mr-5 h-24 w-24 cursor-pointer">
                                    <img
                                      className="rounded-md"
                                      src="assetsd/images/fakers/preview-4.jpg"
                                      alt="Midone - Tailwind Admin Dashboard Template"
                                    />
                                    <div
                                      data-placement="top"
                                      title="Remove this image?"
                                      className="tooltip cursor-pointer absolute right-0 top-0 -mr-2 -mt-2 flex h-5 w-5 items-center justify-center rounded-full bg-danger text-white"
                                    >
                                      <i
                                        data-tw-merge=""
                                        data-lucide="x"
                                        className="stroke-1.5 h-4 w-4"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="relative flex cursor-pointer items-center px-4 pb-4">
                                  <i
                                    data-tw-merge=""
                                    data-lucide="image"
                                    className="stroke-1.5 mr-2 h-4 w-4"
                                  />
                                  <span className="mr-1 text-primary">
                                    Upload a file
                                  </span>
                                  or drag and drop
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
                    </div>
                  </div>
                </div>
                {/* END: Post Content */}
                {/* BEGIN: Post Info */}
                <div className="col-span-12 lg:col-span-4">
                  <div className="intro-y box p-5">
                    <div>
                      <label
                        data-tw-merge=""
                        className="inline-block mb-2 group-[.form-inline]:mb-2 group-[.form-inline]:sm:mb-0 group-[.form-inline]:sm:mr-5 group-[.form-inline]:sm:text-right"
                      >
                        Written By
                      </label>
                      <div
                        data-tw-merge=""
                        data-tw-placement="bottom-end"
                        className="dropdown relative [&>div:nth-child(2)]:w-full"
                      >
                        <button
                          data-tw-merge=""
                          data-tw-toggle="dropdown"
                          aria-expanded="false"
                          role="button"
                          className="transition duration-200 border shadow-sm items-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed border-secondary text-slate-500 dark:text-slate-300 [&:hover:not(:disabled)]:bg-secondary/20 [&:hover:not(:disabled)]:dark:bg-darkmode-100/10 flex w-full justify-start dark:border-darkmode-800 dark:bg-darkmode-800"
                        >
                          <div className="image-fit mr-3 h-6 w-6">
                            <img
                              className="rounded"
                              src="assetsd/images/fakers/profile-10.jpg"
                              alt="Midone - Tailwind Admin Dashboard Template"
                            />
                          </div>
                          <div className="truncate">Kate Winslet</div>
                          <i
                            data-tw-merge=""
                            data-lucide="chevron-down"
                            className="stroke-1.5 ml-auto h-4 w-4"
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
                            className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600"
                          >
                            <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                              <div className="image-fit absolute mr-3 h-6 w-6">
                                <img
                                  className="rounded"
                                  src="assetsd/images/fakers/profile-3.jpg"
                                  alt="Midone - Tailwind Admin Dashboard Template"
                                />
                              </div>
                              <div className="ml-8 pl-1">Kate Winslet</div>
                            </a>
                            <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                              <div className="image-fit absolute mr-3 h-6 w-6">
                                <img
                                  className="rounded"
                                  src="assetsd/images/fakers/profile-13.jpg"
                                  alt="Midone - Tailwind Admin Dashboard Template"
                                />
                              </div>
                              <div className="ml-8 pl-1">Nicolas Cage</div>
                            </a>
                            <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                              <div className="image-fit absolute mr-3 h-6 w-6">
                                <img
                                  className="rounded"
                                  src="assetsd/images/fakers/profile-12.jpg"
                                  alt="Midone - Tailwind Admin Dashboard Template"
                                />
                              </div>
                              <div className="ml-8 pl-1">Al Pacino</div>
                            </a>
                            <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                              <div className="image-fit absolute mr-3 h-6 w-6">
                                <img
                                  className="rounded"
                                  src="assetsd/images/fakers/profile-10.jpg"
                                  alt="Midone - Tailwind Admin Dashboard Template"
                                />
                              </div>
                              <div className="ml-8 pl-1">Denzel Washington</div>
                            </a>
                            <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                              <div className="image-fit absolute mr-3 h-6 w-6">
                                <img
                                  className="rounded"
                                  src="assetsd/images/fakers/profile-10.jpg"
                                  alt="Midone - Tailwind Admin Dashboard Template"
                                />
                              </div>
                              <div className="ml-8 pl-1">Johnny Depp</div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <label
                        data-tw-merge=""
                        htmlFor="post-form-2"
                        className="inline-block mb-2 group-[.form-inline]:mb-2 group-[.form-inline]:sm:mb-0 group-[.form-inline]:sm:mr-5 group-[.form-inline]:sm:text-right"
                      >
                        Post Date
                      </label>
                      <input
                        data-tw-merge=""
                        type="text"
                        className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10 datepicker"
                      />
                    </div>
                    <div className="mt-3">
                      <label
                        data-tw-merge=""
                        htmlFor="post-form-3"
                        className="inline-block mb-2 group-[.form-inline]:mb-2 group-[.form-inline]:sm:mb-0 group-[.form-inline]:sm:mr-5 group-[.form-inline]:sm:text-right"
                      >
                        Categories
                      </label>
                      <select
                        id="post-form-3"
                        // multiple="multiple"
                        className="tom-select w-full"
                      >
                        <option value={1} selected="">
                          Horror
                        </option>
                        <option value={2}>Sci-fi</option>
                        <option value={3} selected="">
                          Action
                        </option>
                        <option value={4}>Drama</option>
                        <option value={5}>Comedy</option>
                      </select>
                    </div>
                    <div className="mt-3">
                      <label
                        data-tw-merge=""
                        htmlFor="post-form-4"
                        className="inline-block mb-2 group-[.form-inline]:mb-2 group-[.form-inline]:sm:mb-0 group-[.form-inline]:sm:mr-5 group-[.form-inline]:sm:text-right"
                      >
                        Tags
                      </label>
                      <select
                        id="post-form-4"
                        // multiple="multiple"
                        className="tom-select w-full"
                      >
                        <option value={1} selected="">
                          Leonardo DiCaprio
                        </option>
                        <option value={2}>Johnny Deep</option>
                        <option value={3} selected="">
                          Robert Downey, Jr
                        </option>
                        <option value={4}>Samuel L. Jackson</option>
                        <option value={5}>Morgan Freeman</option>
                      </select>
                    </div>
                    <div
                      data-tw-merge=""
                      className="flex mt-3 flex-col items-start"
                    >
                      <label
                        data-tw-merge=""
                        htmlFor="post-form-5"
                        className="cursor-pointer mb-2 ml-0"
                      >
                        Published
                      </label>
                      <input
                        data-tw-merge=""
                        type="checkbox"
                        className="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50 w-[38px] h-[24px] p-px rounded-full relative before:w-[20px] before:h-[20px] before:shadow-[1px_1px_3px_rgba(0,0,0,0.25)] before:transition-[margin-left] before:duration-200 before:ease-in-out before:absolute before:inset-y-0 before:my-auto before:rounded-full before:dark:bg-darkmode-600 checked:bg-primary checked:border-primary checked:bg-none before:checked:ml-[14px] before:checked:bg-white"
                        id="post-form-5"
                      />
                    </div>
                    <div
                      data-tw-merge=""
                      className="flex mt-3 flex-col items-start"
                    >
                      <label
                        data-tw-merge=""
                        htmlFor="post-form-6"
                        className="cursor-pointer mb-2 ml-0"
                      >
                        Show Author Name
                      </label>
                      <input
                        data-tw-merge=""
                        type="checkbox"
                        className="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50 w-[38px] h-[24px] p-px rounded-full relative before:w-[20px] before:h-[20px] before:shadow-[1px_1px_3px_rgba(0,0,0,0.25)] before:transition-[margin-left] before:duration-200 before:ease-in-out before:absolute before:inset-y-0 before:my-auto before:rounded-full before:dark:bg-darkmode-600 checked:bg-primary checked:border-primary checked:bg-none before:checked:ml-[14px] before:checked:bg-white"
                        id="post-form-6"
                      />
                    </div>
                  </div>
                </div>
                {/* END: Post Info */}
              </div>
            </div>
            {/* END: Content */}
          </div>
        </div>
      </>
    </div>
  );
}
