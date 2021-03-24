import AppContextProvider from "domain/stores";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import routes from "./routes";
import HomePage from "pages/index";
import Final from "pages/final";
import AppLayout from "components/common/AppLayout";
import "antd/dist/antd.css";

const AppRoutes = () => (
  <AppLayout>
    <Switch>
      <Route exact path={routes.home.pattern} component={HomePage} />
      <Route exact path={routes.home.final} component={Final} />
    </Switch>
  </AppLayout>
);

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Switch>
          <Route
            path={[routes.home.pattern, routes.elimination.pattern]}
            component={AppRoutes}
          />
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
