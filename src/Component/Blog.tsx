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
import { IoMdShare,IoMdBookmark } from 'react-icons/io';

import { FaBars } from "react-icons/fa";

export default function Blog() {
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
                  <a href="/post" className="side-menu ">
                    <div className="side-menu__icon">
                      <RiFileTextLine className="stroke-1.5 w-5 h-5" />
                    </div>
                    <div className="side-menu__title">Post</div>
                  </a>
                </li>

                <li>
                  <a href="/calendar" className="side-menu ">
                    <div className="side-menu__icon">
                      <RiCalendarLine className="stroke-1.5 w-5 h-5" />
                    </div>
                    <div className="side-menu__title">Calendar</div>
                  </a>
                </li>
                <li>
                  <a href="/blog" className="side-menu side-menu--active">
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
                              src="assetsd/images/fakers/profile-13.jpg"
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
                              src="assetsd/images/fakers/profile-15.jpg"
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
                              src="assetsd/images/fakers/profile-3.jpg"
                              alt="Midone - Tailwind Admin Dashboard Template"
                            />
                          </div>
                          <div className="ml-3">Christian Bale</div>
                          <div className="ml-auto w-48 truncate text-right text-xs text-slate-500">
                            christianbale@left4code.com
                          </div>
                        </a>
                        <a className="mt-2 flex items-center" href="#">
                          <div className="image-fit h-8 w-8">
                            <img
                              className="rounded-full"
                              src="assetsd/images/fakers/profile-9.jpg"
                              alt="Midone - Tailwind Admin Dashboard Template"
                            />
                          </div>
                          <div className="ml-3">Johnny Depp</div>
                          <div className="ml-auto w-48 truncate text-right text-xs text-slate-500">
                            johnnydepp@left4code.com
                          </div>
                        </a>
                      </div>
                      <div className="mb-2 font-medium">Products</div>
                      <a className="mt-2 flex items-center" href="#">
                        <div className="image-fit h-8 w-8">
                          <img
                            className="rounded-full"
                            src="assetsd/images/fakers/preview-15.jpg"
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
                        <div className="ml-3">Nike Air Max 270</div>
                        <div className="ml-auto w-48 truncate text-right text-xs text-slate-500">
                          Sport &amp; Outdoor
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
                        <div className="ml-3">Dell XPS 13</div>
                        <div className="ml-auto w-48 truncate text-right text-xs text-slate-500">
                          PC &amp; Laptop
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
                            src="assetsd/images/fakers/profile-13.jpg"
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
                            src="assetsd/images/fakers/profile-15.jpg"
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
                      <div className="cursor-pointer relative flex items-center mt-5">
                        <div className="image-fit relative mr-1 h-12 w-12 flex-none">
                          <img
                            className="rounded-full"
                            src="assetsd/images/fakers/profile-3.jpg"
                            alt="Midone - Tailwind Admin Dashboard Template"
                          />
                          <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-success dark:border-darkmode-600"></div>
                        </div>
                        <div className="ml-2 overflow-hidden">
                          <div className="flex items-center">
                            <a className="mr-5 truncate font-medium" href="#">
                              Christian Bale
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
                            src="assetsd/images/fakers/profile-9.jpg"
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
                            src="assetsd/images/fakers/profile-3.jpg"
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
                              05:09 AM
                            </div>
                          </div>
                          <div className="mt-0.5 w-full truncate text-slate-500">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomi
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
                      src="assetsd/images/fakers/profile-3.jpg"
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
              <div className="intro-y mt-8 flex flex-col items-center sm:flex-row">
                <h2 className="mr-auto text-lg font-medium">Blog Layout</h2>
                <div className="mt-4 flex w-full sm:mt-0 sm:w-auto">
                  <button
                    data-tw-merge=""
                    className="transition duration-200 border inline-flex items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-primary border-primary text-white dark:border-primary mr-2 shadow-md"
                  >
                    Add New Post
                  </button>
                  <div
                    data-tw-merge=""
                    data-tw-placement="bottom-end"
                    className="dropdown relative ml-auto sm:ml-0"
                  >
                    <button
                      data-tw-merge=""
                      data-tw-toggle="dropdown"
                      aria-expanded="false"
                      className="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed !box px-2"
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
                            data-lucide="share"
                            className="stroke-1.5 mr-2 h-4 w-4"
                          />
                          Share Post
                        </a>
                        <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                          <i
                            data-tw-merge=""
                            data-lucide="download"
                            className="stroke-1.5 mr-2 h-4 w-4"
                          />
                          Download Post
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="intro-y mt-5 grid grid-cols-12 gap-6">
                {/* BEGIN: Blog Layout */}
                <div className="intro-y box col-span-12 md:col-span-6">
                  <div className="image-fit h-[320px] before:absolute before:left-0 before:top-0 before:z-10 before:block before:h-full before:w-full before:bg-gradient-to-t before:from-black/90 before:to-black/10">
                    <img
                      className="rounded-t-md"
                      src="assetsd/images/fakers/preview-14.jpg"
                      alt="Midone - Tailwind Admin Dashboard Template"
                    />
                    <div className="absolute z-10 flex w-full items-center px-5 pt-6">
                      <div className="image-fit h-10 w-10 flex-none">
                        <img
                          className="rounded-full"
                          src="assetsd/images/fakers/profile-14.jpg"
                          alt="Midone - Tailwind Admin Dashboard Template"
                        />
                      </div>
                      <div className="ml-3 mr-auto text-white">
                        <a className="font-medium" href="#">
                          Sylvester Stallone
                        </a>
                        <div className="mt-0.5 text-xs">45 seconds ago</div>
                      </div>
                      <div
                        data-tw-merge=""
                        data-tw-placement="bottom-end"
                        className="dropdown relative ml-3"
                      >
                        <a
                          data-tw-toggle="dropdown"
                          aria-expanded="false"
                          href="javascript:;"
                          className="cursor-pointer flex h-8 w-8 items-center justify-center rounded-full bg-white/20"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="more-vertical"
                            className="stroke-1.5 h-4 w-4 text-white"
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
                            className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-40"
                          >
                            <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                              <i
                                data-tw-merge=""
                                data-lucide="edit"
                                className="stroke-1.5 mr-2 h-4 w-4"
                              />
                              Edit Post
                            </a>
                            <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                              <i
                                data-tw-merge=""
                                data-lucide="trash"
                                className="stroke-1.5 mr-2 h-4 w-4"
                              />
                              Delete Post
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 z-10 px-5 pb-6 text-white">
                      <span className="rounded bg-white/20 px-2 py-1">
                        Photography
                      </span>
                      <a className="mt-3 block text-xl font-medium" href="#">
                        Dummy text of the printing and typesetting industry
                      </a>
                    </div>
                  </div>
                  <div className="p-5 text-slate-600 dark:text-slate-500">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem
                  </div>
                  <div className="flex items-center border-t border-slate-200/60 px-5 py-3 dark:border-darkmode-400">
                    <a
                      data-placement="top"
                      title="Bookmark"
                      href="#"
                      className="tooltip cursor-pointer intro-x mr-2 flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 text-slate-500 dark:border-darkmode-400 dark:bg-darkmode-300 dark:text-slate-300"
                    >
                      <IoMdBookmark className="stroke-1.5 w-5 h-5" />
                    </a>
                    <div className="intro-x mr-2 flex">
                      <div className="intro-x image-fit h-8 w-8">
                        <img
                          data-placement="top"
                          title="Sylvester Stallone"
                          src="assetsd/images/fakers/profile-14.jpg"
                          alt="Midone - Tailwind Admin Dashboard Template"
                          className="tooltip cursor-pointer zoom-in rounded-full border border-white"
                        />
                      </div>
                      <div className="intro-x image-fit -ml-4 h-8 w-8">
                        <img
                          data-placement="top"
                          title="Sean Connery"
                          src="assetsd/images/fakers/profile-6.jpg"
                          alt="Midone - Tailwind Admin Dashboard Template"
                          className="tooltip cursor-pointer zoom-in rounded-full border border-white"
                        />
                      </div>
                      <div className="intro-x image-fit -ml-4 h-8 w-8">
                        <img
                          data-placement="top"
                          title="Matt Damon"
                          src="assetsd/images/fakers/profile-15.jpg"
                          alt="Midone - Tailwind Admin Dashboard Template"
                          className="tooltip cursor-pointer zoom-in rounded-full border border-white"
                        />
                      </div>
                    </div>
                    <a
                      data-placement="top"
                      title="Share"
                      href="#"
                      className="tooltip cursor-pointer intro-x ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-darkmode-300 dark:text-slate-300"
                    >
                       <IoMdShare className="stroke-1.5 w-5 h-5" />
                      {/* <i
                  data-tw-merge=""
                  data-lucide="share"
                  className="stroke-1.5 h-3 w-3"
                /> */}
                    </a>
                    {/* <a
                data-placement="top"
                title="Download PDF"
                href="#"
                className="tooltip cursor-pointer intro-x ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white"
              >
                <i
                  data-tw-merge=""
                  data-lucide="share"
                  className="stroke-1.5 h-3 w-3"
                />
              </a> */}
                  </div>
                  <div className="border-t border-slate-200/60 px-5 pb-5 pt-3 dark:border-darkmode-400">
                    <div className="flex w-full text-xs text-slate-500 sm:text-sm">
                      <div className="mr-2">
                        Comments:
                        <span className="font-medium">165</span>
                      </div>
                      <div className="mr-2">
                        Views: <span className="font-medium">22k</span>
                      </div>
                      <div className="ml-auto">
                        Likes: <span className="font-medium">61k</span>
                      </div>
                    </div>
                    <div className="mt-3 flex w-full items-center">
                      <div className="image-fit mr-3 h-8 w-8 flex-none">
                        <img
                          className="rounded-full"
                          src="assetsd/images/fakers/profile-14.jpg"
                          alt="Midone - Tailwind Admin Dashboard Template"
                        />
                      </div>
                      <div className="relative flex-1 text-slate-600 dark:text-slate-200">
                        <input
                          data-tw-merge=""
                          type="text"
                          placeholder="Post a comment..."
                          className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm shadow-sm placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10 rounded-full border-transparent bg-slate-100 pr-10"
                        />
                        <i
                          data-tw-merge=""
                          data-lucide="smile"
                          className="stroke-1.5 absolute inset-y-0 right-0 my-auto mr-3 h-4 w-4"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y box col-span-12 md:col-span-6">
                  <div className="image-fit h-[320px] before:absolute before:left-0 before:top-0 before:z-10 before:block before:h-full before:w-full before:bg-gradient-to-t before:from-black/90 before:to-black/10">
                    <img
                      className="rounded-t-md"
                      src="assetsd/images/fakers/preview-8.jpg"
                      alt="Midone - Tailwind Admin Dashboard Template"
                    />
                    <div className="absolute z-10 flex w-full items-center px-5 pt-6">
                      <div className="image-fit h-10 w-10 flex-none">
                        <img
                          className="rounded-full"
                          src="assetsd/images/fakers/profile-9.jpg"
                          alt="Midone - Tailwind Admin Dashboard Template"
                        />
                      </div>
                      <div className="ml-3 mr-auto text-white">
                        <a className="font-medium" href="#">
                          Al Pacino
                        </a>
                        <div className="mt-0.5 text-xs">17 minutes ago</div>
                      </div>
                      <div
                        data-tw-merge=""
                        data-tw-placement="bottom-end"
                        className="dropdown relative ml-3"
                      >
                        <a
                          data-tw-toggle="dropdown"
                          aria-expanded="false"
                          href="javascript:;"
                          className="cursor-pointer flex h-8 w-8 items-center justify-center rounded-full bg-white/20"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="more-vertical"
                            className="stroke-1.5 h-4 w-4 text-white"
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
                            className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-40"
                          >
                            <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                              <i
                                data-tw-merge=""
                                data-lucide="edit"
                                className="stroke-1.5 mr-2 h-4 w-4"
                              />
                              Edit Post
                            </a>
                            <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                              <i
                                data-tw-merge=""
                                data-lucide="trash"
                                className="stroke-1.5 mr-2 h-4 w-4"
                              />
                              Delete Post
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 z-10 px-5 pb-6 text-white">
                      <span className="rounded bg-white/20 px-2 py-1">
                        PC &amp; Laptop
                      </span>
                      <a className="mt-3 block text-xl font-medium" href="#">
                        200 Latin words, combined with a handful of model
                        sentences
                      </a>
                    </div>
                  </div>
                  <div className="p-5 text-slate-600 dark:text-slate-500">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomi
                  </div>
                  <div className="flex items-center border-t border-slate-200/60 px-5 py-3 dark:border-darkmode-400">
                    <a
                      data-placement="top"
                      title="Bookmark"
                      href="#"
                      className="tooltip cursor-pointer intro-x mr-2 flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 text-slate-500 dark:border-darkmode-400 dark:bg-darkmode-300 dark:text-slate-300"
                    >
                      <IoMdBookmark className="stroke-1.5 w-5 h-5" />
                    </a>
                    <div className="intro-x mr-2 flex">
                      <div className="intro-x image-fit h-8 w-8">
                        <img
                          data-placement="top"
                          title="Al Pacino"
                          src="assetsd/images/fakers/profile-9.jpg"
                          alt="Midone - Tailwind Admin Dashboard Template"
                          className="tooltip cursor-pointer zoom-in rounded-full border border-white"
                        />
                      </div>
                      <div className="intro-x image-fit -ml-4 h-8 w-8">
                        <img
                          data-placement="top"
                          title="Edward Norton"
                          src="assetsd/images/fakers/profile-10.jpg"
                          alt="Midone - Tailwind Admin Dashboard Template"
                          className="tooltip cursor-pointer zoom-in rounded-full border border-white"
                        />
                      </div>
                      <div className="intro-x image-fit -ml-4 h-8 w-8">
                        <img
                          data-placement="top"
                          title="Vin Diesel"
                          src="assetsd/images/fakers/profile-15.jpg"
                          alt="Midone - Tailwind Admin Dashboard Template"
                          className="tooltip cursor-pointer zoom-in rounded-full border border-white"
                        />
                      </div>
                    </div>
                    <a
                      data-placement="top"
                      title="Share"
                      href="#"
                      className="tooltip cursor-pointer intro-x ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-darkmode-300 dark:text-slate-300"
                    >
                      <IoMdShare className="stroke-1.5 w-5 h-5" />

                    </a>
                    {/* <a
                data-placement="top"
                title="Download PDF"
                href="#"
                className="tooltip cursor-pointer intro-x ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white"
              >
                <i
                  data-tw-merge=""
                  data-lucide="share"
                  className="stroke-1.5 h-3 w-3"
                />
              </a> */}
                  </div>
                  <div className="border-t border-slate-200/60 px-5 pb-5 pt-3 dark:border-darkmode-400">
                    <div className="flex w-full text-xs text-slate-500 sm:text-sm">
                      <div className="mr-2">
                        Comments:
                        <span className="font-medium">30</span>
                      </div>
                      <div className="mr-2">
                        Views: <span className="font-medium">154k</span>
                      </div>
                      <div className="ml-auto">
                        Likes: <span className="font-medium">70k</span>
                      </div>
                    </div>
                    <div className="mt-3 flex w-full items-center">
                      <div className="image-fit mr-3 h-8 w-8 flex-none">
                        <img
                          className="rounded-full"
                          src="assetsd/images/fakers/profile-9.jpg"
                          alt="Midone - Tailwind Admin Dashboard Template"
                        />
                      </div>
                      <div className="relative flex-1 text-slate-600 dark:text-slate-200">
                        <input
                          data-tw-merge=""
                          type="text"
                          placeholder="Post a comment..."
                          className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm shadow-sm placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10 rounded-full border-transparent bg-slate-100 pr-10"
                        />
                        <i
                          data-tw-merge=""
                          data-lucide="smile"
                          className="stroke-1.5 absolute inset-y-0 right-0 my-auto mr-3 h-4 w-4"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y box col-span-12 md:col-span-6">
                  <div className="image-fit h-[320px] before:absolute before:left-0 before:top-0 before:z-10 before:block before:h-full before:w-full before:bg-gradient-to-t before:from-black/90 before:to-black/10">
                    <img
                      className="rounded-t-md"
                      src="assetsd/images/fakers/preview-2.jpg"
                      alt="Midone - Tailwind Admin Dashboard Template"
                    />
                    <div className="absolute z-10 flex w-full items-center px-5 pt-6">
                      <div className="image-fit h-10 w-10 flex-none">
                        <img
                          className="rounded-full"
                          src="assetsd/images/fakers/profile-3.jpg"
                          alt="Midone - Tailwind Admin Dashboard Template"
                        />
                      </div>
                      <div className="ml-3 mr-auto text-white">
                        <a className="font-medium" href="#">
                          Al Pacino
                        </a>
                        <div className="mt-0.5 text-xs">50 seconds ago</div>
                      </div>
                      <div
                        data-tw-merge=""
                        data-tw-placement="bottom-end"
                        className="dropdown relative ml-3"
                      >
                        <a
                          data-tw-toggle="dropdown"
                          aria-expanded="false"
                          href="javascript:;"
                          className="cursor-pointer flex h-8 w-8 items-center justify-center rounded-full bg-white/20"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="more-vertical"
                            className="stroke-1.5 h-4 w-4 text-white"
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
                            className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-40"
                          >
                            <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                              <i
                                data-tw-merge=""
                                data-lucide="edit"
                                className="stroke-1.5 mr-2 h-4 w-4"
                              />
                              Edit Post
                            </a>
                            <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                              <i
                                data-tw-merge=""
                                data-lucide="trash"
                                className="stroke-1.5 mr-2 h-4 w-4"
                              />
                              Delete Post
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 z-10 px-5 pb-6 text-white">
                      <span className="rounded bg-white/20 px-2 py-1">
                        Smartphone &amp; Tablet
                      </span>
                      <a className="mt-3 block text-xl font-medium" href="#">
                        Dummy text of the printing and typesetting industry
                      </a>
                    </div>
                  </div>
                  <div className="p-5 text-slate-600 dark:text-slate-500">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem
                  </div>
                  <div className="flex items-center border-t border-slate-200/60 px-5 py-3 dark:border-darkmode-400">
                    <a
                      data-placement="top"
                      title="Bookmark"
                      href="#"
                      className="tooltip cursor-pointer intro-x mr-2 flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 text-slate-500 dark:border-darkmode-400 dark:bg-darkmode-300 dark:text-slate-300"
                    >
                      <IoMdBookmark className="stroke-1.5 w-5 h-5" />
                    </a>
                    <div className="intro-x mr-2 flex">
                      <div className="intro-x image-fit h-8 w-8">
                        <img
                          data-placement="top"
                          title="Al Pacino"
                          src="assetsd/images/fakers/profile-3.jpg"
                          alt="Midone - Tailwind Admin Dashboard Template"
                          className="tooltip cursor-pointer zoom-in rounded-full border border-white"
                        />
                      </div>
                      <div className="intro-x image-fit -ml-4 h-8 w-8">
                        <img
                          data-placement="top"
                          title="Nicolas Cage"
                          src="assetsd/images/fakers/profile-12.jpg"
                          alt="Midone - Tailwind Admin Dashboard Template"
                          className="tooltip cursor-pointer zoom-in rounded-full border border-white"
                        />
                      </div>
                      <div className="intro-x image-fit -ml-4 h-8 w-8">
                        <img
                          data-placement="top"
                          title="Bruce Willis"
                          src="assetsd/images/fakers/profile-5.jpg"
                          alt="Midone - Tailwind Admin Dashboard Template"
                          className="tooltip cursor-pointer zoom-in rounded-full border border-white"
                        />
                      </div>
                    </div>
                    <a
                      data-placement="top"
                      title="Share"
                      href="#"
                      className="tooltip cursor-pointer intro-x ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-darkmode-300 dark:text-slate-300"
                    >
                      <IoMdShare className="stroke-1.5 w-5 h-5" />
                    </a>
                    {/* <a
                data-placement="top"
                title="Download PDF"
                href="#"
                className="tooltip cursor-pointer intro-x ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white"
              >
                <i
                  data-tw-merge=""
                  data-lucide="share"
                  className="stroke-1.5 h-3 w-3"
                />
              </a> */}
                  </div>
                  <div className="border-t border-slate-200/60 px-5 pb-5 pt-3 dark:border-darkmode-400">
                    <div className="flex w-full text-xs text-slate-500 sm:text-sm">
                      <div className="mr-2">
                        Comments:
                        <span className="font-medium">162</span>
                      </div>
                      <div className="mr-2">
                        Views: <span className="font-medium">31k</span>
                      </div>
                      <div className="ml-auto">
                        Likes: <span className="font-medium">26k</span>
                      </div>
                    </div>
                    <div className="mt-3 flex w-full items-center">
                      <div className="image-fit mr-3 h-8 w-8 flex-none">
                        <img
                          className="rounded-full"
                          src="assetsd/images/fakers/profile-3.jpg"
                          alt="Midone - Tailwind Admin Dashboard Template"
                        />
                      </div>
                      <div className="relative flex-1 text-slate-600 dark:text-slate-200">
                        <input
                          data-tw-merge=""
                          type="text"
                          placeholder="Post a comment..."
                          className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm shadow-sm placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10 rounded-full border-transparent bg-slate-100 pr-10"
                        />
                        <i
                          data-tw-merge=""
                          data-lucide="smile"
                          className="stroke-1.5 absolute inset-y-0 right-0 my-auto mr-3 h-4 w-4"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y box col-span-12 md:col-span-6">
                  <div className="image-fit h-[320px] before:absolute before:left-0 before:top-0 before:z-10 before:block before:h-full before:w-full before:bg-gradient-to-t before:from-black/90 before:to-black/10">
                    <img
                      className="rounded-t-md"
                      src="assetsd/images/fakers/preview-4.jpg"
                      alt="Midone - Tailwind Admin Dashboard Template"
                    />
                    <div className="absolute z-10 flex w-full items-center px-5 pt-6">
                      <div className="image-fit h-10 w-10 flex-none">
                        <img
                          className="rounded-full"
                          src="assetsd/images/fakers/profile-11.jpg"
                          alt="Midone - Tailwind Admin Dashboard Template"
                        />
                      </div>
                      <div className="ml-3 mr-auto text-white">
                        <a className="font-medium" href="#">
                          Russell Crowe
                        </a>
                        <div className="mt-0.5 text-xs">37 seconds ago</div>
                      </div>
                      <div
                        data-tw-merge=""
                        data-tw-placement="bottom-end"
                        className="dropdown relative ml-3"
                      >
                        <a
                          data-tw-toggle="dropdown"
                          aria-expanded="false"
                          href="javascript:;"
                          className="cursor-pointer flex h-8 w-8 items-center justify-center rounded-full bg-white/20"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="more-vertical"
                            className="stroke-1.5 h-4 w-4 text-white"
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
                            className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-40"
                          >
                            <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                              <i
                                data-tw-merge=""
                                data-lucide="edit"
                                className="stroke-1.5 mr-2 h-4 w-4"
                              />
                              Edit Post
                            </a>
                            <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                              <i
                                data-tw-merge=""
                                data-lucide="trash"
                                className="stroke-1.5 mr-2 h-4 w-4"
                              />
                              Delete Post
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 z-10 px-5 pb-6 text-white">
                      <span className="rounded bg-white/20 px-2 py-1">
                        PC &amp; Laptop
                      </span>
                      <a className="mt-3 block text-xl font-medium" href="#">
                        Popularised in the 1960s with the release of Letraset
                      </a>
                    </div>
                  </div>
                  <div className="p-5 text-slate-600 dark:text-slate-500">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 20
                  </div>
                  <div className="flex items-center border-t border-slate-200/60 px-5 py-3 dark:border-darkmode-400">
                    <a
                      data-placement="top"
                      title="Bookmark"
                      href="#"
                      className="tooltip cursor-pointer intro-x mr-2 flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 text-slate-500 dark:border-darkmode-400 dark:bg-darkmode-300 dark:text-slate-300"
                    >
                      <IoMdBookmark className="stroke-1.5 w-5 h-5" />
                    </a>
                    <div className="intro-x mr-2 flex">
                      <div className="intro-x image-fit h-8 w-8">
                        <img
                          data-placement="top"
                          title="Russell Crowe"
                          src="assetsd/images/fakers/profile-11.jpg"
                          alt="Midone - Tailwind Admin Dashboard Template"
                          className="tooltip cursor-pointer zoom-in rounded-full border border-white"
                        />
                      </div>
                      <div className="intro-x image-fit -ml-4 h-8 w-8">
                        <img
                          data-placement="top"
                          title="Morgan Freeman"
                          src="assetsd/images/fakers/profile-10.jpg"
                          alt="Midone - Tailwind Admin Dashboard Template"
                          className="tooltip cursor-pointer zoom-in rounded-full border border-white"
                        />
                      </div>
                      <div className="intro-x image-fit -ml-4 h-8 w-8">
                        <img
                          data-placement="top"
                          title="Hugh Jackman"
                          src="assetsd/images/fakers/profile-14.jpg"
                          alt="Midone - Tailwind Admin Dashboard Template"
                          className="tooltip cursor-pointer zoom-in rounded-full border border-white"
                        />
                      </div>
                    </div>
                    <a
                      data-placement="top"
                      title="Share"
                      href="#"
                      className="tooltip cursor-pointer intro-x ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-darkmode-300 dark:text-slate-300"
                    >
                      <IoMdShare className="stroke-1.5 w-5 h-5" />
                    </a>
                    {/* <a
                data-placement="top"
                title="Download PDF"
                href="#"
                className="tooltip cursor-pointer intro-x ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white"
              >
                <i
                  data-tw-merge=""
                  data-lucide="share"
                  className="stroke-1.5 h-3 w-3"
                />
              </a> */}
                  </div>
                  <div className="border-t border-slate-200/60 px-5 pb-5 pt-3 dark:border-darkmode-400">
                    <div className="flex w-full text-xs text-slate-500 sm:text-sm">
                      <div className="mr-2">
                        Comments:
                        <span className="font-medium">101</span>
                      </div>
                      <div className="mr-2">
                        Views: <span className="font-medium">33k</span>
                      </div>
                      <div className="ml-auto">
                        Likes: <span className="font-medium">113k</span>
                      </div>
                    </div>
                    <div className="mt-3 flex w-full items-center">
                      <div className="image-fit mr-3 h-8 w-8 flex-none">
                        <img
                          className="rounded-full"
                          src="assetsd/images/fakers/profile-11.jpg"
                          alt="Midone - Tailwind Admin Dashboard Template"
                        />
                      </div>
                      <div className="relative flex-1 text-slate-600 dark:text-slate-200">
                        <input
                          data-tw-merge=""
                          type="text"
                          placeholder="Post a comment..."
                          className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm shadow-sm placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10 rounded-full border-transparent bg-slate-100 pr-10"
                        />
                        <i
                          data-tw-merge=""
                          data-lucide="smile"
                          className="stroke-1.5 absolute inset-y-0 right-0 my-auto mr-3 h-4 w-4"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y box col-span-12 md:col-span-6">
                  <div className="image-fit h-[320px] before:absolute before:left-0 before:top-0 before:z-10 before:block before:h-full before:w-full before:bg-gradient-to-t before:from-black/90 before:to-black/10">
                    <img
                      className="rounded-t-md"
                      src="assetsd/images/fakers/preview-8.jpg"
                      alt="Midone - Tailwind Admin Dashboard Template"
                    />
                    <div className="absolute z-10 flex w-full items-center px-5 pt-6">
                      <div className="image-fit h-10 w-10 flex-none">
                        <img
                          className="rounded-full"
                          src="assetsd/images/fakers/profile-13.jpg"
                          alt="Midone - Tailwind Admin Dashboard Template"
                        />
                      </div>
                      <div className="ml-3 mr-auto text-white">
                        <a className="font-medium" href="#">
                          Kevin Spacey
                        </a>
                        <div className="mt-0.5 text-xs">17 hours ago</div>
                      </div>
                      <div
                        data-tw-merge=""
                        data-tw-placement="bottom-end"
                        className="dropdown relative ml-3"
                      >
                        <a
                          data-tw-toggle="dropdown"
                          aria-expanded="false"
                          href="javascript:;"
                          className="cursor-pointer flex h-8 w-8 items-center justify-center rounded-full bg-white/20"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="more-vertical"
                            className="stroke-1.5 h-4 w-4 text-white"
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
                            className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-40"
                          >
                            <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                              <i
                                data-tw-merge=""
                                data-lucide="edit"
                                className="stroke-1.5 mr-2 h-4 w-4"
                              />
                              Edit Post
                            </a>
                            <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                              <i
                                data-tw-merge=""
                                data-lucide="trash"
                                className="stroke-1.5 mr-2 h-4 w-4"
                              />
                              Delete Post
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 z-10 px-5 pb-6 text-white">
                      <span className="rounded bg-white/20 px-2 py-1">
                        PC &amp; Laptop
                      </span>
                      <a className="mt-3 block text-xl font-medium" href="#">
                        Popularised in the 1960s with the release of Letraset
                      </a>
                    </div>
                  </div>
                  <div className="p-5 text-slate-600 dark:text-slate-500">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 20
                  </div>
                  <div className="flex items-center border-t border-slate-200/60 px-5 py-3 dark:border-darkmode-400">
                    <a
                      data-placement="top"
                      title="Bookmark"
                      href="#"
                      className="tooltip cursor-pointer intro-x mr-2 flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 text-slate-500 dark:border-darkmode-400 dark:bg-darkmode-300 dark:text-slate-300"
                    >
                      <IoMdBookmark className="stroke-1.5 w-5 h-5" />
                    </a>
                    <div className="intro-x mr-2 flex">
                      <div className="intro-x image-fit h-8 w-8">
                        <img
                          data-placement="top"
                          title="Kevin Spacey"
                          src="assetsd/images/fakers/profile-13.jpg"
                          alt="Midone - Tailwind Admin Dashboard Template"
                          className="tooltip cursor-pointer zoom-in rounded-full border border-white"
                        />
                      </div>
                      <div className="intro-x image-fit -ml-4 h-8 w-8">
                        <img
                          data-placement="top"
                          title="Leonardo DiCaprio"
                          src="assetsd/images/fakers/profile-12.jpg"
                          alt="Midone - Tailwind Admin Dashboard Template"
                          className="tooltip cursor-pointer zoom-in rounded-full border border-white"
                        />
                      </div>
                      <div className="intro-x image-fit -ml-4 h-8 w-8">
                        <img
                          data-placement="top"
                          title="Richard Gere"
                          src="assetsd/images/fakers/profile-1.jpg"
                          alt="Midone - Tailwind Admin Dashboard Template"
                          className="tooltip cursor-pointer zoom-in rounded-full border border-white"
                        />
                      </div>
                    </div>
                    <a
                      data-placement="top"
                      title="Share"
                      href="#"
                      className="tooltip cursor-pointer intro-x ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-darkmode-300 dark:text-slate-300"
                    >
                     <IoMdShare className="stroke-1.5 w-5 h-5" />
                    </a>
                    {/* <a
                data-placement="top"
                title="Download PDF"
                href="#"
                className="tooltip cursor-pointer intro-x ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white"
              >
                <i
                  data-tw-merge=""
                  data-lucide="share"
                  className="stroke-1.5 h-3 w-3"
                />
              </a> */}
                  </div>
                  <div className="border-t border-slate-200/60 px-5 pb-5 pt-3 dark:border-darkmode-400">
                    <div className="flex w-full text-xs text-slate-500 sm:text-sm">
                      <div className="mr-2">
                        Comments:
                        <span className="font-medium">22</span>
                      </div>
                      <div className="mr-2">
                        Views: <span className="font-medium">160k</span>
                      </div>
                      <div className="ml-auto">
                        Likes: <span className="font-medium">65k</span>
                      </div>
                    </div>
                    <div className="mt-3 flex w-full items-center">
                      <div className="image-fit mr-3 h-8 w-8 flex-none">
                        <img
                          className="rounded-full"
                          src="assetsd/images/fakers/profile-13.jpg"
                          alt="Midone - Tailwind Admin Dashboard Template"
                        />
                      </div>
                      <div className="relative flex-1 text-slate-600 dark:text-slate-200">
                        <input
                          data-tw-merge=""
                          type="text"
                          placeholder="Post a comment..."
                          className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm shadow-sm placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10 rounded-full border-transparent bg-slate-100 pr-10"
                        />
                        <i
                          data-tw-merge=""
                          data-lucide="smile"
                          className="stroke-1.5 absolute inset-y-0 right-0 my-auto mr-3 h-4 w-4"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y box col-span-12 md:col-span-6">
                  <div className="image-fit h-[320px] before:absolute before:left-0 before:top-0 before:z-10 before:block before:h-full before:w-full before:bg-gradient-to-t before:from-black/90 before:to-black/10">
                    <img
                      className="rounded-t-md"
                      src="assetsd/images/fakers/preview-3.jpg"
                      alt="Midone - Tailwind Admin Dashboard Template"
                    />
                    <div className="absolute z-10 flex w-full items-center px-5 pt-6">
                      <div className="image-fit h-10 w-10 flex-none">
                        <img
                          className="rounded-full"
                          src="assetsd/images/fakers/profile-11.jpg"
                          alt="Midone - Tailwind Admin Dashboard Template"
                        />
                      </div>
                      <div className="ml-3 mr-auto text-white">
                        <a className="font-medium" href="#">
                          John Travolta
                        </a>
                        <div className="mt-0.5 text-xs">24 hours ago</div>
                      </div>
                      <div
                        data-tw-merge=""
                        data-tw-placement="bottom-end"
                        className="dropdown relative ml-3"
                      >
                        <a
                          data-tw-toggle="dropdown"
                          aria-expanded="false"
                          href="javascript:;"
                          className="cursor-pointer flex h-8 w-8 items-center justify-center rounded-full bg-white/20"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="more-vertical"
                            className="stroke-1.5 h-4 w-4 text-white"
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
                            className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-40"
                          >
                            <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                              <i
                                data-tw-merge=""
                                data-lucide="edit"
                                className="stroke-1.5 mr-2 h-4 w-4"
                              />
                              Edit Post
                            </a>
                            <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                              <i
                                data-tw-merge=""
                                data-lucide="trash"
                                className="stroke-1.5 mr-2 h-4 w-4"
                              />
                              Delete Post
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 z-10 px-5 pb-6 text-white">
                      <span className="rounded bg-white/20 px-2 py-1">
                        Sport &amp; Outdoor
                      </span>
                      <a className="mt-3 block text-xl font-medium" href="#">
                        Dummy text of the printing and typesetting industry
                      </a>
                    </div>
                  </div>
                  <div className="p-5 text-slate-600 dark:text-slate-500">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem
                  </div>
                  <div className="flex items-center border-t border-slate-200/60 px-5 py-3 dark:border-darkmode-400">
                    <a
                      data-placement="top"
                      title="Bookmark"
                      href="#"
                      className="tooltip cursor-pointer intro-x mr-2 flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 text-slate-500 dark:border-darkmode-400 dark:bg-darkmode-300 dark:text-slate-300"
                    >
                      <IoMdBookmark className="stroke-1.5 w-5 h-5" />
                    </a>
                    <div className="intro-x mr-2 flex">
                      <div className="intro-x image-fit h-8 w-8">
                        <img
                          data-placement="top"
                          title="John Travolta"
                          src="assetsd/images/fakers/profile-11.jpg"
                          alt="Midone - Tailwind Admin Dashboard Template"
                          className="tooltip cursor-pointer zoom-in rounded-full border border-white"
                        />
                      </div>
                      <div className="intro-x image-fit -ml-4 h-8 w-8">
                        <img
                          data-placement="top"
                          title="Charlize Theron"
                          src="assetsd/images/fakers/profile-7.jpg"
                          alt="Midone - Tailwind Admin Dashboard Template"
                          className="tooltip cursor-pointer zoom-in rounded-full border border-white"
                        />
                      </div>
                      <div className="intro-x image-fit -ml-4 h-8 w-8">
                        <img
                          data-placement="top"
                          title="Will Smith"
                          src="assetsd/images/fakers/profile-4.jpg"
                          alt="Midone - Tailwind Admin Dashboard Template"
                          className="tooltip cursor-pointer zoom-in rounded-full border border-white"
                        />
                      </div>
                    </div>
                    <a
                      data-placement="top"
                      title="Share"
                      href="#"
                      className="tooltip cursor-pointer intro-x ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-darkmode-300 dark:text-slate-300"
                    >
                      <IoMdShare className="stroke-1.5 w-5 h-5" />
                    </a>
                    {/* <a
                data-placement="top"
                title="Download PDF"
                href="#"
                className="tooltip cursor-pointer intro-x ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white"
              >
                <i
                  data-tw-merge=""
                  data-lucide="share"
                  className="stroke-1.5 h-3 w-3"
                />
              </a> */}
                  </div>
                  <div className="border-t border-slate-200/60 px-5 pb-5 pt-3 dark:border-darkmode-400">
                    <div className="flex w-full text-xs text-slate-500 sm:text-sm">
                      <div className="mr-2">
                        Comments:
                        <span className="font-medium">47</span>
                      </div>
                      <div className="mr-2">
                        Views: <span className="font-medium">48k</span>
                      </div>
                      <div className="ml-auto">
                        Likes: <span className="font-medium">62k</span>
                      </div>
                    </div>
                    <div className="mt-3 flex w-full items-center">
                      <div className="image-fit mr-3 h-8 w-8 flex-none">
                        <img
                          className="rounded-full"
                          src="assetsd/images/fakers/profile-11.jpg"
                          alt="Midone - Tailwind Admin Dashboard Template"
                        />
                      </div>
                      <div className="relative flex-1 text-slate-600 dark:text-slate-200">
                        <input
                          data-tw-merge=""
                          type="text"
                          placeholder="Post a comment..."
                          className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm shadow-sm placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10 rounded-full border-transparent bg-slate-100 pr-10"
                        />
                        <i
                          data-tw-merge=""
                          data-lucide="smile"
                          className="stroke-1.5 absolute inset-y-0 right-0 my-auto mr-3 h-4 w-4"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* END: Blog Layout */}
                {/* BEGIN: Pagiantion */}
                <div className="intro-y col-span-12 flex flex-wrap items-center sm:flex-row sm:flex-nowrap">
                  <nav className="w-full sm:mr-auto sm:w-auto">
                    <ul className="flex w-full mr-0 sm:mr-auto sm:w-auto">
                      <li className="flex-1 sm:flex-initial">
                        <a
                          data-tw-merge=""
                          className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="chevrons-left"
                            className="stroke-1.5 h-4 w-4"
                          />
                        </a>
                      </li>
                      <li className="flex-1 sm:flex-initial">
                        <a
                          data-tw-merge=""
                          className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="chevron-left"
                            className="stroke-1.5 h-4 w-4"
                          />
                        </a>
                      </li>
                      <li className="flex-1 sm:flex-initial">
                        <a
                          data-tw-merge=""
                          className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"
                        >
                          ...
                        </a>
                      </li>
                      <li className="flex-1 sm:flex-initial">
                        <a
                          data-tw-merge=""
                          className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"
                        >
                          1
                        </a>
                      </li>
                      <li className="flex-1 sm:flex-initial">
                        <a
                          data-tw-merge=""
                          className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3 !box dark:bg-darkmode-400"
                        >
                          2
                        </a>
                      </li>
                      <li className="flex-1 sm:flex-initial">
                        <a
                          data-tw-merge=""
                          className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"
                        >
                          3
                        </a>
                      </li>
                      <li className="flex-1 sm:flex-initial">
                        <a
                          data-tw-merge=""
                          className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"
                        >
                          ...
                        </a>
                      </li>
                      <li className="flex-1 sm:flex-initial">
                        <a
                          data-tw-merge=""
                          className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="chevron-right"
                            className="stroke-1.5 h-4 w-4"
                          />
                        </a>
                      </li>
                      <li className="flex-1 sm:flex-initial">
                        <a
                          data-tw-merge=""
                          className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="chevrons-right"
                            className="stroke-1.5 h-4 w-4"
                          />
                        </a>
                      </li>
                    </ul>
                  </nav>
                  <select
                    data-tw-merge=""
                    className="disabled:bg-slate-100 disabled:cursor-not-allowed disabled:dark:bg-darkmode-800/50 [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 transition duration-200 ease-in-out text-sm border-slate-200 shadow-sm rounded-md py-2 px-3 pr-8 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 group-[.form-inline]:flex-1 !box mt-3 w-20 sm:mt-0"
                  >
                    <option>10</option>
                    <option>25</option>
                    <option>35</option>
                    <option>50</option>
                  </select>
                </div>
                {/* END: Pagiantion */}
              </div>
            </div>
            {/* END: Content */}
          </div>
        </div>
      </>
    </div>
  );
}
