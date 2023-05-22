/*
! AWS Indentity and Access management (IAM)

•Use IAMto manage access to AWS resources
  *A resource is an entity in an AWS account that you can work with
  *Example resources; An Amazon EC2 instance or an Amazon S3 bucket
Example–Control who can terminate Amazon EC2 instances 
Define fine-grained access rights 
  * Whocan access the resource
  * Whichresources can be accessed and what can the user do to the resource
  * Howresources can be accessed 
IAM is a no-cost AWS account feature

*AWS Identity and Access Management (IAM) allows you to control access to compute, storage, database, and application services in the AWS Cloud. IAM can be used to handle authentication, and to specify and enforce authorization policies so that you can specify which users can access which services

*IAM is a tool that centrally manages access to launching, configuring, managing, and terminating resources in your AWS account. It provides granular control over access to resources, including the ability to specify exactly which API calls the user is authorized to make to each service. Whether you use the AWS Management Console, the AWS CLI, or the AWS software development kits (SDKs), every call to an AWS service is an API call.

*With IAM, you can manage whichresources can be accessed by who,and howtheseresourcescan be accessed. You can grant different permissions to different people for different resources

?IAM Essential Components
*IAM USER
A person or application that can authenticate with an AWS account.
*IAM Group
A collectionof IAM users that are granted identical authorization.
*IAM Policy
The document that defines which resources can be accessed and the level of access to each resource.
*IAM Role
Useful mechanism to granting temporary access to AWS services. a user can assume a role to access a service that is not normally available, The user assumes the role deals with the service as needed, and reverts back to its usual access. This is similar to the sudo command in linux operating systes, where a user can perform an administrative function that is not normally available to him.

?Authenticate as an IAM user to gain access
when you define an IAM user, you select what types of access the user is permitted to use.

Programatic access
  * authenticate using:
    *access key ID
    * secret access key
  * provides AWS cli and AWS SDK access
AWS Management Console Access
  * authenticate using:
    * 12-digit Account Id or alias
    * IAM user name
    * IAM password
  * if enablem multi-factor authentication (MFA) prompts for an authentication code.

*Authenticationis a basic computer security concept:a user or system must first prove their identity. 

*When you define an IAM user, you select what type of access the user is permitted to use to access AWS resources. You can assign two different types of access to users: programmatic access and AWS Management Console access. You can assign programmatic access only, console access only, or you can assign both types of access

*If you grant programmatic access, the IAM user will be required to present anaccess key IDanda secret access keywhen they make an AWS API call by using the AWS CLI, the AWS SDK, or some other development tool

* If you grant AWS Management Console access, the IAM user will be required to fill in the fields that appear in the browser login window. The user is prompted to provide either the 12-digit account ID or the corresponding account alias. The user must also enter their IAM user name and password. If multi-factor authentication (MFA) is enabled for the user, they will also be prompted for an authentication code.

? IAM MFA
* MFA Provides increased security
* in addition to username and password, MFA requires a unique authentication code to access AWS service.

*AWS servicesand resources can be accessed by using the AWS Management Console, the AWS CLI, or through SDKs and APIs. For increased security, werecommend enabling MFA

*With MFA, users and systems must provide an MFA token—in addition to the regular sign-in credentials—before they can access AWS services and resources.

* Options for generating the MFA authentication token include virtual MFA-compliant applications(such as Google Authenticator or Authy 2-Factor Authentication), U2F security key devices, and hardware MFA devices.

? Authorization: What actions are permitted
*Authorizationis the process of determining what permissionsa user, service or application should be granted. After a userhas been authenticated, they must be authorizedto access AWS services.
*By default, IAM users do not have permissions to access any resources or data in an AWS account. Instead, you must explicitly grant permissions to a user, group, or roleby creating apolicy,which is a document in JavaScript Object Notation (JSON) format.A policy lists permissionsthat allowor deny access to resources in the AWS account

? IAM : Authorization
*Assign permissions by creating an IAM policy.
* permissions determine which resources and operations are allowed:
  * All permissions are implicitly denied by default
  * if something is exlicitly denied, it is never allowed.

* => To assign permission to a user, group or role, you must create anIAM policy(or find an existing policy in the account). There are no default permissions. All actions in the account are denied to the user by default (implicit deny) unless those actions are explicitly allowed. Any actions that you do not explicitly allow are denied. Any actions that you explicitly deny are always denied

* The principle of least privilege is an important concept in computer security. It promotes that you grant only the minimal user privileges needed to the user, based on the needs of your users. When you create IAM policies, it is a best practice to follow this security advice of granting least privilege.

? IAM Policies => JSON
*An IAM policy is a document that defines permissions
  * enable fine-grained access control
* two types of policies - identity based and resource-base
*identity-based pilicies
  * attach a policy to any IAM entity
  * policies specify:
    * actions that may be performed by the entity
    * action that may not be performed by the entity
  * A single policy can be attached to multiple entities
  * A single entity can have multiples policies attached to it
* Resource-based policies
  * attached to a resource(such as an s3 bucket)

*An IAM policy is a formal statement of permissions that will be granted to an entity. Policies can be attached to any IAM entity. Entities include users, groups, roles, or resources. For example, you can attach a policy to AWS resources that will block all requests that do not come from an approved Internet Protocol (IP) address range. Policies specify what actions are allowed, which resources to allow the actions on, and what the effect will be when the user requests access to the resources.

*The order in which the policies are evaluated has no effect on the outcome of the evaluation. All policies are evaluated, and the result is always that the request is either allowed or denied. When there is a conflict, the most restrictive policy applies

*There are two types of IAM policies. Identity-based policies are permissions policies that you can attach to a principal (or identity) such as an IAM user, role, or group.

* Managed policies –Standalone identity-based policies that you can attach to multiple users, groups, and roles in your AWS account
* Inline policies –Policies that you create and manage, and that are embedded directly into a single user group or role

* Resource-based policies are JSON policy documents that you attach to a resource, such as an S3 bucket. These policies control what actions a specified principal can perform on that resource, and under what conditions

?Resources-based pilicies
*Identity-based policiesare attached to a user, group, or role
* Resource-based policiesare attached to a resource (notto a user, group or role)
* Characteristics of resource-based policies 
  – Specifies who has access to the resource and what actions they can perform on i
  - The policies are inlineonly, not managed
* Resource-based policies are supported only by some AWS services

? IAM Permissions
when IAM determines whether a permission is allowed, it first checks for the existence for any explicit denial policy. 

? IAM Groups 
* an IAM groups is a collection of IAM users
* a group is used to grant the same permissions to multiple users
  * permissions granted by attaching IAM policy or policies to the group
* A user can belong to multiple groups
* there is no default group
* groups cannot be nested

? IAM roles
* An IAM role is an IAM identity with specific permissions
* Similar to an IAM user
  * attach permissions policies to it => the identity can and cannot do in AWS
* Different form an IAM user
  * not uniquely associated with one person
  * intended to be assumable by person, application, or service
* role provides temporary security credentials

*/