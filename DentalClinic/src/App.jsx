import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "./components/layout/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Treatments from "./pages/Treatments";
import FaqS from "./pages/FaqS";
import Contact from "./pages/Contact";
import Lenis from "lenis";
import PrivacyPolicyPage from "./pages/Privacy";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
      autoRaf: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  const route = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/treatments", element: <Treatments /> },
        { path: "/FAQs", element: <FaqS /> },
        { path: "/contact", element: <Contact /> },
        { path: "/privacy", element: <PrivacyPolicyPage /> },
      ],
    },
  ]);

  return <RouterProvider router={route} />;
};

export default App;
