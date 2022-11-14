# A food order application

A simulation of an Application where you can order and pay for food

**End Result**

Click the link : https://food-order-app-eniola.netlify.com/

# Description

**Details**

This is a single page application with a well structured layout, where you view both information of the web app and order food items by adding them to the cart. 

The application let you see name of each product then gives you the flexibility to add between one to five 5 items to the cart at once with a single button click. The items are stored on firebase and are fetched immediately the user opens the application

![item image](https://github.com/Eniola-Codes/Food-Order-App/blob/main/src/components/assets/item.png?raw=true)

The Cart button located at the navbar in the header section, this buttons contains a counter in a badge, which counts the number of items in the cart an if there are no items in the cart, it displays 0. For a better user experience on the frontend of the application, the button undergoes a subtle bump whenever an item has being added to the cart.

![Cart button](https://github.com/Eniola-Codes/Food-Order-App/blob/main/src/components/assets/button.png?raw=true)

A click of the cart button opens the cart, the cart systems allows you to view the name and quantity of each particular good you have added to cart. It also gives you the flexibility to remove and add to the quantity of any particular item. You can close or open the cart at any given time.

![Cart item](https://github.com/Eniola-Codes/Food-Order-App/blob/main/src/components/assets/cartitems.png?raw=true)

After a user makes an order, the order and contact information of that transaction is being stored on firebase.

**Technologies**

Technologies i used to build this are  React.js, Css, firebase

I used React.js framework to bootstrap this project because of the limitless functionalities and flexibilities it brings to me, examples of the these are : 

- useContext hook which i used this to manage the state of some components in my application which includes the functioning cart system
- Props to pass some data from component to component with ease.
- Access to 3rd party libraries that made the app much better like react-scroll and react-bootstrap, 

# Installation and Running

git clone or pull the project in your terminal, open the project folder on your local laptop in a code editor and run "npm start" in your editors terminal.



