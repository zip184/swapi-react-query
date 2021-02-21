# SWAPI react-query!

This project a really basic web front client for [SWAPI](https://swapi.dev/) (Star Wars API).

## Why?

I wrote this app to learn [react-query](https://react-query.tanstack.com/), so tried coming up with a good use case to learn it. I needed a project with tons of "server state" so I built a lot of components that lazily just requested data in an unorganized way.

## What's the other tech?

Built this baby in [React](https://reactjs.org/), using [Create React App](https://github.com/facebook/create-react-app).

**I decided to cut lots of corners. Here's some choices I made:**

- **No prop checking** I felt the need for speed!
- **No routing** I _always_ use [react-router](https://reactrouter.com/) for my SPAs. I needed to spice up my life.
- **Prop Drilling** I'm hoping to strike it rich!
- **BDD ([Bug Driven Development](https://haacked.com/archive/2007/09/24/bug-driven-development.aspx/))** Test writing is for the cowardly.
- **Inline Styles** Ain't nobody got time to be updating a CSS files.

## How to run

It's a typical [create-react-app](https://github.com/facebook/create-react-app) so nothing out of the ordinary.

#### `npm start`

Runs the app in the development mode on everyone's favorite port number.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm run build`

Builds the app for production to the `build` folder, but why would you ever need to do that?
