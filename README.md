# Local development setup

Before you begin with setting up your local development environment, ensure that you have the following list of tools installed:

- [<img
  src="https://user-images.githubusercontent.com/82543715/142914382-5be71efd-9e34-46c2-aad6-04255c430594.png"
  width="16" height="16"> Git](https://git-scm.com/downloads)
- [<img
  src="https://user-images.githubusercontent.com/58258541/143049489-668aea70-bb2c-420d-b3e8-e0edc42a4e92.png"
  width="16" height="16"> Docker](https://docs.docker.com/get-docker/)
- [<img
  src="https://user-images.githubusercontent.com/58258541/143050266-4a2030d1-c319-447d-812b-2ad8a4020d48.png"
  width="16" height="16"> NodeJS](https://nodejs.org)
- [<img
  src="https://user-images.githubusercontent.com/58258541/143050227-b374b1f7-e28e-4b90-b7f0-b9112521d3b1.png"
  width="16" height="16"> Yarn](https://yarnpkg.com/)

After making sure that you have all the required dependencies take the following steps to setup your local environment:

1. Open Docker Desktop to start the Docker daemon.
2. Clone this repository by running the command `git clone https://github.com/HackHPI/meme-challenge.git`.
3. Open the project in your prefered code editor.
4. In the project's root directory, run `yarn` to fetch all project dependencies.
5. In the project's root directory, create a file `.env` identical to the [exemplary version](.env.example) (`.env.example`). This file must contain all necessary variable information about the environment the project should be run in. We will set the missing variables in a later step.
6. Run `yarn dev` (it's gonna fail we suck).
   - If you care: The reason we do this is that it runs `docker compose up -d` in the background, starting the database. `-d` keeps it running even if `yarn dev` terminates
7. Run `yarn prisma db push` to push the [prisma schema](/prisma/schema.prisma) to the database.
8. Go to the [Keycloak Administration Console](http://localhost:28080/admin/master/console/) in your browser. Administrator credentials are `admin` for both user and pass.
   - First, we need to set up a new realm:
     - Expand the dropdown menu in the top left and click on `Create Realm`.
     - You only need to provide a realm name here (e.g. `meme-challenge`)
   - Next, we need to create a client:
     - Navigate to `Clients` on the side bar and start the creation process.
     - In this process, you only need to provide the client ID (e.g. `meme-challenge-client`) and make sure `Client Authentication` is activated
     - You will immediately be redirected to a page on the newly created client. If not, navigate there through `Clients` in the side bar and clicking on your client name.
     - Under `Access Settings` change `Valid Redirect URLs` and `Web Origins` from `/*` to `*` and save
   - Next, we need to create a test user:
     - Navigate to `Users` in the side bar and start the creation process.
     - Set username (e.g. `test.user`)
     - Set email (e.g. `test.user@yuuuuh.org`), first (e.g. `Test`) and last name (e.g. `User`). This does not necessarily need to be done but later on, these properties will be obligatory in our system so better set them now.
     - Create that dood! Of course if you are a narcissist you can alternatively create a user representing yourself.
     - You will immediately be redirected to a page on the newly created user. If not, navigate there through `Users` in the side bar and clicking on your user name.
     - Go to `Credentials` tab and set some password (e.g. `123`). Also, prefer deselecting the `Temporary` option, as it will prompt you to set a new password. This will be great for the deployed version but unnecessary for local development.
   - Lastly, we need to prepare something for further setup. When you start the project locally, it needs to know what realm and what client to use in the environment it was just started in. To save some time finding this information later on, navigate to `Clients`, click on yours, go to the `Credentials` tab and copy the `Client secret`. If you regenerate this, you need to update it in the code as well.
9. In the project's root directory, find the `.env` file you've created in step 5. Scroll to the bottom of the file to find the empty variables that need to be set.
   - You can paste the client secret you copied earlier already.
   - Put your client ID in the bottom (e.g. `meme-challenge-client`).
   - For `KEYCLOAK_ISSUER`, set it to `http://localhost:28080/realms/<your realm name>`, e.g. `http://localhost:28080/realms/meme-challenge`.
10. Now you can run `yarn dev` to start the project locally and it will (should) actually work this time.
   - You can check out [the website](http://localhost:3000) under `localhost:3000` and sign in with the credentials you set when you created the user.

Happy developing!
