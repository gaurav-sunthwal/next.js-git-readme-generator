//@ts-nocheck
"use client";

import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import HaderComponets from "../Components/HaderComponets";
import skills from "../Img/skills.png";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
export default function SkillsTags() {
  const LANGUAGESArr = [
    "en",
    "dfv",
    "he",
    "dsffv",
    "dzfg",
    "dsffv",
    "dzfg",
    "he",
    "dsffv",
    "dzfg",
    ,
    "he",
    "dsffv",
    "dzfg",
    ,
    "he",
    "dsffv",
    "dzfg",
    ,
    "he",
    "dsffv",
    "dzfg",
    ,
    "he",
    "dsffv",
    "dzfg",
    ,
    "he",
    "dsffv",
    "dzfg",
    ,
    "he",
    "dsffv",
    "dzfg",
  ];
  return (
    <>
      <HaderComponets
        backLink={"/SocalMedia"}
        title={"Add Tech that you use"}
      />
      <VStack w={"100%"}>
        <HStack m={4} w={"100%"} justifyContent={"center"}>
          <Input
            placeholder="Search.."
            p={6}
            w={"30%"}
            borderRadius={"50px"}
            p={3}
          />
          <Button borderRadius={"50px"}>
            <FaSearch />
          </Button>
        </HStack>
      </VStack>
      <HStack>
        <Box maxW={"50%"} p={3}>
          <Image alt="skillsPNG" src={skills} />
        </Box>
        <Box maxW={"50%"}>
          <SkillsSec title={"LANGUAGES"} arrName={LANGUAGESArr} />
        </Box>
      </HStack>
    </>
  );
}

function SkillsSec({ title, arrName }) {
  return (
    <Box textAlign={"center"}>
      <Heading p={"2"} size={"md"}>
        {title}
      </Heading>
      <HStack flexWrap={"wrap"} justifyContent={"center"}>
        {arrName.map((item, index) => {
          return (
            <Box
              key={index}
              bg={"#DCFCE7"}
              color={"black"}
              p={2}
              borderRadius={"5px"}
            >
              <HStack>
                <Box>
                  <Heading size={"sm"} key={index}>
                    {item}
                  </Heading>
                </Box>
                <Box>| +</Box>
              </HStack>
            </Box>
          );
        })}
      </HStack>
    </Box>
  );
}
