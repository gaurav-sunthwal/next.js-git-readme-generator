//@ts-nocheck
"use client";

import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Input,
  Text,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import HaderComponets from "../Components/HaderComponets";
import { FaSearch } from "react-icons/fa";
import { useAppContext } from "../Context";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import NextBtn from "../Components/NextBtn";
import { useRouter } from "next/navigation";
import skillImg from "../Img/skills.png";

export default function SkillsTags() {
  const [isGraterthen] = useMediaQuery("(min-width: 700px)");
  const {
    skills,
    searchfor,
    setSearchfor,
    LANGUAGESArr,
    Hosting,
    allTech,
    Database,
    other,
  } = useAppContext();
  const router = useRouter();
  function submitSkills() {
    router.push("/Donate");
  }
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
            w={isGraterthen ? "30%" : "80%"}
            borderRadius={"50px"}
            value={searchfor}
            onChange={(e) => {
              setSearchfor(e.target.value);
            }}
          />
          <Button borderRadius={"50px"}>
            <FaSearch />
          </Button>
        </HStack>
      </VStack>

      <Box p={3}>
        <SkillsSec
          title={`FRAMEWORKS, PLATFORMS & LIBRARIES`}
          arrName={allTech}
        />
        <SkillsSec title={"LANGUAGES"} arrName={LANGUAGESArr} />
        <SkillsSec title={"Hosting/SaaS"} arrName={Hosting} />
        <SkillsSec title={`DATABASES`} arrName={Database} />
        <SkillsSec title={"Other"} arrName={other} />
      </Box>
      <HStack
        p={2}
        justifyContent={"center"}
        flexWrap={"wrap"}
        // w={"100%"}
        // position={"fixed"}
      >
        {skills.map((item, index) => {
          return (
            <>
              <Box>
                <Image
                  w={"100%"}
                  src={`https://skillicons.dev/icons?i=${item.toLowerCase()}`}
                  alt={item}
                />
              </Box>
            </>
          );
        })}
      </HStack>
      <VStack>
        <NextBtn handalOnClick={submitSkills} />
      </VStack>
    </>
  );
}

function SkillsSec({ title, arrName }) {
  const { skills, setSkills, searchfor } = useAppContext();
  const [add, setAdd] = useState(false);
  const filteredData = arrName.filter((item) =>
    item.toLowerCase().includes(searchfor.toLowerCase())
  );

  return (
    <Box textAlign={"center"} p={3}>
      <Heading p={"2"} size={"md"}>
        {title}
      </Heading>
      <HStack flexWrap={"wrap"} justifyContent={"center"}>
        {filteredData.map((item, index) => {
          return (
            <Box
              onClick={(e) => {
                const allSkills = [...skills, item];
                skills.includes(item)
                  ? setSkills(allSkills.filter((skill) => skill !== item))
                  : setSkills(allSkills);
              }}
              cursor={"pointer"}
              key={index}
              bg={"#DCFCE7"}
              color={"black"}
              p={2}
              m={1}
              borderRadius={"5px"}
            >
              <HStack>
                <Box>
                  <Text fontWeight={"400"}>{item}</Text>
                </Box>
                <Box>|</Box>
                <Box>
                  <Heading size={"md"}>
                    {skills.includes(item) ? <TiTick /> : <IoMdAdd />}
                  </Heading>
                </Box>
              </HStack>
            </Box>
          );
        })}
      </HStack>
    </Box>
  );
}
