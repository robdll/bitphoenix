# Bit Phoenix

Bitfinex widget to check real time BTC price. 

[Demo](https://www.robertodilillo.dev/bitphoenix/)

# Requisites

- [Node](https://nodejs.org/en/)
- [yarn](https://classic.yarnpkg.com/lang/en/docs/install)

# Installation

1. clone repository

   > git clone git@github.com:robdll/awesome-movies.git

2. move to project directory

   > cd ./bitphoenix

3. install dependencies
   > yarn

# Run Project

1. withing the project folder run:

   > `yarn start`

2. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

3. in case you are having issue with seeing images, it is probably because project homepage has been set to `/bitphoenix`. Only if this happens, set the following env variable:
   > export PUBLIC_URL=http://localhost:3000

# Build

1. withing the project folder run:
   > `yarn run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### Deployment

if you forked this repository you will need to change the `homepage` property inside the `package.json` file.
After doing that you can run:

> npm run deploy
