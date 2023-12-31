import { RiInstagramLine, RiFacebookLine, RiLinkedinLine, RiGithubLine } from "react-icons/ri"
import Link from "next/link";
const Socials = () => {
  return (<div className="flex gap-x-12 items-center justify-center py-4 mb-[10px] text-lg ">
    <Link href={''} className="hover:text-accent transition-all duration-300" >
      <RiInstagramLine />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300" >
      <RiFacebookLine />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300" >
      <RiLinkedinLine />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300" >
      <RiGithubLine />
    </Link>
  </div>)
};

export default Socials;
