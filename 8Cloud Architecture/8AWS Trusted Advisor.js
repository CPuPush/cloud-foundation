/*
! AWS Trusted Advisor
* As you have learned so far, you can use the AWS Well-Architected Framework as you design your architectures to understand potential risks in your architecture, identify areas that need improvement, and drive architectural decisions.
* In this section, you will learn about AWS Trusted Advisor, which is a tool that you can use to review your AWS environment as soon as you start implementing your architectures

? AWS Trysted Advisor
* Online tool that provides real-time guidance to help you provision your resources following AWS best practices.
* Looks at your entire AWS environment and gives you real-time recommendations in 5 catevory
  * cost optimization
  * performance
  * security
  * fault tolerance
  * service limits

? Activity: Interpret AWS Trusted advisor recommendations
You have a friend who used AWS Trusted Advisor for the first time. She is trying to interpret its recommendations to improve her cloud environment and needs your help. This is her dashboard. While everything looks OK in the cost optimization and service limit categories, you notice that there are a few recommendations that you should review to help her improve her security, performance, and fault tolerance

success warning error
cost optimization
9 0 0

performance
9 1 0

security
13 2 2

fault tolerance
14 2 1

service limits
48 0 0

? Activity: Recomentdation #1
! MFA on Root Account

description:Checks the root account and warns if multi-factor authentication (MFA) is not enabled. For increased security, we recommend that you protect your account by using MFA, which requires a user to enter a unique authentication code from their MFA hardware or virtual device when interacting with the AWS console and associated websites

alert criteria: MFA is not enabled on the root account.

recomendation action: log in to your account and activate an MFA device

? Activity: Recommendation #2
TODO IAM Password Policy
Description: Checks the password policy for your account and warns when a password policy is not enabled, or if password content requirements have not been enabled. Password content requirements increase the overall security of your AWS environment by enforcing the creation of strong user passwords. When you create or change a password policy, the change is enforced immediately for new users but does not require existing users to change their passwords

Alert Criteria: A password policy is enabled, but at least one content requirement is not enabled.

Recommended Action: If some content requirements are not enabled, consider enabling them. If no password policy is enabled, create and configure one. See Setting an Account Password Policy for IAM Users

? Activity: Recommendation #3
! Security Groups –Unrestricted Access
Description: Checks security groups for rules that allow unrestricted access to a resource. Unrestricted access increases opportunities for malicious activity (hacking, denial-of-service attacks, loss of data).
Alert Criteria: A security group rule has a source IP address with a /0 suffix for ports other than 25, 80, or 443.
Recommended Action: Restrict access to only those IP addresses that require it. To restrict access to a specific IP address, set the suffix to /32 (for example, 192.0.2.10/32). Be sure to delete overly permissive rules after creating rules that are more restrictive. 

? Activity: Recommendation #4
! Amazon EBS snapshots
Description: Checks the age of the snapshots for your Amazon Elastic Block Store (Amazon EBS) volumes (available or in-use). Even though Amazon EBS volumes are replicated, failures can occur. Snapshots are persisted to Amazon Simple Storage Service (Amazon S3) for durable storage and point-in-time recovery.
Alert Criteria: Yellow: The most recent volume snapshot is between 7 and 30 days old.Red: The most recent volume snapshot is more than 30 days old.Red: The volume does not have a snapshot.
Recommended Action: Create weekly or monthly snapshots of your volumes

?Activity: Recommendation #5
TODO Amazon S3 Bucket Logging
Description: Checks the logging configuration of Amazon Simple Storage Service (Amazon S3) buckets. When server access logging is enabled, detailed access logs are delivered hourly to a bucket that you choose. An access log record contains details about each request, such as the request type, the resources specified in the request, and the time and date the request was processed. By default, bucket logging is not enabled; you should enable logging if you want to perform security audits or learn more about users and usage patterns
Alert Criteria: Yellow: The bucket does not have server access logging enabled.Yellow: The target bucket permissions do not include the owner account. Trusted Advisor cannot check it.
Recommended Action: Enable bucket logging for most buckets. If the target bucket permissions do not include the owner account and you want Trusted Advisor to check the logging status, add the owner account as a grantee.
*/

/*
interpret => menafsirkan
*/

/*
! KUIS
traceability is not one of the 4 areas of the performance efficiency pillar of the AWS well architected framework
*/