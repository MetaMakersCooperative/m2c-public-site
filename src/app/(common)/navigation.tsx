"use client";

import {
  Box,
  Flex,
  Button,
  Stack,
  useDisclosure,
  Link,
  LinkBox,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Membership", href: "/membership" },
  { label: "Classes ", href: "/classes" },
  { label: "Zones", href: "#zones" },
  { label: "Funding", href: "/funding" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const { open, onToggle } = useDisclosure();

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
          mdDown={{ display: "none" }}
          justifyContent={"flex-end"}
        >
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} textDecoration="underline">
              <Button variant="ghost" padding="10px">
                {item.label}
              </Button>
            </Link>
          ))}
        </Stack>

        {/* Mobile Menu Button */}
        <Button
          display={{ base: "none", mdDown: "flex" }}
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
          gap={3}
          bg="gray.50"
          display={{ base: "none", mdDown: "flex" }}
        >
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} textDecoration="underline">
              <Button variant="ghost" padding="10px">
                {item.label}
              </Button>
            </Link>
          ))}
        </Stack>
      )}
    </Box>
  );
}
