import React, { useEffect, useState } from "react";
import { PiPhonePlusThin } from "react-icons/pi";
import { CiMail } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {

  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    const year = new Date().getFullYear();
    setCurrentYear(year);
  }, []);

  return (
    <div className="min-h-[40vh] bg-[#001014]">
      <div className="grid grid-cols-1 px-2 py-5 pt-10 text-[#B3CBD0] sm:px-4 md:grid-cols-2 md:px-12 lg:grid-cols-4 lg:px-20">
        <div className="flex flex-col items-start justify-start gap-4">
          <p className="amib py-3 text-center text-[16px] font-semibold md:text-[18px] lg:text-[20px] xl:text-[24px] xl:font-light">
            CONTACT US
          </p>
          <div className="flex gap-3 text-[#B3CBD0]">
            <div>
              <PiPhonePlusThin
                size={50}
                className="font-light text-[#025464]"
              />
            </div>
            <div>
              <p className="border-[#B3CBD0] font-normal duration-500 ease-in hover:border-b-[1px]">
                +2519781684
              </p>
              <p className="border-[#B3CBD0] pt-1 text-[14px] font-normal duration-500 ease-in hover:border-b-[1px]">
                +2519781684
              </p>
            </div>
          </div>
          <div className="mt-5 flex items-center justify-center gap-3">
            <div>
              <CiMail size={50} className="font-light text-[#025464]" />
            </div>
            <div>
              <p className="text-[14px] font-normal">enln@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-4">
          <p className="amib py-3 text-center text-[16px] font-semibold md:text-[18px] lg:text-[20px] xl:text-[24px] xl:font-light">
            OUR INFORMATION
          </p>
          <p className="border-[#B3CBD0] text-[14px] font-medium duration-500 ease-in hover:border-b-[1px]">
            ABOUT US
          </p>
          <p className="mt-1 border-[#B3CBD0] text-[14px] font-medium duration-500 ease-in hover:border-b-[1px]">
            HELP
          </p>
          <p className="mt-1 border-[#B3CBD0] text-[14px] font-medium duration-500 ease-in hover:border-b-[1px]">
            PRIVACY
          </p>
          <p className="mt-1 border-[#B3CBD0] text-[14px] font-medium duration-500 ease-in hover:border-b-[1px]">
            TERMS AND CONDITIONS
          </p>
        </div>
        <div className="flex flex-col items-start justify-start gap-4">
          <p className="amib py-3 text-center text-[16px] font-semibold md:text-[18px] lg:text-[20px] xl:text-[24px] xl:font-light">
            CATAGORIES
          </p>
          <p className="border-[#B3CBD0] text-[14px] font-medium duration-500 ease-in hover:border-b-[1px]">
            FOR INDIVIDUALS
          </p>
          <p className="mt-1 border-[#B3CBD0] text-[14px] font-medium duration-500 ease-in hover:border-b-[1px]">
            FOR GOVERNMENT
          </p>
          <p className="mt-1 border-[#B3CBD0] text-[14px] font-medium duration-500 ease-in hover:border-b-[1px]">
            FOR UNIVERSITY
          </p>
        </div>
        <div className="flex flex-col items-start justify-start gap-4">
          <p className="amib ml-3 py-3 text-center text-[16px] font-semibold md:text-[18px] lg:text-[20px] xl:text-[24px] xl:font-light">
            FOLLOW US
          </p>
          <div className="-mt-4 ml-5 flex flex-col items-center justify-center gap-2">
            <div className="flex gap-2">
              <FaInstagramSquare size={30} className="mx-2 text-[#025464]" />
              <FaTelegram size={30} className="mx-2 text-[#025464]" />
              <FaTwitter size={30} className="mx-2 text-[#025464]" />
            </div>
            <div className="flex gap-2">
              <FaFacebook size={30} className="mx-2 text-[#025464]" />
              <FaLinkedin size={30} className="mx-2 text-[#025464]" />
              <FaYoutube size={30} className="mx-2 text-[#025464]" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
