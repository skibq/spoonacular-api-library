# Spoonacular API Library
Spoonancular API Library is a library to work with [Spoonancular API](https://spoonacular.com/food-api).

## Getting started
1. Install
    ```
    npm install spoonacular-api-library
    ```
2. Import specific method
    ```javascript
    import { randomRecipe } from 'spoonacular-api-library'
    ```
3. Execute a desired endpoint class with chosen HTTP method (get/post/put/delete...)
    ```javascript
    randomRecipe.get().then((response) => {
      console.log(response)
    })
    ```
4. You can pass extra options, see [axios config format](https://github.com/axios/axios#request-config) for available properties. Be careful, you are able to override default options. See example below:
    ```javascript
   const extraConfig = {
       params: {
           ID: 12345
         }
   };
   
    randomRecipe.get(extraConfig).then((response) => {
      console.log(response)
    })
    ```

## Available endpoints
#### [randomRecipe](https://spoonacular.com/food-api/docs#Get-Random-Recipes)
##### Available methods: GET
```javascript
import { randomRecipe } from 'spoonacular-api-library'

randomRecipe.get().then((response) => {
  console.log(response)
})
```


## Contribution
If you want to extend this library, you need to configure your local environment. Follow these steps:
1. Make sure that you have already installed node.js and npm package manager.
2. Install all dependencies by running `npm install` 
3. Start your local dev environment with `npm run dev`. It will run webpack in the watch mode, so the codebase will be recompiled when any change in the code will be detected. Everything will be compiled to `dist` folder. You can check the console for any errors.
4. Run `npm run lint` to check the code style.
5. Write and run tests. You can find them in the `test` folder. You can run tests with `npm run test`
6. You can use `npm run build` to build the library without the watch mode.

### How to extend this library
Spoonancular API provides mainly the GET request method for all of the endpoints, but my goal was to provide a scalable library, where we will be allowed to extend it by any of the HTTP methods or endpoint path.

In the codebase you can find already prepared mixins for GET and POST methods. But if you need, you can extend it by any method you want.

#### Add another HTTP method
If you need to add another HTTP method, you can check the difference between already existing methods and create your own. You can find them in src/requestMixins directory.

#### Add another endpoint path
If you want to add a new endpoint path, you can check already existing route, it's placed in src/routes directory. It all comes down to these steps:
1. Check all allowed methods for the desired endpoint, and import corresponding mixins
2. Define the endpoint path
3. Pass imported mixins to applyMixins function
4. Export your newly created endpoint (don't forget about index.ts)


