import GXProvider from "@dilane3/gx";
import store from "./gx/store/index";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import router from "./routes";
import LoadLayout from "./components/layouts/LoadLayout";
import ModalProvider from "./components/molecules/modals/ModalProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HelmetProvider, Helmet } from "react-helmet-async";
import favicon from "./assets/images/favicon.ico";

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Boilerplate</title>
        <link rel="icon" href={favicon} />

        <meta
          name="description"
          content="Online tool that helps you to write yours letters in an easy way"
        />
        <meta name="keywords" content="letter, writing, generator" />
        <meta name="author" content="Dilane Kombou" />
      </Helmet>

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
