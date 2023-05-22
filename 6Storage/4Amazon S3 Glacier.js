/*
! Amazon S3 Glacier
* Amazon S3 Glacier is a secure, durable, and extremely low-cost cloud storage service for data archiving and long-term backup

? Amazon S3 Glacier review
Amazon S3 Glacier is a dataarchivingservicethat is designed for security, durability, and an extremelylowcost
  * Amazon S3 Glacier is designed to provide 11 9s of durability for objects.
  * It supports the encryption of data in transit and at rest through Secure Sockets Layer (SSL) or Transport Layer Security (TLS)
  * The Vault Lock feature enforces compliance through a policy.
  * Extremely low-cost design works well for long-term archiving
    * Provides three options for access to archives—expedited, standard, and bulk—retrieval times range from a few minutes to several hours.

* => When you use Amazon S3 Glacier to archive data, you can store your data at an extremely low cost (even in comparison to Amazon S3), but you cannot retrieve your data immediately when you want it. 

* Data that is stored in Amazon S3 Glacier can take several hours to retrieve, which is why it works well for archiving

There are three key Amazon S3 Glacier terms you should be familiar with:
  * Archive–Any object (such as a photo, video, file, or document) that you store in Amazon S3 Glacier. It is the base unit of storage in Amazon S3 Glacier. Each archive has its own unique ID and it can also have a description.
  * Vault–A container for storing archives. When you create a vault, you specify the vault name and the Region where you want to locate the vault.
  * Vault access policy –Determine who can and cannot access the data that is stored in the vault, and what operations users can and cannot perform. One vault access permissions policy can be created for each vault to manage access permissions for that vault. You can also use a vault lock policy to make sure that a vault cannot be altered. Each vault can have one vault access policy and one vault lock policy that are attached to it.

You have three options for retrieving data, each with varying access times and cost:
  * Expedited retrievals are typically made available within 1–5 minutes (highest cost).
  * Standardretrievals typically complete within 3–5 hours (less time than expedited, more time than bulk).
  * Bulkretrievals typically complete within 5–12 hours (lowest cost)

you might compare these options to choosing the cost for shipping a package by using the most economical method for your needs

? Amazon S3 Glacier
* Storage service for low-cost data archiving and long-term backup
* You can configure lifecycle archiving of Amazon S3 content to Amazon S3 Glacier
* Retrieval options-
  * Standard: 3-5 hours
  * Bulk: 5-12 hours
  * expedited:  1-5 minutes

amazon s3 bucket -- (archive after 30 days)->amazon s3 glacier archive -- deleted after 5 years-->🧺

? Amazon S3 Glacier use cases
* media asset archiving
* healthcare information archiving
* regulatory and compliance archiving
* scientific data archiving
* digital preservation
* magnetic tape replacement

? Using Amazon S3 Glacier
* restful web service
* java or .NET SDKs
* amazon s3 with lifecycle policies

* => To store and access data in Amazon S3 Glacier, you can use the AWS Management Console. However, only a few operations—such as creating and deleting vaults, and creating and managing archive policies—are available in the console.

* For almost all other operations and interactions with Amazon S3 Glacier, you must use either the Amazon S3 Glacier REST APIs, the AWS Java or .NET SDKs, or the AWS CLI.

* You can also use lifecycle policies to archive data into Amazon S3 Glacier. Next, you will learn about lifecycle policies.

? lifecycle policies
AmazonS3 lifecycle policiesenable you to delete or move objects based on age.

ex video.mp4
S3 standard -30 days->s3 standard-infrequent access- 60 days->s3 glacier-1year->delete

? Storage comparison
                  S3                S3 Glacier
data volume       no limit          no limit
average latency   ms                minutes-hours
item size         5 TB max          40TBmax
cost/gb/month     higher cost       lower cost
billed requests   PUT-GET           UPLOAD and retrieval
retrieval pricing per request       per request and per GB

? Server-side encryption
* Another important difference between Amazon S3and Amazon S3Glacier is how data is encrypted. Server-side encryption is focused on protecting data at rest. With both solutions, you can securely transfer your data over HTTPS. Any data that is archived in Amazon S3Glacier is encrypted by default. With Amazon S3, your application must initiate server-side encryption. You can accomplish server-side encryption in Amazon S3in several ways:
  * Server-side encryption with Amazon S3-managed encryption keys (SSE-S3) employs strong multi-factor encryption. Amazon S3encrypts each object with a unique key. As an additional safeguard, it encrypts the key with a main key that it regularly rotates. Amazon S3server-side encryption uses one of the strongest block ciphers available, 256-bit Advanced Encryption Standard (AES-256), to encrypt your data.

  * Using server-side encryption with Customer-provided Encryption Keys (SSE-C) enables you to set your own encryption keys. You include the encryption key as part of your request, and Amazon S3manages both encryption (as it writes to disks), and decryption (when you access your objects).

  * Using server-side encryption with AWS Key Management Service (AWS KMS) is a service that combines secure, highly available hardware and software to provide a key management system that is scaled for the cloud. AWS KMS uses Customer Master Keys (CMKs) to encrypt your Amazon S3objects. You use AWS KMS through the Encryption Keys section in the IAM console. You can also access AWS KMS through the API to centrally create encryption keys, define the policies that control how keys can be used, and audit key usage to prove that they are being used correctly. You can use these keys to protect your data in Amazon S3buckets.

? Security with amazon S3 glacier
* control access with IAM
* Amazon S3 Glacier encrypted your data with AWS-256
* Amazon S3 Glacier manages your keys for you
*/