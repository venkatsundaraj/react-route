/*import { Route, Routes } from "react-router-dom";

import "./App.css";

import MainHeader from "../src/pages/MainHeader";

import Products from "./pages/Products";

import Welcome from "./pages/Welcome";

import ProductDetails from "./pages/ProductDetails";

import Book from "./pages/Book";*/

/*function App() {
  return (
    <div>
      <header>
        <h1>Starting</h1>
        <MainHeader />
      </header>
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
         <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />} /> 

         <Route path="/welcome/newuser" element={<p>Good</p>} /> 

        <Route path="products" element={<Book />}>
          <Route index element={<Products />} />
          <Route path=":productId" element={<ProductDetails />} />
        </Route>
      </Routes>
    </div>
  );

  return <div></div>;
}*/

import { Route, Routes, Navigate } from "react-router-dom";

import AllQuotes from "./pages/AllQuotes";

// import QuoteDetails from "./pages/QuoteDetails";

// import NewQuote from "./pages/NewQuote";

import Comments from "./components/comments/Comments";

import CommonLayout from "./pages/CommonLayout";

import OtherLayout from "./pages/OtherLayout";

import About from "./pages/About";

import Contact from "./pages/Contact";

import Layout from "./components/layout/Layout";

// import NotFound from "./pages/NotFound";

import React, { Suspense } from "react";

import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuote = React.lazy(() => import("./pages/NewQuote"));

const QuoteDetails = React.lazy(() => import("./pages/QuoteDetails"));

const NotFound = React.lazy(() => import("./pages/NotFound"));

const App = function () {
  return (
    /* <Routes>
      <Route path="/" element={<Navigate to="/quotes" />} />
      <Route path="/quotes" element={<AllQuotes />} />

      <Route path="/quotes/:quoteId/">
        <Route index element={<QuoteDetails />} />
        <Route path="/comments" element={<Comments />} />
      </Route>

       <Route path="/comments" element={<Comments />} /> 

      <Route path="/new-quote" element={<NewQuote />} />
    </Routes>*/
    <Suspense
      fallback={
        <div className="centered">
          <LoadingSpinner />
        </div>
      }
    >
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/quotes" />} />
          <Route path="/quotes">
            <Route index element={<AllQuotes />} />

            <Route path=":bookId">
              <Route index element={<QuoteDetails />} />
              <Route path="comments" element={<Comments />} />
            </Route>
          </Route>
          <Route path="new-quote" element={<NewQuote />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Suspense>
  );
};

export default App;
