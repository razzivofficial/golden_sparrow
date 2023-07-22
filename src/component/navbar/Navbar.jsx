import { ReactNode } from "react";
import React from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Icon,
  ButtonGroup,
  Spacer,
  Input,
  InputGroup,
  InputRightElement,
  background,
  Text,
} from "@chakra-ui/react";
import { FaUserAlt } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { TbHomeEco } from "react-icons/tb";
import { LiaStoreAltSolid } from "react-icons/lia";
import { FaHandHoldingHeart } from "react-icons/fa";
import { AiOutlineGold } from "react-icons/ai";
import { BsHandbagFill } from "react-icons/bs";

import {
  HamburgerIcon,
  CloseIcon,
  AddIcon,
  MoonIcon,
  SunIcon,
  ReactIcon,
  PhoneIcon,
  SearchIcon,
} from "@chakra-ui/icons";

import "./navbar.css";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box
        color={useColorModeValue("black", "black")}
        px={4}
        bgColor={"#eddff0"}
        minWidth={"-webkit-fit-content"}>
        <Flex
          h={20}
          alignItems={"center"}
          justifyContent={"space-between"}
          bgColor={"#eddff0"}>
          <IconButton
            color={useColorModeValue("black", "black")}
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ lg: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box
              display={"flex"}
              w={{ base: "10rem", md: "15rem" }}
              fontSize={{ sm: "10px", md: "20px" }}>
              <ReactIcon mr={"8px"} fontSize={{ md: "35px" }} />
              <Text>GOLDENSPARROW</Text>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "none", lg: "flex" }}
              mr={"10px"}>
              <ButtonGroup fontWeight={"300"} spacing={5}>
                <Button
                  variant={"unstyled"}
                  leftIcon={<TbHomeEco />}
                  fontWeight={"300"}
                  fontSize={"xs"}
                  className="abtn">
                  FREE TRY AT HOME
                </Button>

                <Button
                  variant={"unstyled"}
                  leftIcon={<FaHandHoldingHeart />}
                  fontWeight={"300"}
                  fontSize={"xs"}
                  className="abtn">
                  PLAN OF PURCHASE
                </Button>
              </ButtonGroup>
              <InputGroup display={{ base: "none", md: "none", lg: "block" }}>
                <InputRightElement pointerEvents="none">
                  <SearchIcon color="black" />
                </InputRightElement>
                <Input
                  type="text"
                  placeholder="Search Here.."
                  bg={useColorModeValue("white", "#eee")}
                />
              </InputGroup>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <ButtonGroup display={{ base: "none", md: "none", lg: "flex" }}>
              <Button
                variant={"solid"}
                id="signup"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #d63feb, #b06df8, #9187f7, #8299ec, #88a6d9)",
                }}>
                {" "}
                Signup
              </Button>
              <Button
                variant={"outline"}
                colorScheme="purple"
                color={useColorModeValue("purple", "purple")}>
                Login
              </Button>
              <Button variant={"unstyled"}>
                <Icon className="abtn" as={AiFillHeart} />
              </Button>
              <Button variant={"unstyled"}>
                <Icon className="abtn" as={BsHandbagFill} />
              </Button>
              <Button
                onClick={toggleColorMode}
                variant={"unstyled"}
                className="abtn">
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </ButtonGroup>

            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
                color={"black"}>
                <Button variant={"unstyled"} className="abtn">
                  <Icon as={FaUserAlt} />
                </Button>
              </MenuButton>
              <MenuList color={useColorModeValue("black", "white")}>
                <MenuItem display={{ lg: "block" }}>
                  <Button variant={"unstyled"}>Signup</Button>
                </MenuItem>
                <MenuDivider display={{ md: "none" }} />
                <MenuItem display={{ lg: "block" }}>
                  <Button variant={"unstyled"}>Login</Button>
                </MenuItem>
                <MenuDivider display={{ md: "none" }} />

                <MenuItem>
                  <Button variant={"unstyled"}>Profile</Button>
                </MenuItem>
                <MenuItem>
                  <Button onClick={toggleColorMode} variant={"unstyled"}>
                    {colorMode === "light" ? "Dark Theme" : "Light Theme"}
                  </Button>
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ lg: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <ButtonGroup
                variant={"unstyled"}
                display={"flex"}
                flexDirection={"column"}>
                <Button color={"black"}>FREE TRY AT HOME</Button>
                <Button color={"black"}>PLAN OF PURCHASE</Button>
                <Button color={"black"}>DIGITAL GOLD</Button>
                <Button color={"black"}>BEST SELLERS</Button>
                <Button color={"black"}>RINGS</Button>
                <Button color={"black"}>BRACELETS</Button>
                <Button color={"black"}>CHAINS</Button>
                <Button color={"black"}>EARRINGS</Button>
                <Button color={"black"}>OTHER JWELLERY</Button>
              </ButtonGroup>
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box>
        <Box
          boxShadow="md"
          p="2"
          bg={useColorModeValue("white", "black")}
          minWidth={"-moz-fit-content"}
          display={{ base: "none", md: "none", lg: "block" }}>
          <ButtonGroup
            justifyContent={"space-around"}
            display={"flex"}
            variant={"unstyled"}
            ml={"10rem"}
            mr={"10rem"}
            flexWrap={"wrap"}
            color={useColorModeValue("black", "white")}>
            <Menu>
              <MenuButton as={Button} className="btn">
                BEST SELLERS
              </MenuButton>
            </Menu>
            <Menu>
              <MenuButton as={Button} className="btn">
                DIGITAL GOLD
              </MenuButton>
            </Menu>
            <Menu>
              <MenuButton as={Button} className="btn">
                RINGS
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton as={Button} className="btn">
                BRACELETS
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton as={Button} className="btn">
                EARRINGS
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton as={Button} className="btn">
                CHAINS
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton as={Button} className="btn">
                OTHER JWELLERY
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
          </ButtonGroup>
        </Box>
      </Box>
    </>
  );
}
