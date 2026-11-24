"use client";
import { useState } from "react";
import {
  Grid,
  GridItem,
  Dialog,
  Box,
  CloseButton,
  Portal,
  IconButton,
  HStack,
  Text,
} from "@chakra-ui/react";
import ExportedImage from "next-image-export-optimizer";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { ImageDetail } from "@/data/facility";

export interface ImageGalleryProps {
  images: ImageDetail[];
  aspectRatio?: string;
  /** A column count, or responsive counts such as { base: 3, mdDown: 2 }. */
  columns?: number | Record<string, number>;
}

/** A grid of thumbnails; clicking one opens it full size, with previous/next navigation. */
export const ImageGallery = ({
  images,
  columns = { base: 3, mdDown: 2, smDown: 1 },
  aspectRatio = "4/3",
}: ImageGalleryProps) => {
  const [selected, setSelected] = useState<number | null>(null);
  const image = selected === null ? null : images[selected];
  const step = (delta: number) =>
    setSelected((i) => (i === null ? i : (i + delta + images.length) % images.length));

  return (
    <>
      <Grid templateColumns={toTemplateColumns(columns)} gap={4}>
        {images.map((img, index) => (
          <GridItem key={`${img.imageSrc}-${index}`}>
            <Box
              as="button"
              display="block"
              width="100%"
              cursor="zoom-in"
              overflow="hidden"
              borderRadius="md"
              aria-label={`View photo: ${img.altText}`}
              onClick={() => setSelected(index)}
              css={{ "& img": { transition: "transform 0.3s ease-in-out" }, "&:hover img": { transform: "scale(1.04)" } }}
            >
              <ExportedImage
                src={img.imageSrc}
                alt={img.altText}
                width={400}
                height={300}
                style={{ objectFit: "cover", aspectRatio, width: "100%", height: "auto" }}
              />
            </Box>
          </GridItem>
        ))}
      </Grid>

      <Dialog.Root
        open={image !== null}
        onOpenChange={(e) => !e.open && setSelected(null)}
        size="xl"
        placement="center"
      >
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content
              onKeyDown={(e) => {
                if (e.key === "ArrowLeft") step(-1);
                if (e.key === "ArrowRight") step(1);
              }}
            >
              {image && (
                <>
                  <Dialog.Header p={4} paddingEnd={12}>
                    <Dialog.Title>{image.altText}</Dialog.Title>
                  </Dialog.Header>
                  <Dialog.Body padding={4} paddingTop={0}>
                    <Box position="relative" height={{ base: "70vh", mdDown: "50vh" }} width="100%">
                      <ExportedImage
                        src={image.imageSrc}
                        alt={image.altText}
                        fill={true}
                        sizes="(max-width: 1200px) 100vw, 1200px"
                        style={{ objectFit: "contain" }}
                      />
                    </Box>
                    {images.length > 1 && (
                      <HStack justifyContent="center" paddingTop={3} gap={4}>
                        <IconButton size="sm" variant="ghost" aria-label="Previous photo" onClick={() => step(-1)}>
                          <LuChevronLeft />
                        </IconButton>
                        <Text fontSize="sm" color="fg.muted">
                          {selected! + 1} / {images.length}
                        </Text>
                        <IconButton size="sm" variant="ghost" aria-label="Next photo" onClick={() => step(1)}>
                          <LuChevronRight />
                        </IconButton>
                      </HStack>
                    )}
                  </Dialog.Body>
                </>
              )}
              <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </>
  );
};

function toTemplateColumns(columns: number | Record<string, number>) {
  if (typeof columns === "number") return `repeat(${columns}, 1fr)`;
  return Object.fromEntries(Object.entries(columns).map(([bp, n]) => [bp, `repeat(${n}, 1fr)`]));
}
