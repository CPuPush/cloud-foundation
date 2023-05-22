/*
! Security Pillar

? Security pullar - protect and monitor systems
* focus
  * Protect information, systems, and assets while delivering business value through risk assessments and mitigation strategies.
* Key topics
  * protecting confidentiality and integrity of data
  * Identifying and managing who can do what
  * protecting systems
  * establiching controls to detect security events

? Security design principles
  * implements a strong identity foundation
Implement the principle of least privilege and enforce separation of duties with appropriate authorization for each interaction with your AWS resources. Centralize privilege management and reduce or even eliminate reliance on long-term credentials.
  * enable traceability
Monitor, alert, and audit actions and changes to your environment in real time. Integrate logs and metrics with systems to automatically respond and take action
  * apply security at all layers
Apply defense in depth and apply security controls to all layers of your architecture (forexample,edge network, virtual private cloud, subnet, and load balancer; and every instance, operating system, and application).
  * automate security best practices
Automate security mechanisms to improve your ability to securely scale more rapidly and cost effectively. Create secure architectures and implement controls that are defined and managed as code in version-controlled templates.
  * protect data in transit and at rest
Classify your data into sensitivity levels and use mechanisms such as encryption, tokenization, and access control where appropriate
  * keep people away from data
To reduce the risk of loss or modification of sensitive data due to human error, create mechanisms and tools to reduce or eliminate the need for direct access or manual processing of data
  * prepare for security events
Have an incident management process that aligns with organizational requirements. Run incident response simulations and use tools with automation to increase your speed of detection, investigation, and recovery.

? Security question
security
  * how do you securely operate your workload?
Identity and access management
  * How do you manage identities for people and machines?
  * How do you manage permissions for people and machines?
Detection
  * How do you detect and investigate security events?
infrastructure protection
  * How do you protect your network resources?
  * how do you protect your compute resources?
data protection
  * How do you classify your data?
  * How do you protect your data at rest?
  * How do you protect your data in transit?
incident response
  * How do you anticipate, respond to, and recover from incidents?
*/

/*
confidentiality => kerahasiaan
traceability => ketertelurusan (ability for searching like validate history, location, and identifiying documentation)
duties => tugas
reliance => ketergantungan

https://d1.awsstatic.com/whitepapers/architecture/AWS_Well-Architected_Framework.pdf
*/