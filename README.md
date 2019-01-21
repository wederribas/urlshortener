# URL Shortener

[![Build Status](https://travis-ci.org/wederribas/urlshortener.svg?branch=master)](https://travis-ci.org/wederribas/urlshortener)
[![GitHub issues](https://img.shields.io/github/issues/wederribas/urlshortener.svg)](https://github.com/wederribas/urlshortener/issues)
![Contributions welcome](https://img.shields.io/badge/contributions-welcome-orange.svg)
[![GitHub stars](https://img.shields.io/github/stars/wederribas/urlshortener.svg)](https://github.com/wederribas/urlshortener/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/wederribas/urlshortener/master/LICENSE)

A good URL Shortener implementation built with full stack Javascript. Enjoy!

## Built With

- [Node.js](https://nodejs.org)
- [Express](https://expressjs.com)
- [MongoDB](https://www.mongodb.com/)
- [React](https://reactjs.org/)
- [Evergreen](https://evergreen.segment.com/)

## Requirements

This project uses **MongoDB** as database. If you have MongoDB installed in your machine, just run the MongoDB deamon and move forward with the installation.

Otherwise, please go to [this link](https://docs.mongodb.com/manual/installation/) in order to install MongoDB in your computer.

## Installation and Execution

The project is composed by the **back-end**, implemented with Node.js, Express and MongoDB. The **front-end** is implemented with React, using _create-react-app_ to generate the application boilerplate.

In order to run the application, you may start by cloning this repository:

```
git clone https://github.com/wederribas/urlshortener.git
cd urlshortener
```

Then export the environment variables required to run the backend application:

```
export BASE_URL=http://localhost:5000/

# If you want to see Node.js and Mongoose logs
export NODE_ENV=development

# Otherwise
export NODE_ENV=production
```

Now you could start both **back-end** and **front-end** applications:

```
#Starting the back-end application
cd backend
yarn install
node index.js

# Starting the fron-end application
cd ../frontend
yarn install
yarn start
```

Now, access the browser at http://localhost:3000 and you should see the URL Shortener running. :-)

By now, only the backend application has tests implemented. To run the tests, do:

```
cd backend
yarn test
```

## To do

There are some features/tasks to be implemented:

1. Implement tests in the front-end application;
2. Implement URL validation;
3. Create new interface to display link statistics;
4. Dockerize the application.

## Authors

- Weder Ribas - [@wederribas](https://twitter.com/wederribas)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
