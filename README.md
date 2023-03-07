# Local development setup

1. Install node
2. Install yarn
3. Install docker desktop and open it to start docker daemon
4. In `meme-challenge` directory, run `yarn` to fetch dependencies
5. Run `yarn dev` (its gonna fail we suck)
6. Run `yarn prisma db push`
7. Go to `localhost:28080` in your browser
   - Go to administration console (user, pass both `admin`)
   - Expand the dropdown menu in the top left
   - Create realm
     - Just provide realm name (e.g. `meme-challenge`) and create
   - Choose the new realm from dropdown menu
   - Go to clients, create client
     - Provide only client ID (e.g. `meme-challenge-client`)
     - Click next, activate `Client Authentication`
     - Click next, click save
     - Under `Access Settings` change `Valid Redirect URLs` and `Web Origins`
       from `/*` to `*` and save
     - Go to `Credentials` tab and copy client secret
8. In the `meme-challenge` directory, make an `.env` file identical to `.env.example`. Scroll to the bottom: We need to set the three vars
   - Paste your client secret in the bottom
   - Put your client ID in the bottom (e.g. `meme-challenge-client`)
   - For `KEYCLOAK_ISSUER`, set it to `http://localhost:28080/realms/<your realm name>`, e.g. `http://localhost:28080/realms/meme-challenge`
9. Go back to `localhost:28080`, administration console on your browser
   - Make sure you have the right realm selected
   - Navigate to `Users`, create user
     - Set username (e.g. `test.user`)
     - Set email (e.g. `test.user@yuuuuh.org`)
     - Set first name (e.g. `Test`)
     - Set last name (e.g. `User`)
     - Create that dood!
     - On created user, go to `Credentials` tab
     - Set some password (e.g. `123`) and deselect temporary
10. Now you can run `yarn dev` to start the project locally
    - You can check out the website under `localhost:3000` and sign in
