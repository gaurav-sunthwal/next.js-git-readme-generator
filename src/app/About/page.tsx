"use client";

import {
  Box,
  Button,
  HStack,
  Heading,
  Textarea,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import HaderComponets from "../Components/HaderComponets";
import Image from "next/image";
import aboutMeImg from "../Img/aboutMe.png";
import { TbBulb } from "react-icons/tb";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppContext } from "../Context";
import NextBtn from "../Components/NextBtn";

let AboutMeData = `🔭 I'm currently working on
👯 I'm looking to collaborate on
🤝 I'm looking for help with
🌱 I'm currently learning
💬 Ask me about
⚡ Fun fact`;
export default function About() {
  const [aboutMeText, setAboutMeText] = useState("");
  const [isGraterthen] = useMediaQuery("(min-width: 1200px)");
  const { setAboutMe } = useAppContext();
  const router = useRouter();
  function submitAboutMe() {
    setAboutMe(aboutMeText);
    router.push("/Status");
  }
  return (
    <>
      <HaderComponets backLink={"/Main"} title={"Add a small introduction"} />
      <Box>
        <HStack
          w={"100%"}
          justifyContent={"space-between"}
          flexWrap={"wrap-reverse"}
        >
          <Box maxW={isGraterthen ? "30%" : "100%"} p={3}>
            <Image src={aboutMeImg} alt="About Me" />
          </Box>
          <Box
            w={"100%"}
            maxW={isGraterthen ? "70%" : "100%"}
            textAlign={"center"}
          >
            <Heading p={5} size={"3xl"}>
              About Me :
            </Heading>
            <Box w={"100%"}>
              <Textarea
                w={isGraterthen ? "70%" : "90%"}
                value={aboutMeText}
                onChange={(e) => {
                  setAboutMeText(e.target.value);
                }}
                rows={10}
                cols={15}
                fontSize={30}
                placeholder={AboutMeData}
              />
            </Box>
            <VStack p={3}>
              <HStack>
                <Box
                  onClick={() => {
                    setAboutMeText(AboutMeData);
                  }}
                  fontSize={"30px"}
                >
                  <TbBulb />
                </Box>
                <Box ml={3}>
                  <NextBtn handalOnClick={submitAboutMe} />
                </Box>
              </HStack>
            </VStack>
          </Box>
        </HStack>
      </Box>
    </>
  );
}
