const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");
const schema = require("./schema/schema");
const db = require("./DBCONFIG/models/index");

dotenv.config();


db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
//  });

const server = new ApolloServer({
  schema: schema,
});

const app = express();
app.use(bodyParser.json());
app.use("*", cors());


process.on("SIGINT", () => {
  db.sequelize.close(); // This close the connection to the database
  console.log("Shutting down server...");
  console.log("Server successfully shutdown");
  process.exit(0);
});


server.applyMiddleware({ app });
app.listen({ port: 5000 }, () =>
  console.log(`🚀 Server ready at http://localhost:5000${server.graphqlPath}`)
);

