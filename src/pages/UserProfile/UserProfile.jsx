// import React from "react";
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   Box,
//   CardFooter,
//   Image,
//   Stack,
//   StackDivider,
//   Tabs,
//   TabList,
//   TabPanels,
//   Tab,
//   TabPanel,
//   Heading,
//   Text,
//   Flex,
//   Button,
//   Center,
//   Spacer,
//   AbsoluteCenter,
//   useMediaQuery,
// } from "@chakra-ui/react";
// import EmptyCart from "../../components/resources/emptyCart.png";
// import { Link } from "@chakra-ui/react";

// export default function Userprofile() {
//   const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

//   return (
//     <>
//       <Flex p="16px" direction={isLargerThan768 ? "row" : "column"}>
//         <div className="childDivProfile">
//           <Card
//             variant="filled"
//             w={isLargerThan768 ? "440px" : "100%"}
//             mb={isLargerThan768 ? "0" : "16px"}
//             pl={isLargerThan768 ? "75px" : "0"}
//           >
//             <CardBody>
//               <Stack spacing="4">
//                 <Box>
//                   <Text fontSize="xs" as="b">
//                     Jay
//                   </Text>

//                   <Text fontSize="xs">jayjagadish@gmail.com</Text>
//                   <Text fontSize="xs" color="rgb(222, 87, 229)">
//                     <Link>Edit Profile</Link>
//                   </Text>
//                 </Box>
//                 <Box>
//                   <Text fontSize="xs" as="b">
//                     ORDERS
//                   </Text>

//                   <Text pt="3" fontSize="xs">
//                     <Link color="rgb(136, 99, 251)">ORDERS AND RETURNS </Link>
//                   </Text>
//                   <Text pt="2" fontSize="xs">
//                     <Link>PAYMENT</Link>
//                   </Text>
//                   <Text pt="2" fontSize="xs">
//                     <Link>MANAGE REFUNDS</Link>
//                   </Text>
//                 </Box>
//                 <Box>
//                   <Text fontSize="xs" pt="2" as="b">
//                     APPOINTMENTS
//                   </Text>
//                   <Text pt="3" fontSize="xs">
//                     <Link>TRY AT HOME</Link>
//                   </Text>
//                 </Box>
//                 <Box>
//                   <Text fontSize="xs" pt="2" as="b">
//                     OFFERS
//                   </Text>
//                   <Text pt="3" fontSize="xs">
//                     <Link>COUPONS</Link>
//                   </Text>
//                 </Box>
//                 <Box>
//                   <Text fontSize="xs" pt="2" as="b">
//                     ACCOUNTS
//                   </Text>
//                   <Text pt="3" fontSize="xs">
//                     <Link>PROFILE</Link>
//                   </Text>
//                 </Box>
//                 <Box>
//                   <Text fontSize="xs" pt="2" as="b">
//                     CREDITS
//                   </Text>
//                   <Text pt="3" fontSize="xs">
//                     <Link>XCLUSIVE</Link>
//                   </Text>
//                   <Text pt="2" fontSize="xs">
//                     <Link>CARATLANE POP!</Link>
//                   </Text>
//                 </Box>
//               </Stack>
//             </CardBody>
//           </Card>
//               </div>
//               <div className="childDivProfile"></div>
//         <Box
//           pt={isLargerThan768 ? "6px" : "12px"}
//           pl={isLargerThan768 ? "30px" : "0"}
//         >
//           <Tabs variant="enclosed" colorScheme="purple">
//             <TabList>
//               <Tab fontSize="xs">MY ORDERS</Tab>
//               {/* <Tab fontSize="xs">CANCELLED ORDERS</Tab> */}
//             </TabList>
//             <TabPanels>
//               <TabPanel>
//                 <AbsoluteCenter w={isLargerThan768 ? "300px" : "100%"}>
//                   <Box pl={isLargerThan768 ? "80px" : "0"}>
//                     <img src={EmptyCart} alt="empty" />
//                     <Text
//                       fontSize="xl"
//                       pl={isLargerThan768 ? "28px" : "16px"}
//                       as="b"
//                     >
//                       No Active Orders
//                     </Text>
//                     <Button
//                       bgGradient="linear-gradient(to right, rgb(222, 87, 229), rgb(136, 99, 251))"
//                       mt="4px"
//                       ml={isLargerThan768 ? "8px" : "0"}
//                       w={isLargerThan768 ? "210px" : "100%"}
//                       color="white"
//                     >
//                       Continue Shopping
//                     </Button>
//                   </Box>
//                 </AbsoluteCenter>
//               </TabPanel>

//               <TabPanel>
//                 <AbsoluteCenter w={isLargerThan768 ? "300px" : "100%"}>
//                   <Box pl={isLargerThan768 ? "80px" : "0"}>
//                     <img src={EmptyCart} alt="empty" />
//                     <Text
//                       fontSize="xl"
//                       pl={isLargerThan768 ? "16px" : "0"}
//                       as="b"
//                       pt="8px"
//                     >
//                       No Cancelled Orders
//                     </Text>
//                     <Button
//                       bgGradient="linear-gradient(to right, rgb(222, 87, 229), rgb(136, 99, 251))"
//                       mt="8px"
//                       ml={isLargerThan768 ? "9px" : "0"}
//                       w={isLargerThan768 ? "210px" : "100%"}
//                       color="white"
//                     >
//                       Continue Shopping
//                     </Button>
//                   </Box>
//                 </AbsoluteCenter>
//               </TabPanel>
//             </TabPanels>
//           </Tabs>
//         </Box>
//       </Flex>
//     </>
//   );
// }
