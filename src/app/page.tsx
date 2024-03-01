import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Navbar from "./Components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <VStack p={2} justifyContent={"center"} h={"50vh"}>
        <Heading size={"xl"} textAlign={"center"}>
          The easiest way to create a <br /> <samp color="#10B981">README</samp>
        </Heading>
      </VStack>
    </>
  );
}

// bg="#10B981"
