# lab 37 : React 1

create a `Cookie Stand Admin` app using [Next.js](https://nextjs.org/){:target="_blank"} and style using [Tailwind CSS](https://tailwindcss.com/){:target="_blank"}.

## Feature Tasks and Requirements

- The `spec` for lab is screen shot of [Cookie Stand Admin Version 1](./cookie-stand-admin-version-1.png){:target="_blank"}
- `pages/Index.js` should...
  - Have `<Head>` component with page title set to `Cookie Stand Admin`
  - Have a `header` component that matches spec.
  - Have a `<main>` component containing `<form>` and a placeholder component showing JSON string of last created Cookie Stand.
  - Have a `<footer>` component that matches spec.
- Style app using TailwindCSS utility classes.



## Deployed URL
 React: https://basel-cookie-stand-admin.vercel.app/

## PR 
PR [link](https://github.com/baselatalla/cookie-stand-admin/pull/1)



--------------------------------------------------lab-38------------------------------------------------------

## lab-38: React2 (Cookie Stand Admin Version 2)

## Problem Domain

Your job is to continue work on Cookie Stand Admin app using Next.js and style using Tailwind CSS.

- starting time: 5:30 pm
- Finish time:10pm
  
## Deployed URL

React: https://basel-cookie-stand-admin.vercel.app/

## PR

PR: [link](https://github.com/baselatalla/cookie-stand-admin/pull/2)



--------------------------------------------------lab-39-----------------------------------------------------

## lab-39: React2 (Cookie Stand Admin Version 2)

## Problem Domain

## Feature Tasks and Requirements

- All features from versions 1 an 2 should be complete.
- The `specs` for lab are screen shots [Cookie Stand Admin Version 3](./cookie-stand-admin-version-3.png){:target="_blank"} and [Cookie Stand Admin Login](./cookie-stand-admin-login.png){:target="_blank"}
- `pages/Index.js` should export a `<Home>` component.
- `<Home>` requirements
  - If user is NOT logged in then `<LoginForm>` should render.
  - If user IS logged in then `<CookieStandAdmin>` component should render.
- `<LoginForm>` requirements
  - Should receive a function passed in to call when form is submitted.
  - The function should be called with `username` and `password` arguments.
- `<CookieStandAdmin>` requirements
  - When user fills out form to add location then the data should be posted to API
  - While waiting for API response the `<CookieStandTable>` should render the new row in a pending state.
  - When API response is complete then `<CookieStandTable>` should render latest data.
- `<CookieStandTable>` requirements
  - Component should continue to display Cookie Stand info as in version 2
  - Add a `delete` icon in each stand's location cell.
  - Clicking `delete` icon should immediately delete the Cookie Stand.
  - API should be informed that Cookie Stand was deleted.
- Continue to style all components using TailwindCSS utility classes to match spec.



- starting time: 5:30 pm
- Finish time:10pm
  
## Deployed URL

React: https://basel-cookie-stand-admin.vercel.app/

## PR

PR: [link](https://github.com/baselatalla/cookie-stand-admin/pull/3)

------------------------------------------------------------------------------------------------------------

# LAB 41: Front End Deployment

Deployed since day 1

## Links:

React: [link](https://basel-cookie-stand-admin.vercel.app/)

## PR

PR: [link](https://github.com/baselatalla/cookie-stand-admin/pull/4)
