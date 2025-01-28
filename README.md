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

#### Add the type declaration for JSX in the global.d.ts file

```
import { CustomerOnboardingWebComponent } from '@maaz-siddiqui-azakaw/azakaw-frontend-sdk-test';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'az-customer-onboarding': DetailedHTMLProps<
        HTMLAttributes<CustomerOnboardingWebComponent>,
        CustomerOnboardingWebComponent
      >;
    }
  }
}

```

#### Import the package and use the custom element inside your react component.

```
import { useEffect, useRef } from 'react';
import './App.css';
import '@maaz-siddiqui-azakaw/azakaw-frontend-sdk-test';
import { CustomerOnboardingComponent } from '@maaz-siddiqui-azakaw/azakaw-frontend-sdk-test';

function App() {
  const ref = useRef<CustomerOnboardingComponent>(null);

  useEffect(() => {
    if (!ref?.current) return;

    const azakawElemRef = ref?.current;

    const onOnboardingComplete = () => {
      console.log('Completed onboarding.');
    };

    azakawElemRef?.addEventListener(
      'onboardingCompleted',
      onOnboardingComplete
    );

    return () => {
      azakawElemRef?.removeEventListener(
        'onboardingCompleted',
        onOnboardingComplete
      );
    };
  }, []);

  return (
    <>
      <div className='wrapper'>
        <az-customer-onboarding
          ref={ref}
          session-id='7c035899-083c-4d4e-8d2d-5de92ceaa73d'
          host-origin='http://localhost:5173'
        ></az-customer-onboarding>
      </div>
    </>
  );
}

export default App;

```

### Angular

#### Add CUSTOM_ELEMENTS_SCHEMA in the schemas property of AppModule

```
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

```

#### Import the package and attach any event listeners to the customer onboarding web component

```
import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import '@maaz-siddiqui-azakaw/azakaw-frontend-sdk-test';
import { CustomerOnboardingWebComponent } from '@maaz-siddiqui-azakaw/azakaw-frontend-sdk-test';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  @ViewChild('customerOnboardingElem')
  customerOnboardingElem!: ElementRef<CustomerOnboardingWebComponent>;

  ngAfterViewInit(): void {
    this.customerOnboardingElem?.nativeElement?.addEventListener(
      'onboardingCompleted',
      this.onOnboardingCompleted
    );
  }

  ngOnDestroy(): void {
    this.customerOnboardingElem?.nativeElement?.removeEventListener(
      'onboardingCompleted',
      this.onOnboardingCompleted
    );
  }

  private onOnboardingCompleted = () => {
    console.log('Completed onboarding');
  };
}

```

#### Use the custom element in your template file

```

<div class="wrapper">
  <az-customer-onboarding
    session-id="7c035899-083c-4d4e-8d2d-5de92ceaa73d"
    host-origin="http://localhost:4201"
  ></az-customer-onboarding>
</div>

```

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
