import Link from "next/link";
import Logo from "./Logo";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <header className="sticky top-0 bg-white z-10 shadow">
      <div className="container flex items-center justify-between p-6 mx-auto">
        <Logo />
        <Link
          href="/cart"
          className="flex items-center space-x-1 text-gray-700 hover:text-gray-900"
        >
          <div className="relative">
            <ShoppingCartIcon className="w-7 h-7 flex-shrink-0" />
          </div>
          <p className="text-lg">
            $0.00
            <span className="text-sm text-gray-500">(0)</span>
          </p>
        </Link>
      </div>
    </header>
  );
};
export default Header;
