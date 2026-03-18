import { Box } from "@chakra-ui/react";

export interface ZeffyProps {
    campaignName: string;
    campaignId: string;
}

export default function ZeffyCampaign({campaignName, campaignId}:ZeffyProps) {
    return (
        <Box position={"relative"} overflow={"hidden"} width={"100%"} height={"100vh"}>
            <Box asChild position="absolute" border="0" top="0" left="0" bottom="0" right="0" width="100%" height="100%">
                <iframe title={campaignName}
                    src={`https://www.zeffy.com/embed/ticketing/${campaignId}`}
                    allow="payment">
                </iframe>
            </Box>
        </Box>
  );
}