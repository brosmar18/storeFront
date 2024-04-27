# LAB - Class 36

## Project: StoreFront

### Author: Bryan O. Garduno Gonzalez

### Problem Domain

Create a user-friendly and visually appealing web application that allows users to browse products by categories. The main challenges include efficiently managing the state of categories and products using Redux, implementing an intuitive user interface for seamnless navigation, handling the association between categories and products for quick filtering, and designing a visually appealing layout using Material UI components to enhance the user experience.

### Links and Resources

- Main Branch [Deployment](https://store-front-three-iota.vercel.app/)
- Redux Features [Shop Page](https://store-front-three-iota.vercel.app/shop)

### Collaborators

- **ChatGPT by OpenAI**: Used as a programming partner for brainstorming ideas, debugging code, formulating tests, and drafting documentation.

### Setup

#### `.env` requirements (where applicable)

A .env file is included in local repository. A .env-sample file is uploaed to the remote repo so collaborators understand what environmental variables are being used.

#### How to initialize/run your application (where applicable)

- e.g. `npm start`

#### How to use your library (where applicable)

## Features

This e-commerce application incorporates the following key features:

- **Redux for State Management**: The application utilizes Redux to efficiently manage the state of categories, products, and the shopping cart. Redux allows for a centralized store that holds the application state, making it easier to manage and update data across different components. The Redux store is created using the `createStore` function from the `redux` library, and the root reducer is passed to it, combining the reducers for categories, products, and the cart.

- **Shopping Cart Functionality**: The application includes a shopping cart feature that allows users to add products to their cart. When a user clicks the "Add to Cart" button on a product card, the `addToCart` action is dispatched, adding the selected product to the cart state in the Redux store. The cart state maintains an array of the added products.

- **Cart Count and Total Price**: The application displays the count of items in the cart and the total price of the cart in the navbar. The cart count is derived from the length of the `items` array in the cart state, and the total price is calculated by summing the prices of all the products in the cart. The `updateTotalPrice` action is dispatched whenever an item is added to the cart to keep the total price up to date.

- **Material UI for UI Components**: The application leverages Material UI, a popular React UI framework, to create a visually appealing and responsive user interface. Material UI provides a wide range of pre-built components, such as `Box`, `Stack`, `Typography`, `Grid`, `Button`, `Card`, and more, which are used throughout the application to create a consistent and polished look.

- **Responsive Layout**: The application is designed to be responsive and adapt to different screen sizes. Material UI's grid system is employed to create a flexible layout that adjusts based on the device's viewport. The `Grid` component is used to arrange the category buttons and product cards in a responsive grid format.

- **Category Selection**: The application allows users to browse products by selecting a category. The list of categories is stored in the Redux store and rendered using the `CategoryButton` component. When a category is clicked, the `setActiveCategory` action is dispatched, updating the active category in the Redux store.

- **Product Filtering**: When a category is selected, the application filters the products based on the active category. The `filteredProducts` array is derived from the Redux store's `products` state and the `activeCategory`. Only the products associated with the selected category are displayed.

- **Product Card**: Each product is displayed using the `ProductCard` component, which utilizes Material UI's `Card`, `CardContent`, `Typography`, `IconButton`, and `Button` components. The product card showcases the product name, description, price, inventory count, and provides an "Add to Cart" button and a favorite icon.

- **Redux Actions and Reducers**: The application defines Redux actions and reducers to manage the state of categories, products, and the cart. The actions, such as `setActiveCategory`, `addToCart`, and `updateTotalPrice`, are dispatched to modify the state in the Redux store. The reducers handle these actions and update the corresponding parts of the state accordingly.

These features collectively contribute to creating an intuitive and visually appealing e-commerce application that allows users to browse products by categories, view product details, add items to the cart, and keep track of the cart count and total price.

## Tests

### Testing Setup and Implementation

### Component Testing

### Running the Tests

To run the tests, execute the `npm test` command.

### Incomplete or Skipped Tests

At this stage, all essential component tests have been implemented. Any future tests or enhancements will be noted in subsequent updates or phases.

#### UML

![Diagram](./src/assets/storeFrontUML.png);

### Figma Design

![Design File](./src/assets/figmaDesign/gameSiteDesign.png)
