/*
! VPC Networking

? Internet Gateway
* An Internet gateway is a scalable, redundant and highly available VPC component that allows communication between instance in your VPC and the internet. An internet gateway serves two puposes: to provide a target in your VPC routes tables for intenet-routable traffic, and to perform network address translation for instances that were assigned public IPv4 addresses.

* To make a subnet public, you attach an intenet gateway to your VPC and add a route to the route table to send non-local traffic through the internet gateway to the internet(0.0.0.0/0)

? Network Address Transaltion (NAT) gateway
* NAT gateway enables intstance in a private subnet to connect to the internet or other AWS Services, but prevents the internet from initiating a connection with those instance. 
* to create a NAT gateway, you must specify the public subnet in which the NAT gateway should reside. You must also specify an Elastic IP address to associate with the NAT gateway when you create it. After you createa NAT gateway, you must update the route table thatis associated with one or more of your private subnets to point internet-bound traffic to the NAT gateway. Thus, instances in your private subnets can communicate with the internet.

*You can also use a NAT instance in a public subnet in your VPC instead of a NAT gateway. However, a NAT gateway is a managed NAT service that provides better availability, higher bandwidth, and less administrative effort. For common use cases, AWS recommends that you use a NAT gateway instead of a NAT instance. 

? VPC Sharing
* VPC sharing enables customers to share subnets with other AWS accounts in the same organization in AWS Organizations. VPC sharing enables multiple AWS accounts to create their application resources—such as Amazon EC2 instances, Amazon Relational Database Service (Amazon RDS) databases, Amazon Redshift clusters, and AWS Lambda functions—into shared, centrally managed VPCs

* After a subnet is shared, the participants can view, create, modify, and delete their application resources in the subnets that are shared with them. Participants cannot view, modify, or delete resources that belong to other participants or the VPC owner.

vpc sharing offers seceral benefits:
* Separation of duties –Centrally controlled VPC structure, routing, IP address allocation
* Ownership –Application owners continue to own resources, accounts, and security groups
* Security groups –VPC sharing participants can reference the security group IDs of each other
* Efficiencies –Higher density in subnets, efficient use of VPNs and AWS Direct Connect
* No hard limits –Hard limits can be avoided—for example, 50 virtual interfaces per AWS Direct Connect connection through simplified network architecture
* Optimized costs –Costs can be optimized through the reuse of NAT gateways, VPC interface endpoints, and intra-Availability Zone traffic

? VPC Peering
* A VPC peering connection is a networking connection between two VPCs that enables you to route traffic between them privately. Instances in either VPC can communicate with each other as if they are within the same network. You can create a VPC peering connection between your own VPCs, with a VPC in another AWS account, or with a VPC in a different AWS Region.

* When you set up the peering connection, you create rules in your route table to allow the VPCs to communicate with each other through the peering resource. 

restriction:
*IP address ranges cannot overlap. 
* Transitive peering is not supported. For example, suppose that you have three VPCs: A, B, and C. VPC A is connected to VPC B, and VPC A is connected to VPC C. However, VPC B is notconnected to VPC C implicitly. To connect VPC B to VPC C, you must explicitly establish that connectivity. 
*You can only have one peering resource between the same two VPCs

? AWS Site-to-Site VPN
By default, instances that you launch into a VPC cannot communicate with a remote network. To connect your VPC to your remote network (that is, create a virtual private network or VPN connection), you:
* Create a new virtual gateway device (called a virtual private network (VPN) gateway) and attach it to your VPC
* Define the configuration of the VPN device or the customer gateway. The customer gateway is not a device but an AWS resource that provides information to AWS about your VPN device.
* Create a custom route table to point corporate data center-bound traffic to the VPN gateway. You also must update security group rules
* Establish an AWS Site-to-Site VPN (Site-to-Site VPN) connection to link the two systems together.
* Configure routing to pass traffic through the connection

? AWS Direct COnnect
* One of the challenges of network communication is network performance. Performance can be negatively affected if your data center is located far away from your AWS Region. For such situations, AWS offers AWS Direct Connect, orDX. AWS Direct Connectenables you to establish a dedicated, private network connection between your network and one of the DX locations. This private connection can reduce your network costs, increase bandwidth throughput, and provide a more consistent network experience than internet-based connections. DX uses openstandard 802.1q virtual local area networks (VLANs).

? VPC Endpoint
* A VPC endpointis a virtual device that enables you to privately connect your VPC to supported AWS services and VPC endpoint services that are powered by AWS PrivateLink. Connection to these services does not require an internet gateway, NAT device, VPN connection, or AWS Direct Connect connection. Instances in your VPC do not require public IP addresses to communicate with resources in the service. Traffic between your VPC and the other service does not leave the Amazon network. 

There are two types of VPC endpoints:
* An interface VPC endpoint(interface endpoint) enables you to connect to services that are powered by AWS PrivateLink.
* Gateway endpoints: The use of gateway endpoints incurs no additional charge. Standard charges for data transfer and resource usage apply.

? AWS Transit Gateway
* You can configure your VPCs in several ways, and take advantage of numerous connectivity options and gateways. These options and gateways include AWS Direct Connect (via DX gateways), NAT gateways, internet gateways, VPC peering, etc. It is not uncommon to find AWS customers with hundreds of VPCs distributed across AWS accounts and Regions to serve multiple lines of business, teams, projects, and so forth. Things get more complex when customers start to set up connectivity between their VPCs. All the connectivity options are strictly point-to-point, so the number of VPC-to-VPC connections can grow quickly. As you grow the number of workloads that run on AWS, you must be able to scale your networks across multiple accounts and VPCs to keep up with the growth
* Though you can use VPC peering to connect pairs of VPCs, managing point-to-point connectivity across many VPCs without the ability to centrally manage the connectivity policies can be operationally costly and difficult. For on-premises connectivity, you must attach your VPN to each individual VPC. This solution can be time-consuming to build and difficult to manage when the number of VPCs grows into the hundreds

* To solve this problem, you can use AWS Transit Gateway to simplify your networking model. With AWS Transit Gateway, you only need to create and manage a single connection from the central gateway into each VPC, on-premises data center, or remote office across your network. A transit gateway acts as a hub that controls how traffic is routed among all the connected networks, which act like spokes. This hub-and-spoke model significantly simplifies management and reduces operational costs because each network only needs to connect to the transit gateway and not to every other network. Any new VPC is connected to the transit gateway, and is then automatically available to every other network that is connected to the transit gateway. This ease of connectivity makes it easier to scale your network as you grow

* internet gateway: Connects your VPC to the internet
* NAT gateway: Enables instances in a private subnet to connect to the internet
* VPC endpoint: Connects your VPC to supported AWS services
* VPC peering: Connects your VPC to other VPCs
* VPC sharing: Allows multiple AWS accounts to create their application resources into shared, centrally-managed Amazon VPCs
* AWS Site-to-Site VPN: Connects your VPC to remote networks
* AWS Direct Connect: Connects your VPC to a remote network by using a dedicated network connection
* AWS Transit Gateway: A hub-and-spoke connection alternative to VPC peering

*/