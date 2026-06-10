# Day 01 Notes - React Fundamentals 🚀

## What is React?

React is a JavaScript library used for building fast and interactive User Interfaces (UI).

### Features

* Component-based architecture
* Virtual DOM
* Reusable code
* Efficient UI updates

---

# What is a CDN?

CDN stands for **Content Delivery Network**.

A CDN is a network of servers distributed across different locations that delivers files (JavaScript, CSS, Images, Videos, etc.) from the server nearest to the user.

### Why use a CDN?

* Faster loading
* Reduced server load
* Better performance
* Global accessibility

### React CDN

```html
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

These scripts load React and ReactDOM directly from the UNPKG CDN.

---

# What is crossorigin?

`crossorigin` is an HTML attribute that tells the browser:

> "This resource is coming from another domain, so handle it using CORS rules."

### Example

```html
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
```

### Why do we use it?

* Enables CORS (Cross-Origin Resource Sharing)
* Provides detailed error messages
* Improves debugging
* Helps source maps work properly

### Without crossorigin

Browser may show:

```text
Script error.
```

### With crossorigin

Browser may show:

```text
Error: Something went wrong
at App.js:10
```

which is much more useful for debugging.

### Common Values

#### Anonymous

```html
<script crossorigin src="..."></script>
```

or

```html
<script crossorigin="anonymous" src="..."></script>
```

* No cookies sent
* No authentication data sent
* Most common option

#### use-credentials

```html
<script crossorigin="use-credentials" src="..."></script>
```

* Sends cookies
* Sends authentication data
* Rarely used with CDNs

### One-Line Revision

`crossorigin` allows browsers to safely load resources from another domain and provides better debugging through CORS.

---

# React.createElement()

React Elements are created using:

```javascript
React.createElement(type, props, children)
```

### Parameters

#### type

HTML tag or React Component

```javascript
"h1"
"div"
"span"
```

#### props

Attributes of the element

```javascript
{id: "heading"}
```

#### children

Content inside the element

```javascript
"Hello World"
```

### Example

```javascript
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello React"
);
```

Generated HTML:

```html
<h1 id="heading">Hello React</h1>
```

---

# Nested React Elements

Example:

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

Generated HTML:

```html
<div id="parent">
  <div id="child">
    <h1 id="heading">
      I am an h1 tag.
    </h1>
  </div>
</div>
```

---

# Multiple Children

When an element has multiple children, pass them in an array.

Example:

```javascript
React.createElement(
  "div",
  {},
  [
    React.createElement("h1", {}, "Heading 1"),
    React.createElement("h2", {}, "Heading 2")
  ]
);
```

Generated HTML:

```html
<div>
  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
</div>
```

---

# React Element

A React Element is a JavaScript object that describes what should appear on the screen.

Example:

```javascript
const heading = React.createElement(
  "h1",
  {},
  "Hello"
);
```

If you log it:

```javascript
console.log(heading);
```

You will see a JavaScript object, not HTML.

---

# Virtual DOM

Virtual DOM is a lightweight JavaScript representation of the Real DOM.

### Process

```text
React Element
      ↓
Virtual DOM
      ↓
React compares changes
      ↓
Updates only required parts
      ↓
Real DOM
```

### Benefits

* Faster updates
* Better performance
* Efficient rendering

---

# ReactDOM.createRoot()

Creates a React Root.

Example:

```javascript
const root = ReactDOM.createRoot(
  document.getElementById("root")
);
```

React takes control of:

```html
<div id="root"></div>
```

---

# root.render()

Renders React Elements into the browser.

Example:

```javascript
root.render(heading);
```

Before:

```html
<div id="root"></div>
```

After:

```html
<div id="root">
  <h1>Hello React</h1>
</div>
```

---

# JSX

JSX stands for JavaScript XML.

It allows us to write HTML-like syntax inside JavaScript.

### JSX

```jsx
<h1 id="heading">
  Hello React
</h1>
```

### Equivalent React Code

```javascript
React.createElement(
  "h1",
  { id: "heading" },
  "Hello React"
);
```

### Important

JSX is not understood by browsers directly.

Babel converts JSX into:

```javascript
React.createElement(...)
```

---

# React Rendering Flow

```text
JSX
 ↓
Babel
 ↓
React.createElement()
 ↓
React Element (JavaScript Object)
 ↓
Virtual DOM
 ↓
ReactDOM.render()/root.render()
 ↓
Real DOM
 ↓
Visible UI
```

---

# Quick Revision 📝

* React is a JavaScript library for building UIs.
* CDN delivers files from nearby servers.
* React and ReactDOM can be loaded from a CDN.
* `crossorigin` enables CORS and better debugging.
* `React.createElement(type, props, children)` creates React Elements.
* React Elements are JavaScript objects.
* Multiple children are passed as arrays.
* Virtual DOM improves performance.
* `ReactDOM.createRoot()` creates a React root.
* `root.render()` renders React Elements to the DOM.
* JSX is syntactic sugar for `React.createElement()`.
* Babel converts JSX into React code.