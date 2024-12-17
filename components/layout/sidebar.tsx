"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { mockData } from "@/lib/mock-data";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Logo } from "./logo";
import clsx from "clsx";

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={clsx(
        "fixed inset-y-0 left-0 z-10 h-full bg-[#ffffff] border-r border-[rgba(145, 158, 171, 0.24)]  transition-all duration-300 lg:relative",
        isOpen ? "w-[280px] py-5 px-4" : "w-[65px] py-5 px-2",
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-12 -right-3 h-6 w-6 rounded-full border bg-white lg:hidden flex items-center justify-center hover:bg-gray-50"
      >
        {isOpen ? (
          <ChevronLeft className="h-4 w-4" />
        ) : (
          <ChevronRight className="h-4 w-4" />
        )}
      </button>

      <div className="pb-10">
        <Logo />
      </div>

      <nav className="overflow-hidden">
        {mockData.navigation.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "flex items-center gap-4 rounded-lg text-sm font-semibold leading-[22px] mb-1 transition duration-300 ease-in-out",
                isActive
                  ? "bg-[#67ADB9] bg-opacity-8 text-[#578388]"
                  : "text-[#414141] hover:bg-[#67ADB9] hover:bg-opacity-8",
                isOpen ? "px-4 py-[13px]" : "justify-center p-2",
              )}
            >
              <Image
                src={`/assets/icons/${item.icon}.svg`}
                alt={item.label}
                width={22}
                height={22}
              />
              <span
                className={clsx(
                  "transition-all duration-300 ease-in-out min-w-[150px]",
                  !isOpen && "hidden",
                )}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
