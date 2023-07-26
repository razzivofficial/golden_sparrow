import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import gif1 from "../../components/resources/gif8.gif";
import gif2 from "../../components/resources/gif10.gif";
import gif3 from "../../components/resources/gif7.gif";
import gif4 from "../../components/resources/gif4.gif";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import {
  Input,
  InputGroup,
  InputLeftAddon,
  MenuButton,
  Menu,
  MenuGroup,
  MenuItem,
  MenuList,
  Grid,
  ChakraProvider,
  ColorModeScript,
  extendTheme,
  Center,
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
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [pass, setPass] = useState("");
  const [pass1, setPass1] = useState("");
  const [gender, setGender] = useState("");

  const handleSignin = () => {
    const obj = {
      mobile: mobile,
      email: email,
      fname: fname,
      lname: lname,
      password: pass,
      cpassword: pass1,
      gender: gender,
    };
    fetch("http://localhost:6060/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("SignUp Successful !!!");
      });
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
                  id="mob"
                  type="tel"
                  placeholder="Mobile Number"
                  onChange={(e) => {
                    //   handleFieldChange;
                    setMobile(e.target.value);
                  }}
                />
              </InputGroup>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                id="email"
                variant="filled"
                type="email"
                placeholder="Enter Email"
                onChange={(e) => {
                  // handleFieldChange(e);
                  setEmail(e.target.value);
                }}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>First Name</FormLabel>
              <Input
                id="fname"
                variant="filled"
                placeholder="First Name"
                onChange={(e) => {
                  // handleFieldChange;
                  setFname(e.target.value);
                }}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Last Name</FormLabel>
              <Input
                id="lname"
                variant="filled"
                placeholder="Last Name"
                onChange={(e) => {
                  // handleFieldChange;
                  setLname(e.target.value);
                }}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                id="password"
                variant="filled"
                type="password"
                placeholder="Enter Password"
                onChange={(e) => {
                  // handleFieldChange;
                  setPass(e.target.value);
                }}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Confirm Password</FormLabel>
              <Input
                id="password1"
                variant="filled"
                type="password"
                placeholder="Confirm Password"
                onChange={(e) => {
                  // handleFieldChange;
                  setPass1(e.target.value);
                }}
              />
            </FormControl>
            <Button
              id="signup"
              colorScheme="purple"
              mt={{ base: 4, md: 0 }}
              onClick={handleSignin}
              //   onClick={handleButtonClick}
            >
              Sign Me Up!
            </Button>

            <Flex
              justify="space-between"
              direction={{ base: "column", md: "row" }}
            >
              <Menu>
                <MenuButton as={Button} colorScheme="teal">
                  Gender
                </MenuButton>
                <MenuList>
                  <MenuGroup title="Profile">
                    <MenuItem
                      onClick={(e) => {
                        setGender("Male");
                      }}
                    >
                      Male
                    </MenuItem>
                    <MenuItem
                      onClick={(e) => {
                        setGender("Female");
                      }}
                    >
                      Female
                    </MenuItem>
                    <MenuItem
                      onClick={(e) => {
                        setGender("Other");
                      }}
                    >
                      Other
                    </MenuItem>
                  </MenuGroup>
                </MenuList>
              </Menu>
            </Flex>
          </Grid>
        </Center>
        <Box
          height="100vh"
          display={"flex"}
          justifyContent={"center"}
          mt={"5%"}
          gap={5}
        >
          <Text as="i" mt={2}>
            Already a member?{" "}
            <Link href="../signin/Signin" color="purple">
              LOG IN
            </Link>
          </Text>
          <GoogleOAuthProvider clientId="434017127253-3us7g8cl1ghhjb8sgln8j934ertpqofh.apps.googleusercontent.com">
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                var decoded = jwt_decode(credentialResponse.credential);
                console.log(decoded);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </GoogleOAuthProvider>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default SignUp;
