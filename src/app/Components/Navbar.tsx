"use client";

import { Box, Button, HStack, Heading } from "@chakra-ui/react";
import Image from "next/image";
import logo from "../Img/GR.jpeg";
import { IoMdMoon } from "react-icons/io";
import Link from "next/link";
import { CiCoffeeCup } from "react-icons/ci";

export default function Navbar() {
  return (
    <>
      <HStack
        p={2}
        bg={"black"}
        justifyContent={"space-between"}
        mb={"12px"}
        zIndex={43}
      >
        <Box>
          <Link href={"/"}>
            <Image width={60} alt="Logo" src={logo} />
          </Link>
        </Box>
        <HStack>
          <Box fontSize={"30px"} onClick={() => {}}>
            <IoMdMoon />
          </Box>
          <Box>
            <Link href={"https://paypal.me/gauravsunthwal"}>
              <Button bg={"#86EFAC"} borderRadius={20}>
                <Box color={"green"}>
                  <CiCoffeeCup />
                </Box>
                Donate us
              </Button>
            </Link>
          </Box>
        </HStack>
      </HStack>
      
    </>
  );
}
