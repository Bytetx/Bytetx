import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { AiOutlineFullscreen } from "react-icons/ai";
import Image from "next/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const FullScreenPreview = ({ image }: { image: string | null }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className=" hidden lg:flex md:flex">
          Full sceen preview{" "}
          <AiOutlineFullscreen className="w-5 h-5 border rounded-md mx-2" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:min-w-full  h-[650px] p-0 cursor-move ">
        <ScrollArea className="w-full whitespace-nowrap rounded-md border">
          <div className="flex w-max space-x-4 p-4">
            <figure className="shrink-0">
              <div className="overflow-hidden rounded-md">
                {image && (
                  <Image
                    src={image}
                    alt="preview"
                    // className="aspect-[3/4] h-fit w-fit object-cover"
                    className="rounded-md object-cover"
                    width={1920}
                    height={1080}
                    style={{
                      background:
                        "linear-gradient(to bottom, #000000, #ffffff)",
                    }}
                  />
                )}
              </div>
            </figure>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default FullScreenPreview;
