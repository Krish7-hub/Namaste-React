# React Basics Notes (Namaste React)

## 1. React.createElement()

React allows us to create UI elements using `React.createElement()`.

It creates a **React Element**, which is a JavaScript object.

### Example:

```javascript
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World From React!"
);

console.log(heading);
```

Output:

```
Object
```

React does not directly create HTML.

The flow is:

```
React.createElement()
          |
          ↓
React Element (JavaScript Object)
          |
          ↓
ReactDOM.render()
          |
          ↓
Actual HTML Element in Browser
```

---

# 2. Creating Nested Elements using React.createElement()

## HTML Equivalent

```html
<div id="parent">
    <div id="child">
        <h1></h1>
    </div>
</div>
```

## React Code

```javascript
const parent = React.createElement(
  "div",
  { id: "parent" },

  React.createElement(
    "div",
    { id: "child" },

    React.createElement(
      "h1",
      { id: "heading" },
      "I am an h1 tag."
    )
  )
);
```

---

# 3. Multiple Children in React.createElement()

HTML:

```html
<div id="parent">
    <div id="child">
        <h1></h1>
        <h2></h2>
    </div>
</div>
```

React:

```javascript
const parent = React.createElement(
  "div",
  { id:"parent" },

  React.createElement(
    "div",
    { id:"child" },

    [
      React.createElement(
        "h1",
        { id:"heading1" },
        "I am h1 tag."
      ),

      React.createElement(
        "h2",
        { id:"heading2" },
        "I am h2 tag."
      )
    ]
  )
);
```

---

# 4. Rendering React Element

To display React elements on the browser we create a root.

```javascript
const root = ReactDOM.createRoot(
    document.getElementById("root")
);


root.render(parent);
```

`root.render()` converts React Element into actual HTML.

---

# 5. JSX Introduction

Writing UI using `React.createElement()` becomes difficult for large applications.

Example:

```javascript
React.createElement(
"h1",
{id:"heading"},
"Hello World"
)
```

So React introduced JSX.

---

# What is JSX?

JSX stands for:

```
JavaScript XML
```

JSX allows us to write HTML-like syntax inside JavaScript.

Example:

```javascript
const jsxheading = (
    <h1 className="head">
        Namaste React using JSX 🚀
    </h1>
);
```

---

# JSX is NOT HTML

JSX looks like HTML but it is not HTML.

It is converted into JavaScript before execution.

The flow:

```
JSX
 |
 ↓
Babel Transpilation
 |
 ↓
React.createElement()
 |
 ↓
React Element (Object)
 |
 ↓
HTMLElement
```

---

# JSX Rules

## 1. Multiple lines JSX should be wrapped inside ()

Correct:

```javascript
const heading = (

<h1>
    Hello React
</h1>

);
```

---

# 2. Use className instead of class

HTML:

```html
<h1 class="heading">
```

JSX:

```javascript
<h1 className="heading">
```

Because `class` is a reserved keyword in JavaScript.

---

# 3. JSX Attributes use camelCase

Example:

HTML:

```html
tabindex="5"
```

JSX:

```javascript
tabIndex="5"
```

---

# 6. React Functional Components

A React component is a reusable piece of UI.

There are two types:

## 1. Class Based Component

Old way.

```javascript
class Welcome extends React.Component {

}
```

Mostly not used today.

---

## 2. Functional Component

Modern way.

A functional component is simply a JavaScript function which returns JSX.

Example:

```javascript
const HeadingComponent = () => {

    return (
        <h1>
            Namaste React Functional Component
        </h1>
    );

};
```

---

# Rendering Functional Component

Syntax:

```javascript
root.render(<HeadingComponent />);
```

Component names should always start with Capital letters.

Correct:

```javascript
<HeadingComponent />
```

Wrong:

```javascript
<headingComponent />
```

---

# 7. Different Ways of Writing Functions

Both are same:

## Normal Function

```javascript
function fn(){

    return true;

}
```

---

## Arrow Function

```javascript
const fn = () => true;
```

---

# 8. Functional Component with Implicit Return

Instead of:

```javascript
const Heading = () => {

return (

<h1>
Hello React
</h1>

);

}
```

We can write:

```javascript
const Heading = () => (

<h1>
Hello React
</h1>

);
```

---

# 9. Component using Normal JavaScript Function

React component can also be created using normal function syntax.

Example:

```javascript
const Para = function(){

return (

<p>
This is React Component
</p>

);

};
```

---

# 10. Component Composition

Putting one component inside another component is called:

```
Component Composition
```

Example:

```javascript
const Title = () => (

<h1>
Namaste React
</h1>

);


const Page = () => (

<div>

<Title />

</div>

);
```

Here:

`Title` component is used inside `Page` component.

---

# 11. JavaScript Expressions inside JSX

We can write JavaScript inside JSX using:

```
{}
```

Example:

```javascript
const number = 100;


const App = () => (

<h1>
{number}
</h1>

);
```

---

Another example:

```javascript
<h1>

{
console.log("Hello React")

}

</h1>
```

The JavaScript expression executes.

---

# 12. React Element inside React Component

Example:

```javascript
const title = (

<h1>
Welcome React
</h1>

);


const Heading = () => (

<div>

{title}

</div>

);
```

Here:

`title` is a React Element.

It is injected inside a component.

---

# 13. React Component inside React Element

Example:

```javascript
const Rc = () => (

<p>
This is React Component
</p>

);


const title = (

<h1>

<Rc />

</h1>

);
```

A component can be used inside JSX.

---

# 14. Ways to Render React Components

All three are same:

## Method 1

```javascript
<Rc />
```

---

## Method 2

```javascript
<Rc></Rc>
```

---

## Method 3

```javascript
{Rc()}
```

Example:

```javascript
const title = (

<h1>

<Rc />

<Rc></Rc>

{Rc()}

</h1>

);
```

---

# Complete React Flow Summary

```
JSX
 |
 |
 ↓
Babel
 |
 |
 ↓
React.createElement()
 |
 |
 ↓
React Element (JS Object)
 |
 |
 ↓
ReactDOM.createRoot()
 |
 |
 ↓
root.render()
 |
 |
 ↓
Browser UI
```

---

# Important Points to Remember

* React Element is an object.
* Component is a reusable function returning JSX.
* JSX is converted into React.createElement().
* Babel converts JSX into JavaScript.
* Components should start with Capital letters.
* JSX uses `{}` for JavaScript expressions.
* Component inside another component = Component Composition.
* React Element can be placed inside Component.
* Component can be placed inside React Element.

---

# End of React Basics Notes 🚀