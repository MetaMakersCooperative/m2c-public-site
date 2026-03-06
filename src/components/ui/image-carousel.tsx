"use client";
import { ImageDetail } from "@/data/facility";
import { Carousel, IconButton } from "@chakra-ui/react";
import ExportedImage from "next-image-export-optimizer";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

export interface ImageGalleryProps {
  images: ImageDetail[];
  aspectRatio?: string;
  columns?: number;
}

export const ImageCarousel = ({
  images,
  columns = 3,
  aspectRatio = "4/3",
}: ImageGalleryProps) => {
  return (
    <Carousel.Root slideCount={images.length} width="full">
      <Carousel.Control justifyContent="center" gap="4" width="full">
        <Carousel.PrevTrigger
          asChild
          display={{ base: "flex", mdDown: "none" }}
        >
          <IconButton size={"xl"} variant="outline" colorPalette={"purple"}>
            <LuChevronLeft />
          </IconButton>
        </Carousel.PrevTrigger>

        <Carousel.ItemGroup width="full">
          {images.map((item, index) => (
            <Carousel.Item
              key={index}
              index={index}
              display={"flex"}
              justifyContent={"center"}
            >
              <ExportedImage
                src={item.imageSrc}
                alt={item.altText}
                width={1000}
                height={750}
                style={{ objectFit: "cover", aspectRatio: aspectRatio }}
              />
            </Carousel.Item>
          ))}
        </Carousel.ItemGroup>

        <Carousel.NextTrigger
          asChild
          display={{ base: "flex", mdDown: "none" }}
        >
          <IconButton size={"xl"} variant="outline" colorPalette={"purple"}>
            <LuChevronRight />
          </IconButton>
        </Carousel.NextTrigger>
      </Carousel.Control>

      <Carousel.IndicatorGroup display={{ base: "flex", mdDown: "none" }}>
        {images.map((item, index) => (
          <Carousel.Indicator
            key={index}
            index={index}
            unstyled
            _current={{
              outline: "2px solid currentColor",
              outlineOffset: "2px",
            }}
          >
            <ExportedImage
              src={item.imageSrc}
              alt={item.altText}
              width={200}
              height={150}
              style={{ objectFit: "cover", aspectRatio: aspectRatio }}
            />
          </Carousel.Indicator>
        ))}
      </Carousel.IndicatorGroup>

      <Carousel.Control
        justifyContent="center"
        gap="4"
        display={{ base: "none", mdDown: "flex" }}
      >
        <Carousel.PrevTrigger asChild>
          <IconButton size="xs" variant="ghost">
            <LuChevronLeft />
          </IconButton>
        </Carousel.PrevTrigger>

        <Carousel.Indicators />

        <Carousel.NextTrigger asChild>
          <IconButton size="xs" variant="ghost">
            <LuChevronRight />
          </IconButton>
        </Carousel.NextTrigger>
      </Carousel.Control>
    </Carousel.Root>
  );
};
