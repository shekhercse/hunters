import Image from "next/image";
import React from "react";
import logo from "../public/logo.png";
const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <Image
                src={logo}
                alt="Picture of the author"
                width={100}
                height={100}
              />
            </a>
            <p className="mt-2 text-sm text-gray-500">
              Shop the latest technologies and innovations
              
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                MENU
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Electronics
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                   Clothing
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Computing
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Digital Services
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              HELP
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Payment Help
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                   Order Help
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                   Refund Help
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Account Help
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                ABOUT US
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    User Data Policies
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                   Security
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                   Privacy
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                   Site Map
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                SOCIAL
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                         Facebook
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                     Twitter                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Youtube
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Instagram
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2020 Hunterstore — All right reserved.
              
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
