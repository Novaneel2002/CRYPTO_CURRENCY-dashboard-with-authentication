import { Box, Button, Center, Icon, Spinner, Text, useToast, VStack } from "@chakra-ui/react";
import { RiCheckboxCircleFill } from "react-icons/ri";

import Card from "../../../components/Card";
import { Link, useNavigate, useParams } from "react-router-dom";
import { isCancelledError, useQuery } from "@tanstack/react-query";
import { verifyusermail } from "../../../api/query/userQuery";

const Registersuccess = () => {
    const toast = useToast();
    const {token} = useParams();
    const navigate = useNavigate()

    const {isSuccess, isLoading} = useQuery({
        queryKey: ["verify-email-verification"],
        queryFn: () =>  verifyusermail({token}),
        enabled: !!token,
        onError: (error) => {
            toast({
                title: "SignUp Error",
                description: error.message,
                status: "error"
            });
            navigate("/signup")
        },
    });

    if(isLoading){
        return(
            <Center h="100vh">
                <Spinner/>
            </Center>
        )
    };
    // console.log(params)
    return (
        <Center minH={"100vh"}>
            {
                isSuccess && <Card>
                <VStack>
                    <Icon as={RiCheckboxCircleFill} boxSize={"48px"} color={"green"} />
                    <Text textStyle={"h4"} fontWeight={"medium"} color={"p.black"}>Successfully Registered</Text>
                    <Text textAlign={"center"} textStyle={"p2"} color={"black.60"}>Your Account have been successfully Created. Enter the app to explore all features.</Text>
                    <Box w={"full"}>
                        <Link to={"/signin"}>
                            <Button w={"full"}>
                                Enter App
                            </Button>
                        </Link>
                    </Box>
                </VStack>
            </Card>
            }
        </Center>

    )
}

export default Registersuccess;