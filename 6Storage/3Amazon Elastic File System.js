/*
! Amazon Elastic File System (EFS)
* Amazon EFS implements storage for EC2 instances that multiple virtual machines can access at the same time. It is implemented as a shared file system that uses the Network File System (NFS) protocol.

* Amazon Elastic File System (EFS) provides simple, scalable, elastic file storage for use with AWS services and non-premises resources. It offers a simple interface that enables you to create and configure file systems quickly and easily.

* Amazon EFS is built to dynamically scale on demand without disrupting applications—it will grow and shrink automatically as you add and remove files. It is designed so that your applications have the storage they need, when they need it.

? Amazon EFS features
* File storage in the AWS cloud
* workls well for big data and analytic, media processing workflows, content management, web serving, and home directories
* petabyte-scale, low-latency file system
* shared storage
* elastic capacity
* supports network file system (NFS) versions 4.0 and 4.1 (NFSv4)
* Compatible with all Linux-based AMIs foor Amazon EC2

* => You can create file systems that are accessible to Amazon EC2 instances through a file system interface (using standard operating system file I/O APIs). These file systems support full file system access semantics, such as strong consistency and file locking.

* Amazon EFS file systems can automatically scale from gigabytes to petabytes of data without the need to provision storage. housands of Amazon EC2 instances can access an Amazon EFS file system at the same time, and Amazon EFS is designed to provide consistent performance to each Amazon EC2 instance. Amazon EFS is also designed to be highly durable and highly available. Amazon EFS requires no minimum fee or setup costs, and you pay only for the storage that you use.

? Amazon EFS architecture
AZ A        AZ B        AZ C
net int     net int     net int

all connecting to Elastic file system

* => Amazon EFS provides file storage in the cloud. With Amazon EFS, you can create a file system, mount the file system on an Amazon EC2 instance, and then read and write data from to and from your file system. ou can mount an Amazon EFS file system in your VPC, through NFS versions 4.0 and 4.1 (NFSv4)

* You can access your Amazon EFS file system concurrently from Amazon EC2 instances in your VPC, so applications that scale beyond a single connection can access a file system. Amazon EC2 instances that run in multiple Availability Zones within the same AWS Region can access the file system, so many users can access and share a common data source.

* In the diagram, the VPC has three Availability Zones, and each Availability Zone has one mount target that was created in it. We recommend that you access the file system from a mount target within the same Availability Zone. One of the Availability Zones has two subnets. However, a mount target is created in only one of the subnets.

? Amazon EFS implementation
* create your Amazon EC2 resources and launch your Amazon EC2 instance
* create your EFS file system
* create your mount targets in the appropriate subnetes
* connect your Amazon EC2 instances to the mount targets
* verify the resources and protection of your AWS account

* => You must complete five steps to create and use your first Amazon EFS file system, mount it on an Amazon EC2 instance in your VPC, and test the end-to-end setup:

* Create your Amazon EC2 resources and launch your instance. (Before you can launch and connect to an Amazon EC2 instance, you must create a key pair, unless you already have one.)
* Create your Amazon EFS file system.
* In the appropriate subnets, create your mount targets.
* Next, connect to your Amazon EC2 instance and mount the Amazon EFS file system.
* Finally, clean up your resources and protect your AWS account.

? Amazon EFS resources
In Amazon EFS, a file system is the primary resource. Each file system has properties such as:
  * ID
  * creation token
  * creation time
  * file system size in bytes
  * number of mount targets that are created for the file system
  * file system state
Amazon EFS also supports other resources to configure the primary resource. These resources include mount targets and tags.

* Mount target: To access your file system, you must create mount targets in your VPC. Each mount target has the following properties:
  * The mount target ID
  * the subnet ID for the subnet where it was created
  * the file system ID for the File system where it was created
  * an IP address where the file system can be mounted
  * the mount target state
You can use the IP address or the Domain Name System (DNS) name in your mount command.

Tags:To help organize your file systems, you can assign your own metadata to each of the file systems that you create. Each tag is a key-value pair.

Think of mount targets and tags as subresources that do not exist unless they are associated with a file system.

todo https://aws-tc-largeobjects.s3-us-west-2.amazonaws.com/ILT-TF-100-ACFNDS-20-EN/Module_7_EFS+v2.0.mp4
*/