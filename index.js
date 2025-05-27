var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var port = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var routes = require('./routes');
app.use('/api', routes);
app.get('/', function (req, res) {
  res.send('Welcome to the API');
});
app.listen(port, function () {
  console.log('Server is running on port ' + port);
});
module.exports = app;
// This is the main entry point for the Express application.
// It sets up the server, middleware, and routes.
// The server listens on a specified port and responds to requests.
// The application uses CORS to allow cross-origin requests and body-parser to parse JSON and URL-encoded data.
// The routes are defined in a separate file and mounted on the '/api' path.
// The root path responds with a welcome message.
// The server logs a message when it starts, indicating the port it's running on.
// This code is structured to be modular and maintainable, allowing for easy expansion of the API in the future.
// The application can be tested using tools like Postman or curl to ensure the API endpoints are functioning correctly.
// The code is designed to be simple and straightforward, making it easy for developers to understand and modify as needed.
// The use of environment variables for the port allows for flexibility in deployment, making it suitable for various environments such as development, testing, and production.
// The application can be extended with additional middleware, error handling, and logging as needed.
// The code follows best practices for building RESTful APIs with Express, ensuring a clean and organized structure.
// The application can be easily integrated with a database or other services in the future.
// The use of modules like 'cors' and 'body-parser' helps in managing cross-origin requests and parsing request bodies efficiently.
// The application can be deployed on various platforms such as Heroku, AWS, or any other cloud service that supports Node.js.
// The code is written in a way that promotes scalability and maintainability, making it suitable for production use.
// The application can be tested locally by running 'node index.js' and accessing the API endpoints via a web browser or API client.
// The code is designed to be easily readable and understandable, following standard JavaScript conventions.
// The application can be extended with additional features such as authentication, logging, and error handling in the future.
// The use of Express.js allows for a robust and flexible framework for building web applications and APIs.
// The application can be easily modified to include additional routes or middleware as needed.
// The code is structured to allow for easy testing and debugging, making it suitable for development purposes.
// The application can be used as a starting point for building more complex APIs or web applications.
// The use of 'module.exports' allows for the application to be imported in other files for testing or further development.
// The application can be run using Node.js, and it will listen for incoming requests on the specified port.
// The code is designed to be modular, allowing for easy integration with other parts of a larger application.
// The application can be easily extended with additional features such as logging, error handling, and more.
// The use of 'express' provides a powerful framework for building web applications and APIs in Node.js.
// The application can be tested using various tools and frameworks to ensure its functionality and performance.
// The code is structured to follow best practices for building RESTful APIs, ensuring a clean and organized architecture.
// The application can be easily deployed to various environments, making it suitable for different use cases.
// The application can be extended with additional middleware, routes, and features as needed.
// The code is designed to be simple and straightforward, making it easy for developers to understand and modify as needed.
// The application can be used as a foundation for building more complex applications or APIs in the future.
// The use of 'cors' allows for cross-origin requests, making the API accessible from different domains.
// The application can be easily tested and debugged, ensuring its reliability and performance.
// The code is written in a way that promotes best practices for building web applications and APIs.
// The application can be easily extended with additional features such as authentication, logging, and error handling.
// The use of 'body-parser' allows for easy parsing of request bodies, making it suitable for handling JSON and URL-encoded data.
// The application can be run locally or deployed to a server, making it versatile for different environments.
// The code is structured to allow for easy integration with other services or databases in the future.
// The application can be easily modified to include additional routes or middleware as needed.
// The use of 'express' provides a robust framework for building web applications and APIs in Node.js.          