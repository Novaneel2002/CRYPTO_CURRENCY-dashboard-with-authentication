import { Box, Button, Center, Checkbox, Container, Flex, FormControl, FormErrorMessage, FormLabel, HStack, Icon, Input, Stack, Text, useToast } from "@chakra-ui/react";
import { BiBorderRadius } from "react-icons/bi";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Formik, Form, Field } from "formik"
import { object, string } from 'yup';
import Card from "../../../components/Card";
import { FaArrowLeft } from "react-icons/fa";
import { forgotMail } from "../../../api/query/userQuery";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

const forgotValidationSchema = object({
    email: string().required("Email is Invalid").required("Email is required"),
})

const Forgotpassword = () => {

    

    const forgotValidationSchema = object({
        email: string().email("Email is Invalid").required("Email is required"),
    });
    const [email, setEmail] = useState("");
    const toast = useToast();
    const navigate = useNavigate();
    const { mutate, isSuccess, isLoading } = useMutation({
        mutationKeyKey: ["forgot-email"],
        mutationFn: forgotMail,
        onSettled: (data) => {
            console.log(data);
            navigate(`/forgot-password-email-sent/${email}`)
        },
        onError: (error) => {
            toast({
                title: "Forgot Error",
                description: error.message,
                status: "error",
                // duration: 5000
            })
        },
        // enabled: !!email,
    });
    return (
        <Container>
            <Center minH={"100vh"}>

                <Card >
                    <Link to={"/signin"}>
                        <Icon as={FaArrowLeft} />
                    </Link>
                    <Text mt={4} fontWeight={"medium"} textStyle={"h1"}>
                        Forgot Password
                    </Text>
                    <Text textStyle={"p2"} color={"black.60"} mt={"4"}>
                        Enter your email address for which account you want to reset password.
                    </Text>
                    <Formik
                        initialValues={{

                            email: "",

                        }}
                        onSubmit={(values) => {
                            // console.log(values);
                            setEmail((prev) => prev =  values.email);
                            mutate({email: values.email});
                        }}
                        validationSchema={forgotValidationSchema}
                    >
                        {
                            () => <Form>
                                <Stack mt={8} spacing={6}>
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


                                    <Button w={"full"} type="submit">
                                        Reset Password
                                    </Button>





                                </Stack>
                            </Form>
                        }


                    </Formik>
                </Card>
            </Center>

        </Container>
    )
}

export default Forgotpassword;