---
title: PDF Source Register
type: reference
status: active
tags:
  - references
  - pdf
---

# PDF Source Register

原始 PDF 只放在 `00_Source_PDFs/`，此頁登錄來源與整理狀態。

| Source ID | Original filename | Topic / chapter | Page basis | Planned page range | Related notes | Status |
|---|---|---|---|---:|---|---|
| HARRISON-01 | Harrison's Principles of Internal Medicine, 21st Edition.pdf | PART 2 Cardinal Manifestations and Presentation of Diseases | PDF viewer page | 132-505 | [[Harrison Part 2 Chapter Map]], [[Chapter Index]] | extracted |
| ONCALL-01 | On Call Principles and Protocols, 6th Edition.pdf | Common calls | PDF viewer page / embedded bookmarks | mapped topics | [[On Call Chapter Map]] | mapped |
| POCKET-01 | Pocket Medicine The Massachusetts General Hospital Handbook of Internal Medicine, 9th Edition.pdf | Internal medicine handbook | PDF viewer page / embedded bookmarks | mapped topics | [[Pocket Medicine Topic Map]] | mapped |
| LOCAL-01 | 第一次守內急就上手.doc | Local legacy on-call handout | normalized working PDF viewer page | 1-12 | [[Local Legacy Source Map]] | mapped |

## Status Vocabulary

| Status | Meaning |
|---|---|
| waiting-file | 尚未放入原始 PDF |
| registered | 已登錄原始 PDF |
| mapped | 已完成章節/主題頁碼對照 |
| extracted | 已抽出工作用 PDF |
| drafting | 正在整理筆記 |
| reviewed | 已完成初步校對 |

## Source Handling Rules

- 不修改 `00_Source_PDFs/` 中的原始 PDF。
- 不在筆記中貼上受版權保護教材的長段原文。
- 主訴頁的 `Source` 區塊需列出來源 ID、抽出 PDF、頁碼範圍。
- `LOCAL-01` 為 2011 舊講義，只能用於歷史性/本地 checklist 脈絡；不得直接沿用其藥物、劑量與處置。
