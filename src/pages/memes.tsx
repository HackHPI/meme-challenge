import { type NextPage } from 'next';
import { signOut, useSession } from 'next-auth/react';

const MemesPage: NextPage = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'unauthenticated') return <p>Access Denied</p>;

  return (
    <>
      <h1>Protected Page</h1>
      <p>Session: {JSON.stringify(session)}</p>
      <button onClick={() => void signOut({ callbackUrl: '/' })}>
        Sign out
      </button>
    </>
  );
};

export default MemesPage;
