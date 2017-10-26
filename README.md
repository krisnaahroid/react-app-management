##### Prerequisites

* Latest Git
* [react](https://github.com/facebook/react)
* [redux](https://github.com/reactjs/redux)
* [webpack](https://github.com/webpack/webpack) for building with HMR (Hot Module Replacement)
* [mocha](https://github.com/mochajs/mocha)/[chai](https://github.com/chaijs/chai)/[sinon](https://github.com/sinonjs/sinon)/[enzyme](https://github.com/airbnb/enzyme)/[jsdom](https://github.com/tmpvar/jsdom) for testing
* [yarn](https://github.com/yarnpkg/yarn) for package manager and task runner

##### Check out the repository

```bash
git clone git@bitbucket.org:clapping-ape/kokoro-admin-manager.git
```

##### Setup

Note: Make sure your Node.js version is v6.x.

* Install Yarn

```sh
brew install yarn
```

* Install Package

```sh
yarn install
```

##### Run kokoro-admin-manager

```sh
yarn start
```

And now you can visit the site with the URL http://localhost:8082

##### Unit Testing

Make sure everything is goin well.

```sh
yarn test
yarn run test:watch
```

If you would like to run a test on a specific file, just execute test command as you like `yarn test test/path_to_spec.js`

##### Lint

```sh
yarn run lint
yarn run fixlint # use eslint --fix, they can automatically fix some of errors, but not all.
```

##### Redux Devtools Extension

This Chrome extension allows inspection of Redux states (which can't be done easily using web console).

Download it from [here](https://chrome.google.com/webstore/detail/lmhkpmbekcpmknklioeibfkpmmfibljd)

##### Contributing

- Create Pull Request
- Make sure for creating the unit tests.
- Make sure have green color Circle CI.