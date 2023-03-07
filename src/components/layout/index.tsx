import { Container, Flex, useBreakpointValue } from '@chakra-ui/react';
import { Navbar } from './navbar';
import { Sidebar } from './sidebar';

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const isDesktop = useBreakpointValue(
    { base: false, lg: true },
    { fallback: 'lg' }
  );
  return (
    <Flex
      as="section"
      direction={{ base: 'column', lg: 'row' }}
      height="100vh"
      bg="bg-canvas"
      overflowY="auto"
    >
      {isDesktop ? <Sidebar /> : <Navbar />}
      <Container py="8" flex="1">
        {children}
      </Container>
    </Flex>
  );
};
