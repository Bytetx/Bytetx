"use client";
import { useState } from "react";
import MainCard from "@/components/MainCard";
import MaxWidthWrapper from "@/components/MainPageCompo/MaxWidthWrapper";
import Image from "next/image";
import { Check } from "lucide-react";
import { Icons } from "@/components/MainPageCompo/Icon";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import EditPage from "@/components/EditPage";
import { works } from "@/constants/index";

export default function Home() {
  const [photo, setPhoto] = useState("");
  const [imgName, setimgName] = useState("");
  const onImageLoad = (image: string, name: string) => {
    setPhoto(image);
    setimgName(name);
  };

  if (photo) {
    return (
      <>
        <EditPage image={photo} name={imgName} />
      </>
    );
  } else {
    return (
      <main>
        <section>
          <MaxWidthWrapper className="pb-24 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pb-30">
            <div className="col-span-2 px-1 lg:px-0 lg:pt-1">
              <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
                <h1 className="relative w-fit tracking-tight text-balance mt-8 font-bold !leading-tight text-zinc-700 text-4xl md:text-5xl lg:text-7xl">
                  Empower Your{" "}
                  <span className="orange_gradient px-2 text-white">
                    Creativity
                  </span>{" "}
                  <span className="text-xl">
                    Unlock the Power of Your Images
                  </span>
                </h1>

                <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap hidden lg:block">
                  A captivating image showcasing the versatility of image
                  editing, such as before-and-after photo transformations or
                  vibrant landscapes.
                </p>

                <ul className="lg:mt-8 md::mt-8 mt-2 space-y-2 text-left font-medium flex flex-col items-center sm:items-start text-sm">
                  <div className="space-y-2 hidden lg:block md:block">
                    <li className="flex gap-1.5 items-center text-left">
                      <Check className="h-5 w-5 shrink-0 text-amber-900" />
                      Effortlessly{" "}
                      <span className="font-bold flex ">resize images</span> to
                      high quality for any platform or purpose.
                    </li>
                    <li className="flex gap-1.5 items-center text-left">
                      <Check className="h-5 w-5 shrink-0 text-amber-900" />
                      <span className="font-bold ">Crop images</span>
                      easily to highlight their essence and remove distractions.
                    </li>
                    <li className="flex gap-1.5 items-center text-left">
                      <Check className="h-5 w-5 shrink-0 text-amber-900" />
                      <span className="font-bold ">Premium Presets:</span>{" "}
                      Choose the professionally crafted preset that best fits
                      your needs!
                    </li>
                    <li className="flex gap-1.5 items-center text-left">
                      <Check className="h-5 w-5 shrink-0 text-amber-900" />
                      Perfect your visual aesthetic with precision
                      <span className="font-bold ">Adjust Colors</span>.
                    </li>
                  </div>
                  <div className="space-y-2  lg:hidden md:hidden">
                    <li className="flex gap-1.5 items-center text-left">
                      <Check className="h-5 w-5 shrink-0 text-amber-900" />
                      Effortlessly resize images to high quality for any
                      platform or purpose.
                    </li>
                    <li className="flex gap-1.5 items-center text-left">
                      <Check className="h-5 w-5 shrink-0 text-amber-900" />
                      Crop images easily to highlight their essence and remove
                      distractions.
                    </li>
                    <li className="flex gap-1.5 items-center text-left">
                      <Check className="h-5 w-5 shrink-0 text-amber-900" />
                      Premium Presets: Choose the professionally crafted preset
                      that best fits your needs!
                    </li>
                  </div>
                </ul>
              </div>
            </div>

            <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 md:mt-20 mt-8 lg:mx-0 lg:mt-20 h-fit">
              <div className="relative md:max-w-xl">
                <img
                  src="/drop3.png"
                  className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block pointer-events-none"
                />
                <img
                  src="/free.png"
                  className="absolute w-40 lg:w-28   select-none  sm:block lg:hidden xl:block pointer-events-none"
                />
                <img
                  src="/line.png"
                  className="absolute w-20 -left-6 -bottom-6 select-none"
                />
                <MainCard onImageChange={onImageLoad} />
              </div>
            </div>
          </MaxWidthWrapper>
        </section>

        <section className="bg-slate-50 grainy-dark py-24">
          <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-3">
            <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
              <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
                Free{" "}
                <span className="relative px-2">
                  image resizer.{" "}
                  <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-amber-900" />
                </span>{" "}
              </h2>
            </div>
            <p className="text-sm">
              Use our fast, easy, and free online photo resizer to change the
              dimensions of any picture for any social channel.
            </p>

            <div className="col-span-full lg:col-span-1 w-full flex justify-center  sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
              <div className="relative md:max-w-xl">
                <img
                  src="/step1-resize.png"
                  className="absolute w-40 lg:w-80 left-96  -top-20 select-none hidden sm:block lg:hidden xl:block"
                />
                <img
                  src="/step_2.png"
                  className="absolute w-80 lg:w-96 left-full top-11  select-none hidden sm:block lg:hidden xl:block"
                />
                <div className="flex justify-center items-center rounded-3xl overflow-hidden border-4">
                  <Image src="/abhi.png" alt="" width={800} height={500} />
                </div>
                <img
                  src="/step3-resize.png"
                  className="absolute w-80 lg:w-full left-20   select-none hidden sm:block lg:hidden xl:block"
                />
              </div>
            </div>
          </MaxWidthWrapper>
        </section>

        <section className="bg-slate-100 grainy-dark py-24">
          <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-10">
            <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
              <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
                Free online{" "}
                <span className="relative px-2">
                  image cropper.
                  <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-amber-900" />
                </span>{" "}
              </h2>
            </div>
            <p className="text-base">
              The online Crop image tool from iEdito transforms your images into
              the perfect size in seconds.
            </p>
            <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
              <div className="relative md:max-w-xl">
                <img
                  src="/your-image.png"
                  className="absolute w-40 lg:w-52 left-full  -top-20 select-none hidden sm:block lg:hidden xl:block"
                />
                <img
                  src="/line.png"
                  className="absolute w-20 -left-6 -bottom-6 select-none"
                />
                <div className="flex justify-center items-center rounded-3xl overflow-hidden border-4">
                  <Image
                    src="https://raw.githubusercontent.com/sekoyo/react-image-crop/master/crop-demo.gif"
                    alt=""
                    width={800}
                    height={500}
                  />
                </div>
                <img
                  src="/crop1.png"
                  className="absolute w-80 lg:w-full left-20   select-none hidden sm:block lg:hidden xl:block"
                />
              </div>
            </div>
          </MaxWidthWrapper>
        </section>

        <section className="bg-slate-50 grainy-dark py-24">
          <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-10">
            <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
              <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-4xl md:text-5xl text-gray-900">
                Enhance Your Visual Story{" "}
                <span className="relative px-2">
                  Apply Preset{" "}
                  <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-amber-900" />
                </span>{" "}
                with Ease.
              </h2>
            </div>
            <p className="text-base">
              The online image Adjust Colors tool from iEdito instantly
              transforms your images into the Polish Colors with Precision.
            </p>
            <ScrollArea className="w-full whitespace-nowrap rounded-md border-0">
              <div className="flex w-max space-x-4 p-4">
                {works?.map((artwork) => (
                  <figure key={artwork.artist} className="shrink-0">
                    <div className="overflow-hidden rounded-md">
                      <Image
                        src={artwork.art}
                        alt={`Photo by ${artwork.artist}`}
                        className="aspect-[3/4] h-fit w-fit object-cover"
                        width={300}
                        height={400}
                      />
                    </div>
                    <figcaption className="pt-2 text-xs text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        {artwork.artist}
                      </span>
                    </figcaption>
                  </figure>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </MaxWidthWrapper>
        </section>

        <section className="bg-slate-100 grainy-dark py-24">
          <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-10">
            <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
              <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-3xl md:text-5xl text-gray-900">
                Power full Image Editing Tools at{" "}
                <span className="relative px-2">
                  Your Fingertips
                  <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-amber-900" />
                </span>{" "}
              </h2>
            </div>
            <p className="text-sbase">
              Transform Ordinary Images into Extraordinary: Resize, Crop, and
              Tweak Colors Instantly
            </p>
            <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
              <div className="relative md:max-w-xl">
                <img
                  src="/drop3.png"
                  className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block pointer-events-none"
                />
                <img
                  src="/line.png"
                  className="absolute w-20 -left-6 -bottom-6 select-none"
                />
                <MainCard onImageChange={onImageLoad} />
              </div>
            </div>
          </MaxWidthWrapper>
        </section>
      </main>
    );
  }
}
