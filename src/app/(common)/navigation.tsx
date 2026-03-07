"use client";

import {
  Box,
  Flex,
  Button,
  Stack,
  useDisclosure,
  Link,
  Menu,
  Accordion,
  Portal,
  Image,
  BoxProps,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose, MdExpandMore } from "react-icons/md";
import { useEffect, useState } from "react";
import { _zonePages } from "@/data/zones";
import { ColorModeButton } from "@/components/ui/color-mode";
import useScrollDirection from "@/components/useScrollY";
import useScrollY from "@/components/useScrollY";

export const HEADER_HEIGHT = "72px";

const navItems = [
  { label: "About", href: "/about",
    submenu: [{
      label: "Meta Makers Cooperative",
      href: `/about`,
    },
    // {
    //   label: "Location",
    //   href: `/location`,
    // },
    {
      label: "News",
      href: `/news`,
    }] 
  },
  { label: "Membership", href: "/membership" },
  { label: "Classes", href: "/classes" },
  {
    label: "Zones",
    href: "#zones",
    submenu: _zonePages.map((zone) => ({
      label: zone.name,
      href: `/${zone.slug}`,
    })),
  },
  { label: "Funding", href: "/sponsorship" ,
    submenu: [{
      label: "Sponsorship",
      href: `/sponsorship`,
    },
    // {
    //   label: "Grants",
    //   href: `/grants`,
    // }
  ] 
  },
  { label: "Contact", href: "/contact" },
];

export interface NavigationProps extends BoxProps {
  
}

export default function Navigation({...boxProps}: NavigationProps) {
  const {scrollYDirection, scrollYPosition} = useScrollY();
  const {open, onToggle } = useDisclosure();
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    //show the header when near the top of page (such as when dragging from top to refresh) or when mobile menu is open, or when scrolling up (or initial state)
    setShowHeader(scrollYPosition < 300 || open || scrollYDirection != "down")
  }, [open, scrollYDirection, scrollYPosition, setShowHeader])

  const toggleMobileSubmenu = (label: string) => {
    setExpandedMobile(expandedMobile === label ? null : label);
  };

  return (
    <Box as="header"
      position="fixed"
      top="0"
      height={HEADER_HEIGHT}
      backgroundColor={{_light: "white", _dark:"#111"}}
      boxShadow="sm"
      zIndex={1000}
      width="100%"
      transform={showHeader ? "translateY(0)" : "translateY(-100%)"}
      visibility={showHeader ? "visible" : "hidden"}
      transition={showHeader 
        ? "transform 0.3s ease-out, visibility 0s linear 0s"
        : "transform 0.3s ease-out, visibility 0s linear 0.3s"
      }
      {...boxProps}>
      <Flex
        maxW="container.lg"
        mx="auto"
        px={4}
        py={4}
        justify="space-between"
        align="center"
      >
        <Link href="/">
          <Image src="logos/logo-black.svg" display={{_light: "block", _dark: "none"}} alt="Home" width="40px" />
          <Image src="logos/logo-white.svg" display={{_light: "none", _dark: "block"}} alt="Home" width="40px" />
        </Link>

        {/* Desktop Menu */}
        <Stack 
          as="nav"
          direction="row"
          gap={4}
          display={{ base: "none", md: "flex" }}
          justifyContent="flex-end"
        >
          {navItems.map((item) => (
            <Box key={item.label}>
              {item.submenu ? (
                <Menu.Root>
                  <Menu.Trigger asChild>
                    <Button variant="ghost" padding={4}>
                      {item.label}
                      <MdExpandMore />
                    </Button>
                  </Menu.Trigger>
                  <Portal>
                    <Menu.Positioner>
                      <Menu.Content>
                        {item.submenu.map((sub) => (
                          <Menu.Item
                            key={sub.href}
                            value={sub.href}
                            asChild
                            padding={4}
                            _focus={{outline: "none"}}
                          >
                            <Link href={sub.href}>{sub.label}</Link>
                          </Menu.Item>
                        ))}
                      </Menu.Content>
                    </Menu.Positioner>
                  </Portal>
                  <Menu.ItemGroup></Menu.ItemGroup>
                </Menu.Root>
              ) : (
                <Link href={item.href}>
                  <Button variant="ghost" padding={4}>
                    {item.label}
                  </Button>
                </Link>
              )}
            </Box>
          ))}
          <ColorModeButton />
        </Stack>

        {/* Mobile Menu Button */}
        <Button
          display={{ base: "flex", md: "none" }}
          onClick={onToggle}
          variant="ghost"
        >
          {open ? <MdClose size={24} /> : <GiHamburgerMenu size={24} />}
        </Button>
      </Flex>

      {/* Mobile Menu */}
      {open && (
        <Stack
          as="nav"
          px={4}
          py={4}
          gap={0}
          display={{ base: "flex", md: "none" }}
          backgroundColor={{_light: "white", _dark:"#111"}}
          height={`calc(100vh - ${HEADER_HEIGHT})`} /* Fill rest of viewport */
          overflowY="scroll" /* Enable vertical scrolling */
        >
          {navItems.map((item) => (
            <Box key={item.label}>
              {item.submenu ? (
                <Box>
                  <Accordion.Root
                    value={expandedMobile === item.label ? [item.label] : []}
                  >
                    <Accordion.Item value={item.label}>
                      <Accordion.ItemTrigger 
                      padding={4}
                        fontSize={"14px"}
                          width="100%"
                          justifyContent="space-between"
                          onClick={() => toggleMobileSubmenu(item.label)}>
                        
                          {item.label}
                          <MdExpandMore />
                      </Accordion.ItemTrigger>
                      <Accordion.ItemContent>
                        <Stack pl={4} gap={0}>
                          {item.submenu.map((sub) => (
                            <Link key={sub.label} href={sub.href}>
                              <Button
                                variant="ghost"
                                width="100%"
                                justifyContent="flex-start"
                                padding={4}
                              >
                                {sub.label}
                              </Button>
                            </Link>
                          ))}
                        </Stack>
                      </Accordion.ItemContent>
                    </Accordion.Item>
                  </Accordion.Root>
                </Box>
              ) : (
                <Link href={item.href}>
                  <Button variant="ghost" padding={4} width="100%">
                    {item.label}
                  </Button>
                </Link>
              )}
            </Box>
          ))}
          <ColorModeButton />
        </Stack>
      )}
    </Box>
  );
}
