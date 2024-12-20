import { BrowserRouter, Routes, Route } from "react-router";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AuthProvider from "src/context/AuthProvider";
import Authenticated from "src/components/Authenticated";
import Login from "src/pages/Login";
import Home from "src/pages/Home";

const App = () => {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <Authenticated>
                  <Home />
                </Authenticated>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
      <ToastContainer position="bottom-center" theme="colored" />
    </>
  );
};

export default App;
