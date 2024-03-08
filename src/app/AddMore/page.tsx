import { HStack, Heading, Select, VStack } from "@chakra-ui/react";
import HaderComponets from "../Components/HaderComponets";

export default function AddMore(){
    return(
        <>
            <HaderComponets backLink={"/Donate"} title={"Additional Stuffs to add"} />
            <VStack>
                <HStack>
                    <HStack>
                        <Heading>Theme</Heading>
                        <Select>
                        
                        </Select>
                    </HStack>
                </HStack>
            </VStack>
        </>
    )
}