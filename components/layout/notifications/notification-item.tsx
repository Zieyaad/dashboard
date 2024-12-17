"use client";

import Image from "next/image";

interface NotificationItemProps {
  notification: {
    id: number;
    title: string;
    description: string;
    timestamp: string;
    img: string;
  };
  onDelete: (id: number) => void;
}

export function NotificationItem({
  notification,
  onDelete,
}: NotificationItemProps) {
  return (
    <div className="py-2 px-4">
      <div className="flex items-center gap-4 py-2">
        <Image
          src={notification.img}
          alt={notification.title}
          width={40}
          height={40}
          className="hidden md:block"
        />
        <div className="flex-1">
          <p className="text-[14px] leading-[22px] text-[#414141] font-semibold">
            {notification.title}
          </p>
          <p className="text-[14px] leading-[22px] text-[#747474] font-normal mb-1">
            {notification.description}
          </p>
          <div className="flex items-center gap-1">
            <Image
              src="/assets/icons/icon-time.svg"
              alt="icon time"
              width={13}
              height={13}
            />
            <span className="text-[12px] leading-[18px] text-[#BCBCBC] font-normal">
              {notification.timestamp}
            </span>
          </div>
        </div>
        <button
          className="h-9 w-9 rounded-lg hover:bg-[#f7f7f7] flex items-center justify-center"
          onClick={() => onDelete(notification.id)}
        >
          <Image
            src="/assets/icons/icon-delete.svg"
            alt="Delete Icon"
            width={20}
            height={20}
          />
        </button>
      </div>
    </div>
  );
}
