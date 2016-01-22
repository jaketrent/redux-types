# redux-action-types

Allows easy, consistent, and readable namespacing of redux actions.

## Why

Action types for the redux dispatcher must be unique.  An easy way to get uniqueness is with a namespace.  It is common, for instance, that you would `FETCH` things into many reducers.  But each `FETCH` must be distinguishable to the dispatcher.  To solve this problem, we might namespace the types to be `posts/FETCH` and `comments/FETCH`, mapping to names of some models or features in our app.

This library ensures that you follow this pattern, producing clean, readable action type namespacing.

## Install

```
npm install redux-action-types --save-dev
```

## Usage

In your action `types.js` definition module, you might write:

```js
import actionTypes from 'redux-action-types'

export default actionTypes('posts',
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
