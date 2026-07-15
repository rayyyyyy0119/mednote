---
title: LOCAL-01 Coverage Matrix
type: reference
source:
  - LOCAL-01
status: active
tags:
  - references
  - validation
  - local
---

# LOCAL-01 Coverage Matrix

Purpose: ensure `第一次守內急就上手.doc` remains the clinical-workflow blueprint and that source content is not silently dropped when notes are expanded.

| LOCAL-01 viewer page(s) | Source content group | Preserved in | Status |
|---:|---|---|---|
| 1-2 | ABC first、assume lethal disease、repeat PE、unstable vital signs cannot leave、pregnancy check、handoff/reassessment principles | `快速處理` in all chief complaint notes; template policy | covered |
| 2 | Fever tests、nursing-home/chronic sources、neutropenia、liver/renal abscess、leptospirosis、scrub typhus、unknown fever disposition | [[Fever]] | covered |
| 2 | Legacy antibiotic categories, drug names and dialysis-related dosing | [[Fever]] historical warning block | preserved + verification required |
| 3 | Dyspnea tests、six cause categories、orthopnea/BNP、pneumonia vs pulmonary edema | [[Dyspnea]] | covered |
| 4 | Syncope tests、vasovagal/cardiac/neurologic categories、risk-based disposition | [[Syncope]] | covered |
| 4 | Consciousness-change tests、coma exam、medication/toxin history、coma cocktail | [[Syncope]] historical warning block | preserved + verification required |
| 4-5 | Dangerous headache patterns、migraine/cluster/tension features and legacy treatments | [[Headache]] | covered |
| 5 | Chest-pain tests、four lethal diagnoses、other causes、initial CAD response | [[Chest Discomfort]] | covered |
| 5 | Abdominal-pain tests、ECG/pregnancy rules、DKA/PPU/pancreatitis/KUB/peritoneal-sign reminders | [[Abdominal Pain]] | covered |
| 6-7 | Special labs、brain CT、abdominal US、noncontrast/contrast CT indications | linked into the relevant six notes | covered |
| 7-9 | Airway/procedures、neurology/chest/cardiology service patterns | [[Dyspnea]], [[Headache]], [[Syncope]], [[Chest Discomfort]] | covered for current six; other topics remain backlog |
| 9-10 | ACS、HF、arrhythmia、PE、AoD、GI/pancreas/biliary/hepatitis/cirrhosis | [[Chest Discomfort]], [[Dyspnea]], [[Abdominal Pain]] | covered for current six |
| 10-12 | Infection、renal/electrolyte/toxin、hematology、DKA/HHS and other specialty pearls | [[Fever]] where relevant; dedicated future notes required | backlog retained in source PDF |

## Preservation rule for future notes

1. Start from LOCAL-01 symptom/service/lab/imaging/procedure points.
2. Add the note's front-loaded `快速處理` sequence.
3. Preserve every relevant LOCAL-01 point under `LOCAL-01 藍本要點`.
4. Put legacy drug names, doses and obsolete rules in a collapsed danger callout.
5. Add Harrison、On Call、Pocket Medicine and current guidance without deleting the LOCAL-01 layer.
