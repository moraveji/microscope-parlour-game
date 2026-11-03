'use strict';
window.GAME = {
  "title": "Microscopic Madness Discovery Party",
  "subtitle": "The Amazing Digital Circus: Microscopic Madness",
  "teams": 4,
  "missions_per_team": 4,
  "allow_custom_team_names": true,
  "scoring": {
    "discovery_photo": 10,
    "first_attempt_correct": 20,
    "second_attempt_correct": 10,
    "later_correct": 5,
    "race_timer": false
  },
  "microscope_defaults": {
    "objective": "4x",
    "optional_objective": "10x, adult approval only",
    "camera": "USB microscope, Chrome camera selector",
    "blank_slide": true,
    "coverslip_required": false,
    "preparation": "Dry, flat, tiny specimen unless an adult specifies otherwise",
    "forbidden": [
      "40x objective on uncovered specimens",
      "Wet mounts without suitable coverslips",
      "Large or thick objects under the lens",
      "Loose specimens placed directly on the stage"
    ]
  },
  "safety": [
    "Adults approve each safe collection zone before the game.",
    "Collect only in designated level, accessible areas.",
    "No cacti, agaves, spiky plants, berries, mushrooms or unknown insects.",
    "No entering slopes, drainage channels, retaining walls or steep beds.",
    "Never climb, reach across sharp plants, or damage living trees.",
    "Adults verify plant identification and handling safety.",
    "Only take fallen material unless an adult approves picking.",
    "If a specimen is unsafe or unavailable, an adult pre-collects a safe substitute and places it at the approved pickup station.",
    "Adults handle glass slides and prepare specimens.",
    "No eating specimens; wash hands after collecting.",
    "If an observation is unclear, adults may approve the answer or skip that mission."
  ],
  "observation_policy": [
    "Never require seeing microbes.",
    "Never require identifying individual cells.",
    "Questions must work even when only shape, texture, color or silhouette is visible.",
    "Scientifically accurate questions may use the specimen’s known biological role.",
    "Do not pretend the microscope proves a specimen’s exact species.",
    "Each discovery photograph must be an actual camera capture."
  ],
  "challenge_set": "provided-challenges-v1",
  "team_themes": [
    "Pomni’s Lost Memories",
    "Jax’s Mischief Mission",
    "Ragatha’s Repair Crew",
    "Kinger’s Secret Expedition"
  ]
};
