import { NotificationsMenu } from "./notifications/notifications-menu";
import { UserNav } from "./user-nav";

export function Header() {
  return (
    <header className="bg-[#FFFFFF] relative z-1">
      <div className="flex h-[76px] items-center px-4 md:px-10 py-2">
        <div className="flex-1" />
        <div className="flex items-center gap-1">
          <NotificationsMenu />
          <UserNav />
        </div>
      </div>
    </header>
  );
}
