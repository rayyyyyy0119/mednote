---
title: Extraction Log
type: reference
status: active
tags:
  - references
  - pdf
  - extraction
---

# Extraction Log

抽出的工作用 PDF 放在 `01_Extracted_Chapters/`，每一份都要在這裡登錄。

| Extract ID | Extracted PDF filename | Source ID | Original page range | PDF viewer page range | Related chief complaints | Extracted on | Status |
|---|---|---|---:|---:|---|---|---|
| EXT-001 | HARRISON-01_cardinal-manifestations_p132-p505.pdf | HARRISON-01 | TBD | 132-505 | [[Harrison Part 2 Chapter Map]] | 2026-07-14 | extracted |
| EXT-002 | LOCAL-01_first_internal_emergency_normalized.pdf | LOCAL-01 | legacy DOC (15 rendered pages in source application) | 1-12 | [[Local Legacy Source Map]] | 2026-07-14 | normalized |

## Extraction Notes

- 若書本印刷頁碼與 PDF viewer 頁碼不同，兩者都要記錄。
- 抽出 PDF 檔名建議格式：`SOURCEID_short-topic_pXXX-pYYY.pdf`。
- 若同一抽出 PDF 支援多個主訴，用 wikilinks 串接所有主訴頁。
- EXT-002 是由原始 `.doc` 的可讀文字重排而成，頁碼只適用於 normalized working PDF，不等同原始 Word 分頁。
