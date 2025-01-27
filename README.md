# Table of contents

- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)

## Overview

The Azakaw frontend SDK allows you to add customer onboarding in your web application using web components. It provides you with a custom element that encapsulates the functionality of the customer onboarding.

## Installation

`npm install azakaw-frontend-sdk`

## Usage

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
