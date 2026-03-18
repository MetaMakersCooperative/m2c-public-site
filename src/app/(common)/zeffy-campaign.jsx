import { Box } from "@chakra-ui/react";

export default function ZeffyCampaign({campaignId}) {
    return (
        <Box position="relative" overflow="hidden" width="100%" height="100vh">
            <iframe title='Donation form powered by Zeffy' 
                style={{position: "absolute", border: 0, top:0, left:0, bottom:0, right:0, width: "100%", height: "100%"}}
                src={`https://www.zeffy.com/embed/ticketing/${campaignId}`}
                allowpaymentrequest 
                allowTransparency="true">
            </iframe>
        </Box>
    );
}