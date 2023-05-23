/*
!Amazon CloudWatch

? Monitoring AWS Resources
To use AWS efficiently, you need insight into your AWS resources
   * how do you know when you should launch more Amazon EC2 instances?
   * Is your application's performance or availabilitybeing affected by a lack of sufficient capacity?
   * How much of your infrastructure is actually being used?

? Amazon CloudWatch
* monitor
   * AWS resources
   * applications that run on AWS
* Collects and tracks
   * Standard metrics
   * custom metrics
* Alarms
   * send notifications to an amazon SNS topic
   * perform amazon EC2 auto scaling or Amazon EC2 actions
* events
   * define rules to match changes in AWS environment and route these events to one or more target functions or streams for processing

* => Amazon CloudWatch is a monitoring and observability service that is built for DevOps engineers, developers, site reliability engineers (SRE), and IT managers. CloudWatch monitors your AWS resources (and the applicationsthat you run on AWS) in real time. You can use CloudWatch to collect and track metrics, which are variables that you can measure for your resources and applications.

* You can create an alarm to monitor any Amazon CloudWatch metric in your account and use the alarm to automatically send a notification to an Amazon Simple Notification Service (Amazon SNS) topic or perform an Amazon EC2 Auto Scaling or Amazon EC2 action. For example, you can create alarms on the CPU utilization of an EC2 instance, Elastic Load Balancing request latency, Amazon DynamoDB table throughput, Amazon Simple Queue Service (Amazon SQS) queue length, or even the charges on your AWS bill. You can also create an alarm on custom metrics that are specific to your custom applications or infrastructure.

* You can also use Amazon CloudWatch Events to define rules that match incoming events (or changes in your AWS environment) and route them to targets for processing. Targets can include Amazon EC2 instances, AWS Lambda functions, Kinesis streams, Amazon ECS tasks, Step Functions state machines, Amazon SNS topics, Amazon SQS queues, and built-in targets. 

? CloudWatch Alarms
* Create alarms based on-
   * static threshold
   * anomaly detection
   * metric math expression
* Specify
   * namespace
 namespace contains the CloudWatch metric that you want, for example, AWS/EC2
   * metric
A metric is the variable you want to measure, for example, CPU Utilization.
   * statistic
A statistic can be an average, sum, minimum, maximum, sample count, a predefined percentile, or a custom percentile.
   * period
A period is the evaluation period for the alarm. When the alarm is evaluated, each period is aggregated into one data point.
   * conditions
When you specify the conditions for a static threshold, you specify whenever the metric is Greater, Greater or Equal, Lower or Equal, or Lowerthan the threshold value, and you also specify the threshold value.
   * additional configurations
This includes the number of data points within the evaluation period that must be breached to trigger the alarm, and how CloudWatch should treat missing data when it evaluates the alarm.
   * actions
You can choose to send a notification to an Amazon SNS topic, or to perform an Amazon EC2 Auto Scaling action or Amazon EC2 action

* => You can create a CloudWatch alarm that watches a single CloudWatch metric or the result of a math expression based on CloudWatch metrics. You can create a CloudWatch alarm based on a static threshold, anomaly detection, or a metric math expression.

* When you create an alarm based on a static threshold, you choose a CloudWatch metric for the alarm to watch and the threshold for that metric. The alarm goes to ALARM state when the metric breaches the threshold for a specified number of evaluation periods.

? Activity: Amazon CloudWatch
EC2      If average CPU utilization is > 60% for 5 minutes (correct)
Amazon RDS     If the number of simultaneous connections is > 10 for 1 minute...(correct)
Amazon S3      if the maximum bucket size in bytes is around 3 for 1 day (incorrect. around is not a threshold option. uou must specify a threshold of >,<=,>= or <)

Elastic load balancing  if the number of healthy hosts is < 5 for 10 minutes... (correct)
Amazon Elastic block store    If the volume of read operations is > 1,000 for 10 seconds..(incorrect, incorrect, you must specify a statistic for example average volume)



*/