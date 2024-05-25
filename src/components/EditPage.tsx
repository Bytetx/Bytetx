"use client";
import React, { useState, useEffect, useRef } from "react";
import { ReloadIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MdDownload } from "react-icons/md";
import { BsBrightnessHigh } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import {
  AdjustDefaultOption,
  FlipButtonConstant,
  buttonData,
  Option,
  RotateButtonConstant,
  filterValues,
} from "@/constants";
import axios from "axios";
import FullScreenPreview from "./FullScreenPreview";
import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  type Crop,
} from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { FiMinus, FiPlus } from "react-icons/fi";
import "../app/instagram.css";
import { GrRedo, GrUndo } from "react-icons/gr";
import FilterSlide from "./FilterSlide";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
// import storeData from "@/lib/linkedlist"

const EditPage = ({
  image,
  name,
}: {
  image: string | null;
  name: string | null;
}) => {
  const [mainImage, setMainImage] = useState<string | null>(null);
  const [sliderValues, setSliderValues] = useState<Record<string, Option>>({});
  const [imageMetadata, setImageMetadata] = useState({
    height: 0,
    width: 0,
    size: 0,
    format: "",
  });
  const [width, setWidth] = useState(imageMetadata.width);
  const [height, setHeight] = useState(imageMetadata.height);
  const [lockAspectRatio, setLockAspectRatio] = useState(true);
  const [quality, setQuality] = useState(90);
  const [frormat, setFrormat] = useState("");
  const [selectedButton, setSelectedButton] = useState("original");
  const [flipSelect, setFlipSelect] = useState("horizontel");
  const [rotateSelect, setRotateSelect] = useState(null);
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);
  const [flip, setFlip] = useState(1);
  const [flipVertic, setFlipVertic] = useState(1);
  const [crop, setCrop] = useState<Crop>();
  const imgRef = useRef<HTMLImageElement>(null);
  const [aspect, setAspect] = useState<number | undefined>(16 / 9);
  const [nameText, setNameText] = useState(name);
  const [filterClass, setFilterClass] = useState<string>("");
  const [btnDiseble, setBtnDiseble] = useState(false);
  const [filterImgDownload, setFilterImgDownload] = useState(false);

  //linked list
  // const [history, setHistory] = useState([]);
  // const [future, setFuture] = useState([]);

  // console.log("crop", crop);

  function centerAspectCrop(
    mediaWidth: number,
    mediaHeight: number,
    aspect: number
  ) {
    return centerCrop(
      makeAspectCrop(
        {
          unit: "%",
          width: 90,
        },
        aspect,
        mediaWidth,
        mediaHeight
      ),
      mediaWidth,
      mediaHeight
    );
  }

  const handleWidthChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const newWidth = parseInt(event.target.value);
    if (lockAspectRatio) {
      const newHeight = Math.round(
        (imageMetadata.height / imageMetadata.width) * newWidth
      );
      setHeight(newHeight);
    }
    setWidth(newWidth);
  };

  const handleHeightChange = (event: any) => {
    const newHeight = parseInt(event.target.value);
    if (lockAspectRatio) {
      const newWidth = Math.round(
        (imageMetadata.width / imageMetadata.height) * newHeight
      );
      setWidth(newWidth);
    }
    setHeight(newHeight);
  };

  const handleLockAspectRatioChange = () => {
    setLockAspectRatio(!lockAspectRatio);
  };

  useEffect(() => {
    async function fetchImageSize() {
      try {
        if (image) {
          setMainImage(image);
          // const stateData = {
          //   image,
          //   sliderValues
          // }
          // storeData.insert(stateData)
          const response = await axios
            .post("/api/getImageInfo", {
              image: image,
            })
            .catch((error) => {
              console.error("Error making Axios request:", error);
              throw error;
            });
          const imageInfo = response.data;
          setImageMetadata(imageInfo);

          setWidth(imageInfo.width);
          setHeight(imageInfo.height);
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchImageSize();
  }, [image]);

  const handleSliderChange = (value: number[], option: Option) => {
    setSliderValues((prevState) => ({
      ...prevState,
      [option.property]: {
        ...option,
        value: value[0],
      },
    }));
  };

  // const redoChange = () => {
  //   if (future.length > 0) {
  //     const nextChange = future[0];
  //     const newFuture = future.slice(1);
  //     setFuture(newFuture);
  //     const newHistory = [...history, sliderValues];
  //     setHistory(newHistory);
  //     setSliderValues(nextChange);
  //   }
  // };

  // const undoChange = () => {
  //   if (history.length > 0) {
  //     const lastChange = history[history.length - 1];
  //     const newHistory = history.slice(0, -1);
  //     setHistory(newHistory);
  //     const newFuture = [sliderValues, ...future];
  //     setFuture(newFuture);
  //     setSliderValues(lastChange);
  //   }
  // };

  const getImageStyle = (): React.CSSProperties => {
    const filterStyle = Object.entries(sliderValues)
      .map(([property, option]) => {
        switch (property) {
          case "brightness":
            return `brightness(${option.value}%)`;
          case "contrast":
            return `contrast(${option.value}%)`;
          case "saturate":
            return `saturate(${option.value}%)`;
          case "grayscale":
            return `grayscale(${option.value}%)`;
          case "sepia":
            return `sepia(${option.value}%)`;
          case "hue-rotate":
            return `hue-rotate(${option.value}deg)`;
          case "blur":
            return `blur(${option.value}px)`;
          default:
            return "";
        }
      })
      .join(" ");

    return {
      filter: filterStyle,
    };
  };

  const ApplyResize = async () => {
    try {
      if (mainImage) {
        const response = await axios.post("api/resize", {
          image: mainImage,
          width: Math.floor(width),
          height: Math.floor(height),
          format: frormat,
          quality: quality,
        });
        const resizeInfo = response.data;
        const resizedImageBase64 = resizeInfo.image;
        setImageMetadata({
          width: resizeInfo.width,
          height: resizeInfo.height,
          size: resizeInfo.size,
          format: resizeInfo.format,
        });

        await setMainImage(resizedImageBase64);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleButtonClickBgColor = (button: any) => {
    const [numerator, denominator] = button.ratio.split("/").map(Number);
    const aspectRatio = numerator / denominator;

    if (isNaN(aspectRatio) || numerator === 0 || denominator === 0) {
      setAspect(undefined); // Reset aspect if ratio is invalid
    } else {
      setAspect(aspectRatio); // Set aspect to the parsed ratio

      if (imgRef.current) {
        const { naturalWidth, naturalHeight } = imgRef.current;
        const newCrop = centerAspectCrop(
          naturalWidth,
          naturalHeight,
          aspectRatio
        );
        setCrop(newCrop);
        // Updates the preview
        // setCompletedCrop(convertToPixelCrop(newCrop, naturalWidth, naturalHeight))
      }
    }

    setSelectedButton(button.name);
    // onClickOnCrop();
  };

  const handleFlipSelect = (value: any) => {
    setFlipSelect(value);
    if (value === "horizontal") {
      setFlip(1);
      setFlipVertic(1);
    } else if (value === "flip-horizontel-mirror") {
      setFlip(-1);
      setFlipVertic(1);
    } else if (value === "flip-vertical") {
      setFlip(1);
      setFlipVertic(-1);
    } else if (value === "flip-vertical-mirror") {
      setFlip(-1);
      setFlipVertic(-1);
    } else {
      setFlip(1);
      setFlipVertic(1);
    }
  };

  const handleRotateSelect = (value: any) => {
    setRotate((prevRotate) => {
      let newRotate = prevRotate || 0; // Default to 0 if prevRotate is undefined
      if (value === "left-roted") {
        newRotate = (newRotate - 45 + 360) % 360; // Rotate left by subtracting 45 degrees
      } else if (value === "right-roted") {
        newRotate = (newRotate + 45) % 360; // Rotate right by adding 45 degrees
      }
      return newRotate;
    });
    setRotateSelect(value);
  };

  const onClickOnCrop = () => {
    if (aspect) {
      const { width, height } = imageMetadata;
      setCrop(centerAspectCrop(width, height, aspect));
      setFilterImgDownload(false);
    }
  };
  const onClickOnFilters = () => {
    setSliderValues({});
    setFilterImgDownload(true);
  };

  const saveCropImage = async () => {
    try {
      const imager = imgRef.current;
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      if (!ctx) {
        throw new Error("No 2d context");
      }

      if (imager && crop) {
        const pixelRatio = window.devicePixelRatio;
        const scaleX = imager.naturalWidth / imager.width;
        const scaleY = imager.naturalHeight / imager.height;

        canvas.width = Math.floor(crop.width * scaleX * pixelRatio);
        canvas.height = Math.floor(crop.height * scaleY * pixelRatio);

        ctx.scale(pixelRatio, pixelRatio);
        ctx.imageSmoothingQuality = "high";
        ctx.save();

        const cropX = crop.x * scaleX;
        const cropY = crop.y * scaleY;

        // Move the crop origin to the canvas origin (0,0)
        ctx.translate(-cropX, -cropY);

        ctx.drawImage(
          imager,
          0,
          0,
          imager.naturalWidth,
          imager.naturalHeight,
          0,
          0,
          imager.naturalWidth,
          imager.naturalHeight
        );

        // Get cropped image as base64 data URL
        const croppedImageBase64 = canvas.toDataURL("image/png");

        // Set cropped image as main image
        setMainImage(croppedImageBase64);
      }
    } catch (error) {
      console.error("Error cropping image:", error);
    }
  };

  const downloadChanges = async () => {
    try {
      setBtnDiseble(true);
      const imager = imgRef.current;
      const canvas = document.createElement("canvas");
      if (!imager) {
        throw new Error("Crop canvas does not exist");
      }

      canvas.width = imager.naturalWidth;
      canvas.height = imager.naturalHeight;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        throw new Error("No 2d context");
      }

      const filterStyle = getImageStyle();
      ctx.filter = `${filterStyle.filter}`;

      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate((rotate * Math.PI) / 180);
      ctx.scale(flip, flipVertic);

      ctx.drawImage(
        imager,
        -canvas.width / 2,
        -canvas.height / 2,
        canvas.width,
        canvas.height
      );

      // Add a delay of 1000 milliseconds (1 second)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const link = document.createElement("a");
      // link.download = `${nameText}`;
      link.download = "reslut_img.png";
      link.href = canvas.toDataURL();
      link.click();
    } catch (error) {
    } finally {
      setBtnDiseble(false);
    }
  };

  const handleFilterImgDownload = async () => {
    try {
      setBtnDiseble(true);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (imgRef.current) {
        domtoimage
          .toBlob(imgRef.current, { quality: 1 })
          .then(function (blob) {
            saveAs(blob, "result_img.png");
          })
          .catch(function (error) {
            console.error(
              "Oops, something went wrong with generating the image blob:",
              error
            );
          });
      } else {
        console.error("Ref to the image element is not available.");
      }
    } catch (error) {
      console.error("Oops, something went wrong:", error);
    } finally {
      setBtnDiseble(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-10 mt-5 lg:mx-20 md:mx-20 mx-2 overflow-hidden">
      <div className="lg:col-span-7 col-span-1">
        {mainImage && (
          <>
            <span className="text-zinc-600 text-sm font-sans font-semibold flex justify-between">
              <label htmlFor="nameText" className="flex">
                <BiEditAlt className="w-5 h-5" />

                <input
                  id="nameText"
                  type="text"
                  defaultValue={name ? name : "Loading..."}
                  className="border-0 outline-none bg-transparent"
                  onChange={(e) => setNameText(e.target.value)}
                />
              </label>

              <FullScreenPreview image={mainImage} />
            </span>
            <div className="h-fit min-h-72 w-full rounded-[10px] border border-dashed bg-purple-100/20 object-cover p-2 my-1">
              <ReactCrop
                crop={crop}
                onChange={(c) => setCrop(c)}
                // onChange={(pixelCrop, percentCrop) => setCrop(percentCrop)}
                aspect={aspect}
                // keepSelection={false}
                // minWidth={150}
              >
                <Image
                  src={mainImage}
                  ref={imgRef}
                  alt="Crop me"
                  width={700}
                  height={500}
                  style={{
                    objectFit: "contain",
                    ...getImageStyle(),
                    transform: `scale(${scale}) rotate(${rotate}deg) scaleX(${flip}) scaleY(${flipVertic})`,
                  }}
                  className={`rounded-md ${filterClass || ""}`}
                />
              </ReactCrop>
            </div>
            <div className="text-zinc-600 text-sm font-sans font-semibold flex justify-between">
              <label className="flex">
                <span className=" hidden lg:flex">dimensions:</span>{" "}
                {`${imageMetadata.width} X ${imageMetadata.height}`} &nbsp;
                <span className=" hidden lg:flex">Size:</span>
                &nbsp;
                {imageMetadata.size > 1048576 ? (
                  <span>{Math.floor(imageMetadata.size / 125000)} .mb</span>
                ) : (
                  <span>{imageMetadata.size / 1000} .kb</span>
                )}
              </label>
              <div className="flex">
                <button
                  onClick={() => {
                    setScale((prevScale) => prevScale + 0.1);
                  }}
                  disabled={scale >= 3}
                >
                  <FiPlus
                    className={`w-6 h-6 mx-2  ${
                      scale >= 3
                        ? "text-zinc-300 cursor-not-allowed"
                        : "hover:text-yellow-700"
                    }`}
                  />
                </button>
                <button
                  onClick={() => {
                    setScale((prevScale) => prevScale - 0.1);
                  }}
                  disabled={scale <= 1}
                >
                  <FiMinus
                    className={`w-6 h-6 mx-2 ${
                      scale <= 1
                        ? "text-zinc-300 cursor-not-allowed"
                        : "hover:text-yellow-700"
                    }`}
                  />
                </button>
                <Separator
                  orientation="vertical"
                  className="bg-zinc-900 mx-1"
                />
                <GrUndo className="w-6 h-6 mx-2" />
                <GrRedo className="w-6 h-6  mx-2" />
              </div>
            </div>
          </>
        )}
      </div>

      <div className="lg:col-span-5 col-span-1">
        <Tabs defaultValue="resize" className="w-full">
          <TabsList className="grid w-full grid-cols-5 bg-white">
            <TabsTrigger
              value="resize"
              onClick={() => setFilterImgDownload(false)}
            >
              Resize
            </TabsTrigger>
            <TabsTrigger value="crop" onClick={onClickOnCrop}>
              Crop
            </TabsTrigger>
            <TabsTrigger
              value="adjust"
              onClick={() => setFilterImgDownload(false)}
            >
              Adjust
            </TabsTrigger>
            <TabsTrigger value="filters" onClick={onClickOnFilters}>
              Filters
            </TabsTrigger>
          </TabsList>

          <TabsContent value="resize">
            <Card className="w-[350px] border-0 font-sans">
              <CardHeader>
                <CardTitle className="text-xl text-zinc-600 font-sans font-thin ">
                  Resize options
                </CardTitle>
                <CardDescription>
                  <Tabs defaultValue="Bypixels" className="w-[300px]">
                    <TabsList className="grid w-full grid-cols-2 bg-white">
                      <TabsTrigger value="Bypixels">By pixels</TabsTrigger>
                      <TabsTrigger value="Bypercentage">
                        By percentage
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="Bypixels">
                      <div className="flex  w-full max-w-sm items-center gap-1.5 mt-5">
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                          <Label htmlFor="width">Width</Label>
                          <Input
                            type="number"
                            value={width}
                            onChange={handleWidthChange}
                            id="width"
                          />
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                          <Label htmlFor="height">Hight</Label>
                          <Input
                            type="number"
                            value={height}
                            onChange={handleHeightChange}
                            id="height"
                          />
                        </div>
                        <Select>
                          <SelectTrigger className="w-[180px] border-0 mt-5">
                            <SelectValue placeholder="Pixel" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="px">Pixel</SelectItem>
                              <SelectItem value="in">inch</SelectItem>
                              <SelectItem value="cm">centimeter</SelectItem>
                              <SelectItem value="mm">millimeter</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-center space-x-2 mt-5">
                        <Checkbox
                          id="lockAspectRatio"
                          defaultChecked={lockAspectRatio}
                          onClick={handleLockAspectRatioChange}
                        />
                        <label
                          htmlFor="lockAspectRatio"
                          className="text-sm  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-zinc-500 font-sans  "
                        >
                          Lock Aspect Ratio
                        </label>
                      </div>
                    </TabsContent>
                    <TabsContent value="Bypercentage">
                      <Label
                        htmlFor="sliderPercentage"
                        className="flex justify-between"
                      >
                        <span>Size</span>
                        <span>
                          {Math.round((width / imageMetadata.width) * 100)} %
                        </span>
                      </Label>
                      <Slider
                        id="sliderPercentage"
                        defaultValue={[(width / imageMetadata.width) * 100]} // Use 100% as the default value
                        max={200} // Set max value to 200% as per your requirement
                        step={1}
                        onValueChange={(value: number[]) => {
                          const percentage = value[0]; // Get the percentage value from the slider
                          const newWidth =
                            (imageMetadata.width * percentage) / 100; // Calculate the new width based on the percentage
                          const aspectRatio =
                            imageMetadata.height / imageMetadata.width;
                          const newHeight = Math.round(newWidth * aspectRatio); // Calculate new height to maintain aspect ratio
                          setWidth(newWidth);
                          setHeight(newHeight);
                        }}
                        className="w-full p-2"
                      />
                    </TabsContent>
                  </Tabs>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-600 text-base">
                  Format: &nbsp;&nbsp;
                  <span className="text-zinc-900 font-bold text-sm">
                    default ( {imageMetadata.format} )
                  </span>
                </p>
                <RadioGroup
                  defaultValue={imageMetadata.format}
                  className="flex  text-zinc-500 font-sans mt-1"
                  onValueChange={(value) => setFrormat(value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="png" id="r1" />
                    <Label htmlFor="r1">PNG</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="jpeg" id="r2" />
                    <Label htmlFor="r2">JPG</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="webp" id="r3" />
                    <Label htmlFor="r3">WEBP</Label>
                  </div>
                </RadioGroup>
              </CardContent>
              <CardContent>
                <Label
                  htmlFor="quiltiy"
                  className="flex justify-between mb-2 text-zinc-500"
                >
                  <span>Quality</span>
                  <span>{quality} %</span>
                </Label>
                <Slider
                  id="quiltiy"
                  defaultValue={[quality]}
                  max={100}
                  step={1}
                  min={10}
                  onValueChange={(value: number[]) => {
                    setQuality(value[0]);
                  }}
                  className="w-full"
                />
                {imageMetadata.format === "jpeg" ? (
                  <div className="grid w-full max-w-sm items-center gap-1.5 mt-5 ">
                    <Label className="text-zinc-600" htmlFor="sizekb">
                      Aspect file size (optional)
                    </Label>
                    <div className="flex gap-2">
                      <Input type="number" id="sizekb" />
                      <Select>
                        <SelectTrigger className="w-[180px] border-0 text-zinc-700">
                          <SelectValue placeholder="kb" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="kb">KB</SelectItem>
                            <SelectItem value="mb">MB</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </CardContent>
              <CardFooter className="grid ">
                <Label
                  htmlFor="downloadBtn"
                  className=" flex justify-center items-center"
                >
                  <span className="mx-2 text-sm text-zinc-50 my-3 bg-zinc-500 px-2 rounded-full">
                    Final image is ({Math.round(width)} X {Math.round(height)})
                  </span>
                </Label>
                <Button
                  id="downloadBtn"
                  className="rounded-full  w-full"
                  onClick={ApplyResize}
                >
                  Apply changes
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="crop">
            <Card className="w-[350px] border-0">
              <CardHeader>
                <CardTitle className="text-xl text-zinc-500 font-sans font-thin ">
                  Crop
                </CardTitle>
                <CardDescription className="grid grid-cols-6 gap-2">
                  {buttonData.map((button) => (
                    <div className="items-center text-center" key={button.name}>
                      <Button
                        variant="outline"
                        size="icon"
                        id={button.name}
                        className={`hover:bg-black hover:text-white ${
                          selectedButton === button.name
                            ? "bg-gray-800 text-white"
                            : "bg-white text-black"
                        }`}
                        onClick={() => handleButtonClickBgColor(button)}
                      >
                        <button.icon className="h-4 w-4" />
                      </Button>
                      <span className="text-xs">{button.name}</span>
                    </div>
                  ))}
                </CardDescription>
                <CardTitle className="text-xl text-zinc-500 font-sans font-thin ">
                  Flip
                </CardTitle>
                <CardDescription className="flex gap-5">
                  {FlipButtonConstant.map((button) => (
                    <>
                      <Button
                        variant="outline"
                        size="icon"
                        className={`hover:bg-zinc-500 ${
                          flipSelect === button.name
                            ? "bg-zinc-400 text-white"
                            : ""
                        }`}
                        onClick={() => handleFlipSelect(button.name)}
                      >
                        <Image
                          src={button.src}
                          alt="flip"
                          width={20}
                          height={20}
                        />
                      </Button>
                    </>
                  ))}
                </CardDescription>
                <CardTitle className="text-xl text-zinc-500 font-sans font-thin ">
                  Rotate
                </CardTitle>
                <CardDescription className="flex gap-5">
                  {RotateButtonConstant.map((button) => (
                    <>
                      <Button
                        variant="outline"
                        size="icon"
                        className={`hover:bg-zinc-500 hover:text-white ${
                          rotateSelect === button.name
                            ? "bg-gray-800 text-white"
                            : "bg-white text-black"
                        }`}
                        onClick={() => handleRotateSelect(button.name)}
                      >
                        <button.icon className="h-4 w-4" />
                      </Button>
                    </>
                  ))}
                </CardDescription>
              </CardHeader>
              <CardContent></CardContent>
              <CardFooter className="grid">
                <Button
                  id="downloadBtn"
                  className="rounded-full  w-full hover:bg-white hover:text-black hover:border"
                  onClick={saveCropImage}
                >
                  Crop Image
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="adjust">
            <Card className="w-[350px] border-0">
              <CardHeader>
                {AdjustDefaultOption.map((option, index) => (
                  <div key={index}>
                    <CardTitle className="flex gap-1 text-lg   text-zinc-500 font-sans font-thin ">
                      <BsBrightnessHigh className="h-6 w-6 mt-1" />
                      <span>{option.name}</span>
                    </CardTitle>
                    <CardDescription>
                      <Slider
                        defaultValue={[option.value]}
                        name={option.property}
                        min={option.range?.min}
                        max={option.range?.max}
                        step={1}
                        onValueChange={(sliderValue: number[]) =>
                          handleSliderChange(sliderValue, option)
                        }
                        className="w-[100%] mt-2"
                      />
                    </CardDescription>
                  </div>
                ))}
              </CardHeader>
              <CardContent></CardContent>
              <CardFooter className="grid"></CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="filters">
            <span className="text-xl text-zinc-700 font-sans font-thin ">
              filters
            </span>

            <FilterSlide
              filterValues={filterValues}
              setFilterClass={setFilterClass}
            />
          </TabsContent>
        </Tabs>

        <Button
          size="icon"
          onClick={handleFilterImgDownload}
          className={`${
            filterImgDownload ? "flex" : "hidden"
          } absolute right-0 top-0 mt-[60px] mr-2 outline-dotted outline-2 outline-offset-2 bg-transparent z-10`}
        >
          {btnDiseble ? (
            <Button size="icon" disabled>
              <ReloadIcon className=" h-4 w-4 animate-spin" />
            </Button>
          ) : (
            <MdDownload className="w-7 h-7 text-zinc-700" />
          )}
        </Button>

        <Button
          size="icon"
          className={`${
            filterImgDownload ? "hidden" : "flex"
          } absolute right-0 top-0 mt-[60px] mr-2 outline-dotted outline-2 outline-offset-2 bg-transparent z-10`}
          id="downloadBtn"
          onClick={downloadChanges}
        >
          {btnDiseble ? (
            <Button size="icon" disabled>
              <ReloadIcon className=" h-4 w-4 animate-spin" />
            </Button>
          ) : (
            <MdDownload className="w-7 h-7 text-zinc-700" />
          )}
        </Button>
      </div>
    </div>
  );
};

export default EditPage;
