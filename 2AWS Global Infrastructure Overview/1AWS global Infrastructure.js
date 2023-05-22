/*
! AWS Global Infrastructure
* the aws flobal infrastructure is designed and built to deliver a flexible, reliable, scalable and secure cloud computing environment with high-quality global network performance.

* AWS continually updates its global infrastructure footprint. 

? AWS REGIONS
* an AWS region is geographical area.
  * Data replication across regions is controlled by you
  * Communication between regions uses AWS backbone network infrastructure
* Each region provides full redundancy and connectivity to the network
* A region typically consist of two or more Availability Zones.

=>
* AWS cloud infrastucture is build arround Regions. AWS has 22 regions worldwide. An AWS region is a physical geographical location with one or more AZ. AZ in turn consist of one or more data centers.

* To achieve fault tolerance and stability, Regions are isolated from one another. Resources in one region are not automatically replicated to other regions. when you store data in a specific region, it is not replicated outside that region. It owr responsibility to replicated data across regions, if your businness needs require it.

* AWS Region that were introduced before march 20, 2019 are enabled by default. Regions that were introduced after march 20, 2019 - such as Asia pacific (hong kong) and middle east (bahrain) - are disable by default. you must enable these regions before you can use them. you can use the AWS management console to enable or disable a region.

* Some regions have restricted access. An amazon AWS (china) account provides access to the beijing and ningxia regions only.

* for accessibility: Snapshot form the infrastructure aws website that shows a picture of downtown london including the tower bridge and the shard. it notes that there are three AZ in the london reegion. End of accessibility desciption

? Selection a region
1. Data governance and legal requirement
local laws migh require that centain information be kept within geograpical boundaries. such laws might restrict the regions where you can offer content or service. for example, consider the european union(EU) data protection directive. 
2. Proximity to customers (latency)
all else being equal, it is generally desirable to run your appllications and store your data in a region that is as close as possible to the user and systems that willl access them. This will help you reduce latency.
TODO => Cloud ping is one websitee that you can use to test latency between your location and all AWS regions, http://www.cloudping.info/

3. services available within the region
keep in mind that not all services are available in all regions. https://aws.amazon.com/id/about-aws/global-infrastructure/regional-product-services/?p=tgi&loc=4

4. costs (Vary by region)
there is some variation in the cost of running services, which can depend on which region you choose. for example as of this writingm running on-demand t3.medium size amazon elastic compute cloud linux instance in the US east(ohio) region costs $0.0416 per hour, but running the same instance in the asia pacific (tokyo) region costs $0.0544 per hour

?AVAILABILITY ZONES
* each AWS region has multuple availability zones
* each availability zone is a full isolated partition of the AWS infrastructure.
  * Availability zones consist of discrete data centers
  * they are designed for fault isolation
  * they are interconnected with other AZ by using high-speed private networking
  * you choose your availability zones.
  * AWS recomends replicating data and resoures accross availability zones for resiliency.
 
=> each AZ provides the ability to operate applications and databases that are more highly available, fault-tolerant, and scalable than would ne possible with a single data center.
each AZ can include multiple data centers(typically three), and at full-scale, they can include hundreds of thousands of servers. they are fully isolated partitions of the AWS global infrastructure. AZ have their own power infrastructure, and they are physically separated by many kilometers from other AZ-though all AZ are within 100 km, of each other.

all availability zones are interconnected with high-bandwidth, low-latency networking over fully redundant, desicated fiber that provides high-throughput between AZ. the network accomplishes synchronous replicated between AZ.

AZ help build highly available applications. when an application is partitioned across AZ, companies are better isolated and protected from issues such as lightning, tornadoes, earthquakes, and more

you are responsible ofr selecting the AZ where your systems will reside. systems can span multiple AZ. AWS recommends replication across AZ for resiliency. you should design your system to survive the temporary or prolonged failure of anAZ if disaster occurs

? DATA CENTER
* AWS data centers are designed for security
* Data centers are where the tdata resider and data processing occurs.
* each data has redundant power, networking, and connectivity, and is housed in a separate facility
* a data center typically has 50,000 to 80,000 physical servers.

=> the foundation for the AWS infrastructure is the data centers. customers do not specify a data center for the deployment of resources. instead, an availability zone is the most granular level of specification that a customer can make. however, a data center is the location where the actual data resides. Amazon operates state of the art, highly available data centers. although rare, failures can occur that affect the availability of instances in the same location. if you host all your instances in a single location that is affected by such a failure, none of your instances will be available

each location is carefully evaluated to mitigate environmnental risk.

* data center have a redundant design that anticipates and tolerates failure while maintaining service levels.
* to ensure availability, critical system components are backed up across multiple AZ.
* to ensure capacity, AWS continuously monitors service usage to deploy infrastructure to support availability commitments and requirements.
* data center locations are not disclosed and all access to them is restricted.
* in case of failre, automated processes move data traffic away from the affected area.

aws uses custom network equipment sources from multiple original device manufacturers (ODMs). ODMs design and manufacture products based on specification from a second company. the second company then rebrands the products for sale.

?Points of Presence
* AWS provides a global network of points of presence locations
* consist of edge location and a much smaller number of regional edge caches.
* used with amazon cloudfront
  * a global content delivery network(CDN) that delivers content to end users with reduced latency
* regional edge caches used for content with infrequent access.

=> amazon CloudFront is a content delivery network(CDN) used to distributed content to end users to reduce latency. Amazon route 53 is a domain name system (DNS) service. requests going to either one of these services will be routed to the nearest edge lovation automatically in order to lower latency.

AWS points of presence are located in most of the major cities around the world. by continuously measuring internet connectivity, performance and computing to find the best way to route request, the points of presence deliver a better near real-time user experience. they are used by many AWS service, including Amazon cloud front, amazon route 53, AWS shield, and AWS web application firewall (AWS WAF services).

regional ende cache are used by default with Amazon CloudFront. regional edge cahces are used when you have vontent that is not accessed frequently enough to remain in an edge location. Regional edge caches absorb this content and provide an alternative to that content having to be fetched from the origin server.

? AWS Infrastructure features
* elasticity and scalability
  * elastic infrastructure, dynamic adaption of capacity
  * scalable infrastructure; adapts to accomodate growth
* fault-tolerance
  * continues operating properly in the presence of a failure
  * built-in redundancy of components
* high availability 
  * high level of operational performance
  * minimized downtime
  * no human intervention

benefit provided by this infrastructure
the AWS global intrastructure has serveral valuable features:
* first, it is elastic and scalable. dynamically adjust ro increases or decreases in capacity requirements
* this infrastructure is fauld tolerant, which means it has built-in component reducdancy which enamble it to continue operations despite a failed component.
* it requires minimal to no human intervention, while providing high availability with minimal down time.

?Key takeaways
some key takeaways from this sections of the modules include:
* the aws global infrastructure consists of regions and AZ
* your choice of a region is typically based on compliance requirements or to reduce latency.
* each AZ is physically separate from other AZ and has redundant power, networkingm and connectivity
* edge locations, and regional edge cache improve performance by caching content closer for user.
*/