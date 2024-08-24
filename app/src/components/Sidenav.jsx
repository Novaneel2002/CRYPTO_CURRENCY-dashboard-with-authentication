import { Box, Heading, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { HiSquares2X2 } from "react-icons/hi2";
import { BiTransferAlt } from "react-icons/bi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";


const Sidenav = () => {
    const navLinks = [{
        icon: HiSquares2X2,
        text: "Dashboard",
        link: "/"
    }, {
        icon: BiTransferAlt,
        text: "Transaction",
        link: "/transaction"
    }]

    return (
        <Stack justifyContent="space-between" bg="white" boxShadow={{
            base: "none",
            lg: "lg"
        }} w={{
            base: "full",
            lg: "16rem"
        }} h={{
            base: "98vh",
            lg: "100vh"
        }} pt="3.5rem"


        >
            <Box>

                <Heading textAlign="center" as="h1" fontSize="20px">@NOVACRYPTO</Heading>

                <Box mt="6" mx="12px">
                    {
                        navLinks.map((nav) =>
                            <Link to={nav.link} key={nav.text}>

                                <HStack borderRadius="10px" py="3" px="4"
                                    _hover={{
                                        bg: "#f2f8ff",
                                        fontWeight: "Bold",
                                        color: "#000000"
                                    }}
                                    color="#7f7f7f"
                                    fontWeight="medium"

                                >
                                    <Icon as={nav.icon} />
                                    <Text fontSize="14px">{nav.text}</Text>
                                </HStack>
                            </Link>
                        )
                    }
                </Box>
            </Box>
            <Box mt="6" mx="12px">
                <Link to={"/support"}>

                    <HStack borderRadius="10px" py="3" px="4"
                        _hover={{
                            bg: "#f2f8ff",
                            fontWeight: "Bold",
                            color: "#000000"
                        }}
                        color="#7f7f7f"
                        fontWeight="medium"

                    >
                        <Icon as={TfiHeadphoneAlt} />
                        <Text fontSize="14px">Support</Text>
                    </HStack>
                </Link></Box>

        </Stack>
    )
}

export default Sidenav;