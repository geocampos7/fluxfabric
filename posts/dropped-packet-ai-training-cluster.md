---
title: "A Dropped Packet in an AI Training Cluster Is Not the Same as a Dropped Packet Anywhere Else"
date: "2026-05-27"
tag: "AI Infrastructure"
readTime: "5 min read"
excerpt: "In traditional networks TCP recovers. In AI training clusters the entire job waits. Understanding why changes how you think about fabric design completely."
coverImage: "/dropped-packet-ai-header.png"
---

Network engineers already know packet loss is serious.

In a well-designed data center fabric, 1% loss is not something you ignore. It means something is wrong.

Experienced engineers don't dismiss packet loss anywhere.

But in traditional networks, there is a safety net.

TCP retransmits. The session recovers. The application continues. The blast radius of a dropped packet is one flow, maybe one user, maybe a brief slowdown.

Contained.

That safety net doesn't exist in AI training infrastructure.

And understanding why changes how you think about fabric design completely.

Training a large AI model isn't a single workload running on a single server. It's a distributed job spread across hundreds or thousands of GPUs, all working on pieces of the same problem simultaneously.

To make progress, those GPUs have to constantly synchronize with each other, sharing updates through an operation called AllReduce. Every GPU sends its results to every other GPU, they agree on the updated state, and then the next computation step begins.

The word that matters there is every.

Not most. Not the majority.

**Every GPU has to complete the synchronization before anyone moves forward.**

Which means if one flow stalls, one dropped packet, one moment of congestion that pauses a sender, the entire job waits. Every GPU in the cluster sits idle until that one flow recovers.

On a cluster of a thousand GPUs running a job that costs thousands of dollars per hour, that idle time is not a small thing. It compounds across millions of synchronization steps throughout the training run.

Recovery time that is invisible in a web application becomes genuinely expensive here.

This is why AI training fabrics are engineered around lossless Ethernet.

Not lower loss. As close to zero loss under congestion as the fabric can be designed to achieve.

The network is engineered to avoid loss under congestion as aggressively as possible, because the compute model cannot afford the time TCP needs to recover.

That changes every design decision you make about the fabric. Which hardware you select. How you size and manage buffers. How you configure congestion control. How you think about failure domains and what happens when something goes wrong mid-training.

**In a traditional fabric those are infrastructure decisions.**

**In an AI training fabric they are compute decisions.**

The network is part of the pipeline, not just the transport underneath it.

Getting that right is where the real architecture work begins.

And it starts with understanding that a dropped packet here is not a recoverable event.

**It is everyone's problem at the same time.**
