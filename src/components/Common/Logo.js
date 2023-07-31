import Image from "next/image"

const { default: Link } = require("next/link")

const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-2">
        <Image src="/logo.svg" alt="logo" width={50} height={50} />
        <span className="hidden sm:inline-block font-extrabold text-3xl">Farm Connect</span>

    </Link>
  )
}
export default Logo