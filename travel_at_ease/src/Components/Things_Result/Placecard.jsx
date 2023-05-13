
import {
    Image,
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Placecard({image,title,price,desc,type,time}) {
  return (
    <Center py={6}>
      <Box
        maxW={'440px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        overflow={'hidden'}>
        <Box
          h={'340px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}
          
          >
          <Image
            width={"100%"}
            height={"100%"}
            src={
              image
            }
            layout={'fill'}
          />
        </Box>
        <Stack>
          <Heading
            color={useColorModeValue('green.500', 'white')}
            textTransform={'uppercase'}
            fontSize={'2xl'}
            >
            {title}
          </Heading>

          <Heading as='h2' size='md' noOfLines={1}>
                Rs {price}
            </Heading>
            <Text color={'gray.500'}>
            per traveller
          </Text>
          <Text color={'gray.500'}>
            {type}
          </Text>
          <h4>Duration of Trip :- {time}</h4>
          
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Stack direction={'column'} spacing={0} fontSize={'lg'}>
            
            
            <Text color={'gray.500'}>{desc}</Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}