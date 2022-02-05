import {
  Text, Box, HStack, Spacer, Heading, Button
} from "@chakra-ui/react";
import ContactForm from "../elements/ContactForm";

export default function Nav() {
  return (
    <HStack id="nav">
      <Heading as="h2" id="logo-text">The Antifirm</Heading>
      <Spacer />
      <ContactForm label="Contact" />
    </HStack>
  );
}
