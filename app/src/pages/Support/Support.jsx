import { IoMdMail } from "react-icons/io";
// import DashboardLayout from "../../components/DashboardLayout";
import ContactCard from "./components/Contactcard";
import SupportCard from "./components/Supportcard";
import { AiTwotoneMessage } from "react-icons/ai";
import Infocards from "../../components/Infocards";
import { Stack } from "@chakra-ui/react";
import Dashboardlayout from "../../components/Dashboardlayout";
const Support = () => {
  return (
    <Dashboardlayout title="Support">
      <Stack spacing="5rem">
        <SupportCard
          icon={IoMdMail}
          leftComponent={<ContactCard />}
          title="Contact Us"
          text="Have a question or just want to know more? Feel free to reach out to
          us."
        />
        <SupportCard
          icon={AiTwotoneMessage}
          leftComponent={
            <Infocards
              inverted={true}
              tagtext="Contact"
              imgUrl="/grid_bg.svg"
              text="Learn more about our real estate, mortgage, and  corporate account services"
            />
          }
          title="Live Chat"
          text=" Don’t have time to wait for the answer? Chat with us now."
        />
      </Stack>
    </Dashboardlayout>
  );
};

export default Support;