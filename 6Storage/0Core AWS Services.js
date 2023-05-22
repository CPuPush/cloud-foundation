/*
! CORE AWS SERVICE
* Amazon Virtual Private Cloud (VPC)
* Amazon Elastic Compute Cloud (EC2)
* Storage
  * Amazon S3
  * Amazon EBS
  * Amazon EFS
  * Amazon S3 Glacier
* Database
  * Amazon Relational Database Service (RDS)
  * Amazon DynamoDB
* AWS Identity and Access Management (IAM)

* => Storage is another AWS core service category. some broad categories of storage include: instance store (ephemeral storage), Amazon EBS, Amazon EFS, Amazon S3, and amazon S3 glacier
  * instance storage, or ephemeral storage, is temporary storage that is added to your Amazon EC2 isntance.
  * Amazon EBS is persistent, mountable storage that can be mounted as a device to an Amazon EC2 isntance. Amazon EVS can be mounted to an amazon EC2 instance only within the same Availability zone. only one Amazon EC2 instance at a time can mount an Amazon EBS volume.
  * Amazon EFS is a shared file system that multiple amazon EC2 instances can mount at the same time.
  * Amazon S3 is persistent storage where each file becomes an object and is available through a Uniform Resource Locator (URL); it can be accessed from anywhere.
  * Amazon S3 Glacier is for cold storage for data that is not accessed frequentky (for example, when you need long-term data storage for archival or compliance reasons).
*/