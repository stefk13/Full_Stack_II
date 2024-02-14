var express = require('express');
var { graphqlHTTP }  = require('express-graphql');
var { buildSchema } = require('graphql');

const students = [
    {
        name: "Pritesh",
        age: 30,
        email: "p@p.com"
    },
    {
        name: "Steve",
        age: 31,
        email: "s@s.com"
    }
]

const courses = [
    {
        name: "GraphQL",
        duration: 30,
        price: 100.50
    },
    {
        name: "NodeJS",
        duration: 40,
        price: 200.50
    },
    {
        name: "ReactJS",
        duration: 40,
        price: 250.50
    }
]
// GraphQL schema
var schema = buildSchema(
    `type Query {
        message: String
        greetings: String
        sayGoodMorning(name: String!): String
        getStudent: Student
        getCourse: Course
        getAllStudent: [Student]
        getCoursesByDuration(duration: Int!): [Course]
        login(email: String!, password: String!): String
    }
    type Mutation {
        createStudent(name: String!, age: Int!, email: String!): Student
    }
    type Student {
        name: String
        age: Int
        email: String
    }
    type Course {
        name: String
        duration: Int
        price: Float
    }
    `);

// Root resolver
var root = {
    message: () => 'Hello World!',
    greetings: function() {
        return "Hello, Pritesh"
    },
    sayGoodMorning: (args)=> {
        //return `Good Morning ${args.name}`
        return JSON.stringify({
            message: `Good Morning ${args.name}`,
            time: new Date().toTimeString()
        })
    },
    getStudent: () => {
        return {
            name: "Pritesh",
            age: 30,
            email: "p@p.com"
        }
    },
    getAllStudent: () => {
        return students
    },
    getCourse: () => {
        return {
            name: "GraphQL",
            duration: 30,
            price: 100.50
        }
    },
    getCoursesByDuration: (args) => {
        return courses.filter(course => course.duration === args.duration)
    },
    createStudent: (args) => {
        const student = {
            name: args.name,
            age: args.age,
            email: args.email
        }
        students.push(student)
        return student
    }
};

// Create an express server and a GraphQL endpoint
var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema, //Set schema
    rootValue: root, //set resolver
    graphiql: true //Client access
}));

// app.use('/graphql', graphqlHTTP({
//     schema: schema, //Set schema
//     rootValue: root, //set resolver
//     graphiql: true //Client access
// }));

//Start Server to listen
app.listen(4000, () => console.log('Express GraphQL Server Now Running On http://localhost:4000/graphql'));