import { Provider } from "react-redux";

import Routes from "./Routes";
import store from "./store";

import "../styles/global.css";

const App = (): JSX.Element => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
