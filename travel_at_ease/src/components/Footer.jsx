import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"md"} mb={2} color={"black"}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      // bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("#007e8f", "#007e8f")}
      maxW={"10xl"}
      m={7}
    >
      <img
        src="https://a.travel-assets.com/globalcontrols-service/content/f285fb631b0a976202ef57611c7050e9ef5ca51a/images/EG_Wordmark_blue_RGB.svg"
        style={{ marginLeft: "7%" }}
      />
      <Container as={Stack} maxW={"7xl"} py={5}>
        <SimpleGrid columns={{ base: 1, md: 2, md: 4 }} spacing={8}>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Link href={"#"}>About</Link>
            <Stack direction={"row"} align={"center"} spacing={2}>
              <Link href={"#"}>Jobs</Link>
              {/* <Tag
                size={"sm"}
                bg={useColorModeValue("green.300", "green.800")}
                ml={2}
                color={"white"}
              >
                
              </Tag> */}
            </Stack>
            <Link href={"#"}>List your property</Link>
            <Link href={"#"}>Patnership</Link>
            <Link href={"#"}>Newsroom</Link>
            <Link href={"#"}>Investor Relations</Link>
            <Link href={"#"}>Site Map</Link>
            <Link href={"#"}>Orbitz Rewards</Link>
            <Link href={"#"}>Advertising</Link>
            <Link href={"#"}></Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Explore</ListHeader>
            <Link href={"#"}>Hotels in United States</Link>
            <Link href={"#"}>Vacations Rentals in United States</Link>
            <Link href={"#"}>Car Rentals in United States</Link>
            <Link href={"#"}>Domestic Flight</Link>
            <Link href={"#"}>Vacation Packages in United States</Link>
            <Link href={"#"}>Orbitz Reviews</Link>
            <Link href={"#"}>Orbitz Coupons</Link>
            <Link href={"#"}>LGBTQ Travel</Link>
            <Link href={"#"}>Unique Accommodations</Link>
            <Link href={"#"}>Travel Blog</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Policies</ListHeader>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Terms of Use</Link>
            <Link href={"#"}>Vrbo terms and condition</Link>
            <Link href={"#"}>Orbitz Rewards Terms</Link>
            <Link href={"#"}>Your Privacy Choices</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Help</ListHeader>
            <Link href={"#"}>Support</Link>
            <Link href={"#"}>Cancel your hotel or vacation rental booking</Link>
            <Link href={"#"}>Cancel your flight</Link>
            <Link href={"#"}>Refund timelines,policies & processes</Link>
            <Link href={"#"}>Use an Orbitz Coupon</Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={5}>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            ml: 8,
          }}
        >
          {/* <Logo /> */}
        </Flex>
        <Text
          pt={1}
          pb={3}
          fontSize={"sm"}
          textAlign={"center"}
          color={"black"}
        >
          © 2023 Orbitz, LLC, an Expedia Group Company. All rights reserved.
          Orbitz, Orbitz.com, and the Orbitz logo are trademarks or registered
          trademarks of Orbitz, LLC. CST# 2083930-50.
        </Text>
      </Box>
    </Box>
  );
}
