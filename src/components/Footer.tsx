import { FaInstagram,FaGithub,FaLinkedin,FaX,FaFacebook } from "react-icons/fa6";
import LogoBelajar from '../assets/logo1.png'
export default function FooterSections(){
    return (
<footer className="bg-white border border-gray-900/10 pt-8 pb-3">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <img className="h-8 sm:mx-auto" src={LogoBelajar} alt="Company name" />
    <nav aria-label="Footer" className="mt-8 grid grid-cols-2 gap-6 sm:flex sm:justify-center sm:gap-8">
      <div>
        <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">About us</a>
      </div>
      <div>
        <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Pricing</a>
      </div>
      <div>
        <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Careers</a>
      </div>
      <div>
        <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Contact</a>
      </div>
    </nav>

    <div className="mt-12 border-t border-gray-900/10 pt-8 max-sm:flex max-sm:flex-col max-sm:gap-3 sm:mt-16 sm:flex sm:items-center sm:justify-between">
          <p className="mt-6 text-sm leading-6 text-gray-500 sm:mt-0 md:order-1">© 2025 <span><a href="https://github.com/munimuni" className="hover:underline" target="_blank">MuniMunii</a></span>. All right reserved.</p>
                      <p className="text-gray-500 text-sm md:order-2">jhondoe@gmail.com</p>
      <div className="flex items-center gap-6 sm:order-3">
        <a className="text-gray-400 hover:text-gray-500" href="#">
          <FaX/>
        </a>
        <a className="text-gray-400 hover:text-gray-500" href="#">
          <FaLinkedin/>
        </a>
        <a className="text-gray-400 hover:text-gray-500" href="#">
          <FaFacebook/>
        </a>
        <a className="text-gray-400 hover:text-gray-500" href="#">
          <FaInstagram/>
        </a>
        <a className="text-gray-400 hover:text-gray-500" href="#">
          <FaGithub/>
        </a>
      </div>
    </div>
  </div>
</footer>
    )
}