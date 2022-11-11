import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-center text-3xl font-bold py-5 text-cyan-500'>Blogs</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4'>

                <div className='shadow-xl rounded'>
                    <h1 className='text-2xl font-bold text-cyan-500 p-5'>Difference between SQL and NoSQL</h1>
                    <strong className='text-cyan-500 text-xl p-5'>The Main Differences:</strong>
                    <p className='p-5'>
                        <strong className='text-cyan-500'>1. Type –</strong>
                        SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database. <br />
                        <strong className='text-cyan-500'>2.Language –</strong>
                        SQL databases defines and manipulates data based structured query language (SQL). <br />
                        A NoSQL database has dynamic schema for unstructured data.
                        <br />
                        <strong className='text-cyan-500'>3.Scalability –</strong>
                        In almost all situations SQL databases are vertically scalable. This means that you can increase the load on a single server by increasing things like RAM, CPU or SSD. But on the other hand NoSQL databases are horizontally scalable. This means that you handle more traffic by sharding, or adding more servers in your NoSQL database. It is similar to adding more floors to the same building versus adding more buildings to the neighborhood. Thus NoSQL can ultimately become larger and more powerful, making these databases the preferred choice for large or ever-changing data sets. <br />
                        <strong className='text-cyan-500'>4.Structure –</strong>
                        SQL databases are table-based on the other hand NoSQL databases are either key-value pairs, document-based, graph databases or wide-column stores. This makes relational SQL databases a better option for applications that require multi-row transactions such as an accounting system or for legacy systems that were built for a relational structure.
                    </p>
                </div>

                <div className='shadow-xl rounded'>
                    <h1 className='text-2xl font-bold text-cyan-500 p-5'>What is JWT, and how does it work?</h1>
                    <p className='p-5'>
                        <strong className='text-cyan-500'>JWT</strong>
                        , or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.<br />
                        <strong className='text-cyan-500'>JWT</strong>
                        s differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                        <br />
                        <strong className='text-cyan-500'>A JWT</strong>
                        is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.<br />
                        Once decoded, you will get two JSON strings: <br />
                        <strong className='text-cyan-500'>1.</strong> The
                        <strong className='text-cyan-500'>header</strong> and the <strong className='text-cyan-500'>payload.</strong> <br />
                        <strong className='text-cyan-500'>2.</strong> The
                        <strong className='text-cyan-500'>signature.</strong>
                    </p>
                </div>
                <div className='shadow-xl rounded'>
                    <h1 className='text-2xl font-bold text-cyan-500 p-5'>What is the difference between javascript and NodeJS?</h1>
                    <p className='p-5'>
                        <strong className='text-cyan-500'>1. NodeJS : </strong> <br />
                        NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. <br />
                        <strong className='text-cyan-500'>2. JavaScript : </strong> <br />
                        Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.

                    </p>
                </div>
                <div className='shadow-xl rounded'>
                    <h1 className='text-2xl font-bold text-cyan-500 p-5'>How does NodeJS handle multiple requests at the same time?</h1>
                    <p className='p-5'>
                        NodeJS Web Server maintains a limited Thread Pool to provide services to client requests. Multiple clients make multiple requests to the NodeJS server. NodeJS receives these requests and places them into the EventQueue .
                        NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded. In other words, EventLoop is the listener for the EventQueue.

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;