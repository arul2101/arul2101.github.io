import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./layouts/RootLayout";

// Pages
import Home from "./pages/home/home";
import Portfolio from "./pages/portfolio/Portfolio";
import NotFound from "./components/notfound/NotFound";
import About from "./pages/about/About";
import Blogs from "./pages/blog/Blogs";
import Contact from "./pages/contact/Contact";
import BlogDetail from "./pages/blog-detail/BlogDetail";
import Certificate from './pages/certificate/Certificate';

export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/portfolio",
          element: <Portfolio />
        },
        {
          path: "/certificate",
          element: <Certificate />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/blog",
          element: <Blogs />
        },
        {
          path: "/blog/:id",
          element: <BlogDetail />
        },
        {
          path: "/contact",
          element: <Contact />
        }
      ],
    },
    {
      path: "*",
      element: <NotFound />
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}
