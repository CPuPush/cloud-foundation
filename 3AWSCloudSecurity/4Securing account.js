/*
! Securing multiple accounts
? AWS Organizations
* AWS Organizations enables you to consolidate multiple AWS accounts so that you centrally manage them. AWS organizations was first mentioned in consolidated billing.

* Security features of AWS Organizations:
  * Group AWS accounts into organizational units (OUs) and attach different access policies to each OU
  * Integration and support for IAM
    Permission to a user are the intersection of what is allowed by AWS Organizations and what is granteed by IAM in that account 
  * use service control policies to establish control over the AWS services and API actions that each AWS account can access.

? AWS Organizations:Service control policies
* Service Control Policies (SCPs) offer centralized control over accounts.
  Limit permissions that are available in an account that is part of an organization.

* ensures that accounts comply with access control guidelines.

* SCPs are similar to IAM permissions policies - 
  They use similar syntax
  However, an SCP never grants permissions.
  instead SCPs specify the maximum permissions for an organization

SCP never grant permissions, instead, SCP are JSON syntax policies that specify the maximum permissions for an organization or OU.

Attaching a service control policy to the organization root or an OU defines a safeguard for the actions that accounts in that organization root or organization unit can actually do. however, it is not a substiture for well-managed identity and Access Management configurations within each account. You must still attach identity and access management policies to users and roles in your organization's accounts to actually grant permissions to use them.

? AWS Key management service (AWS KMS)
* is a service that enables you to create and manage encryption keys, and to control the use of encryption across a wide range of AWS services and your application.

features: 
  * enables you to create and manage encryption keys
  * enables you to control the use of encryption across AWS services and in your application
  * integrates with AWS CloudTrail to log all key usage.
  * Uses hardware security modules (HSMs) that are validated by federal information processing standards (FIPS) 140-2 to protect keys.

?Amazon Cognito
* is solutions to control access to AWS resources from your application. You can define roles and map users to different roles, so your application can access only the items that are authorized for each user. Amazon cognito uses common identity management standards, such as the security assertion markup language, or SAML, version 2.0

features: 
  * Adds users sign-up, sign-in, and access control to your web and mobile applications.
  * Scales to millions of users.
  * support sign-in with social identity providers, such as Facebook, Google, and Amazon; and enterprise identity providesm such as Microsoft Active directory via Security Accestion Markup Language (SAML) 2.0.

? AWS Shield
* is managed ditributed denial of service attack protection service that safeguards applications that run on AWS. 

features: 
  * Is managed disttributed denial of service(DOoS) protection service
  * Safeguards application running on AWS
  * provides always-on detection and automatic inline mitigations.
  * AWS Shield Standard enabled for at no addtional cost. AWS Shield advanced is an option paid service.
* use it to minimize applicatio n downtime and latency.


* AWS shield advanced provides additional protection against more sophisticated and larger attacks for your applicaitons that run on Amazon EC2 instances, Elastic load balancers, Amazon CloudFront, Amazon global accelerator and Amazon Route 53
*/