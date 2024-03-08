//@ts-nocheck
"use client";

import { Box, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { useAppContext } from "../Context";
import HaderComponets from "../Components/HaderComponets";
import Link from "next/link";

export default function Result() {
  const { userName, aboutMe, stats1, stats2, stats3, links, skills , payment} =
    useAppContext();
  // console.log({...links});

  return (
    <>
      <HaderComponets backLink={"/Main"} title={"Result"} />
      <VStack>
        <Heading>UserName : {userName}</Heading>
        <Text>{aboutMe}</Text>
        <HStack p={3}>
          <StatusImg statsNo={stats1} />
          <StatusImg statsNo={stats2} />
          <StatusImg statsNo={stats3} />
        </HStack>
        {/* <Box>
          <Heading>{links.instagram}</Heading>
          <Heading>{links.X}</Heading>
          <Heading>{links.Linkedin}</Heading>
        </Box> */}
        <HStack>
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
        <HStack p={2} justifyContent={"center"} flexWrap={"wrap"}>
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
        {
          Object.keys(payment).map((key)=>{
            return(
              <>
                <Heading>{payment[key]}</Heading>
              </>
            )
          })
        }
      </VStack>
    </>
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
