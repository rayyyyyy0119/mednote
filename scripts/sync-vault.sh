#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
SITE_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
VAULT_DIR="$(cd "$SITE_DIR/.." && pwd)"
CONTENT_DIR="$SITE_DIR/content"

mkdir -p "$CONTENT_DIR"

sync_markdown_dir() {
  local source_dir="$1"
  local target_dir="$2"
  mkdir -p "$target_dir"
  rsync -a --delete \
    --include='*/' \
    --include='*.md' \
    --exclude='*' \
    "$source_dir/" "$target_dir/"
}

sync_image_dir() {
  local source_dir="$1"
  local target_dir="$2"
  mkdir -p "$target_dir"
  rsync -a --delete \
    --include='*/' \
    --include='*.png' \
    --include='*.jpg' \
    --include='*.jpeg' \
    --include='*.webp' \
    --exclude='*' \
    "$source_dir/" "$target_dir/"
}

sync_markdown_dir "$VAULT_DIR/00_Index" "$CONTENT_DIR/00_Index"
sync_markdown_dir "$VAULT_DIR/10_Chief_Complaints" "$CONTENT_DIR/10_Chief_Complaints"
sync_markdown_dir "$VAULT_DIR/20_Diseases" "$CONTENT_DIR/20_Diseases"
sync_markdown_dir "$VAULT_DIR/30_Drugs" "$CONTENT_DIR/30_Drugs"
sync_markdown_dir "$VAULT_DIR/40_Specialties" "$CONTENT_DIR/40_Specialties"
sync_markdown_dir "$VAULT_DIR/90_References" "$CONTENT_DIR/90_References"
sync_image_dir "$VAULT_DIR/80_Assets" "$CONTENT_DIR/80_Assets"

# Quartz uses content/index.md as the website homepage.
cp "$VAULT_DIR/00_Index/Home.md" "$CONTENT_DIR/index.md"

echo "Vault Markdown synced to $CONTENT_DIR"
echo "Excluded by design: 00_Source_PDFs, 01_Extracted_Chapters, Templates, .obsidian"
echo "Approved image assets synced from 80_Assets"
