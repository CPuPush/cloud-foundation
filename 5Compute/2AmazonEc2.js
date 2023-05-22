/*
! Amazon EC2
Amazon EC2 Provides vitual machines where you can host the same applications you run on premises serviers. it provides secure resizable compute capacity in the cloud. Common uses ofr EC2 Instances include: 
  * Application server
  * Web server
  * Database Server
  * Game Server
  * Mail Server
  * Media Server
  * Catalog Server
  * File Server
  * Computing Server
  * Proxy Server

Amazon EC2 Provides virtual machines or VM in the cloud, These VMs are referred to as EC2 Instances.
Gives you full control over the guest operating system (Windows of Linux) on each instance. More operating systems are supported, including recent versions of Windows, Red Hat, SUSE, Ubuntu and Amazon Linux. With Amazon EC2, you can launch any number of instances of any size into any AZ, pretty much anywhere in the entire world in a matter of minutes.
we can control traffic to and from these instnaces by using security group. 

Choices made using the launch instance wizard:
1. AMI
2. Instance Type
3. Network Settings
4. IAM Role
5. User Data
6. Storage Options
7. Tags
8. Security Group
9. Key Pair

? 1. Selecting AMI
* Amazon Machine Image (AMI) is a template that is used to create an EC2 Instance (which is a virtual machine, or VM, that runs in the AWS Cloud)
* contains a windows of Linux operating syste,
* often also has some software pre-installed.

AMI choices:
* Quick Start - Linux and windows AMIs That are provided by AWS 
* My AMIs - Any AMIs that you created
* AWS Marketplace - preconfigured templates from third parties
* community AMys - Amys shared by other; use at your own risk

=> we can use diffenert AMIs to launch instances that will serve different purposes. For example you can choose one AMI to launch an instance that will become a web server, and choose another AMI to deploy an instance that will host an application server. We can launch multiple instances from a single AMI. 

? 2 Select an Instance Type
AWS ec2 provides a selection of instance types optimized for different use cases. Instance types reflect combiations of CPU, memory, Storage, and Networking capacity. The diffenrent instance types give you flexibilty to choose the most appropriate mix of resources, such as memory, processing power, disk type and network performance capabilities, as they're needed for your applications.
instance type categories:
  * General purpose
  * Compute optimized
  * Memory Optimized
  * Storage Optimized
  * Accelerated computing
Instance types offer family, generation, and size.

TODO    EC2 Instance type Naming and Size
example
t3.large
  * T is the family
  * 3 is the generation number
  * Large is the size

example instance size
instance name     vCPU    Memory(GB)    Storage
t3.nano           2       0.5           EBS-Only
t3.micro          2       1             EBS-Only
t3.small          2       2             EBS-Only
t3.medium         2       4             EBS-Only
t3.large          2       8             EBS-Only
t3.xlarge         4       16            EBS-Only
t3.2xlarge        8       32            EBS-Only

in general type, higher generation are more powerful provide value for the price
its also important to note that network bandwidth is also tied to the size of the amazon EC2 instance. if you will run jobs that will be very network-intensive, you might be required to increase the instance specifications to meet your need.

TODO    Select Instance Type: Based on use case
instance types vary in several ways, including CPU type, CPU or core count, storage type, storage amount, memory amount, and network performance. 

* General purpose
a1, m4, m5, t2, t3
Broad
* Compute Optimized
c4, c5
High Performance
* Memory Optimized
r4, r5, x1, z1
In-memory databases
* Accelerated computing 
f1, g3, g4, p2, p3
Machine Learning
* Storage Optimized
d2, h1, i3
Distributife file system

* => t3 instances are general purpose instances, that provide a baseline of CPU performance with the ability to burst above the baseline. Use case for these type of instance including web applications, development environments, code repositories, microservices, test, and staging environment, and many more.

* => C5 instances are optimized for compute intensive workloads, and deliver high performance at low price per compute ratio. Use case include scientific modeling, batch processing, ad serving, high scalable mutiplayer games, and video encoding.

* => R5 instances are optimized for memory intensive applications. use cases including high performance databases, data mining and data analysis, in memory databases, real-time processed of unstructured big data, Apache Spark clusters, and other enterprice applications. 

TODO    Instance types: Networking features
each instance type provides a documented network performance level. https://aws.amazon.com/id/ec2/instance-types/

* to maximize networking and bandwidth performance of your instances type:
  * if you have interdependent instances, launch them into a cluster placement group.
  * Enable enchanced networking.
* enchanced networking types are supported on most instance types.
  * many instances types also enable you to configure enchanced networking to get significantly higher packet per second performance lower network jitter, and lower latencies.
    * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#instance-networking-storage
* Enhanced networking types-
  * elastic network adapter (ENA): Supports network speeds of up to 100 Gbps
  * Intel 82599 Virtual function interface: Supports network speeds of up to 10 Gbps

* if you want to specify specific placement criteria, you can use placement groups to influence the placement of a group of interdependent instances to meet the needs of your workload. For example, you might specify that three instances should all be deployed in the same availability zones to ensure lower network latency and higher network throughput between instances. https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html


*/