# template-rmd

A [react-md] template that I use when spinning up new projects.

## Commands

- `format` - format all files with [prettier]
- `lint` - run [eslint] on all typescript and javascript files using
  [@mlaursen/eslint-config]
  - Note: strict eslint rules
- `typecheck` - run `tsc --noEmit` on the project
  - Note: strict rules enforced
- `test` - run tests with [jest] + [ts-jest]
- `dev` - start the development server with [next]
- `build` - build the app for production
- `build-static` - build the app as pre-compiled html pages (requires no
  `getServerSideProps` and `getInitialProps`)
- `start` - run the production build

## Testing

```sh
# run all tests
yarn test

# run all tests and display code coverage
yarn test --coverage

# run tests in watch mode
yarn test --watch
```

Testing libraries included:

- [@testing-library/react]
- [@testing-library/user-event]
- [@testing-library/jest-dom] - just for the `extend-expect` behavior
- [jest-watch-typeahead] - Filter your tests by file name or test name

Use the `render` from [src/test-utils.tsx](./src/test-utils.tsx) instead of the
one from `@testing-library/react` since it'll wrap the test in all the require
context providers.

### Cypress Testing

TODO: Complete this section.

[Cypress Typescript setup](https://docs.cypress.io/guides/tooling/typescript-support#Install-TypeScript)

```sh
yarn add --dev cypress @testing-library/cypress
yarn cypress open
```

## Github Actions

- [validate](./.github/workflows/validate.yml) - Continuous integration by
  running `yarn lint`, `yarn typecheck`, `yarn test --coverage`
- [dependabot.yml](./.github/dependabot.yml) - Keep dependencies up-to-date on a
  weekly schedule
- [codeql_analysis.yml](./.github/workflows/codeql_analysis.yml) - check for
  security issues in code

## Git Tags

New tags will be created after a new `react-md` version or when a major change
happens in the repo. The tags can be used to see a diff of changes by using the
"compare" view after
[viewing a specific tag](https://github.com/mlaursen/template-rmd/tags).

[prettier]: https://prettier.io
[react-md]: https://react-md.dev
[husky]: https://typicode.github.io/husky/#/
[lint-staged]: https://github.com/okonet/lint-staged
[eslint]: https://github.com/eslint/eslint
[jest]: https://jestjs.io/
[ts-jest]: https://github.com/kulshekhar/ts-jest
[next]: https://nextjs.org/
[@mlaursen/eslint-config]: https://github.com/mlaursen/eslint-config
[@testing-library/react]:
  https://github.com/testing-library/react-testing-library
[@testing-library/jest-dom]: https://github.com/testing-library/jest-dom
[@testing-library/user-event]: https://github.com/testing-library/user-event
[jest-watch-typeahead]: https://github.com/jest-community/jest-watch-typeahead
