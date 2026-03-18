'use client';
import { Box, useBreakpointValue } from "@chakra-ui/react";

export default function RecentFacebookPosts({...props}) {
  const width = useBreakpointValue({base: "400", smDown: "300"});
  return (
        <Box asChild {...props} p={{mdDown: 8}} margin={"0 0"}>
            <iframe src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FM2CYQG&tabs=timeline&width=${width}&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`} width={width} height="600" style={{border:"none",overflow:"hidden"}} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </Box>
  );
}