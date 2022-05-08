import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='container'>
            <div className='quesBody'>
                <h3>Que: Difference between javascript and nodejs.</h3>
                <p><strong>Ans:</strong> Javascript is a programming language that is used for writing scripts on the website but NodeJS is a Javascript runtime environment. Javascript can only be run in the browsers but, with the help of NodeJS We can run Javascript outside the browser. Javascript basically used on the client-side where NodeJS mostly used on the server-side. Javascript is capable enough to add HTML and play with the DOM but Nodejs does not have capability to add HTML tags. 	Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox but V8 is the Javascript engine inside of node.js that parses and runs Javascript. Javascript is used in frontend development, Nodejs is used in server-side development. Some of the javascript frameworks are RamdaJS, TypedJS, etc. Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm. It is the upgraded version of ECMA script that uses Chrome's V8 engine written in C++ but Nodejs is written in C, C++ and Javascript.</p>
            </div>
            <div className='quesBody'>
                <h3>Que: Differences between sql and nosql databases.</h3>
                <p><strong>Ans:</strong> SQL is Relational Database Management System (RDBMS) but NoSQL is Non-relational or distributed database system. SQL have fixed or static or predefined schema but NoSQL have dynamic schema. SQL databases are not suited for hierarchical data storage where NoSQL databases are best suited for hierarchical data storage. SQL databases are best suited for complex queries but NoSQL databases are not so good for complex queries. SQL Vertically Scalable, NoSQL Horizontally scalable. SQL follows ACID property but NoSQL follows CAP(consistency, availability, partition tolerance)</p>
            </div>
            <div className='quesBody'>
                <h3>Que: When should you use nodejs and when should you use mongodb?</h3>
                <p><strong>Ans:</strong> Nodejs is a Javascript engine that we can write any application we want with (by programming in the Javascript language). It runs Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too.</p>
                <p>MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data. MongoDB offers an API library that runs within a Nodejs application to give us programmatic access to MongoDB so we can create databases and then add, query, update or delete data from the MongoDB database.</p>
            </div>
        </div>
    );
};

export default Blog;