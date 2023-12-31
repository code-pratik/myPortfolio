//  links
import {
  HiHome, HiUser, HiRectangleGroup, HiViewColumns, HiChatBubbleBottomCenterText, HiEnvelope
} from "react-icons/hi2"
import { useRouter } from "next/router";
import Link from "next/link";

const links = [
  {
    name: 'home',
    path: '/',
    icon: <HiHome />
  },
  {
    name: 'about',
    path: '/about',
    icon: <HiUser />
  },
  {
    name: 'services',
    path: '/services',
    icon: <HiRectangleGroup />
  },
  {
    name: 'work',
    path: '/work',
    icon: <HiViewColumns />
  },
  // {
  //   name: 'testimonials',
  //   path: '/testimonials',
  //   icon: <HiChatBubbleBottomCenterText />,
  // },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];

const Nav = () => {
  const router = useRouter()
  const pathname = router.pathname
  return <nav className="flex flex-col xl:justify-center items-center fixed h-max bottom-0 mt-auto xl:right-[2%] w-full z-50 top-0 xl:w-16 xd:max-w-md xl:h-screen">
    <div className="relative z-20 flex w-full xl:flex-col justify-between items-center xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] py-8 bg-red-200/10 xl:h-max backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
      {links.map((link, index) => {
        return <Link href={link.path} className={`${link.path === pathname && 'text-accent'} hover:text-accent relative flex items-center group transition-all duration-300`} key={index}  >
          <div className="absolute pr-14 right-0 hidden xl:group-hover:flex rounded-[3px]">
            <div className="bg-white relative flex text-primary items-center p-[6px]">
              <div className="text-[12px] leading-none font-semibold capitalize">{link.name}</div>
              <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] absolute -right-2"></div>
            </div>
          </div>
          <div>{link.icon}</div></Link>
      })}
    </div>
  </nav>;
};

export default Nav;
