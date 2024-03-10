"use client";

import { Box, Button, HStack, Heading } from "@chakra-ui/react";
import Image from "next/image";
import logo from "../Img/GR.jpeg";
import { IoMdMoon } from "react-icons/io";
import Link from "next/link";
import { CiCoffeeCup } from "react-icons/ci";
import bmc from "../Img/bmc.svg";
export default function Navbar() {
  return (
    <>
      <HStack p={4} bg={"black"} justifyContent={"space-between"} zIndex={43}>
        <Box>
          <Link href={"/"}>
            <Image width={60} alt="Logo" src={logo} />
          </Link>
        </Box>
        <HStack>
          <Box>
            <Link href={"https://paypal.me/gauravsunthwal"}>
              <Button className="nextBtn" borderRadius={20}>
                <Box w={"30px"} p={2}>
                  <Image src={bmc} alt="bmc" />
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
