
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
  
  const obj = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };
  
  export default function SignupCard() {
    const [showPassword, setShowPassword] = useState(false);
  
    const [formData, setFormData] = useState(obj);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      // console.log(name,value)
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // axios
      //   .post(`https://electro-emporium.cyclic.app/user/auth/register`, formData)
      //   .then((res) => console.log(res.data))
      //   .catch((err)=>console.log(err.response.data))
  
      console.log(formData);
      setFormData(obj);
    };
  
    return (
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Sign up
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
  
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <form onSubmit={handleSubmit}>
                <HStack>
                  <Box>
                    <FormControl id="firstName" isRequired>
                      <FormLabel>First Name</FormLabel>
                      <Input type="text"
                       name="firstname"
                       onChange={handleChange}
                       value={formData.firstname}
                      />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="lastName">
                      <FormLabel>Last Name</FormLabel>
                      <Input type="text" 
                        name="lastname"
                        onChange={handleChange}
                        value={formData.lastname}
                      />
                    </FormControl>
                  </Box>
                </HStack>
                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" 
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                  />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                     type={showPassword ? "password":''}
                      name="password"
                      onChange={handleChange}
                      value={formData.password}
                    />
                    <InputRightElement h={"full"}>
                      <Button
                        variant={"ghost"}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }
                      >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Stack spacing={10} pt={2}>
                  <Button
                  type="submit"
                    loadingText="Submitting"
                    size="lg"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Sign up
                  </Button>
                </Stack>
                <Stack pt={6}>
                  <Text align={"center"}>
                    Already a user? <Link color={"blue.400"}>Login</Link>
                  </Text>
                </Stack>
              </form>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }