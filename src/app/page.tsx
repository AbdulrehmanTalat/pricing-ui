'use client';
import { Box } from '@chakra-ui/react';
import Header from './header';
import Pricing from './Pricing';
import Features from './Features';
export default function Home() {
  return (
    <Box backgroundColor='white' minH='100vh'>
      <Header />
      <Pricing />
      <Features />
    </Box>
  );
}