# Front-end Assignment from SportCompass

## A small e-commerce store demonstrating my understanding of essential front-end concepts, tools and libraries

#

### libraries Used:

1. `axios` for consuming APIs
2. `bootstrap` for styling
3. `cors` to set my API's cors origin to true
4. `express` to serve my API while developing
5. `firebase` all the firebase utilities used (API, storage, authentication, google login and database)
6. `node-sass` to use the SCSS syntax in my styles
7. `redux and react-redux` for central application state
8. `react-router-dom` to implement routing
9. `redux-logger` as a middleware for reduc related logging
10. `redux-persist` for data persistance
11. `react-stripe-checkout` for stripe payments impementation
12. `reselect` for the creation of redux selectors
13. `jest and enzyme` for some basic testing
14. `redux-mock-store` to mock the store while testing
15. `react-markdown` to include markdon in the about component
    for more detailed list look at the package.json

#

### Instructions to run the project:

1. Download the `react-e-commerse` repo.
2. Install <a href="https://nodejs.org"> Node.js</a>
3. Using a CLI go to the repo's directory (the one that contains package.json)
4. Run `npm install` do download all the required nod_modules
5. Run `npm start` to serve the application

### Instructions to test

1. Requires that `npm install` has already runned
2. Run `npm test -- --verbose` to run the tests

#

## More info about the solution

- Created using `npx create-react-app`
- Responsive Layout using `Bootstrap 4`
- Ability to add/edit/delete items in the cart
- Ability to add the same item multiple times to the cart
- Broken images are swapped with a default one
- Used class components with state
- Used stateless functional components
- Used hooks to add state to functional components
- Used `Redux` to have App wide state and persistance
- Used `Jest and Enzyme` for testing
