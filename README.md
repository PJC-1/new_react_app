#Building another react app to learn more about react and webpack.

## Not much to see yet, but to get started and see where i'm at you can:
1.  `git clone`
2.  `npm install`
3.  run `webpack-dev-server` in your terminal
4.  `localhost:3333` in your web browser

## Note:
1.  You might have some errors setting up, it's possible that you will need to install 'babel', `webpack`, and `webpack-dev-server` globally on your machine. You can run this in your terminal `npm install babel webpack webpack-dev-server -g`, this might get you through the initial set up.

## Some things I'm learning about react so far, some things might not be right, let me know if you see something:
1.  The `App.js` is capitalized because it is a react component and naming the file with a capitalized letter is a react convention. Here is a link to a stackoverflow post about this. `http://stackoverflow.com/questions/30373343/reactjs-component-names-must-begin-with-capital-letters`
2.  The `main.js` is the entry into our application.
3.  The `webpack.config.js` is where all of our javascript will be compiled and our JSX will be compiled into javascript. This is where the development server is launched.
4.  `devServer` in our `webpack.config.js` has `inline: true`, this will allow auto reload.
5.  The `div` with the `id="app"` in our `index.html` will be our target for where content will be rendered to. We also have a `script` tag that will load our `index.js`, which is going to be the bundled file we get from webpack.
6.  In our `main.js` we use the render function, which takes two arguments: first being the component we are going to render (our `<App />` component), and the second is the location where it will be rendered (our target, `document.getElementById('app')`).
7.  `state` is for properties on a component that will change and `props` are static properties that are passed in.
8.  `super()` provides the context for `this` within our component.
9.  `this.state` is where you can put values for the state within an object and you can access these values of state by interpolating them similar to `this.props`.
10. The `render()` can only return a single node, so when you have more than one node in the render function you have to wrap the whole thing in a `<div>` and if you want to utilize the whitespace you have to wrap the whole thing in parentheses.
11. `bind(this)` explicitly connects `this` scope of the event handler function to the `this` in the component.
12. The `owner-ownee` relationship is used to designate a `parent-child` relationship with React components as it differs from the DOM relationship.
13. The goal is usually to have a `parent` component keeping track of `state` while `children` components do not require state at all, but only `props`. This is often referred to as Smart Containers and Dumb Components.
14. The benefit of using `stateless components` is that, used properly, they are pure functions. No internal state or lifecycle methods, they return the same result every time and therefore offer no side effects. Also, stateless components usually equate to more reusable components with no concern about the logic of the application they are plugged into.
15. `refs` are a way to reference an instance of a component from within our React application.
16. Note that `refs` won't work with stateless function components, thats why in our app we created a new component.
17. Since we are grabbing values from the `DOM` we need to make sure that we `import ReactDOM from 'react-dom'` and to get at those values we use `ReactDOM.findDOMNode` and pass in our `refs`.
18. When we want to access the `innerHTML` or nested components of another component, we can use `this.props.children`.
19. In terms of the mounting lifecycle phases of a React component, when a component is added or removed from the `DOM`, this is called mounting and unmounting the component.
