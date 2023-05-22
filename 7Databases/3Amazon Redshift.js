/*
! Amazon Redshift
Amazon Redshift is a fast, fully managed data warehouse that makes it simple and cost-effective to analyze all your data by using standard SQL and your existing business intelligence (BI) tools. 

? introduction to Amazon Redshift
* Analytics is important for businesses today, but building a data warehouse is complex and expensive. Data warehouses cantake months and significant financial resources to set up.
* Amazon Redshift is a fast and powerful, fullymanaged data warehouse that is simple and cost-effective to set up, use, and scale. It enables you to run complex analytic queries against petabytes of structured data by using sophisticated query optimization, columnar storage on high-performance local disks, and massively parallel data processing. Most results come back in seconds.
* You will next review a slightly more detailed exploration of key Amazon Redshift features and some common use cases

? Parallel processing architecture
__________
Amazon Redshift
dense compute node
.virtual core
.RAM
.Local disk
_____________

SQL Clients/BI tools
📦leader node
📦📦📦 dense compute nodes

amazon dynamoDB 
AMazon S3

* => The leader node manages communications with client programs and all communication with compute nodes. It parses and develops plans to carry out database operations-specifically, the series of steps that are needed to obtain results for complex queries. The leader node compiles code for individual elements of the plan and assigns the code to individual compute nodes. The compute nodes run the compiled code and send intermediate results back to the leader node for final aggregation.

* Likeother AWS services, you only pay for what you use. You can get started for as little as 25 cents per hour and, at scale, Amazon Redshift can deliver storage and processing for approximately $1,000 dollars per terabyte per year (with 3-Year PartialUpfront Reserved Instance pricing)

* The Amazon Redshift Spectrum feature enables you to run queries against exabytes of data directly in Amazon S3.

? Automation and scalling
* It is straightforward to automate most of the common administrative tasks to manage, monitor, and scale your Amazon Redshift cluster—whichenables you to focus on your data and your business
* Scalability is intrinsic in Amazon Redshift.Your cluster can be scaled up and down as your needs change with a few clicks in the console
* Security is the highest priority for AWS. With Amazon Redshift, security is builtin, and it is designed to provide strong encryption of your data both at rest and in transit.

? Compatibility
Amazon Redshift <> SQL clients and businnes Intelligent (BI) tools
* Finally, Amazon Redshift is compatible with the tools that you already know and use. Amazon Redshift supports standard SQL. Italso provides high-performance Java Database Connectivity (JDBC) and Open Database Connectivity (ODBC) connectors, which enable you to use the SQL clients and BI tools of your choice.

? Amazon Reshift use cases
* Enterprise data warehouse (EDW)
  * migrate at a pace that customers are comfortable with
  * experiment without large upfront cost or commitment
  * respond faster to businnes needs
* Big data
  * low price point for small customers
  * managed service for ease of deployment and maintenance
  * focus more on data and less on database management
* software as a service (SaaS)
  * scale the data warehouse capacity as demand grows
  * add analytic functionality to applications
  * reduce hardware and software costs

* => Software as a service (SaaS) customers can take advantageof the scalable, easy-to-manage features that Amazon Redshift provides. Some customers use the Amazon Redshift to provide analytic capabilities to their applications. Some usersdeploy a cluster per customer,and use tagging to simplify and manage their service level agreements (SLAs) and billing. Amazon Redshift canhelp you reduce hardware and software costs.

sum 
* AmazonRedshift is designedto consistently deliver high performance. Amazon Redshift uses columnar storage and a massively parallel processing architecture. These features parallelize and distribute data and queries across multiple nodes. AmazonRedshift also automatically monitors your cluster and backs up your data so thatyou can easily restore if needed. Encryption is built in—you only need to enable it.
*/




/*
sophisticated => rumit
dense => padat
intrinsic => hakiki,
*/