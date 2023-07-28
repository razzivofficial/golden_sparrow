import React, { useEffect, useState } from "react";
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
  Image,
} from "@chakra-ui/react";
import "./addCart.css";
import { TbDiscount2 } from "react-icons/tb";
import { AiOutlineAim } from "react-icons/ai";
import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

function AddToCart() {
  const breakpoints = {
    sm: "30em", // 480px
    md: "48em", // 768px
    lg: "62em", // 992px
    xl: "80em", // 1280px
  };

  const token = JSON.parse(localStorage.getItem("token"));
  const [arr, setArr] = useState([]);
  let price = 0;
  let discount = 0;
  let totalPrice = 0;
  const getData = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_BASE_URL}/jewellery/`, {
        method: "GET",
        headers: {
          Authorization: token,
        },
      });
      if (res.ok) {
        const data = await res.json();
        setArr(data);
      } else {
        const err = await res.json();
        throw new Error(err);
      }
    } catch (error) {
      alert(error.msg);
    }
  };

  if (arr.length > 0) {
    arr.forEach((el) => {
      price += parseInt(el.value);
    });
    discount = Math.round(price * 0.1);
    totalPrice = price - discount;
  } else {
    price = 0;
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <Box p="10">
        <Grid templateColumns="repeat(2, 2fr)" gap="10" maxW="2000px">
          <Stack>
            {arr.length > 0 ? (
              arr.map((el) => {
                return (
                  <Cart
                    image={el.image}
                    value={el.value}
                    link={el.link}
                    product={el.product}
                    category={el.category}
                    id={el._id}
                  />
                );
              })
            ) : (
              <Box>
                <Image
                  src={
                    "https://media1.giphy.com/media/JPJ2NlxNWrOkqHEiWk/giphy.gif?cid=ecf05e47hon9r4d8qvownhkkzist8lcj5xomnuaj0ndi3oal&ep=v1_gifs_related&rid=giphy.gif&ct=s"
                  }></Image>
                <Text fontWeight={"700"} fontSize={"2rem"}>
                  You Have Nothing in the Cart !!
                </Text>
              </Box>
            )}
          </Stack>
          <Box p="2" color={"black"}>
            <Card mb="5" background="rgb(232, 225, 255)">
              <CardBody>
                <Flex justifyContent="space-between">
                  <Stack>
                    <Text as="b" fontSize="md" color={"black"}>
                      <Icon fontSize="25px" as={TbDiscount2} /> LUCKY CUSTOMER
                    </Text>
                    <Text fontSize="sm" color={"black"}>
                      Congrats !! You are Eligible for 10% Discount on Your
                      Purchase.
                    </Text>
                  </Stack>
                </Flex>
              </CardBody>
            </Card>
            <Card
              mb="5"
              bg="#f6f3f9"
              fontFamily="'InterSemiBold','Helvetica Neue',Helvetica,Arial,sans-serif">
              <CardBody>
                <Flex justifyContent="space-between">
                  <Text fontSize="sm" color={"black"}>
                    <Icon fontSize="25px" as={AiOutlineAim} /> Check Delivery &
                    Store Details
                  </Text>
                  <Button
                    size="sm"
                    variant="ghost"
                    colorScheme="purple"
                    color={"black"}>
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
                  <Stack color={"black"}>
                    <Text>Subtotal</Text>
                    <Text>You Saved</Text>
                    <Text>Coupon Discount</Text>
                    <Text>Shipping(Standard)</Text>
                  </Stack>
                  <Stack>
                    {" "}
                    color={"black"}
                    <Text color={"black"}> Rs: {price} /-</Text>
                    <Text color="green">-Rs: {discount}</Text>
                    <Button size="xs" variant="ghost" color={"black"}>
                      10% Discount
                    </Button>
                    <Text color="purple">Free</Text>
                  </Stack>
                </Flex>
                <Divider mt="3" mb="3" />
                <Flex fontSize="md" justifyContent="space-between">
                  <Text as="b" color={"black"}>
                    TOTAL COST
                  </Text>
                  <Text as="b" color={"black"}>
                    Rs: {totalPrice}
                  </Text>
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
      <Footer />
    </>
  );
}

export default AddToCart;
