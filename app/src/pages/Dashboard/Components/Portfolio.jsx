import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { PiHandDepositFill } from "react-icons/pi";
import { PiHandWithdrawFill } from "react-icons/pi";


const Portfolio = () => {
    return (
        <HStack bg="white" borderRadius="xl" p="6" justify={"space-between"} align={{
            base: 'flex-start',
            xl: 'center'
        }} flexDir={{
            base: 'column',
            xl: 'row',
        }}>
            <HStack spacing={{
                base: 8,
                xl: 16
            }} align={{
                base: 'flex-start',
                lg: 'center'
            }} flexDir={{
                base: 'column',
                lg: 'row',
            }}>

                <Stack >
                    <HStack color="black.80">
                        <Text fontSize="sm" color="gray" >Total PortFolio Value</Text>
                        <Icon as={IoIosInformationCircleOutline} />
                    </HStack>
                    <Text textStyle="h2" fontWeight="bold">₹ 120,990.45</Text>
                </Stack>
                <Stack >
                    <HStack color="black.80">
                        <Text fontSize="sm" color="gray" >Wallet Balance</Text>
                        {/* <Icon as={IoIosInformationCircleOutline} /> */}
                    </HStack>
                    <HStack spacing={8}>

                        <HStack >
                            <Text textStyle="h2" fontWeight="bold">22.076564</Text> <Tag fontWeight="bold">BTC</Tag>
                        </HStack>
                        <HStack>

                            <Text textStyle="h2" fontWeight="bold">₹ 1,200.45</Text> <Tag fontWeight="bold">INR</Tag>
                        </HStack>
                    </HStack>
                </Stack>
            </HStack>
            <HStack >
                <Button fontWeight="medium" leftIcon={
                    <Icon fontSize="24px" as={PiHandDepositFill} />
                }>Deposit</Button>
                <Button fontWeight="medium" leftIcon={
                    <Icon fontSize="24px" as={PiHandWithdrawFill} />
                }>Withdrawal</Button>
            </HStack>
        </HStack>

    )


}

export default Portfolio;