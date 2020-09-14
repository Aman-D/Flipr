import React from "react";
import emailjs from "emailjs-com";
import { Flex, Input, Button } from "@chakra-ui/core";
const Mail = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hceq1zp",
        "template_ei308jn",
        e.target,
        "user_w164AxOxkcBqHEdiHXJtm"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <Flex
        color="white"
        backgroundColor="custom.red"
        justifyContent="center"
        alignItems="center"
        borderRadius="md"
        mx={4}
        p={2}
      >
        <label>Email</label>
        <Input color="black" type="email" name="user_email" m={2} />
        <Button color="black" type="submit" value="Send" m={2}>
          Send
        </Button>
      </Flex>
    </form>
  );
};

export default Mail;
