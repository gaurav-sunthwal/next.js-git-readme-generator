//@ts-nocheck
"use client";

import { Box, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { useAppContext } from "../Context";
import HaderComponets from "../Components/HaderComponets";

export default function Result() {
  const { userName, aboutMe, stats1, stats2, stats3 } = useAppContext();
  return (
    <>
      <HaderComponets backLink={"/Main"} title={"Result"} />
      <VStack>
        <Heading>UserName : {userName}</Heading>
        <Text>{aboutMe}</Text>
        <HStack p={3}>
          <StatusImg statsNo={stats1}/>
          <StatusImg statsNo={stats2}/>
          <StatusImg statsNo={stats3}/>
        </HStack>
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
