import { Box } from "@chakra-ui/react";
import { HEADER_HEIGHT } from "@/data/navigation";
import { BANNER_HEIGHT } from "./slim-banner";

/**
 * Full-height embedded Zeffy form below the header and slim banner.
 * Pass either a Zeffy ticketing `campaignId`, or a complete `embedUrl` (https://www.zeffy.com/embed/...).
 *
 * @param {{ campaignId?: string, embedUrl?: string, title?: string }} props
 */
export default function ZeffyCampaign({campaignId, embedUrl, title = "Donation form powered by Zeffy"}) {
    return (
        <Box position="relative" overflow="hidden" width="100%" top={`calc(${HEADER_HEIGHT} + ${BANNER_HEIGHT})`} height={`calc(100vh - (${HEADER_HEIGHT} + ${BANNER_HEIGHT}))`}>
            <iframe title={title}
                style={{position: "absolute", border: 0, top:0, left:0, bottom:0, right:0, width: "100%", height: "100%"}}
                src={embedUrl ?? `https://www.zeffy.com/embed/ticketing/${campaignId}`}
                allowpaymentrequest="true"
                allowtransparency="true"
                allow="payment">
            </iframe>
        </Box>
    );
}
