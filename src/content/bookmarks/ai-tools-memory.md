---
type: YouTube
title: "One Simple System Gave All My AI Tools a Memory. Here's How."
source: "Nate B Jones"
href: "https://www.youtube.com/watch?v=japT66frdhM&t=1251s"
date: 2026-04-27
---

## Summary

A follow-up to Nate's Open Brain video — a personal Supabase database that
any AI client can read and write through an MCP server. Open Brain solved
agent memory. This video answers the question thousands of people asked
after building it: now what?

The core idea is two doors into the same table. The agent reaches the
data through MCP exactly as before. A lightweight Vercel-hosted web view
gives you, the human, a visual interface over the same rows. No sync
layer, no integrations to break — the table is the single source of
truth, and both sides read and write to it directly. When the agent logs
something during a chat, it's visible the next time you open the page.
When you edit a field on your phone, the agent sees the change on the
next query.

Three concrete extensions: a household knowledge base (paint colors,
plumber numbers, kids' shoe sizes), a professional relationship tracker
that flags neglected contacts, and a job-hunt dashboard that
cross-references applications, interviews, and warm intros across tables
your agent can reason over together. The four design principles are
worth lifting: agents bridge time, agents see across categories, agent
surfaces — human decides — agent executes, and you own the data layer
so every future model improvement compounds for free.

The deeper bet: a personal data layer + MCP is the architecture that
makes every next-generation model automatically more useful in your life,
without rebuilding anything.
