# Verification scope

This report records testing of the original party app before public-release text and pickup-location edits. It does not certify physical microscope models.

# Official challenge import verification

All 16 supplied mission titles, team sequences, option counts and answer keys were checked. Focused runtime checks passed:

- PASS — Correct-answer awards: first 20, second 10, later 5
- PASS — Maximum 120; skipped captured mission keeps only photo points
- PASS — Capture is blocked until adult slide preparation is acknowledged
- PASS — Prepared capture earns 10 once; retakes do not add points
- PASS — Incorrect attempt reveals hint, updates award, and second-try success totals 20
- PASS — Correct answer celebrates once, blocks duplicate input, reloads and resumes the team at the next clue
- PASS — Next challenge has a different emoji and accent color
- PASS — Host approval requires a photo and awards the current attempt tier
- PASS — Four teams and sixteen distinct three-option missions remain intact
- PASS — Practice saves to a separate record and returning restores party names, photos and points
- PASS — Import migration retains old photos separately, copies team names, starts fresh missions, and fills all pickup descriptions
- PASS — All sixteen supplied titles, sequences, answer keys, clues, hints and pickup descriptions imported
- PASS — Selected answers are retained with their correctness
- PASS — Host challenge overrides reach game content and reject duplicate answer choices
- PASS — Host editor locks attempted missions, saves unused replacements, updates pickup location and requires fresh location approval
- PASS — Reloading this challenge set retains progress and edited content without another migration
- PASS — Team view includes only that team’s current collection clue
- PASS — Final mission celebrates and points the team to its group photo

The running browser was also checked for the four character themes, all prefilled pickup descriptions, the full editor, correct-answer selection and previous-scrapbook controls. No adult location approval was applied by the assistant. The physical yard walk-through and a final real-camera rehearsal remain with the host. The earlier full simulated-camera/offline browser suite below predates this content import; it was not rerun.

---

# Challenge transition update

Focused checks passed for confetti rendering, blocking duplicate answers during the transition, scheduling a real reload after 2.4 seconds, preserving the team through a one-time session marker, returning to the top, distinct adjacent mission emoji/colors, and the mission-4 team-photo prompt. Scoring and separate practice storage checks still pass. Animation respects reduced-motion preferences. Both app copies were updated.

# Practice mode update

Focused checks passed for separate practice storage, restoration of party names/photos/scores, adult slide-ready capture gating, and answer scoring. The refreshed browser visibly shows practice controls and clear capture-lock instructions. Both the main folder and the running extracted copy were updated. The live physical camera still requires the user’s capture test.

# Rules update verification

The pasted rules were applied after the original full browser run below. Focused checks passed for the revised scoring and gates; the refreshed browser also showed the 20/10/5 awards and 120-point maximum. The original full camera/offline suite was not rerun for this rules-only update.

- PASS — Correct-answer awards: first 20, second 10, later 5
- PASS — Maximum 120; skipped captured mission keeps only photo points
- PASS — Capture is blocked until adult slide preparation is acknowledged
- PASS — Prepared capture earns 10 once; retakes do not add points
- PASS — Incorrect attempt reveals hint, updates award, and second-try success totals 20
- PASS — Host approval requires a photo and awards the current attempt tier
- PASS — Four teams and sixteen distinct three-option missions remain intact

Names, photos and mission progress continue using the existing IndexedDB structure. Scores now calculate from saved incorrect-attempt counts.

---

# Browser test report

Tested October 23, 2026 in Google Chrome on this Mac, using an isolated profile and Chrome’s simulated live camera. All checks passed. No uncaught browser errors were observed.

- PASS — Four numbered teams and safe setup gate
- PASS — Sixteen distinct specimens; four per team
- PASS — Adult approval and all location fields persist
- PASS — Capture required; wrong answer keeps points and reveals hint
- PASS — Team photo capture/upload and IndexedDB reload recovery
- PASS — Branded PNG scrapbook export at 2400 × 3400
- PASS — All 16 missions: live test video → capture → answer → next clue
- PASS — Discovery scoring, no speed bonus, ties share rank
- PASS — Offline reload and locally persisted images/progress
- PASS — Host team reset and skip award no answer points
- PASS — Paused collection blocks game capture
- PASS — Mobile layout fits viewport
- PASS — Entire-party reset clears setup, photos and progress
- PASS — Explicit camera selection, stop and reconnect
- PASS — Camera permission failure shows recovery instructions
- PASS — No uncaught browser errors

## Visual checks

The desktop lobby and exported 2400 × 3400 scrapbook were rendered and visually inspected. Mobile layout was checked at a 390-pixel viewport. The export retains each full camera frame within its photo panel, the team portrait, team name, discovery facts and saved observations.

## What remains to check at the party setup

The automated camera feed tests the real browser camera API, but does not verify the physical microscope’s focus, LED brightness or device label. Connect that microscope in your normal Chrome profile, capture a real specimen, and inspect the exported PNG. The yard photographs were not available through the conversation reference; the staged collection plan needs adult verification or tailoring from reattached photos.

Test images and progress were stored only in an isolated test profile, not in your normal Chrome party session.
