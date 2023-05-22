/*
! Section 2 Total Cost of Ownership
?On-Premises versus cloud
* capital expenses include facilities, hardware, licenses and maintenance staff.scallingup can be expenses and time consuming and scaling down cannot reduce cost.

* cloud infrastructure is purchased from a service provider who builds and maintains the facilities. hardsware, and maintenance staff.

?What is Total Cost of Ownership (TCO)
* Total COst of Ownership or TCO is a financial estimate intended to help buyer and owners determine the direct and indirect cost of production or system.
why use TCO?
* to compare the cost of running an entire infrastructure environment or specific workload on-premises versus on AWS.
* to budget and build the business case for moving to cloud

?CTO considerations => Pertimbangan dalam CTO
1. Server Costs
*hardware: server, rack chassis power distribution units(PDUs), top-of-rack(TOR) switcher (and maintenance),
*software: OS, vitualization licenses (and maintenance)
*facilities cost, space, power, colling

2. Storage costs
* hardware: Storage disks, storage area networking (san) or fibre channel(FC) switches
* storage administration cost
*facilities cost, space, power, colling

3. Network Costs
* Network hardware: Local area Network(LAN) switches, load balancer bandwidth costs
* Network administration cost
*facilities cost, space, power, colling

4. IT labors
*server administration costs


* With the cloud most cost are upfront and readily calculated, with the example cloud profiders give transparent pricing based on different usage metrics. such as RAM, storage, and badwidth among others. Pricing is often fixed per unit of time.

?On premises versus all in cloud
* we could save up to 96 percent a year by moving owr infrastructure to AWS. this is example of using on-premises over AWS in 3 years
        on premises         AWS
server      $91,922         $2547
storage     $67,840         $4963
network     $7,660          $---
it-labor    $----           $---
total       $167,722        $27,509

* the component of the on-premises solution 
1 virtual machine with 4 CPUs
16 gb RAM
linux OS
average utilization is 100% optimized by RAM.
* the component of a comparable AWS environment
include one m4.xlarge instance with 4 CPUs
16 gb RAM
TODO => the on-premises solution is predicted, it continues to incur cost, whether the capacity is used.

TODO=> AWS solution is commissioned when needed and decommissioned when the resources are no longer in use.

?AWS Pricing calculator
Use the AWS Pricing calculator to
* estimate montly costs
* identify opportunities to reduce monthly costs
* model your solutions before building them
* explore price points and calculations behind your estimate
* find the available instance types and contract terms that meet your needs
* name your estimate and create and name group of services

? Additional benefit considerations

HARD BENEFITS
*reduce spending on compute, storage, networking, security
*reduce in hardware and software purchases
*reductions in opertational costs, backup and disaster recovery
*reduction in operations personnel

SOFT BENEFIT
*reuse of service and applications that enable you to define(and redefine solutions) by using the same cloud service
*increased developer productivity
*improve customer satisfaction
*agile businness processes that can quicly respond to new and emerging opportunities
*increase in global reach
*/