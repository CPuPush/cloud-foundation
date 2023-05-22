/*
! Amazon EC2 con't

? 3 Specify Network Settings
after you have choose an AMI and an instance type, we must specify the network location where the EC2 instance will be deployed. The choce of region must be made before you start the launch instance wizard. 
within the region, you can specify to place the instance into any existing subnet. into any existing VPC. The wizard also provides a link to create a new VPC o to create a new subnet if wanted. 
when we do not specify a VPC when launcing an instance, the instance will be placed in the the default VPC. When asign to default VPC, aws will assign it a public IP address by default.
When you launch an instance into a non-default VPC, the subnet has an attribute that determines if instances launched into it receive a public IP.

? 4 Attach IAM role (optional)
* will software on the EC2 instance need to interact with other AWS services?
  * if yes, attach an appropriate IAM Role.
* an AWS identity and Access Management (IAM) role that is attached to an EC2 instance is kept in an profile.
* you are not retricted to attaching a role only at instance launch.
  * you can also attach a role to an instance that already exists.

* => its common to use EC2 instance to run an application that must make secure API calls to other AWS service. To support these use cases, AWS enables you to attach an AWS identity and Access Management (IAM) role to an EC2 instance. Without this features, you might be tempted(tergoda) to place AWS credential on an EC2 instance so an application that runs on that instance to use. however, you should never store AWS credentials on an EC2 instance. It is highly insecure. instead, attach an IAM role to the EC2 instance. the IAM role then grants permission to make application programing interface (API) requrest to the application that run on the EC2 instance.
* An instance profileis a container for an IAM role. If you use the AWS Management Console to create a role for Amazon EC2, the console automatically creates an instance profile and gives it the same name as the role. When you then use the Amazon EC2 console to launch an instance with an IAM role, you can select a role to associate with the instance. In the console, the list that displays is actually a list of instance profile names

example 

role that grants Amazon s3 bucket acces permission attach to Instance. so APlication on instance can acces S3 bucket
Iam role use attach to grant permission ----> Ec2 instance (can access) ---> S3 bucket

* You can attach an IAM role when you launch the instance, but you can also attach a role to an already running EC2 instance.  When you define a role that can be used by an EC2 instance, you define which accounts or AWS services can assume the role. you also define which API action and resources the application can use after it assumes the role. If you change a role, the change is propagated(disebarkan) to all instances that have the role attach to them.

? 5. User Data script (Optional)
AMI -> User Data -> Running EC2 instance
user data can be like:
yum update -y
yum install -y wget
* optionally specify a user data script at instance launch
* Use user data scripts to customize the runtime environment of your instance
  * Script runs the first time the instance start
* can be used strategically
  * For example, reduce the number of custom AMIs that you build and maintain.

* => User data can automate the completion of installations and configurations at instance launch. For example, a user data script might patch and update the instance's operating system, fetch and install software license keys, or install additional software.
https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ec2-windows-user-data.html
* When the EC2instance is created, the user data script will run with root privileges during the final phases of the boot process.

? 6. Specify Storage
* Configure the root volume Where the guest operating system is installed
* Attach additional storage volume (optional)
  * AMI might already includ more that one volume
* for ecah volume, specify:
  * the size of the disk (in GB)
  * the volume type
    * different type of solid state drives and hard disk drives are available
* if the volyume will be deleted when the instance is terminated
* we can also specify if encryption should be used.

* => when you launch an EC2 instance, you can configure storage option, for example, you can configure the size of the root volume where the guest operating system is installed. You can also attach additional storage volumes when you launch the instance. Some AMis are also configured to launch more than one storage volume by default to provide storage that is separated from the root volume.

* For each volume that your instance will have, you can specify the size of the disks, the volume types, and whether the storage will be retained if the instance is terminated. You can also specify if encryption should be used.

TODO Amazon EC2 Storage Options
* Amazon Elastic Block Store (EBS)
is an easy to use, high-performance durable block storage service that is design to be used with Amazon EC2 for both throudhput-and transaction-intensive workloads.You can stop the instance and start it again, and the data will still be there. You can change volume types or increase volume size without disrupting your critical applications, so you can have cost-effective storage when you need it. 
* Amazon EC2 Instance Store (temporary)
Amazon Ec2 instance store provides temporary block level storage for instance.
Storage is provided on disks that are attached to the host computer where the EC2 is running
if the instance stops, data stored here is deleted. Instance Store works well when you must temporarily store information that changes frequently, such as buffer ans cash. It's important to know if the instanaces are stopped either because of an error or a malfunction that the data on the instance will be deleted.

the root volume 

* other options for storage(not for the root volume)
? Amazon Elastic File System (Amazon EFS) which provides a scalable, managed elastic network file system (NFS) for yse with AWS cloud services and on-premises resources. 
? Connect to Amazon Simple Storage Service (Amazon S3) which is an object storage service that offers scalability, data availability, security and performance

examples
instance 1 --> EBS 20GB volume root, EBS 500 GB volume storage,storageInstance Store (epherarl v1) storage
* when instance stop and start again, the OS and storage would survive, buat Instance Store would permanently lost.

instance 2 --> attach root volume (ephemeral volume)
* an instance with instance store root volume cannot be stopped by an Amazon EC2 API call, it can only be terminated, however, it could be stop from within the instance's OS, or disk failure, and all the data that was stored would be lost
*/