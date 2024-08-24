import { Stack,Text, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, Tag } from "@chakra-ui/react";

const Transactiontable = () => {
    const tableData = [
        {
            id: "HD82NA2H",
            date: "2023-06-20",
            time: "07:00 AM",
            type: {
                name: "INR Deposit",
                tag: "E-Transfer",
            },
            amount: "+₹81,123",
            status: "pending",
        },
        {
            id: "HD82NA4H",
            date: "2023-06-18",
            time: "07:00 AM",
            type: {
                name: "INR Widthdraw",
                tag: "Wire Transfer",
            },
            amount: "-₹55,123",
            status: "processing",
        },
        {
            id: "HD82NA5H",
            date: "2023-06-18",
            time: "07:00 AM",
            type: {
                name: "Buy",
                tag: "BTC",
            },
            amount: "12.0554484 BTC",
            status: "cancelled",
        },
        {
            id: "HD82NA6H",
            date: "2023-06-18",
            time: "07:00 AM",
            type: {
                name: "Sell",
                tag: "BTC",
            },
            amount: "-2.0554484 BTC",
            status: "completed",
        },
        {
            id: "HD82NA7H",
            date: "2023-06-20",
            time: "07:00 AM",
            type: {
                name: "BTC Deposit",
            },
            amount: "+15.5000000",
            status: "pending",
        },
        {
            id: "HD82NA8H",
            date: "2023-06-18",
            time: "07:00 AM",
            type: {
                name: "BTC Widthdraw",
            },
            amount: "-5.05555544",
            status: "completed",
        },
    ];


    const statusColor = {
        pending: "#797E82",
        processing: "#F5A50B",
        completed: "#059669",
        cancelled: "#DC2626",
      };


    return (
        <TableContainer>
            <Table variant='simple' colorScheme="gray">
                <Thead>
                    <Tr>
                        <Th>ID</Th>
                        <Th>Date and Time</Th>
                        <Th>Type</Th>
                        <Th>Amount</Th>
                        <Th>Status</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        tableData.map((data) => (<Tr>
                            <Td fontSize="lg" fontWeight={"medium"}>{data.id}</Td>
                            <Td>
                                <Stack>
                                    <Text fontSize={"md"} fontWeight={"medium"}>{data.date}</Text>
                                    <Text  fontSize={"sm"} >{data.time}</Text>
                                </Stack>
                            </Td>
                            <Td>
                                <Stack>
                                    <Text fontSize={"md"} fontWeight={"medium"}>{data.type.name}</Text>
                                    <Text  fontSize={"sm"} color={"black.60"}>{data.type?.tag}</Text>
                                </Stack>
                            </Td>
                            <Td fontSize={"md"} fontWeight={"medium"}>{data.amount}</Td>
                            <Td fontSize={"md"} fontWeight={"medium"}><Tag bg={statusColor[data.status]} color={"white"} borderRadius={"full"} p={2} px={4}> {data.status}</Tag></Td>
                        </Tr>))
                    }


                    {/* id: "HD82NA8H",
                    date: "2023-06-18",
                    time: "07:00 AM",
                    type: {
                        name: "BTC Widthdraw",
          },
                    amount: "-5.05555544",
                    status: "completed", */}
                </Tbody>
            </Table>
        </TableContainer >


    )

}

export default Transactiontable;