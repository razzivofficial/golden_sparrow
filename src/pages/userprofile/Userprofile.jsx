import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Box,
  CardFooter,
  Image,
  Stack,
  StackDivider,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading,
  Text,
  Flex,
  Button,
  Center,
  Spacer,
  AbsoluteCenter,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
export default function Userprofile() {
  return (
    <div>
      <Flex p="16px">
        <Card variant="filled" w="440px" pl="75px">
          <CardBody>
            <Stack spacing="4">
              <Box>
                <Text fontSize="xs" as="b">
                  Jay
                </Text>

                <Text fontSize="xs">jayjagadish@gmail.com</Text>
                <Text fontSize="xs" color="rgb(222, 87, 229)">
                  <Link>Edit Profile</Link>
                </Text>
              </Box>
              <Box>
                <Text fontSize="xs" as="b">
                  ORDERS
                </Text>

                <Text pt="3" fontSize="xs">
                  <Link color="rgb(136, 99, 251)">ORDERS AND RETURNS </Link>
                </Text>
                <Text pt="2" fontSize="xs">
                  <Link>PAYMENT</Link>
                </Text>
                <Text pt="2" fontSize="xs">
                  <Link>MANAGE REFUNDS</Link>
                </Text>
              </Box>
              <Box>
                <Text fontSize="xs" pt="2" as="b">
                  APPOINTMENTS
                </Text>
                <Text pt="3" fontSize="xs">
                  <Link>TRY AT HOME</Link>
                </Text>
              </Box>
              <Box>
                <Text fontSize="xs" pt="2" as="b">
                  OFFERS
                </Text>
                <Text pt="3" fontSize="xs">
                  <Link>COUPONS</Link>
                </Text>
              </Box>
              <Box>
                <Text fontSize="xs" pt="2" as="b">
                  ACCOUNTS
                </Text>
                <Text pt="3" fontSize="xs">
                  <Link>PROFILE</Link>
                </Text>
              </Box>
              <Box>
                <Text fontSize="xs" pt="2" as="b">
                  CREDITS
                </Text>
                <Text pt="3" fontSize="xs">
                  <Link>XCLUSIVE</Link>
                </Text>
                <Text pt="2" fontSize="xs">
                  <Link>CARATLANE POP!</Link>
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
        <Box pt="6px" pl="30px">
          <Tabs variant="enclosed" colorScheme="purple">
            <TabList>
              <Tab fontSize="xs">MY ORDERS</Tab>
              <Tab fontSize="xs">CANCELLED ORDERS</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <AbsoluteCenter w="300px">
                  <Box pl="80px">
                    <img src="/images/pf.png" alt="empty" />
                    <Text fontSize="xl" pl="28px" as="b">
                      No Active Orders
                    </Text>
                    <Button
                      bgGradient="linear-gradient(to right, rgb(222, 87, 229), rgb(136, 99, 251))"
                      mt="4px"
                      ml="8px"
                      w="210px"
                      color="white"
                    >
                      Continue Shopping
                    </Button>
                  </Box>
                </AbsoluteCenter>
              </TabPanel>

              <TabPanel>
                <AbsoluteCenter w="300px">
                  <Box pl="80px">
                    <img src="/images/pf.png" alt="empty" />
                    <Text fontSize="xl" pl="16px" as="b" pt="8px">
                      No Cancelled Orders
                    </Text>
                    <Button
                      bgGradient="linear-gradient(to right, rgb(222, 87, 229), rgb(136, 99, 251))"
                      mt="8px"
                      ml="9px"
                      w="210px"
                      color="white"
                    >
                      Continue Shopping
                    </Button>
                  </Box>
                </AbsoluteCenter>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </div>
  );
}
