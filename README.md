# githubreposearch

Get a list of Github repositories of specified username sorted by numbers of stars in descending order and last updated time

## Installation

```js
// using npm
npm install githubreposearch

// using yarn
yarn add githubreposearch
```

## Usage

```js
// using require
const { getRepos } = require('githubreposearch');

// using import
import { getRepos } from 'githubreposearch';
```

## Example

### Using promises:

```js
getRepos({
  username: 'LilJuiceBox491', // provide GitHub username here
  page: 1, // optional property: default value is 1
  per_page: 50 // optional property: default value is 50
}).then((repositories) => console.log(repositories));
```

### Using async/await:

```js
const getRepositories = async function () {
  const repositories = await getRepos({
    username: 'LilJuiceBox491', // provide GitHub username here
    page: 1, // optional property: default value is 1
    per_page: 50 // optional property: default value is 50
  });
  console.log(repositories);
};

getRepositories();
```
