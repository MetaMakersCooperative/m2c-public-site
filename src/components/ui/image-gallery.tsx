"use client";
import { useState } from "react";
import {
  Grid,
  GridItem,
  Dialog,
  useDisclosure,
  Box,
  CloseButton,
  Portal,
} from "@chakra-ui/react";
import ExportedImage from "next-image-export-optimizer";
import { ImageDetail } from "@/data/facility";

export interface ImageGalleryProps {
  images: ImageDetail[];
  aspectRatio?: string;
  columns?: number;
}

export const ImageGallery = ({
  images,
  columns = 3,
  aspectRatio = "4/3",
}: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<ImageDetail | null>(null);
  const { open, onOpen, setOpen } = useDisclosure();

  const handleImageClick = (image: ImageDetail) => {
    setSelectedImage(image);
    onOpen();
  };

  return (
    <>
      <Grid templateColumns={`repeat(${columns}, 1fr)`} gap={6}>
        {images.map((image) => (
          <GridItem
            key={image.imageSrc}
            cursor="pointer"
            onClick={() => handleImageClick(image)}
          >
            <Box position="relative" height="250px" width="100%">
              <ExportedImage
                src={image.imageSrc}
                alt={image.altText}
                width={400}
                height={300}
                style={{ objectFit: "cover", aspectRatio: aspectRatio }}
              />
            </Box>
          </GridItem>
        ))}
      </Grid>

      {selectedImage && (
        <Dialog.Root
          open={open}
          onOpenChange={(e) => setOpen(e.open)}
          size="xl"
        >
          <Portal>
            <Dialog.Backdrop />
            <Dialog.Positioner>
              <Dialog.Content>
                <Dialog.Header>
                  <Dialog.Title>Dialog Title</Dialog.Title>
                </Dialog.Header>
                <Dialog.Body padding={4}>
                  <Box position="relative" height="500px" width="100%">
                    <ExportedImage
                      src={selectedImage.imageSrc}
                      alt={selectedImage.altText}
                      fill={true}
                      style={{ objectFit: "cover", aspectRatio: aspectRatio }}
                    />
                  </Box>
                </Dialog.Body>

                <Dialog.CloseTrigger asChild>
                  <CloseButton size="sm" />
                </Dialog.CloseTrigger>
              </Dialog.Content>
            </Dialog.Positioner>
          </Portal>
        </Dialog.Root>
      )}
    </>
  );
};
