import Image from "next/image"
import Link from "next/link"

export const Navbar = () => {
  return(
    <div className="flex justify-between p-5 items-center">
      <div>
        <Image
          src="/logo.png"
          width={100}
          height={100}
          alt="Logo of Elizabeth Nardella Counselling" />
      </div>
      <div className="flex gap-5">
        <li className="list-none">
          <Link href="/about">About</Link>
        </li>
        <li className="list-none">
          <Link href="/consultations">Consultations</Link>
        </li>
        <li className="list-none">
          <Link href="/expertise">Expertise</Link>
        </li>
        <li className="list-none">
          <Link href="/resources">Resources</Link>
        </li>
        <li className="list-none">
          <Link href="contact/">Contact Us</Link>
        </li>
        <li className="list-none">
          <Link href="/blog">Blog</Link>
        </li>
      </div>
    </div>
  )

}