"use client";

import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";
import { mockData } from "@/lib/mock-data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export function UserNav() {
  const pathname = usePathname();
  const { name, email, nav } = mockData.user;
  const [firstName, lastName] = name.split(" ");
  const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`;

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="flex items-center gap-3 hover:bg-[#67ADB9] hover:bg-opacity-8 outline-none px-3 py-2 rounded-lg">
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#67ADB9] bg-opacity-8">
            <span className=" text-[#578388] text-[14px] leading-[22px] font-semibold">
              {initials}
            </span>
          </div>
          <span className="hidden md:inline text-[14px] text-[#414141] leading-[22px] font-semibold">
            {name}
          </span>
          <ChevronDown className="h-4 w-4 text-[#67ADB9]" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="center"
          sideOffset={16}
          className="bg-white rounded-2xl w-[220px] mr-2"
          style={{
            boxShadow: "-20px 20px 40px -4px #919EAB",
          }}
        >
          <div className="pt-4 px-5 pb-[17px]">
            <p className="text-[16px] leading-[24px] text-[#414141] font-semibold">
              {name}
            </p>
            <p className="text-[14px] leading-[22px] text-[#747474] font-normal">
              {email}
            </p>
          </div>

          {nav.map((item) => {
            const isActive = pathname === item.url;
            return (
              <DropdownMenu.Item
                className="border-t border-[#9D9D9D] border-opacity-24 p-2 outline-none"
                key={item.title}
              >
                <Link href={`${item.url}`}>
                  <span
                    className={clsx(
                      "block text-[16px] leading-[24px] text-[#414141] font-normal py-2 px-4 cursor-pointer rounded-lg hover:bg-[#f7f7f7] transition ease-in-out duration-300",
                      isActive && "bg-[#f7f7f7]",
                    )}
                  >
                    {item.title}
                  </span>
                </Link>
              </DropdownMenu.Item>
            );
          })}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
