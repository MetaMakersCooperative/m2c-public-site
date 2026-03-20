import { Center, CenterProps } from "@chakra-ui/react";

export interface GoogleCalendarProps extends CenterProps{
}

export default function GoogleCalendar({...props}: GoogleCalendarProps) {
    const rawHtml = `<iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FToronto&showPrint=0&showTabs=0&showTitle=0&src=bTJjLm1lbWJlcnNoaXBAZ21haWwuY29t&color=%23039be5" style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"></iframe>`
  return (
    <Center asChild {...props}>
        <div dangerouslySetInnerHTML={{ __html: rawHtml }} />
    </Center>
  );
}