import Link from "next/link";
import Logo from "./Logo";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import PersonIcon from "@mui/icons-material/Person";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="sticky top-0 bg-gray-300 z-10 shadow">
      <div className="container flex items-center justify-between p-6 relative">
        <Logo className="justify-start" />

        <div className="justify-items-end flex z-20 ">
          {isMenuOpen && (
            <div className=" flex flex-col md:flex-row gap-1 p-2 ">
              <Link href="/">Home</Link>
              <Link href="/category">Category</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/profile">
                <PersonIcon className="w-7 h-7" /> Profile
              </Link>

              <Link
                href="/cart"
                className="flex items-center space-x-1 text-gray-700 hover:text-gray-900"
              >
                <div className="relative">
                  <ShoppingCartIcon className="w-7 h-7 flex-shrink-0" />
                </div>
                <p className="text-lg">
                  $0.00 <span className="text-sm text-gray-500">(0)</span>
                </p>
              </Link>
            </div>
          )}
        </div>
        <div className="w-7 h-7  block" onClick={toggleMenu}>
          {isMenuOpen ? <CloseIcon /> : <MenuOpenIcon />}
        </div>
      </div>
    </header>
  );
};
export default Header;
