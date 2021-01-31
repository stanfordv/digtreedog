import { ApolloServer, gql } from "apollo-server-micro";
import {
  createDbConnection,
  createRecord,
  deleteRecord,
  readAllRecords,
  updateRecord,
  // readAllArcs
} from "../../database";


const typeDefs = gql`
  type DataPoint {
    id: ID
    value: String
    timestamp: String
  }

  type Arc {
    source: String
    dest: String
    weight: Int
    primary: String
  }

  type Query {
    dataPoints: [DataPoint]
    dataArcs: [Arc]
  }

  type Mutation {
    createDataPoint(id: ID!, value: String!, timestamp: String!): DataPoint
    updateDataPoint(id: ID!, value: String!, timestamp: String!): DataPoint
    deleteDataPoint(id: ID!): DataPoint
    createDataArc(source:String!, dest:String!, weight:Int!, primary:Boolean!): Arc
    updateDataArc(source:String!, dest:String!, weight:Int!, primary:Boolean!): Arc
    deleteDataArc(dest: String!): Arc  }
`;

const resolvers = {
  Query: {
    dataArcs: async () => {
      const { client, db } = await createDbConnection();
      const allArcs = await readAllArcs(db);
      client.close();
      return allArcs;
   }, 
    dataPoints: async () => {
      const { client, db } = await createDbConnection();
      const allRecords = await readAllRecords(db);
      client.close();
      return allRecords;
    }
  },

  Mutation: {
    createDataPoint: async (parent, args) => {
      const { client, db } = await createDbConnection();
      const { id, value, timestamp } = args;
      await createRecord(db, id, value, timestamp);
      client.close();
      return args;
    },
   
    updateDataPoint: async (parent, args) => {
      const { client, db } = await createDbConnection();
      const {id, value, timestamp } = args;
      await updateRecord(id, value, timestamp);
      client.close();

      return args;
    },

    deleteDataPoint: async (parent, args) => {
      const { client, db } = await createDbConnection();

      const { source } = args;
      console.log(" backend - deleteDataPoint => deleteRecord")
      await deleteRecord(db, source);
      client.close();

      return args;
    },


    createDataArc: async(parent, args) => {
      const { client, db } = await createDbConnection();
      const { source, dest, weight, primary } = args;
      await createArc(source, dest, weight, primary);
      client.close();

      return args;
    },
    updateDataArc: async (parent, args) => {
      const { client, db } = await createDbConnection();
      const {source, dest, weight, primary } = args;
      await updateArc(source, dest, weight, primary);
      client.close();

      return args;
    },
    deleteDataArc: async (parent, args) => {
      const { client, db } = await createDbConnection();

      const { dest } = args;
      console.log(" backend - deleteDataArc => deleteArc")
      await deleteArc(db, dest);
      client.close();

      return args;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
const handler = server.createHandler({ path: "/api/graphql-data" });

export const config = {
  api: {
    bodyParser: false,
  },
};

 export default handler;
