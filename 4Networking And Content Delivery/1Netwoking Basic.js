/*
! Network
* a computer network is two or more machine that are connected together in order to communicate. A Network can be logically partitioned into subnets.
* Networking requires a networking device such as a router or a switch. This connects all the machines together and enables communication between them. 

* each machine on the network has a unique Internet Protocol address assigned to it. an IP address as it is known, is a unique number assigned to a machine in order to identify it uniquely.

192.0.2.0 
192 -> 11000000
0 -> 00000000
2 -> 00000010
0 -> 00000000

* An IP Adress is similar to a phone number. it has to be unique
* Machine convert that decimal number to binary format in order to use it. 
* each number of the address representa a maximum of 8 bits, it means that each of the four number can be anything from 0-255.
* The combined total of the four numbers for an IP address is 32 bits in binary format.
* 32-bit IP address is called an IPv4 address. 
* IPv6 addresses also exist and use 128 bits.

IPv4(32-bit) address: 192.0.2.0
IPv6 (128-bit) address: 2600:1f18:22ba:8c00:ba86:a05e:a5ba:00FF

* IPv6 addresses can accommodate more user devices and were invented to compensate for the fact that IPv4 addresses are in short supply.
* each of the eight colon-separated groups of the IPv6 address respressent 16 bits. That means each of the eigth groups can anything from 0-ffff

? Classless Inter-Domain ROuting(CIDR)
* CIDR address is expressed as an IP address which is the first address of the network. it's followed then by a / character. The number after the / character tells you how many bits of the routing prefix much be steady and allocated for the network identifier. The bits rhat are not fixed are allowed to change.

network identifier (routing prefix)   Host identifier
192.    0.      2.                    0(flexible to 255)/   24
fixed   fixed   fixed 

24 tells you how many bits are fixed
=> this means that 256 IP addresses are availabe for the network 
they go in range from 192.0.2.0 all the way to 192.0.2.255
* CIDR is a way to express a group of IP addresses that are consecutive to each other. 

? Open System Interconnection (OSI) model
* The OSI model is a conceptual model that is used to explain data as it travels over a network. 

* The OSI model can be used to uderstand how communication takes place in the cloud and in basic networking.

*LAYER          Number    Function
application       7       Means for an application to access a computer network (HTTP(s), FTP, DHCP, LDAP)
presentation      6       ensure that the application layer can read the data, encryption (ASCI, ICA)
session           5       Enables orderly exchange of data (NetBIOS, RPC)
transport         4       Provides protocols to support host-to-host communication (TCP, UDP)
network           3       Routing and Packet forwarding, routers (IP)
data link         2       Transfer data in the same LAN network(hubs and switcher) (MAC)
physical          1       Transmission and reception of raw bitsreams over a physical medium(signals(1s and 0s))


*/