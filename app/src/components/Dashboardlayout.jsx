import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react"
import Sidenav from "./Sidenav"
import Topnav from "./Topnav"
import Sidedrawer from "./Sidedrawer";

const Dashboardlayout = ({ title, children }) => {

    const { isOpen, onClose, onOpen } = useDisclosure();


    return (
        <Box>
            <Flex>
                <Box display={{
                    base: "none",
                    lg: "flex",
                }
                }
                
            >
                    <Sidenav />
                </Box>
                <Sidedrawer isOpen={isOpen} onClose={onClose} />
                <Box flexGrow="1">

                    <Topnav title={title} onOpen={onOpen} />
                    <Container mt="6" maxW="85rem" px="4" >{children}</Container>
                </Box>
            </Flex>
        </Box>

    )
}


export default Dashboardlayout;