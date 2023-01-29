import {
  Box,
  Flex,
  Button,
  useDisclosure,
  Image,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
export default function Navbar() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isOpen, onToggle } = useDisclosure();

  const { isAuthenticated } = useSelector((store: any) => store.Authentication);

  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      border="0px solid red"
      px="50px"
      py="10px"
      borderBottom="0px solid grey"
      boxShadow="sm"
    >
      <Flex>
        <Flex
          border="0px solid black"
          flex={1}
          justify={"flex-start"}
          alignItems="center"
          gap="5"
        >
          <Link href={"/"}>
            <Box>
              <Image
                src="https://cdn-icons-png.flaticon.com/128/3976/3976625.png"
                alt="Learn & Grow logo"
                width="20"
              />
            </Box>
          </Link>
          <Box>
            <Link href={"/"}>
              <Heading as="h1" fontSize="xl" fontFamily="Inter">
                Learn & Grow
              </Heading>
            </Link>
          </Box>
        </Flex>

        <Flex flex={1} justify={"flex-end"}>
          {isAuthenticated === false ? (
            <Flex gap="5" alignItems="center">
              <Link href={"/login"}>
                <Button fontSize={"sm"} fontWeight={400} variant={"link"}>
                  Sign In
                </Button>
              </Link>

              <Link href={"/"}>
                <Button
                  fontSize={"sm"}
                  fontWeight={600}
                  colorScheme="teal"
                  variant="solid"
                  w="7rem"
                >
                  Sign Up
                </Button>
              </Link>
            </Flex>
          ) : (
            <Box>
              <Button
                fontSize={"sm"}
                fontWeight={600}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                onClick={() => {
                  dispatch({ type: "logout" });
                  router.push("/");
                }}
              >
                Signout
              </Button>
            </Box>
          )}
        </Flex>
      </Flex>
    </Box>
  );
}
