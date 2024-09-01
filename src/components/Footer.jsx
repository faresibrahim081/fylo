import Image from "next/image";
import Link from "next/link";
import logo from "@/images/logo.svg";
import map from "@/images/icon-location.svg";
import phone from "@/images/icon-phone.svg";
import email from "@/images/icon-email.svg";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <section className="bg-[#0c1524] text-white pt-[100px] pb-[40px] w-full ">
      <div className="w-5/6 mx-auto">
        <div className="logo mb-9">
          <Link href="/">
            <Image
              priority
              src={logo}
              alt="logo"
              width={120}
              height={120}
              className="object-contain"
            />
          </Link>
        </div>
        <div className="info grid grid-cols-1  cursor-pointer md:grid-cols-2 lg:grid-cols-4 gap-[70px]">
          <div className="first flex gap-2 hover:text-[#5ad5d8] transition-all duration-300">
            <Image src={map} className="w-3 h-4" alt="map" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedits
              vel sunt! Voluptate at incidunt eveniet, doloremque vero
              consequuntur?
            </p>
          </div>
          <div className="second">
            <div className="phone flex gap-2 mb-3 hover:text-[#5ad5d8] transition-all duration-300">
              <Image src={phone} width={15} height={7} alt="phone" />
              <p>(+20) 120 7129 427</p>
            </div>
            <div className="phone flex gap-2 hover:text-[#5ad5d8] transition-all duration-300">
              <Image src={email} width={15} height={7} alt="email" />
              <p>example@fylo.com</p>
            </div>
          </div>
          <div className="third flex gap-[30px]">
            <div>
              <p className="p-1 hover:text-[#5ad5d8] transition-all duration-300">
                About
              </p>
              <p className="p-1 hover:text-[#5ad5d8] transition-all duration-300">
                Jobs
              </p>
              <p className="p-1 hover:text-[#5ad5d8] transition-all duration-300">
                Press
              </p>
              <p className="p-1 hover:text-[#5ad5d8] transition-all duration-300">
                Blog
              </p>
            </div>
            <div>
              <p className="p-1 hover:text-[#5ad5d8] transition-all duration-300">
                Contact Us
              </p>
              <p className="p-1 hover:text-[#5ad5d8] transition-all duration-300">
                Terms
              </p>
              <p className="p-1 hover:text-[#5ad5d8] transition-all duration-300">
                Privacy
              </p>
            </div>
          </div>
          <div className="fourth">
            <ul className="flex gap-4">
              <li>
                <a href="" className="group">
                  {" "}
                  <FaFacebookF className="group-hover:text-[#5ad5d8] size-8 transition-all duration-200" />{" "}
                </a>
              </li>
              <li>
                <a href="" className="group">
                  {" "}
                  <FaTwitter className="group-hover:text-[#5ad5d8] size-8 transition-all duration-200" />{" "}
                </a>
              </li>
              <li>
                <a href="" className="group">
                  {" "}
                  <FaInstagram className="group-hover:text-[#5ad5d8] size-8 transition-all duration-200" />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
