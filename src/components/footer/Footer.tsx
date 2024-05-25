import {
  FooterBrand,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";
import { Separator } from "@/components/ui/separator";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

const Footers = () => {
  return (
    <footer className="pt-5 px-8  pb-4 ">
      <div className="w-full sm:flex sm:items-center sm:justify-between hidden lg:flex ">
        <FooterBrand href="/" src="/ddito.jpg" alt="iedito logo" />
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <FooterIcon href="#" icon={BsFacebook} />
          <FooterIcon href="#" icon={BsInstagram} />
          <FooterIcon href="#" icon={BsTwitter} />
          <FooterIcon href="#" icon={BsGithub} />
          <FooterIcon href="#" icon={BsDribbble} />
        </div>
      </div>

      <div>
        <div className="w-full text-center ">
          <Separator className="my-5 bg-zinc-300" />

          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <p className="text-base text-zinc-500">© iedito.com</p>
            <FooterLinkGroup className=" justify-between gap-3 hidden lg:flex md:flex">
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </FooterLinkGroup>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footers;
