//@ts-nocheck

import { Box, Button, Heading, VStack } from "@chakra-ui/react";

export default function NextBtn({ handalOnClick }) {
  return (
    <>
      <VStack>
        <Box m={3}>
          <Button  className="nextBtn" onClick={handalOnClick}>
            Next
          </Button>
        </Box>
      </VStack>
    </>
  );
}
