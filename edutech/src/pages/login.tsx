import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";

import {
  loginLoading,
  loginSuccess,
  loginFailure,
} from "../Redux/Authentication/actiontype";

import { useSelector, useDispatch } from "react-redux";

import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const dispatch = useDispatch();

  const { loginloading } = useSelector((store: any) => store.Authentication);

  console.log(loginloading);

  const handleLogin = async () => {
    if (email && password) {
      const data = { email, password };
      dispatch({ type: loginLoading });
      try {
        await axios
          .post("http://localhost:4002/users/login", data)
          .then((res) => {
            dispatch({ type: loginSuccess, payload: res.data });
            console.log(res.data);
          });
      } catch (err: any) {
        dispatch({ type: loginFailure, payload: err.message });
        console.log(err.message);
      }
    } else {
      toast({
        title: "Please fill all fields",
        description: "Please fill all fields",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  return (
    <Stack
      direction={{ base: "column", lg: "row", "2xl": "row" }}
      border="0px solid red"
      width="75%"
      margin="auto"
      marginTop="10"
      marginBottom="10"
    >
      <Flex flex={1} border="0px solid red" padding="1.5">
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://img.freepik.com/free-vector/scientist-cartoon-character-with-science-lab-objects_1308-111810.jpg?w=2000"
          }
        />
      </Flex>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>Sign in to your account</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Checkbox>Remember me</Checkbox>
              <Link color={"blue.500"}>Forgot password?</Link>
            </Stack>
            <Button
              colorScheme="teal"
              variant="solid"
              w="7rem"
              onClick={handleLogin}
              isLoading={loginloading}
              loadingText="Loading..."
            >
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
}
