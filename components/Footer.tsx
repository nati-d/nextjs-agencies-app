import { NavList } from "@/constants";
import React from "react";
import { FaFacebookF, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 items-center px-2 lg:px-20 py-5 lg:py-10">
        <div>
          <h1 className="font-cursive text-3xl font-bold flex mb-5">
            <h1 className="text-indigo-500">My</h1>Dev
          </h1>
          <p className="text-sm mb-5 font-light">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
        </div>
        <div>
          <h1 className="font-semibold mb-7">Links</h1>
          <ul className="flex-col space-y-3">
            {NavList.map((link) => (
              <li
                key={link.key}
                className="hover:font-bold cursor-pointer text-sm font-light"
              >
                {link.name}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="font-semibold mb-7">Contact Us</h1>
          <p className="text-sm mb-5 font-light">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
          <span>+923183561921</span>
        </div>
        <div className="p-2 flex gap-6 lg:justify-end ">
          <div className="p-3 shadow-lg border rounded-full">
            <FaFacebookF />
          </div>
          <div className="p-3 shadow-lg border rounded-full">
            <FaGithub />
          </div>
          <div className="p-3 shadow-lg border rounded-full">
            <FaTwitter />
          </div>
          <div className="p-3 shadow-lg border rounded-full">
            <FaLinkedin />
          </div>
        </div>
      </div>
      <div className="py-8 border-t-2 w-full">
        <p className="text-center text-xs font-light ">© 2023 Copyright by Nathy(EXOR Technology Solution). All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
