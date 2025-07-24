# DiveBridge_Week1_Task5

# 🎬 MovieMart

MovieMart is a responsive movie listing web application built with **React.js**, powered by the **TMDB API**. It allows users to explore popular movies, filter by genre, sort results, switch between dark/light themes, and manage a cart of selected titles.

> 🚀 Live Demo: [MovieMart on Vercel](https://dive-bridge-week1-task5-tkxs.vercel.app/)

---

## 📌 Features

- ✅ Fetches real-time movie data using TMDB API
- 🔍 Global search functionality
- 🗂 Genre filtering & sorting (popularity, rating, release date)
- 🎨 Light/Dark mode toggle
- 🛒 Cart system with dynamic counter
- 🧩 Responsive design with Bootstrap
- 📱 Mobile-friendly navigation with collapsible menu
- 🔁 Reusable components (e.g., `Navbar`, `MovieCard`, `SearchBar`)
- ⚙️ Auto-hiding navbar on scroll and auto-closing on click

---

## 💻 Tech Stack

| Technology   | Usage                         |
| ------------ | ----------------------------- |
| React.js     | Frontend framework            |
| React Router | Client-side routing           |
| TMDB API     | Movie data source             |
| Bootstrap    | Styling and responsive layout |
| Vercel       | Deployment                    |

---

## 🧠 React Concepts Used

- `useState` and `useEffect` for state and side effects
- `useNavigate` and `Link` from `react-router-dom` for navigation
- Props drilling for passing data/functions between components
- Controlled components (input/search fields)
- Conditional rendering (theme toggle, loading states)
- Component reusability for modular code

---

## 📂 Folder Structure

```
moviemart/
├── src/
│ ├── components/
│ │ ├── MovieCard.jsx
│ │ └── SearchBar.jsx
│ ├── pages/
│ │ ├── Home.jsx
│ │ ├── Cart.jsx
│ │ └── Search.jsx
│ ├── models/
│ │ └── tmdbAPI.js
│ ├── App.js
│ ├── index.js
│ └── ...
```

---

## 🧪 Getting Started Locally

```
git clone https://github.com/Rayyan-Portfolio/DiveBridge_Week1_Task5.git
cd DiveBridge_Week1_Task5/moviemart
npm install
npm start
```

## 🧾 Future Improvements

Add Checkout Page

Add Wishlist / Favourites

Add Movie Details Page

Authentication & User Profiles

## 📦 Deployment

This project is deployed using Vercel.

## 🙌 Acknowledgments

TMDB for the movie API.

Bootstrap for the UI framework.

React Router for navigation.

## 🧑‍💻 Author

Ahmad Rayyan
React Developer – DiveBridge Internship
