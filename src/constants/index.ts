import {
  MdOutlineRotate90DegreesCcw,
  MdOutlineRotate90DegreesCw,
  MdOutlineCropFree,
  MdOutlineCropOriginal,
  MdOutlineCropDin,
  MdOutlineCropPortrait,
  MdCrop169,
  MdOutlineCrop32,
  MdCropPortrait,
  MdOutlineCrop75,
  MdCrop54,
  MdCropLandscape,
  MdOutlineBrightness6,
  MdFilterHdr,
  MdOutlineBrightness1,
  MdBrightness1,
} from "react-icons/md";

export interface Option {
  name: string;
  property: string;
  value: number;
  range: {
    min: number;
    max: number;
  };
  unit: string;
}

interface ButtonInfo {
  name: string;
  icon: React.ComponentType<any>; // Or specify a more specific type if available
  ratio?: string; // Optional property for crop ratio
}

export const AdjustDefaultOption: Option[] = [
  {
    name: "Brightness",
    property: "brightness",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Contrast",
    property: "contrast",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Saturation",
    property: "saturate",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Grayscale",
    property: "grayscale",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    name: "Sepia",
    property: "sepia",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    name: "Hue Rotate",
    property: "hue-rotate",
    value: 0,
    range: {
      min: 0,
      max: 360,
    },
    unit: "deg",
  },
  {
    name: "Blur",
    property: "blur",
    value: 0,
    range: {
      min: 0,
      max: 20,
    },
    unit: "px",
  },
];

export const buttonData: ButtonInfo[] = [
  { name: "free", icon: MdOutlineCropFree, ratio: "undefined" },
  { name: "original", icon: MdOutlineCropOriginal, ratio: "undefined" },
  { name: "square", icon: MdOutlineCropDin, ratio: "1/1" },
  { name: "4:5", icon: MdCropPortrait, ratio: "4/5" },
  { name: "5:4", icon: MdCrop54, ratio: "5/4" },
  { name: "3:4", icon: MdOutlineCropPortrait, ratio: "3/4" },
  { name: "4:3", icon: MdCropLandscape, ratio: "4/3" },
  { name: "5:7", icon: MdCropPortrait, ratio: "5/7" },
  { name: "7:5", icon: MdOutlineCrop32, ratio: "7/5" },
  { name: "2:3", icon: MdOutlineCropPortrait, ratio: "2/3" },
  { name: "3:2", icon: MdOutlineCrop75, ratio: "3/2" },
  { name: "3:5", icon: MdCropPortrait, ratio: "3/5" },
  { name: "5:3", icon: MdOutlineCrop32, ratio: "5/3" },
  { name: "9:16", icon: MdCropPortrait, ratio: "9/16" },
  { name: "16:9", icon: MdCrop169, ratio: "16/9" },
];

export const FlipButtonConstant = [
  { name: "horizontel", src: "/flip-horizontel.svg" },
  { name: "flip-horizontel-mirror", src: "/flip-horizontel-mirror.svg" },
  { name: "flip-vertical", src: "/flip-vertical.svg" },
  { name: "flip-vertical-mirror", src: "/flip-vertical-mirror.svg" },
];

export const RotateButtonConstant = [
  { name: "left-roted", icon: MdOutlineRotate90DegreesCcw },
  { name: "right-roted", icon: MdOutlineRotate90DegreesCw },
];

export const filterValues = [
  {
    name: "None",
    class: "none",
  },
  {
    name: "1977",
    class: "filter-1977",
  },
  {
    name: "Aden",
    class: "filter-aden",
  },
  {
    name: "Amaro",
    class: "filter-amaro",
  },
  {
    name: "Ashby",
    class: "filter-ashby",
  },
  {
    name: "Brannan",
    class: "filter-brannan",
  },
  {
    name: "Brooklyn",
    class: "filter-brooklyn",
  },
  {
    name: "Charmes",
    class: "filter-charmes",
  },
  {
    name: "Clarendon",
    class: "filter-clarendon",
  },
  {
    name: "Crema",
    class: "filter-crema",
  },
  {
    name: "Dogpatch",
    class: "filter-dogpatch",
  },
  {
    name: "Earlybird",
    class: "filter-earlybird",
  },
  {
    name: "Gingham",
    class: "filter-gingham",
  },
  {
    name: "Ginza",
    class: "filter-ginza",
  },
  {
    name: "Hefe",
    class: "filter-hefe",
  },
  {
    name: "Helena",
    class: "filter-helena",
  },
  {
    name: "Hudson",
    class: "filter-hudson",
  },
  {
    name: "Inkwell",
    class: "filter-inkwell",
  },
  {
    name: "Kelvin",
    class: "filter-kelvin",
  },
  {
    name: "Kuno",
    class: "filter-juno",
  },
  {
    name: "Lark",
    class: "filter-lark",
  },
  {
    name: "Lo-Fi",
    class: "filter-lofi",
  },
  {
    name: "Ludwig",
    class: "filter-ludwig",
  },
  {
    name: "Maven",
    class: "filter-maven",
  },
  {
    name: "Mayfair",
    class: "filter-mayfair",
  },
  {
    name: "Moon",
    class: "filter-moon",
  },
  {
    name: "Nashville",
    class: "filter-nashville",
  },
  {
    name: "Perpetua",
    class: "filter-perpetua",
  },
  {
    name: "Poprocket",
    class: "filter-poprocket",
  },
  {
    name: "Reyes",
    class: "filter-reyes",
  },
  {
    name: "Rise",
    class: "filter-rise",
  },
  {
    name: "Sierra",
    class: "filter-sierra",
  },
  {
    name: "Skyline",
    class: "filter-skyline",
  },
  {
    name: "Slumber",
    class: "filter-slumber",
  },
  {
    name: "Stinson",
    class: "filter-stinson",
  },
  {
    name: "Sutro",
    class: "filter-sutro",
  },
  {
    name: "Toaster",
    class: "filter-toaster",
  },
  {
    name: "Valencia",
    class: "filter-valencia",
  },
  {
    name: "Vesper",
    class: "filter-vesper",
  },
  {
    name: "Walden",
    class: "filter-walden",
  },
  {
    name: "Willow",
    class: "filter-willow",
  },
  {
    name: "X-Pro II",
    class: "filter-xpro-ii",
  },
];

interface Artwork {
  artist: string;
  art: string;
}

export const works: Artwork[] = [
  {
    artist: "Moon",
    art: "/filter/grayscal.jpg",
  },
  {
    artist: "Toaster",
    art: "/filter/hue.jpg",
  },
  {
    artist: "Skyline",
    art: "/filter/contrast.jpg",
  },
  {
    artist: "Lo-Fi",
    art: "/filter/sepia.jpg",
  },
  {
    artist: "1977",
    art: "/filter/pinkis.jpg",
  },
  {
    artist: "X-Pro II",
    art: "/filter/bright.jpg",
  },
];

// <Card className="w-[350px] border-0">
//               <CardHeader>
//                 <CardTitle className="flex gap-1 text-lg   text-zinc-500 font-sans font-thin ">
//                   <BsBrightnessHigh className="h-6 w-6 mt-1" />
//                   <span>Brightness</span>
//                 </CardTitle>
//                 <CardDescription>
//                   <Slider
//                     defaultValue={[50]}
//                     max={100}
//                     step={1}
//                     className="w-[100%]"
//                   />
//                 </CardDescription>

//                 <CardTitle className="flex gap-1 text-lg   text-zinc-500 font-sans font-thin ">
//                   <MdOutlineBrightness6 className="h-6 w-6 mt-1" />
//                   <span>Contrast</span>
//                 </CardTitle>
//                 <CardDescription>
//                   <Slider
//                     defaultValue={[50]}
//                     max={100}
//                     step={1}
//                     className="w-[100%]"
//                   />
//                 </CardDescription>

//                 <CardTitle className="flex gap-1 text-lg   text-zinc-500 font-sans font-thin ">
//                   <MdFilterHdr className="h-6 w-6 mt-1" />
//                   <span>HDR effect</span>
//                 </CardTitle>
//                 <CardDescription>
//                   <Slider
//                     defaultValue={[50]}
//                     max={100}
//                     step={1}
//                     className="w-[100%]"
//                   />
//                 </CardDescription>

//                 <CardTitle className="flex gap-1 text-lg   text-zinc-500 font-sans font-thin ">
//                   <MdOutlineBrightness1 className="h-6 w-6 mt-1" />
//                   <span>White point</span>
//                 </CardTitle>
//                 <CardDescription>
//                   <Slider
//                     defaultValue={[50]}
//                     max={100}
//                     step={1}
//                     className="w-[100%]"
//                   />
//                 </CardDescription>

//                 <CardTitle className="flex gap-1 text-lg   text-zinc-500 font-sans font-thin ">
//                   <BsHighlights className="h-6 w-6 mt-1" />
//                   <span>Highlights</span>
//                 </CardTitle>
//                 <CardDescription>
//                   <Slider
//                     defaultValue={[50]}
//                     max={100}
//                     step={1}
//                     className="w-[100%]"
//                   />
//                 </CardDescription>

//                 <CardTitle className="flex gap-1 text-lg   text-zinc-500 font-sans font-thin ">
//                   <BsShadows className="h-6 w-6 mt-1" />
//                   <span>Shadows</span>
//                 </CardTitle>
//                 <CardDescription>
//                   <Slider
//                     defaultValue={[50]}
//                     max={100}
//                     step={1}
//                     className="w-[100%]"
//                   />
//                 </CardDescription>

//                 <CardTitle className="flex gap-1 text-lg   text-zinc-500 font-sans font-thin ">
//                   <MdBrightness1 className="h-6 w-6 mt-1" />
//                   <span>Black Point</span>
//                 </CardTitle>
//                 <CardDescription>
//                   <Slider
//                     defaultValue={[50]}
//                     max={100}
//                     step={1}
//                     className="w-[100%]"
//                   />
//                 </CardDescription>
//               </CardHeader>
//               <CardContent></CardContent>

//               <CardFooter className="grid">
//                 <Label
//                   htmlFor="downloadBtn"
//                   className="mx-2 text-xs text-zinc-600 mt-1"
//                 >
//                   Final image size 255kb dimantion is 25* 25
//                 </Label>
//                 <Button id="downloadBtn" className="rounded-full  w-full">
//                   Download Changes
//                 </Button>
//               </CardFooter>
//             </Card>
