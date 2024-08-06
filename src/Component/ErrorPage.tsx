import React from 'react'

export default function ErrorPage() {
  return (
    <div>
        <>
  <div>
    <div
      data-tw-backdrop=""
      aria-hidden="true"
      tabIndex={-1}
      id="theme-switcher"
      className="modal group bg-black/60 transition-[visibility,opacity] w-screen h-screen fixed left-0 top-0 [&:not(.show)]:duration-[0s,0.2s] [&:not(.show)]:delay-[0.2s,0s] [&:not(.show)]:invisible [&:not(.show)]:opacity-0 [&.show]:visible [&.show]:opacity-100 [&.show]:duration-[0s,0.4s]"
    >
      <div
        data-tw-merge=""
        className="w-[90%] ml-auto h-screen flex flex-col bg-white relative shadow-md transition-[margin-right] duration-[0.6s] -mr-[100%] group-[.show]:mr-0 dark:bg-darkmode-600 sm:w-[460px]"
      >
        <a
          className="absolute inset-y-0 left-0 right-auto my-auto -ml-[60px] flex h-8 w-8 items-center justify-center rounded-full border border-white/90 bg-white/5 text-white/90 transition-all hover:rotate-180 hover:scale-105 hover:bg-white/10 focus:outline-none sm:-ml-[105px] sm:h-14 sm:w-14"
          data-tw-dismiss="modal"
          href="javascript:;"
        >
          <i
            data-tw-merge=""
            data-lucide="x"
            className="h-3 w-3 stroke-[1] sm:h-8 sm:w-8"
          />
        </a>
        <div data-tw-merge="" className="overflow-y-auto flex-1 p-0">
          <div className="flex flex-col">
            <div className="px-8 pb-8 pt-6">
              <div className="text-base font-medium">Themes</div>
              <div className="mt-0.5 text-slate-500">Choose your theme</div>
              <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-3.5">
                <div>
                  <a
                    href="rubick-side-menu-dashboard-overview-1-page.html"
                    className="h-28 cursor-pointer bg-slate-50 box p-1 block border-2 border-theme-1/60"
                  >
                    <div className="image-fit h-full w-full overflow-hidden rounded-md">
                      <img
                        className="h-full w-full"
                        src="src/assetsd/images/themes/rubick.png"
                        alt="Midone - Admin Dashboard Template"
                      />
                    </div>
                  </a>
                  <div className="mt-2.5 text-center text-xs capitalize">
                    rubick
                  </div>
                </div>
                <div>
                  <a
                    href="icewall-side-menu-dashboard-overview-1-page.html"
                    className="h-28 cursor-pointer bg-slate-50 box p-1 block"
                  >
                    <div className="image-fit h-full w-full overflow-hidden rounded-md">
                      <img
                        className="h-full w-full"
                        src="src/assetsd/images/themes/icewall.png"
                        alt="Midone - Admin Dashboard Template"
                      />
                    </div>
                  </a>
                  <div className="mt-2.5 text-center text-xs capitalize">
                    icewall
                  </div>
                </div>
                <div>
                  <a
                    href="tinker-side-menu-dashboard-overview-1-page.html"
                    className="h-28 cursor-pointer bg-slate-50 box p-1 block"
                  >
                    <div className="image-fit h-full w-full overflow-hidden rounded-md">
                      <img
                        className="h-full w-full"
                        src="src/assetsd/images/themes/tinker.png"
                        alt="Midone - Admin Dashboard Template"
                      />
                    </div>
                  </a>
                  <div className="mt-2.5 text-center text-xs capitalize">
                    tinker
                  </div>
                </div>
                <div>
                  <a
                    href="enigma-side-menu-dashboard-overview-1-page.html"
                    className="h-28 cursor-pointer bg-slate-50 box p-1 block"
                  >
                    <div className="image-fit h-full w-full overflow-hidden rounded-md">
                      <img
                        className="h-full w-full"
                        src="src/assetsd/images/themes/enigma.png"
                        alt="Midone - Admin Dashboard Template"
                      />
                    </div>
                  </a>
                  <div className="mt-2.5 text-center text-xs capitalize">
                    enigma
                  </div>
                </div>
              </div>
            </div>
            <div className="border-b border-dashed" />
            <div className="px-8 pb-8 pt-6">
              <div className="text-base font-medium">Layouts</div>
              <div className="mt-0.5 text-slate-500">Choose your layout</div>
              <div className="mt-5 grid grid-cols-3 gap-x-5 gap-y-3.5">
                <div>
                  <a
                    href="rubick-side-menu-dashboard-overview-1-page.html"
                    className="h-24 cursor-pointer bg-slate-50 box p-1 block border-2 border-theme-1/60"
                  >
                    <div className="h-full w-full overflow-hidden rounded-md">
                      <img
                        className="h-full w-full"
                        src="src/assetsd/images/layouts/side-menu.png"
                        alt="Midone - Admin Dashboard Template"
                      />
                    </div>
                  </a>
                  <div className="mt-2.5 text-center text-xs capitalize">
                    side menu
                  </div>
                </div>
                <div>
                  <a
                    href="rubick-simple-menu-dashboard-overview-1-page.html"
                    className="h-24 cursor-pointer bg-slate-50 box p-1 block"
                  >
                    <div className="h-full w-full overflow-hidden rounded-md">
                      <img
                        className="h-full w-full"
                        src="src/assetsd/images/layouts/simple-menu.png"
                        alt="Midone - Admin Dashboard Template"
                      />
                    </div>
                  </a>
                  <div className="mt-2.5 text-center text-xs capitalize">
                    simple menu
                  </div>
                </div>
                <div>
                  <a
                    href="rubick-top-menu-dashboard-overview-1-page.html"
                    className="h-24 cursor-pointer bg-slate-50 box p-1 block"
                  >
                    <div className="h-full w-full overflow-hidden rounded-md">
                      <img
                        className="h-full w-full"
                        src="src/assetsd/images/layouts/top-menu.png"
                        alt="Midone - Admin Dashboard Template"
                      />
                    </div>
                  </a>
                  <div className="mt-2.5 text-center text-xs capitalize">
                    top menu
                  </div>
                </div>
              </div>
            </div>
            <div className="border-b border-dashed" />
            <div className="px-8 pb-8 pt-6">
              <div className="text-base font-medium">Accent Colors</div>
              <div className="mt-0.5 text-slate-500">
                Choose your accent color
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3.5">
                <div>
                  <a
                    data-theme-color="default"
                    className="h-14 cursor-pointer bg-slate-50 box p-1 border-slate-300/80 block [&.active]:border-2 [&.active]:border-theme-1/60"
                  >
                    <div className="h-full overflow-hidden rounded-md">
                      <div className="-mx-2 flex h-full items-center gap-1">
                        <div className="w-1/2 h-[200%] bg-theme-1 rotate-12 default" />
                        <div className="w-1/2 h-[200%] bg-theme-2 rotate-12 default" />
                      </div>
                    </div>
                  </a>
                </div>
                <div>
                  <a
                    data-theme-color="theme-1"
                    className="h-14 cursor-pointer bg-slate-50 box p-1 border-slate-300/80 block [&.active]:border-2 [&.active]:border-theme-1/60"
                  >
                    <div className="h-full overflow-hidden rounded-md">
                      <div className="-mx-2 flex h-full items-center gap-1">
                        <div className="w-1/2 h-[200%] bg-theme-1 rotate-12 theme-1" />
                        <div className="w-1/2 h-[200%] bg-theme-2 rotate-12 theme-1" />
                      </div>
                    </div>
                  </a>
                </div>
                <div>
                  <a
                    data-theme-color="theme-2"
                    className="h-14 cursor-pointer bg-slate-50 box p-1 border-slate-300/80 block [&.active]:border-2 [&.active]:border-theme-1/60"
                  >
                    <div className="h-full overflow-hidden rounded-md">
                      <div className="-mx-2 flex h-full items-center gap-1">
                        <div className="w-1/2 h-[200%] bg-theme-1 rotate-12 theme-2" />
                        <div className="w-1/2 h-[200%] bg-theme-2 rotate-12 theme-2" />
                      </div>
                    </div>
                  </a>
                </div>
                <div>
                  <a
                    data-theme-color="theme-3"
                    className="h-14 cursor-pointer bg-slate-50 box p-1 border-slate-300/80 block [&.active]:border-2 [&.active]:border-theme-1/60"
                  >
                    <div className="h-full overflow-hidden rounded-md">
                      <div className="-mx-2 flex h-full items-center gap-1">
                        <div className="w-1/2 h-[200%] bg-theme-1 rotate-12 theme-3" />
                        <div className="w-1/2 h-[200%] bg-theme-2 rotate-12 theme-3" />
                      </div>
                    </div>
                  </a>
                </div>
                <div>
                  <a
                    data-theme-color="theme-4"
                    className="h-14 cursor-pointer bg-slate-50 box p-1 border-slate-300/80 block [&.active]:border-2 [&.active]:border-theme-1/60"
                  >
                    <div className="h-full overflow-hidden rounded-md">
                      <div className="-mx-2 flex h-full items-center gap-1">
                        <div className="w-1/2 h-[200%] bg-theme-1 rotate-12 theme-4" />
                        <div className="w-1/2 h-[200%] bg-theme-2 rotate-12 theme-4" />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="border-b border-dashed" />
            <div className="px-8 pb-8 pt-6">
              <div className="text-base font-medium">Appearance</div>
              <div className="mt-0.5 text-slate-500">
                Choose your appearance
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3.5">
                <div>
                  <a
                    data-appearance-mode="light"
                    className="h-12 cursor-pointer bg-slate-50 box p-1 border-slate-300/80 block [&.active]:border-2 [&.active]:border-theme-1/60"
                  >
                    <div className="h-full overflow-hidden rounded-md bg-slate-200" />
                  </a>
                  <div className="mt-2.5 text-center text-xs capitalize">
                    Light
                  </div>
                </div>
                <div>
                  <a
                    data-appearance-mode="dark"
                    className="h-12 cursor-pointer bg-slate-50 box p-1 border-slate-300/80 block [&.active]:border-2 [&.active]:border-theme-1/60"
                  >
                    <div className="h-full overflow-hidden rounded-md bg-slate-900" />
                  </a>
                  <div className="mt-2.5 text-center text-xs capitalize">
                    Dark
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      className="fixed bottom-0 right-0 z-50 mb-5 mr-5 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-theme-1 text-white shadow-lg"
      data-tw-toggle="modal"
      data-tw-target="#theme-switcher"
    >
      <i
        data-tw-merge=""
        data-lucide="settings"
        className="stroke-1.5 w-5 h-5 animate-spin"
      />
    </div>
  </div>
  <div className="py-2 bg-gradient-to-b from-theme-1 to-theme-2 dark:from-darkmode-800 dark:to-darkmode-800">
    <div className="container">
      {/* BEGIN: Error Page */}
      <div className="flex flex-col items-center justify-center h-screen text-center error-page lg:flex-row lg:text-left">
        <div className="-intro-x lg:mr-20">
          <img
            className="h-48 w-[450px] lg:h-auto"
            src="src/assetsd/images/error-illustration.svg"
            alt="Midone - Tailwind Admin Dashboard Template"
          />
        </div>
        <div className="mt-10 text-white lg:mt-0">
          <div className="font-medium intro-x text-8xl">404</div>
          <div className="mt-5 text-xl font-medium intro-x lg:text-3xl">
            Oops. This page has gone missing.
          </div>
          <div className="mt-3 text-lg intro-x">
            You may have mistyped the address or the page may have moved.
          </div>
          <button
            data-tw-merge=""
            className="transition duration-200 border shadow-sm inline-flex items-center justify-center rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed px-4 py-3 mt-10 text-white border-white intro-x dark:border-darkmode-400 dark:text-slate-200"
          >
            Back to Home
          </button>
        </div>
      </div>
      {/* END: Error Page */}
    </div>
  </div>
</>

    </div>
  )
}
