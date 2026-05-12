---
title: "The CCDE Got Electives. Almost Nobody Is Talking About It."
date: "2026-05-08"
tag: "CCDE Journey"
readTime: "4 min read"
excerpt: "Cisco updated the CCDE over a year ago and added electives. One of them is AI Infrastructure. Almost nobody in traditional networking knows it exists."
coverImage: "/ccde_electives.png"
---

I check Cisco's certification roadmap more than I probably should. New versions, retirements, track changes. I follow all of it. So when Cisco updated the CCDE a little over a year ago, I caught it early.

The CCDE has always been what the CCIE is not. Where the CCIE tests if you can build and troubleshoot, the CCDE tests if you can think. Requirements, tradeoffs, design decisions, failure domains. It's the certification Cisco created after they retired the architecture track. The closest thing left to an actual network architect credential.

What surprised me with this update was the electives.

Four of them: Large Scale Networks, Cloud, Mobility, and AI Infrastructure. The written exam covers core design topics regardless of which path you choose. The practical, the eight hour scenario exam, is where the elective comes in. Your fourth scenario is the one you picked.

I chose AI Infrastructure.

Not because it was the obvious choice. When I first saw it I honestly wasn't sure. But the more I read the technology list, lossless fabrics, RoCE, RDMA, GPU cluster design, InfiniBand, DPUs, PTP, the more it clicked. This is where networking is going. Not in five years. Now. The engineers designing AI data centers for the companies building this infrastructure need to understand these concepts deeply, and almost nobody in traditional networking does.

Here's what I think most people miss about the CCDE: it's not just a harder CCIE. The mindset is completely different. A CCIE answer is right or wrong. A CCDE answer is justified or unjustified. You can recommend two completely different designs for the same scenario and both can be correct, if you can defend the tradeoffs.

That shift from "make it work" to "make it right for this business" is harder than it sounds for people who've spent years in implementation and troubleshooting.

I'm documenting this journey here. The design thinking, the AI infrastructure concepts, the labs, the tradeoffs. Partly because writing forces me to actually understand something instead of just recognizing it. Partly because there's almost no public content from someone going through this specific path right now.

FluxFabric is where I'll put all of it.

If you're a network engineer who's been watching AI infrastructure explode and wondering where you fit in, this might be worth following.
