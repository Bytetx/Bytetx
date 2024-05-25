import MaxWidthWrapper from "@/components/MainPageCompo/MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

const AboutPage = () => {
  return (
    <div className="bg-zinc-100 py-20">
      <MaxWidthWrapper>
        <h1 className="flex justify-center items-start text-6xl text-bg-zinc-900">
          About
        </h1>
        <h1 className="flex justify-center items-start lg:text-5xl md:text-5xl text-3xl pt-8 text-bg-zinc-900">
          Welcome to &nbsp;<span className="orange_gradient ">iEdito</span>
        </h1>
        <p className="flex justify-center items-center text-center pt-8 text-lg">
          At iEdito, we&apos;re passionate about helping you unleash your
          creativity through powerful image editing tools. Whether you&apos;re a
          professional photographer, a social media influencer, or simply
          someone who loves to capture moments, our platform is designed to
          empower you to bring your vision to life.
        </p>
        {/* our mission */}
        <div className="w-full lg:grid       min-h-9/12 lg:grid-cols-2  bg-slate-50 rounded-xl overflow-hidden mt-24">
          <div className="flex items-center justify-center py-12">
            <div className="mx-auto grid w-[350px] gap-6">
              <div className="grid gap-2 text-center">
                <h1 className="text-3xl font-bold text-left">Our Mission</h1>
                <p className="text-balance text-muted-foreground text-left">
                  Our mission is simple: to provide you with intuitive and
                  innovative image editing solutions that enhance your workflow
                  and elevate your visual content. We believe that everyone
                  should have access to tools that inspire creativity and enable
                  them to express themselves through stunning images.
                </p>
              </div>

              <div className="mt-4  text-sm text-left">
                <Link href="/" className="underline">
                  try
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden bg-muted lg:block">
            <Image
              src="/about.jpg"
              alt="Image"
              width="1920"
              height="1080"
              className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </div>
        {/* What Sets Us Apart */}
        <h1 className="flex justify-center items-start text-5xl mt-24 text-bg-zinc-900">
          What Sets Us Apart
        </h1>

        <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
          <div className="space-y-2">
            {/* <li className="flex gap-1.5 items-center text-left">
              <Check className="h-5 w-5 shrink-0 text-amber-900" />
              <span className="font-bold">User-Friendly Interface:</span>
              Our platform is designed with simplicity in mind, ensuring that
              both beginners and experienced users can navigate it effortlessly.
            </li>
            <li className="flex gap-1.5 items-center text-left">
              <Check className="h-5 w-5 shrink-0 text-amber-900" />
              <span className="font-bold">Advanced Features:</span>
              From basic adjustments like cropping and resizing to advanced
              color correction tools, we offer a comprehensive suite of features
              to meet your editing needs.
            </li> */}
            <li className="flex gap-1.5 items-center text-left">
              <Check className="h-5 w-5 shrink-0 text-amber-900" />
              <span className="font-bold">Image Resizing: </span> Easily adjust
              the dimensions of your images to fit any platform or purpose
              effortlessly.
            </li>
            <li className="flex gap-1.5 items-center text-left">
              <Check className="h-5 w-5 shrink-0 text-amber-900" />
              <span className="font-bold">Image Cropping: </span> Effortlessly
              remove distractions and focus on the essence of your images with
              our intuitive cropping tools.
            </li>
            <li className="flex gap-1.5 items-center text-left">
              <Check className="h-5 w-5 shrink-0 text-amber-900" />
              <span className="font-bold">Color Adjustment: </span> Fine-tune
              colors with precision to achieve the perfect visual aesthetic and
              make your images stand out.
            </li>
            <li className="flex gap-1.5 items-center text-left">
              <Check className="h-5 w-5 shrink-0 text-amber-900" />
              <span className="font-bold">Premium Presets: </span> Choose the
              professionally crafted preset that best fits your needs!
            </li>
          </div>
        </ul>

        {/* get started today */}
        <Card className="w-full border-0 mt-24 pb-16">
          <CardHeader>
            <h1 className="flex justify-center items-start text-5xl mt-8 text-bg-zinc-900">
              Get Started Today
            </h1>

            <CardDescription>
              <span className="flex justify-center items-center text-center text-xl mt-8 text-bg-zinc-900">
                Ready to take your images to the next level? Sign up for a free
                account and start exploring the possibilities with iEdito today!
              </span>
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-center">
            <Button
              asChild
              className=" rounded-full bg-gradient-to-r from-purple-900 via-amber-900 to-yellow-500 py-6"
            >
              <Link href="/">
                <span className="text-lg px-8">Get Started</span>
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </MaxWidthWrapper>
    </div>
  );
};

export default AboutPage;
