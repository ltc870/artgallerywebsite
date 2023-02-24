import React from "react";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import Root from "./pages/RootPage";
import HomePage from "./pages/HomePage";
import LocationPage from "./pages/LocationPage";
import "./App.css";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route element={<HomePage />} index />
            <Route path="/location" element={<LocationPage />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
