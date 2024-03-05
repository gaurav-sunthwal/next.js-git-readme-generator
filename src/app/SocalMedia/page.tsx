//@ts-nocheck
"use client";

import {
  Box,
  HStack,
  Heading,
  Input,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import HaderComponets from "../Components/HaderComponets";
import {
  FaBehance,
  FaCodepen,
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMastodon,
  FaMedium,
  FaMediumM,
  FaPinterest,
  FaQuora,
  FaReddit,
  FaStackOverflow,
  FaTiktok,
  FaTwitch,
  FaYoutube,
} from "react-icons/fa";
import "../globals.css";
import { FaXTwitter } from "react-icons/fa6";
export default function SocalMedia() {
  return (
    <>
      <HaderComponets backLink={"/Status"} title={"Add Your Social Links"} />

      <VStack w={"100%"} p={2} justifyContent={"center"}>
        <HStack flexWrap={"wrap"} justifyContent={"space-evenly"}>
          <SocialLinks
            socalTitle={"Behance Username"}
            socalIcon={<FaBehance />}
          />
          <SocialLinks
            socalTitle={"Instagram Username"}
            socalIcon={<FaInstagram />}
          />
          <SocialLinks
            socalTitle={"Discord Username"}
            socalIcon={<FaDiscord />}
          />
          <SocialLinks
            socalTitle={"Linkedin Username"}
            socalIcon={<FaLinkedin />}
          />
          <SocialLinks
            socalTitle={"Facebook Username"}
            socalIcon={<FaFacebook />}
          />
          <SocialLinks
            socalTitle={"Codepen Username"}
            socalIcon={<FaCodepen />}
          />
          <SocialLinks
            socalTitle={"Youtube Username"}
            socalIcon={<FaYoutube />}
          />
          <SocialLinks
            socalTitle={"StackOverflow UserID only "}
            socalIcon={<FaStackOverflow />}
          />
          <SocialLinks socalTitle={"X Username"} socalIcon={<FaXTwitter />} />
          <SocialLinks
            socalTitle={"Reddit Username"}
            socalIcon={<FaReddit />}
          />
          <SocialLinks
            socalTitle={"Pinterest Username"}
            socalIcon={<FaPinterest />}
          />
          <SocialLinks
            socalTitle={"Twitch Username"}
            socalIcon={<FaTwitch />}
          />
          <SocialLinks
            socalTitle={"Medium Username "}
            socalIcon={<FaMediumM />}
          />
          <SocialLinks
            socalTitle={"Mastodon Username (without @) "}
            socalIcon={<FaMastodon />}
          />
          <SocialLinks
            socalTitle={"Tiktok Username "}
            socalIcon={<FaTiktok />}
          />
          <SocialLinks socalTitle={"Quora Username"} socalIcon={<FaQuora />} />
        </HStack>
      </VStack>
    </>
  );
}

function SocialLinks({ socalTitle, socalIcon }) {
  const [isGraterthen] = useMediaQuery("(min-width: 700px)");
  return (
    <>
      <Box w={isGraterthen ? "35%" : "100%"} p={2} m={2}>
        <HStack>
          <Input
            w={"100%"}
            border={"0px solid"}
            borderRadius={0}
            placeholder={socalTitle}
            borderBottom={"2px solid"}
          />
          <Box>
            <Heading>{socalIcon}</Heading>
          </Box>
        </HStack>
      </Box>
    </>
  );
}
