import { Divider, Flex, Stack } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { FiInbox, FiSettings } from 'react-icons/fi';
import { Logo } from './logo';
import { NavButton } from './nav-button';
import { navItems } from './nav-items';
import { UserProfile } from './user-profile';

export const Sidebar = () => {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <Flex
      flex="1"
      bg="bg-accent"
      color="on-accent"
      overflowY="auto"
      maxW={{ base: 'full', sm: 'xs' }}
      py={{ base: '6', sm: '8' }}
      px={{ base: '4', sm: '6' }}
    >
      <Stack justify="space-between" spacing="1" width="full">
        <Stack spacing={{ base: '5', sm: '6' }} shouldWrapChildren>
          <Logo height="16" />
          <Stack spacing="1">
            {navItems.map((item, index) => (
              <NavButton
                key={index}
                label={item.label}
                icon={item.icon}
                aria-current={
                  router.pathname === item.path ? 'page' : undefined
                }
                onClick={() => void router.push(item.path)}
              />
            ))}
          </Stack>
        </Stack>
        <Stack spacing={{ base: '5', sm: '6' }}>
          <Stack spacing="1">
            <NavButton label="Archive" icon={FiInbox} />
            <NavButton label="Settings" icon={FiSettings} />
          </Stack>
          <Divider borderColor="bg-accent-subtle" />
          <UserProfile
            name={session?.user.name ?? ''}
            image={session?.user.image ?? undefined}
            email={session?.user.email ?? ''}
          />
        </Stack>
      </Stack>
    </Flex>
  );
};
