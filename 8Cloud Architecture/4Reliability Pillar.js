/*
! Reliability Pillar

? Reliability pillar –recover from failure and mitigate disruption
Focus
  * Ensure a workload performs its intended function correctly and consistently when it’s expected to
Key topics
  * designing destributed systems
  * recovery planning
  * Handling change

* => TheReliability pillar focuses on ensuring a workload performs its intended function correctly and consistently when it’s expected to. A resilient workload quickly recovers from failures to meet business and customer demand. Key topics include: designing distributed systems, recovery planning, and handling change

? Reliability design principles
  * Automatically recover from failure
Monitor systems for key performance indicators and configure your systems to trigger an automated recovery when a threshold is breached. This practice enables automatic notification and failure-tracking, and for automated recovery processes that work around or repair the failure.
  * Test recovery procedures
Test how your systems fail and validate your recovery procedures. Use automation to simulate different failures or to recreate scenarios that led to failures before. This practice can expose failure pathways that you can test and rectify before a real failure scenario
  * Scale horizontally to increase aggreaget workload availability
Replace one large resource with multiple, smaller resources and distribute requests across these smaller resources to reduce the impact of a single point of failure on the overall system
  * stop guessing capacity
Monitor demand and system usage, and automate the addition or removal of resources to maintain the optimal level for satisfying demand.
  * manage change in automation
Use automation to make changes to infrastructure and manage changes in automation

? Reliability questions
foundations
  * How do you manage service quotas and constraints?
  * How do you plan your network topology?
workload architecture
  * How do you design your workload service architecture?
  * How do you design interactions in a distributed system to prevent failure?
  * How do you design interactions in a distributed system to mitigate or withstand failures?
Change management
  * How do you monitor workload resources?
  * How do you design your workload to adapt to changes in demand?
  * How do you implement change?
Failure management
  * How do you back up data?
  * How do you use fault isolation to protect your workload?
  * How do you design your workload to withstand component failures?
  * How do you test reliability?
  * How do you plan for disaster recovery?

*/

/*
resilient => tangguh 
threshold => ambang 
breached => dilanggar
rectify => memperbaiki
*/