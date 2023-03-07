import { theme as proTheme } from '@chakra-ui/pro-theme';
import {
  ChakraProvider,
  extendTheme,
  theme as baseTheme,
} from '@chakra-ui/react';
import '@fontsource/inter/variable.css';
import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { type AppType } from 'next/app';

import { api } from '~/utils/api';

const theme = extendTheme(
  { colors: { ...baseTheme.colors, brand: baseTheme.colors.blue } },
  proTheme
);

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
