#Building another react app to learn more about react and webpack.

## Not much to see yet, but to get started and see where i'm at you can:
1.  `git clone`
2.  `npm install`
3.  run `webpack-dev-server` in your terminal
4.  `localhost:3333` in your web browser

## Note:
1.  You might have some errors setting up, it's possible that you will need to install 'babel', `webpack`, and `webpack-dev-server` globally on your machine. You can run this in your terminal `npm install babel webpack webpack-dev-server -g`, this might get you through the initial set up.

## Some things I'm learning about react so far:
1.  The `App.js` is capitalized because it is a react component and naming the file with a capitalized letter is a react convention. Here is a link to a stackoverflow post about this. `http://stackoverflow.com/questions/30373343/reactjs-component-names-must-begin-with-capital-letters`
2.  The `main.js` is the entry into our application.
3.  The `webpack.config.js` is where all of our javascript will be compiled and our JSX will be compiled into javascript. This is where the development server is launched.
4.  `devServer` in our `webpack.config.js` has `inline: true`, this will allow auto reload.
5.  The `div` with the `id="app"` in our `index.html` will be our target for where content will be rendered to. We also have a `script` tag that will load our `index.js`, which is going to be the bundled file we get from webpack.
6.  In our `main.js` we use the render function, which takes two arguments: first being the component we are going to render (our `<App />` component), and the second is the location where it will be rendered (our target, `document.getElementById('app')`).
