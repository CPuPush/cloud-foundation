/*
! Relational versus non-relational databases
                Relational          nonRelational
Data Storage    Rowsand columns     Key-value, document, graph
Schemas         Fixed               Dynamic
Querying        UsesSQL             Focuses on collection of documents
Scalability     Vertical            Horizontal

* => Relational databases might have difficulties scaling out horizontallyor working with semistructureddata, and mightalso require many joins for normalized data

? What is Amazon DynamoDB?
* fast and flexible NoSQL database service for any scale
  * NoSQL database tables
  * virtually unlimited storage
  * items can have differing attributes
  * low-latency queries
  * scalable read/write throughput

* => DynamoDB is a fast and flexible NoSQL databaseservice for all applications that need consistent, single-digit-millisecond latency at any scale.
* With DynamoDB, you can create tables and items. You can add items to a table. The system automatically partitions your data and has table storage to meet workload requirements. There is no practical limit on the number of items that you can store in a table. For instance, some customers have production tables that contain billions of items.

? Amazon DynamoDB core components
* Tables, items, and attributes are the core DynamoDB components
* DynamoDB supports two different kinds of primary keys: Partition key and partition and sort key.

* => DynamoDB supports two different kinds of primary keys. The partition key is a simple primary key, which is composed of one attribute called the sortkey.The partition key and sort key are also known as the composite primary key,which is composed of two attributes.

? Partitioning
As data grows, table data is partitioned and indexed by the primary key.
You can retrieve data from a DynamoDB table in two different ways:
  * the query operation takes advantage of partitioning to effectively locate items by using the primary key.
  * The second method is via a scan, which enables you to locate items in the table by matching conditions on non-key attributes. The second method gives you the flexibility to locate items by other attributes. However, the operation is less efficientbecause DynamoDB will scan through all the items in the table to find the ones that match your criteria

* For accessibility:Partitioning allows large tables to be scanned and queried quickly. As data grows, table is partitioned by key. QUERY by Key to find items by any attribute. End of accessibility description.

? Item in a table must have a key
* To take full advantage of query operations and DynamoDB, it's important to think about the key that you useto uniquely identify items in the DynamoDB table. You can set up a simple primary key that is based on a single attribute of the data values with a uniform distribution, such as the Globally Unique Identifier (GUID) or other random identifiers. 
* For example, if you wanted to model a table with products, you could use some attributeslike the product ID. Alternatively, you can specify a compound key, which is composed of a partition key and a secondary key. In this example, if you had a table with books, youmight use the combination of author and title to uniquely identify table items. This method could be useful if you expect to frequently look at books by authorbecause you couldthen use query.
* For accessibility:The two different types of keys. A single key means the data is identified by an item in the data that uniquely identifies each record. A compound key is made up of a partition key and a second key that can be used for sorting data. End of accessibility description.


* = >DynamoDB works well for mobile, web, gaming, ad tech, and Internet of Things (IoT)applications.It’s accessible via the console, the AWS CLI, and API calls. 

* DynamoDB is also used in latency-sensitive applications. The predictable query performance—even in large tables—makes it useful for cases where variable latency could cause significant impact to the user experience or to business goals, such as adtechor gaming. 
*/