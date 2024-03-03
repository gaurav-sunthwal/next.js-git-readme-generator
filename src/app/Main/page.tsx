//@ts-nocheck
"use client";

import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import Image from "next/image";
import code from "../Img/image.png";
import Link from "next/link";
export default function Main() {
  const [isGraterthen] = useMediaQuery("(min-width: 800px)");
  return (
    <>
      <VStack
        w={"100%"}
        height={isGraterthen ? "65vh" : "auto"}
        justifyContent={"center"}
      >
        <HStack w={"100%"} justifyContent={"space-around"} flexWrap={"wrap"}>
          <Box textAlign={"center"}>
            <Heading size={"3xl"} color={"#BBF7D0"} p={2}>
              Best Profile Generator
            </Heading>
            <Box p={2} m={3}>
              <form>
                <HStack>
                  <Input placeholder="Enter Your GitHub Username"/>
                  <Button type="submit">Goo!!</Button>
                </HStack>
              </form>
            </Box>
            <Heading p={3} m={2} size={"xl"} textAlign={"left"}>
              Create Perfect Profile
            </Heading>
          </Box>
          <Box maxW={"50%"}>
            <Image alt="code" src={code} />
          </Box>
        </HStack>
      </VStack>
    </>
  );
}
