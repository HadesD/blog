import {h} from 'hyperapp';
import {
  Route,
  Switch
} from '@hyperapp/router';

import Login from './Login.jsx';
import Index from './Index.jsx';

import ArticleRoute from './article';

export default (state, actions) => {
  return (
    <Switch>
      <Route
        parent
        path={state.constants.root}
        render={() => {
          if (!state.isLoggedIn)
          {
            return (
              <Route
                parent
                path={state.constants.root}
                render={Login(state)}
              />
            );
          }
          return (
            <Switch>
              <Route path={state.constants.root} render={Index(state)} />
              <Route
                parent
                path={`${state.constants.root}/articles`}
                render={ArticleRoute(state)}
              />
            </Switch>
          );
        }}
      />
    </Switch>
  );
};

