import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { routesConfig } from '../../config/routes';
import { Frota } from '../../Pages/Frota';
import Home from '../../Pages/Home';
import { Infra } from '../../Pages/Infra';

export const RoutesPage: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path={routesConfig.HOME} component={Home} />
        <Route path={routesConfig.INFRA} component={Infra} />
        <Route path={routesConfig.FROTA} component={Frota} />
        <Redirect from="*" to={routesConfig.HOME} />
      </Switch>
    </HashRouter>
  );
};
