"use client";

import { Heading } from "@chakra-ui/react";
import { useAppContext } from "../Context";

export default function Result() {
  const { userName } = useAppContext();
  return (
    <>
      <Heading>UserName : {userName}</Heading>
    </>
  );
}
