/*
! Amazon EC2 auto scaling
* When you run your applications on AWS, you want to ensure that your architecture can scale to handle changes in demand. In this section, you will learn how to automatically scale your EC2 instances with Amazon EC2 Auto Scaling.

? why is scaling important
Scaling is the ability to increase or decrease the computer capacitu of your application. to Understand why scaling is important, consider this example of a workload that has varying resource requirements. in this example, the most resource capacity is required on wednesday, and the least resource capacity is required on sunday.

One option is to allocate more than enough capacity so youcan always meet your highest demand—in this case, Wednesday. However, this situation means that you are running resources that will be underutilized most days of the week. With this option, your costs are not optimized.

Another option is to allocate less capacity to reduce costs. This situation means that you are under capacity on certain days. If you don't solve your capacity problem, your application could underperform or potentially even become unavailable for users.

? Amazon EC2 autoscaling
   * Helps you maintain application availability
   * enables you to automatically add or remove EC2 instance according to conditions that you define
   * detects impaired ec2 isntances and unhealthy applications, and replaces the instances without your intervention.
   * Provides several scaling options –Manual, scheduled, dynamic or on-demand, and predictive

?Autoscaling groups
   * Provides several scaling options –Manual, scheduled, dynamic or on-demand, and predictive

autoscaling group
ec2        ec2         ec2      ec2
min size--------       launch or terminate instances as neede
Desire Capacity-
---------------max size---------------

* => An Auto Scaling group is a collection of Amazon EC2 instances that are treated as a logical grouping for the purposes of automatic scaling and management. The size of an Auto Scaling group depends on the number of instances you set as the desired capacity. You can adjust its size to meet demand, either manually or by using automatic scaling. See more about Auto Scaling Groups at https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-groups.html.

* You can specify the minimum number of instances in each Auto Scaling group, and Amazon EC2 Auto Scaling is designed to prevent your group from going below this size. You can specify the maximum number of instances in each Auto Scaling group, and Amazon EC2 Auto Scaling is designed to prevent your group from going above this size. If you specify the desired capacity, either when you create the group or at any time afterwards, Amazon EC2 Auto Scaling is designed to adjust the size ofyour group so it has the specified number of instances. If you specify scaling policies, then Amazon EC2 Auto Scaling can launch or terminate instances as demand on your application increases or decreases. 

* For example, this Auto Scaling group has a minimum size of one instance, a desired capacity of two instances, and a maximum size of four instances. The scaling policies that you define adjust the number of instanceswithin your minimum and maximum number of instances, based on the criteria that you specify. 

? Scaling out vs scaling in
--------------------
elastic load balancing   
   |  |     
ec2   ec2
auto scaling group
-----------------
Base configuration

--------------------
elastic load balancing   
   |  |     
ec2  EC2 ec2
auto scaling group
-----------------
Scale out(launch instances)

--------------------
elastic load balancing   
   |  |     
ec2   ec2
auto scaling group
-----------------
Scale in(terminate instances)

* With Amazon EC2 Auto Scaling, launching instances is referred to as scaling out, and terminating instances is referred to as scaling in

? How amazon EC2 auto scaling works
todo what 
AMI -> EC2

Launch configuration
   * AMI
   * isntance type
   * IAM role
   * Security group
   * EBS volumes

todo where
VPc-----------------
private subnet
--------------------
auto scaling group
   * VPC and subnets
   * load balancer

todo when
Maintain current number
   * health checks
manual scaling
   * min,max,desired capacity
scheduled scaling
   * scheduled actions
dynamic scaling
   * scaling policies
predictive scaling
   * AWS auto scaling


* When you create a launch configuration, you specify information for the instances. The information you specify includes the ID of the Amazon Machine Image (AMI), the instance type, AWS Identity and Access Management (IAM) role, additional storage, one or more security groups, and any Amazon Elastic Block Store (Amazon EBS) volumes

* You define the minimum and maximum number of instances and desired capacity of your Auto Scaling group. Then, you launch it into a subnet within a VPC (you can think of this as whereyou are scaling). Amazon EC2 Auto Scaling integrates with Elastic Load Balancing to enable you to attach one or more load balancers to an existing Auto Scaling group. After you attach the load balancer, it automatically registers the instances in the group and distributes incoming traffic across the instances

Finally, you specify whenyou want the scaling event to occur. You have many scaling options:
* Maintain current instance levels at all times–You can configure your Auto Scaling group to maintain a specified number of running instances at all times. To maintain the current instance levels, Amazon EC2 Auto Scaling performs a periodic health check on running instances in an Auto Scaling group. When Amazon EC2 Auto Scaling finds an unhealthy instance, it terminates that instance and launches a new one.

* Manual scaling –With manual scaling, you specify only the change in the maximum, minimum, or desired capacity of your Auto Scaling group. See more on manual scaling at https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-manual-scaling.html.

* Scheduled scaling–With scheduled scaling, scaling actions are performed automatically as a function of date and time. This is useful for predictable workloads when you know exactly when to increase or decrease the number of instances in your group. For example, saythat every week,the traffic to your web application starts to increase on Wednesday, remains high on Thursday, and starts to decrease on Friday. See more on scheduled scaling at https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-scheduled-scaling.html. You can plan your scaling actions based on the predictable traffic patterns of your web application. To implement scheduled scaling, you create a scheduled action. 

* –A more advanced way to scale your resources enables you to define parameters that control the scaling process. For example, you have a web application that currently runs on two instances and you want the CPU utilization of the Auto Scaling group to stay close to 50 percent when the load on the application changes. This option is useful for scaling in response to changing conditions, when you don't know when those conditions will change. Dynamic scaling gives you extra capacity to handle traffic spikes without maintaining an excessive amount of idle resources. You can configure your Auto Scaling group to scale automatically to meet this need.  More on dynamic scaling at https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scale-based-on-demand.html. The scaling policy type determines how the scaling action is performed. You can use Amazon EC2 Auto Scaling with Amazon CloudWatch to trigger the scaling policy in response to an alarm.  See policy types at https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scale-based-on-demand.html#as-scaling-types.

* You can use Amazon EC2 Auto Scaling with AWS Auto Scaling to implement predictive scaling, where your capacity scales based on predicted demand. Predictive scaling uses data that is collected from your actual EC2 usage, and the data is further informed by billions of data points that are drawn from our own observations. AWS then uses well-trained machine learningmodels to predict your expected traffic (and EC2 usage), including daily and weekly patterns. The model needs at least 1 day of historical data to start making predictions. It is re-evaluated every 24 hours to create a forecast for the next 48 hours. The prediction process produces a scaling plan that can drive one or more groups of automatically scaled EC2 instances. https://aws.amazon.com/id/blogs/aws/new-predictive-scaling-for-ec2-powered-by-machine-learning/


? Implementing dynamic scaling
* One common configuration for implementing dynamic scaling is to create a CloudWatch alarm that is based on performance information from your EC2 instances or load balancer. When a performance threshold is breached, a CloudWatch alarm triggers an automatic scaling event that either scales out or scales in EC2 instances in the Auto Scaling group.

To understand how it works, consider this example:
   * You create an Amazon CloudWatch alarm to monitor CPU utilization across your fleet of EC2 instances and run automatic scaling policiesif the average CPU utilization across the fleet goes above 60 percent for 5 minutes.
   * AmazonEC2Auto Scaling instantiates a new EC2 instance into your Auto Scaling group based on the launch configuration that you create.
   * after the new instance is added, Amazon EC2Auto Scalingmakes a call to Elastic Load Balancing to register the new EC2 instance in that Auto Scaling group. 
   * Elastic Load Balancing then performs the required health checks and starts distributing traffic to that instance.Elastic Load Balancing routes traffic between EC2 instances and feeds metrics to Amazon CloudWatch.

Amazon CloudWatch, Amazon EC2 Auto Scaling, and Elastic Load Balancing work well individually. Together, however, they become more powerful and increase the control and flexibility over how your applicationhandles customer demand

TODO AWS AUTO SCALING
   * Monitors your applications and automatically adjusts capacity to maintain steady, predictable performance at the lowest possible cost
   * Provides a simple, powerful user interface that enables you to build scaling plans for resources, including –
      * Amazon EC2 instances and Spot Fleets
      * Amazon Elastic Container Service (Amazon ECS) Tasks
      * Amazon DynamoDB tables and indexes
      * Amazon Aurora Replicas

*/

/**
 * breached => dilanggar
 
 testing file
 
 */
