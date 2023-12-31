
import { Sora } from 'next/font/google'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"]
})


//components
import { Nav, Header, Bulb, Transition, Socials, Circles, Avatar, CardLeft, CardRight, ParticlesContainer, ProjectBtn, ServiceSlider, TestimonialSlider, TopLeftImg, WorkSlider } from "./index"

const Layout = ({ children }) => {
  return <div className={`page text-white bg-site bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>
    <Nav />
    <Header />
    <TopLeftImg />
    {children}
  </div>;
};

export default Layout;
