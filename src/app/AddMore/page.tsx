//@ts-nocheck
"use client";

import { Box, HStack, Heading, Image, Select, VStack } from "@chakra-ui/react";
import HaderComponets from "../Components/HaderComponets";
import { useAppContext } from "../Context";
import { useState } from "react";
import NextBtn from "../Components/NextBtn";
import { useRouter } from "next/navigation";

export default function AddMore() {
    const router = useRouter()
    function submitAddMore(){
        router.push('/Result')
    }
  const { userName, colors } = useAppContext();
  const [therme, setTheme] = useState("");
  const trophy = `https://github-profile-trophy.vercel.app/?username=${userName}&theme=${therme}&no-frame=false&no-bg=true&margin-w=4`;
  return (
    <>
      <HaderComponets backLink={"/Donate"} title={"Additional Stuffs to add"} />
      <VStack>
        <HStack>
          <HStack>
            <Heading>Theme</Heading>
            <Select
              onChange={(e) => {
                setTheme(e.target.value);
              }}
            >
              {colors.map((item, index) => {
                return (
                  <>
                    <option value={item} key={index}>
                      {item}
                    </option>
                  </>
                );
              })}
            </Select>
          </HStack>
        </HStack>
          <Box>
            <Image src={trophy} alt="img" />
          </Box>
          <NextBtn handalOnClick={submitAddMore}/>
      </VStack>

    </>
  );
}
