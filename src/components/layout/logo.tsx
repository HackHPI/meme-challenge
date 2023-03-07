import { Image, type ImageProps } from '@chakra-ui/react';

export function Logo(props: ImageProps) {
  return <Image src="/HackHPI_white.svg" alt="HackHPI Logo" {...props} />;
}
