import { Button, Card, Flex, HStack, Icon, Input, InputGroup, InputLeftElement, Tab, TabList, TabPanel, TabPanels, Tabs, Tag } from "@chakra-ui/react";
import Dashboardlayout from "../../components/Dashboardlayout";
import { FiDownload } from "react-icons/fi";
import Transactiontable from "./components/Transactiontable";
import { IoIosSearch } from "react-icons/io";

const Transactionpage = () => {

    const tabs = [{
        name: "ALL",
        count: "349",

    }, {
        name: "Deposits",
        count: "114",

    }, {
        name: "Withdraw",
        count: "55",

    }, {
        name: "Trade",
        count: "50",

    },
    ]

    return (
        <Dashboardlayout title="Transaction">
            <Flex justify={"end"} mt="6" mb={"3"}>
                <Button fontWeight={"medium"} leftIcon={<Icon as={FiDownload} />}>
                    Export CSV
                </Button>
            </Flex>
            <Card borderRadius={"1rem"}>
                <Tabs>
                    <TabList py={"2"} display={"flex"} justifyContent={"space-between"}>
                        <HStack>

                            {
                                tabs.map((tab) => (<Tab key={tab.name} display={"flex"} gap={"2"} >
                                    {tab.name} <Tag colorScheme="gray" borderRadius={"full"}>{tab.count}</Tag>
                                </Tab>))
                            }
                        </HStack>
                        <InputGroup mx={2} maxW={"200px"} >
                            <InputLeftElement pointerEvents='none'>
                                <Icon as={IoIosSearch} />
                            </InputLeftElement>
                            <Input type='text' placeholder='Search' />
                        </InputGroup>

                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Transactiontable />
                        </TabPanel>
                        <TabPanel>
                            <Transactiontable />
                        </TabPanel>
                        <TabPanel>
                            <Transactiontable />
                        </TabPanel>
                        <TabPanel>
                            <Transactiontable />
                        </TabPanel>
                    </TabPanels>
                </Tabs>

            </Card>
        </Dashboardlayout>

    )
}


export default Transactionpage;