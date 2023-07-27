import React from "react";
import Cart from "../../components/cart/cart";
import {
  Grid,
  GridItem,
  Divider,
  Box,
  Flex,
  Stack,
  Button,
  Text,
  Card,
  CardBody,
  Icon,
  useBreakpoint,
} from "@chakra-ui/react";
import "./addCart.css";
import { TbDiscount2 } from "react-icons/tb";
import { AiOutlineAim } from "react-icons/ai";

function AddToCart() {
  const breakpoints = {
    sm: "30em", // 480px
    md: "48em", // 768px
    lg: "62em", // 992px
    xl: "80em", // 1280px
  };
  return (
    <Box p="10">
      <Grid templateColumns="repeat(2, 2fr)" gap="10" maxW="2000px">
        <Stack>
          {/* Cart component 1 */}
          <Cart />
          {/* Cart component 2 */}
          <Cart />
          {/* Cart component 3 */}
          <Cart />
        </Stack>
        <Box p="2">
          <Card mb="5" background="rgb(232, 225, 255)">
            <CardBody>
              <Flex justifyContent="space-between">
                <Stack>
                  <Text as="b" fontSize="md">
                    <Icon fontSize="25px" as={TbDiscount2} /> EXTRA3
                  </Text>
                  <Text fontSize="sm">Save Rs. 1,072.0 on this order!</Text>
                </Stack>
                <Button size="md" variant="ghost" colorScheme="purple">
                  Apply
                </Button>
              </Flex>
              <Button size="sm" variant="ghost" colorScheme="pink">
                Apply More Coupons
              </Button>
            </CardBody>
          </Card>
          <Card
            mb="5"
            bg="#f6f3f9"
            fontFamily="'InterSemiBold','Helvetica Neue',Helvetica,Arial,sans-serif">
            <CardBody>
              <Flex justifyContent="space-between">
                <Text fontSize="sm">
                  <Icon fontSize="25px" as={AiOutlineAim} /> Check Delivery &
                  Store Details
                </Text>
                <Button size="sm" variant="ghost" colorScheme="purple">
                  Enter Pincode
                </Button>
              </Flex>
            </CardBody>
          </Card>
          <Card
            bg="rgb(232, 225, 255)"
            fontSize="sm"
            fontFamily="'InterSemiBold','Helvetica Neue',Helvetica,Arial,sans-serif">
            <CardBody>
              <Flex justifyContent="space-between">
                <Stack>
                  <Text>Subtotal</Text>
                  <Text>You Saved</Text>
                  <Text>Coupon Discount</Text>
                  <Text>Shipping(Standard)</Text>
                </Stack>
                <Stack>
                  <Text> Rs.46,915</Text>
                  <Text color="green">-Rs.2,941</Text>
                  <Button size="xs" variant="ghost" colorScheme="pink">
                    Apply Coupon
                  </Button>
                  <Text color="purple">Free</Text>
                </Stack>
              </Flex>
              <Divider mt="3" mb="3" />
              <Flex fontSize="md" justifyContent="space-between">
                <Text as="b">TOTAL COST</Text>
                <Text as="b">Rs.43,974</Text>
              </Flex>
            </CardBody>
          </Card>

          <Button
            id="order"
            size="lg"
            colorScheme="linear-gradient(90deg,#E56EEB 0%,#8863FB 100%)">
            PLACE ORDER
          </Button>
        </Box>
      </Grid>
    </Box>
  );
}

export default AddToCart;
