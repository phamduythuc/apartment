import { Flex, Box, Text } from "@chakra-ui/react";
import Link from "next/link";

const Footer = () => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      padding={5}
      marginTop={20}
      bgColor="gray.100"
    >
      <Box fontSize="3xl" color="#f59e0b" fontWeight="bold">
        <Link href="/" paddingLeft="2">
          Cen Group
        </Link>
      </Box>
      <Text>+971588020051</Text>
    </Flex>
  );
};
export default Footer;
