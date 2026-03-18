"use client";

import {
  Box,
  Flex,
  Button,
  Stack,
  useDisclosure,
  Link as ChakraLink,
  Menu,
  Accordion,
  Portal,
  Image,
  BoxProps,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose, MdExpandMore } from "react-icons/md";
import { useState } from "react";
import { _navItems } from "@/data/navigation";
import { ColorModeButton } from "@/components/ui/color-mode";
import useScrollY from "@/components/useScrollY";
import NextLink from "next/link";

export const HEADER_HEIGHT = "72px";
export const HEADER_ALWAYS_SHOW_TOP = 150;

export interface NavigationProps extends BoxProps {
}

export default function Navigation({...boxProps}: NavigationProps) {
  const {scrollYDirection, scrollYPosition} = useScrollY();
  const {open, onToggle, setOpen } = useDisclosure();
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const showHeader = scrollYPosition < HEADER_ALWAYS_SHOW_TOP || open || scrollYDirection != "down";

  const toggleMobileSubmenu = (label: string) => {
    setExpandedMobile(expandedMobile === label ? null : label);
  };

  const handleMobileClick = () => setOpen(false);

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
        <ChakraLink asChild _focus={{outline: "none"}}>
          <NextLink href="/">
            <Image src="logos/logo-black.svg" display={{_light: "block", _dark: "none"}} alt="Home" width="40px" />
            <Image src="logos/logo-white.svg" display={{_light: "none", _dark: "block"}} alt="Home" width="40px" />
          </NextLink>
        </ChakraLink>

        {/* Desktop Menu */}
        <Stack 
          as="nav"
          direction="row"
          gap={4}
          display={{ base: "none", md: "flex" }}
          justifyContent="flex-end"
        >
          {_navItems.map((item) => (
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
                          >
                            <ChakraLink asChild _focus={{outline: "none"}}>
                              <NextLink href={sub.href}>{sub.label}</NextLink>
                            </ChakraLink>
                          </Menu.Item>
                        ))}
                      </Menu.Content>
                    </Menu.Positioner>
                  </Portal>
                  <Menu.ItemGroup></Menu.ItemGroup>
                </Menu.Root>
              ) : (
                <ChakraLink asChild>
                  <NextLink href={item.href}>
                    <Button variant="ghost" padding={4}>
                      {item.label}
                    </Button>
                  </NextLink>
                </ChakraLink>
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
          {_navItems.map((item) => (
            <Box key={item.label}>
              {item.submenu ? (
                <Box>
                  <Accordion.Root marginBottom={1}
                    value={expandedMobile === item.label ? [item.label] : []}
                  >
                    <Accordion.Item value={item.label}>
                      <Accordion.ItemTrigger 
                        px={4}
                        py={2}
                        fontSize={"14px"}
                        width="100%"
                        justifyContent="space-between"
                        onClick={() => toggleMobileSubmenu(item.label)}>
                          {item.label}
                          <MdExpandMore />
                      </Accordion.ItemTrigger>
                      <Accordion.ItemContent marginBottom={1}>
                        <Stack pl={4} gap={0}>
                          {item.submenu.map((sub) => (
                            <ChakraLink key={sub.label} asChild>
                              <NextLink href={sub.href} onClick={handleMobileClick}>
                                <Button
                                  variant="ghost"
                                  width="100%"
                                  justifyContent="flex-start"
                                  padding={4}
                                >
                                  {sub.label}
                                </Button>
                              </NextLink>
                            </ChakraLink>
                          ))}
                        </Stack>
                      </Accordion.ItemContent>
                    </Accordion.Item>
                  </Accordion.Root>
                </Box>
              ) : (
                <ChakraLink asChild>
                  <NextLink href={item.href} onClick={handleMobileClick}>
                    <Button variant="ghost" padding={4} width="100%">
                      {item.label}
                    </Button>
                  </NextLink>
                </ChakraLink>
              )}
            </Box>
          ))}
          <ColorModeButton />
        </Stack>
      )}
    </Box>
  );
}
