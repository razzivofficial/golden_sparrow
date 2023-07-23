import React, { useState } from "react";
import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  ButtonGroup,
  Button,
  Center,
  Flex,
  IconButton,
  ChakraProvider,
  ColorModeScript,
  extendTheme,
  useColorMode,
} from "@chakra-ui/react";
import { FiHeart } from "react-icons/fi";
import { FcLike } from "react-icons/fc";
import "./card.css";

// Create a custom theme with dark mode enabled
const theme = extendTheme({
  config: {
    initialColorMode: "light", // Set 'dark' if you want to start with dark mode by default
    useSystemColorMode: false, // Set to true if you want to use the user's system preference for dark mode
  },
});

const PCard = ({ image, link, product, value }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { colorMode } = useColorMode(); // Get the current color mode (light or dark)

  const handleWishlistClick = () => {
    setIsFavorite((prevState) => !prevState);
  };

  return (
    <Card
      maxW="sm"
      m={"3%"}
      p={"1%"}
      border={"1px solid black"}
      bg={colorMode === "dark" ? "gray.700" : "white"}
      borderRadius={"20px"}>
      <Flex justifyContent={"flex-end"}>
        <IconButton
          isRound={true}
          variant="solid"
          colorScheme="gray"
          aria-label="Toggle Wishlist"
          fontSize="20px"
          icon={isFavorite ? <FcLike /> : <FiHeart />}
          onClick={handleWishlistClick}
          color={
            isFavorite ? "red.500" : colorMode === "dark" ? "white" : "gray.600"
          }
        />
      </Flex>
      <CardBody>
        <Center>
          <div className="container">
            <img src={image} alt="" />
          </div>
        </Center>
        <Stack mt="6" spacing="1">
          <Heading size="md">{value}</Heading>
          <Text
            color={colorMode === "dark" ? "white" : "black.400"}
            fontSize="sm">
            {product}
          </Text>
          <Text
            fontSize="xs"
            color={colorMode === "dark" ? "gray.300" : "black.500"}>
            {link}
          </Text>
        </Stack>
      </CardBody>
      <ButtonGroup spacing="3" m="auto" size="sm" pb={"1%"}>
        <Button variant="outline" colorScheme="purple">
          Show Details
        </Button>
        <Button variant="outline" colorScheme="purple">
          Add to cart
        </Button>
      </ButtonGroup>
    </Card>
  );
};

export default PCard;
