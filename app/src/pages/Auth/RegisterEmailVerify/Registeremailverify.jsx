import { Box, Button, Center, Icon, Spinner, Stack, Text, useToast, VStack } from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
import Card from "../../../components/Card";
import { useLocation, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { sendverificationmail } from "../../../api/query/userQuery";
import { useEffect } from "react";

const Registeremailverify = () => {

    const toast = useToast();
    const {email} = useParams();
    // const email = location.state?.email ?? "";
    console.log(location);
    if (email == "") {
        return <Stack justify={"center"} alignItems={"center"} h={"100vh"}><Card justify={"center"} alignItems={"center"} color="red" textStyle={"h1"}>INVALID EMAIL</Card></Stack>
    }


    const {mutate, isSuccess, isLoading } = useMutation({
        mutationKeyKey: ["send-verification-mail"],
        mutationFn:sendverificationmail,
        onSuccess: (data) => {
            console.log(data);
        },
        onError: (error) => {
            toast({
                title: "SignUp Error",
                description: error.message,
                status: "error",
                // duration: 5000
            })
        },
        enabled: !!email,
    });
    useEffect(() => {
        mutate({email});
    },[email])
    // if (isLoading) {
    //     <Center h={"100vh"}>
    //         <Spinner />
    //     </Center>
    // }
    return (
        <Center minH={"100vh"}>
            <Card>
                <VStack>
                    <Icon as={MdEmail} boxSize={"48px"} color={"blue"} />
                    <Text textStyle={"h4"} fontWeight={"medium"} color={"p.black"}>Email Verification</Text>
                    <Text textAlign={"center"} textStyle={"p2"} color={"black.60"}>We have sent you an email verification to <Box as="b" color={"p.black"}>{email}</Box>. If you didn't recieve it, click the button below.</Text>
                    <Button variant={"outline"} w={"full"} onClick={() => {
                        console.log("IS LOADING", isLoading);
                        mutate({email});
                    }}
                    isLoading={isLoading}>
                        Re-send Email
                    </Button>
                </VStack>
            </Card>

        </Center>

    )
}

export default Registeremailverify;