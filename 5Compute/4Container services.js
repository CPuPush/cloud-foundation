/*
! Container Service

? 1. Container basics
* containers are a method of operating system virtualization.
* benefits
  * repeatable
  * self-contained environments
  * software runs the same in different environments
    * developerls laptop, test, production
  * faster to launch and stop or terminate that cirtual machines
Your container
-------------
your application
depedencies
configuration
hooks into OS

* => containers are a method of operating system virtualization that enables you to run an application and its depedencies in resource-isolated processes. By using containers, you can easily package an application's code, configurations, and dependencies into easy-to-use building blocks that deliver environmental consistency, operational efficiency, developer productivity, and version control.
* Containers are smaller than virtual machines, and do not contain an entire operating system. Instead, containers share a virtualized operating system and run as resource-isolated processes, which ensure quick, reliable, and consistent deployments. Containers hold everything that the software needs to run, such as libraries, system tools, code, and the runtime. 
* Containers deliver environmental consistency because the application’s code, configurations, and dependencies are packaged into a single object.
* In terms of space, container images are usually an order of magnitude smaller than virtual machines. Spinning up a container happens in hundreds of milliseconds. Thus, by using containers, you can use a fast, portable, and infrastructure-agnostic environments.
* Containers can help ensure that applications deploy quickly, reliably (andal), and consistently, regardless (tanpa memedulikan/meperhatikan) of deployment environment. Containers also give you more granular(terperinci) control over resources, which gives your infrastructure improved efficiency.

? 2. What is docker?
* docker is a software platform that enables you to build, test, and deploy application quickly.
* you run containers on docker.
  * containers are created from a template called an image.
* a container has everything a software application needs to run:
  libraries
  system tools
  code
  runtime
* => Docker is a software platform that packages software (such as applications) into containes. Docker is installed on each server that will host containers, and it provides simple commands that you can use to build, start, or stop containers.
* By using docker, you can quickly deploy and scale applications into any environment.
* docker is best used as a solution when you want to :
  * standardize environments
  * reduce conflicts between language stacks and versions
  * use containers as a service
  * run microservices using standardize code deployments
  * require portability for data processing

? 3.  Containers versus virtual machines
example

* Three containers on one EC2 instance
docker engine   cnt instance1    cnt instance2   cnt instance3
                app 1            app2            app3
                Bins/libs        Bins/libs       Bins/libs
___________________EC2 Instance guest OS______________________ 

* Three virtual machines on three EC2 isntance
vm1                 vm2                 vm3
app1                app2                app3
Bins/libs           Bins/libs           Bins/libs
ec2 inst Guest OS   ec2 inst Guest OS   ec2 inst Guest OS


* => Many people who are first introduced to the concept of a container think that containers are exactly like virtual machines. However, the differences are in the details. One significant difference is that virtual machines run directly on a hypervisor, but containers can run on any Linux OS if they have the appropriate kernel feature support and the Docker daemon is present. This makes containers very portable. Your laptop, your VM, your EC2 instance, and your bare metal server are all potential hosts where you can run a container.
* The right of the diagram has a virtual machine (VM)-based deployment. Each of the three EC2 instances runs directly on the hypervisor that is provided by the AWS Global Infrastructure. Each EC2 instance runs a virtual machine. In this VM-based deployment, each of the three apps runs on its own VM, which provides process isolation.
* The left of the diagram has a container-based deployment. There is only one EC2 instance that runs a virtual machine. The Docker engine is installed on the Linux guest OS of the EC2 instance, and there are three containers. In this container-based deployment, each app runs in its own container (which provides process isolation), but all the containers run on a single EC2 instance. The processes that run in the containers communicate directly to the kernel in the Linux guest OS and are largely unaware of their container silo. The Docker engine is present to manage how the containers run on the Linux guest OS, and it also provides essential management functions throughout the container lifecycle.

? 4. Amazon Elastic Container Service (Amazon ECS)
* Amazon Elastic Container Service (Amazon ECS)-
  * A highly scalable, fast, container management service
* Key Benefits - 
  * Orchestrates the running of docker containers
  * Maintains and scales of the feet of nedes that run your containers
  * Removes the commplexity of standing up the infrastructure
* integrated with features that are familiar to amazon EC2 service users-
  * elastic load balancing
  * AMazon EC2 security groups
  * amazon EBS volumes
  * IAM roles

* => Given what you now know about containers, you might thinkthatyou could launch one or more Amazon EC2 instances, install Docker on each instance, and manage and run the Docker containers on those Amazon EC2 instances yourself. 
TODO while that is an option, AWS provides a service called Amazon Elastic Container Service(ECS) that simplifies container management.
* Amazon Elastic Container Service (Amazon ECS) is a highly scalable, high-performance container management service that supports Docker containers.Amazon ECS enables you to easily run applications on a managed cluster of Amazon EC2 instances.
Essential Amazon ECS features include the ability to:
  * launch up to tens of thousands of docker containers in seconds
  * monitor container deployment
  * manage the state of the cluster that runs the containers
  * schedule containers by using a built-in scheduler or a third-party scheduler (for example, apache mesos or blox)
Amazon ECS clusters can also use Spot instances and reserved instances.

? Amazon ECS orchestrates containers

                request to run container x3  x2

Container A --->              ---> EC2-> 🫙🫙🫙
                  Amazon ECS  
Container B --->              ---> EC2-> 🫙🫙

* => To prepare your application to run on Amazon ECS, you create atask definitionwhich is a text file that describes one or more containers, up to a maximum of ten, that form your application. It can be thought of as a blueprint for your application. Task definitions specify parameters for your application, for example which containers to use, which ports should be opened for your application, and what data volumes should be used with the containers in the task.
* A task is the instantiation of a task definition within a cluster. You can specify the number of tasks that will run on your cluster. The Amazon ECS task scheduler is responsible for placing tasks within your cluster. A task will run anywhere from one to ten containers, depending on the task definition you defined
* When Amazon ECS runs the containers that make up your task, it places them on an ECScluster. The cluster (when you choose the EC2 launch type) consists of a group of EC2 instances each of which is running an Amazon ECS container agent.
* Amazon ECS provides multiple scheduling strategies that will place containers across your clusters based on your resource needs (for example, CPU or RAM) and availability requirements.

? Amazon ECS cluster options
* key question: Do you want to manage that Amazon ECS cluster that runs the containers?
  * if yesm create an Amazon ECS cluster backed by Amazon EC2 (provides more granular control over infrastructure)
  * if nom create an Amazon ECS cluster backed by AWS Fargate (easier to maintainm focus on your applications)

* Amazon ECS cluster backed by Amazon EC2
todo you manage
container ins1    cnt-inst2     cnt-inst3
app               app           app
docker engines (one per OS in the cluster)
VM guest operationg systems in the Amazon ECS cluster

* Amazon ECS cluster backed by Fargate
todo you manage
container ins1    cnt-inst2     cnt-inst3
app               app           app
todo aws manage
docker engines (one per OS in the cluster)
VM guest operationg systems in the Amazon ECS cluster

* => When you create an Amazon ECS cluster, you have three options:
  * A Networking onlu cluster  (powered by AWS fargate)
  * an EC2 linux + networking cluster
  * An EC2 windows + networking cluster
* If you choose one of the two EC2 launch type options, you will then be prompted to choose whether the cluster EC2 instances will run as On-Demand Instances or Spot Instances.  In addition, you will need to specify many details about the EC2 instances that will make up your cluster—the same details that you must specify when you launch a stand lone EC2 instance. . In this way, the EC2 launch type provides more granular control over the infrastructure that runs your container applications because you manage the EC2 instances that make up the cluster. 

* Amazon ECS keeps track of all the CPU, memory, and other resources in your cluster. Amazon ECS also finds the best server for your container on based on your specified resource requirements.

* If you choose the networking-only Fargate launch type, then the cluster that will run your containers will be managed by AWS. With this option, you only need to package your application in containers, specify the CPU and memory requirements, define networking and IAM policies, and launch the application. You do not need to provision, configure, or scale the cluster. It removes the need to choose server types, decide when to scale your clusters, or optimize cluster packing. The Fargate option enables you to focus on designing and building your applications

? 5. What is kubernetes
* Kubernetes is open source software for container orchetration.
  * deploy and manage containerized application at scale
  * the same toolset can be used on premises and in the cloud
* Complements Docker,
  * docker enables you to run multiple containers on a single OS host.
  * Kubernets orchestrates muliple docker hosts (nodes)
* automates -
  * container provisioning
  * networking
  * load distribution
  * scaling

* => Kubernetesis opensource software for container orchestration. Kubernetes can work with many containerization technologies, including Docker. Because it isapopular open source project, a large community of developers and companies build extensions, integrations, and plugins that keep the software relevant, and new and in-demand features are added frequently.
* Kubernetes enables you to deploy and manage containerized applicationsat scale.With Kubernetes, you canrun any type of containerized application by using the same toolset in both on-premises data centers and the cloud. Kubernetes manages a clusterof compute instances (called nodes).It runs containers on the cluster, which are based on where compute resources are available and the resource requirements of each container. Containersare run in logical groupings called pods.You can run and scale one or many containers together as a pod. Each pod is given an IP address and a single Domain Name System (DNS) name, which Kubernetes uses to connect your services with each other and external traffic.
* A key advantage of Kubernetes is that you can use it to run your containerized applications anywhere without needing to change your operational tooling. For example, applications can be moved from local on-premises development machines to production deployments in the cloud by using the same operational tooling. 

? 6 Amazon Elastic kubernetes service (Amazon EKS)
* Amazon Elastic Kubernetes Service (Amazon EKS)
  * enables you tu run kubernetes on AWS
  * Certified kubernetes conformant (supports easy migration)
  * supports linux and Windows containers
  * Compatible with kubernetes communitty tools and supports popular kubernetes add-ons
* Use Amazon EKS to -
  * Manage clusters of Amazon EC2 compute instances
  * Run containers that are orchestrated by Kubernets on those instances

* => You might think that you could launch one or more Amazon EC2 instances, install Docker on each instance, install Kubernetes on the cluster, and manage and run Kubernetes yourself. While that is an option, AWS provides a service called Amazon Elastic Kubernetes Service (Amazon EKS) that simplifies the management of Kubernetes clusters.
* Amazon Elastic Kubernetes Service (Amazon EKS) is a managed Kubernetes service that makes it easy for you to run Kubernetes on AWS without needing to install, operate, and maintain your own Kubernetes control plane. It is certified Kubernetes conformant, so existing applications that run on upstream Kubernetes are compatible with Amazon EKS
* Amazon EKS automatically manages the availability and scalability of the cluster nodes that are responsible for starting and stopping containers, scheduling containers on virtual machines, storing cluster data, and other tasks. It automatically detects and replaces unhealthy control plane nodes for each cluster. You can take advantage of the performance, scale, reliability, and availability of the AWS Cloud, which includes AWS networking and security services like Application Load Balancers for load distribution, IAM for role-based access control, and VPC for pod networking.
* You may be wondering why Amazon offers both Amazon ECS and Amazon EKS, since they are both capable of orchestrating Docker containers. The reason that both services exist is to provide customers with flexible options. You can decide which option best matches your needs

? 7. Amazon Elastic Container Registry (Amazon ECR)
* Amazon ECR is a fully managed Docker container registry that makes it easy for developers to store, manage, and deploy Docker container images.
  * amazon ECS integration
  * docker support
  * team collaboration
  * access control
  * third-party integrations

* => Amazon Elastic Container Registry (Amazon ECR)is a fully managed Docker container registry that makes it easy for developers to store, manage, and deploy Docker container images. It is integrated with Amazon ECS, so you can store, run, and manage container images for applications that run on Amazon ECS. Specify the Amazon ECR repository in your task definition, and Amazon ECS will retrieve the appropriate images for your applications.

* Amazon ECR supports Docker Registry HTTP API version 2, which enables you to interact with Amazon ECR by using Docker CLI commands or your preferred Docker tools. Thus, you can maintain your existing development workflow and access Amazon ECR from any Docker environment—whether it is in the cloud, on premises, or on your local machine.

* You can transfer your container images to and from Amazon ECS via HTTPS. Your images are also automatically encrypted at rest using Amazon S3 server-side encryption.

* It is also possible to use Amazon ECR images with Amazon EKS. See the Using Amazon ECR Images with Amazon EKSdocumentation at https://docs.aws.amazon.com/AmazonECR/latest/userguide/ECR_on_EKS.htmlfor details.© 2022, Amazon Web Services, Inc. or its affiliates. All rights reserved.65Amazon Elastic Container Registry (Amazon ECR)Amazon ECR is a fully managed Docker container registry that makes it easy for developers to store, manage, and deploy Docker container images.

Section 4 keys takewawys
* Containerscan hold everything that an application needs to run.•Dockeris a software platform that packages software into containers. 
* A single application can span multiple containers.
* Amazon Elastic Container Service (AmazonECS) orchestrates the running of Docker containers.
* Kubernetesis open source software for container orchestration. 
* Amazon Elastic Kubernetes Service (AmazonEKS) enables you to run Kubernetes on AWS•Amazon Elastic Container Registry (AmazonECR) enables you to store, manage, and deploy your Docker containers

*/