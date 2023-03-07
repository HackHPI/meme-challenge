import { Box, type BoxProps } from '@chakra-ui/react';

export const Card = (props: BoxProps) => (
  <Box minH="3xs" bg="bg-surface" boxShadow="sm" borderRadius="lg" {...props} />
);
