import { Box, Button, Container, Flex, Heading, HStack, Icon, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import useAuth from "../hooks/useAuth";



const Topnav = ({title, onOpen}) => {
    const {logout} = useAuth();
    return (

        <Box px="4" bg="white">

        <HStack maxWidth="85rem"  h="16" justify="space-between" mx="auto" >
                <Icon as={BiMenu} onClick={onOpen} display={{
                    base:"block",
                    lg:"none"
                }} fontSize="30px"/>
                <Heading fontSize="28px">{title}</Heading>
                <Menu>
                    <MenuButton>
                        <Icon as={FaRegUserCircle} fontSize="35px"/>
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Profile</MenuItem>
                        <MenuItem>Setting</MenuItem>
                        <MenuItem>Support</MenuItem>
                        <MenuItem onClick={logout}>Logout</MenuItem>
                    </MenuList>
                </Menu>
            
        </HStack>
        </Box>

    )
}

export default Topnav;