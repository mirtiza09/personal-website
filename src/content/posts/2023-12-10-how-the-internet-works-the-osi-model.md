---
template: blog-post
title: How the Internet works - The OSI Model
slug: /internet
date: 2023-12-10 11:47
description: >-
  
  Discover the intricate workings of the internet with my latest article on the OSI Model. This seven-layer theoretical model offers a fascinating glimpse into the ideal workings of network communication, contrasted by the more practical TCP/IP model used today. Although the OSI model faced resistance for its complexity, it remains an invaluable tool for understanding the technological foundations of the internet.


  In this overview, we journey through the layers of the OSI Model, exploring how data is transformed through each layer's unique Protocol Data Unit (PDU). From the Application Layer, where user-focused services like email and web browsing reside, to the Presentation and Session Layers managing data formatting and communication sessions, each layer plays a pivotal role.


  We also delve into the Transport Layer, crucial for reliable data transmission, and the Network Layer, which orchestrates efficient data routing. The Data Link Layer ensures error-free transmission, and the Physical Layer deals with the raw transmission of data bits.


  This article is just the start. Keep an eye out for a follow-up piece where I'll dive deeper into the software components that power our global web experiences.
featuredImage: /assets/dall·e-2023-12-10-10.56.02-a-conceptual-image-representing-the-open-systems-interconnection-osi-model-in-a-teal-and-black-color-scheme-without-any-text.-the-illustration-shou.png
---
<!--StartFragment-->

The Open Systems Interconnection (OSI) Model is a theoretical, 7-layered reference model that tries to conceptualize how the internet should operate, however, the simpler TCP/IP model represents how the modern internet actually works. The OSI model represents an ideal state of how networks work, and it was resisted by many internet vendors when it was proposed along with the OSI Protocol Suite as it was considered too complicated, idealistic, and difficult to implement. However, despite its shortcomings, the OSI model is an excellent conceptual model to understand the technological underpinnings of the internet.

Please note that this is a very high-level overview of the internet, primarily relating to how data is being transferred through hardware and software means. A follow-up article can be expected in which we delve deeper into the software components of how the world-wide web works.

As data moves through the different layers, it is transformed. a PDU (Protocol Data Unit) refers to a unit of data specified in a protocol of a given layer. The OSI model has seven layers, and each layer has its own form of PDU, which contains information necessary for the transmission and interpretation of data.

# Application Layer

The Application Layer in the OSI Network Model is responsible for providing services to end-users, such as email, file transfer, and web browsing. This layer interacts directly with the user and their applications, and is the highest layer in the OSI Model. Its primary function is to manage communication between the user’s application and the lower layers of the OSI model. This layer provides a variety of protocols that help applications interact with other applications running on different machines. Some of the commonly used protocols at this layer include HTTP, FTP, SMTP, and DNS. Overall, the Application Layer is a critical component of the OSI Model as it provides services to end-users and ensures that their communication needs are met.

PDU: Data

# Presentation Layer

The Presentation Layer in the OSI Network Model is responsible for the syntax and semantics of data exchanged between network applications. This layer ensures that the data exchanged between two applications is in a format that can be understood by both parties. It takes care of data translation, encryption, and compression, making sure that the data is presented to the Application Layer in a standardized and easily understandable format. The Presentation Layer also handles data representation, such as character encoding and data conversion from one format to another. This layer is critical in ensuring that the data is presented in a format that can be processed by the receiving application, and thus, is crucial in the successful transmission of data across a network.

PDU: Data

# Session Layer

The Session Layer in the OSI Network Model manages the communication sessions between two network applications. This layer establishes, manages, and terminates sessions between two applications, allowing them to exchange data in an organized and controlled manner. The Session Layer handles synchronization between applications, ensuring that data is transmitted and received in an orderly fashion. It also handles the resumption of a session if it is interrupted by a network error or failure. This layer is essential in managing the flow of data between applications and ensuring that the data is transmitted accurately and efficiently. The Session Layer plays a critical role in the OSI model, as it enables applications to communicate with each other in a seamless and reliable manner.

PDU: Data

# Transport Layer

The Transport Layer in the OSI Network Model is responsible for ensuring reliable communication between applications. This layer establishes end-to-end connections between applications, ensuring that data is transmitted correctly and in the right sequence. It also manages flow control and congestion control, ensuring that the network is not overloaded with data. The Transport Layer offers two types of protocols: Transmission Control Protocol (TCP) and User Datagram Protocol (UDP). TCP offers reliable communication, as it ensures that all packets are delivered and received in the correct order. UDP, on the other hand, offers faster communication, but it is not reliable as it does not guarantee packet delivery. The Transport Layer is crucial in ensuring that data is transmitted accurately and efficiently, playing a vital role in the success of network communication.

PDU: Segment/Datagram

# Network Layer

The Network Layer in the OSI Network Model is responsible for routing data packets between different networks. This layer ensures that data is transmitted from the source to the destination by selecting the most efficient path through the network. The Network Layer uses logical addresses, such as IP addresses, to identify devices on the network and ensure that packets are sent to the correct destination. It also handles the fragmentation and reassembly of packets when data is too large to be transmitted in a single packet. The Network Layer is critical in enabling communication between different networks, and it plays a key role in ensuring that data is delivered efficiently and reliably.

PDU: Packets

# Data Link Layer

The Data Link Layer in the OSI Network Model is responsible for providing error-free transmission of data frames over the physical layer. It is divided into two sublayers — the Media Access Control (MAC) Layer and the Logical Link Control (LLC) Layer. The MAC Layer handles the addressing of frames at the physical layer, while the LLC Layer provides flow control and error checking mechanisms for the data transmission. The Data Link Layer also ensures that data is transmitted reliably and without errors by using techniques such as cyclic redundancy check (CRC) and checksums. The Data Link Layer is crucial in ensuring the reliable and efficient transmission of data over a network.

PDU: Frames

# Physical Layer

The Physical Layer in the OSI Network Model is responsible for the transmission of raw data bits over a physical medium, such as copper wires or fiber optic cables. It deals with the electrical and mechanical aspects of transmitting data, such as the voltage levels used to represent 0s and 1s, and the physical characteristics of the cables used to transmit the signals. The Physical Layer also specifies the physical properties of the network interface card (NIC) used to transmit and receive data on the network. In summary, the Physical Layer provides the physical means for transmitting data between devices in a network.

PDU: Bits

<!--EndFragment-->