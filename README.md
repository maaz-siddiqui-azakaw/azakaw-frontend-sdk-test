# Table of contents

- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)

## Overview

The Azakaw frontend SDK allows you to add customer onboarding in your web application using web components. It provides you with a custom element that encapsulates the functionality of the customer onboarding.

## Installation

`npm install azakaw-frontend-sdk`

### Important Note

The web components are registered on the web page itself, so it is necessary that the library is imported on your website before using it in your code.

## Usage

Import @maaz-siddiqui-azakaw/azakaw-frontend-sdk-test in your main javascript file.

`import './node_modules/@maaz-siddiqui-azakaw/azakaw-frontend-sdk-test/dist/main.js';`

In the HTML file you can then use the customer onboarding element, for example:

```
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="index.js" type="module"></script>
  </head>
  <body>
    <az-customer-onboarding
      session-id="d43151a9-a031-4067-a4c7-21baee51cfa3"
      host-origin="http://localhost:4200"
    ></az-customer-onboarding>
  </body>
</html>

```

### React

### Angular

## API

### Inputs

| Input       | Type     | Default | Required | Description                                                     |
| ----------- | -------- | ------- | -------- | --------------------------------------------------------------- |
| session-id  | `string` | `null`  | yes      | Session id against which the user onboarding will be performed. |
| host-origin | `string` | `null`  | yes      | The url on which your web application is hosted.                |

### Events

| Event name          | Returns | Description                               |
| ------------------- | ------- | ----------------------------------------- |
| onboardingCompleted | `void`  | Fired when user completes the onboarding. |
