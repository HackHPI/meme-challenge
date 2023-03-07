import { Button } from '@chakra-ui/react';
import { type NextPage } from 'next';
import { signOut, useSession } from 'next-auth/react';
import { AppLayout } from '~/components/layout';

const MemesPage: NextPage = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'unauthenticated') return <p>Access Denied</p>;

  return (
    <AppLayout>
      <h1>Protected Page</h1>
      <p>Session: {JSON.stringify(session)}</p>
      <Button onClick={() => void signOut({ callbackUrl: '/' })}>
        Sign out
      </Button>
    </AppLayout>
  );
};

export default MemesPage;
