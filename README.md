# Learning Webpack + React

I am following a tutorial from http://survivejs.com/webpack_react/developing_with_webpack/

[Understanding React Components](http://survivejs.com/webpack_react/implementing_notes/#understanding-react-components)

[React Component Conventions](http://survivejs.com/webpack_react/implementing_notes/#react-component-conventions)

[React and Flux](http://survivejs.com/webpack_react/react_and_flux/)

[Implementing a Wrapper for `localStorage`](http://survivejs.com/webpack_react/react_and_flux/#implementing-a-wrapper-for-localstorage-)

  We're operating with localStorage directly to keep the implementation simple. An alternative would be to use [localForage](https://github.com/mozilla/localForage) to hide all the complexity. You could even integrate it behind our interface.


Learn about [AltContainer](http://alt.js.org/docs/components/altContainer/)

  AltContainer is not an idea exclusive to alt. For more information on why you should be using container components check out React.js Conf 2015 talk [Making your app fast with high-performance components](https://youtu.be/KYzlpRvWZ6c?t=22m48s).

  The basic idea is that you have a container that wraps your component, the duty of this container component is to handle all the data fetching and communication with the stores, it then renders the corresponding children. The sub-components just render markup and are data agnostic thus making them highly reusable.
