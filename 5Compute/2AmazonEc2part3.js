/*
! Amazon EC2 Con't

? 7. Add Tags
* a tag is a label that you can assign to an AWS resource.
  * consist of a key and an optional value
* tagging is how you can attach metadata to an EC2 instance. (metadata is ringkasan singkat)
* potential benefits of tagging- filltering, automation, cost allocation, and access control
* Tags enable you to categorize AWS resources, such as EC2 instances, in different ways
https://d1.awsstatic.com/whitepapers/aws-tagging-best-practices.pdf
ex
key     value
name    WebServer1

? 8. Security Group Settings
* Create rulesthat specify the sourceand which portsthat network communications can use.     
  * Specify the portnumber and the protocol, such as Transmission Control Protocol (TCP), User Datagram Protocol (UDP), or Internet Control Message Protocol (ICMP).
  * Specify the source(for example, an IP address or another security group) that is allowed to use the rule

=>
* security group acts as a virtual firewall that controls network traffic for one or more instances. When you launch an instance, you can specify one or more security groups; otherwise, the default security group is used.
* You can add rulesto each security group. Rules allow traffic to or from its associated instances.
* When you launch an instance in a virtual private cloud (VPC), you must either create a new security group or use one that already exists in that VPC.  After you launch an instance, you can change its security groups.

* When you define a rule, you can specify the allowable source of the network communication (inbound rules) or destination (outbound rules). The sourcecan be an IP address, an IP address range, another security group, a gateway VPC endpoint, or anywhere (which means that all sources will be allowed).

*By default, a security group includes an outbound rule that allows all outboundtraffic. You can remove the ruleand add outbound rules that only allow specific outbound traffic. If your security group has no outbound rules, no outboundtraffic that originates from your instance is allowed.

Example rule:
Type      Protocol    Port Range    Source
SSH       TCP         22            MyIp 72.21.198.67/32

* In the example rule, the rule allows Secure Shell (SSH) traffic over Transmission Control Protocol (TCP) port 22 if the source of the request is My IP. The My IP IP address is calculated by determining what IP address you are currently connected to the AWS Cloud from when you define the rule.
* Network access control lists (network ACLs) can also be used are firewalls to protect subnets in a VPC.

? 9. Identity or create the key pair
* At instance launch, you specify an existing key pair or create a new key pair.
* a key pair consists of-
  * A public key that AWS Stores
  * A private key file that you store
* It enables secure connection to the intsnce
* for WIndows AMIs-
  * use the private key to obtain the administrator password that you need to log in to your instance.
* For Linux AMIs-
  * Use the private key to use SSH to securely connect to your instance.

=> Amazon EC2 uses public–key cryptography to encrypt and decrypt login information. The technology uses a public key to encrypt a piece of data, and then the recipient uses the private key to decrypt the data. The public and private keys are known as akey pair. Public-key cryptography enables you to securely access your instances by using a private key instead of a password

When you launch an instance, you specify a key pair. You can specify an existing key pair or a new key pair that you create at launch. If you create a new key pair, download it and save it in a safe location. This opportunity is the only chance you get to save the private key file

To connect to a Windowsinstance, use the private key to obtain the administrator password, and then log in to the EC2 instance's Windows Desktop by using Remote Desktop Protocol (RDP). To establish an SSH connection from a Windows machine to an Amazon EC2 instance, you can use a tool such as PuTTY, which will require the same private key.

With Linuxinstances, at boot time, the public key content is placed on the instance. An entry is created in within~/.ssh/authorized_keys. To log in to your Linux instance (for example, by using SSH), you must provide the private key when you establish the connection.

? Another Option: Launch an EC2 instnace with the AWS Command Line Interface
* EC2 instances can also be created programmatically
example command:
aws ec2 run-instances \
--image-id ami-1a2b3c4d \ =>This parameter is followed by an AMI ID. All AMIs have a unique AMI ID
--count 1 \
--instance-type c3.large \
--key-name MyKeyPair \
--security-groups MySecurityGroup \
--region us-east-1

this command assume that the key pair and security group already exist

have permission to run the command

? Consider using an Elastic IP address
* Rebootingan instance will notchange any IP addresses or DNS hostnames
* When an instance is stoppedand then startedagain –
  * The publicIPv4 address and externalDNS hostname will change.
  * The privateIPv4 address and internal DNS hostname do notchange
* If you require a persistent public IP address –
  * Associate an Elastic IP address with the instance
* Elastic IP address characteristics –
  * Can be associated with instances in the Region as needed.
  * Remains allocated to your account until you choose to release it.

* => A public IP addressis an IPv4 address that is reachable from the internet. Each instance that receives a public IP address is also given an external DNS hostname. For example, if the public IP address assigned to the instance is 203.0.113.25, then the external DNS hostname might beec2-203-0-113-25.compute-1.amazonaws.com

? EC2 instance metadata
Instance metadatais data about your instance
You can view it while you are connected to the instance. To access it in a browser, go to thefollowing URL: http://169.254.169.254/latest/meta-data/. The data can also be read programmatically, such as from a terminal window thathas the cURL utility.In the terminal window,run curl http://169.254.169.254/latest/meta-data/to retrieve it. The IP address 169.254.169.254is a link-local address and it is valid only from the instance.

Instance metadata provides much of the same information about the running instance that you can find in the AWS Management Console. For example, you can discover the public IP address, private IP address, public hostname, instance ID, security groups, Region, Availability Zone, and more. 

? Amazon CloudWatch for monitoring
Use Amazon CloudWatch to monitor EC2 instances
  * Provides near-real-time metrics
  * Provides charts in the Amazon EC2 console Monitoringtab that you can view
  * Maintains 15 months of historical data
Basic monitoring
  * Default, no additional cost
  * Metric data sent to CloudWatch every 5 minutes\
Detailed monitoring
  * Fixed monthly rate for seven pre-selected metrics 
  * Metric data delivered every 1 minute
  * 
! https://aws-tc-largeobjects.s3-us-west-2.amazonaws.com/ILT-TF-100-ACFNDS-20-EN/Module_6_EC2+v2.0.mp4
*/