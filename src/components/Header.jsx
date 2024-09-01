"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/images/logo.svg";
import { useEffect, useRef } from "react";

function Header() {
  const headerRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 120) {
        headerRef.current.style.background = "#0c1524";
        headerRef.current.style.padding = "20px 40px";
      } else {
        headerRef.current.style.background = "transparent";
        headerRef.current.style.padding = "60px 40px";
      }
    });
  }, []);

  const links = [
    { id: 1, title: "feature", href: "/feature" },
    { id: 2, title: "team", href: "/team" },
    { id: 3, title: "sign Up", href: "/signup" },
  ];
  return (
    <>
      <header
        ref={headerRef}
        className="flex justify-between items-center text-white sm:gap-0 flex-col sm:flex-row px-[40px] pt-[60px] fixed top-0 left-0 w-full transition-all duration-300 z-50"
      >
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
        <nav>
          <ul className=" flex gap-9">
            {links.map((item) => {
              return (
                <div key={item.id}>
                  <li>
                    <Link
                      href={item.href}
                      className=" opacity-90 hover:opacity-[1] capitalize hover:tracking-[3px] transition-all duration-300"
                    >
                      {" "}
                      {item.title}{" "}
                    </Link>
                  </li>
                </div>
              );
            })}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
