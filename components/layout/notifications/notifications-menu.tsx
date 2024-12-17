"use client";

import { useState } from "react";
import { mockData } from "@/lib/mock-data";
import { NotificationItem } from "./notification-item";
import Image from "next/image";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

interface Notification {
  id: number;
  title: string;
  description: string;
  timestamp: string;
  img: string;
}

export function NotificationsMenu() {
  const [notifications, setNotifications] = useState<Notification[]>(
    mockData.notifications,
  );

  const handleDelete = (id: number) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  const handleClearAll = () => {
    setNotifications([]);
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="relative p-3 rounded-full hover:bg-[#67ADB9] hover:bg-opacity-8 outline-none">
          <Image
            src="/assets/icons/icon-notification.svg"
            alt="Notifications"
            className="h-5 w-5"
            width={20}
            height={20}
            priority
          />
          {notifications.length > 0 && (
            <span className="absolute top-[2px] right-[2px] h-5 w-5 rounded-full bg-[#FF4842] text-[#ffffff] text-[12px] leading-[18px] font-bold flex items-center justify-center">
              {notifications.length}
            </span>
          )}
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="bg-white w-full max-w-[280px] md:max-w-[360px] rounded-2xl z-50 mr-4 ml-4"
          align="end"
          sideOffset={22}
          style={{
            boxShadow: "-20px 20px 40px -4px #919EAB",
          }}
        >
          <div className="pt-4 px-5 pb-[17px]">
            <DropdownMenu.Label className="font-normal p-0">
              <p className="text-[16px] leading-[24px] text-[#414141] font-semibold">
                Notifications
              </p>
              <p className="text-[14px] leading-[22px] text-[#747474] font-normal">
                You have {notifications.length} unread messages
              </p>
            </DropdownMenu.Label>
          </div>
          <div className="divide-y divide-border border-t border-b border-[#9D9D9D] border-opacity-24">
            {notifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                notification={notification}
                onDelete={handleDelete}
              />
            ))}
          </div>
          {notifications.length > 0 && (
            <>
              <DropdownMenu.Separator />
              <div className="p-2">
                <button
                  className="text-[#67ADB9] text-[14px] leading-[22px] font-semibold flex items-center justify-center w-full h-[34px] rounded-[8px] hover:bg-[#f7f7f7] transition ease-in-out duration-300"
                  onClick={handleClearAll}
                >
                  Clear all
                </button>
              </div>
            </>
          )}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
