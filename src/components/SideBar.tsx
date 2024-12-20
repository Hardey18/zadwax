/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment, useState } from "react";
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  Cog6ToothIcon,
  InformationCircleIcon,
  HomeIcon,
  XMarkIcon,
  StarIcon,
  ClockIcon,
  FolderIcon,
} from "@heroicons/react/24/outline";
import { Link, Outlet } from "react-router-dom";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const SideBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const url = window.location.pathname;

  const allNav = [
    {
      name: "Home",
      href: "/",
      icon: HomeIcon,
      current: url === "/" ? true : false,
    },
    {
      name: "Recent",
      href: "/recent",
      icon: ClockIcon,
      current: url === "/recent" ? true : false,
    },
    {
      name: "Starred",
      href: "/starred",
      icon: StarIcon,
      current: url === "/starred" ? true : false,
    },
  ];
  const secondNav = [
    {
      name: "Projects",
      href: "/projects",
      icon: FolderIcon,
      current: url === "/projects" ? true : false,
    },
  ];

  return (
    <>
      <div>
        <Transition show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <TransitionChild
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-purple-200/80" />
            </TransitionChild>

            <div className="fixed inset-0 flex">
              <TransitionChild
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <DialogPanel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <TransitionChild
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </TransitionChild>
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4 ring-1 ring-white/10">
                    <div className="flex h-16 shrink-0 items-center">
                      <img
                        className="h-8 w-auto"
                        src="./logo.svg"
                        alt="Your Company"
                      />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {allNav.map((item: any) => (
                              <li key={item.name}>
                                <Link
                                  to={item.href}
                                  onClick={() => setSidebarOpen(false)}
                                  className={classNames(
                                    item.current
                                      ? "bg-[#F0EBFC] text-[#4A24A1]"
                                      : "text-[#344054] hover:text-[#344054] hover:bg-[#F0EBFC]",
                                    "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                  )}
                                >
                                  <item.icon
                                    className="h-6 w-6 shrink-0"
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li>
                          <ul role="list" className="-mx-2 mt-2 space-y-1">
                            {secondNav.map((item: any) => (
                              <li key={item.name}>
                                <Link
                                  to={item.href}
                                  onClick={() => setSidebarOpen(false)}
                                  className={classNames(
                                    item.current
                                      ? "bg-[#F0EBFC] text-[#4A24A1]"
                                      : "text-[#344054] hover:text-[#344054] hover:bg-[#F0EBFC]",
                                    "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                  )}
                                >
                                  <item.icon
                                    className="h-6 w-6 shrink-0"
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li className="mt-auto">
                          <Link
                            to="/support"
                            onClick={() => setSidebarOpen(false)}
                            className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-[#344054] hover:bg-[#F0EBFC] hover:text-[#344054]"
                          >
                            <InformationCircleIcon
                              className="h-6 w-6 shrink-0"
                              aria-hidden="true"
                            />
                            Support
                          </Link>
                          <Link
                            to="/settings"
                            onClick={() => setSidebarOpen(false)}
                            className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-[#344054] hover:bg-[#F0EBFC] hover:text-[#344054]"
                          >
                            <Cog6ToothIcon
                              className="h-6 w-6 shrink-0"
                              aria-hidden="true"
                            />
                            Settings
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </Dialog>
        </Transition>

        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
              <img className="h-8 w-auto" src="./logo.svg" alt="Your Company" />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {allNav.map((item: any) => {
                      return (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-[#F0EBFC] text-[#4A24A1]"
                                : "text-[#344054] hover:text-[#344054] hover:bg-[#F0EBFC]",
                              "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                            )}
                          >
                            <item.icon
                              className="h-6 w-6 shrink-0"
                              aria-hidden="true"
                            />
                            {item.name}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </li>
                <li>
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                    {secondNav.map((item: any) => {
                      return (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-[#F0EBFC] text-[#4A24A1]"
                                : "text-[#344054] hover:text-[#344054] hover:bg-[#F0EBFC]",
                              "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                            )}
                          >
                            <item.icon
                              className="h-6 w-6 shrink-0"
                              aria-hidden="true"
                            />
                            {item.name}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </li>
                <li className="mt-auto">
                  <Link
                    to="/support"
                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-[#344054] hover:text-[#344054] hover:bg-[#F0EBFC]"
                  >
                    <InformationCircleIcon
                      className="h-6 w-6 shrink-0"
                      aria-hidden="true"
                    />
                    Support
                  </Link>
                  <Link
                    to="/settings"
                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-[#344054] hover:text-[#344054] hover:bg-[#F0EBFC]"
                  >
                    <Cog6ToothIcon
                      className="h-6 w-6 shrink-0"
                      aria-hidden="true"
                    />
                    Settings
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-72">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-[#EAECF0] bg-white px-4 sm:gap-x-6 sm:px-6 lg:px-8">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-purple-700 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            <div
              className="h-6 w-px bg-purple-900/10 lg:hidden"
              aria-hidden="true"
            />

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <div className="relative flex flex-1 items-center font-semibold leading-6 text-purple-900 text-1xl lg:text-2xl">
                {" "}
              </div>
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <button type="button" className="-m-2.5 p-2.5 text-[#667085]">
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                <Menu as="div" className="relative">
                  <MenuButton className="-m-1.5 flex items-center p-1.5">
                    <img
                      className="h-8 w-8 rounded-full bg-purple-50"
                      src="./avatar.svg"
                      alt=""
                    />
                  </MenuButton>
                </Menu>
              </div>
            </div>
          </div>

          <main className="p-4 lg:p-8 bg-[#f7f6fb]">
            <div>
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default SideBar;
