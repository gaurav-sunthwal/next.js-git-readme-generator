//@ts-nocheck
"use client";
import { Box, HStack, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { IoCaretBackSharp } from "react-icons/io5";

export default function HaderComponets({ backLink, title }) {
  return (
    <>
      <Box p={2} justifyContent={"space-between"} color={"#BBF7D0"}>
        <Box p={2}>
          <Link href={backLink}>
            <HStack>
              <Box>
                <IoCaretBackSharp />
              </Box>
              <Box>Go back</Box>
            </HStack>
          </Link>
        </Box>
        <Box textAlign={"center"}>
          <Heading>{title}</Heading>
        </Box>
        <Box></Box>
      </Box>
    </>
  );
}
