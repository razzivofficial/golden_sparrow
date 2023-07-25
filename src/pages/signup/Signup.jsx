import React from "react";
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
  Flex
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
  return (
    <ChakraProvider theme={theme}>
      <div id="title">
        <h1>Welcome to GOLDEN SPARROW!</h1>
      </div>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Box p={4}>
        <Center h="40vh">
          <Grid templateColumns="repeat(2, 1fr)" gap={7} maxW="600px">
            <FormControl isRequired>
              <FormLabel>Mobile Number</FormLabel>
              <InputGroup>
                <InputLeftAddon children="+91" />
                <Input type="tel" placeholder="Mobile Number" />
              </InputGroup>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input variant="filled" type="email" placeholder="Enter Email" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>First Name</FormLabel>
              <Input variant="filled" placeholder="First Name" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Last Name</FormLabel>
              <Input variant="filled" placeholder="Last Name" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                variant="filled"
                type="password"
                placeholder="Enter Password"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Confirm Password</FormLabel>
              <Input
                variant="filled"
                type="password"
                placeholder="Confirm Password"
              />
            </FormControl>
            <Button colorScheme="purple" mt={{ base: 4, md: 0 }}>
                Sign Me Up!
              </Button>

            <Flex justify="space-between" direction={{ base: "column", md: "row" }} >
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
              Already a member? <Link href='../signin/Signin' color="purple">LOG IN</Link>
            </Text>
          </Grid>
        </Center>
      </Box>
    </ChakraProvider>
  );
}

export default SignUp;




// import React from "react";
// import {
//   Input,
//   InputGroup,
//   InputLeftAddon,
//   Grid,
//   ChakraProvider,
//   ColorModeScript,
//   extendTheme,
//   Center,
//   Stack,
//   Checkbox,
//   Link,
//   FormControl,
//   FormLabel,
//   FormErrorMessage,
//   FormHelperText,
//   Button,Text
// } from '@chakra-ui/react';
// import "./signup.css";


// // Create a custom theme with dark mode enabled
// const theme = extendTheme({
//   config: {
//     initialColorMode: 'light', // Set 'dark' if you want to start with dark mode by default
//     useSystemColorMode: false, // Set to true if you want to use the user's system preference for dark mode
//   },
// });

// function SignUp() {
//   return (
//     <ChakraProvider theme={theme}>
//         <div id="title">
//             <h1>Welcome to GOLDEN SPARROW!</h1>
//             </div>
//       <ColorModeScript initialColorMode={theme.config.initialColorMode} />
//       <Center h="25vh">
//         <Grid templateColumns='repeat(2, 2fr)' gap={10}>
         
//           <InputGroup>
//             <InputLeftAddon children='+91' />
//             <Input type='tel' placeholder='Mobile Number' />
//           </InputGroup>
//           <Input variant='filled' placeholder='Enter Email' />
//           <Input variant='filled' placeholder='First Name' />
//           <Input variant='filled' placeholder='Last Name' />
//           <Input variant='filled' type='password' placeholder='Enter Password' />
//           <Input variant='filled' type='password' placeholder='Confirm Password' />
//           <Button colorScheme='purple'>Sign Me Up!</Button>
//           <Stack spacing={10} direction='row'>
//             <Checkbox colorScheme='blue' default>
//                 Male
//             </Checkbox>
//             <Checkbox colorScheme='pink' default>
//                 Female
//             </Checkbox>
//         </Stack>
//         <Text as='i'>Already a member?   <Link color="purple">LOG IN</Link></Text>
       
       
//         </Grid>
//       </Center>
     
        
//     </ChakraProvider>
//   );
// }

// export default SignUp;
