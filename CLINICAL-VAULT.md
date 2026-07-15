# 臨床速查 Quartz 網站

這個資料夾是 Obsidian vault 的 Quartz 5 發布副本。原始 vault 位於上一層；請繼續在 Obsidian 中編輯，不要直接把教材檔案放進此 repo。

## 更新網站內容

```sh
./scripts/sync-vault.sh
npm run check
npx quartz build
```

同步範圍只包含下列 Markdown：

- `00_Index`
- `10_Chief_Complaints`
- `20_Diseases`
- `30_Drugs`
- `90_References`

下列內容永不發布：`00_Source_PDFs`、`01_Extracted_Chapters`、`Templates`、`.obsidian`。

> 全部內容僅供學習與臨床工作輔助，不能取代院內 protocol、最新指引、專科會診與個別病人的臨床判斷。
