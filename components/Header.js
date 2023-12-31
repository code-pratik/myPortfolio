import Image from "next/image";
import Socials from "./Socials";
import Link from "next/link";


const Header = () => {
  return <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
    <div className="mx-auto container">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
        <Link href="/">
          <Image src={'/Screenshot 2023-07-30 at 5.43.55 PM.png'} className="image mix-blend-color-dodge " width={230} height={48} alt="" priority={true} />
          {/* <h1 className="mb-0 h1 font-extrabold md:text-[50px] max-sm:text-[px] lg:text-[30px] xl:text-[30px]">Pratik <span className="text-accent" >Prajapati</span></h1> */}
        </Link>
        <Socials />
      </div>

    </div>
  </header>;
};

export default Header;
