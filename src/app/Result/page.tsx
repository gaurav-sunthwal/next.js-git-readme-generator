//@ts-nocheck
"use client";

import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import { useAppContext } from "../Context";
import HaderComponets from "../Components/HaderComponets";
import Link from "next/link";
import { useState } from "react";

export default function Result() {
  const { userName, aboutMe, stats1, stats2, stats3, links, skills, payment } =
    useAppContext();
  // console.log({...links});
  const [isGraterthen] = useMediaQuery("(min-width: 1000px)");

  const [code, setCode] = useState("working on it...");
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        alert("Text copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };
  return (
    <>
      <HaderComponets
        backLink={"/AddMore"}
        title={"Your Awesome Profile is ready !"}
      />
      <HStack justifyContent={"center"} flexWrap={"wrap"}>
        <ResultBtn title={"Copy Code"} handalClick={copyToClipboard} />
        <ResultBtn title={"Download Markdown File"} />
        <ResultBtn title={"Create New"} />
      </HStack>
      <Box m={5}>
        <HStack justifyContent={"center"}>
          <Text
            textAlign={"center"}
            border={"2px solid"}
            fontSize={"22px"}
            p={2}
            borderRadius={15}
            borderBottomRightRadius={0}
            borderBottomLeftRadius={0}
            w={isGraterthen ? "15%" : "auto"}
            bg={"#BBF7D0"}
            color={"black"}
          >
            Preview
          </Text>
        </HStack>
        <Preview />
      </Box>
    </>
  );
}

function ResultBtn({ title, handalClick }) {
  return (
    <Button m={2} className="nextBtn" onClick={handalClick}>
      {title}
    </Button>
  );
}

function Preview() {
  const [isGraterthen] = useMediaQuery("(min-width: 1000px)");
  const { userName, aboutMe, stats1, stats2, stats3, links, skills, payment } =
    useAppContext();
  return (
    <HStack m={3} mt={0} justifyContent={"center"}>
      <Box
        p={4}
        border={"2px solid"}
        bg={"#27272A"}
        borderRadius={4}
        w={isGraterthen ? "70%" : "100%"}
      >
        <Box>
          {aboutMe !== "" ? (
            <Box>
              <Heading p={2}>💫 About Me:</Heading>
              <hr />
              <Text p={3}>{aboutMe}</Text>
            </Box>
          ) : (
            ""
          )}

          {/* Socals  */}

          <Box>
            <Heading p={2}>🌐 Socials:</Heading>
            <hr />
            <HStack flexWrap={"wrap"}>
              {Object.keys(links).map((key) => {
                return (
                  <>
                    {links[key] !== "" &&
                    links[key] !== "in/" &&
                    links[key] !== "@" ? (
                      <Link
                        target="_blank"
                        href={`https://${key}.com/${links[key]}`}
                      >
                        <Image
                          w={"100%"}
                          m={2}
                          src={`https://img.shields.io/badge/${links[key]}-171717?logo=${key}&logoColor=white`}
                          alt="Image"
                        />
                      </Link>
                    ) : (
                      ""
                    )}
                  </>
                );
              })}
            </HStack>
          </Box>

          {/* 💻 Tech Stack: */}
          <Box>
            <Heading p={2}>💻 Tech Stack:</Heading>
            <hr />
            <HStack p={2} justifyContent={"start"} flexWrap={"wrap"}>
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
          </Box>

          {/* State Img */}
          <Box>
            <Heading p={2}>📊 GitHub Stats:</Heading>
            <hr />
            <Box p={1}>
              <StatusImg statsNo={stats1} />
              <StatusImg statsNo={stats2} />
              <StatusImg statsNo={stats3} />
            </Box>
          </Box>
          <Box>
            <Heading p={2}>💰 You can help me by Donating</Heading>
            <hr />
            <Box p={3}>
              {Object.keys(payment).map((key) => {
                return (
                  <>
                    {key === "bmc" ? (
                      <Link href={payment[key]}>
                        <Image
                          src="https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black"
                          alt="bmx"
                        />
                      </Link>
                    ) : (
                      ""
                    )}
                  </>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Box>
    </HStack>
  );
}

function StatusImg({ statsNo }) {
  return (
    <>
      <Box p={3}>
        <Image src={statsNo} alt="code" />
      </Box>
    </>
  );
}

// <h1 key={key}>
//   {key} : {links[key]}
// </h1>
