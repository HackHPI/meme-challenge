import { Button } from '@chakra-ui/react';
import { type NextPage } from 'next';
import { signIn } from 'next-auth/react';

const Home: NextPage = () => {
  return (
    <>
      <main>
        <div>
          <h1>HackHPI Meme Challenge</h1>
          <Button
            onClick={() => void signIn('keycloak', { callbackUrl: '/memes' })}
          >
            Sign in
          </Button>
        </div>
      </main>
    </>
  );
};

export default Home;
