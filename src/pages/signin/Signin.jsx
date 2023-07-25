import React, { useState } from "react";
import gif1 from "../../components/resources/gif1.gif";
import gif2 from "../../components/resources/gif2.gif";
import gif3 from "../../components/resources/gif3.gif";
import gif4 from "../../components/resources/gif4.gif";
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
import "./signin.css"; // Create a new CSS file for SignIn styles

// Create a custom theme with dark mode enabled
const theme = extendTheme({
  config: {
    initialColorMode: "light", // Set 'dark' if you want to start with dark mode by default
    useSystemColorMode: false, // Set to true if you want to use the user's system preference for dark mode
  },
});

function SignIn() {
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

    // In a real scenario, you can perform your sign-in logic here
    // and update 'isError' accordingly based on the authentication result.
  };

  return (
    <ChakraProvider theme={theme}>
      <img className="gif-image" src={displayedGif} alt="GIF" />
      <div id="title">
        <h1>Welcome Back!</h1>
      </div>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Box p={4}>
        <Center h="40vh">
          <Grid templateColumns="repeat(2, 1fr)" gap={7} maxW="600px">
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                variant="filled"
                type="email"
                placeholder="Enter Email"
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

            <Button
              colorScheme="purple"
              mt={{ base: 4, md: 0 }}
              onClick={handleButtonClick}
            >
              Sign In
            </Button>
            <Text as="i" mt={2}>
              New user?{" "}
              <Link href="../signup/SignUp" color="purple">
                Sign Up
              </Link>
            </Text>
          </Grid>
        </Center>
      </Box>
    </ChakraProvider>
  );
}

export default SignIn;
