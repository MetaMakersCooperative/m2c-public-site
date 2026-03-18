'use client';
import { Box, BoxProps, useBreakpointValue } from "@chakra-ui/react";

export interface RecentFacebookPostsProps extends BoxProps {

}

export default function RecentFacebookPosts({...props}: RecentFacebookPostsProps) {
  const width = useBreakpointValue({base: "400", mdDown: "300"});
  return (
        <Box asChild {...props} p={{mdDown: 8}} margin={"0 0"}>
            <iframe title="Meta Makers Cooperative Facebook Page" width={width} height="700"
                src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FM2CYQG&tabs=timeline&width=${width}&height=700&adapt_container_width=true`}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
            </iframe>
        </Box>
  );
}