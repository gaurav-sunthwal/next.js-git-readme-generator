"use client";

import { Heading, Text, VStack } from "@chakra-ui/react";
import { useAppContext } from "../Context";
import HaderComponets from "../Components/HaderComponets";

export default function Result() {
  const { userName, aboutMe } = useAppContext();
  return (
    <>
      <HaderComponets backLink={"/Main"} title={"Result"} />
      <VStack>
        <Heading>UserName : {userName}</Heading>
        <Text>{aboutMe}</Text>
      </VStack>
    </>
  );
}
