/* 
! Amazon S3
* Amazon S3 is object storage that is built to store and retrieve any amount of data from anywhere: websites and mobile apps, corporate applications, and data from Internet of Things (IoT) sensors or device
* Amazon S3 is object-level storage, which means that if you want to change a part of a file, you must make the change and then re-upload the entire modified file. Amazon S3 stores data as objects within resources that are called buckets.

? Amazon s3 overview
* Amazon S3 is a managed cloud storage solution that is designed to scale seamlessly and provide 11 9s of durability.
* You can store virtually as many objects as you want in a bucket, and you can write, read, and delete objects in your bucket.
* Bucket names are universal and must beuniqueacross all existing bucket names in Amazon S3
* Objects can be up to 5 TB in size. By default, data in Amazon S3 is stored redundantly across multiple facilities and multiple devices in each facility
* The data that you store in Amazon S3 is not associated with any particular server, and you do not need manage any infrastructure yourself. You can put as many objects into Amazon S3 as you want. Amazon S3 holds trillions of objects and regularly peaks at millions of requests per second. 

* Objects can be almost any data file, such as images, videos, or server logs.ecause Amazon S3 supports objects as large as several terabytes in size, you can even store database snapshots as objects. Amazon S3 also provides low-latency access to the data over the internet by Hypertext Transfer Protocol (HTTP) or Secure HTTP (HTTPS), so you can retrieve data anytime from anywhere. You can also access Amazon S3 privately through a virtual private cloud (VPC) endpoint. You get fine-grained control over who can access your data by using AWS Identity and Access Management (IAM) policies, Amazon S3 bucket policies, and even per-object access control lists. 

* By default, none of your data is shared publicly. You can also encrypt your data in transit and choose to enable server-side encryption on your objects.
* You can access Amazon S3 through the web-based AWS Management Console; programmatically through the API and SDKs; or with third-party solutions, which use the API or the SDKs.
* Amazon S3 includes event notifications that enable you to set up automatic notifications when certain events occur, such as when an object is uploaded to a bucket or deleted from a specific bucket.
* Those notifications can be sent to you, or they can be used to trigger other processes, such as AWS Lambda functions.
* With storage class analysis, you can analyze storage access patterns and transition the right data to the right storage class.

? Amazon S3 Storage Classes
Amazon S3 offers a range of object-level storage classes that are designed for different use cases:
* Amazon S3 Standard => Amazon S3 Standard is designed for high durability, availability, and performance object storage for frequently accessed data. Because it delivers low latency and high throughput, Amazon S3 Standard is appropriate for a variety of use cases, including cloud applications, dynamic websites, content distribution, mobile and gaming applications, and big data analytics

* Amazon S3 intelligent-tiering => Amazon S3 Standard is designed for high durability, availability, and performance object storage for frequently accessed data. Because it delivers low latency and high throughput, Amazon S3 Standard is appropriate for a variety of use cases, including cloud applications, dynamic websites, content distribution, mobile and gaming applications, and big data analytics

* Amazon S3 Standard-Infrequent Access (Amazon S3 Standard-AI) => The Amazon S3 Standard-IA storage class is used for data that is accessed less frequently, but requires rapid access when needed. Amazon S3 Standard-IA is designed to provide the high durability, high throughput, and low latency of Amazon S3 Standard, with a low per-GB storage price and per-GB retrieval fee. This combination of low cost and high performance makes Amazon S3 Standard-IA good for long-term storage and backups, and as a data store for disaster recovery files.

* Amazon One Zone-Infrequent Access (Amazon S3 One Zone-AI) => Amazon S3 One Zone-IA is for data that is accessed less frequently, but requires rapid access when needed. Unlike other Amazon S3 storage classes, which store data in a minimum of three Availability Zones, Amazon S3 One Zone-IA stores data in a single Availability Zone and it costs less than Amazon S3 Standard-IA. Amazon S3 One Zone-IA works well for customers who want a lower-cost option for infrequently accessed data, but do not require the availability and resilience of Amazon S3 Standard or Amazon S3 Standard-IA. It is a good choice for storing secondary backup copies of on-premises data or easily re-creatable data. You can also use it as cost-effective storage for data that is replicated from another AWS Region by using Amazon S3 Cross-Region Replication

* Amazon S3 Glacier => Amazon S3 Glacier is a secure, durable, and low-cost storage class for data archiving. You can reliably store any amount of data at costs that are competitive with—or cheaper than—on-premises solutions. To keep costs low yet suitable for varying needs, Amazon S3 Glacier provides three retrieval options that range from a few minutes to hours. You can upload objects directly to Amazon S3 Glacier, or use Amazon S3 lifecycle policies to transfer data between any of the Amazon S3 storage classes for active data (Amazon S3 Standard, Amazon S3 Intelligent-Tiering, Amazon S3 Standard-IA, and Amazon S3 One Zone-IA) and Amazon S3 Glacier.

* Amazon S3 Glacier Deep Archive => Amazon S3 Glacier Deep Archive is the lowest-cost storage class for Amazon S3. It supports long-term retention and digital preservation for data that might be accessed once or twice in a year. It is designed for customers—particularly customers in highly regulated industries, such as financial services, healthcare, and public sectors—that retain datasets for 7–10 years (or more) to meet regulatory compliance requirements. Amazon S3 Glacier Deep Archive can also be used for backup and disaster recovery use cases. It is a cost-effective and easy-to-manage alternative to magnetic tape systems, whether these tape systems are on-premises libraries or off-premises services. Amazon S3 Glacier Deep Archive complements Amazon S3 Glacier, and it is also designed to provide 11 9s of durability. All objects that are stored in Amazon S3 Glacier Deep Archive are replicated and stored across at least three geographically dispersed Availability Zones, and these objects can be restored within 12 hours.
https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html.

? Amazon S3 Bucket URLs (two styles)

Amazon S3 - [Bucket-video.mp4]tokyo Region
Bucket path-style URL endpoint:
https://s3.ap-northeast-1.amazonaws.com/bucket-name
          Region Code                   Bucket Name
Bucket virtual hosted-style url endpoint
https://bucket-name.s3-ap.northeast-1.amazonaws.com
        bucket name   Region code

* => To use Amazon S3 effectively, you must understand a few simple concepts. First, Amazon S3 stores data inside buckets. Buckets are essentially the prefix for a set of files, and must be uniquely named across all of Amazon S3 globally. Buckets are logical containers for objects. You can have one or more buckets in your account. You can control access for each bucket—who can create, delete, and list objects in the bucket. You can also view access logs for the bucket and its objects, and choose the geographical region where Amazon S3 stores the bucket and its contents.

* To upload your data (such as photos, videos, or documents), create a bucket in an AWS Region, and then upload almost any number of objects to the bucket
* in the example, Amazon S3 was used to create a bucket in the Tokyo Region, which is identified within AWS formally by its Region code: ap-northeast-1.
* The URL for a bucket is structured like the examples. You can use two different URL styles to refer to buckets
* Amazon S3 refers to files as objects. As soon as you have a bucket, you can store almost any number of objects inside it. An object is composed of data and any metadata that describes that file, including a URL. To store an object in Amazon S3, you upload the file that you want to store to a bucket. An object is composed of data and any metadata that describes that file, including a URL. To store an object in Amazon S3, you upload the file that you want to store to a bucket.
* When you upload a file, you can set permissions on the data and any metadata.


? Data is redundantly stored in the region

[bucket-includ video.mp4] 
=>
facility 1    facility 2    acility 3
video.mp4     video.mp4     video.mp4

* => When you create a bucket in Amazon S3, it is associated with a specific AWS Region. When you store data in the bucket, it is redundantly stored across multiple AWS facilities within your selected Region. Amazon S3 is designed to durably store your data, even if there is concurrent data loss in two AWS facilities.

? Design for seamless scaling
* Amazon S3 automaticallu manages the sotrage behind your bucket while your data grows. You can get started immediatedly, and your data storage will grow with your application needs.
* Amazon s3 also scales to handle a high volume of request. You do not need to provision the storage or throughput, and you are billed only for what you use.

? Access the data anywhere
* Aws management console
* AWS commandline interface
* SDK

* => You can also access the data in your bucket directly by using REST-based endpoints. The endpoints support HTTP or HTTPS access. To support this type of URL-based access, Amazon S3 bucket names must be globally unique and Domain Name Server (DNS)-compliant. Also, object keys should use characters that are safe for URLs.

? common use cases
* storing application assets
* static web hosting
* backup and disaster recovery (DR)
* staging area for big data

you will now consider some use cases for Amazon S3:
* => As a location for any application data, Amazon S3 buckets provide a shared location for storing objects that any instances of your application can access-including applications on Amazon EC2 or even traditional servers.  This feature can be useful for user-generated media files, server logs, or other files that your application must store in a common location. Also, because the content can be fetched directly over the internet, you can offload serving that content from your application and enable clients to directly fetch the data from Amazon S3 themselves.
* For static web hosting, Amazon S3 buckets can serve the static contents of your website, including HTML, CSS, JavaScript, and other files. 
* The high durability of Amazon S3 makes it a good candidate for storing backups of your data. For greater availability and disaster recovery capability, Amazon S3 can even be configured to support cross-Region replication so that data in an Amazon S3 bucket in one Region can be automatically replicated to another Amazon S3 Region.

? Amazon S3 common scenarios
* Backup and storage
* application hosting
* media hosting
* software delivery

* => Backup and storage –Provide data backup and storage services for others
* Application hosting –Provide services that deploy, install, and manage web applications
* Media hosting –Build a redundant, scalable, and highly available infrastructure that hosts video, photo, or music uploads and downloads
* Software delivery –Host your software applications that customers can download

? Amazon S3 pricing
* pay only for what you use. include:
  * GBs per month
  * transfer out to other regions
  * put, copy, post, list, and GET request
* you dont pay for:
  * transfer In to Amazon S3
  * Transfer OUT from Amazon S3 to Amazon CloudFront or Amazon EC2 in the same region

To estimate Amazon S3 cost, consider the following:
* Storage class type-
  * standard storage is designed for:
    * 11 9s of durability
    * Four 9s of availability
  * s3 standarda-infrequent access (S-IA) is design for:
    * 11 9s of durability
    * 3 9s of availability
* Amount of Storage -
  * the number and size of object
* request-
  * the number and type of request (GET, PUT, COPY)
  * type of requests:
    * different rates for GET requests thatn other requests.
* Data transfer-
  * pricing is based on the amount of data that is transferred out of the amazon S3 region
    * data transfer in is free, but you incur charges fro data that is transferred out.

* => Requests–Consider the number and type of requests. GET requests incur charges at different rates than other requests, such as PUT and COPY requests.
  * GET–Retrieves an object from Amazon S3. You must have READ access to use this operation
  * PUT–Adds an object to a bucket. You must have WRITE permissions on a bucket to add an object to it
  * COPY–Creates a copy of an object that is already stored in Amazon S3. A COPY operation is the same as performing a GET and then a PUT.
https://aws-tc-largeobjects.s3-us-west-2.amazonaws.com/ILT-TF-100-ACFNDS-20-EN/Module_7_S3+v2.0.mp4
*/
/*
fine-grained => kendali penuh
*/