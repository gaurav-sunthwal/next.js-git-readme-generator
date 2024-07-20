//@ts-nocheck
"use client";

import {
  Box,
  HStack,
  Heading,
  Input,
  VStack,
  border,
  useMediaQuery,
} from "@chakra-ui/react";
import HaderComponets from "../Components/HaderComponets";
import Image from "next/image";
import gift from "../Img/gift.png";
import bmc from "../Img/bmc.svg";
import kofi from "../Img/kofi.svg";
import paypal from "../Img/paypal.svg";
import patreon from "../Img/patreon.svg";
import NextBtn from "../Components/NextBtn";
import { useAppContext } from "../Context";
import { useRouter } from "next/navigation";

export default function Doante() {
  const [isGraterthen] = useMediaQuery("(min-width: 1000px)");
  const { payment, setPayment } = useAppContext();
  const handleLinkChange = (platform, event) => {
    setPayment({
      ...payment,
      [platform]: event.target.value,
    });
  };
  const router = useRouter();
  function submitDoate() {
    router.push("/Result");
  }
  return (
    <>
      <HaderComponets
        backLink={"/SkillsTags"}
        title={"Let People Help You via Donations"}
      />
      <HStack justifyContent={"space-between"} flexWrap={"wrap"}>
        <Box display={"block"} m={"auto"} w={isGraterthen ? "40%" : "100%"}>
          <Image src={gift} alt="gift" />
        </Box>
        <Box w={isGraterthen ? "50%" : "100%"} p={3} className="donate">
          <Heading size={"4xl"} p={2} m={3}>
            Donate :
          </Heading>
          <InputsSec
            imgSrc={bmc}
            title={"Buy ME A Coffee Username"}
            addPayment={(e) => handleLinkChange("bmc", e)}
          />
          <InputsSec
            imgSrc={paypal}
            title={"Paypal Username"}
            addPayment={(e) => handleLinkChange("paypal", e)}
          />
          <InputsSec
            imgSrc={patreon}
            title={"Patreon Username"}
            addPayment={(e) => handleLinkChange("patreon", e)}
          />
          <InputsSec
            imgSrc={kofi}
            title={"Ko-fi Username"}
            addPayment={(e) => handleLinkChange("kofi", e)}
          />
          <Box>
            <NextBtn handalOnClick={submitDoate} />
          </Box>
        </Box>
      </HStack>
    </>
  );
}

function InputsSec({ title, imgSrc, addPayment }) {
  return (
    <>
      <HStack p={2} m={3} w={"100%"}>
        <Box w={"100%"} borderBottom={"3px solid #DCFCE7"}>
          <Input
            placeholder={title}
            borderRadius={0}
            w={"100%"}
            onChange={addPayment}
            border={"none"}
            focusBorderColor="#171717"
          />
        </Box>
        <Box m={4}>
          <VStack
            justifyContent={"center"}
            w={"40px"}
            h={"50px"}
            p={2}
            bg={"#DCFCE7"}
            borderRadius={"6px"}
          >
            <Image src={imgSrc} alt="img" />
          </VStack>
        </Box>
      </HStack>
    </>
  );
}
