"use client";

import { Box, HStack, Heading } from "@chakra-ui/react";
import Image from "next/image";
import logo from "../Img/GR.jpeg";
import { IoMdMoon } from "react-icons/io";

export default function Navbar() {
  return (
    <>
      <HStack p={2} bg={"#171717"} justifyContent={"space-between"}>
        <Box>
          <Image width={60} alt="Logo" src={logo} />
        </Box>
        <HStack>
          <Box
            fontSize={"30px"}
            onClick={() => {
              
            }}
          >
            <IoMdMoon />
          </Box>
        </HStack>
      </HStack>
    </>
  );
}
