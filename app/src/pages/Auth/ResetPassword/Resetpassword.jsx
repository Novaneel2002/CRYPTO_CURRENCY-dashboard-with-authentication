import { Button, Center, Container, FormControl, FormErrorMessage, FormLabel, Input, Stack, Text, useToast, Spinner } from "@chakra-ui/react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { object, string, ref } from 'yup';
import Card from "../../../components/Card";
import { verifyforgottoken } from "../../../api/query/userQuery";
import { useMutation } from "@tanstack/react-query";

const ResetValidationSchema = object({
    password: string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    repeatPassword: string()
        .oneOf([ref("password"), null], "Passwords must match")
        .required("Repeat password is required"),
});

const Resetpassword = () => {
    const toast = useToast();
    const { token } = useParams();
    const navigate = useNavigate();
    const { mutate, isLoading } = useMutation({
        mutationKey: ["verify-forgot-token"],
        mutationFn: (data) => verifyforgottoken(data),
        enabled: !!token,
        onError: (error) => {
            toast({
                title: "Reset Password Error",
                description: error.message,
                status: "error",
            });
            navigate("/signup");
        },
        onSettled: () => {
            navigate("/resetpasswordsucess");
        },
    });

    if (isLoading)
        return (
            <Center h="100vh">
                <Spinner />
            </Center>
        );

    return (
        <Container>
            <Center minH={"100vh"}>
                <Card>
                    <Text fontWeight={"medium"} textStyle={"h1"}>
                        Reset Your Password
                    </Text>
                    <Text textStyle={"p2"} color={"black.60"} mt={"4"}>
                        Create a new password for your account
                    </Text>
                    <Formik
                        initialValues={{
                            password: "",
                            repeatPassword: ""
                        }}
                        onSubmit={(values) => {
                            // Call mutate with token and new password
                            mutate({ token, password: values.password });
                        }}
                        validationSchema={ResetValidationSchema}
                    >
                        {() => (
                            <Form>
                                <Stack mt={4}>
                                    <Field name="password">
                                        {({ field, meta }) => (
                                            <FormControl isInvalid={!!(meta.error && meta.touched)}>
                                                <FormLabel htmlFor="password">New Password</FormLabel>
                                                <Input {...field} type="password" name="password" placeholder="Enter your password" />
                                                <FormErrorMessage>{meta.error}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>
                                    <Field name="repeatPassword">
                                        {({ field, meta }) => (
                                            <FormControl isInvalid={!!(meta.error && meta.touched)}>
                                                <FormLabel htmlFor="repeatPassword">Confirm New Password</FormLabel>
                                                <Input {...field} type="password" name="repeatPassword" placeholder="Confirm your password" />
                                                <FormErrorMessage>{meta.error}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>
                                    <Button type="submit">Reset Password</Button>
                                </Stack>
                            </Form>
                        )}
                    </Formik>
                </Card>
            </Center>
        </Container>
    );
};

export default Resetpassword;
