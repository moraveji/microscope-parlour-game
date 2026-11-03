'use strict';
// Example missions: adults must prepare and approve every sample.
window.MISSIONS = [
  [
    {
      "id": "t1-m1",
      "name": "Purple Petal Portal",
      "location": "Adult-prepared pickup station: Purple Petal Portal",
      "clue": "Pomni has lost her purple world! Find a fallen piece of a tiny purple flower.",
      "source": "Adult supplies a safe sample at the marked station. Follow the preparation instructions; substitute or skip if unsuitable.",
      "look": "Adult preparation: tiny flat petal on dry slide, 4x.",
      "q": "What is a petal part of?",
      "options": [
        "Root",
        "Flower",
        "Rock"
      ],
      "answer": 1,
      "hint": "This colorful structure attracts pollinators.",
      "fact": "Petals are parts of flowers.",
      "emoji": "🪻",
      "symbol": "🪻",
      "color": "#8150b3"
    },
    {
      "id": "t1-m2",
      "name": "Zooble's Broken Pieces",
      "location": "Adult-prepared pickup station: Zooble's Broken Pieces",
      "clue": "Zooble broke into tiny jagged pieces! Find a little rock with sharp-looking corners.",
      "source": "Adult supplies a safe sample at the marked station. Follow the preparation instructions; substitute or skip if unsuitable.",
      "look": "Adult preparation: one tiny grain on dry slide, 4x only.",
      "q": "Most ordinary rocks contain what?",
      "options": [
        "Minerals",
        "Leaves",
        "Feathers"
      ],
      "answer": 0,
      "hint": "Natural rocks are made from geological ingredients.",
      "fact": "Rocks typically contain one or more minerals.",
      "emoji": "🧩",
      "symbol": "🧩",
      "color": "#08786a"
    },
    {
      "id": "t1-m3",
      "name": "Miniature Network",
      "location": "Adult-prepared pickup station: Miniature Network",
      "clue": "Find a tiny green leaf full of secret pathways.",
      "source": "Adult supplies a safe sample at the marked station. Follow the preparation instructions; substitute or skip if unsuitable.",
      "look": "Adult preparation: thin flat leaf on dry slide, 4x.",
      "q": "What do leaf veins move?",
      "options": [
        "Water and sugars",
        "Insects",
        "Pebbles"
      ],
      "answer": 0,
      "hint": "They're the leaf's delivery system.",
      "fact": "Veins contain plant transport tissues.",
      "emoji": "🍃",
      "symbol": "🍃",
      "color": "#345cbd"
    },
    {
      "id": "t1-m4",
      "name": "Onion Dimension",
      "location": "Adult-prepared pickup station: Onion Dimension",
      "clue": "Find a vegetable with layers like a secret dimension.",
      "source": "Adult supplies a safe sample at the marked station. Follow the preparation instructions; substitute or skip if unsuitable.",
      "look": "An adult peels a tiny transparent onion membrane and lays it flat on a clean glass slide. Start dry at 4x. If an adult chooses the optional single water drop, use a suitable coverslip and keep it away from the lens. Seeing individual cells is not required; use the science hint if the image is unclear.",
      "q": "What are the box-like compartments sometimes visible in onion skin?",
      "options": [
        "Plant cells",
        "Sand grains",
        "Insect eggs"
      ],
      "answer": 0,
      "hint": "They are basic building blocks of living plants.",
      "fact": "Onion epidermis often reveals rectangular plant cells, but clarity varies.",
      "emoji": "🧅",
      "symbol": "🧅",
      "color": "#b43268"
    }
  ],
  [
    {
      "id": "t2-m1",
      "name": "White Disguise",
      "location": "Adult-prepared pickup station: White Disguise",
      "clue": "Jax disguised a flower as a tiny white star. Find a loose white petal.",
      "source": "Adult supplies a safe sample at the marked station. Follow the preparation instructions; substitute or skip if unsuitable.",
      "look": "Adult preparation: single dry flat petal on slide, 4x.",
      "q": "Flowers commonly help plants do what?",
      "options": [
        "Reproduce",
        "Walk",
        "Dig holes"
      ],
      "answer": 0,
      "hint": "Seeds often start with flowers.",
      "fact": "Flowers have reproductive structures.",
      "emoji": "🤍",
      "symbol": "🤍",
      "color": "#8150b3"
    },
    {
      "id": "t2-m2",
      "name": "Forgotten Forest",
      "location": "Adult-prepared pickup station: Forgotten Forest",
      "clue": "Find a fallen brown forest hand with several lobed fingers.",
      "source": "Adult supplies a safe sample at the marked station. Follow the preparation instructions; substitute or skip if unsuitable.",
      "look": "Adult preparation: small flat leaf edge on dry slide, 4x.",
      "q": "What happens to many deciduous leaves in autumn?",
      "options": [
        "They change color and fall",
        "They become rocks",
        "They become insects"
      ],
      "answer": 0,
      "hint": "Look at the leaf you collected.",
      "fact": "Many deciduous trees shed leaves seasonally.",
      "emoji": "🍂",
      "symbol": "🍂",
      "color": "#08786a"
    },
    {
      "id": "t2-m3",
      "name": "Golden Hair",
      "location": "Adult-prepared pickup station: Golden Hair",
      "clue": "Gangle lost a strand of golden hair! Bring a tiny piece of a soft grassy plume.",
      "source": "Adult supplies a safe sample at the marked station. Follow the preparation instructions; substitute or skip if unsuitable.",
      "look": "Adult preparation: tiny plume strands spread on dry slide, 4x.",
      "q": "Grasses belong to which group?",
      "options": [
        "Flowering plants",
        "Fungi",
        "Insects"
      ],
      "answer": 0,
      "hint": "Their flowers can be tiny.",
      "fact": "Grasses are flowering plants.",
      "emoji": "🌾",
      "symbol": "🌾",
      "color": "#345cbd"
    },
    {
      "id": "t2-m4",
      "name": "Crystal Confusion",
      "location": "Adult-prepared pickup station: Crystal Confusion",
      "clue": "Jax spilled a mysterious pile of tiny white crystals! Find three grains.",
      "source": "Adult supplies a safe sample at the marked station. Follow the preparation instructions; substitute or skip if unsuitable.",
      "look": "Adult preparation: two or three dry salt grains on slide, 4x or adult-approved 10x.",
      "q": "Ordinary table salt is mainly which substance?",
      "options": [
        "Sodium chloride",
        "Sugar",
        "Cellulose"
      ],
      "answer": 0,
      "hint": "It's what makes food taste salty.",
      "fact": "Table salt consists mainly of sodium chloride.",
      "emoji": "🧂",
      "symbol": "🧂",
      "color": "#b43268"
    }
  ],
  [
    {
      "id": "t3-m1",
      "name": "Silver Glitch",
      "location": "Adult-prepared pickup station: Silver Glitch",
      "clue": "Ragatha needs a silver patch! Find a tiny fuzzy silver leaf.",
      "source": "Adult supplies a safe sample at the marked station. Follow the preparation instructions; substitute or skip if unsuitable.",
      "look": "Adult preparation: small leaf on dry slide, 4x.",
      "q": "What can cause a plant leaf to feel fuzzy?",
      "options": [
        "Tiny hairs",
        "Tiny teeth",
        "Sand growing inside"
      ],
      "answer": 0,
      "hint": "Think of fur.",
      "fact": "Surface hairs called trichomes can make leaves fuzzy; they may not resolve clearly in every image.",
      "emoji": "🩶",
      "symbol": "🩶",
      "color": "#8150b3"
    },
    {
      "id": "t3-m2",
      "name": "Green Ribbon",
      "location": "Adult-prepared pickup station: Green Ribbon",
      "clue": "Find a skinny green ribbon growing from the ground.",
      "source": "Adult supplies a safe sample at the marked station. Follow the preparation instructions; substitute or skip if unsuitable.",
      "look": "Adult preparation: thin flat grass segment on slide, 4x.",
      "q": "Which vein pattern is common in grass blades?",
      "options": [
        "Roughly parallel",
        "Perfect circles",
        "One spiral"
      ],
      "answer": 0,
      "hint": "Imagine lines running along the blade.",
      "fact": "Grass leaves commonly have parallel veins.",
      "emoji": "🎗️",
      "symbol": "🎗️",
      "color": "#08786a"
    },
    {
      "id": "t3-m3",
      "name": "Royal Pebble",
      "location": "Adult-prepared pickup station: Royal Pebble",
      "clue": "Kinger needs a royal stone without sharp corners! Find the smallest smooth pebble.",
      "source": "Adult supplies a safe sample at the marked station. Follow the preparation instructions; substitute or skip if unsuitable.",
      "look": "Adult preparation: adult selects a 1–2 mm pebble, dry slide, 4x only.",
      "q": "Why are many river pebbles rounded?",
      "options": [
        "They rub against other rocks",
        "They grow like fruit",
        "They melt in sunshine"
      ],
      "answer": 0,
      "hint": "Imagine rocks tumbling together.",
      "fact": "Transport and abrasion can smooth rock edges.",
      "emoji": "🪨",
      "symbol": "🪨",
      "color": "#345cbd"
    },
    {
      "id": "t3-m4",
      "name": "Thread of Reality",
      "location": "Adult-prepared pickup station: Thread of Reality",
      "clue": "Ragatha needs one thread to stitch reality together! Find a tiny strand of cotton thread.",
      "source": "Adult supplies a safe sample at the marked station. Follow the preparation instructions; substitute or skip if unsuitable.",
      "look": "Adult preparation: short single thread, teased apart if necessary, dry slide, 4x.",
      "q": "Cotton fibers originally come from what?",
      "options": [
        "Plants",
        "Metal",
        "Glass"
      ],
      "answer": 0,
      "hint": "Cotton grows in fields.",
      "fact": "Cotton is a natural plant fiber largely made of cellulose.",
      "emoji": "🧵",
      "symbol": "🧵",
      "color": "#b43268"
    }
  ],
  [
    {
      "id": "t4-m1",
      "name": "Red Glitch",
      "location": "Adult-prepared pickup station: Red Glitch",
      "clue": "The circus is turning red! Find a fallen leaf wearing red instead of green.",
      "source": "Adult supplies a safe sample at the marked station. Follow the preparation instructions; substitute or skip if unsuitable.",
      "look": "Adult preparation: small flat dry leaf section, 4x.",
      "q": "What are anthocyanins?",
      "options": [
        "Plant pigments",
        "Insect legs",
        "Rock crystals"
      ],
      "answer": 0,
      "hint": "Some pigments make plants red or purple.",
      "fact": "Anthocyanins are responsible for many red, blue, and purple colors in plants, though not every red leaf contains them.",
      "emoji": "🍁",
      "symbol": "🍁",
      "color": "#8150b3"
    },
    {
      "id": "t4-m2",
      "name": "Green Power Chip",
      "location": "Adult-prepared pickup station: Green Power Chip",
      "clue": "Caine's power is gone! Find a broad green leaf that captures sunlight.",
      "source": "Adult supplies a safe sample at the marked station. Follow the preparation instructions; substitute or skip if unsuitable.",
      "look": "Adult preparation: tiny flat section on dry slide, 4x.",
      "q": "How do green plants use sunlight to make sugars?",
      "options": [
        "Photosynthesis",
        "Digestion",
        "Freezing"
      ],
      "answer": 0,
      "hint": "The word begins with photo, meaning light.",
      "fact": "Photosynthesis converts light energy into chemical energy.",
      "emoji": "☀️",
      "symbol": "☀️",
      "color": "#08786a"
    },
    {
      "id": "t4-m3",
      "name": "Final Golden Thread",
      "location": "Adult-prepared pickup station: Final Golden Thread",
      "clue": "Find a dry golden blade that once helped a living plant grow.",
      "source": "Adult supplies a safe sample at the marked station. Follow the preparation instructions; substitute or skip if unsuitable.",
      "look": "Adult preparation: tiny flat segment on dry slide, 4x.",
      "q": "What gives plant cell walls much of their strength?",
      "options": [
        "Cellulose",
        "Glass",
        "Iron"
      ],
      "answer": 0,
      "hint": "It's a natural plant fiber material.",
      "fact": "Cellulose is a major structural component of plant cell walls, though molecules cannot be seen.",
      "emoji": "🟨",
      "symbol": "🟨",
      "color": "#345cbd"
    },
    {
      "id": "t4-m4",
      "name": "Paper Portal",
      "location": "Adult-prepared pickup station: Paper Portal",
      "clue": "Kinger found a white portal full of secret fibers! Bring a piece smaller than your fingernail.",
      "source": "Adult supplies a safe sample at the marked station. Follow the preparation instructions; substitute or skip if unsuitable.",
      "look": "Adult preparation: tiny torn dry paper towel fragment spread flat on slide, 4x.",
      "q": "Paper towel is mainly made from what type of material?",
      "options": [
        "Plant cellulose fibers",
        "Melted glass",
        "Metal wire"
      ],
      "answer": 0,
      "hint": "Many paper products originate from wood.",
      "fact": "Paper towels contain cellulose fibers and may show a fibrous texture.",
      "emoji": "🧻",
      "symbol": "🧻",
      "color": "#b43268"
    }
  ]
];
