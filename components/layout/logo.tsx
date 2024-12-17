import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/dashboard">
      <Image
        src="/assets/logo.svg"
        alt="Logo"
        width={89}
        height={40}
        priority
      />
    </Link>
  );
}
