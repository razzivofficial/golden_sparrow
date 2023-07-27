import React from "react";
import { Card, CardHeader, CardBody, CardFooter,Flex, Image, Stack, Button, Heading, Text, Box, IconButton } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons'


function Cart(){
    return(
        <Box boxShadow='2xl' p='1' m='1' w='700px' rounded='md' bg='white'>
        <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='filled'>
            
        <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '150px' }}
            src='https://cdn.caratlane.com/media/catalog/product/J/E/JE07306-1YP900_1_lar.jpg'
            alt=''
        />
       

        <Stack>
            <CardBody>
            <Heading mb='5' size='sm'>Ishaniya Diamond Drop Earrings</Heading>

            <Text fontSize='sm'>Category : Drop Earrings</Text>
            <Text py='2' fontSize='xl'>
                $450
                
            </Text>
            </CardBody>
        </Stack>
        <Flex flexWrap='wrap' justifyContent='flex-end' alignItems='center'>
        <IconButton m='4'size='sm'
            isRound={true}
            variant='solid'
            colorScheme='red'
            aria-label='Done'
            fontSize='15px'
            icon={<DeleteIcon />}  />
        </Flex>
        
        
        </Card>
       
        </Box>
 )
};

export default Cart;