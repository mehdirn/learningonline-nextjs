import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
  <nav className="bg-[#ffffff] border-gray-200 dark:bg-gray-900">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="https://flowbite.com/" className="flex items-center">
        <img
          src="/assets/logo.svg"
          className="h-8 mr-3"
          alt="Flowbite Logo"
        />
      </a>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li className='pl-8'>
            <Link
              href="#" 
              className="block py-2 px-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
              aria-current="page"
            >
              خانه
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              درباره ما
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              خدمات ما
            </Link>
          </li>
          <li>
            <Link
              href="/prices"
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              قیمت ها
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              تماس با ما
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    </>

    // <div classNameName=''>
    //     <div classNameName="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
    //         <img src="/assets/logo.svg" alt="logo" />
    //         <div classNameName="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
    //             <p>Courses</p>
    //             <p>About Us</p>
    //             <p>Teacher</p>
    //             <p>Pricing</p>
    //             <p>Careers</p>
    //             <p>Blog</p>
    //         </div>
    //         <button classNameName='btn bg-white text-[#7270dd] border-none hover:bg-[#7270dd] hover:text-white capitalize rounded-full'>
    //             Get Started
    //         </button>
    //     </div>
    // </div> 
  )
}

export default Navbar