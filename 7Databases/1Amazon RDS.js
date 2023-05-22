/*
! Amazon Relational Database Service

? Unmanaged versus managed services
* unmanaged: Scaling, fault tolerance, and availability are managed by you.
* Managed: Scaling, fault tolerance, and availability are typically built into the service.

* => Say that you launch a web server on an Amazon Elastic Compute Cloud (Amazon EC2) instance. Because Amazon EC2 is an unmanaged solution, that web server will not scale to handle increased traffic load or replace unhealthy instances with healthy ones unless you specify that it use a scaling solution, such as AWS Automatic Scaling. The benefit to using an unmanaged service is that you have more fine-tuned control over how your solution handles changes in load, errors, and situations where resources become unavailable.

* Managed services require the user to configure them. For example, you create an Amazon Simple Storage Service (Amazon S3) bucket and then set permissions for it. However, managed services typically require less configuration. Say that youhave a static website that youhost in a cloud-based storage solution, such as Amazon S3. The static website does not have a web server. However, because Amazon S3 is a managed solution,featuressuch as scaling, fault-tolerance, and availability would be handled automatically and internally by Amazon S3.

? challenges of relational databases
  * server maintenance and energy foot print
  * software installation and patches
  * database backups and high availability
  * limits on scalability
  * data security
  * OS installation and patces

? Amazon RDS
* Amazon RDS is managed service that sets up and operates a relational database in the cloud.

* To address the challenges of running an unmanaged, standalone relational database, AWS provides a service that sets up, operates, and scales the relational database without any ongoing administration. Amazon RDS provides cost-efficient and resizable capacity, while automating time-consuming administrative tasks

* Amazon RDS enables you to focus on your application, so you can give applications the performance, high availability, security, and compatibility that they need. With Amazon RDS, your primary focus is your data and optimizing your application.

? From on-premises databases to Amazon RDS
* On-premise database
---you manage
Application optimization
Scaling
High Availability
Database Backups
Database software patches
Database software installs
Operation system patches
Operating system install
Server maintenance
Rack and stack servers
Power, HVAC, network

* Database is Amazon Elastic Compute Cloud (Amazon EC2)
---you manage
Application optimization
Scaling
High Availability
Database Backups
Database software patches
Database software installs
Operation system patches
---AWS provides
Operating system install
Server maintenance
Rack and stack servers
Power, HVAC, network

* Database in Amazon RDS or Amazon Aurora
you manage
Application Optimization
---aws provides
Scaling
High Availability
Database Backups
Database software patches
Database software installs
Operation system patches
Operating system install
Server maintenance
Rack and stack servers
Power, HVAC, network

? Managed Services Responsibilities
* With Amazon RDS, you manage your application optimization.
* AWS manages installing and patching the operating system, installing and patching the database software, automatic backups, and high availability
* AWS also scales resources, manages power and servers, and performs maintenance.
* Offloading these operations to the managed Amazon RDS service reduces your operational workload and the costs that are associated with your relational database. You will nowgo through a brief overview of the service and a few potential use cases.

? Amazon RDS DB instances
* Amazon RDS
DB Instance Class
  * CPU
  * Memory
  * Network Performance
DB Instance Storage
  * Magnetic
  * General  Purpose (Solid State Drive, or SSD)
  * Provisioned IOPS
***
db engines
* MySQL
* Amazon Aurora
* Microsoft SQL Server
* PostgreSQL
* MariaDB
* Oracle

* => The basic building block of Amazon RDS is the database instance. A database instance is an isolated database environment that can contain multiple user-created databases. It can be accessed by using the same tools and applications that you use with a standalone database instance. The resources in a database instance are determined by its database instance class, and the type of storage is dictated by the type of disks.

* Database instances and storage differ in performance characteristics and price, which enable you to customize your performance and cost to the needs of your database. When you choose to create a database instance, you must first specify which database engine to run. Amazon RDS currently supports six databases: MySQL, Amazon Aurora, Microsoft SQL Server, PostgreSQL, MariaDB, and Oracle.

? Amazon RDS in a virtua private cloud

          AZ
VPC       Public subnet
          Amazon EC2
          
          Private subnet
          Amazon RDS

* => You can run an instance by using Amazon Virtual Private Cloud (Amazon VPC). When you use avirtual private cloud (VPC), you have control over your virtual networking environment.
* You can select your own IP address range, create subnets, and configure routing and access control lists (ACLs).  The basic functionality of Amazon RDS is the same whether or not it runs in a VPC.
*  Usually, the database instance is isolated in a private subnet and is only made directly accessible to indicated application instances. Subnets in aVPC are associated with a single Availability Zone, so when you select the subnet, youarealso choosing the Availability Zone (or physical location) for your database instance.

? High Availability with Multi-AZ Deployment
* One of the most powerful features of Amazon RDS is the ability to configure your database instance for high availability with a Multi-AZ deployment. After a Multi-AZ deployment is configured, Amazon RDS automatically generates a standby copy of the database instance in another Availability Zone within the same VPC.

* After seeding the database copy, transactions are synchronously replicated to the standby copy. Running a database instance in a Multi-AZdeployment can enhance availability during planned system maintenance, and it can help protect your databases against database instance failure and Availability Zone disruption.

* Therefore, if the main database instance fails in a Multi-AZdeployment, Amazon RDS automatically brings the standby database instance online as the new main instance. Thesynchronous replicationminimizes the potential for data loss. Because your applications reference the database by name by using the Amazon RDS DomainName System (DNS) endpoint, you don't need to change anything in your application code to use the standby copy for failover.

? Amazon RDS Read replicas
features
* Offers Asynchronous replication
* Can be promoted to primary if needed
functionality
* Use for read-heavy database workload
* offload read queries

VPC
Public subnet
Amazon EC2        Application
private subnet
Amazon RDS Primary instance => Read replica instance

* => Amazon RDS also supports the creation of read replicas for MySQL, MariaDB, PostgreSQL, and Amazon Aurora. Updates that are made to the source database instance are asynchronously copied to the read replica instance. 

* You can reduce the load on your source database instance by routing read queries from your applications to the read replica. Using read replicas, you can also scale out beyond the capacity constraints of a single database instance for read-heavy database workloads. Read replicas can also be promoted to become the primary database instance, but thisrequires manual action because of asynchronous replication.

* Read replicas can be created in a different Region than the primary database. This feature can help satisfy disaster recovery requirements or reduce latency by directing reads to a read replica that is closer to the user.

? Use Cases
Web and mobile application
  * High throughput
  * Massive storage scalability
  * High availability
Ecommerce application
  * Low-cost database
  * Data security
  * Fully managed solution
Mobile and online games
  * Rapidly grow capacity
  * Automatic scaling
  * Database monitoring
* => Amazon RDS works well for web and mobile applications that need a database with high throughput, massive storage scalability, and high availability.
* Because Amazon RDS does not have any licensing constraints, it fits the variable usage pattern of these applications. For small and large ecommerce businesses, Amazon RDS provides a flexible, secure, and low-cost database solution for online sales and retailing.
* Mobile and online games require a database platform with high throughput and availability. Amazon RDS manages the database infrastructure, so game developers do not need to worry about provisioning, scaling, or monitoring database servers. 

? When to Use Amazon RDS
Use amazon RDS when your application requires:
  * Complex transactions or complex queries
  * A medium to high query or write rate –Up to 30,000 IOPS (15,000 reads + 15,000 writes)
  * No more than a single worker node or shard
  * high durability
Do not use Amazon RDS when your application requires:
  * Massive read/write rates (for example, 150,000 write/second)
  * Sharding due to high data size or throughput demands
  * Simple GET or PUT requests and queries that a NoSQL database can handle
  * Relational database management system (RDBMS) customization

? Amazon RDS:Clock-hour billing and database characteristics
* clock hour billing resources incur charges when running
* Database Characteristics-
  * physical capacity of database:
    * engines
    * size
    * memory class

* => When you begin to estimate the cost of Amazon RDS, you must consider the clock hours of service time, which are resources that incur charges when they are running(for example, from the time you launch a database instance until you terminate the instance).

* Database characteristics should also be considered. The physical capacity of the database you choose will affect how much you are charged. Database characteristics vary depending on the database engine, size, and memory class.

? Amazon RDS: DB purchase type and multiple DB instances
DB purchase type-
  * on-demand instances
    * compute capacity by the hour
  * Reserved Instance
    * low, one-time, upfront payment for database instance that are reserved with a 1-year or 3-year term
Number of DB instances-
  * provision muliple DB instances to handle peak loads

* => Also, you must consider the number of database instances. With Amazon RDS, you can provision multiple database instances to handle peak loads.

? Amazon RDS:Storage
* Provisioned storage-
  * no charge
    * backup storage up to 100% of database storage for an active database
  * Charge (GB/month)
    * Backup storage for terminated DB instances
* additional storage-
  * charge (GB/month)
    * backup storage in addition to procisioned storage

* => After the database instance is terminated, backup storage is billed per GB, per month. Also consider the amount of backup storage in addition to the provisioned storage amount, which is billed per GB, per month.

? Amazon RDS: Deployment type and data transfer
request-
  * The number of input and output request that are made to the database
Deployment type-Storage and I/O charges vary, depending on whether you deploy to-
  * single AZ
  * Multiple AZ
Data transfer-
  * No charge for inbound data transfer
  * Tiered charges for outbound data transfer

* => Alsoconsider the number of input and output requests that are made to the database.

* Consider the deployment type.You can deploy your DB instance to a single Availability Zone (which is analogous to a standalone data center) or to multiple Availability Zones (which is analogous to a secondary data center for enhanced availability and durability). 

* Storage and I/O charges vary, depending on the number of Availability Zones that you deploy to.

* Finally, consider data transfer. Inbound data transfer is free, and outbound data transfer costs are tiered.

* Depending on the needs of your application, it’s possible to optimize your costs for Amazon RDS database instances by purchasing ReservedInstances. To purchase Reserved Instances, you make a low, one-time payment for each instance that you want to reserve.As a result, youreceive a significantdiscount on the hourly usage charge for that instance.

! LAB

! Create a security Group
create a security group to allow your web server to access your RDS DB instance. The security group will be used when you launch the database instance.

* in this lab there are 1 security group that had created. 
  ? Web Security Group
  inbound
  IPv4  HTTP   TCP   80   0.0.0.0/0
  IPv4  SSH    TCP   22   0.0.0.0/0

You will now add a rule to the security group to permit inbound database requests. 
*  You will add a rule to permit access from the Web Security Group.
  ? DB Security Group
  inbound
  type        protocol    Port range    source
  MYSQL/auro  TCP         3306          sg-Web Security Group
  
TODO This configures the Database security group to permit inbound traffic on port 3306 from any EC2 instance that is associated with the Web Security Group

! Create a DB Subnet Group
* You will create a DB subnet group that is used to tell RDS which subnets can be used for the database. Each DB subnet group requires subnets in at least two Availability Zones.

* Expand the list of values under Availability Zones and  select the first two zones: us-east-1a and us-east-1b.

* Expand the list of values under Subnets and select the subnets associated with the CIDR ranges 10.0.1.0/24 and 10.0.3.0/24.
TODO subnet ini berada pada LAB-VPC yang mengarah pada 2 AZ yang private subnet.

! Create database
* the required is use DB Subnet that we created, and other.

*/

/*
discrete portions => porsi terpisah
*/