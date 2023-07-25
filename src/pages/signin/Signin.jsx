import React, { useState } from "react";
import {
  Center,
  Box,
  Flex,
  Grid,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Text,
  Link,
} from "@chakra-ui/react";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    // Perform sign up logic here, e.g., send data to the server
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Box p={4}>
        <h1 id="title">Sign In to GOLDEN SPARROW!</h1>
      <Center h="20vh">
        <Flex direction="column" maxW="md" w="100%">
          {/* <Box mb="5">
            
          </Box> */}
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input mb="10"
              variant="filled"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              isRequired // Using isRequired prop to make the input mandatory
            />

            <FormLabel>Password</FormLabel>
            <Input mb="10"
              variant="filled"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              isRequired // Using isRequired prop to make the input mandatory
            />
          </FormControl>

          <Flex mt={4} direction={{ base: "column", md: "row" }}>
            <Button colorScheme="purple" flex={1} onClick={handleSignIn}>
              Sign In
            </Button>
            <Text
              as="i"
              mt={{ base: 2, md: 0 }}
              ml={{ md: 2 }}
              textAlign={{ base: "center", md: "left" }}
            >
              New to Golden Sparrow?{" "}
              <Link href="../signup/Signup" color="purple">
                SIGN UP
              </Link>
            </Text>
          </Flex>
        </Flex>
      </Center>
    </Box>
  );
}

export default SignIn;


// import React, { useState } from "react";
// import { Input, Button, FormControl, FormLabel, Center, Text, Link, Stack } from "@chakra-ui/react";
// import "./signin.css";
// import "../signup/Signup"

// function SignIn() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignUp = () => {
//     // Perform sign up logic here, e.g., send data to the server
//     console.log("Email:", email);
//     console.log("Password:", password);
//   };

//   return (

//     <Center h="90vh">
//         <div>
//         <h1 id="title">Sign In to GOLDEN SPARROW!</h1>
//      <FormControl isRequired>  
//         <FormLabel>Email</FormLabel>
//         <Input mb="10" variant="filled"
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           isRequired // Using isRequired prop to make the input mandatory
//         />

//         <FormLabel>Password</FormLabel>
//         <Input mb="10" variant="filled"
//           type="password"
//           placeholder="Enter your password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           isRequired // Using isRequired prop to make the input mandatory
//         />
//         <Center>
//        <Stack>
//         <Button colorScheme="purple" mt={4} onClick={handleSignUp}>
//           Sign In
//         </Button>
//         <Text as='i'>New to Golden Sparrow?   <Link href='../signup/Signup' color="purple">SIGN UP</Link></Text>
//         </Stack>
//         </Center>
        
//       </FormControl>
      
//       </div>
//     </Center>
//   );
// }

// export default SignIn;



{/* <div>
        <h1 id="title">Sign In to GOLDEN SPARROW!</h1>
        <Center h="5vh" >
         <Stack>
            <Input mb="10" w="50vh" variant='filled' placeholder='Enter Email' required/>
            <Input mb="10" mbvariant='filled' type='password' placeholder='Enter Password' required/>
            <Button colorScheme='purple'>SIGN IN</Button>
            </Stack>

           
        </Center>
        </div> */}