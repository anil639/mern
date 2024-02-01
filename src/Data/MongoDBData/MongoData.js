const MongoData = [
  {
    Question: "What are some of the advantages of MongoDB?",
    Answer:
      "Some advantages of MongoDB are as follows:\nMongoDB supports field, range-based, string pattern matching type queries. for searching the data in the database.\nMongoDB support primary and secondary index on any fields.\nMongoDB basically uses JavaScript objects in place of procedures.\nMongoDB uses a dynamic database schema.\nMongoDB is very easy to scale up or down.\nMongoDB has inbuilt support for data partitioning (Sharding).",
  },
  {
    Question: "What is a Document in MongoDB?",
    Answer:
      "A Document in MongoDB is an ordered set of keys with associated values. It is represented by a map, hash, or dictionary. In JavaScript, documents are represented as objects:\n{'greeting' : 'Hello world!'}\nComplex documents will contain multiple key/value pairs:\n{'greeting' : 'Hello world!', 'views' : 3}",
  },
  {
    Question: "What is a Collection in MongoDB?",
    Answer:
      "A collection in MongoDB is a group of documents. If a document is the MongoDB analog of a row in a relational database, then a collection can be thought of as the analog to a table.\nDocuments within a single collection can have any number of different “shapes.”, i.e. collections have dynamic schemas.\nFor example, both of the following documents could be stored in a single collection:\n{'greeting' : 'Hello world!'', 'views': 3}\n {'signoff': 'Good bye'}",
  },
  {
    Question: "What are Databases in MongoDB?",
    Answer:
      "MongoDB groups collections into databases. MongoDB can host several databases, each grouping together collections.\nSome reserved database names are as follows:\nadmin \nlocal \nconfig",
  },
  {
    Question: "What is the Mongo Shell?",
    Answer:
      "It is a JavaScript shell that allows interaction with a MongoDB instance from the command line. With that one can perform administrative functions, inspecting an instance, or exploring MongoDB.\nTo start the shell, run the mongo executable:\n$ mongod \n$ mongo \nMongoDB shell version: 4.2.0 \nconnecting to: test\n>\nThe shell is a full-featured JavaScript interpreter, capable of running arbitrary JavaScript programs.",
  },
  {
    Question: "How does Scale-Out occur in MongoDB?",
    Answer:
      "The document-oriented data model of MongoDB makes it easier to split data across multiple servers. Balancing and loading data across a cluster is done by MongoDB. It then redistributes documents automatically.\nThe mongos acts as a query router, providing an interface between client applications and the sharded cluster.\nConfig servers store metadata and configuration settings for the cluster. MongoDB uses the config servers to manage distributed locks. Each sharded cluster must have its own config servers.",
  },
  {
    Question: "What are some features of MongoDB?",
    Answer:
      "Indexing: It supports generic secondary indexes and provides unique, compound, geospatial, and full-text indexing capabilities as well.\nAggregation: It provides an aggregation framework based on the concept of data processing pipelines.\nSpecial collection and index types: It supports time-to-live (TTL) collections for data that should expire at a certain time.\nFile storage: It supports an easy-to-use protocol for storing large files and file metadata.\nSharding: Sharding is the process of splitting data up across machines.",
  },
  {
    Question: "How to add data in MongoDB?",
    Answer:
      "The basic method for adding data to MongoDB is “inserts”. To insert a single document, use the collection’s insertOne method:\n> db.books.insertOne({'title' : 'Start With Why'})\nFor inserting multiple documents into a collection, we use insertMany. This method enables passing an array of documents to the database.",
  },
  {
    Question: "How do you Update a Document?",
    Answer:
      "Once a document is stored in the database, it can be changed using one of several update methods: updateOne, updateMany, and replaceOne. updateOne and updateMany each takes a filter document as their first parameter and a modifier document, which describes changes to make, as the second parameter. replaceOne also takes a filter as the first parameter, but as the second parameter replaceOne expects a document with which it will replace the document matching the filter.",
  },
  {
    Question: "How do you Delete a Document?",
    Answer:
      "The CRUD API in MongoDB provides deleteOne and deleteMany for this purpose. Both of these methods take a filter document as their first parameter. The filter specifies a set of criteria to match against in removing documents.\n> db.books.deleteOne({'_id' : 3})",
  },
  {
    Question: "How to perform queries in MongoDB?",
    Answer:
      "The find method is used to perform queries in MongoDB. Querying returns a subset of documents in a collection, from no documents at all to the entire collection. Which documents get returned is determined by the first argument to find, which is a document specifying the query criteria.\n> db.users.find({'age' : 24})",
  },
  {
    Question: "What are the data types in MongoDB?",
    Answer:
      "MongoDB supports a wide range of data types as values in documents. Documents in MongoDB are similar to objects in JavaScript. Along with JSON’s essential key/value–pair nature, MongoDB adds support for a number of additional data types. The common data types in MongoDB are:\nNull\nBoolean\nNumber\nString\nDate\nRegular Expression\nArray\nEmbedded document\nObjectId\nBinary Data Binary data is a string of arbitrary bytes.\nCodes",
  },
  {
    Question: "When to use MongoDB?",
    Answer:
      "You should use MongoDB when you are building internet and business applications that need to evolve quickly and scale elegantly. MongoDB is popular with developers of all kinds who are building scalable applications using agile methodologies.\nMongoDB is a great choice if one needs to:\nSupport a rapid iterative development.\nScale to high levels of read and write traffic - MongoDB supports horizontal scaling through Sharding, distributing data across several machines, and facilitating high throughput operations with large sets of data.\nScale your data repository to a massive size.\nEvolve the type of deployment as the business changes.\nStore, manage and search data with text, geospatial, or time-series dimensions.",
  },
  {
    Question: "How is Querying done in MongoDB?",
    Answer:
      "The find method is used to perform queries in MongoDB. Querying returns a subset of documents in a collection, from no documents at all to the entire collection. Which documents get returned is determined by the first argument to find, which is a document specifying the query criteria.\nFor example: If we have a string we want to match, such as a 'username' key with the value 'alice', we use that key/value pair instead:\n> db.users.find({'username' : 'alice'})",
  },
  {
    Question: "Explain the term “Indexing” in MongoDB.",
    Answer:
      "In MongoDB, indexes help in efficiently resolving queries. What an Index does is that it stores a small part of the data set in a form that is easy to traverse. The index stores the value of the specific field or set of fields, ordered by the value of the field as specified in the index.\nMongoDB’s indexes work almost identically to typical relational database indexes.\nIndexes look at an ordered list with references to the content. These in turn allow MongoDB to query orders of magnitude faster. To create an index, use the createIndex collection method.\n> db.users.find({'username': 'user101'}).explain('executionStats')\nHere, executionStats mode helps us understand the effect of using an index to satisfy queries",
  },
  {
    Question: "What are Geospatial Indexes in MongoDB?",
    Answer:
      "MongoDB has two types of geospatial indexes: 2dsphere and 2d. 2dsphere indexes work with spherical geometries that model the surface of the earth based on the WGS84 datum. This datum model the surface of the earth as an oblate spheroid, meaning that there is some flattening at the poles.Distance calculations using 2sphere indexes, therefore, take the shape of the earth into account and provide a more accurate treatment of distance between, for example, two cities, than do 2d indexes. Use 2d indexes for points stored on a two-dimensional plane.",
  },
  {
    Question: "Explain the process of Sharding.",
    Answer:
      "Sharding is the process of splitting data up across machines. We also use the term “partitioning” sometimes to describe this concept. We can store more data and handle more load without requiring larger or more powerful machines, by putting a subset of data on each machine.\nIn the figure below, RS0 and RS1 are shards. MongoDB’s sharding allows you to create a cluster of many machines (shards) and break up a collection across them, putting a subset of data on each shard. This allows your application to grow beyond the resource limits of a standalone server or replica set.",
  },
  {
    Question: "Explain the SET Modifier in MongoDB?",
    Answer:
      "If the value of a field does not yet exist, the '$set' sets the value. This can be useful for updating schemas or adding user-defined keys.",
  },
  {
    Question: "",
    Answer: "",
  },
  {
    Question: "",
    Answer: "",
  },
];
export default MongoData;
