# React Restaurant App - Concepts Notes

## 1. React Library Import

React applications need React libraries to create components and render UI.

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
```

### React

* Provides features to build UI components.
* Allows writing JSX.
* Helps manage application structure.

### ReactDOM

* Connects React application with the browser DOM.
* Used to display React components on the webpage.

Example:

```javascript
ReactDOM.createRoot(document.getElementById("root"))
```

---

# 2. React Components

A component is a reusable piece of UI.

Example:

```jsx
const Header = () => {
 return (
   <div>
     Header
   </div>
 )
}
```

Components help divide a large application into smaller manageable parts.

Advantages:

* Reusable
* Easy to maintain
* Better code organization

---

# 3. Functional Components

Modern React mainly uses functional components.

Example:

```jsx
const Body = () => {
 return <h1>Hello React</h1>
}
```

A functional component:

* Is a JavaScript function
* Returns JSX
* Represents UI

---

# 4. JSX (JavaScript XML)

JSX allows writing HTML-like code inside JavaScript.

Example:

```jsx
<h1>Hello React</h1>
```

Instead of:

```javascript
React.createElement(
"h1",
{},
"Hello React"
)
```

Benefits:

* Cleaner syntax
* Easier UI creation
* Looks similar to HTML

---

# 5. Component Composition

Components can contain other components.

Example:

```jsx
const AppLayout = () => {
 return (
   <>
    <Header/>
    <Body/>
   </>
 )
}
```

Structure:

```
AppLayout
    |
    |
 ----------------
 |              |
Header        Body
```

This is called component composition.

---

# 6. Rendering React Application

React renders components into the browser.

Example:

```javascript
const root =
ReactDOM.createRoot(
document.getElementById("root")
)

root.render(<AppLayout/>)
```

Flow:

```
React Component
        |
        |
ReactDOM
        |
        |
Browser DOM
```

---

# 7. Props (Properties)

Props are used to pass data from one component to another.

Example:

Parent:

```jsx
<RestaurantCard 
resData={restaurant}
/>
```

Child:

```javascript
const RestaurantCard = (props)=>{

}
```

Data flow:

```
Parent Component

        |
        |
       Props

        |
        |

Child Component
```

React follows one-way data flow.

---

# 8. Props Destructuring

Instead of:

```javascript
props.resData
```

we can write:

```javascript
const {resData}=props
```

This is called object destructuring.

Example:

Object:

```javascript
const user={
 name:"Rahul",
 age:20
}
```

Normal:

```javascript
user.name
```

Destructuring:

```javascript
const {name}=user
```

---

# 9. Object Destructuring

Used to extract values from objects.

Example:

```javascript
const {
name,
category,
rating
}=restaurant
```

Instead of:

```javascript
restaurant.name
restaurant.category
restaurant.rating
```

---

# 10. Arrays and Objects

Restaurant data is stored as an array of objects.

Example:

```javascript
const resList=[
 {
  name:"Pizza Hub",
  rating:4.5
 }
]
```

Structure:

```
Array
 |
 |
Object
 |
 |
Properties
```

---

# 11. Array.map()

map() is used to loop through arrays and create new elements.

Example:

```javascript
numbers.map()
```

React example:

```jsx
resList.map((restaurant)=>(
 <RestaurantCard/>
))
```

Purpose:

* Display multiple components
* Convert data into UI

---

# 12. Dynamic Rendering

React can display JavaScript values inside JSX.

Example:

```jsx
<h3>{name}</h3>
```

The `{ }` allows JavaScript expressions inside JSX.

Example:

```jsx
<h1>{username}</h1>
```

---

# 13. Inline Styling in React

React uses JavaScript objects for styling.

Example:

```javascript
const styleCard={
 backgroundColor:"#f0f0f0"
}
```

Using:

```jsx
<div style={styleCard}>
```

CSS:

```css
background-color:red;
```

React:

```javascript
{
backgroundColor:"red"
}
```

---

# 14. className in React

React uses:

```jsx
className
```

instead of:

```html
class
```

Example:

```jsx
<div className="header">
```

Reason:

`class` is a reserved keyword in JavaScript.

---

# 15. Image Rendering

Images can be displayed using:

```jsx
<img src="image-url"/>
```

Example:

```jsx
<img
src="pizza.jpg"
alt="pizza"
/>
```

`alt` improves accessibility.

---

# 16. Key Prop

When rendering lists React requires a unique key.

Example:

```jsx
<RestaurantCard
key={restaurant.id}
/>
```

Why?

React uses keys to identify elements efficiently.

Good:

```jsx
key={id}
```

Avoid:

```jsx
key={index}
```

---

# 17. Data Driven UI

Instead of writing:

```jsx
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
```

we store data:

```javascript
const resList=[]
```

and generate UI:

```javascript
resList.map()
```

Benefits:

* Less code
* Easy updates
* Scalable applications

---

# 18. Parent Child Relationship

React components have hierarchy.

Example:

```
AppLayout
     |
     |
    Body
     |
     |
RestaurantCard
```

Data moves:

```
Parent
   |
 Props
   |
Child
```

---

# 19. Reusable Components

RestaurantCard is reusable.

Same component can display:

```
Pizza
Burger
Biryani
Cafe
```

Only data changes.

Benefits:

* Cleaner code
* Faster development
* Easy maintenance

---

# 20. Component Naming Convention

React components must start with capital letters.

Correct:

```javascript
RestaurantCard
```

Wrong:

```javascript
restaurantCard
```

Lowercase names are treated as HTML tags.

---

# 21. Application Structure

Recommended React structure:

```
src

 |
 |-- components
 |       |
 |       |-- Header.jsx
 |       |-- Body.jsx
 |       |-- RestaurantCard.jsx
 |
 |-- App.js
 |
 |-- index.js
```

Each component should have one responsibility.

---

# Complete React Flow

```
index.js

    |
    |

ReactDOM

    |
    |

AppLayout

    |
    |

Header + Body

    |
    |

resList.map()

    |
    |

RestaurantCard

    |
    |

Props

    |
    |

UI
```

---

# Concepts Covered

* React Setup
* ReactDOM
* Functional Components
* JSX
* Component Composition
* Props
* Props Destructuring
* Object Destructuring
* Arrays
* Objects
* map()
* Dynamic Rendering
* Inline Styling
* className
* Key Prop
* Data Driven UI
* Component Reusability
* One Way Data Flow

---

# Project Description

This project demonstrates React fundamentals by creating a restaurant listing application.

The application uses reusable components, props, JSX, dynamic rendering, and array mapping to display restaurant information.