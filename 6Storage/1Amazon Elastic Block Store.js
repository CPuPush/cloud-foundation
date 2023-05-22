/*
! Amazon Elastic Block Store (EBS) 
https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.html.
* Amazon EBS provides persistent block storage volumes for use with Amazon EC2instances. Persistent storageis any datastoragedevice that retains data after power to that device is shut off. It is also sometimes called non-volatile storage.
* Each Amazon EBS volume is automatically replicated within its Availability Zone to protect you from component failure. t is designed for high availability and durability. Amazon EBS volumes provide the consistent and low-latency performance that is needed to run your workloads.
* With Amazon EBS, you can scale your usage up or down within minutes, while paying a low price for only what you provision.

? AWS Storage options: Block Storage vs Object Storage
what if you want to change one character in a 1 gb file?
1. Block Storage: change one block (piece of the file) that contains the character

2. Object Storage: Entire file must be updated

* One critical difference between some storage types is whether they offer block-level storage or object-level storage.
* This difference has a major effect on the throughput, latency, and cost of your storage solution. Block storage solutions are typically faster and use less bandwidth, but they can cost more than object-level storage

? Amazon EBS
* Amazon EBS enables you to create individual storage volumes and attach them to an amazon EC2 instance:
  * Amazon EBS offers block-level storage
  * volumes are automatically replicated within its availability zones.
  * it can be backed up automatically to Amazon S3 thorugh snapshots.
  * Uses include-
    * boot volumes and storage for Amazon Elastic Compute Cloud (Amazon EC2) instances
    * data storage with a file system
    * database hosts
    * enterprise applications

* => Amazon EBS is designed to provide durable, detachable, block-level storage (which is like an external hard drive) for your Amazon EC2 instances.
* For this reason, they can be used to run a database with an Amazon EC2 instance. Amazon EBS volumes are included as part of the backup of your instances into Amazon Machine Images (or AMIs). AMIs are stored in Amazon S3 and can be reused to create new Amazon EC2 instances later.
* A backup of an Amazon EBS volume is called a snapshot. The first snapshot is called the baseline snapshot. Any other snapshot after the baseline captures only what is different from the previous snapshot. 

? Amazon EBS Volume types

*Solid State Drives (SSD)
General purpose                     provisioned IOPS
max vol size: 16 TiB                16 TiB
max iops: 16000                     64000
mx throughput/volume: 250 MiB/s     1000 MiB/s

*Hard Disk Drives (HDD)
Throughput-optimized                Cold
max vol size: 16 TiB                16 TiB
max iops: 500                       250
mx throughput/volume: 500 MiB/s     250 MiB/s

* => Matching the correct technology to your workload is a best practice for reducing storage costs. Provisioined IOPS SSD-backed  Amazon EBS volumes can give you the highest performance. however, if your application doesn't require or won't use performance that high, General Purpose SSD is usually sufficient. Only SSDs can be used as boot volumes for EC2 instances. The lower-cost options might be a solution for additional storage or use cases other than boot volumes.

? Amazon EBS Volume Type use cases
SSD
* General Purpose
  * This type is recommended for most workloads
  * System boot volumes
  * Virtual desktops
  * Low-latency interactive applications
  * Development and test environments
* Provisioned IOPS
  * Critical business applications that require sustained IOPS performance, or more than 16,000 IOPS or 250 MiB/second of throughput per volume
  * Large database workloads
HDD
* Throughput-Optimized
  * Streaming workloads that require consistent, fast throughput at a low price
  * Big data
  * Data warehouses
  * Log processing
  * It cannot be a boot volume
* Cold
  * Throughput-oriented storage for large volumes of data that is infrequently accessed
  * Scenarios where the lowest storage cost is important
  * It cannot be a boot volume

* => Amazon EBS volumes persist independently from the running life of an EC2 instance. Use cases for EBS vary by the storage type used and whether you are using General Purpose of Provisioned IOPS

? Amazon EBS Features
* Snapshots
  * point-in-time snapshots
  * Recreate a new volume at any time
* enctyption
  * enctyped Amazon EBS volumes
  * no additional cost
* elasticity
  * increase capacity
  * change to different types

* => To provide an even higher level of data durability, Amazon EBS enables you to create point-in-timesnapshots of your volumes, and you can re-create a new volume from a snapshot at any time. You can also share snapshots or even copy snapshots to different AWS Regions for even greater disaster recovery (DR) protection. For example, you can encrypt and share your snapshots from Virginia in the US to Tokyo, Japan.
* You can also have encrypted Amazon EBS volumes at no additional cost, so the data that moves between the EC2 instance and the EBS volume inside AWS data centers is encrypted in transit.
* As your company grows, the amount of data that is stored on your Amazon EBS volumes is also likely to grow. Amazon EBS volumes can increase capacity and change to different types, so you can change from hard disk drives (HDDs) to solid state drives (SSDs) or increase from a 50-GB volume to a 16-TB volume. For example, you can do this resize operation dynamically without needing to stop the instances.

? Amazon EBS: Volumes, IOPS, and pricing
1. Volumes
  * Amazon EBS volumes persist independently from the instance
  * All volume types are charged by the amount that is provisioned per month.
2. IOPS
  * General Purpose SSD:
    * Charged by the amount that you provision in GB per month until storage is released
  * Magnetic:
    * Charged by the number of request to the volume
  * provisioned IOPS SSD:
    * Charged by the amount that you provision in IOPS (multiplied by the percentage of days that you provision for the month).
3. Snapshots-
  * Added cost of Amazon EBS snapshots to Amazon S3 is per GB month of data stored
4. Data transfer
  * inbound data transfer is free
  * Outbound data transfer across Regions incurs charges

* => When you begin to estimate the cost for Amazon EBS, you must consider the following:
  * Volumes–Volume storage for all Amazon EBS volume types is charged by the amount you provision in GB per month, until you release the storage.
  * IOPS–I/O is included in the price of General Purpose SSD volumes. However, for Amazon EBS magnetic volumes, I/O is charged by the number of requests that you make to your volume. With Provisioned IOPS SSD volumes, you are also charged by the amount you provision in IOPS (multiplied by the percentage of days that you provision for the month).
  * Snapshots–Amazon EBS enables you to back up snapshots of your data to Amazon S3 for durable recovery. If you opt for Amazon EBS snapshots, the added cost is per GB-month of data stored.
  * Data transfer –When you copy Amazon EBS snapshots, you are charged for the data that is transferred across Regions. After the snapshot is copied, standard Amazon EBS snapshot charges apply for storage in the destination Region.

video : https://aws-tc-largeobjects.s3-us-west-2.amazonaws.com/ILT-TF-100-ACFNDS-20-EN/Module_7_EBS+v2.0.mp4 


todo ==> Persistence Merupakan proses penyimpanan dan pemanggilan data dari penyimpan permanent

todo ==> Memori volatil, berbeda dengan memori non-volatil, adalah memori komputer yang membutuhkan daya untuk memelihara informasi yang tersimpan; itu mempertahankan isinya saat dihidupkan tetapi ketika daya terputus, data yang disimpan dengan cepat hilang.

todo => Throughput merupakan istilah sebenarnya dari bandwidth yang diukur dengan satuan waktu tertentu dan pada kondisi jaringan tertentu yang digunakan untuk melakukan transfer file dengan ukuran tertentu

todo => Bandwidth adalah sebuah istilah yang dipakai untuk kapasitas transfer jaringan

todo => IOPS adalah singkatan dari "Input/Output Operations Per Second" (Operasi Masukan/Keluaran Per Detik). IOPS digunakan untuk mengukur kinerja dan kecepatan suatu sistem penyimpanan data, seperti hard disk drive (HDD) atau solid-state drive (SSD). IOPS yang tinggi menunjukkan bahwa perangkat penyimpanan dapat mengakses dan memproses data dengan cepat. Hal ini penting terutama dalam lingkungan yang membutuhkan akses data yang cepat, seperti server database atau lingkungan komputasi berperforma tinggi.'

todo => Inbound data transfer (transfer data masuk) merujuk pada proses mengirimkan atau menerima data dari suatu sumber ke tujuan yang ditentukan. Dalam konteks komputer dan jaringan, inbound data transfer terjadi ketika data dikirimkan dari perangkat atau server eksternal ke perangkat atau server internal.

todo => Misalnya, jika Anda memiliki situs web yang di-hosting di server cloud, setiap kali seseorang mengakses situs web Anda dan mengunduh file atau mengirim data dari situs tersebut, itu dihitung sebagai outbound data transfer.
*/