---
title: "AI Is Forcing Ethernet To Become Something It Was Never Designed To Be"
date: "2026-06-03"
tag: "AI Infrastructure"
readTime: "5 min read"
excerpt: "For decades Ethernet accepted packet loss as normal. Now the largest AI environments in the world are spending significant engineering effort trying to avoid it. That shift is more interesting than it sounds."
coverImage: "/ai-ethernet-header.png"
---

One thing that surprised me while studying AI fabrics is that the conversation is rarely about speed.

At least not in the way most network engineers think about it.

For most of my career, Ethernet followed a simple model. Networks get congested. Packets get dropped. Endpoints recover. Life goes on.

It works so well that we barely think about it anymore.

Then I started digging into RoCEv2, PFC, ECN, and the design choices behind modern AI clusters.

What stood out wasn't the bandwidth.

It was how much effort the industry is putting into preventing packet loss in the first place.

That felt backwards.

For decades, Ethernet accepted packet loss as a normal part of operation. Now some of the largest AI environments in the world are spending significant engineering effort trying to avoid it.

Why?

Because AI training workloads expose a weakness that traditional applications could usually tolerate.

In a typical enterprise network, a dropped packet affects a flow. TCP retransmits. The application continues.

In a distributed AI training job, thousands of GPUs are working together. When one flow slows down, thousands of GPUs can end up waiting for the slowest participant to catch up.

The network suddenly becomes part of the compute problem.

That changes the design priorities completely.

The interesting question is not whether InfiniBand can deliver lower latency than Ethernet.

The interesting question is why so much of the industry is investing in Ethernet anyway.

The answer is less about latency and more about operational reality.

Most organizations already know how to operate Ethernet. Their teams understand it. Their monitoring platforms understand it. Their automation workflows understand it. Their procurement processes understand it. Their data centers are already built around it.

As AI adoption grows, asking organizations to learn an entirely new networking ecosystem on top of everything else becomes a difficult business decision.

So instead of replacing Ethernet, the industry started adapting it.

RoCEv2 brought RDMA to Ethernet. PFC was introduced to reduce drops for specific traffic classes. ECN allowed congestion to be signaled before buffers overflowed.

The goal was not to turn Ethernet into InfiniBand. The goal was to make Ethernet predictable enough for workloads that care deeply about congestion and packet loss.

I spun up a Nexus 9000v fabric in CML and configured PFC and ECN end to end to validate these mechanisms in practice.

The surprising part wasn't the configuration itself.

It was realizing how much consistency is required across the entire fabric.

A single switch with a different QoS policy.

A queue mapped incorrectly.

A trust boundary configured differently than expected.

Suddenly the behavior you're counting on starts to disappear.

The challenge is not understanding PFC.

The challenge is operating an entire fabric that depends on it.

That's the part that doesn't show up in vendor documentation.

RoCEv2 solved the protocol problem. It did not solve the operational problem.

AI is not changing networking because it needs more bandwidth. Networking has been delivering more bandwidth for years.

AI is changing networking because it is forcing us to revisit assumptions that have been true for decades.

Ethernet became the dominant networking technology in the world because it embraced a best effort model.

Today, some of the most advanced AI environments are asking Ethernet to behave in a far more deterministic way.

That's not a small ask.

And the engineering required to deliver it is exactly why AI infrastructure is one of the most interesting design challenges in networking right now.

Not because Ethernet is being replaced.

But because Ethernet is being asked to become something it was never originally designed to be.
