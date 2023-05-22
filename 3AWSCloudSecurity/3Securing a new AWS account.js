/*
! Account root user access VS IAM Access
has full access to all resources in the account, AWS strongly recommends that you do not user this account for day to day interaction,
instead AWS recomends that you use Identity and Access Management (IAM) to create users, assign permissions to these users, 

? Account root user
* privileges cannot be controlled
* full access to all resources

? IAM 
* integreates with other AWS services
* identity federation
* secure access for application
* granular permissions

example action that can only be done with the account root users :
* update the account root user password
* change the aws support plan
* restore an IAM user's permissions
* change account settings (for example contact information, allowed regions)

! Securing a new AWS account: Account root user
* stop using the account root user as soon as possible
  * the account root user has urestricted access to all your resources.

* to stop using the account root user:
  1. while you are logged in as the account root user, create an IAM user for yourself. save the access keys if needed.
  2. Create an IAM group give it full administrator permissions, and add the IAM user to the group
  3. disable and remove your account root user access keys, if they exist.
  4. enable a password policy for users
  5. sign in with your new IAM user credentials
  6. store your account root user credentials in a secure place

! securing using MFA
* enable multi-factor authentication (MFA)
  * requeire MFA for your accout root user and for all IAM users.
  * you can also use MFA to control access to AWS service APIs
* option for retrieving the MFA token 
  * virtual MFA-compliant applications:
    * google authenticator
    * authy authenticator (windows phone app)
  * U2F security key devices:
    * for example, yubikey
  * hardware MFA options:
    * key fob or display card offered by gemalto 

! AWS CloudTrail
* user AWS CloudTrail
  * cloudTrail tracks user activity on your account.
    * logs all API requests to recources in all supported services yourr account.
  * basic AWS cloudTrail event history is enabled by default and its free
    * it contains all management event data on latest 90 days of account activity.
  * to access CloudTrail
    1. login to the AWS management Console and choose the cloudTrail service
    2. click eevent history to view, filter, and search the last 90 days of events.
  * to enable logs beyond 90 days and enable specified event alerting, create a trail.
    1. from the cloudTrail console trails page, click create trail
    2. give it a name, apply it to all regions, and create a new amazon s3 bucket for log storage. 
    3. configure access retrictions on the s3 bucket

! enable billing reports
provide information about your use of aws resources and estimateed costs for that use
AWS delivers the reports to an Amazon s3 bucket that you specify
  reports is updated at least once perday
the AWS cost and usage reports tracks your AWS usage and provides estimated charges associated with your AWS account, either by the hour or by the day.
*/