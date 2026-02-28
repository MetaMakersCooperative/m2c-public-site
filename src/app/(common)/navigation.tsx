"use client";

import {
  Box,
  Flex,
  Button,
  Stack,
  useDisclosure,
  Link,
  Menu,
  MenuItem,
  Accordion,
  Portal,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose, MdExpandMore } from "react-icons/md";
import { useState } from "react";
import { _zonePages } from "@/data/zones";

const navItems = [
  { label: "About", href: "/about" },
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
  { label: "Funding", href: "/funding" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const { open, onToggle } = useDisclosure();
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);

  const toggleMobileSubmenu = (label: string) => {
    setExpandedMobile(expandedMobile === label ? null : label);
  };

  return (
    <Box
      as="nav"
      bg="white"
      boxShadow="sm"
      position="sticky"
      top={0}
      zIndex={10}
      width="100%"
    >
      <Flex
        maxW="container.lg"
        mx="auto"
        px={4}
        py={4}
        justify="space-between"
        align="center"
      >
        <Link href="/">
          <img src="images/logo-black.svg" alt="Home" width="40px" />
        </Link>

        {/* Desktop Menu */}
        <Stack
          direction="row"
          gap="10px"
          display={{ base: "none", md: "flex" }}
          justifyContent="flex-end"
        >
          {navItems.map((item) => (
            <Box key={item.label}>
              {item.submenu ? (
                <Menu.Root>
                  <Menu.Trigger asChild>
                    <Button variant="ghost" padding="10px">
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
                            padding="10px"
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
                  <Button variant="ghost" padding="10px">
                    {item.label}
                  </Button>
                </Link>
              )}
            </Box>
          ))}
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
          px={4}
          py={4}
          gap={0}
          bg="gray.50"
          display={{ base: "flex", md: "none" }}
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
                      padding={"10px"}
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
                                padding="10px"
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
                  <Button variant="ghost" padding="10px" width="100%">
                    {item.label}
                  </Button>
                </Link>
              )}
            </Box>
          ))}
        </Stack>
      )}
    </Box>
  );
}
