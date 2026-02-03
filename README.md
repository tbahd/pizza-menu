# 🍕 Pizza Menu React App

A simple React application that displays a pizza restaurant menu with dynamic availability, sold‑out states, and opening hours logic. This project focuses on **component composition**, **conditional rendering**, and **props usage** in React.

---

## Live Preview
pisza-menu.netlify.app

---

## 🚀 Features

* Displays a list of pizzas dynamically from data
* Shows a **fallback message** when no pizzas are available
* Highlights **sold‑out pizzas** visually
* Displays restaurant **open/close status** based on current time
* Shows an **Order section** only when the restaurant is open

---

## 🧩 Components Overview

### `Menu`

Responsible for rendering the pizza menu.

**Props:**

* `pizzaObj` (Array): List of pizza objects

**Behavior:**

* Displays menu description when pizzas exist
* Renders a list of `Pizza` components
* Shows a friendly message if the menu is empty

---

### `Item` (Pizza Item)

Represents a single pizza.

**Props:**

* `pizzaObj` (Object)

**Pizza object structure:**

```js
{
  name: string,
  ingredients: string,
  price: number,
  photoName: string,
  soldOut: boolean
}
```

**Behavior:**

* Adds a `sold-out` CSS class if unavailable
* Displays `SOLD OUT` instead of price when applicable

---

### `Footer`

Handles restaurant working hours.

**Logic:**

* Opens at **08:00**
* Closes at **22:00**
* Determines open state using the current system time

**Behavior:**

* Shows `Order` component when open
* Displays opening hours message when closed

---

### `Order`

Displays a call‑to‑action when the restaurant is open.

**Props:**

* `closeHour` (Number)

**Behavior:**

* Displays closing time
* Shows an "Order" button

---

## 🛠️ Technologies Used

* React (Functional Components)
* JavaScript (ES6+)
* Conditional Rendering
* Props & Component Reuse

---

## 📁 Project Structure

```
/src
 ├── Menu.jsx
 ├── Header.jsx
 ├── Footer.jsx
 ├── Order.jsx
 └── Pizza.jsx
```

---

## 🎯 Learning Objectives

This project helps reinforce:

* Breaking UI into reusable components
* Passing and consuming props
* Conditional rendering patterns
* Handling UI states (open/closed, sold out)
* Writing clean and readable JSX

---

## 📌 Notes

* Ensure pizza images exist at the paths specified in `photoName`
* Styling for `.pizza` and `.sold-out` should be handled in CSS

---

## 🙌 Acknowledgment

Built as a learning project to strengthen React fundamentals and UI logic handling.

Happy coding! 🚀
