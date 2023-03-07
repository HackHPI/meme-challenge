import { type NextPage } from 'next';
import { signIn } from 'next-auth/react';

const Home: NextPage = () => {
  return (
    <>
      <main>
        <div>
          <h1>HackHPI Meme Challenge</h1>
          <button
            onClick={() => void signIn('keycloak', { callbackUrl: '/memes' })}
          >
            Sign in
          </button>
        </div>
      </main>
    </>
  );
};

export default Home;
