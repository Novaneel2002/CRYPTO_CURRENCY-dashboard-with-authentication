import { Box, Button, Center, Checkbox, Container, Flex, FormControl, FormErrorMessage, FormLabel, HStack, Input, Stack, Text, useToast } from "@chakra-ui/react";
// import { BiBorderRadius } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik"
import { object, string, ref } from 'yup';
import Card from "../../../components/Card";
import { useMutation } from "@tanstack/react-query";
import { signinUser } from "../../../api/query/userQuery";
import useAuth from "../../../hooks/useAuth";
// import useAuth from "../../../hooks/useAuth";

const signinValidationSchema = object({
   
    email: string().email("Email is Invalid").required("Email is required"),
    password: string().min(6, "Password must be atleast 6 digits").required("Password is required"),
    
})



const Signin = () => {
    const toast = useToast();
    const {login} = useAuth();
    // const { login } = useAuth();
    const {mutate,isLoading, error, isError } = useMutation({
        mutationKey:["signin"],
        mutationFn: signinUser,
        onSuccess: (data) => {
            const{token} = data;
            if(token){
                login(token);
            }
          },
        onError: (error) => {
            toast({
                title:"Signin Error",
                description: error.message,
                status: "error",
                // duration: 5000
            })
        }
    });

    // if(isError){
    //     return <Box>{error.message}</Box>;
    // }

    return (
        <Container>
            <Center minH={"100vh"}>

                <Card >
                    <Text fontWeight={"medium"} textStyle={"h1"}>
                        Welcome to Crypto App
                    </Text>
                    <Text textStyle={"p2"} color={"black.60"} mt={"4"}>
                        Create a free account by filling data below
                    </Text>
                    <Formik
                        initialValues={{

                            email: "nova4@gmail.com",
                            password: "asdfgh",

                        }}
                        onSubmit={(values) => {
                            mutate(values);
                        }}
                        validationSchema={signinValidationSchema}
                    >
                        {
                            () => <Form>
                                <Stack>
                                    <Field name="email">

                                        {
                                            ({ field, meta }) => (
                                                <FormControl isInvalid={!!(meta.error && meta.touched)}>
                                                    <FormLabel htmlFor="email">
                                                        Email
                                                    </FormLabel>
                                                    <Input {...field} type="email" name="email" placeholder="Enter your Email" />
                                                    <FormErrorMessage>{meta.error}</FormErrorMessage>
                                                </FormControl>
                                            )
                                        }

                                    </Field>
                                    <Field name="password">

                                        {
                                            ({ field, meta }) => (
                                                <FormControl isInvalid={!!(meta.error && meta.touched)}>
                                                    <FormLabel htmlFor="password">
                                                        Password
                                                    </FormLabel>
                                                    <Input {...field} type="password" name="password" placeholder="Enter your password" />
                                                    <FormErrorMessage>{meta.error}</FormErrorMessage>
                                                </FormControl>
                                            )
                                        }

                                    </Field>


                                    <HStack justify={"space-between"}>
                                        <Checkbox > <Text textStyle={"p3"}>Remember Me</Text>
                                        </Checkbox>
                                        <Link to={"/forgot-password"}>
                                            <Text textStyle={"p3"} as="span" color="blue" >
                                                Forgot Password?
                                            </Text>
                                        </Link>

                                    </HStack>
                                    <Box>
                                        <Button
                                        isLoading={isLoading} w={"full"} type="submit">
                                            Log In
                                        </Button>
                                        <Link to={"/signup"}>
                                            <Button variant={"outline"} mt={3} w={"full"} type="submit">
                                                Create Account
                                            </Button>
                                        </Link>
                                    </Box>



                                    {/* <Text textStyle={"p3"} color={"black.60"} textAlign={"center"}>Already have an account? <Link to={"/signin"}><Text color={"blue"} as={"span"}>Log in</Text></Link>  </Text> */}
                                </Stack>
                            </Form>
                        }


                    </Formik>
                </Card>
            </Center>

        </Container>
    )
}

export default Signin;