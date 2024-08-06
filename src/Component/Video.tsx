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

export default function Video() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const [text, setText] = useState('');

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setText(inputValue);
  }
  return (
    <div>
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
                <a href="/inbox" className="side-menu">
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
                <a href="/Video" className="side-menu side-menu--active">
                  <div className="side-menu__icon">
                    <RiVideoLine className="stroke-1.5 w-5 h-5" />
                  </div>
                  <div className="side-menu__title">Update Video</div>
                </a>
              </li>
            </ul>
          </nav>
          {/* END: Side Menu */}
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
                            src="assetsd/images/fakers/profile-5.jpg"
                            alt="Midone - Tailwind Admin Dashboard Template"
                          />
                        </div>
                        <div className="ml-3">Kevin Spacey</div>
                        <div className="ml-auto w-48 truncate text-right text-xs text-slate-500">
                          kevinspacey@left4code.com
                        </div>
                      </a>
                      <a className="mt-2 flex items-center" href="#">
                        <div className="image-fit h-8 w-8">
                          <img
                            className="rounded-full"
                            src="assetsd/images/fakers/profile-10.jpg"
                            alt="Midone - Tailwind Admin Dashboard Template"
                          />
                        </div>
                        <div className="ml-3">Tom Cruise</div>
                        <div className="ml-auto w-48 truncate text-right text-xs text-slate-500">
                          tomcruise@left4code.com
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
                        <div className="ml-3">Kate Winslet</div>
                        <div className="ml-auto w-48 truncate text-right text-xs text-slate-500">
                          katewinslet@left4code.com
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
                        <div className="ml-3">Sylvester Stallone</div>
                        <div className="ml-auto w-48 truncate text-right text-xs text-slate-500">
                          sylvesterstallone@left4code.com
                        </div>
                      </a>
                    </div>
                    <div className="mb-2 font-medium">Products</div>
                    <a className="mt-2 flex items-center" href="#">
                      <div className="image-fit h-8 w-8">
                        <img
                          className="rounded-full"
                          src="assetsd/images/fakers/preview-13.jpg"
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
                          src="assetsd/images/fakers/preview-4.jpg"
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
                          src="assetsd/images/fakers/preview-1.jpg"
                          alt="Midone - Tailwind Admin Dashboard Template"
                        />
                      </div>
                      <div className="ml-3">Apple MacBook Pro 13</div>
                      <div className="ml-auto w-48 truncate text-right text-xs text-slate-500">
                        PC &amp; Laptop
                      </div>
                    </a>
                    <a className="mt-2 flex items-center" href="#">
                      <div className="image-fit h-8 w-8">
                        <img
                          className="rounded-full"
                          src="assetsd/images/fakers/preview-5.jpg"
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
                          src="assetsd/images/fakers/profile-5.jpg"
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
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem
                        </div>
                      </div>
                    </div>
                    <div className="cursor-pointer relative flex items-center mt-5">
                      <div className="image-fit relative mr-1 h-12 w-12 flex-none">
                        <img
                          className="rounded-full"
                          src="assetsd/images/fakers/profile-10.jpg"
                          alt="Midone - Tailwind Admin Dashboard Template"
                        />
                        <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-success dark:border-darkmode-600"></div>
                      </div>
                      <div className="ml-2 overflow-hidden">
                        <div className="flex items-center">
                          <a className="mr-5 truncate font-medium" href="#">
                            Tom Cruise
                          </a>
                          <div className="ml-auto whitespace-nowrap text-xs text-slate-400">
                            05:09 AM
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
                          src="assetsd/images/fakers/profile-1.jpg"
                          alt="Midone - Tailwind Admin Dashboard Template"
                        />
                        <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-success dark:border-darkmode-600"></div>
                      </div>
                      <div className="ml-2 overflow-hidden">
                        <div className="flex items-center">
                          <a className="mr-5 truncate font-medium" href="#">
                            Kate Winslet
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
                      <div className="font-medium">Kevin Spacey</div>
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
            <div className="intro-y box p-5">
              <div className="rounded-md border border-slate-200/60 p-5 dark:border-darkmode-400">
                <div className="flex items-center border-b border-slate-200/60 pb-5 text-base font-medium dark:border-darkmode-400">
                  <i
                    data-tw-merge=""
                    data-lucide="chevron-down"
                    className="stroke-1.5 mr-2 h-4 w-4"
                  ></i>
                  Upload Video
                </div>
                <div className="mt-5">
                  <div className="flex items-center text-slate-500">
                    <span>
                      <i
                        data-tw-merge=""
                        data-lucide="lightbulb"
                        className="stroke-1.5 w-5 h-5 text-warning"
                      ></i>
                    </span>
                    <div className="ml-2">
                      <span className="mr-1">
                        Avoid selling counterfeit Videos / violating
                        Intellectual Property Rights, so that your Videos are
                        not deleted.
                      </span>
                      <a
                        className="font-medium text-primary"
                        href="https://themeforest.net/item/midone-jquery-tailwindcss-html-admin-template/26366820"
                        target="blank"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                  <div
                    data-tw-merge=""
                    forminline="formInline"
                    className="block sm:flex group form-inline mt-10 flex-col items-start xl:flex-row"
                  >
                    <label
                      data-tw-merge=""
                      className="inline-block mb-2 group-[.form-inline]:mb-2 group-[.form-inline]:sm:mb-0 group-[.form-inline]:sm:mr-5 group-[.form-inline]:sm:text-right w-full xl:!mr-10 xl:w-64"
                    >
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">VideoPhotos</div>
                          <div className="ml-2 rounded-md bg-slate-200 px-2 py-0.5 text-xs text-slate-600 dark:bg-darkmode-300 dark:text-slate-400">
                            Required
                          </div>
                        </div>
                        <div className="mt-3 text-xs leading-relaxed text-slate-500">
                          <div>
                            The image format is .jpg .jpeg .png and a minimum
                            size of 300 x 300 pixels (For optimal images use a
                            minimum size of 700 x 700 pixels).
                          </div>
                          <div className="mt-2">
                            Select Video photos or drag and drop up to 5 photos
                            at once here. Include min. 3 attractive photos to
                            make the Video more attractive to buyers.
                          </div>
                        </div>
                      </div>
                    </label>
                    <div className="mt-3 w-full flex-1 rounded-md border-2 border-dashed pt-4 dark:border-darkmode-400 xl:mt-0">
                      <div className="grid grid-cols-10 gap-5 pl-4 pr-5">
                        {/* Placeholder for Video photos */}
                      </div>
                      <label
                        htmlFor="file-upload"
                        className="relative mt-5 flex cursor-pointer items-center justify-center px-4 pb-4"
                      >
                        <i
                          data-tw-merge=""
                          data-lucide="image"
                          className="stroke-1.5 mr-2 h-4 w-4"
                        ></i>
                        <span className="mr-1 text-primary">Upload a file</span>
                        or drag and drop
                        <input
                          id="file-upload"
                          type="file"
                          className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10 absolute left-0 top-0 h-full opacity-0"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <>
              {/* BEGIN: VideoDetail */}
              <div className="intro-y box mt-5 p-5">
                <div className="rounded-md border border-slate-200/60 p-5 dark:border-darkmode-400">
                  <div className="flex items-center border-b border-slate-200/60 pb-5 text-base font-medium dark:border-darkmode-400">
                    <i
                      data-tw-merge=""
                      data-lucide="chevron-down"
                      className="stroke-1.5 mr-2 h-4 w-4"
                    />
                    video Detail
                  </div>
                  <div className="mt-5">
                    <div
                      data-tw-merge=""
                      forminline="formInline"
                      className="block sm:flex group form-inline mt-5 flex-col items-start pt-5 first:mt-0 first:pt-0 xl:flex-row"
                    >
                      <label
                        data-tw-merge=""
                        className="inline-block mb-2 group-[.form-inline]:mb-2 group-[.form-inline]:sm:mb-0 group-[.form-inline]:sm:mr-5 group-[.form-inline]:sm:text-right xl:!mr-10 xl:w-64"
                      >
                        <div className="text-left">
                          <div className="flex items-center">
                            <div className="font-medium">Condition</div>
                            <div className="ml-2 rounded-md bg-slate-200 px-2 py-0.5 text-xs text-slate-600 dark:bg-darkmode-300 dark:text-slate-400">
                              Required
                            </div>
                          </div>
                        </div>
                      </label>
                      <div className="mt-3 w-full flex-1 xl:mt-0">
                        <div className="flex flex-col sm:flex-row">
                          <div
                            data-tw-merge=""
                            className="flex items-center mr-4"
                          >
                            <input
                              data-tw-merge=""
                              type="radio"
                              className="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50"
                              id="condition-new"
                              name="horizontal_radio_button"
                              defaultValue="horizontal-radio-chris-evans"
                            />
                            <label
                              data-tw-merge=""
                              htmlFor="condition-new"
                              className="cursor-pointer ml-2"
                            >
                              New
                            </label>
                          </div>
                          <div
                            data-tw-merge=""
                            className="flex items-center mr-4 mt-2 sm:mt-0"
                          >
                            <input
                              data-tw-merge=""
                              type="radio"
                              className="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50"
                              id="condition-second"
                              name="horizontal_radio_button"
                              defaultValue="horizontal-radio-liam-neeson"
                            />
                            <label
                              data-tw-merge=""
                              htmlFor="condition-second"
                              className="cursor-pointer ml-2"
                            >
                              Second
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-tw-merge=""
                      forminline="formInline"
                      className="block sm:flex group form-inline mt-5 flex-col items-start pt-5 first:mt-0 first:pt-0 xl:flex-row"
                    >
                      <label
                        data-tw-merge=""
                        className="inline-block mb-2 group-[.form-inline]:mb-2 group-[.form-inline]:sm:mb-0 group-[.form-inline]:sm:mr-5 group-[.form-inline]:sm:text-right xl:!mr-10 xl:w-64"
                      >
                        <div className="text-left">
                          <div className="flex items-center">
                            <div className="font-medium">Video Description</div>
                            <div className="ml-2 rounded-md bg-slate-200 px-2 py-0.5 text-xs text-slate-600 dark:bg-darkmode-300 dark:text-slate-400">
                              Required
                            </div>
                          </div>
                          <div className="mt-3 text-xs leading-relaxed text-slate-500">
                            <div>
                              Make sure the Video description provides a
                              detailed explanation of your Video so that it is
                              easy to understand and find your Video.
                            </div>
                            <div className="mt-2">
                              It is recommended not to enter info on mobile
                              numbers, e-mails, etc. into the Video description
                              to protect your personal data.
                            </div>
                          </div>
                        </div>
                      </label>
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
                    <div
                      data-tw-merge=""
                      forminline="formInline"
                      className="block sm:flex group form-inline mt-5 flex-col items-start pt-5 first:mt-0 first:pt-0 xl:flex-row"
                    >
                      <label
                        data-tw-merge=""
                        className="inline-block mb-2 group-[.form-inline]:mb-2 group-[.form-inline]:sm:mb-0 group-[.form-inline]:sm:mr-5 group-[.form-inline]:sm:text-right xl:!mr-10 xl:w-64"
                      >
                        <div className="text-left">
                          <div className="flex items-center">
                            <div className="font-medium">VideoVideo</div>
                          </div>
                          <div className="mt-3 text-xs leading-relaxed text-slate-500">
                            Add a Video so that buyers are more interested in
                            your Video.
                            <a
                              className="font-medium text-primary"
                              href="https://themeforest.net/item/midone-jquery-tailwindcss-html-admin-template/26366820"
                              target="blank"
                            >
                              Learn more.
                            </a>
                          </div>
                        </div>
                      </label>
                      <div className="mt-3 w-full flex-1 xl:mt-0">
                        <button
                          data-tw-merge=""
                          className="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed border-secondary text-slate-500 dark:border-darkmode-100/40 dark:text-slate-300 [&:hover:not(:disabled)]:bg-secondary/20 [&:hover:not(:disabled)]:dark:bg-darkmode-100/10 w-40"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="plus"
                            className="stroke-1.5 mr-2 h-4 w-4"
                          />
                          Add Video URL
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* END: VideoDetail */}
            </>
          </div>
        </div>
      </div>
    </div>
  );
}
