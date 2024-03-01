import { Heading, VStack } from "@chakra-ui/react";

export default function AppFooter() {
  return (
    <>
      <VStack h={"25vh"} justifyContent={"center"}>
        <Heading color={"#737373"} size={"md"}>
          Made with ♡ by Gaurav Sunthwal
        </Heading>
      </VStack>
    </>
  );
}
