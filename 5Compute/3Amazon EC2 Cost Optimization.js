/*
! Amazon EC2 Cost Optimization
? The four pillars of cost optimization
* Right Size
choose the right balance of instance types. Notice when servers can be either sized down or turned off, and still meet your performance requirements.
* Increase elasticity
design your deployments to reduce the amount of server capacity that is idle by implementing deployments that are elastic, such as deployments that use automatic scalling to handle peak loads.
* Optimal pricing model
recognize the available pricing options. Analyze your usage patterms so that you can run EC2 instances with the right miz of pricing options.
* Optimize storage
analyze the storage requirements of your deployments. Reduce unused storage overhead when possible, and choose less expensive options if the can still meet your requirements for storage performance.

? 1. Right Size
* provision instances to match the need
  * CPU, memory, storage, and network throughput.
  * Select appropriate instance types for your use.
* Use amazon cloudWatch metrics
  * how idle are isntances? when?
  * downsize isntances
* Best practice: Right size, then reserve

* => AWS offers approximately 60 instance types and sizes. The wide choice of options enables customers to select the instance that best fits their workload. It can be difficult to know where to start and what instance choice will prove to be the best, from both a technical perspective and a cost perspective. Right-sizing is the process of reviewing deployed resources and looking for opportunities to downsize when possible

to right-size:
* select the cheapest isntance available that still meets your performance requirements.
* Review, CPU, RAM, Storage, and network utilization to identify instances that cloud be downsized. You might want to provision a variety of instance types and sizes in a test environment, and then test your application on those different test deployments to identify which instances offer the best performance-to-cost ratio. For right-sizing, use techniques such as load testing to your advantage
* UseAmazon CloudWatch metrics and set up custom metrics. A metric represents a time-ordered set of values that are published to CloudWatch (for example, the CPU usage of a particular EC2 instance). Data points can come from any application or business activity for which you collect data.

? 2. Increase Elasticity
* Stop or hibernate Amazon EBS-backed instanes that are not avtively in use
  * example: non-production development or test instances
* use automatic scaling to match needs base on usage
  * automated and time-based elasticity


* => One form of elasticityis to create, start, or use EC2 instances when they are needed, but then to turn them off when they are not in use. Elasticity is one of the central tenets of the cloud, but customers often go through a learning process to operationalize elasticity to drive cost savings. 
* The easiest way for large customers to embrace elasticity is to look for resources that look like good candidates for stopping or hibernating, such as non-production environments, development workloads, or test workloads. For example, if you run development or test workloads in a single time zone, you can easily turn off those instances outside of business hours and thus reduce runtime costs by perhaps 65 percent. The concept is similar to why there is a light switch next to the door, and why most offices encourage employees to turn off the lights on their way out of the office each night
* For production workloads, configuring more precise and granular automatic scaling policies can help you take advantage of horizontal scaling to meet peak capacity needs and to not pay for peak capacity all the time.
* As a rule of thumb, you should target 20–30 percent of your Amazon EC2 instances to run as On-Demand Instances or Spot Instances, and you should also actively look for ways to maximize elasticity.

? 3. Optimal Pricing model
* Leverage the right pricing model for your use case
  * consider your usage patters
* Optiize and combine purchase types
* examples:
  * use on-demand instance and sopt instances for variable workloads
  * use reserved isntance for predicable workload
* consider serverless solution (AWS lambda)

* => AWS provides a number of pricing models for Amazon EC2 to help customers save money. The models available were discussed in detail earlier in this module. Customers can combine multiple purchase types to optimize pricing based on their current and forecast capacity needs. Customers are also encouraged to consider their application architecture. For example, does the functionality provided by your application need to run on an EC2 virtual machine? Perhaps by making use of the AWS Lambda service instead, you could significantly decrease your costs.

? 4. Optimize Storage choices
* Reduce costs while maintaining storage performance and availability
* Resize EBS volumes
* change EBS volume types
  * can you meet performance requirements with less expensive storage?
  * examples: AMazon EBS throughput Optimized HDD (st1) storage typically costs half as much as the default GFeneral Purpose SSD (gp2) storage option.
* Delete EBS snapshots that are no longer needed
* indentify the most appropriate destination for specific types of data
  * does the application need the instance to reside on Amazon EBS?
  * amazon s3 storage option with lifecycle policies can reduce costs

* => Customers can also reduce storage costs. When you launch EC2 instances, different instance types offer different storage options. It is a best practice to try to reduce costs while also maintaining storage performance and availability. 
* One way you can accomplish this is by resizing EBS volumes. For example, if you originally provisioned a 500-GB volume for an EC2 instance that will only need a maximum of 20 GB of storage space, you can reduce the size of the volume and save on costs.
* There are also a variety of EBS volume types. Choose the least expensive type that still meets your performance requirements. For example, Amazon EBS Throughput Optimized HDD (st1) storage typically costs half as much as the default General Purpose SSD (gp2) storage option. If an st1 drive will meet the needs of your workload, take advantage of the cost savings
* Customers often use EBS snapshots to create data backups. However, some customers forget to delete snapshots that are no longer needed. Delete these unneeded snapshots to save on costs.
* Finally, try to identify the most appropriate destination for specific types of data. Does your application need the data it uses to reside on Amazon EBS? Would the application run equally as well if it used Amazon S3 for storage instead? Configuring data lifecycle policies can also reduce costs. For example, you might automate the migration of older infrequently accessed data to cheaper storage locations, such as Amazon Simple Storage Service Glacier.

? Measure, monitor, and improve
* Cost optimization is an ongoing process
* recommendations:
  * define anad enforce cost allocation tagging.
  * define metricsm set targets, and review regularly
  * encourage team to architect for cost.
  * assign the responsibility of optimization to an individual or to a team.

* => If it is done correctly, cost optimization is not a one-time process that a customer completes. Instead, by routinely measuring and analyzing your systems, you can continually improve and adjust your costs. Tagging helps provide information about what resources are being used by whom and for what purpose.You can activate cost allocation tags in the Billing and Cost Management console, and AWS can generate a cost allocation report with usage and costs grouped by your active tags. Apply tags that represent business categories (such as cost centers, application names, or owners) to organize your costs across multiple services.
* Encourage teams to architect for cost. AWS Cost Explorer is a free tool that you can use to view graphs of your costs.
* Encourage teams to architect for cost. AWS Cost Explorer is a free tool that you can use to view graphs of your costs. You can use Cost Explorer to see patterns in how much you spend on AWS resources over time, identify areas that need further inquiry, and see trends that you can use to understand your costs.
* Use AWS services such as AWS Trusted Advisor, which provides real-time guidance to help you provision resources that follow AWS best practices. 
* Cost-optimization efforts are typically more successful when the responsibility for cost optimization is assigned to an individual or to a team.
*/