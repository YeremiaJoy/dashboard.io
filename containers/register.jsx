import { CheckIcon, WarningIcon, WarningTwoIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import Router, { useRouter } from "next/router";
import React, { useState } from "react";
import { RegisterContainer, SubmitBtn } from "../styles/registerUser";

function RegisterUser() {
  const toast = useToast();
  const router = useRouter();
  // const [value, setValue] = useState({
  //   name: "",
  //   email: "",
  // });

  const { values, handleValueChanged } = useForm();

  //error caution
  const isError = {
    name: values.name === "" || !values.name,
    email: values.email === "" || !values.email,
    //regex to validate the email is valid or no
    emailNotValid: !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      values?.email
    ),
  };

  async function handleSubmit() {
    await axios
      .post("https://delman-fe-api.fly.dev/users", values)
      .then(function () {
        toast({
          title: "Success add new user",
          variant: "left-accent",
          isClosable: true,
          position: "top-right",
          status: "success",
          icon: <CheckIcon w={5} h={5} />,
          duration: 5000,
          containerStyle: {
            maxWidth: "312px",
            fontSize: "14px",
          },
        });
        router.push("/users");
      })
      .catch(function (error) {
        toast({
          title: error.response.data.message,
          variant: "left-accent",
          isClosable: true,
          position: "top-right",
          status: "error",
          icon: <WarningTwoIcon w={6} h={6} />,
          duration: 5000,
          containerStyle: {
            width: "312px",
            fontSize: "14px",
            backgroundColor: "#fff",
          },
        });
      });
  }

  return (
    <RegisterContainer>
      {/* name input */}
      <FormControl isInvalid={isError.name}>
        <FormLabel htmlFor="name" color={isError.name && "red.500"}>
          Name
        </FormLabel>
        <Input
          name="name"
          type="text"
          value={values.name || ""}
          onChange={handleValueChanged}
          size="md"
        />
        {isError.name && (
          <>
            <WarningIcon w={3} h={3} color="red.500" />{" "}
            <span>Please provide name</span>
          </>
        )}
      </FormControl>
      {/* email input */}
      <FormControl isInvalid={isError.email || isError.emailNotValid}>
        <FormLabel
          htmlFor="email"
          color={(isError.email || isError.emailNotValid) && "red.500"}
        >
          Email
        </FormLabel>
        <Input
          name="email"
          type="email"
          value={values.email || ""}
          onChange={handleValueChanged}
          size="md"
        />
        {isError.email ? (
          <>
            <WarningIcon w={3} h={3} color="red.500" />{" "}
            <span>Please provide email</span>
          </>
        ) : (
          isError.emailNotValid && (
            <>
              <WarningIcon w={3} h={3} color="red.500" />{" "}
              <span>Please provide a valid email</span>
            </>
          )
        )}
      </FormControl>

      {/* button submit register user */}
      <SubmitBtn
        disabled={isError.name || isError.email || isError.emailNotValid}
      >
        <Button
          onClick={handleSubmit}
          disabled={isError.name || isError.email || isError.emailNotValid}
        >
          Submit User
        </Button>
      </SubmitBtn>
    </RegisterContainer>
  );
}

export default RegisterUser;

//Custom Hooks
const useForm = () => {
  const [values, setValues] = useState({});

  function handleValueChanged(e) {
    e.preventDefault();
    setValues((values) => ({ ...values, [e.target.name]: e.target.value }));
  }

  return {
    values,
    handleValueChanged,
  };
};
