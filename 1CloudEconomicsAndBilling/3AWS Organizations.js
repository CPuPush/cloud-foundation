/*
! AWS Organizations
Depending on the size of your business, sometimes it is easier to assign separate AWS accounts to each department of team. this will allow for spending of each group to have a clear and defined report about their use and expenses. we need service to ties all of these separate accounts together.

* we user aws organization to consolidate billing of multiple accounts. it is a free account management service.
OUs=> organizational units

? Key features and benefits
AWS organizations enables to do more than just consolidate account for billing.
* policy-based account management
* group based account management
* application programming interfaces (APIs) that automate account management
* consolidated billing

?Security with AWS Organizations
*Control access with AWS identity and access Management (IAM).
*IAM policies enable you to allow or deny acces to AWS services for users, groups, and roles
* service control policies (SCPs) enable you to allow or deny access to AWS services for individuals or group accounts in an organizational unit(UO)

?Organizations setup
* Create Organization => Create Organizational Units => Create service control policies => test restrictions

create organization as a primary account, we can also invite one AWS account to join your organization and create another account as a member account.

create UO and place the member account in those OUs

step theree is to create sercice control policies, which enable you to apply restrictions to what actions can be delegated to users and roles in the member account

step four is test the organization policies, sign in as a user for each of the roles such as UO1 OU2 and see how the service control policies impact account access.

alternatively, you can use the IAM policy simulator to test and troubleshoot IAM and resource-based policies that are attached to IAM user, groups, roles in your AWS account.

?Accessing AWS Organizations
AWS organizations can be managed through different interfaces 
*AWS Management COnsole => is a browser-base interface that you can use to manage your organization and AWS resources
*AWS command line interface (aws cli) tools => enable to issue commands at your systems command line to perform AWS organizations tasks. This method can be faster and more convenient than using the console.

*software development kits(SDKs) => to handle tasks such as cryptographucally signing requests, managing errors, and retrying request automatically. AWS SDK consists of libraries and more sample code for various programming languages such as java, python, NodeJS, .NET< iOS, and android

*HTTPS Query application programming interface (API) => gives you programmatic access to AWS organizations you can user the API to issue HTTPS requests directly to the service, when we use HTTPS API we must include code to digitally sign requests by using the credentials
*/