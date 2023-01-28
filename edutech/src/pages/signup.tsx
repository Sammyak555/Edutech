/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
// import "../styles/singup.module.css"
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
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
  Image,
  VStack,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

const Form1 = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <VStack spacing="1.5" margin="auto">
        <Image
          src="https://media.istockphoto.com/id/1337381696/photo/keep-learning-concept-letters-of-the-alphabet-on-a-chalk-board-drawn-arrows.jpg?b=1&s=170667a&w=0&k=20&c=h5Aayg3kppWeV6Su9ft1WVz-ARamcQl0CwAJ5Fl_zb8="
          alt=""
          width="xs"
        />
        <Heading as="h5" fontSize="24px" fontWeight="100" lineHeight="20px">
          Welcome to
        </Heading>
        <Heading as="h5" fontSize="28px" fontWeight="700" lineHeight="28px">
          Keep Learning
        </Heading>

        <Heading fontSize="20px" fontWeight="100" lineHeight="20px">
          Student Registration Form
        </Heading>
      </VStack>

      <VStack spacing="1.5" margin="auto">
        <FormControl>
          <FormLabel htmlFor="first-name" fontWeight={"normal"}>
            First name
          </FormLabel>
          <Input id="first-name" placeholder="First name" />
        </FormControl>

        {/* <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={"normal"}>
            Last name
          </FormLabel>
          <Input id="last-name" placeholder="last name" />
        </FormControl> */}

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
    </>
  );
};

const Form2 = () => {
  return (
    <>
      <Heading  textAlign={"center"} fontWeight="normal">
        Student Details
      </Heading>
      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          htmlFor="country"
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
          autoComplete="country"
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
          autoComplete="country"
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

 
    </>
  );
};

const Form3 = () => {
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal">
        Social Handles
      </Heading>
      <SimpleGrid columns={1} spacing={6}>
        <FormControl as={GridItem} colSpan={[3, 2]}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
          >
            Website
          </FormLabel>
          <InputGroup size="sm">
            <InputLeftAddon
              bg="gray.50"
              _dark={{
                bg: "gray.800",
              }}
              color="gray.500"
              rounded="md"
            >
              http://
            </InputLeftAddon>
            <Input
              type="tel"
              placeholder="www.example.com"
              focusBorderColor="brand.400"
              rounded="md"
            />
          </InputGroup>
        </FormControl>

        <FormControl id="email" mt={1}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
          >
            About
          </FormLabel>
          <Textarea
            placeholder="you@example.com"
            rows={3}
            shadow="sm"
            focusBorderColor="brand.400"
            fontSize={{
              sm: "sm",
            }}
          />
          <FormHelperText>
            Brief description for your profile. URLs are hyperlinked.
          </FormHelperText>
        </FormControl>
      </SimpleGrid>
    </>
  );
};

export default function multistep() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const toast = useToast();
  const [step, setStep] = useState(1);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [progress, setProgress] = useState(33.33);
  return (
    <>
      <Box
        className="login_main"
        border="1px solid red"
        width="75%"
        margin="auto"
      >
        <Box className="heroimage_box">
          <Image
            className="heroimage"
            src="https://img.freepik.com/free-vector/scientist-cartoon-character-with-science-lab-objects_1308-111810.jpg?w=2000"
            // src="https://media.istockphoto.com/id/643035492/vector/crazy-old-scientist-funny-character-cartoon-vector-illustration.jpg?s=612x612&w=0&k=20&c=8-2enSrm-4hMavJnhgf1qSuO6rUuJbXd5OmCI-WTZdM="

            alt=""
            width="100%"
          />
        </Box>
        <Box
          borderWidth="1px"
          rounded="lg"
          shadow="1px 1px 3px rgba(0,0,0,0.3)"
          // maxWidth={800}
          p={6}
          m="10px auto"
          as="form"
        >
          <Progress value={progress} mb="5%" mx="5%" isAnimated></Progress>
          {step === 1 ? <Form1 /> : <Form2 />}
          <ButtonGroup mt="5%" w="100%">
            <Flex w="100%" justifyContent="space-between">
              <Flex>
                <Button
                  onClick={() => {
                    setStep(step - 1);
                    setProgress(progress - 33.33);
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
                  display={step===2?"none":"block"}
                  w="7rem"
                  isDisabled={step === 2}
                  onClick={() => {
                    setStep(step + 1);
                    if (step === 2) {
                      setProgress(100);
                    } else {
                      setProgress(progress + 50.33);
                    }
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
      </Box>
    </>
  );
}
