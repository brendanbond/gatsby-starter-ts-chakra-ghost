import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Flex,
  Button,
} from '@chakra-ui/core';

const ContactForm = () => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      width="100%"
      marginBottom="1rem"
    >
      <form>
        <Flex
          flexDirection={{ base: 'column', sm: 'row' }}
          justifyContent="space-between"
          width="100%"
        >
          <FormControl
            id="name"
            width={{ base: '100%', sm: '48%' }}
            marginBottom="1rem"
            isRequired
          >
            <FormLabel>Name</FormLabel>
            <Input type="name" />
          </FormControl>
          <FormControl
            id="email"
            width={{ base: '100%', sm: '48%' }}
            marginBottom="1rem"
            isRequired
          >
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
        </Flex>
        <FormControl id="message" marginBottom="1rem" isRequired>
          <FormLabel>Your message</FormLabel>
          <Textarea />
        </FormControl>
        <Flex justifyContent="center">
          <Button width="136px">Submit</Button>
        </Flex>
      </form>
    </Flex>
  );
};

export default ContactForm;
