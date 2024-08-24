import { Box, Button, Center, Icon, Text, VStack } from "@chakra-ui/react";
import { RiCheckboxCircleFill } from "react-icons/ri";

import Card from "../../../components/Card";
import { Link, useParams } from "react-router-dom";

const Forgotpasswordsent = () => {
    const params = useParams();
    const {email} = useParams();
    return (
        <Center minH={"100vh"}>
            <Card>
                <VStack>
                    <Icon as={RiCheckboxCircleFill} boxSize={"48px"} color={"green"} />
                    <Text textStyle={"h4"} fontWeight={"medium"} color={"p.black"}>Successfully Sent</Text>
                    <Text mt={4} textAlign={"center"} textStyle={"p2"} color={"black.60"}>We have sent instruction on how to reset your password to <Box as="b">{email}</Box>. Please follow the instruction from the email.</Text>
                </VStack>
            </Card>
        </Center>

    )
}

export default Forgotpasswordsent;