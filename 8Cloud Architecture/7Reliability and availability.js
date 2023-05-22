/*
! Reliability and availability

? reliability
  * A measure of your system’s ability to provide functionality when desired by the user.
  * System includes all system components: hardware, firmware, and software
  * Probabilitythat your entire system will function as intended for a specified period
  * Mean time between failures (MTBF) = total time in service/number of failures

* => Reliabilityis a measure of your system’s ability to provide functionality when desired by the user.Because "everything fails, all the time," you should think of reliability in statistical terms. Reliability is the probability that an entire system will function as intended for a specified period. Note that a system includes all system components, such as hardware, firmware, and software. Failure of system components impacts the availability of the system.

* To understand reliability, it is helpful to consider the familiar example of a car. The car is the system. Each of the car’s components (for example, cooling, ignition, and brakes) must work together in order for the car to work properly. If you try to start the car and the ignition fails, you cannot drive anywhere—the car is not available. If the ignition fails repeatedly, your car is not considered reliable

* A common way to measure reliability is to use statistical measurements, such as Mean Time Between Failures (MTBF). MTBF is the total time in service over the number of failures.

? Understanding reliability metrics
Meantime between failues
MTBF = MTTF + MTTR

MTTF (mean time to failure)
MTTR (mean time to repair)

* => Say that you have an application that you bring online Monday at noon. The application is said to be available. It functions normally until it fails Friday at noon. Therefore, the time to failure (or the length of time the application is available) is 96 hours. You spend from Friday at noon until Monday at noon diagnosing why the application failed and repairing it, at which point you bring the application back online. Therefore, the time to repair is 72 hours.

* Then, it happens again: the application fails on Friday at noon, you spend from Friday at noon until Monday at noon repairing it, and you bring it online on Monday at noon.

* Say this failure-repair-restore cycle happens every week. You can now calculate the average of these numbers. In this example, your mean time to failure (MTTF) is 96 hours, and your mean time to repair (MTTR) is 72 hours. Your mean time between failures (MTBF) is 168 hours (or 1 week), which is the sum of MTTF and MTTR

? Availability
* normal operation time / total time
* A percentage of uptime (for example, 99.9 percent) overtime (for example, 1 year)
* number of 9s - Five 9s means, 99,999 percent availabillity

* => As you just learned, failure of system components impacts the availability of the system.

* Formally, availabilityis the percentage of time that a system is operating normally or correctly performing the operations expected of it (or normal operation time over total time). Availability is reduced anytime the application isn’t operating normally, including both scheduled and unscheduled interruptions.

* Availability is also defined as the percentage of uptime (that is, length of time that a system is online between failures) over a period of time (commonly 1 year).

* A common shorthand when referring to availability is number of 9s.

? high Availability
  * system can withstand some measure of degradation while still remaining available
  * downtime is minimized
  * minimal human intervention is required

* =>  A highly available system is one that can withstand some measure of degradation while still remaining available. In a highly available system, downtime is minimized as much as possible and minimal human intervention is required.

* A highly available system can be viewed as a set of system-wide, shared resources that cooperate to guarantee essential services. High availability combines software with open-standard hardware to minimize downtime by quickly restoring essential services when a system, component, or application fails. Services are restored rapidly, often in less than 1 minute.

? Availability tier
* availability
1. 99%
2. 99.9%
3. 99.95%
4. 99.99%
5. 99.999%
* maz disruption(per year)
1. 3 days 15 hours
2. 8 hours 45 minutes
3. 4 hours 22 minutes
4. 52 minutes
5. 5 minutes
* application category
1. batch processingm data extraction, transfer, and load jobs
2. internal tools like knowledge management, project tracking
3. online commerce, point of sale
4. video delivery, broadcast systems
5. ATM transactionm telecomuniations systems

? Factors that influence availability
Fault tolerance
  * The built-in redundancy of an application's components and its ability to remain operational.
Scalability
  * The ability of an application to accommodate increases in capacity needs without changing design
Recoverability
  * The process, policies, and procedures that are related to restoring service after a catastrophic event.


*/

/*
reliability => keandalan
withstand => menahan
*/