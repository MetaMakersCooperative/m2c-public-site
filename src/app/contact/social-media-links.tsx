'use client';

import { Box, Center, Link, VStack, Image, CenterProps } from "@chakra-ui/react";

export interface SocialMediaLinksProps extends CenterProps {

}
export default function SocialMediaLinks({...props}: SocialMediaLinksProps) {
    return (
        <Center {...props}>
            <VStack gap={8}>
                {/* Facebook */}
                <Box>
                    <Link href="https://www.facebook.com/M2CYQG/" fontSize={"xl"}>
                        <Image
                            src="logos/social/facebook.png"
                            alt="Facebook Logo"
                            width="80px"
                            height="50px"
                        />
                        Meta Makers Cooperative
                    </Link>
                </Box>

                {/* Instagram */}
                <Box>
                    <Link href="https://www.instagram.com/m2cyqg/" fontSize={"xl"}>
                        <Image
                            src="logos/social/instagram.png"
                            alt="Instagram Logo"
                            width="103px"
                            height="29px"
                            _dark={{filter: "invert(100%)"}}
                        />
                        @m2cyqg
                    </Link>
                </Box>

                {/* Discord */}
                <Box>
                    <Link href="https://discord.gg/nSWAjkxtDp" fontSize={"xl"}>
                        <Image
                            src="logos/social/discord.svg"
                            alt="Discord Logo"
                            width="160px"
                            height="54.413px"
                        />
                        MetaMakers
                    </Link>
                </Box>
            </VStack>
        </Center>
    );
}