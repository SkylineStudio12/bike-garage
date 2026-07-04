# Part / equipment icon assets

Raw SVG exports (110×110, `fill="black"`) preserved from a Desktop folder marked
for deletion. **None of these are wired into the app** — the app embeds icon
bodies inline in `src/app.js` as `{id,label,vb,body}` objects with
`fill="currentColor"`.

## `pending-equipment/`
Icons for the future **Equipment/Gear** section (not yet built). Add these when
that feature lands:
- `bike-jersey`, `bike-shorts`, `bike-glove` — apparel/equipment
- `bike-tire-inflator`, `chain-checker` — tools (no current part type)

## `reference-existing/`
Raw versions of 7 icons the app **already has** as compact, optimized bodies
(`wheel`, `spokes`, `rotor`, `headset`, `seatpost`, `tire-liner`, `sealant`).
Kept for reference only — the app's optimized versions are the ones in use.

## Still open
The **inner-tube** icon in the app (`id:"inner-tube"`) is still the 512×512
placeholder. No inner-tube art was in this batch.

To add an icon to the app: convert `fill="black"`→`fill="currentColor"`, take the
inner `<path>` markup as `body`, set `vb:"0 0 110 110"`, add/replace the matching
`{id,label,vb,body}` entry in `src/app.js`, then `npm run check`.
