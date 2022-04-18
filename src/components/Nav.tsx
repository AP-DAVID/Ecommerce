import React, { useEffect, useState } from "react";
import "./styles.css";
import { UserIcon, ShoppingCartIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

const Nav: React.FC = () => {

    const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
    const [total, setTotal] = useState<number>(0);
    useEffect(() => {
      if (window.Snipcart) {
        setTotal(window.Snipcart.store.getState().cart.total);
      }
    });



    console.log(total);


  return (
    <nav className="">
      <div className="flex justify-between items-center py-4 lg:py-8 px-7 sm:px-28">
        <div>
          <h2 className="nav___text1 text-lg sm:text-4xl font-medium ">
            Akintola
          </h2>
        </div>

        <div className="hidden lg:inline-flex space-x-6 text-lg cursor-pointer ">
          <h1 className="hover:text-blue-500 hover:scale-105">Shop</h1>
          <h1 className="hover:text-blue-500 hover:scale-105">About</h1>
          <h1 className="hover:text-blue-500 hover:scale-105">Journal</h1>
        </div>

        <div className="flex sm:space-x-3 align-middle items-center cursor-pointer">
          <div className="flex">
            <UserIcon className="h-7 w-7 hover:text-blue-500 hidden lg:inline-flex" />
            <ShoppingCartIcon className="lg:h-7 h-3 w-3 hover:text-blue-500  lg:w-7" />
          </div>

          <span className="snipcart-total-price text-sm sm:text-base">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(total)}
          </span>

          <div className="lg:hidden">
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? (
                <XIcon className="text-blue-500 h-7 w-7 hover:text-red-500" />
              ) : (
                <MenuIcon className="text-black h-7 w-7 hover:text-blue-500" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={
          " items-center lg:hidden bg-slate-100 py-7" +
          (navbarOpen ? " block rounded shadow-lg" : " hidden")
        }
        id="example-navbar-warning"
      >
        <ul className="flex flex-col px-24 lg:flex-row list-none lg:ml-auto">
          <li className="flex items-center px-5">
            <a
              className="text-black hover:text-blue-500  text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              href="#"
            >
              Shop
            </a>
          </li>

          <li className="flex items-center px-5">
            <a
              className="text-black hover:text-blue-500 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              href="#"
            >
              About
            </a>
          </li>

          <li className="flex items-center px-5">
            <a
              className="text-black hover:text-blue-500 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              href="#"
            >
              Journal
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
