import React, { useState, useContext, useEffect } from "react";
import { Box, Container, Wrap, WrapItem, Text, Heading, VStack, HStack, Button, IconButton } from "@chakra-ui/react";
import { SocialIcon } from 'react-social-icons';
import { BsTwitter } from 'react-icons/bs';
import { FaDiscord, FaLinkedinIn } from 'react-icons/fa';
import Layout from "../components/structure/Layout";
import ContactForm from "../components/elements/ContactForm";
import { services } from "../constants/services";
import { team } from "../constants/team";

export default function Home() {

  console.log()

  return (
    <Layout>

      <Box id="home-first-row" className="row">
        <Heading as="h1">A web3 native law firm? LFG.</Heading>
        <Text>Work with lawyer-coders who actually understand your project.</Text>
        <ContactForm label="Let's Talk" />
      </Box>

      <Box id="home-second-row" className="row">
        <Box className="row-inner">
          <Heading as="h2">What We Do</Heading>
          <Wrap id="services">
          {services.map((item, index) => (
            <WrapItem
              className="service"
              key={index}
              width={{sm: '100%', md: '48%', lg: '32%', xl: '19%'}}
            >
              <VStack>
                <Heading as="h3">{item.name}</Heading>
                <Text>{item.description}</Text>
              </VStack>
            </WrapItem>
          ))}
          </Wrap>
        </Box>
      </Box>

      <Box id="home-third-row" className="row">
        <Box className="row-inner">
          <Heading as="h2">Meet the Team</Heading>
          <Wrap id="team">
          {team.map((item, index) => (
            <WrapItem
              className="teammate"
              width={{sm: '100%', md: '100%', lg: '100%', xl: '48%'}}
            >
              <HStack alignItems="start">
                <img src={item.icon} width="200" height="33" alt="founder" className="team-pic" />
                <VStack className="team-description">
                  <Heading as="h3">{item.name}</Heading>
                  <Text>{item.description}</Text>
                  <HStack>
                    <IconButton icon={<BsTwitter />} url={item.twitter} />
                    <IconButton icon={<FaDiscord />} url={item.discord} />
                    <IconButton icon={<FaLinkedinIn />} url={item.linkedin} />
                  </HStack>
                </VStack>
              </HStack>
            </WrapItem>
            ))}
          </Wrap>
        </Box>
      </Box>

    </Layout>
  );
}