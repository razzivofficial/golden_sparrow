import React,{useState} from 'react';
import {
    Card,
    CardBody,
    Stack,
    Heading,
    Text,
    ButtonGroup,
    Button,
    Center,
    Flex,
    IconButton
  } from "@chakra-ui/react";
  import { FiHeart } from 'react-icons/fi';
  import { FcLike } from 'react-icons/fc';
  import './card.css';

  const PCard = () => {
    const [isFavorite, setIsFavorite] = useState(false);
  
    const handleWishlistClick = () => {
      setIsFavorite((prevState) => !prevState);
    };
    return(
        <Card maxW='sm' m={"3%"} p={"1%"} border={"1px solid black"} >
          <Flex justifyContent={"flex-end"}>
               <IconButton
                  isRound={true}
                  variant="solid"
                  colorScheme="gray"
                  aria-label="Toggle Wishlist"
                  fontSize="20px"
                  icon={isFavorite ? <FcLike /> : <FiHeart />}
                  onClick={handleWishlistClick}
                />
          </Flex>
            <CardBody>
                <Center>
                  <div class="container">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS61onY_u-H-UFCh9sakQURQWj1z-zkI1kbog&usqp=CAU"
                      alt="" />
                  </div>
                </Center>
              <Stack mt='6' spacing='1'>
                <Heading size='md'>$450</Heading>
                <Text color='black.400' fontSize='sm'>
                  Diamond Set
                </Text>
                <Text fontSize='xs'>
                  A perfect set for every occasion.
                </Text>
              </Stack>
            </CardBody>
          <ButtonGroup spacing='3' m='auto' size='sm'>
            <Button variant='outline' colorScheme='purple'>
              Show Details
            </Button>
            <Button variant='outline' colorScheme='purple'>
              Add to cart
            </Button>
          </ButtonGroup>
  
        </Card>
    )
}



export default PCard ;


