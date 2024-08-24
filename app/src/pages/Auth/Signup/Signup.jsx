import { Button, Center, Checkbox, Container, Flex, FormControl, FormErrorMessage, FormLabel, Input, Stack, Text, useToast } from "@chakra-ui/react";
import { BiBorderRadius } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik"
import { object, string, ref } from 'yup';
import Card from "../../../components/Card";
import { useMutation } from "@tanstack/react-query";
import { signupUser } from "../../../api/query/userQuery";
import { useState } from "react";

const signupValidationSchema = object({
    name: string().required("Name is required"),
    surname: string().required("Surname is required"),
    email: string().required("Email is Invalid").required("Email is required"),
    password: string().min(6, "Password must be atleast 6 digits").required("Password is required"),
    confirmpassword: string().oneOf([ref("password"), null], "Password must match").required("Password is required"),
})

const Signup = () => {
    const [email, setemail] = useState();
    const navigate = useNavigate();
    const toast = useToast();
    const { mutate, isLoading } = useMutation({
        mutationKey: ["signup"],
        mutationFn: signupUser,
        onSuccess: (data) => {
            if (email != "") {
                navigate(`/register-email-verify/${email}`);
            }

        },
        onError: (error) => {
            toast({
                title: "SignUp Error",
                description: error.message,
                status: "error",
                // duration: 5000
            })
        }
    });
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
                            name: "",
                            surname: "",
                            email: "",
                            password: "",
                            confirmpassword: ""
                        }}
                        onSubmit={(values) => {
                            console.log("IS LOADING", isLoading);
                            setemail(values.email);
                            mutate({
                                firstName: values.name, // Map name to firstName
                                lastName: values.surname, // Map surname to lastName
                                email: values.email,
                                password: values.password,
                            });
                        }}
                        validationSchema={signupValidationSchema}
                    >
                        {
                            () => <Form>
                                <Stack>
                                    <Flex gap={"6"} mt={"10"}>
                                        <Field name="name">

                                            {
                                                ({ field, meta }) => (
                                                    <FormControl isInvalid={!!(meta.error && meta.touched)}>
                                                        <FormLabel htmlFor="name">
                                                            Name
                                                        </FormLabel>
                                                        <Input {...field} name="name" placeholder="Enter your Name" />
                                                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                                                    </FormControl>
                                                )
                                            }

                                        </Field>
                                        <Field name="surname">

                                            {
                                                ({ field, meta }) => (
                                                    <FormControl isInvalid={!!(meta.error && meta.touched)}>
                                                        <FormLabel htmlFor="surname">
                                                            Surname
                                                        </FormLabel>
                                                        <Input {...field} name="surname" placeholder="Enter your Surname" />
                                                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                                                    </FormControl>
                                                )
                                            }

                                        </Field>

                                    </Flex>
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
                                    <Field name="confirmpassword">

                                        {
                                            ({ field, meta }) => (
                                                <FormControl isInvalid={!!(meta.error && meta.touched)}>
                                                    <FormLabel htmlFor="confirmpassword">
                                                        Confirm Password
                                                    </FormLabel>
                                                    <Input {...field} type="password" name="confirmpassword" placeholder="Enter your password" />
                                                    <FormErrorMessage>{meta.error}</FormErrorMessage>
                                                </FormControl>
                                            )
                                        }

                                    </Field>


                                    <Checkbox > <Text textStyle={"p3"}>I agree with <Text as={"span"} color={"blue"}>Terms and Conditions</Text></Text>
                                    </Checkbox>

                                    <Button isLoading={isLoading} type="submit">
                                        Create Account
                                    </Button>

                                    <Text textStyle={"p3"} color={"black.60"} textAlign={"center"}>Already have an account? <Link to={"/signin"}><Text color={"blue"} as={"span"}>Log in</Text></Link>  </Text>
                                </Stack>
                            </Form>
                        }


                    </Formik>
                </Card>
            </Center>

        </Container>
    )
}

export default Signup;