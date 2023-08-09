import { RouterProvider } from "react-router-dom";
import router from "./routes";
import store from './gx/store/index';
import GXProvider from "@dilane3/gx";

function App() {
  return (
    <GXProvider store={store}>
      <RouterProvider router={router} />
    </GXProvider>
  );
}

export default App;
