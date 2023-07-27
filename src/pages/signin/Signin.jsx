import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import gif1 from "../../components/resources/gif8.gif";
import gif2 from "../../components/resources/gif10.gif";
import gif3 from "../../components/resources/gif7.gif";
import gif4 from "../../components/resources/gif4.gif";
import {
  Input,
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
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  MenuGroup,
} from "@chakra-ui/react";
import "./signin.css"; // Create a new CSS file for SignIn styles

// Create a custom theme with dark mode enabled
const theme = extendTheme({
  config: {
    initialColorMode: "light", // Set 'dark' if you want to start with dark mode by default
    useSystemColorMode: false, // Set to true if you want to use the user's system preference for dark mode
  },
});

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

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
  const handlesubmit = () => {
    handleButtonClick();
    validateEmail();
  };

  const handleButtonClick = () => {
    setIsError(true);
    setDisplayedGif(gifMap.error);
  };

  //   const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [subscribe, setGender] = useState("");

  const handleSignin = () => {
    fetch("http://localhost:6060/users", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        const val = data.find((el) => el.email === email);
        if (val.email === email && val.password === pass) {
          alert("Login Successfull !!!");
          //   navigate("/")
        } else {
          alert("Wrong Credentials !!");
        }
      });
  };

  const handleGoogle = (decoded) => {
    fetch("http://localhost:6060/users", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        const val = data.find((el) => el.email === decoded.email);
        console.log(val);
        if (val) {
          alert("Login Successfull !!!");
          //   navigate("/")
        } else {
          alert("Wrong Credentials !!");
        }
      });
  };

  return (
    <ChakraProvider theme={theme}>
      <div className="gifCss">
        <img className="gif-image" src={displayedGif} alt="GIF" />
      </div>
      <div id="title">
        <h1>Welcome Back!</h1>
      </div>

      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Box p={4}>
        <Center h={{ base: "60vh", md: "40vh" }}>
          <Grid
            templateColumns={{ md: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
            gap={7}
            maxW="600px"
          >
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                variant="filled"
                type="email"
                id="email"
                placeholder="Enter Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                  handleFieldChange(e);
                }}
                
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                variant="filled"
                type="password"
                id="password"
                placeholder="Enter Password"
                onChange={(e) => {
                  setPass(e.target.value);
                  handleFieldChange(e);
                }}
              />
            </FormControl>

            <Menu>
              <MenuButton as={Button} colorScheme="blue">
                Subscribe
              </MenuButton>
              <MenuList>
                <MenuGroup title="Subscribe">
                  <MenuItem
                    onClick={(e) => {
                      setGender("Male");
                    }}
                  >
                    Subscribe to Newsletters
                  </MenuItem>
                  <MenuItem
                    onClick={(e) => {
                      setGender("Female");
                    }}
                  >
                    Give Offer Updates
                  </MenuItem>
                  <MenuItem
                    onClick={(e) => {
                      setGender("Other");
                    }}
                  >
                    Both
                  </MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>

            <Button
              colorScheme="purple"
              mt={{ base: 4, md: 0 }}
              onClick={handleSignin}
            >
              Sign In
            </Button>
            <Text as="i" mt={2}>
              New user?{" "}
              <Link href="../signup/SignUp" color="purple">
                Sign Up
              </Link>
            </Text>
            <GoogleOAuthProvider clientId="434017127253-3us7g8cl1ghhjb8sgln8j934ertpqofh.apps.googleusercontent.com">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  var decoded = jwt_decode(credentialResponse.credential);
                  handleGoogle(decoded);
                }}
                onError={() => {
                  console.log("Signup Failed");
                }}
              />
            </GoogleOAuthProvider>
          </Grid>
        </Center>
      </Box>
    </ChakraProvider>
  );
}

export default SignIn;