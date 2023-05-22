/*
! AWS services and service category overview
* AWS global infrastructure can be broken down into three elements:
- Regions
- AZ
- point of presence which include ende locations
* this infrastructure provides the platform for a broadset of services, such as networking, storage, compute service, and database. 

* For accessibility:Marketing diagram showing infrastructure at the bottom, consisting of Regions, Availability Zones, and edge locations. The next level up is labeled Foundational Services and includes graphics for compute, networking, and storage. That level is highlighted. Next level up is platform services that includes databases, analytics, app services, deployment and management, and mobile services. Top layer is labeled applications and includes virtual desktops and collaboration and sharing.

?AWS Category of services
there are 23 different product or service categories, and each category consists of one or more services. 
the category that will discuss is 
- compute
- cost management
- database
- management and governance
- networking and content delivery
- security
- identity
- compliance
- storage
?Storage Service category
* Amazon Simple Storage Service (Amazon S3) is an object storage service that offers scalability, data availability, security, and performance. Use it to store and protect any amount of data for websites, mobile apps, backup and restore, archive, enterprise applications, Internet of Things (IoT) devices, and big data analytics

*Amazon Elastic Block Store (Amazon EBS) is high-performance block storage that is designed for use with Amazon EC2 for both throughput and transaction intensive workloads. It is used for a broad range of workloads, such as relational and non-relational databases, enterprise applications, containerized applications, big data analytics engines, file systems, and media workflows

*Amazon Elastic File System (Amazon EFS)provides a scalable, fully managed elastic Network File System (NFS) file system for use with AWS Cloud services and on-premises resources. It is built to scale on demand to petabytes, growing and shrinking automatically as you add and remove files. It reduces the need to provision and manage capacity to accommodate growth.

*Amazon Simple Storage Service Glacier is a secure, durable, and extremely low-cost Amazon S3 cloud storage class for data archiving and long-term backup. It is designed to deliver 11 9s of durability, and to provide comprehensive security and compliance capabilities to meet stringent regulatory requirements.

?Computer Service Category
*Amazon Elastic Compute Cloud (Amazon EC2) provides resizable compute capacity as virtual machines in the cloud.

*Amazon EC2 Auto Scaling enables you to automatically add or remove EC2 instances according to conditions that you define.

*Amazon Elastic Container Service (Amazon ECS) is a highly scalable, high-performance container orchestration service that supports Docker containers. 

*Amazon Elastic Container Registry (Amazon ECR) is a fully-managed Docker container registry that makes it easy for developers to store, manage, and deploy Docker container images. 

*AWS Elastic Beanstalkis a service for deploying and scaling web applications and services on familiar servers such as Apache and Microsoft Internet Information Services (IIS).

*AWS Lambdaenables you to run code without provisioning or managing servers. You pay only for the compute time that you consume. There is no charge when your code is not running

*Amazon Elastic Kubernetes Service (Amazon EKS) makes it easy to deploy, manage, and scale containerized applications that use Kubernetes on AWS.

*AWS Fargate is a compute engine for Amazon ECS that allows you to run containers without having to manage servers or clusters.

? Database Service Category
* Amazon Relational Database Service (Amazon RDS) makes it easy to set up, operate, and scale a relational database in the cloud. It provides resizable capacity while automating time-consuming administration tasks such as hardware provisioning, database setup, patching, and backups.

*Amazon Aurora is a MySQL and PostgreSQL-compatible relational database. It is up to five times faster than standard MySQLdatabases and three times faster than standard PostgreSQL databases

* Amazon Redshift enables you to run analytic queries against petabytes of data that is stored locally in Amazon Redshift, and directly against exabytes of data that are stored in Amazon S3. It delivers fast performance at any scale.

* Amazon DynamoDB is a key-value and document database that delivers single-digit millisecond performance at any scale, with built-in security, backup and restore, and in-memory caching.

? Networking and content delivery service category
* Amazon Virtual Private Cloud (Amazon VPC) enables you to provision logically isolated sections of the AWS Cloud.

* Elastic Load Balancing automatically distributes incoming application traffic across multiple targets, such as Amazon EC2 instances, containers, IP addresses, and Lambda functions.

* Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and application programming interfaces (APIs) to customers globally, with low latency and high transfer speeds

* AWS Transit Gateway is a service that enables customers to connect their Amazon Virtual Private Clouds (VPCs) and their on-premises networks to a single gateway

* Amazon Route 53 is a scalable cloud Domain Name System (DNS) web service designed to give you a reliable way to route end users to internet applications. It translates names (like www.example.com) into the numeric IP addresses (like 192.0.2.1) that computers use to connect to each other.

* AWS Direct Connect provides a way to establish a dedicated private network connection from your data center or office to AWS, which can reduce network costs and increase bandwidth throughput

* AWS VPN provides a secure private tunnel from your network or device to the AWS global network

? Security, identitym and complicance service category
* AWS Identity and Access Management (IAM) enables you to manage access to AWS services and resources securely. By using IAM, you can create and manage AWS users and groups. You can use IAM permissions to allow and deny user and group access to AWS resources. 

* AWS Organizations allows you to restrict what services and actions are allowed in your accounts.

* Amazon Cognito lets you add user sign-up, sign-in, and access control to your web and mobile apps.

* AWS Artifact provides on-demand access to AWS security and compliance reports and select online agreements.

* AWS Key Management Service (AWS KMS) enables you to create and manage keys. You can use AWS KMS to control the use of encryption across a wide range of AWS services and in your applications

* AWS Shield is a managed Distributed Denial of Service (DDoS) protection service that safeguards applications running on AWS

? AWS Const management service category
* The AWS Cost and Usage Report contains the most comprehensive set of AWS cost and usage data available, including additional metadata about AWS services, pricing, and reservations.

*AWS Budgets enables you to set custom budgets that alert you when your costs or usage exceed (or are forecasted to exceed) your budgeted amount

* AWS Cost Explorer has an easy-to-use interface that enables you to visualize, understand, and manage your AWS costs and usage over time

? Management and governance service category
* The AWS Management Console provides a web-based user interface for accessing your AWS account

* AWS Config provides a service that helps you track resource inventory and changes.

* Amazon CloudWatch allows you to monitor resources and applications

* AWS Auto Scaling provides features that allow you to scale multiple resources to meet demand

* AWS Command Line Interface provides a unified tool to manage AWS services.

* AWS Trusted Advisor helps you optimize performance and security

* AWS Well-Architected Tool provides help in reviewing and improving your workloads

* AWS CloudTrail tracks user activity and API usage


*/