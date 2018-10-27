import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount, withOptions } from 'react-mounter';
import App from '../imports/ui/App.jsx';
import Home from '../imports/ui/Home/Home.jsx';
import CreateBlend from '../imports/ui/CreateBlend/CreateBlend.jsx';
import JoinBlend from '../imports/ui/JoinBlend/JoinBlend.jsx';
import NotFound from '../imports/ui/NotFound/NotFound.jsx';
import registerServiceWorker from './registerServiceWorker';

//Display main.html as the served html
import './main.html';

//Use custom mount function to mount to 'app' instead of 'react-root'
mount = withOptions({
  rootId: 'app'
}, mount);


//Router will mount React app and change it's contents accordingly
FlowRouter.route('/', {
  name: 'home',
  action() {
    mount(App, {
      main: <Home />,
    });
  },
});

FlowRouter.route('/create', {
  name: 'create',
  action() {
    mount(App, {
      main: <CreateBlend />,
    });
  },
});

FlowRouter.route('/join', {
  name: 'join',
  action() {
    mount(App, {
      main: <JoinBlend />,
    });
  },
});

FlowRouter.notFound = {
  action() {
    mount(App, {
      main: <NotFound />
    });
  }
};

registerServiceWorker();
