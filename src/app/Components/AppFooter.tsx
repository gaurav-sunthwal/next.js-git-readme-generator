//@ts-nocheck

import { Box, HStack, Heading, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface SocialCardProps {
  icon: string;
  link: string;
}

export default function AppFooter() {
  return (
    <>
      <VStack h={"25vh"} justifyContent={"center"} bg={"black"}>
        <Heading color={"#737373"} size={"md"} textAlign={"center"}>
          Made with ♡ by Gaurav Sunthwal
        </Heading>
        <HStack justifyContent={"center"} m={1}>
          <SocalHandals
            icons={<FaInstagram />}
            links={"https://www.instagram.com/gaurav_sunthwal/"}
          />
          <SocalHandals
            icons={<FaLinkedin />}
            links={"https://www.linkedin.com/in/gaurav-sunthwal"}
          />
          <SocalHandals
            icons={<FaGithub />}
            links={"https://github.com/gaurav-sunthwal"}
          />
          <SocalHandals
            icons={<FaXTwitter />}
            links={"https://twitter.com/gaurav162022"}
          />
        </HStack>
      </VStack>
    </>
  );
}

function SocalHandals({ icons, links }: SocialCardProps) {
  return (
    <>
      <Box m={2}>
        <Link href={links}>
          <Heading size={"lg"}>{icons}</Heading>
        </Link>
      </Box>
    </>
  );
}
