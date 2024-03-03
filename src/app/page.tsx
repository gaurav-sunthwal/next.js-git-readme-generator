import { Box, Button, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Navbar from "./Components/Navbar";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";

import dots from "../app/Img/worn-dots.png";
import app from "../app/Img/app.webp";
export default function Home() {
  return (
    <>
      <HStack p={3} justifyContent={"center"}>
        <Box>
          <VStack p={2} justifyContent={"center"} h={"60vh"}>
            <Heading size={"3xl"} textAlign={"center"}>
              The easiest way to create a <br />
            </Heading>
            <Heading size={"4xl"} color="#10B981">
              README
            </Heading>
            <Box w={"80%"} p={3}>
              <Heading color={"#737373"} textAlign={"center"} size={"md"}>
              Our simple editor allows you to quickly add and customize all the sections you need for your projects readme
              </Heading>
            </Box>
            <VStack>
              <Link href={"/Main"}>
                <Button
                  bg={"#10B981"}
                  _hover={{
                    backgroundColor: "#10B990",
                  }}
                  p={23}
                  m={3}
                >
                  Get Started
                </Button>
              </Link>
              <Button
                bg={"transparent"}
                color={"#737373"}
                border={"1px solid"}
                _hover={{
                  background: "transparent",
                }}
              >
                <CiHeart /> <Text> Sponsor</Text>
              </Button>
            </VStack>
          </VStack>
        </Box>
      </HStack>
      <VStack justifyContent={"center"} p={3} mt={"20px"}>
        <Box w={"90%"}>
          <Image src={app} alt="app" />
        </Box>
      </VStack>
    </>
  );
}

// bg="#10B981"
