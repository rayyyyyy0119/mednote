---
title: 臨床速查 Vault
type: index
status: active
tags:
  - index
  - clinical-notes
---

# 臨床速查 Vault

這個 vault 用來把 Harrison 指定章節、On Call、Pocket Medicine 與一份本地舊講義整理成主訴導向的臨床速查筆記。

> [!warning] 使用範圍
> 全部內容僅供學習與臨床工作輔助，不能取代院內 protocol、最新指引、專科會診與個別病人的臨床判斷。

## 快速入口

- [[Chief Complaint Index]]
- [[Cardiology Hub]]
- [[Chapter Index]]
- [[PDF Source Register]]
- [[Extraction Log]]
- [[On Call Chapter Map]]
- [[Pocket Medicine Topic Map]]
- [[Local Legacy Source Map]]
- [[LOCAL-01 Coverage Matrix]]
- [[Vault Validation Report]]
- [[Obsidian2024 Cardiology Import Map]]

## 工作流程

1. 將原始 PDF 放入 `00_Source_PDFs/`，不要修改或覆蓋原檔。
2. 在 [[PDF Source Register]] 登錄原始檔、主題、預計整理範圍。
3. 只抽出本次需要的章節或頁碼，放入 `01_Extracted_Chapters/`。
4. 在 [[Extraction Log]] 記錄抽出 PDF 對應的原始檔與頁碼。
5. 用 [[Chief Complaint Template]] 建立主訴速查頁。
6. 必要時補 [[Disease Template]] 或 [[Drug Template]]。

## 寫作原則

- 繁中為主。
- 疾病、藥物、檢驗、醫學縮寫、用藥頻率保留英文或常用縮寫。
- 只寫重寫摘要、checklist、表格與臨床決策重點。
- 不貼上 Harrison 或 PDF 原文長段落。
- 每個主訴頁以一頁速查為目標。
- `LOCAL-01`（第一次守內急就上手）是臨床流程藍本；相關內容不得刪減，再由 Harrison、On Call、Pocket Medicine 與現行指引補強。
- 每頁最前方放 `快速處理（先看這裡）`；舊藥物/劑量保留但須隔離在歷史記載警示框。
