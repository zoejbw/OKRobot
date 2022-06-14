var text = "No messages";
var num = 0;
const path = require("path");

// sentiment library from https://github.com/thisandagain/sentiment
const Sentiment = require('sentiment');


// Require the fastify framework and instantiate it
const fastify = require("fastify")({
  logger: true
});

// Setup our static files
fastify.register(require("fastify-static"), {
  root: path.join(__dirname, "public"),
  prefix: "/" // optional: default '/'
});

// fastify-formbody lets us parse incoming forms
fastify.register(require("fastify-formbody"));

// point-of-view is a templating manager for fastify
fastify.register(require("point-of-view"), {
  engine: {
    handlebars: require("handlebars")
    
  }
});

// load and parse SEO data
const seo = require("./src/seo.json");
if (seo.url === "glitch-default") {
  seo.url = `https://${process.env.PROJECT_DOMAIN}.glitch.me`;
}

// Our home page route, this pulls from src/pages/index.hbs
fastify.get("/", function(request, reply) {
  // params is an object we'll pass to our handlebars template
  let params = { seo: seo };
  // check and see if someone asked for a random color
  // if (request.query.randomize) {
  //   // we need to load our color data file, pick one at random, and add it to the params
  //   const colors = require("./src/colors.json");
  //   const allColors = Object.keys(colors);
  //   let currentColor = allColors[(allColors.length * Math.random()) << 0];
  //   params = {
  //     color: colors[currentColor],
  //     colorError: null,
  //     seo: seo
  //   };
  // }
  reply.view("/src/pages/index.hbs", params);
});

fastify.get("/output", function(request, reply) {
  // params is an object we'll pass to our handlebars template
  let params = { seo: seo };
  reply.view("/src/pages/output.hbs", params);
});

// A POST route to handle and react to form submissions 
fastify.post("/", function(request, reply) {
  let params = { seo: seo };
  // the request.body.color is posted with a form submission
  let message = request.body.color;
  text = message;
  // let color = request.body.color;
  // // if it's not empty, let's try to find the color
  // if (color) {
  //   // load our color data file
  //   const colors = require("./src/colors.json");
  //   // take our form submission, remove whitespace, and convert to lowercase
  //   color = color.toLowerCase().replace(/\s/g, "");
  //   // now we see if that color is a key in our colors object
  //   if (colors[color]) {
  //     // found one!
  //     params = {
  //       color: colors[color],
  //       colorError: null,
  //       seo: seo
  //     };
  //   } else {
  //     // try again.
  //     params = {
  //       colorError: request.body.color,
  //       seo: seo
  //     };
  //   }
  // }
  
  if (message) {
    // load our sentiment data file
      const sentiment = new Sentiment();
    //analyze message
     const score = sentiment.analyze(message);
     num = score;
     params = {color: message, sentiment: score};
  }
  reply.view("/src/pages/index.hbs", params);

});


// A POST route to handle and react to form submissions 
fastify.post("/output", function(request, reply) {
  let params = { seo: seo };
  let myNum = Object.values(num)[0];
  let mybg = "white";
  if (myNum >= 1){ 
    mybg = "green" 
  }else if (myNum <= -1){
    mybg = "red"
  };
  params = {color: text, sentiment: mybg};
  reply.view("/src/pages/output.hbs", params);

});

// Run the server and report out to the logs
fastify.listen(process.env.PORT, function(err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`server listening on ${address}`);
});


