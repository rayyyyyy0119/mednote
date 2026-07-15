---
title: Vault Validation Report
type: reference
status: active
tags:
  - references
  - validation
---

# Vault Validation Report

Validated: 2026-07-14 (Asia/Taipei)

## First batch result

| Check | Result |
|---|---|
| Chief complaint notes checked | 6 |
| Required YAML keys | PASS |
| Required clinical sections | PASS |
| Front-loaded `快速處理（先看這裡）` | 6/6; appears before `一句話定位` |
| `LOCAL-01 藍本要點（完整保留）` | 6/6 |
| LOCAL-01 representative preservation terms | 18 checked; PASS |
| Wikilinks originating in the six new notes | 29 checked; 0 unresolved |
| Source start-page checks | 22 checked; PASS |
| Source page bounds | PASS |
| LOCAL-01 normalized PDF visual review | 12/12 pages readable; PASS |

## Source page counts used for bounds checking

| Source ID | PDF viewer pages |
|---|---:|
| HARRISON-01 | 4132 |
| ONCALL-01 | 738 |
| POCKET-01 | 465 |
| LOCAL-01 | 12 |

## Planned unresolved links

The retained Harrison chapter map and the pre-existing roadmap index deliberately link to future notes. Validation found 49 unique unresolved targets (104 link occurrences), all originating from:

- `90_References/Harrison Part 2 Chapter Map.md`
- `00_Index/Chief Complaint Index.md`

These are backlog links, not broken links introduced by the first batch. Each completed note should reduce this list in later batches.

## Validation scope

- Confirmed each first-batch note starts with `快速處理（先看這裡）` and contains: 一句話定位, Immediate threats/red flags, Focused history, Focused physical exam, Differential diagnosis, Initial workup, Initial management, Disposition/consult, Common pitfalls, LOCAL-01 藍本要點, Links, Source.
- Confirmed each cited source start page contains the expected chapter/topic heading or topic text.
- Confirmed source page ranges do not exceed the corresponding PDF page count.
- Confirmed LOCAL-01 is treated as the vault blueprint. Its relevant clinical points are retained; legacy drug names, doses and obsolete rules are isolated in danger callouts and require current hospital-protocol verification.
- Preservation details are tracked in [[LOCAL-01 Coverage Matrix]].
