import { Button, Flex, HStack, Icon, Image, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Tag, Text } from "@chakra-ui/react";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";

import { Customcard } from "../../../chakra/Customcard";

const Pricesection = () => {
    const timestamps = ["1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM"];
    return (


        <Customcard justifyContent={"space-between"} >
            <Flex justify={"space-between"} align={"start"}>

                <Stack >
                    <HStack color="black.80">
                        <Text fontSize="sm" color="gray" >Current Price</Text>
                        {/* <Icon as={IoIosInformationCircleOutline} /> */}
                    </HStack>
                    <HStack spacing={2}>

                        <HStack >
                            <Text textStyle="h2" fontWeight="bold">₹ 22,760</Text>
                        </HStack>
                        <HStack color={"green"}>
                            <Icon as={FaArrowTrendUp} />
                            <Text fontSize="sm" fontWeight="medium" >32.05%</Text>
                        </HStack>
                    </HStack>
                </Stack>

                <HStack >
                    <Button fontWeight="medium" leftIcon={
                        <Icon fontSize="24px" as={FaArrowUp} />
                    }>Buy</Button>
                    <Button fontWeight="medium" leftIcon={
                        <Icon fontSize="24px" as={FaArrowDown} />
                    }>Sell</Button>
                </HStack>
            </Flex>
            <Tabs  variant='soft-rounded' >
                <Flex justify={"end"}>

                <TabList bg={"blue.50"}  p="3px">
                    {
                        ["1H","1D","1W","1M"].map((tab) => (
                            <Tab _selected={{ color: 'black', bg: 'white' }} key={tab} fontSize="sm" p="6px" borderRadius="4">
                                {tab}
                            </Tab>
                        ))
                    }
                    
                </TabList>
                </Flex>
                <TabPanels>
                    <TabPanel>
                        <Image mt={"48px"} w={"100%"} src="/Graph.png" />
                        <HStack justify={"space-between"}>
                            {
                                timestamps.map((timestamp) => <Text key={timestamp} fontSize="sm" color="black.80"> {timestamp} </Text>)
                            }
                        </HStack>
                    </TabPanel>
                    <TabPanel>
                    <Image mt={"48px"} w={"100%"} src="" />
                        <HStack justify={"space-between"}>
                            {
                                timestamps.map((timestamp) => <Text key={timestamp} fontSize="sm" color="black.80"> {timestamp} </Text>)
                            }
                        </HStack>
                    </TabPanel>
                    <TabPanel>
                    <Image mt={"48px"} w={"100%"} src="" />
                        <HStack justify={"space-between"}>
                            {
                                timestamps.map((timestamp) => <Text key={timestamp} fontSize="sm" color="black.80"> {timestamp} </Text>)
                            }
                        </HStack>
                    </TabPanel>
                    <TabPanel>
                    <Image mt={"48px"} w={"100%"} src="" />
                        <HStack justify={"space-between"}>
                            {
                                timestamps.map((timestamp) => <Text key={timestamp} fontSize="sm" color="black.80"> {timestamp} </Text>)
                            }
                        </HStack>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            
        </Customcard>
    )

}

export default Pricesection;