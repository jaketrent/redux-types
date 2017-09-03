# CAUTION

this is a fork of https://github.com/jaketrent/redux-types

<<<<<<< HEAD
I use it only to contribute to the original repo.
Please don't download this repo since it is current and temporary work.
=======
## Why

Action types for the redux dispatcher must be unique.  An easy way to get uniqueness is with a namespace.  It is common, for instance, that you would `FETCH` things into many reducers.  But each `FETCH` must be distinguishable to the dispatcher.  To solve this problem, we might namespace the types to be `posts/FETCH` and `comments/FETCH`, mapping to names of some models or features in our app.

This library ensures that you follow this pattern, producing clean, readable action type namespacing.

## Install

```
npm install redux-types --save-dev
```
or
```
yarn add -D redux-types
```

## Usage

In your action `types.js` definition module, you might write:

```js
import types from 'redux-types'

export default types('posts',
  'CREATE',
  'FETCH',
  'EDIT',
  'DELETE'
)
```

And then be able to use these in your `actions.js` creators:

```js
import TYPES from './types'

export function createPost(post) {
  return {
    type: TYPES.CREATE,
    post
  }
}
```
>>>>>>> 23c65d8ee712a114dcdd529c0c89605f17b701a2
