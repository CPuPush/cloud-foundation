/*
! Securing Data on AWS

? Encription of data at rest
* Data encryption is an essential tool to use when you want to protect your data. Encyption takes data that is legible and encodes it so that its ureadable to anyone who does not have access to the secret key that was used to encode it. Even if an attacker gains access to your data, they cannot make sense of it. AWS KMS can manage your secret keys.

Data at rest == Data stored physically (on disk or on tape) it is not moving.

* You can create encrypted file systems on AWS so that all your data and metadata is encrypted at rest by using the open standard advanced encryption, AES-256 encryption algorithm. 
* When you use AWS KMS, encryption and decruption are handled automatically and transparently so that you do not need to modify your applications.

You can encrypt data stored in any service that supperted by AWS KMS, including:
  * S3
  * EBS
  * Elastic File System (EFS)
  * RDS amnaged databases

? Encryption of Data in transit
* Data in transit refers to data that is moving across the network. Enctyption of data in transit is accomplished using Transport layer Security or TLS 1.2. THis is an open standard and uses the AES-256 cipher. TLS was formerly calles SSL.

* AWS Certificate Manager is a service that enables you to provision and manage the deployment of SSL and TLS certificates for use with your AWS services.

* Secure HTTP(HTTPS) creates a secure tunnel
  * uses TLS or SSL for the bidirectional exchange of data

* SSL or TLS certificate are used to secure network communications and establish the identity of websited over the internet, also you can establish the identity of resources on private networks. With AWS certificate manager, you can request and then deploy it on an AWS resource such as a load balancer or on Cloud Front Distributions.

example
EC2 <------------------------> Amazon EFS
    TLS encrypted data trafic

AWS storage Gateway(corporate data center) <---------------> AWS S3
                                            TLS or SSL encrypted

? Securing Amazon S3 Buckets and object
by default S3 can be accessed only be users who are explicitly granted access. It is essential to manage and control access to amazon S3 data. 

* newly created s3 bucket and object are private and protected by default.

* when use case require sharing data objects on Amazon s3-
  * it is essential to manage and control the data access.
* tools and options for controlling access to S3 data include -
  * Amazon s3 block public access feature: simple to use.
  * IAM policies: A good option when the user can authenticate using IAM.
  * Bucket policies => resource policies (same) are used when the user or system cannot authenticated by using identity and access management. Bucket policies can be configured to grant access across AWS Accounts or to grant public or anonymous access to amazon s3 data. If bucket policies are used,, the should be written carefully and tested fully. 
  * Access Control list (ACLs): A legacy access control mechanism
  * AWS trusted Advisor bucket permission check: A free feature

*/