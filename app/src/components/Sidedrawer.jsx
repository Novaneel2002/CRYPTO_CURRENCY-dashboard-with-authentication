import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
} from '@chakra-ui/react'
import Sidenav from './Sidenav';


const Sidedrawer = ({isOpen, onClose}) => {
    return (

        <>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                // finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    

                    <DrawerBody>
                        <Sidenav/>
                    </DrawerBody>

                    
                </DrawerContent>
            </Drawer>
        </>


    )
}


export default Sidedrawer; 