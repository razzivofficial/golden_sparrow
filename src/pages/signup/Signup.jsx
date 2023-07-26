import React from "react";
import gif1 from "../../components/resources/gif8.gif";
import gif2 from "../../components/resources/gif10.gif";
import gif3 from "../../components/resources/gif7.gif";
import gif4 from "../../components/resources/gif4.gif";
import { useState } from "react";
import {
  Input,
  InputGroup,
  InputLeftAddon,
  Grid,
  ChakraProvider,
  ColorModeScript,
  extendTheme,
  Center,
  Stack,
  Checkbox,
  Link,
  FormControl,
  FormLabel,
  Button,
  Text,
  Box,
  Flex,
} from "@chakra-ui/react";
import "./signup.css";
import "../signin/Signin";

// Create a custom theme with dark mode enabled
const theme = extendTheme({
  config: {
    initialColorMode: "light", // Set 'dark' if you want to start with dark mode by default
    useSystemColorMode: false, // Set to true if you want to use the user's system preference for dark mode
  },
});

function SignUp() {
  const gifMap = {
    email: gif1,
    password: gif2,
    error: gif3,
  };

  const [displayedGif, setDisplayedGif] = useState(gif1);
  const [isError, setIsError] = useState(false);

  const handleFieldChange = (event) => {
    const inputType = event.target.type;
    const val = event.target.value;
    console.log(val);
    if (!val) {
      setDisplayedGif(gifMap.email);
    } else if (val) {
      setDisplayedGif(gifMap.password);
    }
  };

  const handleButtonClick = () => {
    // Simulating an error for the demo
    setIsError(true);
    setDisplayedGif(gifMap.error);

    // In a real scenario, you can perform your form validation logic here
    // and update 'isError' accordingly based on the validation result.
  };

  return (
    <ChakraProvider theme={theme}>
      <img className="gif-image" src={displayedGif} alt="GIF" />
      <div id="title">
        <h1>Hey, Unlock the Charms of Glamour!</h1>
      </div>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Box p={4}>
        <Center h="40vh">
          <Grid templateColumns="repeat(2, 1fr)" gap={7} maxW="600px">
            <FormControl isRequired>
              <FormLabel>Mobile Number</FormLabel>
              <InputGroup>
                <InputLeftAddon children="+91" />
                <Input
                  type="tel"
                  placeholder="Mobile Number"
                  onChange={handleFieldChange}
                />
              </InputGroup>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                variant="filled"
                type="email"
                placeholder="Enter Email"
                onChange={(e) => handleFieldChange(e)}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>First Name</FormLabel>
              <Input
                variant="filled"
                placeholder="First Name"
                onChange={handleFieldChange}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Last Name</FormLabel>
              <Input
                variant="filled"
                placeholder="Last Name"
                onChange={handleFieldChange}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                variant="filled"
                type="password"
                placeholder="Enter Password"
                onChange={handleFieldChange}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Confirm Password</FormLabel>
              <Input
                variant="filled"
                type="password"
                placeholder="Confirm Password"
                onChange={handleFieldChange}
              />
            </FormControl>
            <Button
              colorScheme="purple"
              mt={{ base: 4, md: 0 }}
              onClick={handleButtonClick}
            >
              Sign Me Up!
            </Button>

            <Flex
              justify="space-between"
              direction={{ base: "column", md: "row" }}
            >
              <Stack spacing={4} direction="row">
                <Checkbox colorScheme="blue" default>
                  Male
                </Checkbox>
                <Checkbox colorScheme="pink" default>
                  Female
                </Checkbox>
              </Stack>
            </Flex>

            <Text as="i" mt={2}>
              Already a member?{" "}
              <Link href="../signin/Signin" color="purple">
                LOG IN
              </Link>
            </Text>
          </Grid>
        </Center>
      </Box>
    </ChakraProvider>
  );
}

export default SignUp;
