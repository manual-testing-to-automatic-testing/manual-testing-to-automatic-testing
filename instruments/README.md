# Capability self-assessment instruments

One instrument for each track, generated from the roles-skills reference by [`../scripts/build_instrument.py`](../scripts/build_instrument.py). The instrument is defined in [`../spec/index.md`](../spec/index.md#capability-self-assessment). Do not edit these files by hand: change the script or the reference, then rebuild.

| File | Track | Items (Part A + B + C) |
| --- | --- | --- |
| [B3.tsv](B3.tsv) | Band 3, associate level | 21 + 15 + 9 = 45 |
| [B4-QA.tsv](B4-QA.tsv) | Band 4, Associate quality assurance test analyst | 21 + 15 + 9 = 45 |
| [B4-TE.tsv](B4-TE.tsv) | Band 4, Associate test engineer | 21 + 15 + 9 = 45 |
| [B5-QA.tsv](B5-QA.tsv) | Band 5, Quality assurance test analyst | 21 + 18 + 10 = 49 |
| [B6-QA.tsv](B6-QA.tsv) | Band 6, Senior quality assurance test analyst | 21 + 16 + 11 = 48 |
| [B6-TE.tsv](B6-TE.tsv) | Band 6, Test engineer | 21 + 16 + 10 = 47 |
| [B7-TE.tsv](B7-TE.tsv) | Band 7, Senior test engineer | 21 + 14 + 11 = 46 |
| [B7-TM.tsv](B7-TM.tsv) | Band 7, Test manager | 21 + 19 + 12 = 52 |

[index.tsv](index.tsv) lists the same counts.

## Parts

- **Part A, band (A1 to A21):** the 5 band outline dimensions, rated Not yet, Partly, or Meets, and the 16 job evaluation factors, rated as the factor level the person works at regularly. The reference level and every level summary are in `expected_level_description`. For B3, the factor levels are blank: agree them at Gate 0 from the job description, with a total within 216 to 270 points, and write them into `expected_level` and `expected_level_number`.
- **Part B, PCF role aspects:** B1 PCF role statements, B2 PCF role level statements, B3 reference responsibilities, rated Not yet, Partly, or Meets.
- **Part C, skills:** every skill for the reference role level, rated 0 to 4. `next_level_description` shows what the next level looks like. The test engineering row also states the track's programme automation target.

Part D, the automation practical, is not in these files. See `../materials/gates/`.

## How to use at a gate

1. Copy the track's file to the person's private folder, named `<person>--<track>--gate-<n>.tsv`. Personal assessments never go in this repository.
2. The person fills in `self_rating` and `evidence`.
3. The line manager fills in `manager_rating` separately.
4. They agree `agreed_rating` together, following the calibration guide in `../materials/gates/`, and add `ilp_action` for the gaps that matter most.
5. Calculate the capability index:

   ```sh
   python3 scripts/capability_index.py path/to/person--B5-QA--gate-1.tsv --gate 1 --write
   ```

   This prints the index for Parts A, B, and C and overall, checks the gate's percentage threshold, and fills the `status` column. Check the gate's other conditions and Part D by hand.

## Scoring rules

- Meets counts 1, Partly counts 0.5, Not yet counts 0.
- A factor at or above the reference level meets; one level below is Partly; two or more below is Not yet.
- A skill with a gap of 0 or less meets; a gap of 1 is Partly; a gap of 2 or more is Not yet.
- The index for each part is its percentage score. The overall index is the mean of Parts A, B, and C.

## Example

[examples/B5-QA-fictional-gate-0.tsv](examples/B5-QA-fictional-gate-0.tsv) is a **fictional** completed instrument, made with random ratings to test the calculator. It is not about a real person.

## Rebuild

```sh
python3 scripts/build_instrument.py --reference ~/git/agenda-for-change/roles-skills.github.io/content/reference.json
```

Built from the Digital health care job roles reference (UK GDaD PCF accessed 2026-10-06). Contains public sector information from the UK Government Digital and Data Profession Capability Framework, licensed under the Open Government Licence v3.0. © Crown copyright.
