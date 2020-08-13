# Interview Scheduler
Interview Scheduler is a single-page application with React, Webpack, Babel, Axios, Storybook, Webpack Dev Server, Jest, Cypress, Testing Library involved.
This project is a good demonstration of front-end skills and might be used by the others for the learning purposes. The application uses React to generate dynamic HTML code.

## Student
Margarita Struts

## Technical Specification

The Scheduler client application created using the Scheduler API server application and PostgreSQL server running in Vagrant VM.
Both servers run concurrently; requests are proxied from the Webpack development server to the API server.

## Getting started

### Prerequisites

Before setting up the application Scheduler API server needs to be installed and configured.
Fork scheduler-api reporsitory from https://github.com/lighthouse-labs/scheduler-api and follow the instruction to set it up.

### Setup the application
1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the npm install command.
3. Start the Scheduler API server using the npm start command. The app will be served at http://localhost:8001/
4. Start the Webpack Development Server using the npm start command. The app will be served at http://localhost:8000/.
5. Go to http://localhost:8080/ in your browser.


## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
## Running Cypress

```sh
npm run cypress
```

## Dependencies
- axios 0.19.2
- classnames 2.2.6
- normalize.css 8.0.1
- react 16.9.0
- react-dom 16.9.0
- react-scripts 3.0.0

## Dev Dependencies
- @babel/core 7.4.3
- @storybook/addon-actions 5.0.10
- @storybook/addon-backgrounds 5.0.10 
- @storybook/addon-links 5.0.10
- @storybook/addons 5.0.10
- @storybook/react 5.0.10
- @testing-library/jest-dom 4.0.0 
- @testing-library/react 8.0.7
- @testing-library/react-hooks 3.4.1
- babel-loader 8.0.5
- node-sass 4.11.0
- prop-types 15.7.2
- react-test-renderer 16.9.0

## Screnshots
!["screenshot of Desktop Layout"](https://github.com/MargaritaSt/tweeter/blob/master/Docs/DesktopLayout.PNG?raw=true)
!["screenshot of Mobile Device Layout"](https://github.com/MargaritaSt/tweeter/blob/master/Docs/MobileLayout.PNG?raw=true)
!["screenshot of TextBox validation"](https://github.com/MargaritaSt/tweeter/blob/master/Docs/DesktopLayout-TextBoxValidation.PNG?raw=true)