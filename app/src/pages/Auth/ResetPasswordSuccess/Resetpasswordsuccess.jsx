import { Box, Button, Center, Icon, Text, VStack } from "@chakra-ui/react";
import { RiCheckboxCircleFill } from "react-icons/ri";

import Card from "../../../components/Card";
import { Link } from "react-router-dom";

const Resetpasswordsuccess = () => {
    return (
        <Center minH={"100vh"}>
            <Card>
                <VStack>
                    <Icon as={RiCheckboxCircleFill} boxSize={"48px"} color={"green"} />
                    <Text textStyle={"h4"} fontWeight={"medium"} color={"p.black"}>Password Reset Successfully</Text>
                    <Text mt={4} textAlign={"center"} textStyle={"p2"} color={"black.60"}>Now you can Access your account</Text>
                    <Box w={"full"}>
                        <Link to={"/signin"}>
                            <Button w={"full"}>
                                Sign In
                            </Button>
                        </Link>
                    </Box>


                </VStack>
            </Card>
        </Center>

    )
}

export default Resetpasswordsuccess;