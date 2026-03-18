'use client';

import { Box, Center, Link, VStack, Image, CenterProps, BoxProps } from "@chakra-ui/react";

export interface SocialMediaLinksProps extends BoxProps {

}
export default function SocialMediaLinks({...props}: SocialMediaLinksProps) {
    return (
        <Box {...props} paddingTop={{mdDown: 8}}>
            <VStack gap={8} textAlign={"center"}>
                {/* Facebook */}
                <Box>
                    <Link href="https://www.facebook.com/M2CYQG/" fontSize={{base: "xl", mdDown: "md"}}>
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
                    <Link href="https://www.instagram.com/m2cyqg/" fontSize={{base: "xl", mdDown: "md"}}>
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
                    <Link href="https://discord.gg/nSWAjkxtDp" fontSize={{base: "xl", mdDown: "md"}}>
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
        </Box>
    );
}