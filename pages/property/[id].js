import { Box, Flex, Spacer, Text } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/avatar";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import { baseUrl, fetchApi } from "../api/fetchApi";
import ScrollImage from "../../components/ScrollImage";

const PropertyDetails = ({
  propertyDetails: {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
  },
}) => (
  <Box maxWidth="1000px" margin="auto" p="4">
    {photos && <ScrollImage data={photos} />}
    <Box w="full" p="6">
      <Flex paddingTop="2" alignItems="center">
        <Box paddingRight="3" color="#f59e0b">
          {isVerified && <GoVerified />}
        </Box>
        <Text fontWeight="bold" fontSize="lg">
          AED {price} {rentFrequency && `/${rentFrequency}`}
        </Text>
        <Spacer />
        <Avatar size="sm" src={agency?.logo?.url}></Avatar>
      </Flex>
      <Flex
        alignItems="center"
        p="1"
        justifyContent="space-between"
        w="250px"
        color="#f59e0b"
      >
        {rooms}
        <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
      </Flex>
    </Box>
    <Box marginTop="2">
      <Text fontSize="lg" marginBottom="2" fontWeight="bold">
        {title}
      </Text>
      <Text lineHeight="2" color="gray.600">
        {description}
      </Text>
    </Box>
    <Flex
      flexWrap="wrap"
      textTransform="uppercase"
      justifyContent="space-between"
    >
      <Flex
        justifyContent="space-between"
        w="400px"
        borderBottom="1px"
        borderColor="gray.100"
        p="3"
      >
        <Text>Type</Text>
        <Text fontWeight="bold">{type}</Text>
      </Flex>
      <Flex
        justifyContent="space-between"
        w="400px"
        borderBottom="1px"
        borderColor="gray.100"
        p="3"
      >
        <Text>Purpose</Text>
        <Text fontWeight="bold">{purpose}</Text>
      </Flex>
      {furnishingStatus && (
        <Flex
          justifyContent="space-between"
          w="400px"
          borderBottom="1px"
          borderColor="gray.100"
          p="3"
        >
          <Text>Furnishing Status</Text>
          <Text fontWeight="bold">{furnishingStatus}</Text>
        </Flex>
      )}
    </Flex>
    <Box>
      {amenities.length && (
        <Text fontSize="2xl" fontWeight="black" marginTop="5">
          Criteria:
        </Text>
      )}
      <Flex flexWrap="wrap">
        {amenities?.map((item) =>
          item?.amenities?.map((amenity) => (
            <Text
              key={amenity.text}
              fontWeight="bold"
              color="#f59e0b"
              fontSize="l"
              p="2"
              bg="#fef3c7"
              m="1"
              borderRadius="5"
            >
              {amenity.text}
            </Text>
          ))
        )}
      </Flex>
    </Box>
  </Box>
);

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

  return {
    props: {
      propertyDetails: data,
    },
  };
}
