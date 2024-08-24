import { Grid, GridItem } from "@chakra-ui/react";
import Dashboardlayout from "../../components/Dashboardlayout";
import Portfolio from "./Components/Portfolio";
import Pricesection from "./Components/Pricesection";
import Infocards from "../../components/Infocards";

import Transaction from "./Components/Transaction";
import { useEffect } from "react";
import { fetchExample } from "../../api/query/exampleQuesry";
import { useQuery } from "@tanstack/react-query";

const Dashboard = () => {

    const exampleQuery = useQuery({
        queryKey: ["example"],
        queryFn: fetchExample,
    });

    if(exampleQuery.isLoading) return <div>Loading . . . </div>
    return (
        <Dashboardlayout title="Dashboard">
            <Grid
                gridTemplateColumns={{
                    base: "repeat(1, 1fr)",
                    xl: "repeat(2, 1fr)",
                }}
                gap="6"
            >
                <GridItem
                    colSpan={{
                        base: 1,
                        xl: 2,
                    }}
                >

                    <Portfolio />
                </GridItem>
                <GridItem colSpan={1}>


                    <Pricesection />
                </GridItem>
                <GridItem colSpan={1}>


                    <Transaction />
                </GridItem>
                <GridItem colSpan={1}>
                    <Infocards
                        imgUrl="/dot_bg.svg"
                        text=" Learn more about Loans – Keep your Bitcoin, access it’s value without
          selling it"
                        tagtext="Loan"
                        inverted={false}
                    />
                </GridItem>
                <GridItem colSpan={1}>
                    <Infocards
                        inverted={true}
                        tagtext="Contact"
                        imgUrl="/grid_bg.svg"
                        text="Learn more about our real estate, mortgage, and  corporate account services"
                    />
                </GridItem>

            </Grid>
        </Dashboardlayout>
    )
}


export default Dashboard;