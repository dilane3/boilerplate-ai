import GXProvider from "@dilane3/gx";
import store from "./gx/store/index";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import router from "./routes";
import LoadLayout from "./components/layouts/LoadLayout";
import ModalProvider from "./components/molecules/modals/ModalProvider";

function App() {
  return (
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
      </LoadLayout>
    </GXProvider>
  );
}

export default App;
