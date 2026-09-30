export const cognitiveRounds = [
  {
    "round": 1,
    "name": "Arrow Direction Tracking - Grid 1",
    "instruction": "Observe the 3x3 arrow grid. Identify the orientation of the arrow that appears in the center cell after rotation.",
    "duration": 60,
    "grid": [
      [
        "\u2192",
        "\u2192",
        "\u2192"
      ],
      [
        "\u2192",
        "\u2197",
        "\u2192"
      ],
      [
        "\u2192",
        "\u2192",
        "\u2192"
      ]
    ],
    "question": "What is the direction of the deviating arrow in the matrix?",
    "options": [
      "Top-Right (\u2197)",
      "Right (\u2192)",
      "Bottom-Right (\u2198)",
      "Top-Left (\u2196)"
    ],
    "correctAnswer": 0
  },
  {
    "round": 2,
    "name": "Motion Switch Challenge - Level 2",
    "instruction": "Track the flow: 3 arrows moving right, then shifted 90 degrees clockwise.",
    "duration": 60,
    "grid": [
      [
        "\u2192",
        "\u2192",
        "\u2192"
      ],
      [
        "\u2193",
        "\u2193",
        "\u2193"
      ],
      [
        "\u2190",
        "\u2190",
        "\u2190"
      ]
    ],
    "question": "Following the clockwise sequence (Right \u2192 Down \u2192 Left), what is the next expected direction?",
    "options": [
      "Up (\u2191)",
      "Right (\u2192)",
      "Down (\u2193)",
      "Diagonal (\u2197)"
    ],
    "correctAnswer": 0
  },
  {
    "round": 3,
    "name": "Rapid Pattern Recognition - Level 3",
    "instruction": "Quickly determine the odd arrow out from the 4x4 matrix.",
    "duration": 60,
    "grid": [
      [
        "\u2192",
        "\u2192",
        "\u2192",
        "\u2192"
      ],
      [
        "\u2192",
        "\u2192",
        "\u2190",
        "\u2192"
      ],
      [
        "\u2192",
        "\u2192",
        "\u2192",
        "\u2192"
      ],
      [
        "\u2192",
        "\u2192",
        "\u2192",
        "\u2192"
      ]
    ],
    "question": "Where is the inverted arrow located?",
    "options": [
      "Row 2, Column 3",
      "Row 1, Column 2",
      "Row 3, Column 4",
      "Row 2, Column 2"
    ],
    "correctAnswer": 0
  },
  {
    "round": 4,
    "name": "Switch Transformation Rule",
    "instruction": "Input code [1, 2, 3, 4] passes through switch [3, 1, 4, 2]. What is the resulting order?",
    "duration": 60,
    "grid": [
      [
        "1",
        "2",
        "3",
        "4"
      ],
      [
        "\u2193",
        "\u2193",
        "\u2193",
        "\u2193"
      ],
      [
        "3",
        "1",
        "4",
        "2"
      ]
    ],
    "question": "If input is [A, B, C, D], what is the output after applying the switch?",
    "options": [
      "[C, A, D, B]",
      "[A, C, B, D]",
      "[D, C, B, A]",
      "[B, D, A, C]"
    ],
    "correctAnswer": 0
  },
  {
    "round": 5,
    "name": "Dual Matrix Symmetry Match",
    "instruction": "Check if Matrix A and Matrix B are horizontally symmetrical.",
    "duration": 60,
    "grid": [
      [
        "\u2192",
        "\u2191",
        "\u2190"
      ],
      [
        "\u2192",
        "\u2193",
        "\u2190"
      ],
      [
        "\u2192",
        "\u2191",
        "\u2190"
      ]
    ],
    "question": "Is the matrix horizontally mirrored along the central vertical axis?",
    "options": [
      "Yes, symmetrical",
      "No, asymmetric",
      "Partially diagonal",
      "Inverted vertical"
    ],
    "correctAnswer": 0
  }
];
