// old school way of doing it. now all this happens in the back.

var config = {
   entry: './index.js', //our point of entry that renders our react components || this is where it starts at ./index.js
   output: {
      path:'/public',
      filename: 'bundle.js', //here is where our jsx will be transpiled to actual js that can live in our browser || bable makes it on the fly, takes all the JSX written, readable js, and then throw it into bundle.js
   },
   devServer: { // when we are in our dev server, you put it on port
      inline: true, //this allows our changes to take place immediately without refreshing
      port: 8080 //the port where our app will be served from
      // without webpack, port is usually 3000, standard 
   },
   module: {
       loaders: [
         {
           test: /\.js?$/,
           exclude: /(node_modules|bower_components)/,
           loaders: [
             'babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-2' //babel is what transpiles our jsx code into javascript
           ]
         }
       ]
     }
}
module.exports = config;
