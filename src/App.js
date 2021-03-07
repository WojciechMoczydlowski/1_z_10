import AppContextProvider from "domain/stores";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import routes from "./routes";
import HomePage from "pages/index";
import AppLayout from "components/common/AppLayout";

const AppRoutes = () => (
  <AppLayout>
    <Switch>
      <Route exact path={routes.home.pattern} component={HomePage} />
    </Switch>
  </AppLayout>
);

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Switch>
          <Route path={[routes.home.pattern]} component={AppRoutes} />
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
