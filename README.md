# Boilerplate Project for Typescript + Express.js + TS.ed

This repository provides boilerplate project template for Typescript + Express.js + TS.ed
  with some sample controller and middlewares integration. TS.ed provides many decorators and features for rapid development of ExpressJS application. It provides experience similar to Spring Boot (MVC framework) for server development on node platform.

[TS.ed](https://tsed.io/)

[Express.js](https://expressjs.com/)

[Typescript](https://www.typescriptlang.org/)

## Build
  Once you clone this repository, install necessary packages using `npm install` command.

  To build code use `npm run build` command. This will generate `dist` directory.

## Start Server - Development mode
  Make sure you have installed all necessary packages using `npm install` command.

  Run `npm run start:dev` command to start development server. Here, it uses 'ts-node-dev'
  npm package to run typescript code and watch for any file changes. It provides live-reload
  feature out of box.

## Start Server - Production mode
  Make sure you have installed all necessary packages using `npm install` command.

  Run `npm run start:prod` command to start production server. This command first transpiles
  the typescript code to javascript code and output it in `dist` directory. Then it runs the
  `./dist/index.js` file using `ts-node-dev`.

  Once server is running, go to browser and open url [http://localhost:5000](http://localhost:5000) and it should load index.html page.

## Lint
  Use `npm run list` command to perform syntax linting on typescript code.

