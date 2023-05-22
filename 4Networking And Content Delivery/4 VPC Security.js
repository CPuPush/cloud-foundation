/*
! VPC Security
? Security Group
* A security groupacts as a virtual firewall for your instance, and it controls inbound and outbound traffic. Security groups act at the instance level, not the subnet level. Therefore, each instance in a subnet in your VPC can be assigned to a different set of security groups. a security group is a way for you to filter traffic to your instances

* Default security groups deny all inbound traffic and allow all outbound traffic.
* Security groups have rulesthat control the inbound and outbound traffic. When you create a security group, it has no inbound rules. Therefore, no inbound traffic that originates from another host to your instance is allowed until you add inbound rules to the security group. By default, a security group includes an outbound rule that allows all outbound traffic. You can remove the rule and add outbound rules that allow specific outbound traffic only. If your security group has no outbound rules, no outbound traffic that originates from your instance is allowed
* Security groups are stateful, which means that state information is kept even after a request is processed. Thus,ifyou send a request from your instance, the response traffic for that request is allowed to flow in regardless of inbound security group rules. Responses to allowed inbound traffic are allowed to flow out, regardless of outbound rules.

? Custom Security Group Examples
* You can specify allow rules, but not deny rules.
* All rules are evaluated before the decision to allow traffic

? Network Access Control lists
* A network access control list (network ACL)is an optional layer of security for your Amazon VPC. It acts as a firewall for controlling traffic in and out of one or more subnets.To add another layer of security to your VPC, you can set up network ACLs with rules that are similar to your security groups.

* Each subnet in your VPC must be associated with a network ACL. If you don't explicitly associate a subnet with a network ACL, the subnet is automatically associated with the default network ACL. You can associate a network ACL with multiple subnets; however, a subnet can be associated with only one network ACL at a time. When you associate a network ACL with a subnet, the previous association is removed.

* A network ACL has separate inbound and outbound rules, and each rule can either allow or deny traffic.

* A network ACL has separate inbound and outbound rules, and each rule can either allow or deny traffic. Your VPC automatically comes with a modifiable default network ACL. By default, it allows all inbound and outbound IPv4 traffic and, if applicable, IPv6 traffic. The table shows a default network ACL.

* Network ACLs are stateless, which means that no information about a request is maintained after a request is processed.

? Custom Network ACLs Examples
* Customnetwork ACLs denyall inbound and outbound trafficuntil you add rules
* You can specify both allow and deny rules.
* Rules are evaluated in number order, starting with the lowest number.

? Security group versus network ACL
here is a summary of the differences between security groups and netwrok ACLs:
* Security groupsact at the instance level, but network ACLs act at the subnet level.
* Security groups support allow rules only, but network ACLs support both allow and deny rules.
* Security groups are stateful, but network ACLs are stateless.
* For security groups, all rules are evaluated before the decision is made to allow traffic. For network ACLs, rules are evaluated in number order before the decision is made to allow traffic.
*/