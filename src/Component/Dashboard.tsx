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

export default function Dashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <div
        className="rubick px-5 sm:px-8 py-5 before:content-[''] before:bg-gradient-to-b before:from-theme-1 
        before:to-theme-2 dark:before:from-darkmode-800 dark:before:to-darkmode-800 before:fixed before:inset-0 before:z-[-1]"
      >
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
                <a href="/" className="side-menu side-menu--active">
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
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 2xl:col-span-9">
                <div className="grid grid-cols-12 gap-6">
                  {/* BEGIN: Notification */}
                  <div className="intro-y col-span-12 -mb-6 mt-6">
                    <div
                      role="alert"
                      className="alert relative border rounded-md px-5 py-4 bg-primary border-primary text-white dark:border-primary pl-5 pr-16 box mb-6 flex items-center dark:border-darkmode-600"
                    >
                      <span>
                        Introducing to admin Dashboard
                        {/* <a
                      className="ml-1 underline"
                      href="https://themeforest.net/item/midone-jquery-tailwindcss-html-admin-template/26366820"
                      target="blank"
                    >
                      themeforest.net
                    </a> */}
                        .
                      </span>
                      <button
                        data-tw-merge=""
                        data-tw-dismiss="alert"
                        type="button"
                        aria-label="Close"
                        className="py-2 px-3 absolute right-0 my-auto mr-2 text-white"
                      >
                        <i
                          data-tw-merge=""
                          data-lucide="x"
                          className="stroke-1.5 h-4 w-4"
                        />
                      </button>
                    </div>
                  </div>
                  {/* BEGIN: Notification */}
                  {/* BEGIN: General Report */}
                  <div className="col-span-12 mt-2 lg:col-span-8 xl:col-span-6">
                    <div className="intro-y block h-10 items-center sm:flex">
                      <h2 className="mr-5 truncate text-lg font-medium">
                        General Report
                      </h2>
                      <select
                        data-tw-merge=""
                        className="disabled:bg-slate-100 disabled:cursor-not-allowed disabled:dark:bg-darkmode-800/50 [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md py-2 px-3 pr-8 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 group-[.form-inline]:flex-1 !box mt-3 sm:ml-auto sm:mt-0 sm:w-auto"
                      >
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                        <option value="yearly">Yearly</option>
                        <option value="custom-date">Custom Date</option>
                      </select>
                    </div>
                    <div className="relative mt-12 intro-y sm:mt-5 before:box before:absolute before:inset-x-3 before:mt-3 before:h-full before:bg-slate-50 before:content-['']">
                      <div className="box sm:flex">
                        <div className="flex flex-1 flex-col justify-center px-8 py-12">
                          <i
                            data-tw-merge=""
                            data-lucide="shopping-bag"
                            className="stroke-1.5 h-10 w-10 text-warning"
                          />
                          <div className="relative ml-0.5 mt-12 pl-4 text-3xl font-medium">
                            <span className="absolute left-0 top-0 -ml-0.5 text-2xl font-medium">
                              $
                            </span>
                            54.143
                          </div>
                          <div
                            data-placement="top"
                            title="47% Higher than last month"
                            className="tooltip cursor-pointer mr-auto mt-3 flex items-center rounded-full bg-success py-[3px] pl-2 pr-1 text-xs font-medium text-white"
                          >
                            47%
                            <i
                              data-tw-merge=""
                              data-lucide="chevron-up"
                              className="stroke-1.5 ml-0.5 h-4 w-4"
                            />
                          </div>
                          <div className="mt-4 text-slate-500">
                            Sales earnings this month after associated author
                            fees, &amp; before taxes.
                          </div>
                          <button
                            data-tw-merge=""
                            className="transition duration-200 border shadow-sm inline-flex items-center py-2 px-3 font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed border-secondary text-slate-500 dark:border-darkmode-100/40 dark:text-slate-300 [&:hover:not(:disabled)]:bg-secondary/20 [&:hover:not(:disabled)]:dark:bg-darkmode-100/10 relative mt-12 justify-start rounded-full"
                          >
                            Download Reports
                            <span className="absolute bottom-0 right-0 top-0 my-auto ml-auto mr-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                              <i
                                data-tw-merge=""
                                data-lucide="arrow-right"
                                className="stroke-1.5 h-4 w-4"
                              />
                            </span>
                          </button>
                        </div>
                        <div className="flex flex-1 flex-col justify-center border-t border-dashed border-slate-200 px-8 py-12 dark:border-darkmode-300 sm:border-l sm:border-t-0">
                          <div className="text-xs text-slate-500">
                            TOTAL TRANSACTION
                          </div>
                          <div className="mt-1.5 flex items-center">
                            <div className="text-base">4.501</div>
                            <div
                              data-placement="top"
                              title="2% Lower than last month"
                              className="tooltip cursor-pointer ml-2 flex text-xs font-medium text-danger"
                            >
                              2%
                              <i
                                data-tw-merge=""
                                data-lucide="chevron-down"
                                className="stroke-1.5 ml-0.5 h-4 w-4"
                              />
                            </div>
                          </div>
                          <div className="mt-5 text-xs text-slate-500">
                            CANCELATION CASE
                          </div>
                          <div className="mt-1.5 flex items-center">
                            <div className="text-base">2</div>
                            <div
                              data-placement="top"
                              title="0.1% Lower than last month"
                              className="tooltip cursor-pointer ml-2 flex text-xs font-medium text-danger"
                            >
                              0.1%
                              <i
                                data-tw-merge=""
                                data-lucide="chevron-down"
                                className="stroke-1.5 ml-0.5 h-4 w-4"
                              />
                            </div>
                          </div>
                          <div className="mt-5 text-xs text-slate-500">
                            GROSS RENTAL VALUE
                          </div>
                          <div className="mt-1.5 flex items-center">
                            <div className="text-base">$72.000</div>
                            <div
                              data-placement="top"
                              title="49% Higher than last month"
                              className="tooltip cursor-pointer ml-2 flex text-xs font-medium text-success"
                            >
                              49%
                              <i
                                data-tw-merge=""
                                data-lucide="chevron-up"
                                className="stroke-1.5 ml-0.5 h-4 w-4"
                              />
                            </div>
                          </div>
                          <div className="mt-5 text-xs text-slate-500">
                            GROSS RENTAL PROFIT
                          </div>
                          <div className="mt-1.5 flex items-center">
                            <div className="text-base">$54.000</div>
                            <div
                              data-placement="top"
                              title="52% Higher than last month"
                              className="tooltip cursor-pointer ml-2 flex text-xs font-medium text-success"
                            >
                              52%
                              <i
                                data-tw-merge=""
                                data-lucide="chevron-up"
                                className="stroke-1.5 ml-0.5 h-4 w-4"
                              />
                            </div>
                          </div>
                          <div className="mt-5 text-xs text-slate-500">
                            NEW USERS
                          </div>
                          <div className="mt-1.5 flex items-center">
                            <div className="text-base">2.500</div>
                            <div
                              data-placement="top"
                              title="52% Higher than last month"
                              className="tooltip cursor-pointer ml-2 flex text-xs font-medium text-success"
                            >
                              52%
                              <i
                                data-tw-merge=""
                                data-lucide="chevron-up"
                                className="stroke-1.5 ml-0.5 h-4 w-4"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* END: General Report */}
                  {/* BEGIN: Visitors */}
                  <div className="col-span-12 mt-2 sm:col-span-6 lg:col-span-4 xl:col-span-3">
                    <div className="intro-y flex h-10 items-center">
                      <h2 className="mr-5 truncate text-lg font-medium">
                        Visitors
                      </h2>
                      <a className="ml-auto truncate text-primary" href="#">
                        {" "}
                        View on Map{" "}
                      </a>
                    </div>
                    <div className="intro-y relative mt-5 before:box before:absolute before:inset-x-3 before:mt-3 before:h-full before:bg-slate-50 before:content-['']">
                      <div className="box p-5">
                        <div className="flex items-center">
                          Realtime active users
                          <div
                            data-tw-merge=""
                            data-tw-placement="bottom-end"
                            className="dropdown relative ml-auto"
                          >
                            <a
                              data-tw-toggle="dropdown"
                              aria-expanded="false"
                              href="javascript:;"
                              className="cursor-pointer -mr-2 block h-5 w-5"
                            >
                              <i
                                data-tw-merge=""
                                data-lucide="more-vertical"
                                className="stroke-1.5 w-5 h-5 text-slate-500"
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
                                    data-lucide="file-text"
                                    className="stroke-1.5 mr-2 h-4 w-4"
                                  />
                                  Export
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
                        <div className="mt-2 text-2xl font-medium">214</div>
                        <div className="mt-4 flex border-b border-slate-200 pb-2">
                          <div className="text-xs text-slate-500">
                            Page views per second
                          </div>
                          <div
                            data-placement="top"
                            title="49% Lower than last month"
                            className="tooltip cursor-pointer ml-auto flex text-xs font-medium text-success"
                          >
                            49%
                            <i
                              data-tw-merge=""
                              data-lucide="chevron-up"
                              className="stroke-1.5 ml-0.5 h-4 w-4"
                            />
                          </div>
                        </div>
                        <div className="broder-slate-200 mt-2 border-b">
                          <div className="-mb-1.5 -ml-2.5">
                            <div className="w-auto h-[79px]">
                              <canvas className="chart report-bar-chart" />
                            </div>
                          </div>
                        </div>
                        <div className="mb-2 mt-4 flex border-b border-slate-200 pb-2 text-xs text-slate-500">
                          <div>Top Active Pages</div>
                          <div className="ml-auto">Active Users</div>
                        </div>
                        <div className="flex">
                          <div>/letz-lara…review/2653</div>
                          <div className="ml-auto">472</div>
                        </div>
                        <div className="mt-1.5 flex">
                          <div>/midone…review/1674</div>
                          <div className="ml-auto">294</div>
                        </div>
                        <div className="mt-1.5 flex">
                          <div>/profile…review/46789</div>
                          <div className="ml-auto">83</div>
                        </div>
                        <div className="mt-1.5 flex">
                          <div>/profile…review/24357</div>
                          <div className="ml-auto">21</div>
                        </div>
                        <button
                          data-tw-merge=""
                          className="transition duration-200 border shadow-sm inline-flex items-center justify-center rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed border-secondary text-slate-500 dark:border-darkmode-100/40 dark:text-slate-300 [&:hover:not(:disabled)]:bg-secondary/20 [&:hover:not(:disabled)]:dark:bg-darkmode-100/10 mt-4 w-full border-dashed px-2 py-1"
                        >
                          Real-Time Report
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* END: Visitors */}
                  {/* BEGIN: Users By Age */}
                  <div className="col-span-12 mt-2 sm:col-span-6 lg:col-span-4 lg:mt-6 xl:col-span-3 xl:mt-2">
                    <div className="intro-y flex h-10 items-center">
                      <h2 className="mr-5 truncate text-lg font-medium">
                        Users By Age
                      </h2>
                      <a className="ml-auto truncate text-primary" href="#">
                        {" "}
                        Show More{" "}
                      </a>
                    </div>
                    <div className="intro-y relative mt-5 before:box before:absolute before:inset-x-3 before:mt-3 before:h-full before:bg-slate-50 before:content-['']">
                      <div className="box p-5">
                        <ul
                          data-tw-merge=""
                          role="tablist"
                          className="flex mx-auto w-4/5 rounded-md bg-slate-100 dark:bg-black/20"
                        >
                          <li
                            id="active-users-tab"
                            data-tw-merge=""
                            role="presentation"
                            className="focus-visible:outline-none flex-1"
                          >
                            <button
                              data-tw-merge=""
                              data-tw-target="#active-users"
                              role="tab"
                              className="cursor-pointer block appearance-none border-transparent text-slate-700 dark:text-slate-400 [&.active]:dark:text-white rounded-md border-0 [&.active]:bg-primary [&.active]:text-white [&.active]:font-medium active w-full px-2 py-1.5"
                            >
                              Active
                            </button>
                          </li>
                          <li
                            id="inactive-users-tab"
                            data-tw-merge=""
                            role="presentation"
                            className="focus-visible:outline-none flex-1"
                          >
                            <button
                              data-tw-merge=""
                              data-tw-target="#inactive-users"
                              role="tab"
                              className="cursor-pointer block appearance-none border-transparent text-slate-700 dark:text-slate-400 [&.active]:dark:text-white rounded-md border-0 [&.active]:bg-primary [&.active]:text-white [&.active]:font-medium w-full px-2 py-1.5"
                            >
                              Inactive
                            </button>
                          </li>
                        </ul>
                        <div className="tab-content mt-6">
                          <div
                            data-transition=""
                            data-selector=".active"
                            data-enter="transition-[visibility,opacity] ease-linear duration-150"
                            data-enter-from="!p-0 !h-0 overflow-hidden invisible opacity-0"
                            data-enter-to="visible opacity-100"
                            data-leave="transition-[visibility,opacity] ease-linear duration-150"
                            data-leave-from="visible opacity-100"
                            data-leave-to="!p-0 !h-0 overflow-hidden invisible opacity-0"
                            id="active-users"
                            role="tabpanel"
                            aria-labelledby="active-users-tab"
                            className="tab-pane active"
                          >
                            <div className="relative">
                              <div className="w-auto h-[208px]">
                                <canvas
                                  id="report-donut-chart"
                                  className="chart mt-3"
                                />
                              </div>
                              <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center">
                                <div className="text-2xl font-medium">
                                  2.501
                                </div>
                                <div className="mt-0.5 text-slate-500">
                                  Active Users
                                </div>
                              </div>
                            </div>
                            <div className="mx-auto mt-5 w-52 sm:w-auto">
                              <div className="flex items-center">
                                <div className="mr-3 h-2 w-2 rounded-full bg-primary" />
                                <span className="truncate">
                                  17 - 30 Years old
                                </span>
                                <span className="ml-auto font-medium">62%</span>
                              </div>
                              <div className="mt-4 flex items-center">
                                <div className="mr-3 h-2 w-2 rounded-full bg-pending" />
                                <span className="truncate">
                                  31 - 50 Years old
                                </span>
                                <span className="ml-auto font-medium">33%</span>
                              </div>
                              <div className="mt-4 flex items-center">
                                <div className="mr-3 h-2 w-2 rounded-full bg-warning" />
                                <span className="truncate">
                                  &gt;= 50 Years old
                                </span>
                                <span className="ml-auto font-medium">10%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* END: Users By Age */}

                  {/* BEGIN: Ads 1 */}
                  {/* <div className="col-span-12 mt-6 lg:col-span-6">
                    <div className="box intro-y relative overflow-hidden bg-primary p-8">
                      <div className="-mt-3 w-full text-xl leading-[2.15rem] text-white sm:w-72">
                        Transact safely with Lender’s Fund Account (RDL)
                      </div>
                      <div className="mt-3 w-full leading-relaxed text-white/70 dark:text-slate-500 sm:w-72">
                        Apply now, quick registration.
                      </div>
                      <button
                        data-tw-merge=""
                        className="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed mt-6 w-32 bg-white dark:bg-darkmode-800 dark:text-white sm:mt-10"
                      >
                        Start Now
                      </button>
                      <img
                        className="absolute right-0 top-0 -mt-3 mr-2 hidden w-2/5 sm:block"
                        src="assetsd/images/woman-illustration.svg"
                        alt="Midone - Tailwind Admin Dashboard Template"
                      />
                    </div>
                  </div> */}
                  {/* END: Ads 1 */}
                  {/* BEGIN: Ads 2 */}
                  {/* <div className="col-span-12 mt-6 lg:col-span-6">
                    <div className="box intro-y relative overflow-hidden p-8">
                      <div className="-mt-3 w-full text-xl leading-[2.15rem] text-primary dark:text-white sm:w-52">
                        Invite friends to get
                        <span className="font-medium">FREE</span> bonuses!
                      </div>
                      <div className="mt-2 w-full leading-relaxed text-slate-500 sm:w-60">
                        Get a $200 voucher by inviting your friends to fund
                        #BecomeMember
                      </div>
                      <div
                        data-placement="top"
                        title="Copy referral link"
                        className="tooltip cursor-pointer relative mt-6 w-48"
                      >
                        <input
                          data-tw-merge=""
                          type="text"
                          defaultValue="https://dashboard.in"
                          className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10"
                        />
                        <i
                          data-tw-merge=""
                          data-lucide="copy"
                          className="stroke-1.5 absolute bottom-0 right-0 top-0 my-auto mr-4 h-4 w-4"
                        />
                      </div>
                      <img
                        className="absolute right-0 top-0 -mr-12 mt-1 hidden w-1/2 sm:block"
                        src="assetsd/images/phone-illustration.svg"
                        alt="Midone - Tailwind Admin Dashboard Template"
                      />
                    </div>
                  </div> */}
                  {/* END: Ads 2 */}
                  {/* BEGIN: Weekly Top Products */}
                  <div className="col-span-12 mt-6">
                    <div className="intro-y block h-10 items-center sm:flex">
                      <h2 className="mr-5 truncate text-lg font-medium">
                        Users
                      </h2>
                      <div className="mt-3 flex items-center sm:ml-auto sm:mt-0">
                        <button
                          data-tw-merge=""
                          className="transition duration-200 border shadow-sm items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed !box flex text-slate-600 dark:text-slate-300"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="file-text"
                            className="stroke-1.5 mr-2 hidden h-4 w-4 sm:block"
                          />
                          Export to Excel
                        </button>
                        <button
                          data-tw-merge=""
                          className="transition duration-200 border shadow-sm items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed !box ml-3 flex text-slate-600 dark:text-slate-300"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="file-text"
                            className="stroke-1.5 mr-2 hidden h-4 w-4 sm:block"
                          />
                          Export to PDF
                        </button>
                      </div>
                    </div>
                    <div className="intro-y mt-8 overflow-auto sm:mt-0 lg:overflow-visible">
                      <table
                        data-tw-merge=""
                        className="w-full text-left border-separate border-spacing-y-[10px] sm:mt-2"
                      >
                        <thead data-tw-merge="" className="">
                          <tr data-tw-merge="" className="">
                            <th
                              data-tw-merge=""
                              className="font-medium px-5 py-3 dark:border-darkmode-300 whitespace-nowrap border-b-0"
                            >
                              IMAGES
                            </th>
                            <th
                              data-tw-merge=""
                              className="font-medium px-5 py-3 dark:border-darkmode-300 whitespace-nowrap border-b-0"
                            >
                              USER NAME
                            </th>
                            <th
                              data-tw-merge=""
                              className="font-medium px-5 py-3 dark:border-darkmode-300 whitespace-nowrap border-b-0 text-center"
                            >
                              STOCK
                            </th>
                            <th
                              data-tw-merge=""
                              className="font-medium px-5 py-3 dark:border-darkmode-300 whitespace-nowrap border-b-0 text-center"
                            >
                              STATUS
                            </th>
                            <th
                              data-tw-merge=""
                              className="font-medium px-5 py-3 dark:border-darkmode-300 whitespace-nowrap border-b-0 text-center"
                            >
                              ACTIONS
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-tw-merge="" className="intro-x">
                            <td
                              data-tw-merge=""
                              className="px-5 py-3 border-b dark:border-darkmode-300 box w-40 rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600"
                            >
                              <div className="flex">
                                <div className="image-fit zoom-in h-10 w-10">
                                  <img
                                    data-placement="top"
                                    title="Uploaded at 28 May 2020"
                                    src="assetsd/images/fakers/preview-15.jpg"
                                    alt="Midone - Tailwind Admin Dashboard Template"
                                    className="tooltip cursor-pointer rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                                  />
                                </div>
                                <div className="image-fit zoom-in -ml-5 h-10 w-10">
                                  <img
                                    data-placement="top"
                                    title="Uploaded at 24 February 2022"
                                    src="assetsd/images/fakers/profile-5.jpg"
                                    alt="Midone - Tailwind Admin Dashboard Template"
                                    className="tooltip cursor-pointer rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                                  />
                                </div>
                                <div className="image-fit zoom-in -ml-5 h-10 w-10">
                                  <img
                                    data-placement="top"
                                    title="Uploaded at 30 April 2020"
                                    src="assetsd/images/fakers/profile-15.jpg"
                                    alt="Midone - Tailwind Admin Dashboard Template"
                                    className="tooltip cursor-pointer rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                                  />
                                </div>
                              </div>
                            </td>
                            <td
                              data-tw-merge=""
                              className="px-5 py-3 border-b dark:border-darkmode-300 box rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600"
                            >
                              <a
                                className="whitespace-nowrap font-medium"
                                href="#"
                              >
                                Sony Master Series A9G
                              </a>
                              <div className="mt-0.5 whitespace-nowrap text-xs text-slate-500">
                                Electronic
                              </div>
                            </td>
                            <td
                              data-tw-merge=""
                              className="px-5 py-3 border-b dark:border-darkmode-300 box rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600"
                            >
                              65
                            </td>
                            <td
                              data-tw-merge=""
                              className="px-5 py-3 border-b dark:border-darkmode-300 box w-40 rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600"
                            >
                              <div className="flex items-center justify-center text-success">
                                <i
                                  data-tw-merge=""
                                  data-lucide="check-square"
                                  className="stroke-1.5 mr-2 h-4 w-4"
                                />
                                Active
                              </div>
                            </td>
                            <td
                              data-tw-merge=""
                              className="px-5 py-3 border-b dark:border-darkmode-300 box w-56 rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600 before:absolute before:inset-y-0 before:left-0 before:my-auto before:block before:h-8 before:w-px before:bg-slate-200 before:dark:bg-darkmode-400"
                            >
                              <div className="flex items-center justify-center">
                                <a className="mr-3 flex items-center" href="#">
                                  <i
                                    data-tw-merge=""
                                    data-lucide="check-square"
                                    className="stroke-1.5 mr-1 h-4 w-4"
                                  />
                                  Edit
                                </a>
                                <a
                                  className="flex items-center text-danger"
                                  href="#"
                                >
                                  <i
                                    data-tw-merge=""
                                    data-lucide="trash"
                                    className="stroke-1.5 mr-1 h-4 w-4"
                                  />
                                  Delete
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr data-tw-merge="" className="intro-x">
                            <td
                              data-tw-merge=""
                              className="px-5 py-3 border-b dark:border-darkmode-300 box w-40 rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600"
                            >
                              <div className="flex">
                                <div className="image-fit zoom-in h-10 w-10">
                                  <img
                                    data-placement="top"
                                    title="Uploaded at 14 December 2022"
                                    src="assetsd/images/fakers/preview-7.jpg"
                                    alt="Midone - Tailwind Admin Dashboard Template"
                                    className="tooltip cursor-pointer rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                                  />
                                </div>
                                <div className="image-fit zoom-in -ml-5 h-10 w-10">
                                  <img
                                    data-placement="top"
                                    title="Uploaded at 4 June 2021"
                                    src="assetsd/images/fakers/profile-4.jpg"
                                    alt="Midone - Tailwind Admin Dashboard Template"
                                    className="tooltip cursor-pointer rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                                  />
                                </div>
                                <div className="image-fit zoom-in -ml-5 h-10 w-10">
                                  <img
                                    data-placement="top"
                                    title="Uploaded at 27 November 2020"
                                    src="assetsd/images/fakers/profile-13.jpg"
                                    alt="Midone - Tailwind Admin Dashboard Template"
                                    className="tooltip cursor-pointer rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                                  />
                                </div>
                              </div>
                            </td>
                            <td
                              data-tw-merge=""
                              className="px-5 py-3 border-b dark:border-darkmode-300 box rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600"
                            >
                              <a
                                className="whitespace-nowrap font-medium"
                                href="#"
                              >
                                Oppo Find X2 Pro
                              </a>
                              <div className="mt-0.5 whitespace-nowrap text-xs text-slate-500">
                                Smartphone &amp; Tablet
                              </div>
                            </td>
                            <td
                              data-tw-merge=""
                              className="px-5 py-3 border-b dark:border-darkmode-300 box rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600"
                            >
                              51
                            </td>
                            <td
                              data-tw-merge=""
                              className="px-5 py-3 border-b dark:border-darkmode-300 box w-40 rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600"
                            >
                              <div className="flex items-center justify-center text-success">
                                <i
                                  data-tw-merge=""
                                  data-lucide="check-square"
                                  className="stroke-1.5 mr-2 h-4 w-4"
                                />
                                Active
                              </div>
                            </td>
                            <td
                              data-tw-merge=""
                              className="px-5 py-3 border-b dark:border-darkmode-300 box w-56 rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600 before:absolute before:inset-y-0 before:left-0 before:my-auto before:block before:h-8 before:w-px before:bg-slate-200 before:dark:bg-darkmode-400"
                            >
                              <div className="flex items-center justify-center">
                                <a className="mr-3 flex items-center" href="#">
                                  <i
                                    data-tw-merge=""
                                    data-lucide="check-square"
                                    className="stroke-1.5 mr-1 h-4 w-4"
                                  />
                                  Edit
                                </a>
                                <a
                                  className="flex items-center text-danger"
                                  href="#"
                                >
                                  <i
                                    data-tw-merge=""
                                    data-lucide="trash"
                                    className="stroke-1.5 mr-1 h-4 w-4"
                                  />
                                  Delete
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr data-tw-merge="" className="intro-x">
                            <td
                              data-tw-merge=""
                              className="px-5 py-3 border-b dark:border-darkmode-300 box w-40 rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600"
                            >
                              <div className="flex">
                                <div className="image-fit zoom-in h-10 w-10">
                                  <img
                                    data-placement="top"
                                    title="Uploaded at 11 May 2020"
                                    src="assetsd/images/fakers/preview-10.jpg"
                                    alt="Midone - Tailwind Admin Dashboard Template"
                                    className="tooltip cursor-pointer rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                                  />
                                </div>
                                <div className="image-fit zoom-in -ml-5 h-10 w-10">
                                  <img
                                    data-placement="top"
                                    title="Uploaded at 23 August 2021"
                                    src="assetsd/images/fakers/profile-1.jpg"
                                    alt="Midone - Tailwind Admin Dashboard Template"
                                    className="tooltip cursor-pointer rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                                  />
                                </div>
                                <div className="image-fit zoom-in -ml-5 h-10 w-10">
                                  <img
                                    data-placement="top"
                                    title="Uploaded at 10 July 2020"
                                    src="assetsd/images/fakers/profile-10.jpg"
                                    alt="Midone - Tailwind Admin Dashboard Template"
                                    className="tooltip cursor-pointer rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                                  />
                                </div>
                              </div>
                            </td>
                            <td
                              data-tw-merge=""
                              className="px-5 py-3 border-b dark:border-darkmode-300 box rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600"
                            >
                              <a
                                className="whitespace-nowrap font-medium"
                                href="#"
                              >
                                Samsung Galaxy S20 Ultra
                              </a>
                              <div className="mt-0.5 whitespace-nowrap text-xs text-slate-500">
                                Smartphone &amp; Tablet
                              </div>
                            </td>
                            <td
                              data-tw-merge=""
                              className="px-5 py-3 border-b dark:border-darkmode-300 box rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600"
                            >
                              141
                            </td>
                            <td
                              data-tw-merge=""
                              className="px-5 py-3 border-b dark:border-darkmode-300 box w-40 rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600"
                            >
                              <div className="flex items-center justify-center text-success">
                                <i
                                  data-tw-merge=""
                                  data-lucide="check-square"
                                  className="stroke-1.5 mr-2 h-4 w-4"
                                />
                                Active
                              </div>
                            </td>
                            <td
                              data-tw-merge=""
                              className="px-5 py-3 border-b dark:border-darkmode-300 box w-56 rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600 before:absolute before:inset-y-0 before:left-0 before:my-auto before:block before:h-8 before:w-px before:bg-slate-200 before:dark:bg-darkmode-400"
                            >
                              <div className="flex items-center justify-center">
                                <a className="mr-3 flex items-center" href="#">
                                  <i
                                    data-tw-merge=""
                                    data-lucide="check-square"
                                    className="stroke-1.5 mr-1 h-4 w-4"
                                  />
                                  Edit
                                </a>
                                <a
                                  className="flex items-center text-danger"
                                  href="#"
                                >
                                  <i
                                    data-tw-merge=""
                                    data-lucide="trash"
                                    className="stroke-1.5 mr-1 h-4 w-4"
                                  />
                                  Delete
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr data-tw-merge="" className="intro-x">
                            <td
                              data-tw-merge=""
                              className="px-5 py-3 border-b dark:border-darkmode-300 box w-40 rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600"
                            >
                              <div className="flex">
                                <div className="image-fit zoom-in h-10 w-10">
                                  <img
                                    data-placement="top"
                                    title="Uploaded at 21 August 2022"
                                    src="assetsd/images/fakers/preview-11.jpg"
                                    alt="Midone - Tailwind Admin Dashboard Template"
                                    className="tooltip cursor-pointer rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                                  />
                                </div>
                                <div className="image-fit zoom-in -ml-5 h-10 w-10">
                                  <img
                                    data-placement="top"
                                    title="Uploaded at 30 January 2021"
                                    src="assetsd/images/fakers/profile-3.jpg"
                                    alt="Midone - Tailwind Admin Dashboard Template"
                                    className="tooltip cursor-pointer rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                                  />
                                </div>
                                <div className="image-fit zoom-in -ml-5 h-10 w-10">
                                  <img
                                    data-placement="top"
                                    title="Uploaded at 9 May 2021"
                                    src="assetsd/images/fakers/profile-14.jpg"
                                    alt="Midone - Tailwind Admin Dashboard Template"
                                    className="tooltip cursor-pointer rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                                  />
                                </div>
                              </div>
                            </td>
                            <td
                              data-tw-merge=""
                              className="px-5 py-3 border-b dark:border-darkmode-300 box rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600"
                            >
                              <a
                                className="whitespace-nowrap font-medium"
                                href="#"
                              >
                                Sony A7 III
                              </a>
                              <div className="mt-0.5 whitespace-nowrap text-xs text-slate-500">
                                Photography
                              </div>
                            </td>
                            <td
                              data-tw-merge=""
                              className="px-5 py-3 border-b dark:border-darkmode-300 box rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600"
                            >
                              50
                            </td>
                            <td
                              data-tw-merge=""
                              className="px-5 py-3 border-b dark:border-darkmode-300 box w-40 rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600"
                            >
                              <div className="flex items-center justify-center text-success">
                                <i
                                  data-tw-merge=""
                                  data-lucide="check-square"
                                  className="stroke-1.5 mr-2 h-4 w-4"
                                />
                                Active
                              </div>
                            </td>
                            <td
                              data-tw-merge=""
                              className="px-5 py-3 border-b dark:border-darkmode-300 box w-56 rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600 before:absolute before:inset-y-0 before:left-0 before:my-auto before:block before:h-8 before:w-px before:bg-slate-200 before:dark:bg-darkmode-400"
                            >
                              <div className="flex items-center justify-center">
                                <a className="mr-3 flex items-center" href="#">
                                  <i
                                    data-tw-merge=""
                                    data-lucide="check-square"
                                    className="stroke-1.5 mr-1 h-4 w-4"
                                  />
                                  Edit
                                </a>
                                <a
                                  className="flex items-center text-danger"
                                  href="#"
                                >
                                  <i
                                    data-tw-merge=""
                                    data-lucide="trash"
                                    className="stroke-1.5 mr-1 h-4 w-4"
                                  />
                                  Delete
                                </a>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="intro-y mt-3 flex flex-wrap items-center sm:flex-row sm:flex-nowrap">
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
                  </div>
                  {/* END: Weekly Top Products */}
                </div>
              </div>
              <div className="col-span-12 2xl:col-span-3">
                <div className="-mb-10 pb-10 2xl:border-l">
                  <div className="grid grid-cols-12 gap-x-6 gap-y-6 2xl:gap-x-0 2xl:pl-6">
                    {/* BEGIN: Important Notes */}
                    <div className="col-span-12 mt-3 md:col-span-6 xl:col-span-12 2xl:mt-8">
                      <div className="intro-x flex h-10 items-center">
                        <h2 className="mr-auto truncate text-lg font-medium">
                          Important Notes
                        </h2>
                        <button
                          data-tw-merge=""
                          data-carousel="important-notes"
                          data-target="prev"
                          className="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed tiny-slider-navigator mr-2 border-slate-300 px-2 text-slate-600 dark:text-slate-300"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="chevron-left"
                            className="stroke-1.5 h-4 w-4"
                          />
                        </button>
                        <button
                          data-tw-merge=""
                          data-carousel="important-notes"
                          data-target="next"
                          className="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed tiny-slider-navigator mr-2 border-slate-300 px-2 text-slate-600 dark:text-slate-300"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="chevron-right"
                            className="stroke-1.5 h-4 w-4"
                          />
                        </button>
                      </div>
                      <div className="intro-x mt-5">
                        <div className="box zoom-in">
                          <div
                            data-config=""
                            id="important-notes"
                            className="tiny-slider"
                          >
                            <div className="p-5">
                              <div className="truncate text-base font-medium">
                                Lorem Ipsum is simply dummy text
                              </div>
                              <div className="mt-1 text-slate-400">
                                20 Hours ago
                              </div>
                              <div className="mt-1 text-justify text-slate-500">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s.
                              </div>
                              <div className="mt-5 flex font-medium">
                                <button
                                  data-tw-merge=""
                                  type="button"
                                  className="transition duration-200 border shadow-sm inline-flex items-center justify-center rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-secondary/70 border-secondary/70 text-slate-500 dark:border-darkmode-400 dark:bg-darkmode-400 dark:text-slate-300 [&:hover:not(:disabled)]:bg-slate-100 [&:hover:not(:disabled)]:border-slate-100 [&:hover:not(:disabled)]:dark:border-darkmode-300/80 [&:hover:not(:disabled)]:dark:bg-darkmode-300/80 px-2 py-1"
                                >
                                  View Notes
                                </button>
                                <button
                                  data-tw-merge=""
                                  type="button"
                                  className="transition duration-200 border shadow-sm inline-flex items-center justify-center rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed border-secondary text-slate-500 dark:border-darkmode-100/40 dark:text-slate-300 [&:hover:not(:disabled)]:bg-secondary/20 [&:hover:not(:disabled)]:dark:bg-darkmode-100/10 ml-auto px-2 py-1"
                                >
                                  Dismiss
                                </button>
                              </div>
                            </div>
                            
                            <div className="p-5">
                              <div className="truncate text-base font-medium">
                                Lorem Ipsum is simply dummy text
                              </div>
                              <div className="mt-1 text-slate-400">
                                20 Hours ago
                              </div>
                              <div className="mt-1 text-justify text-slate-500">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s.
                              </div>
                              <div className="mt-5 flex font-medium">
                                <button
                                  data-tw-merge=""
                                  type="button"
                                  className="transition duration-200 border shadow-sm inline-flex items-center justify-center rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-secondary/70 border-secondary/70 text-slate-500 dark:border-darkmode-400 dark:bg-darkmode-400 dark:text-slate-300 [&:hover:not(:disabled)]:bg-slate-100 [&:hover:not(:disabled)]:border-slate-100 [&:hover:not(:disabled)]:dark:border-darkmode-300/80 [&:hover:not(:disabled)]:dark:bg-darkmode-300/80 px-2 py-1"
                                >
                                  View Notes
                                </button>
                                <button
                                  data-tw-merge=""
                                  type="button"
                                  className="transition duration-200 border shadow-sm inline-flex items-center justify-center rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed border-secondary text-slate-500 dark:border-darkmode-100/40 dark:text-slate-300 [&:hover:not(:disabled)]:bg-secondary/20 [&:hover:not(:disabled)]:dark:bg-darkmode-100/10 ml-auto px-2 py-1"
                                >
                                  Dismiss
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* END: Important Notes */}

                    {/* BEGIN: Schedules */}
                    <div className="col-span-12 mt-3 md:col-span-6 xl:col-span-4 xl:col-start-1 xl:row-start-2 2xl:col-span-12 2xl:col-start-auto 2xl:row-start-auto">
                      <div className="intro-x flex h-10 items-center">
                        <h2 className="mr-5 truncate text-lg font-medium">
                          Schedules
                        </h2>
                        <a
                          className="ml-auto flex items-center truncate text-primary"
                          href="#"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="plus"
                            className="stroke-1.5 mr-1 h-4 w-4"
                          />
                          Add New Schedules
                        </a>
                      </div>
                      <div className="mt-5">
                        <div className="intro-x box">
                          <div className="p-5">
                            <div className="flex">
                              <i
                                data-tw-merge=""
                                data-lucide="chevron-left"
                                className="stroke-1.5 w-5 h-5 text-slate-500"
                              />
                              <div className="mx-auto text-base font-medium">
                                April
                              </div>
                              <i
                                data-tw-merge=""
                                data-lucide="chevron-right"
                                className="stroke-1.5 w-5 h-5 text-slate-500"
                              />
                            </div>
                            <div className="mt-5 grid grid-cols-7 gap-4 text-center">
                              <div className="font-medium">Su</div>
                              <div className="font-medium">Mo</div>
                              <div className="font-medium">Tu</div>
                              <div className="font-medium">We</div>
                              <div className="font-medium">Th</div>
                              <div className="font-medium">Fr</div>
                              <div className="font-medium">Sa</div>
                              <div className="relative rounded py-0.5 text-slate-500">
                                29
                              </div>
                              <div className="relative rounded py-0.5 text-slate-500">
                                30
                              </div>
                              <div className="relative rounded py-0.5 text-slate-500">
                                31
                              </div>
                              <div className="relative rounded py-0.5">1</div>
                              <div className="relative rounded py-0.5">2</div>
                              <div className="relative rounded py-0.5">3</div>
                              <div className="relative rounded py-0.5">4</div>
                              <div className="relative rounded py-0.5">5</div>
                              <div className="relative rounded bg-success/20 py-0.5 dark:bg-success/30">
                                6
                              </div>
                              <div className="relative rounded py-0.5">7</div>
                              <div className="relative rounded bg-primary py-0.5 text-white">
                                8
                              </div>
                              <div className="relative rounded py-0.5">9</div>
                              <div className="relative rounded py-0.5">10</div>
                              <div className="relative rounded py-0.5">11</div>
                              <div className="relative rounded py-0.5">12</div>
                              <div className="relative rounded py-0.5">13</div>
                              <div className="relative rounded py-0.5">14</div>
                              <div className="relative rounded py-0.5">15</div>
                              <div className="relative rounded py-0.5">16</div>
                              <div className="relative rounded py-0.5">17</div>
                              <div className="relative rounded py-0.5">18</div>
                              <div className="relative rounded py-0.5">19</div>
                              <div className="relative rounded py-0.5">20</div>
                              <div className="relative rounded py-0.5">21</div>
                              <div className="relative rounded py-0.5">22</div>
                              <div className="relative rounded bg-pending/20 py-0.5 dark:bg-pending/30">
                                23
                              </div>
                              <div className="relative rounded py-0.5">24</div>
                              <div className="relative rounded py-0.5">25</div>
                              <div className="relative rounded py-0.5">26</div>
                              <div className="relative rounded bg-primary/10 py-0.5 dark:bg-primary/50">
                                27
                              </div>
                              <div className="relative rounded py-0.5">28</div>
                              <div className="relative rounded py-0.5">29</div>
                              <div className="relative rounded py-0.5">30</div>
                              <div className="relative rounded py-0.5 text-slate-500">
                                1
                              </div>
                              <div className="relative rounded py-0.5 text-slate-500">
                                2
                              </div>
                              <div className="relative rounded py-0.5 text-slate-500">
                                3
                              </div>
                              <div className="relative rounded py-0.5 text-slate-500">
                                4
                              </div>
                              <div className="relative rounded py-0.5 text-slate-500">
                                5
                              </div>
                              <div className="relative rounded py-0.5 text-slate-500">
                                6
                              </div>
                              <div className="relative rounded py-0.5 text-slate-500">
                                7
                              </div>
                              <div className="relative rounded py-0.5 text-slate-500">
                                8
                              </div>
                              <div className="relative rounded py-0.5 text-slate-500">
                                9
                              </div>
                            </div>
                          </div>
                          <div className="border-t border-slate-200/60 p-5">
                            <div className="flex items-center">
                              <div className="mr-3 h-2 w-2 rounded-full bg-pending" />
                              <span className="truncate">UI/UX Workshop</span>
                              <span className="font-medium xl:ml-auto">
                                23th
                              </span>
                            </div>
                            <div className="mt-4 flex items-center">
                              <div className="mr-3 h-2 w-2 rounded-full bg-primary" />
                              <span className="truncate">
                                {" "}
                                VueJs Frontend Development{" "}
                              </span>
                              <span className="font-medium xl:ml-auto">
                                10th
                              </span>
                            </div>
                            <div className="mt-4 flex items-center">
                              <div className="mr-3 h-2 w-2 rounded-full bg-warning" />
                              <span className="truncate">Laravel Rest API</span>
                              <span className="font-medium xl:ml-auto">
                                31th
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* END: Schedules */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END: Content */}
        </div>
      </div>
    </div>
    // </div>
  );
}
