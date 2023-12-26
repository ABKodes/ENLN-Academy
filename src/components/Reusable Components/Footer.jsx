import { MdOutlineCall } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { PiInstagramLogoThin } from "react-icons/pi";
import { PiTelegramLogoThin } from "react-icons/pi";
import { RiFacebookCircleLine } from "react-icons/ri";
import { PiLinkedinLogoLight } from "react-icons/pi";
import { RiTwitterXLine } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <footer className="bg-accent">
      <footer className="mx-auto w-11/12 bg-accent uppercase">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div>
              <p className="font-bold text-secondary">Contact Us</p>

              <div className="mt-5 flex flex-col items-start space-y-2">
                <Link className="text group relative transform leading-5 text-secondary duration-300 dark:text-secondary md:my-0">
                  {" "}
                  <MdOutlineCall className="text-secondary" />
                  <span>+251-925-675</span>
                  <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 transform bg-secondary transition-transform group-hover:scale-x-100"></span>
                </Link>
                <Link className="text group relative transform leading-5 text-secondary duration-300 dark:text-secondary md:my-0">
                  +251-925-675
                  <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 transform bg-secondary transition-transform group-hover:scale-x-100"></span>
                </Link>
                <Link className="text group relative flex transform items-center leading-5 text-secondary duration-300 dark:text-secondary md:my-0">
                  {/* Email icon */}
                  <AiOutlineMail className="text-secondary" />

                  {/* Email address */}
                  <span className="lowercase">
                    enlnacademy@gmail.com
                    <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 transform bg-secondary transition-transform group-hover:scale-x-100"></span>
                  </span>
                </Link>
              </div>
            </div>

            <div>
              <p className="font-bold text-secondary">Our Information</p>

              <div className="mt-5 flex flex-col items-start space-y-2">
                <Link className="text group relative transform leading-5 text-secondary duration-300 dark:text-secondary md:my-0">
                  About us
                  <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 transform bg-secondary transition-transform group-hover:scale-x-100"></span>
                </Link>
                <Link className="text group relative transform leading-5 text-secondary duration-300 dark:text-secondary md:my-0">
                  Help
                  <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 transform bg-secondary transition-transform group-hover:scale-x-100"></span>
                </Link>
                <Link className="text group relative transform leading-5 text-secondary duration-300 dark:text-secondary md:my-0">
                  Privacy and Policy
                  <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 transform bg-secondary transition-transform group-hover:scale-x-100"></span>
                </Link>
                <Link className="text group relative transform leading-5 text-secondary duration-300 dark:text-secondary md:my-0">
                  Terms and Conditions
                  <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 transform bg-secondary transition-transform group-hover:scale-x-100"></span>
                </Link>
              </div>
            </div>

            <div>
              <p className="font-bold text-secondary">Categories</p>

              <div className="mt-5 flex flex-col items-start space-y-2">
                <Link className="text group relative transform leading-5 text-secondary duration-300 dark:text-secondary md:my-0">
                  For individual
                  <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 transform bg-secondary transition-transform group-hover:scale-x-100"></span>
                </Link>
                <Link className="text group relative transform leading-5 text-secondary duration-300 dark:text-secondary md:my-0">
                  For Organization
                  <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 transform bg-secondary transition-transform group-hover:scale-x-100"></span>
                </Link>
                <Link className="text group relative transform leading-5 text-secondary duration-300 dark:text-secondary md:my-0">
                  For Government
                  <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 transform bg-secondary transition-transform group-hover:scale-x-100"></span>
                </Link>
              </div>
            </div>

            <div>
              <p className="font-bold text-secondary">our socials</p>

              <div className="mt-5 flex flex-col items-start space-y-2">
                <div className="grid grid-cols-3 gap-4">
                  {/* First Row */}
                  <div className="wrapper">
                    <a
                      href="https://instagram.com/"
                      target="_instagram"
                      aria-label="A great place to find out what friends are up to!"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="bg">
                        <div className="inner">
                          <FaInstagram className="text-2xl" />
                        </div>
                      </div>
                    </a>
                    <style jsx>{`
                      a {
                        color: #000;
                        margin-right: 10px;
                        position: relative;
                        display: inline-block;
                        font-size: 50px;
                      }

                      .inner {
                        background: #fcfcfc;
                        mix-blend-mode: screen;
                        display: block;
                        width: 43.75px;
                      }

                      .bg {
                        width: calc(100% - 1px);
                        background: #000;
                        text-align: center;
                        display: block;
                        height: 50px;
                        position: relative;
                      }

                      .bg::before {
                        content: "";
                        background: linear-gradient(
                          45deg,
                          #f09433 0%,
                          #e6683c 25%,
                          #dc2743 50%,
                          #cc2366 75%,
                          #bc1888 100%
                        );
                        display: block;
                        position: absolute;
                        top: 0;
                        left: 0;
                        height: 100%;
                        width: 100%;
                        opacity: ${isHovered ? "1" : "0"};
                        transition: 0.3s ease-in-out;
                      }
                    `}</style>
                  </div>

                  <div>
                    <PiTelegramLogoThin className="text-3xl text-secondary" />
                  </div>
                  <div>
                    <RiTwitterXLine className="text-3xl font-light text-secondary" />
                  </div>

                  {/* Second Row */}
                  <div>
                    <RiFacebookCircleLine className="text-3xl text-secondary hover:rounded-full hover:bg-blue-800" />
                  </div>
                  <div>
                    <PiLinkedinLogoLight className="text-3xl text-secondary" />
                  </div>
                  <div>
                    <FaYoutube className="text-3xl text-secondary" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="my-6 border-secondary md:my-10" />

          <div className="flex flex-col items-center justify-between sm:flex-row">
            <a href="#">
              <img
                className="h-10"
                src="/public/footer individual.png"
                alt=""
              />
            </a>

            <p className="mt-4 text-sm text-secondary sm:mt-0">
              © Copyright 2023. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </footer>
  );
};

export default Footer;
