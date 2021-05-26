# Intro to Redux

## How to setup redux for your project

- npm install --save redux
- npm install --save react-redux
- Import Provider and createStore in index.js
- Wrap your App with Provider tags
- Create an instance of your store and put it in a store variable
- Create a folder in src called "reducers". Create a file called "rootReducer.js" in this folder.
- Create initial state in rootReducer file
- Create rootReducer function that has 2 parameters (state=initialState, action)
- Create a switch statement with cases and a default.
- Export function
- Import rootReducer into index.js. Pass the rootReducer to your createStore
- Pass store to provider

## Use redux in your components

- Import useSelector and useDispatch to component
- Create variable and assign whatever state value you want to select
- Display variable using name in curly braces

## Change a state variable in Redux from our component

- Import useDispatch
- Create an instance of useDispatch
- Attach useDispatch to whatever function that will change the state
- Pass dispatch whatever type of your switch cases
