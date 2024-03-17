//@ts-nocheck
"use client";

import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  VStack,
  border,
  useMediaQuery,
} from "@chakra-ui/react";
import Image from "next/image";
import code from "../Img/image.png";
import { GrLinkNext } from "react-icons/gr";
import Link from "next/link";
import { useState } from "react";
import { useAppContext } from "../Context";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import NextBtn from "../Components/NextBtn";
export default function Main() {
  const [isGraterthen] = useMediaQuery("(min-width: 1000px)");
  const [gitName, setGitName] = useState("");
  const { userName, setUserName } = useAppContext();
  const router = useRouter();
  function handalSearch(e) {
    e.preventDefault();
    setUserName(gitName);
    gitName != ""
      ? router.push("/About")
      : toast.error("Please enter UserName");
  }
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <VStack
        w={"100%"}
        height={isGraterthen ? "65vh" : "auto"}
        justifyContent={"center"}
      >
        <HStack justifyContent={"space-around"} flexWrap={"wrap"}>
          <Box maxW={isGraterthen ? "50%" : "100%"}>
            <Heading m={2} padding={3} size={"3xl"} color={"#BBF7D0"} p={2}>
              Best Profile Generator
            </Heading>
            <Box p={2} m={3}>
              <form>
                <HStack>
                  <Input
                    type="username"
                    borderRadius={0}
                    border={"none"}
                    borderBottom={"2px"}
                    placeholder="Enter Your GitHub Username"
                    value={gitName}
                    _focus={{
                      boxShadow: "none",
                    }}
                    onChange={(e) => {
                      setGitName(e.target.value);
                    }}
                    required
                  />
                  <Button type="submit" className="nextBtn" onClick={handalSearch}>
                    <GrLinkNext />
                  </Button>
                </HStack>
              </form>
            </Box>
            <Heading p={3} m={2} size={"xl"} textAlign={"left"}>
              Create <span>Modal</span> Profile
            </Heading>
          </Box>
          <Box maxW={isGraterthen ? "50%" : "100%"}>
            <Image alt="code" src={code} />
          </Box>
        </HStack>
      </VStack>
    </>
  );
}
