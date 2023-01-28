/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  InputGroup,
  InputRightElement,
  Image,
  VStack,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

const Form1 = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <VStack spacing="1.5" margin="auto" marginTop="10px">
      <FormControl>
        <FormLabel htmlFor="full-name" fontWeight={"normal"}>
          Full name
        </FormLabel>
        <Input id="full-name" placeholder="Full name" />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="email" fontWeight={"normal"}>
          Email address
        </FormLabel>
        <Input id="email" type="email" placeholder="Enter email" />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="password" fontWeight={"normal"}>
          Password
        </FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </VStack>
  );
};

const Form2 = () => {
  return (
    <VStack spacing="1.5" margin="auto" marginTop="10px">
      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          htmlFor="class"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
        >
          CLASS
        </FormLabel>
        <Select
          id="class"
          name="class"
          autoComplete="class"
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        >
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </Select>
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          htmlFor="subject"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
        >
          SUBJECTS
        </FormLabel>
        <Select
          id="subject"
          name="subject"
          autoComplete="subject"
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        >
          <option>MATH</option>
          <option>SCIENCE</option>
          <option>ENGLISH</option>
        </Select>
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="state"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          State / Province
        </FormLabel>
        <Input
          type="text"
          name="state"
          id="state"
          autoComplete="state"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>
    </VStack>
  );
};

export default function Signup() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const toast = useToast();
  const [step, setStep] = useState(1);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [progress, setProgress] = useState(50);
  return (
    <Flex
      direction={{
        base: "column",
        lg: "row",
        xl: "row",
        "2xl": "row",
      }}
      border="0px solid red"
      width="75%"
      margin="auto"
      marginTop="10"
      marginBottom="10"
      justifyContent="space-evenly"
    >
      <Flex
        border="0px solid blue"
        width={{
          base: "90%",
          lg: "container.sm",
          xl: "container.sm",
          "2xl": "container.sm",
        }}
      >
        <Image
          src="https://img.freepik.com/free-vector/scientist-cartoon-character-with-science-lab-objects_1308-111810.jpg?w=2000"
          alt=""
          width=""
        />
      </Flex>
      <Box
        border="0px solid black"
        margin="auto"
        marginTop={{
          base: "1.5rem",
          lg: "unset",
          xl: "unset",
          "2xl": "unset",
        }}
      >
        <Progress value={progress} mb="5%" mx="5%" isAnimated></Progress>
        <VStack spacing="1.5" margin="auto">
          <Box
            border="0px solid black"
            justifyContent="center"
            alignItems="center"
            width={{
              base: "90%",
              lg: "52",
              xl: "52",
              "2xl": "48",
            }}
          >
            <Image
              src="https://cdn-icons-png.flaticon.com/128/3976/3976625.png"
              alt=""
              width=""
              marginLeft={{
                base: "40px",
                lg: "25px",
                "2xl": "20px",
              }}
            />
          </Box>
          <Heading as="h5" fontSize="24px" fontWeight="100" lineHeight="20px">
            Welcome to
          </Heading>
          <Heading as="h5" fontSize="28px" fontWeight="700" lineHeight="28px">
            Learn & Grow
          </Heading>

          <Heading fontSize="20px" fontWeight="100" lineHeight="20px">
            Student Registration Form
          </Heading>
        </VStack>
        {step === 1 ? <Form1 /> : <Form2 />}
        <ButtonGroup mt="5%">
          <Flex justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 50);
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%"
              >
                Back
              </Button>
              <Button
                display={step === 2 ? "none" : "block"}
                w="7rem"
                isDisabled={step === 2}
                onClick={() => {
                  setStep(step + 1);
                  setProgress(progress + 50);
                }}
                colorScheme="teal"
                variant="outline"
              >
                Next
              </Button>
            </Flex>
            {step === 2 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={() => {
                  toast({
                    title: "Account created.",
                    description: "We've created your account for you.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                  });
                }}
              >
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </Flex>
  );
}
