import Landing from "./views/Landing";

import Layout from "./views/Layout";

import Author from "./views/Author";
import Book from "./views/Book";
import Reviews from "./views/Reviews";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
function App() {
  return (
    <>
      <HashRouter>
        {/* basename="/author_book_website" */}
        <Layout>
          <Routes>
            {/* <Route path="/" element={<Layout />}> */}
            <Route index element={<Landing />} />
            <Route path="author" element={<Author />} />
            <Route path="book" element={<Book />} />
            <Route path="reviews" element={<Reviews />} />

            {/* </Route> */}
          </Routes>
        </Layout>
      </HashRouter>

      {/* <NavBar />
      <div className=" font-Montserrat">
        <Outlet />
      </div> */}
      {/* <Landing />
      <FooterPart /> */}
      {/* <Author />
      <ContactUs />
      <Reviews />
      <FooterPart /> */}

      {/* <Biography />
      <About />
     
      */}
    </>
  );
}

export default App;
