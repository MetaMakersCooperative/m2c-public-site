import { Center, CenterProps } from "@chakra-ui/react";

export interface RecentFacebookPostsProps extends CenterProps {

}

export default function RecentFacebookPosts({...props}: CenterProps) {
    const rawHtml = `<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FM2CYQG&tabs=timeline&width=500&height=700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="500" height="700" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>`
  return (
    <Center {...props} overflowX="hidden">
        <div dangerouslySetInnerHTML={{ __html: rawHtml }} />
    </Center>
  );
}