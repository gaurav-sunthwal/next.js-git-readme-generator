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
import { FaRegCopy } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { FcProcess } from "react-icons/fc";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function Result() {
  const Router = useRouter();
  const { userName, aboutMe, stats1, stats2, stats3, links, skills, payment } =
    useAppContext();
  const [isGraterthen] = useMediaQuery("(min-width: 1000px)");

  const [code, setCode] = useState("working on it...");
  const copyToClipboard = () => {
    const markdownContent = generateMarkdownContent(); // Implement this function to generate markdown content
    navigator.clipboard
      .writeText(markdownContent)
      .then(() => {
        toast.success("Copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const generateMarkdownContent = () => {
    // Construct markdown content based on the preview data

    let markdownContent = `# ${userName}'s Profile\n\n`;

    // Add about me section
    if (aboutMe !== "") {
      markdownContent += `# 💫 About Me:\n\n${aboutMe}\n\n`;
    }

    // Add socials section
    markdownContent += `# 🌐 Socials:\n\n`;
    Object.keys(links).forEach((key) => {
      if (links[key] !== "" && links[key] !== "in/" && links[key] !== "@") {
        markdownContent += `[![${key}](${generateBadgeURL(
          key,
          links[key]
        )})](https://${key}.com/${links[key]})\n`;
      }
    });

    // Add tech stack section
    markdownContent += `# 💻 Tech Stack:\n\n`;
    skills.forEach((item) => {
      markdownContent += `![${item}](${generateSkillIconURL(item)})\n`;
    });

    // Add GitHub stats section
    markdownContent += `# 📊 GitHub Stats:\n\n`;
    markdownContent += `![Stats 1](${stats1})\n\n`;
    markdownContent += `![Stats 2](${stats2})\n\n`;
    markdownContent += `![Stats 3](${stats3})\n\n`;

    // Add donation section
    markdownContent += `# 💰 You can help me by Donating\n\n`;
    Object.keys(payment).forEach((key) => {
      if (payment[key] !== "") {
        // markdownContent += `![${key}](${generateBadgeURL(
        //   key,
        //   payment[key]
        // )})\n`;
        if (key === "paypal") {
          markdownContent += ` [![${key}](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/${payment[key]}) `;
        } else if (key === "bmc") {
          markdownContent += ` [![${key}](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/${payment[key]}) `;
        } else if (key === "kofi") {
          markdownContent += ` [![${key}](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://www.ko-fi.com/${payment[key]}) `;
        } else if (key === "patreon") {
          markdownContent += ` [![${key}](https://img.shields.io/badge/Patreon-F96854?style=for-the-badge&logo=patreon&logoColor=white)](https://www.patreon.com/${payment[key]}) `;
        }
      }
    });

    return markdownContent;
  };

  const generateBadgeURL = (key, value) => {
    return `https://img.shields.io/badge/${value}-171717?logo=${key}&logoColor=white`;
  };

  const generateSkillIconURL = (skill) => {
    return `https://skillicons.dev/icons?i=${skill.toLowerCase()}`;
  };
  return (
    <>
      <Toaster />
      <HaderComponets
        backLink={"/AddMore"}
        title={"Your Awesome Profile is ready !"}
      />
      <HStack justifyContent={"center"} flexWrap={"wrap"}>
        <ResultBtn
          title={"Copy Code"}
          handalClick={copyToClipboard}
          icon={<FaRegCopy />}
        />
        {/* <ResultBtn title={"Download Markdown File"} icon={<FaDownload />} /> */}
        <ResultBtn
          title={"Create New"}
          icon={<FcProcess />}
          handalClick={() => {
            Router.push("/Main");
          }}
        />
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

function ResultBtn({ title, handalClick, icon }) {
  return (
    <Button m={2} className="nextBtn" onClick={handalClick}>
      <HStack>
        <Box>{title}</Box>
        <Box>
          <Heading size={"md"}>{icon}</Heading>
        </Box>
      </HStack>
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
            <HStack p={3}>
              {Object.keys(payment).map((key) => {
                return (
                  <>
                    {payment[key] !== "" ? (
                      key === "paypal" ? (
                        <>
                          <DonateImg
                            DonateLink={`https://www.paypal.com/paypalme/${payment[key]}`}
                            imgSrc={`https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white`}
                            key={key}
                          />
                        </>
                      ) : key === "bmc" ? (
                        <>
                          <DonateImg
                            DonateLink={`https://www.buymeacoffee.com/${payment[key]}`}
                            imgSrc={`https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black`}
                            key={key}
                          />
                        </>
                      ) : key === "kofi" ? (
                        <>
                          <DonateImg
                            DonateLink={`https://www.ko-fi.com/${payment[key]}`}
                            imgSrc={`https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white`}
                            key={key}
                          />
                        </>
                      ) : key === "patreon" ? (
                        <>
                          <DonateImg
                            DonateLink={`https://www.patreon.com/${payment[key]}`}
                            imgSrc={`https://img.shields.io/badge/Patreon-F96854?style=for-the-badge&logo=patreon&logoColor=white`}
                            key={key}
                          />
                        </>
                      ) : (
                        // Additional conditions can be added here
                        <>
                          <h1>Default</h1>
                        </>
                      )
                    ) : (
                      // Handle case when payment[key] is empty
                      <></>
                    )}
                  </>
                );
              })}
            </HStack>
          </Box>
        </Box>
      </Box>
    </HStack>
  );
}

function DonateImg({ imgSrc, key, DonateLink }) {
  return (
    <>
      <Box m={2}>
        <Link href={DonateLink} target="blank">
          <Image src={imgSrc} alt={key} />
        </Link>
      </Box>
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
