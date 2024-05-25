import MaxWidthWrapper from "@/components/MainPageCompo/MaxWidthWrapper";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";

import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="bg-zinc-100 py-20 ">
      <MaxWidthWrapper className="lg:w-8/12 w-full">
        {/* <h1 className="flex justify-center items-start text-6xl text-bg-zinc-900">
          contact us
        </h1> */}

        <Card className="w-full border-0 pb-16">
          <CardHeader>
            <h1 className="flex justify-center items-start lg:text-5xl mt-8 text-bg-zinc-900 text-2xl">
              Contact Information
            </h1>

            <CardDescription>
              <span className="flex justify-center items-center text-center text-xl mt-8 text-bg-zinc-900">
                Email Address: ieditostudio@gmail.com
              </span>
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-center gap-5 text-zinc-700">
            <Link href="#" className="bg-slate-200 p-3 rounded-full">
              <Facebook />
            </Link>
            <Link href="#" className="bg-slate-200 p-3 rounded-full">
              <Instagram />
            </Link>
            <Link href="#" className="bg-slate-200 p-3 rounded-full">
              <Twitter />{" "}
            </Link>
            <Link href="#" className="bg-slate-200 p-3 rounded-full">
              <Youtube />
            </Link>
            <Link href="#" className="bg-slate-200 p-3 rounded-full">
              <Linkedin />
            </Link>
          </CardFooter>
        </Card>
      </MaxWidthWrapper>
    </div>
  );
};

export default Contact;
