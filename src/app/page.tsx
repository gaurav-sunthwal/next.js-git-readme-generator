"use client";

import {
  Box,
  Button,
  Card,
  HStack,
  Heading,
  Text,
  VStack,
  transform,
  useMediaQuery,
} from "@chakra-ui/react";
import Image from "next/image";
import Navbar from "./Components/Navbar";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";

import dots from "../app/Img/worn-dots.png";
import app from "../app/Img/homeImg.png";
export default function Home() {
  const [isGraterthen] = useMediaQuery("(min-width: 1000px)");

  return (
    <>
      <HStack p={3} justifyContent={"center"}>
        <Box>
          <VStack
            p={2}
            justifyContent={"center"}
            h={isGraterthen ? "50vh" : "auto"}
          >
            <Heading size={"3xl"} textAlign={"center"}>
              The easiest way to create a <br />
            </Heading>
            <Heading size={"4xl"} color="#10B981">
              README
            </Heading>
            <Box w={isGraterthen ? "80%" : "100%"} p={3}>
              <Heading color={"#737373"} textAlign={"center"} size={"md"}>
                Our simple editor allows you to quickly add and customize all
                the sections you need for your projects readme
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
            </VStack>
          </VStack>
        </Box>
      </HStack>
      <VStack justifyContent={"center"} p={3} mt={"5px"}>
        <Card
          border={"2px solid white"}
          w={isGraterthen ? "90%" : "100%"}
        >
          <Image src={app} alt="app" />
        </Card>
      </VStack>
    </>
  );
}

// bg="#10B981"
