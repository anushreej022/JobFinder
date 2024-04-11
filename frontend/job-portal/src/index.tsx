import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Listing from "./Pages/Listings/Listing";
import Contact from "./Pages/Contact/Contact";
import Gallery from "./Pages/Gallery/Gallery";
import About from "./Pages/About Us/About";
import Home from "./Pages/Home/Home";
import Employees from "./Pages/Employees/Employees";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import typeReducer from "./features/type";
import userReducer from "./features/users";
import Forbidden from "./Pages/Forbidden/Forbidden";

const store = configureStore({
  reducer: {
    type: typeReducer,
    users: userReducer,
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/forbidden" element={<Forbidden />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
