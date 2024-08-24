import { Stack, Tag, Text } from "@chakra-ui/react"
import { Customcard } from "../chakra/Customcard";

const Infocards = ({ imgUrl, text, tagtext,inverted }) => {
    return (
        <Customcard
            bgColor={inverted ? "blue" : "white"}
            bgImage={imgUrl}
            bgSize="cover"
            bgRepeat="no-repeat"
        >
            <Tag
                color={inverted ? "blue" : "white"}
                bg={inverted ? "white" : "blue"}
                borderRadius="full"
            >
                {tagtext}
            </Tag>
            <Text
                mt="4"
                fontWeight="medium"
                textStyle="h5"
                color={inverted ? "white" : "black.80"}
            >
                {text}
            </Text>
        </Customcard>
    )
}

export default Infocards;