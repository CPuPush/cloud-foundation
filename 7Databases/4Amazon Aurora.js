/*
! Amazon Aurora
* enterprice-class relational database
* compatible with MySQL or PostgreSQL
* automate time-consuming tasks (such as provisioning, patching, backup, recovery, failure detection, and repair).

* => Amazon Aurora is a MySQL-and PostgreSQL-compatible relational database that isbuilt for the cloud.Itcombines the performance and availability of high-end commercial databases with the simplicity and cost-effectiveness of open-source databases. Using Amazon Aurora can reduce your database costs while improving the reliability and availability of the database. As a fully managed service, Aurora is designed toautomate time-consuming tasks like provisioning, patching, backup, recovery, failure detection, and repair.

? Amazon Aurora service benefits
  * pay as you go
  * managed service
  * fast and available
  * simple
  * compatible

* => Amazon Aurora is straightforward to set up and uses SQL queries. It is designed to have drop-in compatibilitywith MySQL and PostgreSQL database enginesso that you can use most of your existing database tools with little or no change. It’s a managed service that integrates with features such as AWSDatabase Migration Service (AWS DMS)and the AWS Schema Conversion Tool. These features are designed to help you move your dataset into Amazon Aurora.

? High Availability

                AZ1
Aurora          AZ2         S3
                AZ3

* => Why might you use Amazon Aurora over other options, like SQL with Amazon RDS? Most of that decision involves the high availability and resilient design that Amazon Aurora offers.
* Amazon Aurora is designed to be highly available:itstores multiple copies of your data across multiple Availability Zones with continuous backups to Amazon S3. AmazonAurora can use upto 15 read replicas can be used to reduce the possibility of losing your data. Additionally, Amazon Aurora is designed for instant crash recovery if your primary database becomes unhealthy.

? Resilient design
* After a database crash, Amazon Aurora does not need to replay the redo log from the last database checkpoint. Instead, it performs this on every read operation. This reduces the restart time after a database crash to less than 60 seconds in most cases.
* With Amazon Aurora,the buffer cache is moved out of the database process, which makes it available immediately at restart. This reduces the need for you to throttle access until the cache is repopulated to avoid brownouts.


TODO The right tool for the right job

what are my requirement
* Enterprise-classrelational database
  Amazon RDS
* Fast and flexible NoSQL database service for any scale
  Amazon DynamoDB
* Operating system accessor applicationfeatures that are not supported by AWS database services
  Databases on Amazon EC2
* Specific case-driven requirements (machinelearning, data warehouse, graphs)
  AWS purpose-built database services
* 
*/