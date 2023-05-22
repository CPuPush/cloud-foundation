/*
After completing this module, you should be able to:
  * Indicate how to distribute traffic across Amazon Elastic Compute Cloud (Amazon EC2) instances by using Elastic Load Balancing
  * Identify how Amazon CloudWatch enables you to monitor AWS resources and applications in real time
  * Explain how Amazon EC2 Auto Scaling launches and releases servers in response to workload changes
  * Perform scaling and load balancing tasks to improve an architecture

! Elastic Load Balancing
  * Distributes incoming application or network traffic across multiple targets in a single Availability Zone or across multiple Availability Zones
  * Scales your load balancer as traffic to your application changes over time.

* => Modern high-traffic websites must serve hundreds of thousands—if not millions—of concurrent requests from users or clients, and then return the correct text, images, video, or application data in a fast and reliable manner. Additional servers are generally required to meet these high volumes.

* Elastic Load Balancing is an AWS service that distributes incoming application or network traffic across multiple targets—such as Amazon Elastic Compute Cloud (Amazon EC2) instances, containers, internet protocol (IP) addresses, and Lambda functions—in a single Availability Zone or across multiple Availability Zones. Elastic Load Balancing scales your load balancer as traffic to your application changes over time. It can automatically scale to most workloads.

? Types of load balancers
Application Load balancer
  * load balancing of HTTP and HTTPS traffic
  * Routes traffic to targets based on content of request
  * provides advanced request routing targeted at the delivery of modern application architectures, including microservices and container
  * Operates at the application layer (OSI model layer 7)
Network Load balancer
  * Load balancing of TCP, UDP, and TLS traffic where extreme performance is required
  * Routes traffic to targets based on IP protocol data
  * Can handle millions of requests per second while maintaining ultra-low latencies
  * Is optimized to handle sudden and volatile traffic patterns
  * Operates at the transport layer (OSI model layer 4)
Classic Load Balancer(Previous Generation)
  * Load Balancing of HTTP, HTTPS, TCP, and SSL traffic
  * load balancing across multiple EC2 instances
  * operates at both the application and transport layer

? How Elastic Load balancing workd
client

AZ1-load balancer => listener => target
AZ2-load balancer => listener => target, target, target
  * with application load balancers and network load balancers, you register targets in target group, and route traffic to the target groups.
  * with classic load balancers, you register instances with the load balancer.

* => A load balancer accepts incoming traffic from clients and routes requests to its registered targets (such as EC2 instances) in one or more Availability Zones.

* You configure your load balancer to accept incoming traffic by specifying one or more listeners. A listener is a process that checks for connection requests.  It is configured with a protocol and port number for connections from clients to the load balancer. Similarly, it is configured with a protocol and port number for connections from the load balancer to the targets.

* You can also configure your load balancer to perform health checks, which are used to monitor the health of the registered targets so that the load balancer only sends requests to the healthy instances. When the load balancer detects an unhealthy target, it stops routing traffic to that target. It then resumes routing traffic to that target when it detects that the target is healthy again.

* There is a key difference in how the load balancer types are configured. With Application Load Balancers and Network Load Balancers, you register targets in target groups, and route traffic to the target groups. With Classic Load Balancers, you register instances with the load balancer.

? Elastic Load Balancing use cases
  * Highly available and fault-tolerant applications
Achieve high availability and better fault tolerance for your applications–Elastic Load Balancing balances traffic across healthy targets in multiple Availability Zones. If one or more of your targets in a single Availability Zone are unhealthy, Elastic Load Balancing will route traffic to healthy targets in other Availability Zones. After the targets return to a healthy state, load balancing will automatically resume traffic to them.
  * containerized applications
Automatically load balance your containerized applications–With enhanced container support for Elastic Load Balancing, you can now load balance across multiple ports on the same EC2 instance. You can also take advantage of deep integration with Amazon Elastic Container Service (Amazon ECS), which provides a fully-managed container offering. You only need to register a service with a load balancer, and Amazon ECS transparently manages the registration and de-registration of Docker containers. The load balancer automatically detects the port and dynamically reconfigures itself
  * Elasticity and scalibility
Automatically scale your applications–Elastic Load Balancing works with Amazon CloudWatch and Amazon EC2 Auto Scaling to help you scale your applications to the demands of your customers. Amazon CloudWatch alarms can trigger auto scaling for your EC2 instance fleet when the latency of any one of your EC2 instances exceeds a preconfigured threshold. Amazon EC2 Auto Scaling then provisions new instances and your applications will be ready to serve the next customer request. The load balancer will register the EC2 instance and direct traffic to it as needed. 
  * VPC
Use Elastic Load Balancing in your virtual private cloud (VPC)–You can use Elastic Load Balancing to create a public entry point into your VPC, or to route request traffic between tiers of your application within your VPC. You can assign security groups to your load balancer to control which ports are open to a list of allowed sources. Because Elastic Load Balancing works with your VPC, all your existing network access control lists (network ACLs) and routing tables continue to provide additional network controls. When you create a load balancer in your VPC, you can specify whether the load balancer is public (default) or internal. If you select internal, you do not need to have an internet gateway to reach the load balancer, and the private IP addresses of the load balancer will be used in the load balancer’s Domain Name System (DNS) record
  * Hybrid environtments
Enablehybrid load balancing–Elastic Load Balancing enables you to load balance across AWS and on-premises resources by using the same load balancer. For example, if you must distribute application traffic across both AWS and on-premises resources, you can register all the resources to the same target group and associate the target group with a load balancer.
  * invoke lambda functions over HTTPS(S)
Invoking Lambda functions over HTTP(S)–Elastic Load Balancing supports invoking Lambda functions to serve HTTP(S) requests. This enables users to access serverless applications from any HTTP client, including web browsers.


? Activity: Elastic Load Balancing
  * You must support traffic to a containerized application
application load balancer
  * You have extremely spiky and unpredictable TCP traffic
Network Load balancer
  * You need simple load balancing with multiple protocols
classic load balancer
  * You need to support a static or Elastic IP address, or an IP target outside a VPC
network load balancer
  * You need a load balancer that can handle millions of requests per second while maintaining low latencies.
network load balancer
  * You must support HTTPS requests.
application load balancer

? Load Balancer monitoring
  * Amazon CloudWatch metrics- Used to verify that the system is performing as expected and creates an alarm to initiate an action if a metric goes outside and acceptable range
  * Access logs-capture detailed information about request sent to your load balancer
  * AWS CloudTrail logs-capture the who, what, when, and where of API interactions in AWS Services.

*/

/*
spiky => tajam
*/