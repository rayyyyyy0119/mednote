---
title: PDF Extraction Guide
type: guide
status: active
tags:
  - guide
  - pdf
  - extraction
---

# PDF Extraction Guide

## Purpose

保留原始 PDF 完整檔，只抽出本次整理需要的章節或頁面範圍，讓 Obsidian 筆記可以穩定追溯來源。

## Step 1. Register the source

1. 將原始 PDF 放到 `00_Source_PDFs/`。
2. 在 [[PDF Source Register]] 新增或更新一列。
3. 確認 `Source ID`、原始檔名、章節主題、頁碼依據。

## Step 2. Decide page ranges

記錄兩種頁碼，避免之後找不到來源：

- `Original page range`：書本印刷頁碼或章節頁碼。
- `PDF viewer page range`：PDF 閱讀器顯示的頁碼。

如果兩者相同，也照樣填寫。

## Step 3. Extract a working PDF

抽出的檔案放到 `01_Extracted_Chapters/`。

建議檔名：

```text
SOURCEID_short-topic_pXXX-pYYY.pdf
```

Example:

```text
HARRISON-01_chest-pain_p001-p030.pdf
```

## Step 4. Log the extraction

在 [[Extraction Log]] 登錄：

- `Extract ID`
- 抽出 PDF 檔名
- 對應 `Source ID`
- 原始頁碼範圍
- PDF viewer 頁碼範圍
- 相關主訴頁
- 狀態

## Step 5. Create notes

1. 用 [[Chief Complaint Template]] 建立主訴頁。
2. 把來源寫在頁尾 `Source` 表格。
3. 需要背景知識時再建立疾病頁或藥物頁。
4. 不貼原文長段落，只寫重寫摘要與臨床速查重點。

## Status checklist

- [ ] 原始 PDF 已放入 `00_Source_PDFs/`
- [ ] [[PDF Source Register]] 已登錄
- [ ] 頁碼範圍已確認
- [ ] 工作用 PDF 已放入 `01_Extracted_Chapters/`
- [ ] [[Extraction Log]] 已登錄
- [ ] 主訴頁已建立
- [ ] 來源已寫入主訴頁

