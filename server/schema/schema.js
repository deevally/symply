const { gql, makeExecutableSchema } = require("apollo-server-express");
const axios = require("axios");
const db = require("../DBCONFIG/models/index");
const Beer = db.Beer;

const typeDefs = gql`
  type Beer {
    id: Int!
    name: String!
    description: String!
    tagline: String!
    first_brewed: String!
    image_url: String!
  }

  type Query {
    beer: [Beer]
    beers: [Beer]
    getBeer(id: Int!): Beer
  }

  type Mutation {
    addBeer(
      name: String
      description: String
      tagline: String
      first_brewed: String
      image_url: String
    ): Beer
    updateBeer(
      id: Int!
      name: String
      description: String
      tagline: String
      first_brewed: String
      image_url: String
    ): Beer!

    deleteBeer(id: Int!): Boolean!
  }
`;
const resolvers = {
  Query: {
    beers: async () => {
      try {
        const beers = await axios.get(
          "https://api.punkapi.com/v2/beers?page=1&per_page=8"
        );
        return beers.data.map(
          ({ id, tagline, first_brewed, image_url, description, name }) => ({
            id,
            tagline,
            first_brewed,
            image_url,
            description,
            name,
          })
        );
        //console.log(allUsers);
      } catch (error) {
        throw error;
      }
    },

    beer: async () => {
      try {
        const allBeers = await Beer.findAll({});
        return allBeers;
      } catch (error) {
        throw error;
      }
    },
    getBeer: async (parent, args) => {
      const beer = await Beer.findByPk(args.id);
      return beer;
    },
  },

  Mutation: {
    addBeer: async (
      parent,
      { name, tagline, first_brewed, image_url, description }
    ) => {
      try {
        const beer = await Beer.create({
          name,
          tagline,
          first_brewed,
          image_url,
          description,
        });
        return beer;
      } catch (error) {
        throw error;
      }
    },
    deleteBeer: async (parent, args) => {
      try {
        const findbeer = await Beer.findByPk(args.id);
        const beer = await findbeer.destroy({ where: { id: args.id } });
        if (beer) return true;
      } catch (error) {
        throw error;
      }
    },
    updateBeer: async (
      parent,
      args,
    ) => {
      try {
        const findbeer = await Beer.findByPk(args.id);
        const beer = await findbeer.update({
          name:args.name,
          tagline:args.tagline,
          first_brewed:args.first_brewed,
          image_url:args.image_url,
          description:args.description,
        });
        if (beer) return beer;
      } catch (error) {
        throw error;
      }
    },
  },
};

module.exports = makeExecutableSchema({
  typeDefs: [typeDefs],
  resolvers: resolvers,
});
