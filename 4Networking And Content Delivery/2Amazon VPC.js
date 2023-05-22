/*
! Amazon VPC
* Amazon Virtual private cloud is a service that lets you provision a logically isolated section of AWS cloud. 
* gives you control over your virtual networking resourcesm including:
  * Selection of IP address range
  * Creation of subnets
  * Configuration of route tables and netwrok gateways
* Enables you to customize the network configuration for your VPC
* Enables you to use multiple layers of security

? VPCs And Subnets
* a VPC is a virtual network that is logically isolated from other virtual network is the AWS cloud. VPC belong to a single AWS Region and can span multiple availability zones.
after we create a VPC we can divide it into one or more subnets.
* subnet represents an isolated segment of your VPC with it's very own range of IP addresses. 
* subnet belong to a single availability zone. you can create subnets in different AZ for high availability
* subnet can be public or private, public subnets have direct access to the internet, but private subnets do not.

? IP Addressing
* IP addresses enable resources in your VPC to communicate with each other and resources over the internet as well. 
* When you create a VPC you assign an IPv4 CIDR block, meaning a range of private IPv4 addresses, to it. After you create a VPC, you cannot change the address range so it is important that you choose it carefully. 
* the largest IPv4 CIDR block you can choose is /16 which gives you total of 65536 possible addresses. the samllest IPv4 CIDR bock is /28, which gives you a total of 16 possible addressses for your VPC.
* You can associate an IPv6 CIDR block with your VPC and subnets and assign IPv6 addresses as well from that block to resources in your VPC. 
* IPv6 CIDR block have a different block size limit. the CIDR of block of subnet can be the same as a CIDR of block for a VPC. That means that a subnet can be as large as the entire VPC.
* CIDR block of subnets cannot overlap, you cannot have duplicate IP addresses in the same VPC. 

example: A VPC with an IPv4 CIDR block of 10.0.0.0/16 has 65536 total IP addresses. The VPC has four equal-size subnets. only 251 addresses are available for use by each subnet.

VPC:10.0.0.0/16
subnet 1: 10.0.0.0/24   251 Ip addresses
subnet 2: 10.0.2.0/24
subnet 3: 10.0.3.0/24
subnet 4: 10.0.1.0/24

IP addresses for CIDR block 10.0.0.0/24
10.0.0.0 => network address
10.0.2.1 => internal communication
10.0.0.2 => domain name system (DNS) resolution
10.0.0.3 => future use
10.0.0.255 => network broadcast address

* an IPv4 CIRD block of 10.0.0.0/24, this in theory gives you subnet 256 total IP addresses, but only 251 are actual available because five of them are reserved by AWS.

? Public IP address types

Public IPv4 address
•Manually assigned through an Elastic IP address
•Automatically assigned through the auto-assign public IP address settings at the subnet level
Elastic IP address
•Associated with an AWS account•Can be allocated and remapped anytime•Additional costs might apply
* when you create a VPC, every instance in that VPC gets a private IP address automatically. 
* an elastic IP address is a static and public IPv4 address that is designed for dynamic cloud computing. You can associate an elastic with any instance or network interface for any VPC in your account. With an elastic IP address, you can mask the failure of an instance by rapidly remaping the address to another instance in your VPC. 

* additional const might apply when you use elastic IP addresses, so it is important to release them when you no longer need them.

? Elastic Network Interface
*An elastic network interface is a virtual network interface that you can:
  * Attach to an instance
  * detach from the instance, and atttach to another instance to redirect network traffic.
* Its attributes follow when it is reattach to a new instance.
* Each instance in your VPC has a default network interface that is assigned a private IPv4 address from the IPv4 address range of your VPC

? Route tables and routes
* a route table contains a set of rules (or routes) that you can confugure to direct network traffic from your subnet.
* Each route specifies a destination and a target.
* By default, every route table contains a local route for communication within the VPC.
* each subnet must be associated with a route table(at most one)

? A VPC is logically isolated section of the AWS Cloud
? A VPC belongs to one region and requeires a CIDR block
? A VPC is subdivided into subnets
? A subnet belongs to one AZ and requires a CIDR block
? Route tables control traffic for a subnet
? Routes tables have a built-in local route
? You can additional routes to the table
? The local route cannot be deleted.
*/


/*
! adding from LAB

* an internet gateway is a VPC resource that allows communication between EC2 instances in your VPC and internet

* The lab-subnet-public1-us-east-1a public subnet has a CIDR of 10.0.0.0/24, which means that it contains all IP addresses starting with 10.0.0.x. The fact the route table associated with this public subnet routes 0.0.0.0/0 network traffic to the internet gateway is what makes it a public subnet.

* A NAT Gateway, is a VPC resource used to provide internet connectivity to any EC2 instances running in private subnets in the VPC without those EC2 instances needing to have a direct connection to the internet gateway.

* The  lab-subnet-private1-us-east-1a private subnet has a CIDR of 10.0.1.0/24, which means that it contains all IP addresses starting with 10.0.1.x.

* Having subnets in multiple Availability Zones within a VPC is useful for deploying solutions that provide High Availability. 

* A route table contains a set of rules, called routes, that are used to determine where network traffic is directed. Each subnet in a VPC must be associated with a route table; the route table controls routing for the subnet.

* Note that Destination 0.0.0.0/0 is set to Target nat-xxxxxxxx. This means that traffic destined for the internet (0.0.0.0/0) will be sent to the NAT Gateway. The NAT Gateway will then forward the traffic to the internet.

security group
* In this task, you will create a VPC security group, which acts as a virtual firewall. When you launch an instance, you associate one or more security groups with the instance. You can add rules to each security group that allow traffic to or from its associated instances.

* In the Configure storage section, keep the default settings.
? Note: The default settings specify that the root volume of the instance, which will host the Amazon Linux guest operating system that you specified earlier, will run on a general purpose SSD (gp3) hard drive that is 8 GiB in size. You could alternatively add more storage volumes, however that is not needed in this lab.

#!/bin/bash
# Install Apache Web Server and PHP
dnf install -y httpd wget php mariadb105-server
# Download Lab files
wget https://aws-tc-largeobjects.s3.us-west-2.amazonaws.com/CUR-TF-100-ACCLFO-2/2-lab2-vpc/s3/lab-app.zip
unzip lab-app.zip -d /var/www/html/
# Turn on web server
chkconfig httpd on
service httpd start

* This script will run with root user permissions on the guest OS of the instance. It will run automatically when the instance launches for the first time. The script installs a web server, a database, and PHP libraries, and then it downloads and installs a PHP web application on the web server.

Todo => ketika kita menambahkan subnet baru pada availability zone berbeda contohnya, kita belum harus membuat ke route table supaya bisa terhubung ke internet, whether the subnet connected to 0.0.0.0 or to NAT gateway. To do that, we must go to route tables panels, and edit subnet association, but before that, confirm that we check the right route table name. example lab-rtb-private, or lab-rtb-public. the 2 route table has created when create vpc. 

VPC ID:  lab-vpc (select from the menu).
Subnet name: lab-subnet-public2
Availability Zone: Select the second Availability Zone (for example, us-east-1b)
IPv4 CIDR block: 10.0.2.0/24
*=> The subnet will have all IP addresses starting with 10.0.2.x.

*/

/*
kuis
what happens when you use amazon VPC to create a new VPC?
a. three subnets are created by defaulst: one for each availability zone
b. a main route table is created by default
c. an internet gateway is created by default.
d. an internet gateway is created by default
e. three subnets are created by default in one availability zone

b


*/