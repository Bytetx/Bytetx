"use client";
import Image from "next/image";
// import useMedia from "use-media";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface Filter {
  name: string;
  class: string;
}

interface FilterSlideProps {
  filterValues: Filter[];

  setFilterClass: (value: string) => void;
}

const FilterSlide: React.FC<FilterSlideProps> = ({
  filterValues,

  setFilterClass,
}) => {
  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {filterValues.map((artwork) => (
          <figure
            key={artwork.name}
            className="shrink-0"
            onClick={() => setFilterClass(artwork.class)}
          >
            <div className="overflow-hidden rounded-md h-[60px] w-[50px]">
              <Image
                src="/filter_raplica.jpg"
                alt={`Photo by ${artwork.name}`}
                className={`aspect-[3/4] h-fit w-fit object-cover ${artwork.class}`}
                width={120}
                height={150}
              />
            </div>
            <figcaption className="pt-2 text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">
                {artwork.name}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default FilterSlide;
