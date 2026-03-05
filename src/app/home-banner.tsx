import { AbsoluteCenter, Container, Heading, HStack, VStack, Image } from "@chakra-ui/react";
import { _zonePages } from "@/data/zones";
import ExportedImage from "next-image-export-optimizer";

export default function HomeBanner() {
  return (
    <Container width="100%" height="auto" aspectRatio={21/9} >
        <ExportedImage
            preload={true}
            src="images/home.webp"
            alt="Meta Makers Cooperative"
            fill={true}
            style={{objectFit: "cover", filter: "brightness(50%)"}}
        />
        <AbsoluteCenter width="100%"> 
            
            <HStack width="75%">
                <Image src="logos/logo-white.svg" width={"40%"}/>
                <VStack p={4} width="60%" textAlign="left">
                <Heading size={{smDown: "lg", mdDown: "3xl", lgDown: "5xl", xlDown:"6xl",base:"7xl"}} color="white">Meta Makers Cooperative Makerspace</Heading>
                <Heading width="100%" alignSelf="baseline" paddingTop={8}  mdDown={{display: "none"}} size={{lgDown: "md", xlDown:"2xl",base:"4xl"}} color="white">Explore • Collaborate • Make</Heading>
                </VStack>
            </HStack>

        </AbsoluteCenter>
    </Container>
  );
}