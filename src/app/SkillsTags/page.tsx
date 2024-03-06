import { Box, HStack } from "@chakra-ui/react";
import HaderComponets from "../Components/HaderComponets";
import skills from "../Img/skills.png";
import Image from "next/image";
export default function SkillsTags() {
  return (
    <>
      <HaderComponets
        backLink={"/SocalMedia"}
        title={"Add Tech that you use"}
      />

      <HStack>
        <Box w={"50%"} p={3}>
          <Image alt="skillsPNG" src={skills} />
        </Box>
        <Box></Box>
      </HStack>
    </>
  );
}
