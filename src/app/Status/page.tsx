//@ts-nocheck
"use client";

import HaderComponets from "@/app/Components/HaderComponets";
import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useAppContext } from "../Context";
import { useRouter } from "next/navigation";

export default function Status() {
  const [theme, setTheme] = useState("gruvbox");
  const [border, setBorder] = useState(false);
  const [pcommits, setpCommits] = useState(false);
  const [Lcommits, setLCommits] = useState(false);
  const { userName, getBorder, getpCommits, getLCommits } = useAppContext();
  let State1 = `https://github-readme-stats.vercel.app/api?username=${userName}&theme=${theme}&hide_border=${border}&include_all_commits=${pcommits}&count_private=${Lcommits}`;
  let State2 = `https://github-readme-streak-stats.herokuapp.com/?user=${userName}&theme=${theme}&hide_border=${border}`;
  let State3 = `https://github-readme-stats.vercel.app/api/top-langs/?username=${userName}&theme=${theme}&hide_border=${border}&include_all_commits=${pcommits}&count_private=${Lcommits}&layout=compact`;
  let router = useRouter();
  function submitStatus() {
    getBorder(setBorder);
    getLCommits(setLCommits);
    getpCommits(setpCommits);
    router.push("/Result");
  }
  return (
    <>
      <HaderComponets backLink={"/About"} title={"Flex your GitHub Stats"} />
      <Box p={3}>
        <HStack justifyContent={"center"} flexWrap={"wrap"}>
          <HStack>
            <Heading size={"md"}>Theme</Heading>
            <Select
              placeholder=""
              onChange={(e) => {
                setTheme(e.target.value);
              }}
            >
              <option value="default">default</option>
              <option value="monokai">monokai</option>
              <option value="gruvbox">gruvbox</option>
              <option value="algolia">algolia</option>
              <option value="bear">bear</option>
              <option value="nord">nord</option>
              <option value="shades-of-purple">shades-of-purple</option>
            </Select>
          </HStack>
          <HStack justifyContent={"center"} flexWrap={"wrap"}>
            <AddStatusButton
              title={"Border"}
              Click={() => {
                border === false
                  ? setBorder(true)
                  : border === true
                  ? setBorder(false)
                  : "";
              }}
            />
            <AddStatusButton
              title={"Lifetime Commits"}
              Click={() => {
                Lcommits === false
                  ? setLCommits(true)
                  : border === true
                  ? setLCommits(false)
                  : "";
              }}
            />
            <AddStatusButton
              title={"Private Commits"}
              Click={() => {
                pcommits === false
                  ? setpCommits(true)
                  : border === true
                  ? setpCommits(false)
                  : "";
              }}
            />
          </HStack>
        </HStack>
        <Heading p={2} size={"xs"} textAlign={"center"}>
          please wait for images to load after changing any values
        </Heading>
        <VStack h={"auto"} justifyContent={"center"}>
          <HStack justifyContent={"center"} p={3} flexWrap={"wrap"}>
            <StatusImg imgSrc={State1} />
            <StatusImg imgSrc={State2} />
            <StatusImg imgSrc={State3} />
          </HStack>
        </VStack>
        <VStack>
          <Box m={3}>
            <Button
              color={"white"}
              border={"2px solid"}
              bg={"transparent"}
              onClick={submitStatus}
            >
              Next
            </Button>
          </Box>
        </VStack>
      </Box>
    </>
  );
}
function StatusImg({ imgSrc }) {
  return (
    <>
      <Box p={2}>
        <Image w={"500px"} src={imgSrc} alt="Stats-1" />
      </Box>
    </>
  );
}
function AddStatusButton({ title, Click }) {
  return (
    <>
      <Button onClick={Click}>{title}</Button>
    </>
  );
}
