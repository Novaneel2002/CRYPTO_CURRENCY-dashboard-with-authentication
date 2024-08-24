import { Box, Button, Divider, Flex, Grid, Icon, Stack, Text } from "@chakra-ui/react";
import { Customcard } from "../../../chakra/Customcard";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { RiBitCoinLine } from "react-icons/ri";
import { Fragment } from "react";

const Transaction = () => {
  const transactions = [
    {
      id: "1",
      icon: RiMoneyRupeeCircleLine,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      id: "2",
      icon: RiBitCoinLine,
      text: "BTC  Sell",
      amount: "- 12.48513391 BTC",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      id: "3",
      icon: RiMoneyRupeeCircleLine,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
    
    
  ];
  return (
    <Customcard h="full"  justifyContent={"space-between"}>
      <Text mb="6" fontSize="sm" color="black.80">
        Recent Transactions
      </Text>
      <Stack  spacing={4}>
        {transactions.map((transaction, i) => (
          <Fragment key={transaction.id}>
            {i !== 0 && <Divider />}
            <Flex gap="4">
              <Grid
                placeItems="center"
                bg="blue.50"
                boxSize={12}
                borderRadius="full"
                fontSize="24px"
              >
                <Icon as={transaction.icon} />
              </Grid>
              <Flex justify="space-between" w="full">
                <Stack spacing={0}>
                  <Text textStyle="h5">{transaction.text}</Text>
                  <Text fontSize="sm" color="black.40">
                    {transaction.timestamp}
                  </Text>
                </Stack>
                <Text textStyle="h5">{transaction.amount}</Text>
              </Flex>
            </Flex>
          </Fragment>
        ))}
      </Stack>
     

      <Button fontWeight="medium"  w="full" mt="12" bg={"blue"} >
        View All
      </Button>
      
    </Customcard>
  )
}

export default Transaction;