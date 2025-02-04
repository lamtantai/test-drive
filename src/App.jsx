import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Home from "./pages/Home";
import AppLayout from "./components/AppLayout";
import Cars from "./pages/Cars";
import CarDetail from "./pages/CarDetail";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Account from "./pages/Account";
import Bookings from "./pages/Bookings";

import { ToastContainer, Zoom } from "react-toastify";
import ScrollToTop from "./components/ScrollToTop";
import ProtectedRoute from "./components/ProtectedRoute";
import FooterLayout from "./components/FooterLayout";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />

      <ToastContainer
        position="top-center"
        autoClose={1000}
        limit={3}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="colored"
        transition={Zoom}
      />

      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<AppLayout />}>
            <Route element={<FooterLayout />}>
              <Route index element={<Home />} />
              <Route path="cars" element={<Cars />} />
              <Route path="cars/:carId" element={<CarDetail />} />
              <Route path="about" element={<About />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>

            <Route
              path="account"
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="profile" />} />
              <Route path="profile" element={<Profile />} />
              <Route path="bookings" element={<Bookings />} />
            </Route>
          </Route>

          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
