"use client";
import Link from "next/link";
import "./navbar.css";
import { usePathname } from "next/navigation";
import { useCartContext } from "@/context/CartContext";

const Navbar = () => {
  const pathName = usePathname();

  const { CartTotalQty } = useCartContext();

  const Nav = [
    {
      tittle: "Home",
      href: "/",
    },
    {
      tittle: "About",
      href: "/about",
    },
    {
      tittle: "Store",
      href: "/store",
    },
  ];
  return (
    <div className="Navbar">
      {Nav.map((item) => (
        <Link
          className={`${pathName === item.href ? "text-sky-500" : ""}`}
          href={item.href}
          key={item.href}
        >
          {item.tittle}
        </Link>
      ))}
      <div className="relative inline-block">
        <Link href="/cart" className="text-gray-800 font-medium">
          Cart
        </Link>
        <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full shadow">
          {CartTotalQty}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
