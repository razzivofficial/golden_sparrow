import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  Center,
  Spacer,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { MdCancel } from "react-icons/md";
export default function CCard() {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      alignItems="flex-start"
      my="4%"
      mx="30%"
      h={180}
      boxShadow="0 4px 6px 0 rgba(0, 0, 0, 0.2)"
    >
      <Card w={130} h={130} borderColor="rgb(222, 87, 229)" ml="2%" mt="4%">
        <Link>
          <Image
            objectFit="cover"
            // maxW={{ base: "100%", sm: "200px" }}
            src="https://ww1.prweb.com/prfiles/2012/10/31/10079702/emily_qtrbnd_5.jpg"
            alt="error"
            borderRadius="lg"
          />
        </Link>
      </Card>

      <Stack position={"relative"}>
        <CardBody>
          <Text py="1" fontSize="sm">
            Emma Flora Diamond Ring
          </Text>
          <Text as="b" fontSize="sm">
            ₹67,365{" "}
          </Text>
          <Text as="del" color="silver" fontSize="sm">
            ₹75,574
          </Text>
          <Text as="abbr" color="red" pl="1" fontSize="sm">
            Save ₹8,209
          </Text>
          <Text fontSize="xs" pt="2">
            JR03126-WGP900
          </Text>
          <Text as="b" pt="0" pr={3} fontSize="xs">
            Size:12{" "}
            <Link>
              <ChevronDownIcon />
            </Link>
          </Text>
          <Text as="b" pt="0" pr={2} fontSize="xs">
            Quantity:1{" "}
            <Link>
              <ChevronDownIcon />
            </Link>
          </Text>
          <br />
          {/* <Text fontSize="xs" as="u" color="rgb(222, 87, 229)">
            Check Delivery Date
          </Text> */}
          <Link fontSize="xs" color="rgb(222, 87, 229)" as="u">
            <Text as="u">Check Delivery Date</Text>
          </Link>
        </CardBody>
      </Stack>
      <Spacer />
      <Card color="purple" mr="4%" mt="4%" borderWidth={0}>
        <Link>
          <MdCancel boxSize={25} />
        </Link>
      </Card>
    </Card>
  );
}
