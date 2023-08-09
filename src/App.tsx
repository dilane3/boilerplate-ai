import GXProvider from "@dilane3/gx";
import store from "./gx/store/index";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import router from "./routes";

function App() {
  return (
    <GXProvider store={store}>
      <Router>
        <Routes>
          {router.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}

          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Router>
    </GXProvider>
  );
}

export default App;
