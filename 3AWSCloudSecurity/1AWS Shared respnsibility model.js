/*
! AWS Share Responsibility Model

Customer => responsibility for security in the cloud
1. client-side data encription & data integrity authentication
1. server-side encription(file system and/or data)
1. networking traffic protection (encryption, integrity, identity)

2. operation system, network & firewall configuration

3. platform, applications, idenity & access management

AWS => responsibility for security of the cloud
software
1. compute, storage, database, networking
hardware/aws flobal infrastructure
1. regions, availability zones, edge location

*Security and compliance are a shared responsibility between AWS and the customer. This shared responsibility model is designed to help relieve the customer’s operational burden. At the same time, to provide the flexibility and customer control that enables the deployment of customer solutions on AWS, the customer remains responsible for some aspects of the overall security. The differentiation of who is responsible for what is commonly referred to as security “of” the cloudversus security “in” the cloud

*AWS operates, manages, and controls the components from the software virtualization layer down to the physical security of the facilities where AWS services operate.AWS is responsiblefor protecting the infrastructure that runs all the services thatare offered in the AWS Cloud. This infrastructure is composed of the hardware, software, networking, and facilities that run the AWS Cloud services

*The customer is responsiblefor the encryption of data at rest and data in transit. The customer should also ensure that the network is configured for security and that security credentials and logins are managed safely. Additionally, the customer is responsible for the configuration of security groups and the configuration of the operating system that run on compute instances that they launch (including updates and security patches).

? AWS Responsibility: Security of the cloud
AWS responsibilities:
* physical security of data centers
  * controllerd, need-based access
* Hardware and software infrastructure
  * storage decommisioning, host operating system(OS) access logging, and auditing
* network infrastructure
  * intrusion detection
* virtualization infrastructure
  * instance isolation

*it means that AWS is responsible for protecting the global infrastructure that runs all the services that are offered in the AWS Cloud. The global infrastructure includes AWS Regions, Availability Zones, and edge locations.

asw is responsible for the physical infrastructure that hosts your resources, including :
*Physical security of data centers with controlled, need-based access; located in nondescript facilities, with 24/7 security guards;two-factor authentication; access logging and review; video surveillance; and disk degaussing and destruction.

*Hardware infrastructure,such as servers, storage devices, and other appliances that AWS relies on

*Software infrastructure,which hosts operating systems, service applications, and virtualization software

*Network infrastructure, such asrouters, switches, load balancers, firewalls, and cabling. AWS also continuously monitors the network at external boundaries, secures access points, and provides redundant infrastructure with intrusion detection.

* =>>Protecting this infrastructure is the top priority for AWS. While you cannot visit AWS data centers or offices to see this protection firsthand, Amazon provides several reports from third-party auditors who have verified our compliance with a variety of computer security standards and regulations.

? Customer responsibility: Security in the cloud
Customer responsibilities:
* Amazon Elastic Compute Cloud (Amazon EC2) instance operating system
  * Including patching, maintenance
* Applications
  *Passwords, role-based access, etc.
* Security group configuration
* OS or host-based firewalls
  * Including intrusion detection or prevention systems
* Networkconfigurations
* Account management
  *Login and permission settings for each user

* Customer are responsible for security of everything they put in the cloud

* What content they choose to store on AWS•Which AWS services are used with the content
* In what country that content is stored
* The format and structure of that content and whether it is masked, anonymized, or encrypted
* Who has access to that content and how those access rights are granted, managed, and revoked

? Service characteristics and security responsibility
Infrastructure as a service (IaaS) 
* Customer has more flexibility over configuring networking and storage settings
* Customer is responsible for managing more aspects of the security 
* Customer configures the access controls 
Platform as a service (PaaS) 
* Customer does not need to manage the underlying infrastructure
* AWS handles the operating system, database patching, firewall configuration, and disaster recovery
* Customer can focus on managing code or data
Software as a service(SaaS)
* Software is centrally hosted
* licensed on a subcription model or pay-as-you-go basis
* services are typically accessed via web browser, mobile app, or application programming interface(API)
* Customers do not need to manage the infrastructure that supports the service

* Infrastructure as a service (IaaS) refers to services that provide basic building blocks for cloud IT, typically including access to configure networking, computers (virtual or on dedicated hardware), and data storage space. Cloud services that can be characterized as IaaS provide the customer with the highest level of flexibility and management controlover IT resources.IaaS services are most similar to existing on-premises computing resources that many IT departments are familiar with today

* Platform as a service (PaaS) refers to services that remove the need for the customer to manage the underlying infrastructure (hardware, operating systems, etc.). PaaS services enable the customer to focus entirely on deploying and managing applications. Customers don’t need to worry about resource procurement, capacity planning, software maintenance, or patching.

*Software as a service (SaaS) refers to services that provide centrally hosted software that is typically accessible via a web browser, mobile app, or applicationprogramming interface (API). The licensing model for SaaS offerings is typically subscription or pay as you go. With SaaS offerings, customers do not need to manage the infrastructure that supports the service. Some AWS services—such as AWS Trusted Advisor, AWS Shield, andAmazon Chime—could be categorized as SaaS offerings, given their characteristics.

*AWS Trusted Advisor is an online tool that analyzes your AWS environment and provides real-time guidance and recommendations to help you provision your resources by following AWS best practices. The Trusted Advisor service is offered as part of your AWS Support plan. Some of the Trusted Advisor features are free to all accounts, but Business Support and Enterprise Support customers have access to the full set of Trusted Advisor checks and recommendations.

*AWS Shield is a managed distributed denial of service (DDoS) protection service that safeguards applications running on AWS.

* Amazon Chime is a communications service that enables you to meet, chat, and place business calls inside and outside your organization, all using a single application.It is a pay-as-you-go communications service with no upfront fees, commitments, or long-term contracts.

Example services managed by the customer
* amazon Ec2,
* amazon Elastic block store (EBS)
* Amazon Virtual Private Cloud(VPC)

Example service managed by AWS
* AWS lambda
* Amazon Relational database service(RDS)
* AWS Elastic beanstalk
SaaS example
* AWS Trusted Advisor
* AWS shiled 
* Amazon Chime

*AWS services such as AWS Lambda and Amazon RDS can be categorized as PaaS because AWS operates the infrastructure layer, the operating system, and platforms.Customers onlyneed toaccess the endpoints to store and retrieve data. With PaaS services, customers are responsible for managing their data, classifying their assets, and applying the appropriate permissions


*/