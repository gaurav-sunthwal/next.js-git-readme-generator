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
import NextBtn from "../Components/NextBtn";
import { useState } from "react";
import { useAppContext } from "../Context";
import { useRouter } from "next/navigation";

export default function SocalMedia() {
  const { links, setLinks } = useAppContext();
  const router = useRouter();
  // Handler function to update links object
  const handleLinkChange = (platform, event) => {
    setLinks({
      ...links,
      [platform]: event.target.value,
    });
  };
  function submitSocalMedia() {
    router.push("/SkillsTags");
  }
  return (
    <>
      <HaderComponets backLink={"/Status"} title={"Add Your Social Links"} />

      <VStack w={"100%"} p={2} justifyContent={"center"}>
        <HStack flexWrap={"wrap"} justifyContent={"space-evenly"}>
          <SocialLinks
            socalTitle={"Behance Username"}
            socalIcon={<FaBehance />}
            link={links.Behance}
            getLink={(e) => handleLinkChange("Behance", e)}
          />
          <SocialLinks
            socalTitle={"Instagram Username"}
            socalIcon={<FaInstagram />}
            link={links.instagram}
            getLink={(e) => handleLinkChange("instagram", e)}
          />
          <SocialLinks
            socalTitle={"Discord Username"}
            socalIcon={<FaDiscord />}
            link={links.Discord}
            getLink={(e) => handleLinkChange("Discord", e)}
          />
          <SocialLinks
            socalTitle={"Linkedin Username"}
            socalIcon={<FaLinkedin />}
            link={links.Linkedin}
            getLink={(e) => handleLinkChange("Linkedin", e)}
          />
          <SocialLinks
            socalTitle={"Facebook Username"}
            socalIcon={<FaFacebook />}
            link={links.facebook}
            getLink={(e) => handleLinkChange("facebook", e)}
          />
          <SocialLinks
            socalTitle={"Codepen Username"}
            socalIcon={<FaCodepen />}
            link={links.Codepen}
            getLink={(e) => handleLinkChange("Codepen", e)}
          />
          <SocialLinks
            socalTitle={"Youtube Username"}
            socalIcon={<FaYoutube />}
            link={links.Youtube}
            getLink={(e) => handleLinkChange("Youtube", e)}
          />
          <SocialLinks
            socalTitle={"StackOverflow UserID only "}
            socalIcon={<FaStackOverflow />}
            link={links.StackOverflow}
            getLink={(e) => handleLinkChange("StackOverflow", e)}
          />
          <SocialLinks
            socalTitle={"X Username"}
            socalIcon={<FaXTwitter />}
            link={links.X}
            getLink={(e) => handleLinkChange("X", e)}
          />
          <SocialLinks
            socalTitle={"Reddit Username"}
            socalIcon={<FaReddit />}
            link={links.Reddit}
            getLink={(e) => handleLinkChange("Reddit", e)}
          />
          <SocialLinks
            socalTitle={"Pinterest Username"}
            socalIcon={<FaPinterest />}
            link={links.Pinterest}
            getLink={(e) => handleLinkChange("Pinterest", e)}
          />
          <SocialLinks
            socalTitle={"Twitch Username"}
            socalIcon={<FaTwitch />}
            link={links.Twitch}
            getLink={(e) => handleLinkChange("Twitch", e)}
          />
          <SocialLinks
            socalTitle={"Medium Username "}
            socalIcon={<FaMediumM />}
            link={links.Medium}
            getLink={(e) => handleLinkChange("Medium", e)}
          />
          <SocialLinks
            socalTitle={"Mastodon Username (without @) "}
            socalIcon={<FaMastodon />}
            link={links.Mastodon}
            getLink={(e) => handleLinkChange("Mastodon", e)}
          />
          <SocialLinks
            socalTitle={"Tiktok Username "}
            socalIcon={<FaTiktok />}
            link={links.Tiktok}
            getLink={(e) => handleLinkChange("Tiktok", e)}
          />
          <SocialLinks
            socalTitle={"Quora Username"}
            socalIcon={<FaQuora />}
            link={links.Quora}
            getLink={(e) => handleLinkChange("Quora", e)}
          />
        </HStack>
      </VStack>
      <Box m={4}>
        <NextBtn handalOnClick={submitSocalMedia} />
      </Box>
    </>
  );
}

function SocialLinks({ socalTitle, socalIcon, link, getLink }) {
  const [isGraterthen] = useMediaQuery("(min-width: 700px)");
  return (
    <>
      <Box w={isGraterthen ? "35%" : "100%"} p={2} m={2}>
        <HStack>
          <Input
            w={"100%"}
            type="name"
            border={"0px solid"}
            outline={"transparent"}
            borderRadius={0}
            placeholder={socalTitle}
            borderBottom={"2px solid"}
            value={link}
            onChange={getLink}
            _focus={{
              boxShadow: "none",
            }}
          />
          <Box>
            <Heading>{socalIcon}</Heading>
          </Box>
        </HStack>
      </Box>
    </>
  );
}
