'use client';

import { Box, Center, Link, VStack } from "@chakra-ui/react";
import ExportedImage from "next-image-export-optimizer";

export default function SocialMediaLinks() {
    return (
        <Center>
            <VStack gap={8}>
                {/* Facebook */}
                <Box>
                    <Link href="https://www.facebook.com/M2CYQG/" fontSize={"xl"}>
                        <ExportedImage
                            src="images/social/facebook.png"
                            alt="Facebook Logo"
                            width={80}
                            height={50}
                        />
                        Meta Makers Cooperative
                    </Link>
                </Box>

                {/* Instagram */}
                <Box>
                    <Link href="https://www.instagram.com/m2cyqg/" fontSize={"xl"}>
                        <ExportedImage
                            src="images/social/instagram.png"
                            alt="Instagram Logo"
                            width={103}
                            height={29}
                        />
                        @m2cyqg
                    </Link>
                </Box>

                {/* Discord */}
                <Box>
                    <Link href="https://discord.gg/nSWAjkxtDp" fontSize={"xl"}>
                        <ExportedImage
                            src="images/social/discord.svg"
                            alt="Discord Logo"
                            width={160}
                            height={54.413}
                        />
                        MetaMakers
                    </Link>
                </Box>
            </VStack>
        </Center>
    );
}