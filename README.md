# Recursive Dynamic Form

This project is to build a recursive dynamic form from recursive array of objects.

```ts
type RecursiveArray<T> = Array<T | RecursiveArray<T>>;
```

Requirements can be found [here](./requirements/)

## Steps to Run

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

```bash
git clone https://github.com/lang-sky/commandlink-react-challenge.git
cd commandlink-react-challenge
nvm use 18
yarn
yarn start
```

## Unit Test by React Testing Library

To get test coverage report

```bash
yarn test --coverage .
```

## E2E Testing by Cypress

```bash
cp .env.example .env
yarn cypress:open
```

## Reference

- state management by [redux-toolkit](https://redux-toolkit.js.org/)
- redux side effect by [redux-saga](https://redux-saga.js.org/)
- styling by [styled-components](https://styled-components.com/)
- form management and validation by [formik](https://formik.org/) and [yup](https://github.com/jquense/yup)
- unit testing by [react testing library](https://testing-library.com/)
- e2e testing by [cypress](https://docs.cypress.io/guides/overview/why-cypress/)
