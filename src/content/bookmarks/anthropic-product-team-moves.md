---
type: YouTube
title: "How Anthropic's product team moves faster than anyone else"
source: "Lenny's Podcast · Cat Wu"
href: "https://www.youtube.com/watch?v=PplmzlgE0kg"
date: 2026-04-23
---

## Episode Summary

This episode features **Cat Woo**, Head of Product for **Claude Code and Co-work at Anthropic**, in conversation with **Lenny**.

The discussion centers on how AI is changing product management, software development, and team workflows. Cat explains that PM work is shifting away from long planning cycles and toward fast iteration, product taste, evals, and helping teams ship usable features every week — sometimes every day.

A major theme is that as code becomes cheaper to write, **deciding what to build becomes more valuable**. Cat argues that the best PMs in AI-native companies need strong product taste, technical curiosity, the ability to work across disciplines, and a deep understanding of model behavior.

She also shares how Anthropic ships so quickly, how Claude Code and Co-work are used internally, why the PM/engineer/designer boundaries are blurring, and how teams can use AI to automate repetitive work while focusing more energy on creative and strategic work.

Key ideas from the episode:

* AI-native product teams need to move much faster than traditional product teams.
* PMs still matter, but the role is becoming more technical, more cross-functional, and more taste-driven.
* Product consistency may be sacrificed in exchange for speed and experimentation.
* Strong mission alignment helps Anthropic make fast decisions across teams.
* The best AI PMs understand current model limits and design products that elicit maximum capability from today's models.
* Evals are becoming a core product management skill.
* Claude Code is best for code outputs; Co-work is best for non-code work like decks, docs, inbox workflows, and customer prep.
* AI agents work best when users push automations from "95% good" to truly reliable.
* The future may involve managing dozens or hundreds of agents at once.

---

## Speaker-Labeled Transcript

### Opening Highlights

**Cat Woo:**
I think it is very hard to be the right amount of AGI-pilled. It's very easy to build the product for the super-AGI, extremely strong model.

The hard thing is figuring out, for the current model, how do you elicit the maximum capability?

**Lenny:**
I've never seen anything like the pace you folks at Anthropic are shipping at.

**Cat Woo:**
We want to remove every single barrier to shipping things.

The timelines for a lot of our product features have gone down from six months to one month, and sometimes to even one day.

**Lenny:**
You're interviewing hundreds of PMs, and you just keep feeling like they're approaching it very incorrectly.

**Cat Woo:**
The PM role is changing a lot. It's changing really quickly.

The thing that is extremely important for building AI-native products is iterating quickly — figuring out a way to actually launch features every single week.

**Lenny:**
What do you think are the emerging skills PMs need to develop?

**Cat Woo:**
It comes back to product taste.

As code becomes much cheaper to write, the thing that becomes more valuable is deciding what to write.

---

### Introduction

**Lenny:**
Today my guest is Cat Woo, Head of Product for Claude Code and Co-work at Anthropic.

Cat is at the center of everything changing in AI, product, and building. She and her team are building the product that is most changing the way that we all build our products.

She is full of insights, wisdom, and lessons. This is an episode you cannot miss.

Before we get into it, don't forget to check out Lenny's Podcast for an insane set of deals available exclusively to Lenny's Newsletter subscribers.

With that, I bring you Cat Woo.

Cat, welcome to the podcast.

**Cat Woo:**
Thanks for having me.

---

### Cat's Role on Claude Code

**Lenny:**
I have so many questions. I'm so excited to have you on this podcast.

I want to start by helping people understand your role alongside Boris.

Everybody knows Boris. His episode is the number one most popular episode on this podcast — no pressure.

He created Claude Code. He leads the team. He ships a bazillion PRs a day from his phone. I don't even know what the number is anymore.

But I think people don't give you enough credit for the success Claude Code has had, and Co-work, and all the things you all are building.

Help us understand your role on the team, how you work with Boris, how you split responsibilities, and what the PM role looks like on the Claude Code team.

**Cat Woo:**
I feel very lucky to work with Boris. He's been an amazing thought partner.

He's our tech lead. He's very much the product visionary, and he is great at setting, "This is what the product needs to be three months or six months from now. This is what the AGI-pilled version of the product is."

A lot of my role is figuring out the path from where we are today to that vision three to six months from now.

I spend more of my time on the cross-functional side: making sure our marketing team, sales team, finance, capacity, and other teams are bought into the plan and that we're all rowing in the same direction.

Then, once a feature is ready, I make sure there aren't any blockers to shipping it.

In many ways, it works well because we kind of mind-meld. But the line is actually remarkably blurry.

I think we're 80% mind-melded. Then there's maybe 20% of things I care a lot more about, so I'll drive those. And there's 20% where he cares a lot more than me, and he drives those.

---

### How AI Changes the PM Role

**Lenny:**
Something you shared before we started recording is that you're interviewing hundreds of PMs all the time.

If I had a nickel every time someone asked me for an intro to someone at Anthropic to work there as a PM, I'd have $30 billion in ARR. It's the number one place people want to go work.

So I can only imagine how many PMs you're interviewing.

You told me you're seeing people approach it incorrectly — what they think it takes to be a successful AI PM.

Talk about what you're seeing and what people need to understand about what it takes to be successful these days.

**Cat Woo:**
Before AI, technology shifts were a lot slower.

You could plan on six-to-12-month time horizons. And because you were shipping features at a slower rate, there was a lot more emphasis on coordinating with partner teams to make sure they were shipping features that unblocked your features.

At that time, code was very expensive to make.

Now, with AI and with how much it has accelerated engineering, and with how quickly model capabilities are improving, the timelines for a lot of our product features have gone down from six months to one month, and sometimes to one week or even one day.

With that, we need to make sure products ship quickly.

As a PM, there should be less emphasis on aligning multi-quarter roadmaps with partner teams and more emphasis on asking: how can we get something out the door as fast as possible?

How can we create a concept corner of our product suite where an engineer or PM has an idea, and by the end of the week, it's in users' hands?

The PMs who do best on AI-native products are the ones who can shorten the time between having an idea and getting the product into users' hands.

They also help define the most important tasks that need to work out of the box for the product.

---

### What Helps Teams Move Faster?

**Lenny:**
What I love about this is that you're saying people haven't grasped how fast they need to move, and how much of the job now is helping the team move fast.

What helps do that?

What do you and your PM team do to help the team move this fast, other than having access to the most advanced models?

**Cat Woo:**
The first thing is setting clear goals.

LLMs are so general that they create a lot of ambiguity around who we're building for, what problems we're solving, and what the top use cases are.

A great PM can say, "Our key user is professional developers. The main problem we want to solve for this feature is that there are too many permission prompts and people are feeling fatigue. The use case is that we want professional developers at enterprises to safely get to zero permission prompts."

That sets a clear goal because it rules out a lot of potential approaches.

The second thing is figuring out a repeatable process for getting features shipped.

For Claude Code, we ship almost all of our features in research preview. We clearly brand this when we ship something so users know it's an early product. It's an idea we're trying to get feedback on, and it might not be supported forever.

That reduces our commitment for shipping something. We can get something out in a week or two.

The third thing a PM should do is create the framework for the team so they know when to pull in cross-functional partners and what those partners' expectations are.

For example, we have a tight process between engineering, marketing, and docs.

When engineers have a feature they feel is ready, and we've dogfooded it internally, they post it in our evergreen launch room.

Then Sarah, who leads docs; Alex, who leads PMM; and Tara and Lydia on DevRel jump in and can turn around the marketing announcement the next day.

Because we have this tight process, it lowers the friction for any engineer to ship something.

PM is the role that should be setting this up.

---

### PRDs in an AI-Native Team

**Lenny:**
How do PRDs fit into this?

You said goals are really important: aligning on what success looks like, who it's for, who it's not for.

Are you writing PRDs? Is it a couple bullet points? How has that evolved in the world of AI PM?

**Cat Woo:**
There are two things we do.

First, we have very rigorous metrics, and we do metrics readouts with the entire team every week.

The goal is to make sure everyone deeply understands all facets of our business: our key goals, how they're trending, and what drives them.

Second, we have a list of team principles.

This includes who our key users are and why those are our key users.

We articulate all of this so everybody on the team understands how our business works, what's important to us, and what we're willing to trade off.

It lets people make decisions by themselves without feeling blocked on PM or any other stakeholder.

**Lenny:**
I love how so much of this is, "Okay, we still need PMs in the future."

There's so much talk of, "Why do we need PMs? We're just going to ship and build. We need engineers."

**Cat Woo:**
We actually do PRDs sometimes.

For features that are particularly ambiguous, it helps to write a one-pager on what the goals are, what the delightful use cases are, and what the current failure modes are that we need to fix.

There are also projects, especially things that require heavy infrastructure, that take many months. For those situations, we still write PRDs.

---

### How Anthropic Ships So Fast

**Lenny:**
I want to drill further into how you're able to move so fast.

I've never seen anything like the pace folks at Anthropic are shipping at.

Someone made a calendar of launches across Anthropic, and it was literally every day there was a major feature or product.

One question people had online is that you recently built this incredible model, Mythos, that's still in preview because it's so powerful people are a little afraid of what it can do.

Have you been using this? Is this part of why you move so fast?

**Cat Woo:**
We've been moving pretty fast for several quarters now, so I don't think it's fully Mythos.

Mythos is an incredibly powerful model.

We do use the models internally, and this has increased our rate of shipping a little bit, but I don't think it explains the bulk of the increase.

A lot of it is the process and the expectation on the team.

We are very low on process. We want to remove every single barrier to shipping things.

We want every person on the team to feel empowered to take their idea from just an idea to out in the world in less than a week — sometimes even in a day.

**Lenny:**
What an advantage to have the best model and also be building product. That's so cool.

**Cat Woo:**
We are very lucky to work with frontier models.

---

### Claude Code Source Code Leak

**Lenny:**
There are a couple side quests I want to go on because there's so much happening with Anthropic.

One is that a week ago or so, the whole source code of Claude Code leaked. Somebody got it out there. I think it was a mistake someone made.

Is there anything you can comment on there? What happened? What went wrong? What should people know?

**Cat Woo:**
We immediately looked into this when we saw it.

We realized it was the result of human error.

There was a human working with Claude to write a PR. It was an update to how we release our packages, and it went through two layers of human review.

So this was a result of human error.

We've hardened our processes to make sure it doesn't happen in the future.

**Lenny:**
Is this person still at Anthropic? Are they doing all right?

**Cat Woo:**
Yes. It's a process failure.

The most important thing is to learn from it and add more safeguards so it doesn't happen again.

That's what we've been focused on, and most of those safeguards have shipped.

---

### Open Claude and First-Party Product Prioritization

**Lenny:**
Another question I had is about Open Claude.

Recently there's been this move to keep people from using Claude subscriptions with their Open Claude tools. People got really upset.

They're confused why this is happening. They feel there's harm caused to the open-source community.

What do people need to understand about what went into this decision?

**Cat Woo:**
We've been seeing a lot of demand for Claude.

We've been working very hard to scale our infrastructure and also to make our harness more token-efficient so people can get more usage out of it.

It wasn't designed for third-party products, which have different usage patterns than our first-party ones.

We spent time figuring out the most seamless transition we could offer.

I was very happy to say that everyone gets some credits alongside their subscription.

But we did have to make the hard decision that we needed to prioritize our first-party products and our API.

That's where this decision came from.

**Lenny:**
That makes so much sense to me.

You're subsidizing this usage at $200 a month, and people are basically using it like unlimited compute. I think people don't always understand that businesses are trying to make money and be profitable. You can't just give away compute when it's so in demand.

---

### The PM Team at Anthropic

**Lenny:**
Coming back to the PM team, what does the PM team look like at Anthropic?

How many PMs are there? How are they organized?

**Cat Woo:**
We have a few PM teams. I think we're maybe around 30 or 40 PMs right now.

We have the research PM team, which Diane leads. That team is responsible for understanding feedback from customers on our models, feeding that to the research team, and shepherding model launches.

There's the Claude Developer Platform team, which maintains the APIs Claude Code is built on top of. They also release things like managed agents, which is a way to build agents that we host on your behalf.

Then there's Claude Code, which works on both Claude Code and Co-work core products.

There's Enterprise, which helps make Claude Code and Co-work easier for enterprise customers to adopt. That includes cost controls, RBAC, security controls, and making sure enterprises feel confident using our tools.

Then we have our Growth team, which is responsible for growth across the entire product suite.

We work closely with them on Claude Code and Co-work growth, and they also work with our other teams on CDP growth — people who use the Claude API.

---

### Will AI Increase or Decrease PM Hiring?

**Lenny:**
Amol was just on the podcast and had an interesting insight.

There's always this sense that we need fewer PMs in the future. Why do we need PMs? Engineers can just ship.

His take is that because engineers are moving so fast, PMs and designers are squeezed. There's less time to stay on top of everything happening, because a feature is shipping every day.

His take is he needs more PMs because it's hard to keep up.

What's your take? Will there be an increase in PM hiring? What's going on with the PM profession long-term?

**Cat Woo:**
I think all of the roles are merging.

PMs are doing some engineering work. Engineers are doing PM work. Designers are PMing and also landing code.

You can either hire a lot more engineers who have great product taste, or you can keep engineering hiring the same and hire more PMs to guide some of their work.

On our team, we're focused on hiring engineers with great product taste.

That way, we reduce the amount of overhead for shipping any product.

There are many engineers on our team who can go end-to-end: see user feedback on Twitter, build the product, and ship it by the end of the week with almost no product involvement.

That is the most efficient way to ship something.

So engineer and PM are overlapping, and you get a lot of benefit from having more of either.

Product taste is still a very rare skill, and we'll pretty much hire anyone who has demonstrated it strongly.

**Lenny:**
And your background was in engineering, right?

**Cat Woo:**
Yes. I was an engineer for many years. Then I was a VC very briefly before joining Anthropic.

Almost all the PMs on our team have either been engineers or shipped code here on Claude Code.

That helps build trust with the team and enables us to move faster.

Our designers have also been front-end engineers before.

---

### Product Taste as the Core Skill

**Lenny:**
That's the big question.

Roles are merging. The Venn diagrams are combining.

If you're coming from engineering, product, or design, which core skill will be most valuable?

**Cat Woo:**
I still think it comes back to product taste.

As code becomes much cheaper to write, the thing that becomes more valuable is deciding what to write.

What is the right UX for this feature?

What is the most delightful way a user can experience it?

We get tens of thousands of GitHub issues asking for every single thing under the sun. It takes a lot of care and taste to figure out which of these is worth building and what the right way to build it is.

That skill set can come from any background, but I think it's the most important thing.

An engineering background is particularly useful, at least for the next few months, because if you have an engineering background, you have a better sense for how hard something should be.

That factors into prioritization.

If something is very easy to build, maybe instead of debating it, you spend an hour doing it.

But if something is harder to build, and you know upfront that it will cost a lot more for the team to get out the door, that helps with prioritization.

**Lenny:**
You said "for the next few months." Is that because the models might get so good that you may not need engineering knowledge as much?

**Cat Woo:**
The valued skill sets change quite frequently, so it's hard to predict more than a few months out.

It's less a commentary on a specific shift I think will happen, and more that I think large shifts will happen.

Every few months, there seems to be a large increase in coding capability, which changes what other roles are valuable.

The most important thing is having first-principles thinking, where you can figure out how the tech landscape is changing, what the team really needs from you, and then jump in and fix that hole.

The work is becoming more amorphous.

A great PM understands the gaps, figures out the highest-priority ones, and asks, "How do I learn that skill set, or how do I apply the skills I already have to this challenge?"

The current environment values people who can wear a lot of hats, swap them quickly, and be low-ego about what work they do to help the team move faster.

---

### Where Human Brains Still Matter

**Lenny:**
I've been asking people at the bleeding edge of AI where human brains will continue to be useful and necessary until we get to superintelligence.

What I'm hearing is: picking what to work on, knowing where the market is going, prioritizing, and knowing whether the thing you built is good and right.

Does that sound right? Anything else?

**Cat Woo:**
Humans still provide a level of common sense that the models don't.

There are a thousand moving pieces to any product launch. Some are small, but there's always a lot that could go wrong.

The model doesn't always have a great sense of who all the stakeholders are, how they relate to each other, what their preferences are, and what venues are right for communicating with them.

That more tacit, common-sense, EQ-like knowledge is still very valuable.

Of course, we want models to get better at this, and I think they will, but right now there are still gaps.

---

### Staying Sane in Constant Change

**Lenny:**
How do you deal, as a human, with so much constant change?

You're inside the tornado. Maybe it's calm there, but how do you stay on top of what's going on and stay sane?

**Cat Woo:**
Our team is full of people who lean into the chaos.

We try to face every challenge with a smile because there's always so much going on. There are always risks and tricky situations.

If you get too stressed about anything, you'll burn out.

We look for people who can look at a challenge and say, "That's going to be hard, but I'm excited to tackle it. I'm going to do the best I can. I know I won't be perfect, but I'll sleep at night knowing I did my best."

**Lenny:**
That's an interesting answer to what skills will be important in the future.

I forget who said it, maybe Ben Mann, but: this is the most normal the world will ever be.

**Cat Woo:**
Yes, it definitely gets harder.

There are weeks where Sunday night there's a P0. By Monday, there's another P0. By Monday afternoon, there's a P0000.

You think, "Wow, I can't believe I was so worried about that P0 from Sunday."

You have to acknowledge there's only so much you can do.

You need to sleep well so you can make good decisions the next day, brutally prioritize where you spend your time, and be okay letting things go.

There are products we ship that aren't as polished as I wish they were.

But our top goal is helping empower professional developers. If a product isn't perfect, as long as it's not blocking the core use case, it's okay. We'll hear feedback and fix it in the next release.

Launching a feature that's buggy used to keep me up at night. Now I can live with it knowing we'll get quick feedback and fix it in the next release.

**Lenny:**
I'm imagining that Pirates of the Caribbean GIF where someone is walking down stairs on a ship and the whole ship is being demolished around him, but he's so chill.

Everyone I've met from Anthropic is so chill and optimistic.

That feels like an interesting insight: calmness and optimism versus, "Oh my god, everything's crazy."

**Cat Woo:**
If you don't have it, you'll get pretty burnt out.

We also tend to hire people who have been in the industry for a while, have experienced ups and downs, and have a good sense for what gives them energy and how to maintain their energy over time.

That has helped us a lot.

---

### What Gets Lost When Roles Blur?

**Lenny:**
Roles are blurring. Engineers are becoming PMs. Everyone's dogs are cats. Everyone's everyone.

What do we lose in that world?

Do we lose career ladders, clear career paths, design consistency, code quality?

What are some things you find you're sacrificing for the greater good?

**Cat Woo:**
We're sacrificing product consistency.

Historically, when code was expensive to write, you would carefully plan out everything in your product suite: how products relate to each other, what the use case is for each one, how they integrate.

You would usually have one product for each use case.

Now, with AI moving quickly and so many ideas to test, we sometimes have features that overlap.

A lot of the time, it's because there are two form factors we love internally, and we want the external audience to tell us which is better.

For a new user, that means they might not know the best path to accomplish something.

There's more education we need to do to help people understand core features and best practices.

That is the cost of launching a lot of features.

Users also feel like it's hard to keep up with the latest.

With traditional products, you might ship a feature every month or quarter, so users can check in once a month and be fine.

With agentic tools, not just Claude Code and Co-work but across the ecosystem, people feel a need to check Twitter every day to see the latest thing.

There's more we can do to help people feel less like they're on an ever-faster treadmill.

I'd love people to feel like they can open these tools, the tools will educate them or teach them what they want to know, and they'll feel brought along.

---

### PowerUp and Onboarding

**Lenny:**
You launched an interesting feature the other day, I think it's `/powerup`, where it walks you through all the cool ways and best practices to use Claude Code.

Is that along these lines?

**Cat Woo:**
Exactly.

In the past, we didn't want to do something like PowerUp because we felt the product should be intuitive enough that you didn't need a tutorial.

Over time, we realized there are so many features and so much demand for built-in onboarding that we diverged from our original principle of no onboarding flow.

Users wanted to know: there are 100 features, what are the 10 I absolutely need to use?

So we put that together.

---

### Anthropic's Success and Mission Alignment

**Lenny:**
Anthropic has been successful with B2B enterprises, where traditionally you don't launch a bunch of stuff constantly. Maybe you do quarterly releases.

Anthropic's run has been otherworldly.

It started way behind. It was less funded, didn't have distribution, wasn't first to go. OpenAI was way ahead.

Now Anthropic is killing it.

Being on the inside, what are some ingredients that have allowed Anthropic to be this successful and come from behind?

**Cat Woo:**
The two most important things are, first, this unifying mission.

It's hard to state how important this is.

We hire people who care most about bringing safe AGI to all of humanity.

This is something we reference frequently when making decisions about what our product org should focus on shipping.

Because we put the mission above any individual product line, we're able to make very fast decisions that cut across the entire org and execute on them in a unified way.

This is something I've never seen at a company of our scale.

**Lenny:**
Just to make sure that's clear: having the number one mission be safety and alignment, making sure AI is good for the world, makes decisions easier to make.

**Cat Woo:**
If there are two competing priorities, we'll talk about which is more important for Anthropic's mission.

That makes it much easier to decide which one we prioritize.

Then everyone stands behind the decision.

Sometimes that means we want to ship something on Claude Code, but something else is more important, so we deprioritize shipping it and wait until later.

**Lenny:**
What's interesting is that this explains, versus another company that maybe rhymes with BopenBI, why Anthropic isn't launching a social network or a feed of interesting information.

You've stayed focused because of this mission.

**Cat Woo:**
When I think about mission, I think about putting Anthropic's goals ahead of any individual or product.

The second thing we're very good at is focus.

Mission to me is slightly different.

Mission means teams are willing to make sacrifices that hurt their own goals and KRs in service of Anthropic's goals and KRs.

People are very happy to make those trade-offs.

An extreme example is: if Claude Code failed but Anthropic succeeded, I would be extremely happy.

The whole team is willing to make decisions that follow that chain of thought.

**Lenny:**
I don't know if you can talk about this in depth, but do you feel like the Open Claude decision is part of this?

Like, "This is not furthering Anthropic's mission, so we need to stop it"?

**Cat Woo:**
One of the most important things for Anthropic is growing the number of users we're able to reach.

One way we do that is with Claude subscriptions and first-party products.

We want to double down on that, but it does sometimes come at the expense of third-party products.

---

### Claude Code, Desktop, Mobile, and Co-work

**Lenny:**
We've been talking about Claude Code, Co-work, and all these things.

What's the best way to understand when to use each product?

When do you use Claude Code, Claude Desktop, and Co-work?

**Cat Woo:**
I use Claude Code in the terminal when I'm kicking off a one-off coding task and want all the latest features.

The CLI is our initial product surface, and it's often where our features land first. It's the most powerful of the tools.

That's what I use when I'm trying to kick off one or a handful of tasks at a time.

Desktop shines when you're doing something that requires front-end work.

One thing I love is our preview feature. If I'm building a web app, I'll often use Claude Code and Desktop with the preview pane open on the right side, so I can see the web app I'm making in real time as I chat with Claude.

It's also great for people who want something more graphical.

A terminal can feel unfamiliar to someone nontechnical. You get scary popups on your machine, and you can't click around the way you're used to in other products.

If you don't feel comfortable in the terminal, I recommend checking out Claude Code on Desktop.

Desktop is also great for getting an at-a-glance view of everything happening.

You can see CLI terminal sessions, desktop sessions, and sessions kicked off on web and mobile.

It's a one-stop control plane for all your tasks.

The benefit of web and mobile is that they're great for kicking things off on the go.

CLI and desktop require you to be on your local laptop. That's limiting if you're touching grass, going on a walk, or away from your laptop.

I can't count the number of people I've seen holding their laptop open, tethered to their phone, while outside.

Mobile lets you kick off tasks on the go, so you don't need to bring your laptop everywhere.

**Lenny:**
I've seen people on planes where it's such a meme now: "I need this agent to finish. I can't shut this down. I need Wi-Fi."

**Cat Woo:**
Exactly.

For Co-work, the role it fills is work where the output isn't code.

That could be getting to Slack zero or inbox zero, creating a slide deck for a customer meeting, writing a quick doc on feature goals, or writing a launch plan.

All these tasks produce non-code outputs, and Co-work is best positioned for that.

The way I split the products is: if the output is code, I use Claude Code, Desktop, or Claude Code on mobile.

If the output is anything that's not code, I use Co-work.

---

### How Cat Uses Co-work

**Lenny:**
People are sleeping on the success of Co-work. It's growing incredibly fast, but people still don't understand what it's for.

Can you give us a couple use cases from your work as a PM?

What are interesting or unexpected ways you use Co-work to save time and get more work done?

**Cat Woo:**
If you're getting started on Co-work, the first thing you need to do is connect all the data sources relevant to your role.

Co-work can only do a great job if it has access to the context it needs.

For me, I connect Google Calendar, Slack, Gmail, and Google Drive.

That gives it flexibility to find relevant context, ask questions, and pull in threads, which substantially improves the quality of the result.

Last night, I was working on our Code with Claude conference.

There are a few talks I'm giving there. One talk is about the transition of Claude Code from an assistant to a full-on agent.

I wanted to showcase all the products we've shipped that enable that transition and figure out what internal success stories we could use as demos.

I have Google Drive and Slack connected. Alex, our product marketer, had put together a draft of the points he thought we should cover.

I fed all of that into Co-work and told it the narrative I wanted to tell.

It worked for an hour.

It walked through Twitter to see what we launched. It looked through our evergreen launch room. It looked in our Claude Code announce channel, where our team posts demos of how they're getting value from Claude Code.

It synthesized all of that into a 20-page deck that I woke up to this morning.

I read through it, and it was pretty good.

There were a few tweaks. I like my slides to have very minimal words, and it was a little too wordy.

But it was far faster than what I could produce manually.

Because Co-work has access to our design system, it looks like an Anthropic designer put it together.

It was incredibly polished.

Making that slide deck would have taken me hours. Instead, it turned out a good draft, and I could focus on making sure the demos were amazing.

**Lenny:**
This sounds like a dream come true for PMs. Putting decks together is so annoying.

**Cat Woo:**
It's so slow.

**Lenny:**
To help people try this themselves, step one is connecting Slack, Google Calendar, Gmail, and Google Drive?

**Cat Woo:**
Yes. Connect your communications tools and wherever you store source-of-truth data for what your team cares about, what you care about, and what you're working on.

**Lenny:**
What was the prompt roughly?

**Cat Woo:**
I wrote something like:

"Make me a slide deck for the Code with Claude conference. This is what our PMM suggested it should cover. This is the current draft I made that I don't like. This is one I made manually that I don't like. Can you start by creating a proposed outline with details? Also, make sure it doesn't overlap too much with the keynote talk, which is more important."

Then Claude read the links I sent and created a proposed outline.

I read through the proposal and the ideas it generated, then made a decision on what I wanted in the final deck.

That's an example of what the PM role still is today.

Claude is a great brainstorming partner. It can synthesize a massive amount of information and present possibilities.

But the PM still makes the end decision of what should belong in the final product.

For this deck, I decided I wanted the talk to cover the progression from making local tasks successful, to making every PR green, to helping engineers land more PRs.

For each of those, I picked the demo that would be most compelling.

After that decision, Co-work went off for a few hours and built the slide deck.

**Lenny:**
That's awesome. It's like talking to a deck designer that also has actual knowledge about what you've worked on.

How did you do the design system piece?

**Cat Woo:**
We already have a standardized deck that we use across external engagements.

I gave Claude access to that.

It can see what colors we use, what fonts we use, and the different slide formats available.

It has about 20 example slides.

**Lenny:**
So you upload the template and say, "Work from this"?

**Cat Woo:**
Yes.

You can also connect to your Figma MCP if your slide format is saved there, and it can pull that in.

---

### Cat's PM Tool Stack

**Lenny:**
What's in your stack of tools as a PM at Anthropic?

Obviously Claude Code, Co-work, and Anthropic tools. What else?

**Cat Woo:**
My stack is heavily Claude Code and Co-work.

Anthropic largely runs on Slack. It feels like the core OS of our company.

Day to day, maybe 30% of my time is pushing the boundaries of what Co-work can do so I have a strong sense of what we're not good at.

I spend a lot of time talking with the model to understand why it makes the mistakes it does.

We also have a lot of internal tools we make.

One thing Claude Code has unlocked for the entire company is that it lowers the barrier to making any custom app you want.

We've seen this surge in personalized work software that people build for custom use cases, instead of using tools that don't perfectly fit the use case.

**Lenny:**
What are some examples?

**Cat Woo:**
One sales person on Claude Code realized he was making repetitive decks over and over again.

He built a web app with examples of the core Claude Code decks that work well — like 101, 201, and mastering Claude Code.

Then he has a way to input specific customer context that pulls from Salesforce, Gong, and other notes, so we can customize decks for specific customers.

It pulls out things like whether the customer is using Bedrock, Claude Code for Enterprise, or Console, which affects what features are available.

It pulls out whether the customer is concerned about code review in the SDLC, so it adds a slide about code review features.

It pulls out whether the customer needs to be HIPAA compliant or needs specific security controls, so it adds slides about that.

If the customer is on Vertex or Bedrock and doesn't want to use Claude for Enterprise, it removes slides that only apply to Claude for Enterprise.

Normally this manual work could take 20 or 30 minutes, or people just decide not to customize and use the general deck.

With this, it takes a few seconds and you get a tailored deck.

---

### Slack as Company OS

**Lenny:**
Slack is the tool that nobody is trying to recreate.

People talk about Salesforce as if SaaS software is going away and we'll build everything ourselves.

But Slack is durable. Nobody wants to build a better version. It's the OS of so many companies.

**Cat Woo:**
I think it's very important communications infrastructure.

They do the core task of helping everyone get real-time updates incredibly well.

**Lenny:**
People hate on Slack, but it's really great at what it tries to do.

**Cat Woo:**
I also love how customizable they've made it.

We love making Slack bots.

That hackability means we can integrate with Slack the way we want to.

---

### Which Teams Use Claude Code and Co-work Most?

**Lenny:**
You talked about different teams and how they use Claude Code and Co-work.

Other than engineering, which I imagine is the biggest token spender, what's the second-place function for token usage?

**Cat Woo:**
Applied AI is amazing at pushing the boundaries of what Claude Code and Co-work can do.

A lot of our Applied AI team spends time with customers helping them adopt our API.

Sometimes they make prototypes on behalf of customers, which Claude Code makes much faster.

They also need to manage a lot of customer communications, inbound, historical context, and call notes.

So they're very heavy on both Co-work and Claude Code.

**Lenny:**
Is Applied AI like forward-deployed engineering?

**Cat Woo:**
Yes. It helps customers adopt the latest API and model features across their company, both for powering their company's products and for internal acceleration.

**Lenny:**
So like technical go-to-market or forward-deployed engineering.

**Cat Woo:**
Exactly. A very technical go-to-market person.

They also push the boundaries of what Co-work can do.

Many cover multiple customers and can have five to 10 customer engagements in a high day.

The night before, they'll ask Co-work to summarize all the customer meetings coming up the next day.

They'll ask: what has this customer asked for? What's top of mind? What are the action items from past meetings?

Co-work puts together a dossier or brief of what they should know going into the meeting.

It can also research answers.

If a customer asked when Feature X will launch, Co-work can search Slack to get the latest ETA and add that to the notes, so the Applied AI person has the latest during the customer call.

These are workflows people build for themselves and share with their teams.

---

### Token Spend and Internal Usage

**Lenny:**
A trend that comes up a lot is token spend exceeding people's salary.

Are there numbers floating around Anthropic for how many tokens engineers or PMs spend per month or per day?

**Cat Woo:**
It's clear to us that as models get better, people delegate far more tasks to them and spend more hours in tools like Claude Code and Co-work.

We see token cost per engineer, or per knowledge worker, increase every time there's a model jump or substantial product improvement.

I think it's still much lower than the average engineer salary, but we see the percentage increasing over time.

**Lenny:**
Another advantage of working at Anthropic is that you have access to the most cutting-edge models.

Do you basically have unlimited tokens?

**Cat Woo:**
We can use a lot of tokens.

Some people do run into limits.

**Lenny:**
Okay, there's a limit.

**Cat Woo:**
We believe in empowering internal teams to build as fast as possible.

We also trust that everyone understands how much capacity serving these models truly costs.

We trust our team to use tokens responsibly.

It's very frowned upon to waste tokens, but we trust individuals to make that judgment call.

---

### Emerging Skills for AI PMs

**Lenny:**
What are the emerging skills PMs need to develop, or that AI companies look for when hiring PMs?

**Cat Woo:**
The hardest skill is being able to define what the product should look like a month from now.

There is a lot of ambiguity around what models will be capable of in that timeline and how user behavior will change.

But there are patterns the best PMs can see based on how users are abusing the limits of the existing product.

The best PMs can sense that, set a direction, steadily execute toward it, and change the path if model capabilities are much better or worse than expected.

It is very hard to be the right amount of AGI-pilled.

Everyone can see a future where models are extremely smart and can do almost everything. In that world, you don't need a complicated product. You can just have a text box where you tell the model what you want.

The model is so smart it can add any tool or integration it needs, get the job done, know when it's uncertain, and ask clarifying questions.

It's very easy to build the product for the super-AGI strong model.

The hard thing is figuring out, for the current model: how do you elicit the maximum capability?

How do you help users get onto the golden path?

How do you guide users to interact with the model's strengths and patch its weaknesses?

That skill is pretty rare.

---

### How to Build Model Taste

**Lenny:**
How do you build that skill?

Is it using each model a lot, understanding the limits, developing taste around what the model is capable of?

**Cat Woo:**
It's spending a ton of time talking to and using the model.

One thing I like to do is ask the model to introspect on its own behaviors.

Sometimes I'll notice the model does something unexpected.

For example, it makes a front-end change and runs tests, but doesn't actually use the UI.

It's useful to ask the model to reflect on why it did that.

Sometimes it will say, "There was something confusing in the system prompt," or, "I didn't realize front-end verification was part of the task," or, "I delegated verification to a sub-agent, and the sub-agent didn't do the test, and I didn't check its work."

Being curious about why the model made the decision it did shows you what misled it, so you can fix the harness and close the gap.

The other thing that helps is figuring out who the users are whose feedback you trust most.

There are usually a handful of people who are much better than others at articulating what makes a model or model-harness combination good.

A lot of people will give feedback, but not everyone's feedback is equally qualified.

Finding a group of five people you trust is important for fast feedback.

The third thing that is useful, though not everyone loves doing it, is building evals.

You don't need hundreds of evals. Building 10 great evals is important for helping the team quantify the goal, their progress toward it, and what they're missing.

Evals are underappreciated, and more PMs and engineers should be working on them.

---

### Evals as Product Management

**Lenny:**
We've covered evals a bunch.

There's this trend that the future of product management is writing evals because it's essentially defining what success looks like.

How much of your time do you spend writing evals?

**Cat Woo:**
The importance of evals varies based on the feature and the problem you're trying to solve.

There are folks on our team who spend a lot of time on evals. We have a small pod that collaborates closely with research to understand Claude Code behaviors more precisely, identify the largest improvement areas, and measure those concretely.

I personally jump into evals when there's a feature that needs more product definition.

Often the output is, "Here are five evals I made. This is how you run them. These are the ones that succeed, these are the ones that don't, and this is the prompt I used to increase the success rate."

It varies by feature.

Not every feature needs it, but features like memory benefit a lot from this.

---

### People Who Are Good at Evaluating Models

**Lenny:**
The point about people being good at evaluating models is so interesting.

Is there anyone specific you want to shout out?

**Cat Woo:**
Two people I think are incredible at this:

One is Amanda, who molds Claude's character.

It's such a hard role because the task is ambiguous.

Even coding is easier because you can verify success, whereas crafting character requires a strong conviction around who Claude should be.

She has an incredible ability not only to mold the character, but also to articulate the goals, what is successful, and what is not.

The other group I trust is the Claude Code team.

We often have team lunches, and whenever there's a new model we're testing, one of the fastest ways to get feedback is to go around and ask, "What's your vibe on the model?"

We'll hear things like, "This model isn't fully explaining its thinking," or, "It's too abrupt," or, "This model loves writing a ton of memories, but we're not sure the memories are high quality," or, "This model loves to test itself," or, "This model isn't testing itself enough."

That informs what data we look at to verify whether it's a larger pattern.

We have a ton of data, but it's hard to extract insights.

Feedback from that group helps us form hypotheses, and then we can extract data to test them.

---

### Claude's Character

**Lenny:**
Ben Mann came on the podcast and talked about Claude's character and constitution.

I didn't realize until afterward how important it is.

With Open Claude, one reason people are sad is the personality of Claude.

Claude's personality is so good and fun and interesting compared to other models.

Ben's point was that the personality is what makes Claude good at so many things.

Is there anything people may not understand about why the character and personality are so key?

**Cat Woo:**
When you reflect on everyone you've worked with, there are people where you think, "I really like their energy. I really like their vibe."

When people think about Claude and Claude Code, that's one of the things they bring up most.

They love that Claude is lighthearted and fun, but also extremely competent at your task.

People like that Claude is low-ego.

If you tell it, "You did this wrong," it is truly sorry. It says, "Oh shoot, thanks for telling me. Let me fix it. Let's work together."

It's also very positive.

If you're feeling like something is an insurmountable task and you don't know how to get started, Claude says, "It's okay. These are the steps I think we should take. Do you want me to get started?"

Part of what makes a great co-worker is positivity, bias toward action, and the ability to give earnest feedback instead of just agreeing with everything you say.

We try to imbue that into Claude because it makes Claude more enjoyable to work with.

---

### Revisiting Products as Models Improve

**Lenny:**
You mentioned that when new models come out, you often need to revisit things you've built.

That sounds both interesting and frustrating.

How often do you have to come back with a new model and say, "We need to redo this product we launched a few months ago"?

**Cat Woo:**
A lot of the changes we make with a new model involve removing features that are no longer needed.

Often, we add features as a crutch for the model because it isn't naturally doing something itself.

A classic example is a to-do list.

When we first launched Claude Code, people would ask it to do large refactors. Claude Code would say, "Okay, I need to change these 20 call sites," then it would change five and stop.

We asked, "How do we force it to remember to get all 20?"

Sid on our team thought about what a human would do.

A human would make a list of everything they need to change. In VS Code, you might look up all the call sites, see a list on the left, and go through them one by one.

So he added a to-do list for Claude.

With that, Claude was able to fix all 20 call sites.

But with Opus 4 and later models, we realized we didn't need to force it to use the to-do list. It would naturally use it itself.

For earlier models, we had to keep reminding it, "Did you finish everything on the to-do list? You can't finish until everything is done."

For later models, it naturally thinks to do everything on the to-do list.

These days, the to-do list is still nice for users because you can see what Claude is working on.

But it's a much deemphasized part of the product. The model may use it or not. It's not necessary for thorough changes anymore.

**Lenny:**
I forget who said this on the podcast, but: the model will eat your harness for breakfast.

What I'm hearing is that you remove things over time that you had to add on top of the model. As models get smarter, the product becomes simpler.

**Cat Woo:**
Yes.

We can remove a lot of prompting interventions every time the model gets smarter.

Every time we launch a model, we read through the entire system prompt and reflect on each section: does the model really need this reminder anymore?

If not, we remove it.

The most exciting thing new models unlock is entirely new features.

There are features we tested with prior models where the accuracy wasn't high enough to launch.

One example is code review.

We tried to build a code review product a few times. We launched simpler versions, like the `/code review` command.

Only with the most recent models did we feel the code review was good enough that our engineering team relies on it to pass before merging PRs.

We had always dreamed Claude could be a reliable code reviewer that catches the majority of bugs.

With newer Opus and Sonnet models, we felt we could run multiple code review agents simultaneously across the codebase and synthesize a set of real issues for an engineer to address before merge.

That is a new capability the latest models unlocked.

---

### Building for What Will Soon Be Possible

**Lenny:**
This is another trend on this podcast: build something that might be possible in the next six months.

Be at the edge of what's working. Eventually the model catches up, and you have an amazing product ahead of everyone.

**Cat Woo:**
Exactly.

It's important to build products that don't necessarily work yet so you know what's missing.

Then, with the newest model, you can swap it into the prototype and see whether it closes the gap.

---

### Vision for Claude Code and Co-work

**Lenny:**
How much can you say about where things are going with Claude Code and Co-work?

What's the vision?

**Cat Woo:**
We think about it in terms of building blocks.

For both Claude Code and Co-work, the core building block is making individual tasks successful.

You want to produce some output. You give a clear prompt. Can it consistently produce acceptable output that you can merge, share with colleagues, or share externally?

The task is the core building block.

As models get smarter, task success rate gets higher.

Then people move toward doing multiple tasks at once.

Multi-coding was a big thing toward the end of 2025, and it has only increased since then.

The progression is: one task works, then you can do six tasks at a time.

As models get even smarter, maybe next you'll run 50 Claudes at a time, or hundreds.

So what infrastructure do we need to enable that?

At that point, you probably won't run everything locally on your machine because there isn't enough RAM.

We're thinking about how to make it easier to manage all these tasks, probably running remotely.

How do we build the interface so the human knows which tasks need attention?

How do we make sure the agent fully verifies work so that when a task says it's done, you can quickly verify and trust that it's done to your spec?

How do we make the process self-improving?

When you see a task that isn't done to your liking, you give feedback, and the model knows to incorporate that feedback into every future run so it never makes that mistake again.

That's the progression we're bringing users along.

---

### Advice for PMs and Knowledge Workers

**Lenny:**
There are a lot of product managers, founders, and cross-functional folks listening who are worried about the future of their careers.

What advice do you have for people to not just survive this transition, but thrive?

**Cat Woo:**
AI gives everyone much more leverage than they used to have.

Any time you realize you're doing a manual task multiple times, think about how you can use Claude Code, Co-work, or other AI tools to automate it.

Most people have creative parts of their job they love and tedious parts they hate.

The beauty of AI is that it can do those tedious parts for you.

It can learn from every time you've done that manual task, generalize, and run it automatically, so you can focus on the creative parts.

That means you can do a lot more than you used to.

My immediate push for people is: figure out the repetitive parts you can pass to Claude. Iterate on those automations until the success rate is very high.

Then focus on what more you can do for your team, product, or company that people haven't had bandwidth to pick up.

Or focus on the pet project you always thought the company should do but never had time for.

If AI handles the grunt work, you have extra time.

Lean into these tools, hand off work you're not excited to do, figure out how AI can accelerate you, and you'll be able to do so much more.

**Lenny:**
A core point there is: find problems to solve with AI.

For a lot of people, the hardest part is knowing what to do.

You're saying: pay attention to things you do constantly, things you can automate, and ideas that have been floating around that you haven't had time to do.

Solve a problem for yourself.

**Cat Woo:**
Exactly.

I would also push listeners to bring automations from "this is a cool concept" to "this actually works 100% of the time."

Sometimes users automate something, get it to 90% or 95% accuracy, then give up.

But if an automation doesn't work 100% of the time, it's not really an automation.

That last 5% to 10% takes more time.

Building the automation is often slower than doing the task yourself.

But I would encourage people to put in the time.

Scope an automation you really want to get to 100%. Put in the elbow grease. Teach Claude your preferences. Give feedback so it can improve its skill.

Then you'll be able to rely on it.

There isn't much value in a 95%-there automation.

**Lenny:**
I'm super guilty of that.

**Cat Woo:**
I am too.

I've been teaching Co-work to get me to inbox zero for Gmail, and it has been very time-consuming. It's definitely not there yet.

**Lenny:**
That's exactly where my mind goes.

I have a workflow where every email I get is checked for spammy things, like people asking to come on the podcast. It categorizes them into a folder called "spammy."

It's 95% great, but then I miss an email because it went there.

This is a good push for me to get it perfect.

**Cat Woo:**
We're also working on making the flow for customizing these commands easier.

Right now, you have to know too many concepts.

You have to know to define a skill, use the skill, give it feedback, tell Co-work to update the skill based on the feedback, and know where to read the skill to make sure the feedback was incorporated correctly.

It's also our job to make this seamless so it doesn't feel painful.

---

### Build Apps You Actually Use

**Lenny:**
Anything else you wanted to share before the lightning round?

**Cat Woo:**
I see a lot of people playing around with AI, building prototype apps and tinkering with workflows.

I would push people toward building apps they actually use every single day.

Only through that usage do you get the value.

If you build a prototype app that doesn't help you get more done, the AI isn't really adding value to your day.

**Lenny:**
There's only so much you learn from one-shotting something and never coming back to it.

**Cat Woo:**
Exactly. You're not getting much leverage from it.

I also think there are people who spend too much time customizing their workflow.

There are two ends of the spectrum.

One group never customizes or builds automations.

The other group obsesses over customizing their tools, adding skills, MCPs, and workflow improvements.

Sometimes that distracts from the core goal of launching a product or building a feature.

There's fun in customizing, and we want our products to be hackable.

But there's a limit to how useful it is.

Some people spend so much time customizing that they're not sleeping and not doing the core task they originally set out to do.

**Lenny:**
I see that on Twitter: "Look at my setup. It's out of control. It's so optimized."

But what are you actually building?

**Cat Woo:**
I think simple setups actually work better.

**Lenny:**
Slash PowerUp can level people up a little bit.

**Cat Woo:**
Yes.

---

### Chat-Based Products vs Action-Based Products

**Lenny:**
Karpathy had a tweet about the divide between people who tried ChatGPT or Claude back in the day, thought it was okay or terrible, and gave up on AI, versus people using it to code who see the full power of it.

People on both sides don't understand each other.

Your advice is really good: actually use AI for real things and see how good it has gotten.

**Cat Woo:**
The big shift is that the 2024 generation of products was chat-based, and the Claude Code generation of products is action-based.

The big "aha" moment is when Claude can do things on your behalf.

It's an amazing feeling to know the agent can do more than tell you what to do.

It can actually do it itself.

When people feel that, that's the eye-opening moment.

**Lenny:**
Shout out to the Claude Chrome extension, where you can watch it doing stuff.

You say, "Fill out this form for me," and it says, "All right, here I go."

**Cat Woo:**
Exactly.

---

## Lightning Round

### Favorite Books

**Lenny:**
What are two or three books you find yourself recommending most to other people?

**Cat Woo:**
I really like *How Asia Works*.

It's a story about economic development and the policies and governments that create long-lasting, successful economies.

The other book I'm into is *The Technology Trap*. It's about past technology revolutions — the Industrial Revolution and the computer revolution — and how they affected workers.

I like it because there's a lot we can learn from history to make sure this transition goes well.

On a fun note, I really like *The Paper Menagerie*. It's a book of short stories about coming of age, AI, and self-discovery.

---

### Favorite Recent Movie or TV Show

**Lenny:**
Favorite recent movie or TV show you really enjoyed?

**Cat Woo:**
I really like *Drive to Survive*.

There's no deeper meaning. There's just something satisfying about people being obsessed with a singular engineering goal and the purity of their pursuit.

I also love *Free Solo*, which is about Alex Honnold climbing El Capitan without a harness.

It's such a pure achievement to climb this extremely challenging, dangerous route and have the mental focus to do it knowing that if you make a single mistake, you die.

**Lenny:**
That movie is out of control.

**Cat Woo:**
I'm a rock climber.

I first watched *Free Solo* before I climbed rocks, so I thought it was impressive, but I didn't understand how impressive it was.

It's one of the rare movies where the more you know, the more blown away you are.

The moves he's doing on the wall are things I don't think I'll ever be able to do in my lifetime, even if they were in a gym one foot off the ground.

**Lenny:**
With a rope.

**Cat Woo:**
With a rope.

---

### Favorite Product

**Lenny:**
Favorite product you recently discovered that you love?

**Cat Woo:**
The product that has most changed my life outside of Claude products is probably Waymo.

I'm a diehard Waymo user. I use it twice a day to get to and from work.

Two things I love:

First, I don't feel bad if a Waymo is waiting for me. I feel less pressure to be right at the curb the moment it arrives.

Second, it lets me be more productive.

When I'm in a car with another human, I try not to do work calls. I feel rude being on my laptop the whole time.

With Waymo, I can call into a work call and not worry about someone overhearing me, whether I'm being rude, whether I'm talking too loudly, or whether I need to ask someone to change the music.

It has given me back around 30 minutes every day.

**Lenny:**
All these second-order effects of technology.

**Cat Woo:**
I always thought Waymo needed to be priced lower than Uber and Lyft to succeed.

But actually, I'm happy to pay a 2x premium for it.

---

### Life Motto

**Lenny:**
Do you have a favorite life motto you often come back to in work or life?

**Cat Woo:**
Just do things.

I think there's a lot of value in first-principles thinking.

If you know what you're optimizing for and have strong first principles, you can usually deduce the right course of action and clearly articulate it to stakeholders.

Then you should just do it.

Jobs are fake.

If you understand the constraints, you can figure out what you can do. Then try to do it quickly, learn from mistakes, and apologize or fix them if you did something wrong.

**Lenny:**
That feels liberating.

**Cat Woo:**
It is.

In many companies, roles are very strictly defined.

"This is what PM does. This is what design does. This is what engineering does."

Team scopes are also rigidly defined.

"This corner of the codebase we touch, and that corner we're not allowed to touch."

"Just do things" empowers people to make decisions, operate across team boundaries, and get things done.

**Lenny:**
People call it agency. Bias toward action.

**Cat Woo:**
That's my favorite reason to work at a startup at some point in your life.

Working at Scale when we were 20 people was life-changing for me.

There was no process, and we had really big problems to solve.

I appreciated Alex and the team empowering us to figure things out without rigid boundaries around what sales, ops, or engineering was supposed to do.

You had all the tools at your disposal, an ambitious hairy problem statement, and you could do whatever you needed to reach a good solution.

---

### Favorite Claude Thinking Word

**Lenny:**
When Claude thinks, there are these thinking words.

Do you have a favorite thinking word?

**Cat Woo:**
I really like "manifesting."

It's also the sticker I have on my favorite laptop.

**Lenny:**
Clearly the winner.

---

### What Cat Would Do After AGI

**Lenny:**
With AGI potentially arriving in our lifetime, and maybe you don't have to work, what are you going to do with all your time?

**Cat Woo:**
I think it will take a long time for AGI to diffuse across society.

The immediate thing is helping bring the world along.

My non-serious answer is that after this happens, I'll probably do a lot of rock climbing.

I'll probably move to Fontainebleau and live among 10,000 boulders and climb for a bit.

There are also so many books I want to read.

My goal is to read one or two books a week, and I'm currently at probably 0.5.

The backlog is pretty big.

There's so much we can learn from history, and there's so much I don't understand as well as I'd like.

I don't know anything about physics, robotics, hardware, aerospace — there are so many interesting topics.

I'm excited to learn, even knowing the AI will already know it.

---

### Closing

**Lenny:**
Cat, this was amazing. You're awesome.

Two final questions.

Where can folks find you online if they want to reach out and follow what you're up to?

And how can listeners be useful to you?

**Cat Woo:**
The best way to reach out is that I'm Catwoo on Twitter.

Feel free to tag me in things. Feel free to DM me.

I read all my DMs. I don't always respond to every single one, but I read them all.

The thing that is most helpful is: tell us where Claude Code and Co-work aren't working well for you.

We're very grateful for the positive feedback.

But what we thrive on is edge cases, errors, and specific tasks we can reproduce where Claude Code or Co-work fails.

If you share that with us and we can reproduce it, that's something we can actively improve for the next generation of models and harnesses.

**Lenny:**
People on Twitter are not shy with that feedback, so keep it coming.

**Cat Woo:**
Please share the problems you're having with us.

**Lenny:**
It's cool to see your team so active on Twitter and responding to people.

So this is actually stuff you see and react to?

**Cat Woo:**
Yes. We appreciate everyone being so engaged with us.

It gives the team a ton of energy.

We have a channel called user love, and whenever people share a success story, we post it there.

Whenever people share issues with the product, we put them into our feedback channel so the broader team can act on it.

**Lenny:**
That is so cool to know.

Cat, thank you so much for being here.

**Cat Woo:**
Thanks for having me.

**Lenny:**
Bye, everyone.

Thank you so much for listening.

If you found this valuable, you can subscribe to the show on Apple Podcasts, Spotify, or your favorite podcast app.

Also, please consider giving us a rating or leaving a review, as that really helps other listeners find the podcast.

You can find all past episodes and learn more about the show at Lenny's Podcast.

See you in the next episode.
