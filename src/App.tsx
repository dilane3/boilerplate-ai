import GXProvider from "@dilane3/gx";
import store from "./gx/store/index";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import router from "./routes";
import LoadLayout from "./components/layouts/LoadLayout";
import ModalProvider from "./components/molecules/modals/ModalProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <GXProvider store={store}>
        <LoadLayout>
          <Router>
            <Routes>
              {router.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}

              <Route path="*" element={<h1>404</h1>} />
            </Routes>
          </Router>

          <ModalProvider />
          <ToastContainer 
            position="bottom-right"
            // autoClose={5000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick={true}
            pauseOnFocusLoss={true}
          />
        </LoadLayout>
      </GXProvider>
    </HelmetProvider>
  );
}

export default App;
