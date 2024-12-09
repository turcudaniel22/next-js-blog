"use client";
import { useState } from "react";
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import { XIcon, MenuIcon } from "lucide-react";

const links = [
  { name: "Hjem", href: "/", icon: HomeIcon },
  { name: "Mine innlegg", href: "/blog/posts", icon: DocumentDuplicateIcon },
  { name: "Om meg", href: "/blog/about", icon: UserGroupIcon },
  { name: "Kontakt", href: "/blog/contact", icon: EnvelopeIcon },
];

export default function NavLinks() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="flex">
      <main className="flex"> {/* Your main content goes here */} </main>
      <aside className="w-64 md:w-auto relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden absolute top left z-50"
        >
          {isOpen ? (
            <XIcon className="w-8 h-8 text-black" />
          ) : (
            <MenuIcon className="w-8 h-8 text-black" />
          )}
        </button>
        <div
          className={clsx(
            "fixed inset-y-0 right-0 bg-gray-100 bg-opacity-75 z-40 p-4 md:relative md:bg-transparent md:bg-opacity-0 md:flex md:flex-col md:space-y-2",
            { hidden: !isOpen, flex: isOpen, "flex-col": isOpen }
          )}
        >
          {links.map((link) => {
            const LinkIcon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  "flex items-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium text-black hover:bg-purple-100",
                  { "bg-purple-100": pathname === link.href },
                  "md:flex-none md:p-2 md:px-3"
                )}
              >
                <LinkIcon className="w-7" />
                <p className="hidden md:block ">{link.name}</p>
              </Link>
            );
          })}
        </div>
      </aside>
    </div>
  );
}
