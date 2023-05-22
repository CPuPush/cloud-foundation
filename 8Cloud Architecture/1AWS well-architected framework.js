/*
! Cloud Architecting
•Describe the AWS Well-Architected Framework, including the six pillars
•Identify the design principles of the AWS Well-Architected Framework
•Explain the importance of reliability and high availability
•Identify how AWS Trusted Advisor helps customers
•Interpret AWS Trusted Advisor recommendations

! AWS Well-Architected Framework
* is the art and science of designing and building large structure. Large systems require architects to manage their size and complexity.

cloud architects:
  * Engage with decision makers to identify the business goal and the capabilities that need improvement.
  * Ensure alignment between technology deliverables of a solution and the business goals
  * Work with delivery teams that are implementing the solution to ensure that the technology features are appropriate
Having well-architected systems greatly increases the likelihood of business success.

? What is the AWS Well-architected framework?
* A guide for designing infrastructures that are:
  * Secure
  * High-performing
  * Resilient
  * Efficient
* A consistent approach to evaluating and implementing cloud architectures
* A way to provide best practices that were developed through lessons learned by reviewing customer architectures

? Pillars of the AWS Well-Atchitected Framework
  * Operational Excellence
  * Security
  * Reliability = keandalan
  * Performance efficiency
  * Cost Optimization
  * Sustainability = keberlanjutan

* => The sustainability pillar was added as the sixth pillar in 2021 to help organizations learn how to minimize the environmental impacts of running cloud workloads. 

? Pillar Organization
* Best Practice area
  Identity and Access Management
* Question text
  SEC 1: How to you manage credentials and authentication?
* Question context
  Credential and authentication mechanisms include passwords, tokens, and keys that grant access directly or indirectly in your workload. Protect credentials with appropriate mechanisms to help reduce the risk of accidental or malicious use.
* Best Practice
  * Define requirements for identity and access management
  * Secure AWS account root user
  * Enforce use of multi-factor authentication
  * Automate enforcement of access controls
  * Integrate with centralized federation provider
  * Enforce password requirements
  * Rotate credentials regularly
  * Audit credentials periodically
*/