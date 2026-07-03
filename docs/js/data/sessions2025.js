// DEMO DATA ONLY
// This file currently contains sample race weekend data used to test the UI.
// Replace each round with verified real session, qualifying, grid, and race data later.

// DEMO / PLACEHOLDER DATA HELPERS
// These templates keep every race weekend page working until real data is added.

// ======================================================
// OFFICIAL 2025 FULL WEEKEND DATA TEMPLATE
// ======================================================
// Use this shape for every completed 2025 race weekend.
// Status values:
// - "Verified"      → real checked data
// - "Completed"     → complete but needs final review
// - "Coming soon"   → not filled yet
//
// Normal weekend sessions:
// FP1, FP2, FP3, Qualifying, Starting Grid, Race
//
// Sprint weekend sessions:
// FP1, Sprint Qualifying, Sprint, Qualifying, Starting Grid, Race
//
// NOTE:
// Race and Sprint results that affect standings should also be added
// inside standings2025.js, not only here.
// ======================================================

const completedNormalWeekendTemplate = {
  fp1: {
    status: "Verified",
    headline: "FP1 classification",
    classification: [
      {
        position: 1,
        code: "DRI",
        team: "Team Name",
        time: "1:00.000",
        gap: "—",
        laps: 20,
        tyres: []
      }
    ],
    notes: []
  },

  fp2: {
    status: "Verified",
    headline: "FP2 classification",
    classification: [
      {
        position: 1,
        code: "DRI",
        team: "Team Name",
        time: "1:00.000",
        gap: "—",
        laps: 20,
        tyres: []
      }
    ],
    notes: []
  },

  fp3: {
    status: "Verified",
    headline: "FP3 classification",
    classification: [
      {
        position: 1,
        code: "DRI",
        team: "Team Name",
        time: "1:00.000",
        gap: "—",
        laps: 20,
        tyres: []
      }
    ],
    notes: []
  },

  qualifying: {
    status: "Verified",
    pole: "DRI",

    q1: {
      classification: [
        {
          position: 1,
          code: "DRI",
          time: "1:00.000"
        }
      ]
    },

    q2: {
      classification: [
        {
          position: 1,
          code: "DRI",
          time: "1:00.000"
        }
      ]
    },

    q3: {
      classification: [
        {
          position: 1,
          code: "DRI",
          time: "1:00.000"
        }
      ]
    },

    notes: []
  },

  startingGrid: {
    status: "Verified",
    poleSide: "left",
    positions: [
      {
        grid: 1,
        code: "DRI",
        team: "Team Name",
        qualified: 1,
        reason: ""
      }
    ],
    notes: []
  },

  race: {
    status: "Verified",

    fastestLap: {
      code: "DRI",
      time: "1:00.000",
      lap: 50
    },

    fastestPitStop: {
      team: "Team Name",
      driver: "DRI",
      time: "2.00s"
    },

    driverOfTheDay: "DRI",

    podium: [
      {
        position: 1,
        code: "DRI",
        team: "Team Name",
        time: "1:30:00.000"
      },
      {
        position: 2,
        code: "DRI",
        team: "Team Name",
        gap: "+0.000s"
      },
      {
        position: 3,
        code: "DRI",
        team: "Team Name",
        gap: "+0.000s"
      }
    ],

    fullClassification: [
      {
        position: 1,
        code: "DRI",
        team: "Team Name",
        time: "1:30:00.000",
        status: "Finished",
        points: 25,
        note: ""
      }
    ],

    strategy: [],
    keyMoments: [],
    penalties: [],
    notes: []
  }
};

const completedSprintWeekendTemplate = {
  fp1: {
    status: "Verified",
    headline: "FP1 classification",
    classification: [
      {
        position: 1,
        code: "DRI",
        team: "Team Name",
        time: "1:00.000",
        gap: "—",
        laps: 20,
        tyres: []
      }
    ],
    notes: []
  },

  sprintQualifying: {
    status: "Verified",
    pole: "DRI",

    sq1: {
      classification: [
        {
          position: 1,
          code: "DRI",
          time: "1:00.000"
        }
      ]
    },

    sq2: {
      classification: [
        {
          position: 1,
          code: "DRI",
          time: "1:00.000"
        }
      ]
    },

    sq3: {
      classification: [
        {
          position: 1,
          code: "DRI",
          time: "1:00.000"
        }
      ]
    },

    notes: []
  },

  sprint: {
    status: "Verified",
    notes: []
  },

  qualifying: {
    status: "Verified",
    pole: "DRI",

    q1: {
      classification: [
        {
          position: 1,
          code: "DRI",
          time: "1:00.000"
        }
      ]
    },

    q2: {
      classification: [
        {
          position: 1,
          code: "DRI",
          time: "1:00.000"
        }
      ]
    },

    q3: {
      classification: [
        {
          position: 1,
          code: "DRI",
          time: "1:00.000"
        }
      ]
    },

    notes: []
  },

  startingGrid: {
    status: "Verified",
    poleSide: "left",
    positions: [
      {
        grid: 1,
        code: "DRI",
        team: "Team Name",
        qualified: 1,
        reason: ""
      }
    ],
    notes: []
  },

  race: {
    status: "Verified",

    fastestLap: {
      code: "DRI",
      time: "1:00.000",
      lap: 50
    },

    fastestPitStop: {
      team: "Team Name",
      driver: "DRI",
      time: "2.00s"
    },

    driverOfTheDay: "DRI",

    podium: [],

    fullClassification: [],

    strategy: [],
    keyMoments: [],
    penalties: [],
    notes: []
  }
};

function createPracticeTemplate(sessionName) {
  return {
    status: "Coming soon",
    headline: `${sessionName} data will be added later.`,
    classification: [],
    notes: []
  };
}

function createQualifyingTemplate() {
  return {
    status: "Coming soon",
    pole: "",
    q1: { classification: [] },
    q2: { classification: [] },
    q3: { classification: [] },
    notes: []
  };
}

function createSprintQualifyingTemplate() {
  return {
    status: "Coming soon",
    pole: "",
    sq1: { classification: [] },
    sq2: { classification: [] },
    sq3: { classification: [] },
    notes: []
  };
}

function createStartingGridTemplate() {
  return {
    status: "Coming soon",
    poleSide: "left",
    positions: [],
    notes: []
  };
}

function createRaceTemplate() {
  return {
    status: "Coming soon",
    podium: [],
    fastestLap: null,
    fastestPitStop: null,
    driverOfTheDay: "",
    fullClassification: [],
    strategy: [],
    keyMoments: [],
    penalties: [],
    notes: []
  };
}

function createSprintResultTemplate() {
  return {
    status: "Coming soon",
    headline: "Sprint result will be added later.",
    classification: [],
    notes: []
  };
}

function createNormalWeekendTemplate() {
  return {
    fp1: createPracticeTemplate("FP1"),
    fp2: createPracticeTemplate("FP2"),
    fp3: createPracticeTemplate("FP3"),
    qualifying: createQualifyingTemplate(),
    startingGrid: createStartingGridTemplate(),
    race: createRaceTemplate()
  };
}

function createSprintWeekendTemplate() {
  return {
    fp1: createPracticeTemplate("FP1"),
    sprintQualifying: createSprintQualifyingTemplate(),
    sprintGrid: createStartingGridTemplate(),
    sprint: createSprintResultTemplate(),
    qualifying: createQualifyingTemplate(),
    startingGrid: createStartingGridTemplate(),
    race: createRaceTemplate()
  };
}

const sessionDetails2025 = {
  1: {
    fp1: {
      status: "Verified",
      headline: "FP1 classification",
      classification: [
        { position: 1, code: "NOR", team: "McLaren", time: "1:17.252", gap: "—", laps: 21, tyres: [] },
        { position: 2, code: "SAI", team: "Williams", time: "1:17.401", gap: "+0.149s", laps: 25, tyres: [] },
        { position: 3, code: "LEC", team: "Ferrari", time: "1:17.461", gap: "+0.209s", laps: 21, tyres: [] },
        { position: 4, code: "PIA", team: "McLaren", time: "1:17.670", gap: "+0.418s", laps: 20, tyres: [] },
        { position: 5, code: "VER", team: "Red Bull Racing", time: "1:17.696", gap: "+0.444s", laps: 21, tyres: [] },
        { position: 6, code: "ALB", team: "Williams", time: "1:17.713", gap: "+0.461s", laps: 18, tyres: [] },
        { position: 7, code: "RUS", team: "Mercedes", time: "1:17.716", gap: "+0.464s", laps: 26, tyres: [] },
        { position: 8, code: "ALO", team: "Aston Martin", time: "1:17.736", gap: "+0.484s", laps: 23, tyres: [] },
        { position: 9, code: "HAD", team: "Racing Bulls", time: "1:17.847", gap: "+0.595s", laps: 25, tyres: [] },
        { position: 10, code: "STR", team: "Aston Martin", time: "1:18.057", gap: "+0.805s", laps: 20, tyres: [] },
        { position: 11, code: "TSU", team: "Racing Bulls", time: "1:18.061", gap: "+0.809s", laps: 23, tyres: [] },
        { position: 12, code: "HAM", team: "Ferrari", time: "1:18.071", gap: "+0.819s", laps: 20, tyres: [] },
        { position: 13, code: "DOO", team: "Alpine", time: "1:18.232", gap: "+0.980s", laps: 20, tyres: [] },
        { position: 14, code: "ANT", team: "Mercedes", time: "1:18.390", gap: "+1.138s", laps: 25, tyres: [] },
        { position: 15, code: "BOR", team: "Kick Sauber", time: "1:18.438", gap: "+1.186s", laps: 22, tyres: [] },
        { position: 16, code: "LAW", team: "Red Bull Racing", time: "1:18.455", gap: "+1.203s", laps: 22, tyres: [] },
        { position: 17, code: "GAS", team: "Alpine", time: "1:18.505", gap: "+1.253s", laps: 23, tyres: [] },
        { position: 18, code: "HUL", team: "Kick Sauber", time: "1:18.586", gap: "+1.334s", laps: 18, tyres: [] },
        { position: 19, code: "OCO", team: "Haas", time: "1:19.139", gap: "+1.887s", laps: 16, tyres: [] },
        { position: 20, code: "BEA", team: "Haas", time: "1:19.312", gap: "+2.060s", laps: 12, tyres: [] }
      ],
      notes: [
        "Lando Norris topped the opening practice session for McLaren.",
        "Carlos Sainz placed second for Williams, with Charles Leclerc third for Ferrari."
      ]
    },

    fp2: {
      status: "Verified",
      headline: "FP2 classification",
      classification: [
        { position: 1, code: "LEC", team: "Ferrari", time: "1:16.439", gap: "—", laps: 32, tyres: [] },
        { position: 2, code: "PIA", team: "McLaren", time: "1:16.563", gap: "+0.124s", laps: 30, tyres: [] },
        { position: 3, code: "NOR", team: "McLaren", time: "1:16.580", gap: "+0.141s", laps: 30, tyres: [] },
        { position: 4, code: "TSU", team: "Racing Bulls", time: "1:16.784", gap: "+0.345s", laps: 29, tyres: [] },
        { position: 5, code: "HAM", team: "Ferrari", time: "1:16.859", gap: "+0.420s", laps: 31, tyres: [] },
        { position: 6, code: "HAD", team: "Racing Bulls", time: "1:17.019", gap: "+0.580s", laps: 30, tyres: [] },
        { position: 7, code: "VER", team: "Red Bull Racing", time: "1:17.063", gap: "+0.624s", laps: 22, tyres: [] },
        { position: 8, code: "HUL", team: "Kick Sauber", time: "1:17.161", gap: "+0.722s", laps: 24, tyres: [] },
        { position: 9, code: "STR", team: "Aston Martin", time: "1:17.279", gap: "+0.840s", laps: 28, tyres: [] },
        { position: 10, code: "RUS", team: "Mercedes", time: "1:17.282", gap: "+0.843s", laps: 30, tyres: [] },
        { position: 11, code: "SAI", team: "Williams", time: "1:17.302", gap: "+0.863s", laps: 30, tyres: [] },
        { position: 12, code: "ALB", team: "Williams", time: "1:17.302", gap: "+0.863s", laps: 28, tyres: [] },
        { position: 13, code: "ALO", team: "Aston Martin", time: "1:17.330", gap: "+0.891s", laps: 27, tyres: [] },
        { position: 14, code: "DOO", team: "Alpine", time: "1:17.394", gap: "+0.955s", laps: 30, tyres: [] },
        { position: 15, code: "GAS", team: "Alpine", time: "1:17.493", gap: "+1.054s", laps: 30, tyres: [] },
        { position: 16, code: "ANT", team: "Mercedes", time: "1:17.634", gap: "+1.195s", laps: 31, tyres: [] },
        { position: 17, code: "LAW", team: "Red Bull Racing", time: "1:17.640", gap: "+1.201s", laps: 30, tyres: [] },
        { position: 18, code: "BOR", team: "Kick Sauber", time: "1:17.847", gap: "+1.408s", laps: 29, tyres: [] },
        { position: 19, code: "OCO", team: "Haas", time: "1:18.034", gap: "+1.595s", laps: 31, tyres: [] }
      ],
      notes: [
        "Charles Leclerc led FP2 for Ferrari.",
        "Oscar Piastri and Lando Norris completed the top three for McLaren."
      ]
    },

    fp3: {
      status: "Verified",
      headline: "FP3 classification",
      classification: [
        { position: 1, code: "PIA", team: "McLaren", time: "1:15.921", gap: "—", laps: 16, tyres: [] },
        { position: 2, code: "RUS", team: "Mercedes", time: "1:15.960", gap: "+0.039s", laps: 17, tyres: [] },
        { position: 3, code: "VER", team: "Red Bull Racing", time: "1:16.002", gap: "+0.081s", laps: 18, tyres: [] },
        { position: 4, code: "LEC", team: "Ferrari", time: "1:16.188", gap: "+0.267s", laps: 22, tyres: [] },
        { position: 5, code: "ANT", team: "Mercedes", time: "1:16.206", gap: "+0.285s", laps: 20, tyres: [] },
        { position: 6, code: "SAI", team: "Williams", time: "1:16.252", gap: "+0.331s", laps: 23, tyres: [] },
        { position: 7, code: "ALB", team: "Williams", time: "1:16.258", gap: "+0.337s", laps: 21, tyres: [] },
        { position: 8, code: "HAM", team: "Ferrari", time: "1:16.378", gap: "+0.457s", laps: 21, tyres: [] },
        { position: 9, code: "TSU", team: "Racing Bulls", time: "1:16.455", gap: "+0.534s", laps: 17, tyres: [] },
        { position: 10, code: "NOR", team: "McLaren", time: "1:16.597", gap: "+0.676s", laps: 20, tyres: [] },
        { position: 11, code: "BOR", team: "Kick Sauber", time: "1:16.707", gap: "+0.786s", laps: 18, tyres: [] },
        { position: 12, code: "GAS", team: "Alpine", time: "1:16.719", gap: "+0.798s", laps: 22, tyres: [] },
        { position: 13, code: "HAD", team: "Racing Bulls", time: "1:16.732", gap: "+0.811s", laps: 18, tyres: [] },
        { position: 14, code: "STR", team: "Aston Martin", time: "1:16.948", gap: "+1.027s", laps: 22, tyres: [] },
        { position: 15, code: "DOO", team: "Alpine", time: "1:16.993", gap: "+1.072s", laps: 18, tyres: [] },
        { position: 16, code: "HUL", team: "Kick Sauber", time: "1:17.146", gap: "+1.225s", laps: 15, tyres: [] },
        { position: 17, code: "ALO", team: "Aston Martin", time: "1:17.270", gap: "+1.349s", laps: 22, tyres: [] },
        { position: 18, code: "OCO", team: "Haas", time: "1:17.373", gap: "+1.452s", laps: 18, tyres: [] },
        { position: 19, code: "BEA", team: "Haas", time: "", gap: "—", laps: 2, tyres: [] },
        { position: 20, code: "LAW", team: "Red Bull Racing", time: "", gap: "—", laps: 2, tyres: [] }
      ],
      notes: [
        "Oscar Piastri topped final practice for McLaren.",
        "George Russell was second, only 0.039s behind."
      ]
    },

    qualifying: {
      status: "Verified",
      pole: "NOR",

      q1: {
        classification: [
          { position: 1, code: "NOR", time: "1:15.912" },
          { position: 2, code: "RUS", time: "1:15.971" },
          { position: 3, code: "VER", time: "1:16.018" },
          { position: 4, code: "LEC", time: "1:16.029" },
          { position: 5, code: "PIA", time: "1:16.062" },
          { position: 6, code: "HAM", time: "1:16.213" },
          { position: 7, code: "TSU", time: "1:16.225" },
          { position: 8, code: "ALB", time: "1:16.245" },
          { position: 9, code: "ALO", time: "1:16.288" },
          { position: 10, code: "DOO", time: "1:16.315" },
          { position: 11, code: "GAS", time: "1:16.328" },
          { position: 12, code: "HAD", time: "1:16.354" },
          { position: 13, code: "SAI", time: "1:16.360" },
          { position: 14, code: "STR", time: "1:16.369" },
          { position: 15, code: "BOR", time: "1:16.516" },
          { position: 16, code: "ANT", time: "1:16.525" },
          { position: 17, code: "HUL", time: "1:16.579" },
          { position: 18, code: "LAW", time: "1:17.094" },
          { position: 19, code: "OCO", time: "1:17.147" },
          { position: 20, code: "BEA", time: "" }
        ]
      },

      q2: {
        classification: [
          { position: 1, code: "NOR", time: "1:15.415" },
          { position: 2, code: "PIA", time: "1:15.468" },
          { position: 3, code: "VER", time: "1:15.565" },
          { position: 4, code: "RUS", time: "1:15.798" },
          { position: 5, code: "LEC", time: "1:15.827" },
          { position: 6, code: "HAM", time: "1:15.919" },
          { position: 7, code: "SAI", time: "1:15.931" },
          { position: 8, code: "TSU", time: "1:16.009" },
          { position: 9, code: "ALB", time: "1:16.017" },
          { position: 10, code: "GAS", time: "1:16.112" },
          { position: 11, code: "HAD", time: "1:16.175" },
          { position: 12, code: "ALO", time: "1:16.453" },
          { position: 13, code: "STR", time: "1:16.483" },
          { position: 14, code: "DOO", time: "1:16.863" },
          { position: 15, code: "BOR", time: "1:17.520" }
        ]
      },

      q3: {
        classification: [
          { position: 1, code: "NOR", time: "1:15.096" },
          { position: 2, code: "PIA", time: "1:15.180" },
          { position: 3, code: "VER", time: "1:15.481" },
          { position: 4, code: "RUS", time: "1:15.546" },
          { position: 5, code: "TSU", time: "1:15.670" },
          { position: 6, code: "ALB", time: "1:15.737" },
          { position: 7, code: "LEC", time: "1:15.755" },
          { position: 8, code: "HAM", time: "1:15.973" },
          { position: 9, code: "GAS", time: "1:15.980" },
          { position: 10, code: "SAI", time: "1:16.062" }
        ]
      },

      notes: [
        "Lando Norris took pole position for McLaren.",
        "McLaren locked out the front row with Norris ahead of Oscar Piastri."
      ]
    },

    startingGrid: {
      status: "Verified",
      poleSide: "left",
      positions: [
        { grid: 1, code: "NOR", team: "McLaren", qualified: 1, note: "Pole position" },
        { grid: 2, code: "PIA", team: "McLaren", qualified: 2 },
        { grid: 3, code: "VER", team: "Red Bull Racing", qualified: 3 },
        { grid: 4, code: "RUS", team: "Mercedes", qualified: 4 },
        { grid: 5, code: "TSU", team: "Racing Bulls", qualified: 5 },
        { grid: 6, code: "ALB", team: "Williams", qualified: 6 },
        { grid: 7, code: "LEC", team: "Ferrari", qualified: 7 },
        { grid: 8, code: "HAM", team: "Ferrari", qualified: 8 },
        { grid: 9, code: "GAS", team: "Alpine", qualified: 9 },
        { grid: 10, code: "SAI", team: "Williams", qualified: 10 },
        { grid: 11, code: "HAD", team: "Racing Bulls", qualified: 11, note: "Did not start the race" },
        { grid: 12, code: "ALO", team: "Aston Martin", qualified: 12 },
        { grid: 13, code: "STR", team: "Aston Martin", qualified: 13 },
        { grid: 14, code: "DOO", team: "Alpine", qualified: 14 },
        { grid: 15, code: "BOR", team: "Kick Sauber", qualified: 15 },
        { grid: 16, code: "ANT", team: "Mercedes", qualified: 16 },
        { grid: 17, code: "HUL", team: "Kick Sauber", qualified: 17 },
        { grid: 18, code: "LAW", team: "Red Bull Racing", qualified: 18, reason: "Started from pit lane after Parc Ferme changes" },
        { grid: 19, code: "OCO", team: "Haas", qualified: 19 },
        { grid: 20, code: "BEA", team: "Haas", qualified: 20, reason: "Permitted to race after no qualifying lap; started from pit lane after Parc Ferme changes" }
      ],
      notes: [
        "Oliver Bearman failed to set a lap time in qualifying but was permitted to race by the stewards.",
        "Bearman and Liam Lawson were required to start from the pit lane after cars were modified under Parc Ferme conditions."
      ]
    },

    race: {
      status: "Verified",

      fastestLap: {
        code: "NOR",
        time: "1:22.167",
        lap: 43
      },

      fastestPitStop: {
        team: "Ferrari",
        time: "2.32s"
      },

      driverOfTheDay: "NOR",

      podium: [
        { position: 1, code: "NOR", team: "McLaren", time: "1:42:06.304" },
        { position: 2, code: "VER", team: "Red Bull Racing", gap: "+0.895s" },
        { position: 3, code: "RUS", team: "Mercedes", gap: "+8.481s" }
      ],

      fullClassification: [
        { position: 1, code: "NOR", team: "McLaren", time: "1:42:06.304", status: "Finished", points: 25 },
        { position: 2, code: "VER", team: "Red Bull Racing", gap: "+0.895s", status: "Finished", points: 18 },
        { position: 3, code: "RUS", team: "Mercedes", gap: "+8.481s", status: "Finished", points: 15 },
        { position: 4, code: "ANT", team: "Mercedes", gap: "+10.135s", status: "Finished", points: 12 },
        { position: 5, code: "ALB", team: "Williams", gap: "+12.773s", status: "Finished", points: 10 },
        { position: 6, code: "STR", team: "Aston Martin", gap: "+17.413s", status: "Finished", points: 8 },
        { position: 7, code: "HUL", team: "Kick Sauber", gap: "+18.423s", status: "Finished", points: 6 },
        { position: 8, code: "LEC", team: "Ferrari", gap: "+19.826s", status: "Finished", points: 4 },
        { position: 9, code: "PIA", team: "McLaren", gap: "+20.448s", status: "Finished", points: 2 },
        { position: 10, code: "HAM", team: "Ferrari", gap: "+22.473s", status: "Finished", points: 1 },
        { position: 11, code: "GAS", team: "Alpine", gap: "+26.502s", status: "Finished", points: 0 },
        { position: 12, code: "TSU", team: "Racing Bulls", gap: "+29.884s", status: "Finished", points: 0 },
        { position: 13, code: "OCO", team: "Haas", gap: "+33.161s", status: "Finished", points: 0 },
        { position: 14, code: "BEA", team: "Haas", gap: "+40.351s", status: "Finished", points: 0 },
        { position: "NC", code: "LAW", team: "Red Bull Racing", status: "DNF", points: 0, note: "Completed 46 laps" },
        { position: "NC", code: "BOR", team: "Kick Sauber", status: "DNF", points: 0, note: "Completed 45 laps" },
        { position: "NC", code: "ALO", team: "Aston Martin", status: "DNF", points: 0, note: "Completed 32 laps" },
        { position: "NC", code: "SAI", team: "Williams", status: "DNF", points: 0, note: "Completed 0 laps" },
        { position: "NC", code: "DOO", team: "Alpine", status: "DNF", points: 0, note: "Completed 0 laps" },
        { position: "NC", code: "HAD", team: "Racing Bulls", status: "DNS", points: 0, note: "Did not start" }
      ],

      strategy: [
        "The race was affected by changing conditions and multiple Safety Car periods.",
        "Late rain created major pressure in the closing stages."
      ],

      keyMoments: [
        "Lando Norris converted pole position into victory.",
        "Max Verstappen chased Norris to the flag and finished less than one second behind.",
        "George Russell completed the podium for Mercedes.",
        "Several drivers retired or failed to finish during a chaotic season opener."
      ],

      penalties: [],

      notes: [
        "Official race distance was shortened to 57 completed laps.",
        "Norris also set the fastest lap of the race on lap 43."
      ]
    }
  },

  2: {
    fp1: {
      status: "Verified",
      headline: "FP1 classification",
      classification: [
        { position: 1, code: "NOR", team: "McLaren", time: "1:31.504", gap: "—", laps: 23, tyres: [] },
        { position: 2, code: "LEC", team: "Ferrari", time: "", gap: "+0.454s", laps: 21, tyres: [] },
        { position: 3, code: "PIA", team: "McLaren", time: "", gap: "+0.649s", laps: 24, tyres: [] },
        { position: 4, code: "HAM", team: "Ferrari", time: "", gap: "+0.691s", laps: 22, tyres: [] },
        { position: 5, code: "RUS", team: "Mercedes", time: "", gap: "+0.873s", laps: 26, tyres: [] },
        { position: 6, code: "HUL", team: "Kick Sauber", time: "", gap: "+1.003s", laps: 21, tyres: [] },
        { position: 7, code: "ALB", team: "Williams", time: "", gap: "+1.183s", laps: 24, tyres: [] },
        { position: 8, code: "ALO", team: "Aston Martin", time: "", gap: "+1.262s", laps: 23, tyres: [] },
        { position: 9, code: "ANT", team: "Mercedes", time: "", gap: "+1.370s", laps: 27, tyres: [] },
        { position: 10, code: "TSU", team: "Racing Bulls", time: "", gap: "+1.430s", laps: 23, tyres: [] },
        { position: 11, code: "BEA", team: "Haas", time: "", gap: "+1.463s", laps: 23, tyres: [] },
        { position: 12, code: "STR", team: "Aston Martin", time: "", gap: "+1.480s", laps: 19, tyres: [] },
        { position: 13, code: "OCO", team: "Haas", time: "", gap: "+1.552s", laps: 23, tyres: [] },
        { position: 14, code: "GAS", team: "Alpine", time: "", gap: "+1.619s", laps: 23, tyres: [] },
        { position: 15, code: "SAI", team: "Williams", time: "", gap: "+1.641s", laps: 26, tyres: [] },
        { position: 16, code: "VER", team: "Red Bull Racing", time: "", gap: "+1.780s", laps: 24, tyres: [] },
        { position: 17, code: "HAD", team: "Racing Bulls", time: "", gap: "+1.881s", laps: 23, tyres: [] },
        { position: 18, code: "LAW", team: "Red Bull Racing", time: "", gap: "+2.127s", laps: 23, tyres: [] },
        { position: 19, code: "BOR", team: "Kick Sauber", time: "", gap: "+2.318s", laps: 24, tyres: [] },
        { position: 20, code: "DOO", team: "Alpine", time: "", gap: "+2.419s", laps: 17, tyres: [] }
      ],
      notes: [
        "Lando Norris topped the only practice session of the Chinese Grand Prix weekend.",
        "The weekend used the Sprint format, making FP1 the only practice session before competitive running."
      ]
    },

    sprintQualifying: {
      status: "Verified",
      pole: "HAM",

      sq1: {
        classification: [
          { position: 1, code: "HAM", time: "1:31.212" },
          { position: 2, code: "VER", time: "1:31.916" },
          { position: 3, code: "PIA", time: "1:31.723" },
          { position: 4, code: "LEC", time: "1:31.518" },
          { position: 5, code: "RUS", time: "1:31.952" },
          { position: 6, code: "NOR", time: "1:31.396" },
          { position: 7, code: "ANT", time: "1:31.999" },
          { position: 8, code: "TSU", time: "1:32.316" },
          { position: 9, code: "ALB", time: "1:32.462" },
          { position: 10, code: "STR", time: "1:32.327" },
          { position: 11, code: "ALO", time: "1:32.121" },
          { position: 12, code: "BEA", time: "1:32.269" },
          { position: 13, code: "SAI", time: "1:32.457" },
          { position: 14, code: "BOR", time: "1:32.539" },
          { position: 15, code: "HAD", time: "1:32.171" },
          { position: 16, code: "DOO", time: "1:32.575" },
          { position: 17, code: "GAS", time: "1:32.640" },
          { position: 18, code: "OCO", time: "1:32.651" },
          { position: 19, code: "HUL", time: "1:32.675" },
          { position: 20, code: "LAW", time: "1:32.729" }
        ]
      },

      sq2: {
        classification: [
          { position: 1, code: "HAM", time: "1:31.384" },
          { position: 2, code: "VER", time: "1:31.521" },
          { position: 3, code: "PIA", time: "1:31.362" },
          { position: 4, code: "LEC", time: "1:31.561" },
          { position: 5, code: "RUS", time: "1:31.346" },
          { position: 6, code: "NOR", time: "1:31.174" },
          { position: 7, code: "ANT", time: "1:31.475" },
          { position: 8, code: "TSU", time: "1:31.794" },
          { position: 9, code: "ALB", time: "1:31.539" },
          { position: 10, code: "STR", time: "1:31.742" },
          { position: 11, code: "ALO", time: "1:31.815" },
          { position: 12, code: "BEA", time: "1:31.978" },
          { position: 13, code: "SAI", time: "1:32.325" },
          { position: 14, code: "BOR", time: "1:32.564" },
          { position: 15, code: "HAD", time: "DNF" }
        ]
      },

      sq3: {
        classification: [
          { position: 1, code: "HAM", time: "1:30.849" },
          { position: 2, code: "VER", time: "1:30.867" },
          { position: 3, code: "PIA", time: "1:30.929" },
          { position: 4, code: "LEC", time: "1:31.057" },
          { position: 5, code: "RUS", time: "1:31.169" },
          { position: 6, code: "NOR", time: "1:31.393" },
          { position: 7, code: "ANT", time: "1:31.738" },
          { position: 8, code: "TSU", time: "1:31.773" },
          { position: 9, code: "ALB", time: "1:31.852" },
          { position: 10, code: "STR", time: "1:31.982" }
        ]
      },

      notes: [
        "Lewis Hamilton took Sprint pole for Ferrari.",
        "Max Verstappen qualified second for the Sprint, ahead of Oscar Piastri."
      ]
    },

    sprintGrid: {
      status: "Verified",
      poleSide: "left",
      positions: [
        { grid: 1, code: "HAM", team: "Ferrari", qualified: 1, note: "Sprint pole" },
        { grid: 2, code: "VER", team: "Red Bull Racing", qualified: 2 },
        { grid: 3, code: "PIA", team: "McLaren", qualified: 3 },
        { grid: 4, code: "LEC", team: "Ferrari", qualified: 4 },
        { grid: 5, code: "RUS", team: "Mercedes", qualified: 5 },
        { grid: 6, code: "NOR", team: "McLaren", qualified: 6 },
        { grid: 7, code: "ANT", team: "Mercedes", qualified: 7 },
        { grid: 8, code: "TSU", team: "Racing Bulls", qualified: 8 },
        { grid: 9, code: "ALB", team: "Williams", qualified: 9 },
        { grid: 10, code: "STR", team: "Aston Martin", qualified: 10 },
        { grid: 11, code: "ALO", team: "Aston Martin", qualified: 11 },
        { grid: 12, code: "BEA", team: "Haas", qualified: 12 },
        { grid: 13, code: "SAI", team: "Williams", qualified: 13 },
        { grid: 14, code: "BOR", team: "Kick Sauber", qualified: 14 },
        { grid: 15, code: "HAD", team: "Racing Bulls", qualified: 15 },
        { grid: 16, code: "DOO", team: "Alpine", qualified: 16 },
        { grid: 17, code: "GAS", team: "Alpine", qualified: 17 },
        { grid: 18, code: "OCO", team: "Haas", qualified: 18 },
        { grid: 19, code: "LAW", team: "Red Bull Racing", qualified: 19 },
        {
          grid: 20,
          code: "HUL",
          team: "Kick Sauber",
          qualified: 20,
          reason: "Required to start from pit lane after Parc Ferme changes"
        }
      ],
      notes: [
        "Lewis Hamilton started the Sprint from pole for Ferrari.",
        "Nico Hulkenberg was required to start from the pit lane after his car was modified under Parc Ferme conditions."
      ]
    },

    sprint: {
      status: "Verified",
      headline: "Sprint classification",
      classification: [
        { position: 1, code: "HAM", team: "Ferrari", time: "30:39.965", points: 8 },
        { position: 2, code: "PIA", team: "McLaren", gap: "+6.889s", points: 7 },
        { position: 3, code: "VER", team: "Red Bull Racing", gap: "+9.804s", points: 6 },
        { position: 4, code: "RUS", team: "Mercedes", gap: "+11.592s", points: 5 },
        { position: 5, code: "LEC", team: "Ferrari", gap: "+12.190s", points: 4 },
        { position: 6, code: "TSU", team: "Racing Bulls", gap: "+22.288s", points: 3 },
        { position: 7, code: "ANT", team: "Mercedes", gap: "+23.038s", points: 2 },
        { position: 8, code: "NOR", team: "McLaren", gap: "+23.471s", points: 1 },
        { position: 9, code: "STR", team: "Aston Martin", gap: "+24.916s", points: 0 },
        { position: 10, code: "ALO", team: "Aston Martin", gap: "+38.218s", points: 0 },
        { position: 11, code: "ALB", team: "Williams", gap: "+39.292s", points: 0 },
        { position: 12, code: "GAS", team: "Alpine", gap: "+39.649s", points: 0 },
        { position: 13, code: "HAD", team: "Racing Bulls", gap: "+42.400s", points: 0 },
        { position: 14, code: "LAW", team: "Red Bull Racing", gap: "+44.904s", points: 0 },
        { position: 15, code: "BEA", team: "Haas", gap: "+45.649s", points: 0 },
        { position: 16, code: "OCO", team: "Haas", gap: "+46.182s", points: 0 },
        { position: 17, code: "SAI", team: "Williams", gap: "+51.376s", points: 0 },
        { position: 18, code: "BOR", team: "Kick Sauber", gap: "+53.940s", points: 0 },
        { position: 19, code: "HUL", team: "Kick Sauber", gap: "+56.682s", points: 0 },
        { position: 20, code: "DOO", team: "Alpine", gap: "+70.212s", points: 0 }
      ],
      notes: [
        "Lewis Hamilton won the Sprint for Ferrari.",
        "Jack Doohan received a 10-second post-race time penalty for causing a collision."
      ]
    },

    qualifying: {
      status: "Verified",
      pole: "PIA",

      q1: {
        classification: [
          { position: 1, code: "PIA", time: "1:31.591" },
          { position: 2, code: "RUS", time: "1:31.295" },
          { position: 3, code: "NOR", time: "1:30.983" },
          { position: 4, code: "VER", time: "1:31.424" },
          { position: 5, code: "HAM", time: "1:31.690" },
          { position: 6, code: "LEC", time: "1:31.579" },
          { position: 7, code: "HAD", time: "1:31.162" },
          { position: 8, code: "ANT", time: "1:31.676" },
          { position: 9, code: "TSU", time: "1:31.238" },
          { position: 10, code: "ALB", time: "1:31.503" },
          { position: 11, code: "OCO", time: "1:31.876" },
          { position: 12, code: "HUL", time: "1:31.921" },
          { position: 13, code: "ALO", time: "1:31.719" },
          { position: 14, code: "STR", time: "1:31.923" },
          { position: 15, code: "SAI", time: "1:31.628" },
          { position: 16, code: "GAS", time: "1:31.992" },
          { position: 17, code: "BEA", time: "1:32.018" },
          { position: 18, code: "DOO", time: "1:32.092" },
          { position: 19, code: "BOR", time: "1:32.141" },
          { position: 20, code: "LAW", time: "1:32.174" }
        ]
      },

      q2: {
        classification: [
          { position: 1, code: "PIA", time: "1:31.200" },
          { position: 2, code: "RUS", time: "1:31.307" },
          { position: 3, code: "NOR", time: "1:30.787" },
          { position: 4, code: "VER", time: "1:31.142" },
          { position: 5, code: "HAM", time: "1:31.501" },
          { position: 6, code: "LEC", time: "1:31.450" },
          { position: 7, code: "HAD", time: "1:31.253" },
          { position: 8, code: "ANT", time: "1:31.590" },
          { position: 9, code: "TSU", time: "1:31.260" },
          { position: 10, code: "ALB", time: "1:31.595" },
          { position: 11, code: "OCO", time: "1:31.625" },
          { position: 12, code: "HUL", time: "1:31.632" },
          { position: 13, code: "ALO", time: "1:31.688" },
          { position: 14, code: "STR", time: "1:31.773" },
          { position: 15, code: "SAI", time: "1:31.840" }
        ]
      },

      q3: {
        classification: [
          { position: 1, code: "PIA", time: "1:30.641" },
          { position: 2, code: "RUS", time: "1:30.723" },
          { position: 3, code: "NOR", time: "1:30.793" },
          { position: 4, code: "VER", time: "1:30.817" },
          { position: 5, code: "HAM", time: "1:30.927" },
          { position: 6, code: "LEC", time: "1:31.021" },
          { position: 7, code: "HAD", time: "1:31.079" },
          { position: 8, code: "ANT", time: "1:31.103" },
          { position: 9, code: "TSU", time: "1:31.638" },
          { position: 10, code: "ALB", time: "1:31.706" }
        ]
      },

      notes: [
        "Oscar Piastri took Grand Prix pole position for McLaren.",
        "George Russell qualified second for Mercedes, with Lando Norris third."
      ]
    },

    startingGrid: {
      status: "Verified",
      poleSide: "left",
      positions: [
        { grid: 1, code: "PIA", team: "McLaren", qualified: 1, note: "Pole position" },
        { grid: 2, code: "RUS", team: "Mercedes", qualified: 2 },
        { grid: 3, code: "NOR", team: "McLaren", qualified: 3 },
        { grid: 4, code: "VER", team: "Red Bull Racing", qualified: 4 },
        { grid: 5, code: "HAM", team: "Ferrari", qualified: 5 },
        { grid: 6, code: "LEC", team: "Ferrari", qualified: 6 },
        { grid: 7, code: "HAD", team: "Racing Bulls", qualified: 7 },
        { grid: 8, code: "ANT", team: "Mercedes", qualified: 8 },
        { grid: 9, code: "TSU", team: "Racing Bulls", qualified: 9 },
        { grid: 10, code: "ALB", team: "Williams", qualified: 10 },
        { grid: 11, code: "OCO", team: "Haas", qualified: 11 },
        { grid: 12, code: "HUL", team: "Kick Sauber", qualified: 12 },
        { grid: 13, code: "ALO", team: "Aston Martin", qualified: 13 },
        { grid: 14, code: "STR", team: "Aston Martin", qualified: 14 },
        { grid: 15, code: "SAI", team: "Williams", qualified: 15 },
        { grid: 16, code: "GAS", team: "Alpine", qualified: 16 },
        { grid: 17, code: "BEA", team: "Haas", qualified: 17 },
        { grid: 18, code: "DOO", team: "Alpine", qualified: 18 },
        { grid: 19, code: "BOR", team: "Kick Sauber", qualified: 19 },
        { grid: 20, code: "LAW", team: "Red Bull Racing", qualified: 20, reason: "Required to start from pit lane after Parc Ferme changes" }
      ],
      notes: [
        "Liam Lawson was required to start from the pit lane after his car was modified under Parc Ferme conditions."
      ]
    },

    race: {
      status: "Verified",

      fastestLap: {
        code: "NOR",
        time: "1:35.454",
        lap: 53
      },

      fastestPitStop: {
        team: "Ferrari",
        driver: "LEC",
        time: "22.151s pit-lane time"
      },

      driverOfTheDay: "ANT",

      podium: [
        { position: 1, code: "PIA", team: "McLaren", time: "1:30:55.026" },
        { position: 2, code: "NOR", team: "McLaren", gap: "+9.748s" },
        { position: 3, code: "RUS", team: "Mercedes", gap: "+11.097s" }
      ],

      fullClassification: [
        { position: 1, code: "PIA", team: "McLaren", time: "1:30:55.026", status: "Finished", points: 25 },
        { position: 2, code: "NOR", team: "McLaren", gap: "+9.748s", status: "Finished", points: 18 },
        { position: 3, code: "RUS", team: "Mercedes", gap: "+11.097s", status: "Finished", points: 15 },
        { position: 4, code: "VER", team: "Red Bull Racing", gap: "+16.656s", status: "Finished", points: 12 },
        { position: 5, code: "OCO", team: "Haas", gap: "+49.969s", status: "Finished", points: 10 },
        { position: 6, code: "ANT", team: "Mercedes", gap: "+53.748s", status: "Finished", points: 8 },
        { position: 7, code: "ALB", team: "Williams", gap: "+56.321s", status: "Finished", points: 6 },
        { position: 8, code: "BEA", team: "Haas", gap: "+61.303s", status: "Finished", points: 4 },
        { position: 9, code: "STR", team: "Aston Martin", gap: "+70.204s", status: "Finished", points: 2 },
        { position: 10, code: "SAI", team: "Williams", gap: "+76.387s", status: "Finished", points: 1 },
        { position: 11, code: "HAD", team: "Racing Bulls", gap: "+78.875s", status: "Finished", points: 0 },
        { position: 12, code: "LAW", team: "Red Bull Racing", gap: "+81.147s", status: "Finished", points: 0 },
        { position: 13, code: "DOO", team: "Alpine", gap: "+88.401s", status: "Finished", points: 0, note: "10-second time penalty" },
        { position: 14, code: "BOR", team: "Kick Sauber", gap: "+1 lap", status: "Finished", points: 0 },
        { position: 15, code: "HUL", team: "Kick Sauber", gap: "+1 lap", status: "Finished", points: 0 },
        { position: 16, code: "TSU", team: "Racing Bulls", gap: "+1 lap", status: "Finished", points: 0 },
        { position: "NC", code: "ALO", team: "Aston Martin", status: "DNF", points: 0, note: "Completed 4 laps" },
        { position: "DQ", code: "LEC", team: "Ferrari", status: "DSQ", points: 0, note: "Disqualified for technical infringement" },
        { position: "DQ", code: "HAM", team: "Ferrari", status: "DSQ", points: 0, note: "Disqualified for technical infringement" },
        { position: "DQ", code: "GAS", team: "Alpine", status: "DSQ", points: 0, note: "Disqualified for technical infringement" }
      ],

      strategy: [
        "The Grand Prix became a one-stop dominated race for many drivers.",
        "Kimi Antonelli earned Driver of the Day after managing a long second stint despite car damage."
      ],

      keyMoments: [
        "Oscar Piastri converted pole into victory.",
        "McLaren completed a one-two finish with Piastri ahead of Norris.",
        "George Russell completed the podium for Mercedes.",
        "Ferrari lost both points finishes after post-race disqualifications."
      ],

      penalties: [
        "Jack Doohan received a 10-second time penalty for forcing another driver off track.",
        "Charles Leclerc, Lewis Hamilton, and Pierre Gasly were disqualified for technical infringements."
      ],

      notes: [
        "Lando Norris is listed as the official fastest lap holder after post-race disqualifications.",
        "The fastest pit-lane time listed in the official pit stop summary was Charles Leclerc's 22.151s stop."
      ]
    }
  },
  3: {
    fp1: {
      status: "Verified",
      headline: "FP1 classification",
      classification: [
        { position: 1, code: "NOR", team: "McLaren", time: "1:28.549", gap: "—", laps: 24, tyres: [] },
        { position: 2, code: "RUS", team: "Mercedes", time: "", gap: "+0.163s", laps: 29, tyres: [] },
        { position: 3, code: "LEC", team: "Ferrari", time: "", gap: "+0.416s", laps: 27, tyres: [] },
        { position: 4, code: "HAM", team: "Ferrari", time: "", gap: "+0.502s", laps: 25, tyres: [] },
        { position: 5, code: "VER", team: "Red Bull Racing", time: "", gap: "+0.516s", laps: 23, tyres: [] },
        { position: 6, code: "TSU", team: "Red Bull Racing", time: "", gap: "+0.623s", laps: 25, tyres: [] },
        { position: 7, code: "ALO", team: "Aston Martin", time: "", gap: "+0.673s", laps: 25, tyres: [] },
        { position: 8, code: "HAD", team: "Racing Bulls", time: "", gap: "+0.676s", laps: 28, tyres: [] },
        { position: 9, code: "ANT", team: "Mercedes", time: "", gap: "+0.735s", laps: 28, tyres: [] },
        { position: 10, code: "SAI", team: "Williams", time: "", gap: "+0.784s", laps: 28, tyres: [] },
        { position: 11, code: "ALB", team: "Williams", time: "", gap: "+0.843s", laps: 25, tyres: [] },
        { position: 12, code: "HIR", name: "Ryo Hirakawa", team: "Alpine", time: "", gap: "+0.845s", laps: 24, tyres: [] },
        { position: 13, code: "LAW", team: "Racing Bulls", time: "", gap: "+0.987s", laps: 28, tyres: [] },
        { position: 14, code: "GAS", team: "Alpine", time: "", gap: "+0.998s", laps: 23, tyres: [] },
        { position: 15, code: "PIA", team: "McLaren", time: "", gap: "+1.159s", laps: 25, tyres: [] },
        { position: 16, code: "STR", team: "Aston Martin", time: "", gap: "+1.209s", laps: 25, tyres: [] },
        { position: 17, code: "HUL", team: "Kick Sauber", time: "", gap: "+1.474s", laps: 21, tyres: [] },
        { position: 18, code: "BEA", team: "Haas", time: "", gap: "+1.528s", laps: 17, tyres: [] },
        { position: 19, code: "OCO", team: "Haas", time: "", gap: "+1.574s", laps: 21, tyres: [] },
        { position: 20, code: "BOR", team: "Kick Sauber", time: "", gap: "+1.598s", laps: 26, tyres: [] }
      ],
      notes: [
        "Lando Norris topped FP1 for McLaren.",
        "Ryo Hirakawa took part in FP1 for Alpine."
      ]
    },

    fp2: {
      status: "Verified",
      headline: "FP2 classification",
      classification: [
        { position: 1, code: "PIA", team: "McLaren", time: "1:28.114", gap: "—", laps: 13, tyres: [] },
        { position: 2, code: "NOR", team: "McLaren", time: "", gap: "+0.049s", laps: 12, tyres: [] },
        { position: 3, code: "HAD", team: "Racing Bulls", time: "", gap: "+0.404s", laps: 12, tyres: [] },
        { position: 4, code: "HAM", team: "Ferrari", time: "", gap: "+0.430s", laps: 14, tyres: [] },
        { position: 5, code: "LAW", team: "Racing Bulls", time: "", gap: "+0.445s", laps: 13, tyres: [] },
        { position: 6, code: "RUS", team: "Mercedes", time: "", gap: "+0.453s", laps: 13, tyres: [] },
        { position: 7, code: "LEC", team: "Ferrari", time: "", gap: "+0.472s", laps: 14, tyres: [] },
        { position: 8, code: "VER", team: "Red Bull Racing", time: "", gap: "+0.556s", laps: 9, tyres: [] },
        { position: 9, code: "GAS", team: "Alpine", time: "", gap: "+0.643s", laps: 13, tyres: [] },
        { position: 10, code: "SAI", team: "Williams", time: "", gap: "+0.718s", laps: 9, tyres: [] },
        { position: 11, code: "ALB", team: "Williams", time: "", gap: "+0.909s", laps: 11, tyres: [] },
        { position: 12, code: "HUL", team: "Kick Sauber", time: "", gap: "+0.948s", laps: 12, tyres: [] },
        { position: 13, code: "BOR", team: "Kick Sauber", time: "", gap: "+1.221s", laps: 13, tyres: [] },
        { position: 14, code: "OCO", team: "Haas", time: "", gap: "+1.393s", laps: 13, tyres: [] },
        { position: 15, code: "BEA", team: "Haas", time: "", gap: "+1.540s", laps: 10, tyres: [] },
        { position: 16, code: "ANT", team: "Mercedes", time: "", gap: "+1.619s", laps: 13, tyres: [] },
        { position: 17, code: "ALO", team: "Aston Martin", time: "", gap: "+1.864s", laps: 5, tyres: [] },
        { position: 18, code: "TSU", team: "Red Bull Racing", time: "", gap: "+2.511s", laps: 12, tyres: [] },
        { position: 19, code: "STR", team: "Aston Martin", time: "", gap: "+2.731s", laps: 12, tyres: [] },
        { position: 20, code: "DOO", team: "Alpine", time: "", gap: "+3.545s", laps: 4, tyres: [] }
      ],
      notes: [
        "Oscar Piastri led FP2 for McLaren.",
        "The session was heavily disrupted, leaving several drivers with limited running."
      ]
    },

    fp3: {
      status: "Verified",
      headline: "FP3 classification",
      classification: [
        { position: 1, code: "NOR", team: "McLaren", time: "1:27.965", gap: "—", laps: 17, tyres: [] },
        { position: 2, code: "PIA", team: "McLaren", time: "", gap: "+0.026s", laps: 17, tyres: [] },
        { position: 3, code: "RUS", team: "Mercedes", time: "", gap: "+0.112s", laps: 15, tyres: [] },
        { position: 4, code: "LEC", team: "Ferrari", time: "", gap: "+0.449s", laps: 13, tyres: [] },
        { position: 5, code: "VER", team: "Red Bull Racing", time: "", gap: "+0.532s", laps: 21, tyres: [] },
        { position: 6, code: "HAM", team: "Ferrari", time: "", gap: "+0.559s", laps: 13, tyres: [] },
        { position: 7, code: "ALB", team: "Williams", time: "", gap: "+0.589s", laps: 19, tyres: [] },
        { position: 8, code: "GAS", team: "Alpine", time: "", gap: "+0.638s", laps: 15, tyres: [] },
        { position: 9, code: "TSU", team: "Red Bull Racing", time: "", gap: "+0.820s", laps: 15, tyres: [] },
        { position: 10, code: "HAD", team: "Racing Bulls", time: "", gap: "+0.821s", laps: 16, tyres: [] },
        { position: 11, code: "SAI", team: "Williams", time: "", gap: "+0.881s", laps: 22, tyres: [] },
        { position: 12, code: "LAW", team: "Racing Bulls", time: "", gap: "+1.139s", laps: 19, tyres: [] },
        { position: 13, code: "ANT", team: "Mercedes", time: "", gap: "+1.161s", laps: 20, tyres: [] },
        { position: 14, code: "DOO", team: "Alpine", time: "", gap: "+1.802s", laps: 15, tyres: [] },
        { position: 15, code: "ALO", team: "Aston Martin", time: "", gap: "+1.807s", laps: 17, tyres: [] },
        { position: 16, code: "BEA", team: "Haas", time: "", gap: "+2.119s", laps: 17, tyres: [] },
        { position: 17, code: "BOR", team: "Kick Sauber", time: "", gap: "+2.169s", laps: 13, tyres: [] },
        { position: 18, code: "OCO", team: "Haas", time: "", gap: "+2.218s", laps: 17, tyres: [] },
        { position: 19, code: "STR", team: "Aston Martin", time: "", gap: "+2.302s", laps: 16, tyres: [] },
        { position: 20, code: "HUL", team: "Kick Sauber", time: "", gap: "+2.656s", laps: 17, tyres: [] }
      ],
      notes: [
        "Lando Norris topped FP3 ahead of Oscar Piastri.",
        "McLaren finished first and second in final practice."
      ]
    },

    qualifying: {
      status: "Verified",
      pole: "VER",

      q1: {
        classification: [
          { position: 1, code: "VER", time: "1:27.943" },
          { position: 2, code: "NOR", time: "1:27.845" },
          { position: 3, code: "PIA", time: "1:27.687" },
          { position: 4, code: "LEC", time: "1:27.920" },
          { position: 5, code: "RUS", time: "1:27.843" },
          { position: 6, code: "ANT", time: "1:27.968" },
          { position: 7, code: "HAD", time: "1:28.278" },
          { position: 8, code: "HAM", time: "1:27.942" },
          { position: 9, code: "ALB", time: "1:28.218" },
          { position: 10, code: "BEA", time: "1:28.228" },
          { position: 11, code: "GAS", time: "1:28.186" },
          { position: 12, code: "SAI", time: "1:28.209" },
          { position: 13, code: "ALO", time: "1:28.337" },
          { position: 14, code: "LAW", time: "1:28.554" },
          { position: 15, code: "TSU", time: "1:27.967" },
          { position: 16, code: "HUL", time: "1:28.570" },
          { position: 17, code: "BOR", time: "1:28.622" },
          { position: 18, code: "OCO", time: "1:28.696" },
          { position: 19, code: "DOO", time: "1:28.877" },
          { position: 20, code: "STR", time: "1:29.271" }
        ]
      },

      q2: {
        classification: [
          { position: 1, code: "VER", time: "1:27.502" },
          { position: 2, code: "NOR", time: "1:27.146" },
          { position: 3, code: "PIA", time: "1:27.507" },
          { position: 4, code: "LEC", time: "1:27.555" },
          { position: 5, code: "RUS", time: "1:27.400" },
          { position: 6, code: "ANT", time: "1:27.639" },
          { position: 7, code: "HAD", time: "1:27.775" },
          { position: 8, code: "HAM", time: "1:27.610" },
          { position: 9, code: "ALB", time: "1:27.783" },
          { position: 10, code: "BEA", time: "1:27.711" },
          { position: 11, code: "GAS", time: "1:27.822" },
          { position: 12, code: "SAI", time: "1:27.836" },
          { position: 13, code: "ALO", time: "1:27.897" },
          { position: 14, code: "LAW", time: "1:27.906" },
          { position: 15, code: "TSU", time: "1:28.000" }
        ]
      },

      q3: {
        classification: [
          { position: 1, code: "VER", time: "1:26.983" },
          { position: 2, code: "NOR", time: "1:26.995" },
          { position: 3, code: "PIA", time: "1:27.027" },
          { position: 4, code: "LEC", time: "1:27.299" },
          { position: 5, code: "RUS", time: "1:27.318" },
          { position: 6, code: "ANT", time: "1:27.555" },
          { position: 7, code: "HAD", time: "1:27.569" },
          { position: 8, code: "HAM", time: "1:27.610" },
          { position: 9, code: "ALB", time: "1:27.615" },
          { position: 10, code: "BEA", time: "1:27.867" }
        ]
      },

      notes: [
        "Max Verstappen took pole position for Red Bull Racing.",
        "Carlos Sainz received a three-place grid penalty for impeding."
      ]
    },

    startingGrid: {
      status: "Verified",
      poleSide: "left",
      positions: [
        { grid: 1, code: "VER", team: "Red Bull Racing", qualified: 1, note: "Pole position" },
        { grid: 2, code: "NOR", team: "McLaren", qualified: 2 },
        { grid: 3, code: "PIA", team: "McLaren", qualified: 3 },
        { grid: 4, code: "LEC", team: "Ferrari", qualified: 4 },
        { grid: 5, code: "RUS", team: "Mercedes", qualified: 5 },
        { grid: 6, code: "ANT", team: "Mercedes", qualified: 6 },
        { grid: 7, code: "HAD", team: "Racing Bulls", qualified: 7 },
        { grid: 8, code: "HAM", team: "Ferrari", qualified: 8 },
        { grid: 9, code: "ALB", team: "Williams", qualified: 9 },
        { grid: 10, code: "BEA", team: "Haas", qualified: 10 },
        { grid: 11, code: "GAS", team: "Alpine", qualified: 11 },
        { grid: 12, code: "ALO", team: "Aston Martin", qualified: 13 },
        { grid: 13, code: "LAW", team: "Racing Bulls", qualified: 14 },
        { grid: 14, code: "TSU", team: "Red Bull Racing", qualified: 15 },
        { grid: 15, code: "SAI", team: "Williams", qualified: 12, reason: "Three-place grid penalty for impeding" },
        { grid: 16, code: "HUL", team: "Kick Sauber", qualified: 16 },
        { grid: 17, code: "BOR", team: "Kick Sauber", qualified: 17 },
        { grid: 18, code: "OCO", team: "Haas", qualified: 18 },
        { grid: 19, code: "DOO", team: "Alpine", qualified: 19 },
        { grid: 20, code: "STR", team: "Aston Martin", qualified: 20 }
      ],
      notes: [
        "Max Verstappen started from pole.",
        "Carlos Sainz dropped from 12th to 15th after receiving a three-place penalty for impeding."
      ]
    },

    race: {
      status: "Verified",

      fastestLap: {
        code: "ANT",
        time: "1:30.965",
        lap: 50
      },

      fastestPitStop: {
        team: "Ferrari",
        driver: "HAM",
        time: "22.937s pit-lane time"
      },

      driverOfTheDay: "TSU",

      podium: [
        { position: 1, code: "VER", team: "Red Bull Racing", time: "1:22:06.983" },
        { position: 2, code: "NOR", team: "McLaren", gap: "+1.423s" },
        { position: 3, code: "PIA", team: "McLaren", gap: "+2.129s" }
      ],

      fullClassification: [
        { position: 1, code: "VER", team: "Red Bull Racing", time: "1:22:06.983", status: "Finished", points: 25 },
        { position: 2, code: "NOR", team: "McLaren", gap: "+1.423s", status: "Finished", points: 18 },
        { position: 3, code: "PIA", team: "McLaren", gap: "+2.129s", status: "Finished", points: 15 },
        { position: 4, code: "LEC", team: "Ferrari", gap: "+16.097s", status: "Finished", points: 12 },
        { position: 5, code: "RUS", team: "Mercedes", gap: "+17.362s", status: "Finished", points: 10 },
        { position: 6, code: "ANT", team: "Mercedes", gap: "+18.671s", status: "Finished", points: 8 },
        { position: 7, code: "HAM", team: "Ferrari", gap: "+29.182s", status: "Finished", points: 6 },
        { position: 8, code: "HAD", team: "Racing Bulls", gap: "+37.134s", status: "Finished", points: 4 },
        { position: 9, code: "ALB", team: "Williams", gap: "+40.367s", status: "Finished", points: 2 },
        { position: 10, code: "BEA", team: "Haas", gap: "+54.529s", status: "Finished", points: 1 },
        { position: 11, code: "ALO", team: "Aston Martin", gap: "+57.333s", status: "Finished", points: 0 },
        { position: 12, code: "TSU", team: "Red Bull Racing", gap: "+58.401s", status: "Finished", points: 0 },
        { position: 13, code: "GAS", team: "Alpine", gap: "+62.122s", status: "Finished", points: 0 },
        { position: 14, code: "SAI", team: "Williams", gap: "+74.129s", status: "Finished", points: 0 },
        { position: 15, code: "DOO", team: "Alpine", gap: "+81.314s", status: "Finished", points: 0 },
        { position: 16, code: "HUL", team: "Kick Sauber", gap: "+81.957s", status: "Finished", points: 0 },
        { position: 17, code: "LAW", team: "Racing Bulls", gap: "+82.734s", status: "Finished", points: 0 },
        { position: 18, code: "OCO", team: "Haas", gap: "+83.438s", status: "Finished", points: 0 },
        { position: 19, code: "BOR", team: "Kick Sauber", gap: "+83.897s", status: "Finished", points: 0 },
        { position: 20, code: "STR", team: "Aston Martin", gap: "+1 lap", status: "Finished", points: 0 }
      ],

      strategy: [
        "The front-runners executed controlled one-stop races around Suzuka.",
        "Track position remained crucial, with Verstappen controlling the race from pole."
      ],

      keyMoments: [
        "Max Verstappen converted pole position into victory.",
        "Lando Norris kept pressure on Verstappen and finished second.",
        "Oscar Piastri completed the podium for McLaren.",
        "Kimi Antonelli set the fastest lap on lap 50."
      ],

      penalties: [],

      notes: [
        "Yuki Tsunoda was voted Driver of the Day on his first Red Bull weekend at his home Grand Prix.",
        "Kimi Antonelli's 1:30.965 became the official race lap record at Suzuka."
      ]
    }
  },
  4: {
    fp1: {
      status: "Verified",
      headline: "FP1 classification",
      classification: [
        { position: 1, code: "NOR", team: "McLaren", time: "1:33.204", gap: "—", laps: 23, tyres: [] },
        { position: 2, code: "GAS", team: "Alpine", time: "", gap: "+0.238s", laps: 23, tyres: [] },
        { position: 3, code: "HAM", team: "Ferrari", time: "", gap: "+0.596s", laps: 23, tyres: [] },
        { position: 4, code: "ALB", team: "Williams", time: "", gap: "+0.724s", laps: 24, tyres: [] },
        { position: 5, code: "OCO", team: "Haas", time: "", gap: "+0.980s", laps: 19, tyres: [] },
        { position: 6, code: "HUL", team: "Kick Sauber", time: "", gap: "+1.058s", laps: 24, tyres: [] },
        { position: 7, code: "DOO", team: "Alpine", time: "", gap: "+1.192s", laps: 23, tyres: [] },
        { position: 8, code: "LAW", team: "Racing Bulls", time: "", gap: "+1.193s", laps: 23, tyres: [] },
        { position: 9, code: "TSU", team: "Red Bull Racing", time: "", gap: "+1.280s", laps: 23, tyres: [] },
        { position: 10, code: "PIA", team: "McLaren", time: "", gap: "+1.304s", laps: 25, tyres: [] },
        { position: 11, code: "BOR", team: "Kick Sauber", time: "", gap: "+1.424s", laps: 23, tyres: [] },
        { position: 12, code: "HAD", team: "Racing Bulls", time: "", gap: "+1.463s", laps: 22, tyres: [] },
        { position: 13, code: "BRO", name: "Luke Browning", team: "Williams", time: "", gap: "+1.681s", laps: 20, tyres: [] },
        { position: 14, code: "BEG", name: "Dino Beganovic", team: "Ferrari", time: "", gap: "+1.851s", laps: 20, tyres: [] },
        { position: 15, code: "STR", team: "Aston Martin", time: "", gap: "+1.912s", laps: 23, tyres: [] },
        { position: 16, code: "DRU", name: "Felipe Drugovich", team: "Aston Martin", time: "", gap: "+1.994s", laps: 19, tyres: [] },
        { position: 17, code: "HIR", name: "Ryo Hirakawa", team: "Haas", time: "", gap: "+2.057s", laps: 20, tyres: [] },
        { position: 18, code: "VES", name: "Frederik Vesti", team: "Mercedes", time: "", gap: "+2.121s", laps: 26, tyres: [] },
        { position: 19, code: "IWA", name: "Ayumu Iwasa", team: "Red Bull Racing", time: "", gap: "+2.271s", laps: 20, tyres: [] },
        { position: 20, code: "ANT", team: "Mercedes", time: "", gap: "+4.847s", laps: 3, tyres: [] }
      ],
      notes: [
        "Lando Norris topped FP1 for McLaren.",
        "Several reserve and rookie drivers appeared in FP1, including Luke Browning, Dino Beganovic, Felipe Drugovich, Ryo Hirakawa, Frederik Vesti, and Ayumu Iwasa."
      ]
    },

    fp2: {
      status: "Verified",
      headline: "FP2 classification",
      classification: [
        { position: 1, code: "PIA", team: "McLaren", time: "1:30.505", gap: "—", laps: 29, tyres: [] },
        { position: 2, code: "NOR", team: "McLaren", time: "", gap: "+0.154s", laps: 28, tyres: [] },
        { position: 3, code: "RUS", team: "Mercedes", time: "", gap: "+0.527s", laps: 25, tyres: [] },
        { position: 4, code: "LEC", team: "Ferrari", time: "", gap: "+0.540s", laps: 27, tyres: [] },
        { position: 5, code: "ANT", team: "Mercedes", time: "", gap: "+0.722s", laps: 27, tyres: [] },
        { position: 6, code: "HAD", team: "Racing Bulls", time: "", gap: "+0.733s", laps: 24, tyres: [] },
        { position: 7, code: "VER", team: "Red Bull Racing", time: "", gap: "+0.825s", laps: 27, tyres: [] },
        { position: 8, code: "HAM", team: "Ferrari", time: "", gap: "+1.071s", laps: 23, tyres: [] },
        { position: 9, code: "BEA", team: "Haas", time: "", gap: "+1.079s", laps: 27, tyres: [] },
        { position: 10, code: "SAI", team: "Williams", time: "", gap: "+1.118s", laps: 28, tyres: [] },
        { position: 11, code: "ALB", team: "Williams", time: "", gap: "+1.191s", laps: 29, tyres: [] },
        { position: 12, code: "LAW", team: "Racing Bulls", time: "", gap: "+1.201s", laps: 27, tyres: [] },
        { position: 13, code: "BOR", team: "Kick Sauber", time: "", gap: "+1.267s", laps: 25, tyres: [] },
        { position: 14, code: "DOO", team: "Alpine", time: "", gap: "+1.283s", laps: 27, tyres: [] },
        { position: 15, code: "ALO", team: "Aston Martin", time: "", gap: "+1.320s", laps: 19, tyres: [] },
        { position: 16, code: "OCO", team: "Haas", time: "", gap: "+1.365s", laps: 27, tyres: [] },
        { position: 17, code: "GAS", team: "Alpine", time: "", gap: "+1.442s", laps: 27, tyres: [] },
        { position: 18, code: "TSU", team: "Red Bull Racing", time: "", gap: "+1.519s", laps: 25, tyres: [] },
        { position: 19, code: "STR", team: "Aston Martin", time: "", gap: "+1.877s", laps: 27, tyres: [] },
        { position: 20, code: "HUL", team: "Kick Sauber", time: "", gap: "+1.991s", laps: 24, tyres: [] }
      ],
      notes: [
        "Oscar Piastri led FP2 for McLaren.",
        "McLaren finished first and second in the session with Piastri ahead of Norris."
      ]
    },

    fp3: {
      status: "Verified",
      headline: "FP3 classification",
      classification: [
        { position: 1, code: "PIA", team: "McLaren", time: "1:31.646", gap: "—", laps: 13, tyres: [] },
        { position: 2, code: "NOR", team: "McLaren", time: "", gap: "+0.668s", laps: 18, tyres: [] },
        { position: 3, code: "LEC", team: "Ferrari", time: "", gap: "+0.834s", laps: 19, tyres: [] },
        { position: 4, code: "RUS", team: "Mercedes", time: "", gap: "+1.181s", laps: 13, tyres: [] },
        { position: 5, code: "ANT", team: "Mercedes", time: "", gap: "+1.270s", laps: 12, tyres: [] },
        { position: 6, code: "GAS", team: "Alpine", time: "", gap: "+1.328s", laps: 18, tyres: [] },
        { position: 7, code: "HAD", team: "Racing Bulls", time: "", gap: "+1.377s", laps: 15, tyres: [] },
        { position: 8, code: "VER", team: "Red Bull Racing", time: "", gap: "+1.381s", laps: 13, tyres: [] },
        { position: 9, code: "SAI", team: "Williams", time: "", gap: "+1.446s", laps: 15, tyres: [] },
        { position: 10, code: "HAM", team: "Ferrari", time: "", gap: "+1.465s", laps: 18, tyres: [] },
        { position: 11, code: "OCO", team: "Haas", time: "", gap: "+1.594s", laps: 17, tyres: [] },
        { position: 12, code: "DOO", team: "Alpine", time: "", gap: "+1.701s", laps: 18, tyres: [] },
        { position: 13, code: "LAW", team: "Racing Bulls", time: "", gap: "+1.724s", laps: 14, tyres: [] },
        { position: 14, code: "ALO", team: "Aston Martin", time: "", gap: "+1.902s", laps: 18, tyres: [] },
        { position: 15, code: "ALB", team: "Williams", time: "", gap: "+2.107s", laps: 16, tyres: [] },
        { position: 16, code: "BEA", team: "Haas", time: "", gap: "+2.689s", laps: 18, tyres: [] },
        { position: 17, code: "STR", team: "Aston Martin", time: "", gap: "+2.717s", laps: 16, tyres: [] },
        { position: 18, code: "BOR", team: "Kick Sauber", time: "", gap: "+2.872s", laps: 16, tyres: [] },
        { position: 19, code: "HUL", team: "Kick Sauber", time: "", gap: "+2.990s", laps: 7, tyres: [] },
        { position: 20, code: "TSU", team: "Red Bull Racing", time: "", gap: "+3.319s", laps: 15, tyres: [] }
      ],
      notes: [
        "Oscar Piastri topped FP3 for McLaren.",
        "McLaren again finished first and second before qualifying."
      ]
    },

    qualifying: {
      status: "Verified",
      pole: "PIA",

      q1: {
        classification: [
          { position: 1, code: "PIA", time: "1:31.392" },
          { position: 2, code: "RUS", time: "1:31.494" },
          { position: 3, code: "LEC", time: "1:31.454" },
          { position: 4, code: "ANT", time: "1:31.415" },
          { position: 5, code: "GAS", time: "1:31.462" },
          { position: 6, code: "NOR", time: "1:31.107" },
          { position: 7, code: "VER", time: "1:31.303" },
          { position: 8, code: "SAI", time: "1:31.591" },
          { position: 9, code: "HAM", time: "1:31.219" },
          { position: 10, code: "TSU", time: "1:31.751" },
          { position: 11, code: "DOO", time: "1:31.414" },
          { position: 12, code: "HAD", time: "1:31.591" },
          { position: 13, code: "ALO", time: "1:31.634" },
          { position: 14, code: "OCO", time: "1:31.594" },
          { position: 15, code: "ALB", time: "1:32.040" },
          { position: 16, code: "HUL", time: "1:32.067" },
          { position: 17, code: "LAW", time: "1:32.165" },
          { position: 18, code: "BOR", time: "1:32.186" },
          { position: 19, code: "STR", time: "1:32.283" },
          { position: 20, code: "BEA", time: "1:32.373" }
        ]
      },

      q2: {
        classification: [
          { position: 1, code: "PIA", time: "1:30.454" },
          { position: 2, code: "RUS", time: "1:30.664" },
          { position: 3, code: "LEC", time: "1:30.724" },
          { position: 4, code: "ANT", time: "1:30.716" },
          { position: 5, code: "GAS", time: "1:30.643" },
          { position: 6, code: "NOR", time: "1:30.560" },
          { position: 7, code: "VER", time: "1:31.019" },
          { position: 8, code: "SAI", time: "1:30.844" },
          { position: 9, code: "HAM", time: "1:31.009" },
          { position: 10, code: "TSU", time: "1:31.228" },
          { position: 11, code: "DOO", time: "1:31.245" },
          { position: 12, code: "HAD", time: "1:31.271" },
          { position: 13, code: "ALO", time: "1:31.886" },
          { position: 14, code: "OCO", time: "DNF" },
          { position: 15, code: "ALB", time: "" }
        ]
      },

      q3: {
        classification: [
          { position: 1, code: "PIA", time: "1:29.841" },
          { position: 2, code: "RUS", time: "1:30.009" },
          { position: 3, code: "LEC", time: "1:30.175" },
          { position: 4, code: "ANT", time: "1:30.213" },
          { position: 5, code: "GAS", time: "1:30.216" },
          { position: 6, code: "NOR", time: "1:30.267" },
          { position: 7, code: "VER", time: "1:30.423" },
          { position: 8, code: "SAI", time: "1:30.680" },
          { position: 9, code: "HAM", time: "1:30.772" },
          { position: 10, code: "TSU", time: "1:31.303" }
        ]
      },

      notes: [
        "Oscar Piastri took pole position for McLaren.",
        "George Russell and Kimi Antonelli both received one-place grid penalties after qualifying."
      ]
    },

    startingGrid: {
      status: "Verified",
      poleSide: "left",
      positions: [
        { grid: 1, code: "PIA", team: "McLaren", qualified: 1, note: "Pole position" },
        { grid: 2, code: "LEC", team: "Ferrari", qualified: 3 },
        { grid: 3, code: "RUS", team: "Mercedes", qualified: 2, reason: "One-place grid penalty for failing to follow Race Director instructions" },
        { grid: 4, code: "GAS", team: "Alpine", qualified: 5 },
        { grid: 5, code: "ANT", team: "Mercedes", qualified: 4, reason: "One-place grid penalty for failing to follow Race Director instructions" },
        { grid: 6, code: "NOR", team: "McLaren", qualified: 6 },
        { grid: 7, code: "VER", team: "Red Bull Racing", qualified: 7 },
        { grid: 8, code: "SAI", team: "Williams", qualified: 8 },
        { grid: 9, code: "HAM", team: "Ferrari", qualified: 9 },
        { grid: 10, code: "TSU", team: "Red Bull Racing", qualified: 10 },
        { grid: 11, code: "DOO", team: "Alpine", qualified: 11 },
        { grid: 12, code: "HAD", team: "Racing Bulls", qualified: 12 },
        { grid: 13, code: "ALO", team: "Aston Martin", qualified: 13 },
        { grid: 14, code: "OCO", team: "Haas", qualified: 14 },
        { grid: 15, code: "ALB", team: "Williams", qualified: 15 },
        { grid: 16, code: "HUL", team: "Kick Sauber", qualified: 16 },
        { grid: 17, code: "LAW", team: "Racing Bulls", qualified: 17 },
        { grid: 18, code: "BOR", team: "Kick Sauber", qualified: 18 },
        { grid: 19, code: "STR", team: "Aston Martin", qualified: 19 },
        { grid: 20, code: "BEA", team: "Haas", qualified: 20 }
      ],
      notes: [
        "Oscar Piastri started from pole.",
        "George Russell and Kimi Antonelli both received one-place penalties for failing to follow Race Director instructions."
      ]
    },

    race: {
      status: "Verified",

      fastestLap: {
        code: "PIA",
        time: "1:35.140",
        lap: 36
      },

      fastestPitStop: {
        team: "McLaren",
        driver: "NOR",
        time: "24.035s pit-lane time"
      },

      driverOfTheDay: "HAM",

      podium: [
        { position: 1, code: "PIA", team: "McLaren", time: "1:35:39.435" },
        { position: 2, code: "RUS", team: "Mercedes", gap: "+15.499s" },
        { position: 3, code: "NOR", team: "McLaren", gap: "+16.273s" }
      ],

      fullClassification: [
        { position: 1, code: "PIA", team: "McLaren", time: "1:35:39.435", status: "Finished", points: 25 },
        { position: 2, code: "RUS", team: "Mercedes", gap: "+15.499s", status: "Finished", points: 18 },
        { position: 3, code: "NOR", team: "McLaren", gap: "+16.273s", status: "Finished", points: 15 },
        { position: 4, code: "LEC", team: "Ferrari", gap: "+19.679s", status: "Finished", points: 12 },
        { position: 5, code: "HAM", team: "Ferrari", gap: "+27.993s", status: "Finished", points: 10 },
        { position: 6, code: "VER", team: "Red Bull Racing", gap: "+34.395s", status: "Finished", points: 8 },
        { position: 7, code: "GAS", team: "Alpine", gap: "+36.002s", status: "Finished", points: 6 },
        { position: 8, code: "OCO", team: "Haas", gap: "+44.244s", status: "Finished", points: 4 },
        { position: 9, code: "TSU", team: "Red Bull Racing", gap: "+45.061s", status: "Finished", points: 2 },
        { position: 10, code: "BEA", team: "Haas", gap: "+47.594s", status: "Finished", points: 1 },
        { position: 11, code: "ANT", team: "Mercedes", gap: "+48.016s", status: "Finished", points: 0 },
        { position: 12, code: "ALB", team: "Williams", gap: "+48.839s", status: "Finished", points: 0 },
        { position: 13, code: "HAD", team: "Racing Bulls", gap: "+56.314s", status: "Finished", points: 0 },
        { position: 14, code: "DOO", team: "Alpine", gap: "+57.806s", status: "Finished", points: 0, note: "Five-second time penalty for track limit infringements" },
        { position: 15, code: "ALO", team: "Aston Martin", gap: "+60.340s", status: "Finished", points: 0 },
        { position: 16, code: "LAW", team: "Racing Bulls", gap: "+64.435s", status: "Finished", points: 0, note: "Post-race time penalties applied" },
        { position: 17, code: "STR", team: "Aston Martin", gap: "+65.489s", status: "Finished", points: 0 },
        { position: 18, code: "BOR", team: "Kick Sauber", gap: "+66.872s", status: "Finished", points: 0 },
        { position: "NC", code: "SAI", team: "Williams", status: "DNF", points: 0, note: "Completed 45 laps" },
        { position: "DQ", code: "HUL", team: "Kick Sauber", status: "DSQ", points: 0, note: "Disqualified for a technical infringement" }
      ],

      strategy: [
        "Oscar Piastri controlled the race from pole position.",
        "McLaren and Mercedes fought at the front, while tyre degradation and pit timing shaped the midfield."
      ],

      keyMoments: [
        "Oscar Piastri converted pole into victory.",
        "George Russell held second despite pressure and car issues.",
        "Lando Norris recovered to finish third after starting sixth.",
        "Lewis Hamilton was voted Driver of the Day after an aggressive recovery drive to fifth."
      ],

      penalties: [
        "Liam Lawson received a five-second penalty and a 10-second penalty for causing collisions.",
        "Jack Doohan received a five-second penalty for track limit infringements.",
        "Nico Hulkenberg was disqualified for a technical infringement."
      ],

      notes: [
        "Oscar Piastri also set the fastest lap of the race on lap 36.",
        "Nico Hulkenberg was classified as disqualified after the race."
      ]
    }
  },
  5: {
    fp1: {
      status: "Verified",
      headline: "FP1 classification",
      classification: [
        { position: 1, code: "GAS", team: "Alpine", time: "1:29.239", gap: "—", laps: 25, tyres: [] },
        { position: 2, code: "NOR", team: "McLaren", time: "", gap: "+0.007s", laps: 25, tyres: [] },
        { position: 3, code: "LEC", team: "Ferrari", time: "", gap: "+0.070s", laps: 28, tyres: [] },
        { position: 4, code: "PIA", team: "McLaren", time: "", gap: "+0.102s", laps: 25, tyres: [] },
        { position: 5, code: "ALB", team: "Williams", time: "", gap: "+0.367s", laps: 23, tyres: [] },
        { position: 6, code: "RUS", team: "Mercedes", time: "", gap: "+0.379s", laps: 21, tyres: [] },
        { position: 7, code: "SAI", team: "Williams", time: "", gap: "+0.540s", laps: 26, tyres: [] },
        { position: 8, code: "HAM", team: "Ferrari", time: "", gap: "+0.576s", laps: 27, tyres: [] },
        { position: 9, code: "VER", team: "Red Bull Racing", time: "", gap: "+0.579s", laps: 26, tyres: [] },
        { position: 10, code: "TSU", team: "Red Bull Racing", time: "", gap: "+0.582s", laps: 26, tyres: [] },
        { position: 11, code: "LAW", team: "Racing Bulls", time: "", gap: "+0.668s", laps: 19, tyres: [] },
        { position: 12, code: "HUL", team: "Kick Sauber", time: "", gap: "+0.677s", laps: 25, tyres: [] },
        { position: 13, code: "ANT", team: "Mercedes", time: "", gap: "+0.695s", laps: 24, tyres: [] },
        { position: 14, code: "ALO", team: "Aston Martin", time: "", gap: "+0.737s", laps: 24, tyres: [] },
        { position: 15, code: "HAD", team: "Racing Bulls", time: "", gap: "+0.772s", laps: 15, tyres: [] },
        { position: 16, code: "DOO", team: "Alpine", time: "", gap: "+0.944s", laps: 25, tyres: [] },
        { position: 17, code: "STR", team: "Aston Martin", time: "", gap: "+1.344s", laps: 23, tyres: [] },
        { position: 18, code: "BEA", team: "Haas", time: "", gap: "+1.356s", laps: 21, tyres: [] },
        { position: 19, code: "OCO", team: "Haas", time: "", gap: "+1.790s", laps: 21, tyres: [] },
        { position: 20, code: "BOR", team: "Kick Sauber", time: "", gap: "+1.799s", laps: 23, tyres: [] }
      ],
      notes: [
        "Pierre Gasly topped FP1 for Alpine.",
        "Lando Norris was second, only 0.007s behind."
      ]
    },

    fp2: {
      status: "Verified",
      headline: "FP2 classification",
      classification: [
        { position: 1, code: "NOR", team: "McLaren", time: "1:28.267", gap: "—", laps: 21, tyres: [] },
        { position: 2, code: "PIA", team: "McLaren", time: "", gap: "+0.163s", laps: 22, tyres: [] },
        { position: 3, code: "VER", team: "Red Bull Racing", time: "", gap: "+0.280s", laps: 23, tyres: [] },
        { position: 4, code: "LEC", team: "Ferrari", time: "", gap: "+0.482s", laps: 22, tyres: [] },
        { position: 5, code: "SAI", team: "Williams", time: "", gap: "+0.675s", laps: 24, tyres: [] },
        { position: 6, code: "TSU", team: "Red Bull Racing", time: "", gap: "+0.696s", laps: 19, tyres: [] },
        { position: 7, code: "RUS", team: "Mercedes", time: "", gap: "+0.706s", laps: 21, tyres: [] },
        { position: 8, code: "GAS", team: "Alpine", time: "", gap: "+0.839s", laps: 22, tyres: [] },
        { position: 9, code: "HUL", team: "Kick Sauber", time: "", gap: "+0.926s", laps: 21, tyres: [] },
        { position: 10, code: "ALB", team: "Williams", time: "", gap: "+0.953s", laps: 23, tyres: [] },
        { position: 11, code: "ANT", team: "Mercedes", time: "", gap: "+0.975s", laps: 16, tyres: [] },
        { position: 12, code: "HAD", team: "Racing Bulls", time: "", gap: "+1.039s", laps: 17, tyres: [] },
        { position: 13, code: "HAM", team: "Ferrari", time: "", gap: "+1.104s", laps: 23, tyres: [] },
        { position: 14, code: "LAW", team: "Racing Bulls", time: "", gap: "+1.221s", laps: 22, tyres: [] },
        { position: 15, code: "ALO", team: "Aston Martin", time: "", gap: "+1.395s", laps: 18, tyres: [] },
        { position: 16, code: "BEA", team: "Haas", time: "", gap: "+1.487s", laps: 19, tyres: [] },
        { position: 17, code: "DOO", team: "Alpine", time: "", gap: "+1.645s", laps: 21, tyres: [] },
        { position: 18, code: "STR", team: "Aston Martin", time: "", gap: "+1.740s", laps: 18, tyres: [] },
        { position: 19, code: "OCO", team: "Haas", time: "", gap: "+1.752s", laps: 22, tyres: [] },
        { position: 20, code: "BOR", team: "Kick Sauber", time: "", gap: "No time", laps: 0, tyres: [] }
      ],
      notes: [
        "Lando Norris topped FP2 for McLaren.",
        "Oscar Piastri completed a McLaren one-two.",
        "Gabriel Bortoleto did not set a time in FP2."
      ]
    },

    fp3: {
      status: "Verified",
      headline: "FP3 classification",
      classification: [
        { position: 1, code: "NOR", team: "McLaren", time: "1:27.489", gap: "—", laps: 18, tyres: [] },
        { position: 2, code: "PIA", team: "McLaren", time: "", gap: "+0.024s", laps: 19, tyres: [] },
        { position: 3, code: "RUS", team: "Mercedes", time: "", gap: "+0.627s", laps: 17, tyres: [] },
        { position: 4, code: "VER", team: "Red Bull Racing", time: "", gap: "+0.845s", laps: 14, tyres: [] },
        { position: 5, code: "LEC", team: "Ferrari", time: "", gap: "+0.883s", laps: 21, tyres: [] },
        { position: 6, code: "ALB", team: "Williams", time: "", gap: "+0.900s", laps: 16, tyres: [] },
        { position: 7, code: "SAI", team: "Williams", time: "", gap: "+1.081s", laps: 15, tyres: [] },
        { position: 8, code: "GAS", team: "Alpine", time: "", gap: "+1.136s", laps: 16, tyres: [] },
        { position: 9, code: "TSU", team: "Red Bull Racing", time: "", gap: "+1.181s", laps: 14, tyres: [] },
        { position: 10, code: "ANT", team: "Mercedes", time: "", gap: "+1.190s", laps: 18, tyres: [] },
        { position: 11, code: "HAD", team: "Racing Bulls", time: "", gap: "+1.280s", laps: 17, tyres: [] },
        { position: 12, code: "HAM", team: "Ferrari", time: "", gap: "+1.291s", laps: 20, tyres: [] },
        { position: 13, code: "LAW", team: "Racing Bulls", time: "", gap: "+1.372s", laps: 18, tyres: [] },
        { position: 14, code: "ALO", team: "Aston Martin", time: "", gap: "+1.399s", laps: 19, tyres: [] },
        { position: 15, code: "DOO", team: "Alpine", time: "", gap: "+1.409s", laps: 21, tyres: [] },
        { position: 16, code: "BEA", team: "Haas", time: "", gap: "+1.500s", laps: 15, tyres: [] },
        { position: 17, code: "HUL", team: "Kick Sauber", time: "", gap: "+1.731s", laps: 16, tyres: [] },
        { position: 18, code: "OCO", team: "Haas", time: "", gap: "+1.847s", laps: 20, tyres: [] },
        { position: 19, code: "BOR", team: "Kick Sauber", time: "", gap: "+1.921s", laps: 24, tyres: [] },
        { position: 20, code: "STR", team: "Aston Martin", time: "", gap: "+1.989s", laps: 19, tyres: [] }
      ],
      notes: [
        "Lando Norris topped FP3 ahead of Oscar Piastri.",
        "McLaren finished first and second before qualifying."
      ]
    },

    qualifying: {
      status: "Verified",
      pole: "VER",

      q1: {
        classification: [
          { position: 1, code: "VER", time: "1:27.778" },
          { position: 2, code: "PIA", time: "1:27.901" },
          { position: 3, code: "RUS", time: "1:28.282" },
          { position: 4, code: "LEC", time: "1:28.552" },
          { position: 5, code: "ANT", time: "1:28.128" },
          { position: 6, code: "SAI", time: "1:28.354" },
          { position: 7, code: "HAM", time: "1:28.372" },
          { position: 8, code: "TSU", time: "1:28.226" },
          { position: 9, code: "GAS", time: "1:28.421" },
          { position: 10, code: "NOR", time: "1:27.805" },
          { position: 11, code: "ALB", time: "1:28.279" },
          { position: 12, code: "LAW", time: "1:28.561" },
          { position: 13, code: "ALO", time: "1:28.548" },
          { position: 14, code: "HAD", time: "1:28.571" },
          { position: 15, code: "BEA", time: "1:28.536" },
          { position: 16, code: "STR", time: "1:28.645" },
          { position: 17, code: "DOO", time: "1:28.739" },
          { position: 18, code: "HUL", time: "1:28.782" },
          { position: 19, code: "OCO", time: "1:29.092" },
          { position: 20, code: "BOR", time: "1:29.462" }
        ]
      },

      q2: {
        classification: [
          { position: 1, code: "VER", time: "1:27.529" },
          { position: 2, code: "PIA", time: "1:27.545" },
          { position: 3, code: "RUS", time: "1:27.599" },
          { position: 4, code: "LEC", time: "1:27.866" },
          { position: 5, code: "ANT", time: "1:27.798" },
          { position: 6, code: "SAI", time: "1:28.024" },
          { position: 7, code: "HAM", time: "1:28.102" },
          { position: 8, code: "TSU", time: "1:27.990" },
          { position: 9, code: "GAS", time: "1:28.025" },
          { position: 10, code: "NOR", time: "1:27.481" },
          { position: 11, code: "ALB", time: "1:28.109" },
          { position: 12, code: "LAW", time: "1:28.191" },
          { position: 13, code: "ALO", time: "1:28.303" },
          { position: 14, code: "HAD", time: "1:28.418" },
          { position: 15, code: "BEA", time: "1:28.648" }
        ]
      },

      q3: {
        classification: [
          { position: 1, code: "VER", time: "1:27.294" },
          { position: 2, code: "PIA", time: "1:27.304" },
          { position: 3, code: "RUS", time: "1:27.407" },
          { position: 4, code: "LEC", time: "1:27.670" },
          { position: 5, code: "ANT", time: "1:27.866" },
          { position: 6, code: "SAI", time: "1:28.164" },
          { position: 7, code: "HAM", time: "1:28.201" },
          { position: 8, code: "TSU", time: "1:28.204" },
          { position: 9, code: "GAS", time: "1:28.367" },
          { position: 10, code: "NOR", time: "DNF" }
        ]
      },

      notes: [
        "Max Verstappen took pole position for Red Bull Racing.",
        "Lando Norris reached Q3 but crashed and did not set a Q3 lap time."
      ]
    },

    startingGrid: {
      status: "Verified",
      poleSide: "left",
      positions: [
        { grid: 1, code: "VER", team: "Red Bull Racing", qualified: 1, note: "Pole position" },
        { grid: 2, code: "PIA", team: "McLaren", qualified: 2 },
        { grid: 3, code: "RUS", team: "Mercedes", qualified: 3 },
        { grid: 4, code: "LEC", team: "Ferrari", qualified: 4 },
        { grid: 5, code: "ANT", team: "Mercedes", qualified: 5 },
        { grid: 6, code: "SAI", team: "Williams", qualified: 6 },
        { grid: 7, code: "HAM", team: "Ferrari", qualified: 7 },
        { grid: 8, code: "TSU", team: "Red Bull Racing", qualified: 8 },
        { grid: 9, code: "GAS", team: "Alpine", qualified: 9 },
        { grid: 10, code: "NOR", team: "McLaren", qualified: 10, note: "No Q3 time after crash" },
        { grid: 11, code: "ALB", team: "Williams", qualified: 11 },
        { grid: 12, code: "LAW", team: "Racing Bulls", qualified: 12 },
        { grid: 13, code: "ALO", team: "Aston Martin", qualified: 13 },
        { grid: 14, code: "HAD", team: "Racing Bulls", qualified: 14 },
        { grid: 15, code: "BEA", team: "Haas", qualified: 15 },
        { grid: 16, code: "STR", team: "Aston Martin", qualified: 16 },
        { grid: 17, code: "DOO", team: "Alpine", qualified: 17 },
        { grid: 18, code: "HUL", team: "Kick Sauber", qualified: 18 },
        { grid: 19, code: "OCO", team: "Haas", qualified: 19 },
        { grid: 20, code: "BOR", team: "Kick Sauber", qualified: 20 }
      ],
      notes: [
        "Max Verstappen started from pole.",
        "Lando Norris started tenth after crashing in Q3 without setting a lap time."
      ]
    },

    race: {
      status: "Verified",

      fastestLap: {
        code: "NOR",
        time: "1:31.778",
        lap: 41
      },

      fastestPitStop: {
        team: "Ferrari",
        driver: "LEC",
        time: "20.131s pit-lane time"
      },

      driverOfTheDay: "VER",

      podium: [
        { position: 1, code: "PIA", team: "McLaren", time: "1:21:06.758" },
        { position: 2, code: "VER", team: "Red Bull Racing", gap: "+2.843s" },
        { position: 3, code: "LEC", team: "Ferrari", gap: "+8.104s" }
      ],

      fullClassification: [
        { position: 1, code: "PIA", team: "McLaren", time: "1:21:06.758", status: "Finished", points: 25 },
        { position: 2, code: "VER", team: "Red Bull Racing", gap: "+2.843s", status: "Finished", points: 18 },
        { position: 3, code: "LEC", team: "Ferrari", gap: "+8.104s", status: "Finished", points: 15 },
        { position: 4, code: "NOR", team: "McLaren", gap: "+9.196s", status: "Finished", points: 12 },
        { position: 5, code: "RUS", team: "Mercedes", gap: "+27.236s", status: "Finished", points: 10 },
        { position: 6, code: "ANT", team: "Mercedes", gap: "+34.688s", status: "Finished", points: 8 },
        { position: 7, code: "HAM", team: "Ferrari", gap: "+39.073s", status: "Finished", points: 6 },
        { position: 8, code: "SAI", team: "Williams", gap: "+64.630s", status: "Finished", points: 4 },
        { position: 9, code: "ALB", team: "Williams", gap: "+66.515s", status: "Finished", points: 2 },
        { position: 10, code: "HAD", team: "Racing Bulls", gap: "+67.091s", status: "Finished", points: 1 },
        { position: 11, code: "ALO", team: "Aston Martin", gap: "+75.917s", status: "Finished", points: 0 },
        { position: 12, code: "LAW", team: "Racing Bulls", gap: "+78.451s", status: "Finished", points: 0, note: "Ten-second time penalty applied" },
        { position: 13, code: "BEA", team: "Haas", gap: "+79.194s", status: "Finished", points: 0 },
        { position: 14, code: "OCO", team: "Haas", gap: "+99.723s", status: "Finished", points: 0 },
        { position: 15, code: "HUL", team: "Kick Sauber", gap: "+1 lap", status: "Finished", points: 0 },
        { position: 16, code: "STR", team: "Aston Martin", gap: "+1 lap", status: "Finished", points: 0 },
        { position: 17, code: "DOO", team: "Alpine", gap: "+1 lap", status: "Finished", points: 0 },
        { position: 18, code: "BOR", team: "Kick Sauber", gap: "+1 lap", status: "Finished", points: 0 },
        { position: "NC", code: "TSU", team: "Red Bull Racing", status: "DNF", points: 0, note: "Completed 1 lap" },
        { position: "NC", code: "GAS", team: "Alpine", status: "DNF", points: 0, note: "Retired after opening-lap collision" }
      ],

      strategy: [
        "Oscar Piastri won after pressuring Max Verstappen at the start and managing the race from the front.",
        "Lando Norris recovered from tenth on the grid and set the fastest lap on lap 41."
      ],

      keyMoments: [
        "Oscar Piastri claimed victory and took the championship lead.",
        "Max Verstappen finished second after starting from pole.",
        "Charles Leclerc scored Ferrari's first Grand Prix podium of the season.",
        "Yuki Tsunoda and Pierre Gasly retired after an opening-lap collision."
      ],

      penalties: [
        "Max Verstappen received a five-second penalty for leaving the track and gaining an advantage at Turn 1.",
        "Liam Lawson received a ten-second time penalty for leaving the track and gaining an advantage."
      ],

      notes: [
        "Max Verstappen was voted Driver of the Day.",
        "Oscar Piastri became the first Australian to lead the Drivers' Championship since Mark Webber in 2010."
      ]
    }
  },
  6: {
    fp1: {
      status: "Verified",
      headline: "FP1 classification",
      classification: [
        { position: 1, code: "PIA", team: "McLaren", time: "1:27.128", gap: "—", laps: 22, tyres: [] },
        { position: 2, code: "LEC", team: "Ferrari", time: "", gap: "+0.356s", laps: 22, tyres: [] },
        { position: 3, code: "VER", team: "Red Bull Racing", time: "", gap: "+0.430s", laps: 20, tyres: [] },
        { position: 4, code: "SAI", team: "Williams", time: "", gap: "+0.550s", laps: 23, tyres: [] },
        { position: 5, code: "ALB", team: "Williams", time: "", gap: "+0.827s", laps: 25, tyres: [] },
        { position: 6, code: "HAD", team: "Racing Bulls", time: "", gap: "+0.840s", laps: 23, tyres: [] },
        { position: 7, code: "RUS", team: "Mercedes", time: "", gap: "+0.930s", laps: 26, tyres: [] },
        { position: 8, code: "TSU", team: "Red Bull Racing", time: "", gap: "+1.027s", laps: 21, tyres: [] },
        { position: 9, code: "ANT", team: "Mercedes", time: "", gap: "+1.099s", laps: 28, tyres: [] },
        { position: 10, code: "ALO", team: "Aston Martin", time: "", gap: "+1.115s", laps: 24, tyres: [] },
        { position: 11, code: "LAW", team: "Racing Bulls", time: "", gap: "+1.246s", laps: 21, tyres: [] },
        { position: 12, code: "NOR", team: "McLaren", time: "", gap: "+1.263s", laps: 21, tyres: [] },
        { position: 13, code: "HAM", team: "Ferrari", time: "", gap: "+1.428s", laps: 20, tyres: [] },
        { position: 14, code: "HUL", team: "Kick Sauber", time: "", gap: "+1.445s", laps: 13, tyres: [] },
        { position: 15, code: "BOR", team: "Kick Sauber", time: "", gap: "+1.643s", laps: 19, tyres: [] },
        { position: 16, code: "BEA", team: "Haas", time: "", gap: "+1.868s", laps: 22, tyres: [] },
        { position: 17, code: "GAS", team: "Alpine", time: "", gap: "+1.956s", laps: 22, tyres: [] },
        { position: 18, code: "OCO", team: "Haas", time: "", gap: "+2.051s", laps: 19, tyres: [] },
        { position: 19, code: "DOO", team: "Alpine", time: "", gap: "+2.229s", laps: 22, tyres: [] },
        { position: 20, code: "STR", team: "Aston Martin", time: "", gap: "+2.234s", laps: 21, tyres: [] }
      ],
      notes: [
        "Oscar Piastri topped the only practice session of the Miami Sprint weekend.",
        "The Sprint format meant FP1 was the only practice session before competitive running."
      ]
    },

    sprintQualifying: {
      status: "Verified",
      pole: "ANT",

      sq1: {
        classification: [
          { position: 1, code: "ANT", time: "1:27.858" },
          { position: 2, code: "PIA", time: "1:27.951" },
          { position: 3, code: "NOR", time: "1:27.890" },
          { position: 4, code: "VER", time: "1:27.953" },
          { position: 5, code: "RUS", time: "1:27.688" },
          { position: 6, code: "LEC", time: "1:28.325" },
          { position: 7, code: "HAM", time: "1:28.231" },
          { position: 8, code: "ALB", time: "1:27.859" },
          { position: 9, code: "HAD", time: "1:28.394" },
          { position: 10, code: "ALO", time: "1:28.455" },
          { position: 11, code: "HUL", time: "1:28.542" },
          { position: 12, code: "OCO", time: "1:28.303" },
          { position: 13, code: "GAS", time: "1:28.345" },
          { position: 14, code: "LAW", time: "1:28.914" },
          { position: 15, code: "SAI", time: "1:27.899" },
          { position: 16, code: "STR", time: "1:29.028" },
          { position: 17, code: "DOO", time: "1:29.171" },
          { position: 18, code: "TSU", time: "1:29.246" },
          { position: 19, code: "BOR", time: "1:29.312" },
          { position: 20, code: "BEA", time: "1:29.825" }
        ]
      },

      sq2: {
        classification: [
          { position: 1, code: "ANT", time: "1:27.384" },
          { position: 2, code: "PIA", time: "1:27.354" },
          { position: 3, code: "NOR", time: "1:27.109" },
          { position: 4, code: "VER", time: "1:27.245" },
          { position: 5, code: "RUS", time: "1:27.666" },
          { position: 6, code: "LEC", time: "1:27.467" },
          { position: 7, code: "HAM", time: "1:27.546" },
          { position: 8, code: "ALB", time: "1:27.697" },
          { position: 9, code: "HAD", time: "1:27.773" },
          { position: 10, code: "ALO", time: "1:27.766" },
          { position: 11, code: "HUL", time: "1:27.850" },
          { position: 12, code: "OCO", time: "1:28.070" },
          { position: 13, code: "GAS", time: "1:28.167" },
          { position: 14, code: "LAW", time: "1:28.375" },
          { position: 15, code: "SAI", time: "DNF" }
        ]
      },

      sq3: {
        classification: [
          { position: 1, code: "ANT", time: "1:26.482" },
          { position: 2, code: "PIA", time: "1:26.527" },
          { position: 3, code: "NOR", time: "1:26.582" },
          { position: 4, code: "VER", time: "1:26.737" },
          { position: 5, code: "RUS", time: "1:26.791" },
          { position: 6, code: "LEC", time: "1:26.808" },
          { position: 7, code: "HAM", time: "1:27.030" },
          { position: 8, code: "ALB", time: "1:27.193" },
          { position: 9, code: "HAD", time: "1:27.543" },
          { position: 10, code: "ALO", time: "1:27.790" }
        ]
      },

      notes: [
        "Kimi Antonelli took Sprint pole for Mercedes.",
        "Oscar Piastri and Lando Norris completed the top three for McLaren."
      ]
    },

    sprintGrid: {
      status: "Verified",
      poleSide: "left",
      positions: [
        { grid: 1, code: "ANT", team: "Mercedes", qualified: 1, note: "Sprint pole" },
        { grid: 2, code: "PIA", team: "McLaren", qualified: 2 },
        { grid: 3, code: "NOR", team: "McLaren", qualified: 3 },
        { grid: 4, code: "VER", team: "Red Bull Racing", qualified: 4 },
        { grid: 5, code: "RUS", team: "Mercedes", qualified: 5 },
        { grid: 6, code: "LEC", team: "Ferrari", qualified: 6 },
        { grid: 7, code: "HAM", team: "Ferrari", qualified: 7 },
        { grid: 8, code: "ALB", team: "Williams", qualified: 8 },
        { grid: 9, code: "HAD", team: "Racing Bulls", qualified: 9 },
        { grid: 10, code: "ALO", team: "Aston Martin", qualified: 10 },
        { grid: 11, code: "HUL", team: "Kick Sauber", qualified: 11 },
        { grid: 12, code: "OCO", team: "Haas", qualified: 12 },
        { grid: 13, code: "GAS", team: "Alpine", qualified: 13 },
        { grid: 14, code: "LAW", team: "Racing Bulls", qualified: 14 },
        { grid: 15, code: "SAI", team: "Williams", qualified: 15 },
        { grid: 16, code: "STR", team: "Aston Martin", qualified: 16 },
        { grid: 17, code: "DOO", team: "Alpine", qualified: 17 },
        { grid: 18, code: "BOR", team: "Kick Sauber", qualified: 19 },
        { grid: 19, code: "BEA", team: "Haas", qualified: 20 },
        {
          grid: 20,
          code: "TSU",
          team: "Red Bull Racing",
          qualified: 18,
          reason: "Required to start from pit lane after Parc Ferme changes"
        }
      ],
      notes: [
        "Kimi Antonelli started the Sprint from pole.",
        "Yuki Tsunoda was required to start from the pit lane after his car was modified under Parc Ferme conditions."
      ]
    },

    sprint: {
      status: "Verified",
      headline: "Sprint classification",
      classification: [
        { position: 1, code: "NOR", team: "McLaren", time: "36:37.647", points: 8 },
        { position: 2, code: "PIA", team: "McLaren", gap: "+0.672s", points: 7 },
        { position: 3, code: "HAM", team: "Ferrari", gap: "+1.073s", points: 6 },
        { position: 4, code: "RUS", team: "Mercedes", gap: "+3.127s", points: 5 },
        { position: 5, code: "STR", team: "Aston Martin", gap: "+3.412s", points: 4 },
        { position: 6, code: "TSU", team: "Red Bull Racing", gap: "+5.153s", points: 3 },
        { position: 7, code: "ANT", team: "Mercedes", gap: "+5.635s", points: 2 },
        { position: 8, code: "GAS", team: "Alpine", gap: "+5.973s", points: 1 },
        { position: 9, code: "HUL", team: "Kick Sauber", gap: "+6.153s", points: 0 },
        { position: 10, code: "HAD", team: "Racing Bulls", gap: "+7.502s", points: 0 },
        { position: 11, code: "ALB", team: "Williams", gap: "+7.522s", points: 0 },
        { position: 12, code: "OCO", team: "Haas", gap: "+8.998s", points: 0 },
        { position: 13, code: "LAW", team: "Racing Bulls", gap: "+9.024s", points: 0 },
        { position: 14, code: "BEA", team: "Haas", gap: "+9.218s", points: 0 },
        { position: 15, code: "BOR", team: "Kick Sauber", gap: "+9.675s", points: 0 },
        { position: 16, code: "DOO", team: "Alpine", gap: "+9.909s", points: 0 },
        { position: 17, code: "VER", team: "Red Bull Racing", gap: "+12.059s", points: 0 },
        { position: "NC", code: "ALO", team: "Aston Martin", status: "DNF", points: 0, note: "Completed 13 laps" },
        { position: "NC", code: "SAI", team: "Williams", status: "DNF", points: 0, note: "Completed 12 laps" },
        { position: "NC", code: "LEC", team: "Ferrari", status: "DNS", points: 0 }
      ],
      notes: [
        "Lando Norris won the Miami Sprint for McLaren.",
        "Max Verstappen received a 10-second time penalty for an unsafe release.",
        "Oliver Bearman received a five-second penalty for an unsafe release.",
        "Alexander Albon received a five-second penalty for failing to stay above the minimum lap time under the Safety Car.",
        "Liam Lawson received a five-second penalty for causing a collision."
      ]
    },

    qualifying: {
      status: "Verified",
      pole: "VER",

      q1: {
        classification: [
          { position: 1, code: "VER", time: "1:26.870" },
          { position: 2, code: "NOR", time: "1:26.955" },
          { position: 3, code: "ANT", time: "1:27.077" },
          { position: 4, code: "PIA", time: "1:27.006" },
          { position: 5, code: "RUS", time: "1:27.014" },
          { position: 6, code: "SAI", time: "1:27.098" },
          { position: 7, code: "ALB", time: "1:27.042" },
          { position: 8, code: "LEC", time: "1:27.417" },
          { position: 9, code: "OCO", time: "1:27.450" },
          { position: 10, code: "TSU", time: "1:27.298" },
          { position: 11, code: "HAD", time: "1:27.301" },
          { position: 12, code: "HAM", time: "1:27.279" },
          { position: 13, code: "BOR", time: "1:27.343" },
          { position: 14, code: "DOO", time: "1:27.422" },
          { position: 15, code: "LAW", time: "1:27.444" },
          { position: 16, code: "HUL", time: "1:27.473" },
          { position: 17, code: "ALO", time: "1:27.604" },
          { position: 18, code: "GAS", time: "1:27.710" },
          { position: 19, code: "STR", time: "1:27.830" },
          { position: 20, code: "BEA", time: "1:27.999" }
        ]
      },

      q2: {
        classification: [
          { position: 1, code: "VER", time: "1:26.643" },
          { position: 2, code: "NOR", time: "1:26.499" },
          { position: 3, code: "ANT", time: "1:26.606" },
          { position: 4, code: "PIA", time: "1:26.269" },
          { position: 5, code: "RUS", time: "1:26.575" },
          { position: 6, code: "SAI", time: "1:26.847" },
          { position: 7, code: "ALB", time: "1:26.855" },
          { position: 8, code: "LEC", time: "1:26.948" },
          { position: 9, code: "OCO", time: "1:26.967" },
          { position: 10, code: "TSU", time: "1:26.959" },
          { position: 11, code: "HAD", time: "1:26.987" },
          { position: 12, code: "HAM", time: "1:27.006" },
          { position: 13, code: "BOR", time: "1:27.151" },
          { position: 14, code: "DOO", time: "1:27.186" },
          { position: 15, code: "LAW", time: "1:27.363" }
        ]
      },

      q3: {
        classification: [
          { position: 1, code: "VER", time: "1:26.204" },
          { position: 2, code: "NOR", time: "1:26.269" },
          { position: 3, code: "ANT", time: "1:26.271" },
          { position: 4, code: "PIA", time: "1:26.375" },
          { position: 5, code: "RUS", time: "1:26.385" },
          { position: 6, code: "SAI", time: "1:26.569" },
          { position: 7, code: "ALB", time: "1:26.682" },
          { position: 8, code: "LEC", time: "1:26.754" },
          { position: 9, code: "OCO", time: "1:26.824" },
          { position: 10, code: "TSU", time: "1:26.943" }
        ]
      },

      notes: [
        "Max Verstappen took Grand Prix pole position for Red Bull Racing.",
        "Lando Norris qualified second, just ahead of Kimi Antonelli."
      ]
    },

    startingGrid: {
      status: "Verified",
      poleSide: "left",
      positions: [
        { grid: 1, code: "VER", team: "Red Bull Racing", qualified: 1, note: "Pole position" },
        { grid: 2, code: "NOR", team: "McLaren", qualified: 2 },
        { grid: 3, code: "ANT", team: "Mercedes", qualified: 3 },
        { grid: 4, code: "PIA", team: "McLaren", qualified: 4 },
        { grid: 5, code: "RUS", team: "Mercedes", qualified: 5 },
        { grid: 6, code: "SAI", team: "Williams", qualified: 6 },
        { grid: 7, code: "ALB", team: "Williams", qualified: 7 },
        { grid: 8, code: "LEC", team: "Ferrari", qualified: 8 },
        { grid: 9, code: "OCO", team: "Haas", qualified: 9 },
        { grid: 10, code: "TSU", team: "Red Bull Racing", qualified: 10 },
        { grid: 11, code: "HAD", team: "Racing Bulls", qualified: 11 },
        { grid: 12, code: "HAM", team: "Ferrari", qualified: 12 },
        { grid: 13, code: "BOR", team: "Kick Sauber", qualified: 13 },
        { grid: 14, code: "DOO", team: "Alpine", qualified: 14 },
        { grid: 15, code: "LAW", team: "Racing Bulls", qualified: 15 },
        { grid: 16, code: "HUL", team: "Kick Sauber", qualified: 16 },
        { grid: 17, code: "ALO", team: "Aston Martin", qualified: 17 },
        { grid: 18, code: "STR", team: "Aston Martin", qualified: 19 },
        { grid: 19, code: "BEA", team: "Haas", qualified: 20 },
        {
          grid: 20,
          code: "GAS",
          team: "Alpine",
          qualified: 18,
          reason: "Required to start from pit lane after Parc Ferme changes"
        }
      ],
      notes: [
        "Max Verstappen started from pole.",
        "Pierre Gasly was required to start from the pit lane after Alpine modified his car under Parc Ferme conditions."
      ]
    },

    race: {
      status: "Verified",

      fastestLap: {
        code: "NOR",
        time: "1:29.746",
        lap: 36
      },

      fastestPitStop: {
        team: "Williams",
        driver: "ALB",
        time: "21.906s pit-lane time"
      },

      driverOfTheDay: "PIA",

      podium: [
        { position: 1, code: "PIA", team: "McLaren", time: "1:28:51.587" },
        { position: 2, code: "NOR", team: "McLaren", gap: "+4.630s" },
        { position: 3, code: "RUS", team: "Mercedes", gap: "+37.644s" }
      ],

      fullClassification: [
        { position: 1, code: "PIA", team: "McLaren", time: "1:28:51.587", status: "Finished", points: 25 },
        { position: 2, code: "NOR", team: "McLaren", gap: "+4.630s", status: "Finished", points: 18 },
        { position: 3, code: "RUS", team: "Mercedes", gap: "+37.644s", status: "Finished", points: 15 },
        { position: 4, code: "VER", team: "Red Bull Racing", gap: "+39.956s", status: "Finished", points: 12 },
        { position: 5, code: "ALB", team: "Williams", gap: "+48.067s", status: "Finished", points: 10 },
        { position: 6, code: "ANT", team: "Mercedes", gap: "+55.502s", status: "Finished", points: 8 },
        { position: 7, code: "LEC", team: "Ferrari", gap: "+57.036s", status: "Finished", points: 6 },
        { position: 8, code: "HAM", team: "Ferrari", gap: "+60.186s", status: "Finished", points: 4 },
        { position: 9, code: "SAI", team: "Williams", gap: "+60.577s", status: "Finished", points: 2 },
        { position: 10, code: "TSU", team: "Red Bull Racing", gap: "+74.434s", status: "Finished", points: 1, note: "Five-second time penalty for speeding in the pit lane" },
        { position: 11, code: "HAD", team: "Racing Bulls", gap: "+74.602s", status: "Finished", points: 0 },
        { position: 12, code: "OCO", team: "Haas", gap: "+82.006s", status: "Finished", points: 0 },
        { position: 13, code: "GAS", team: "Alpine", gap: "+90.445s", status: "Finished", points: 0 },
        { position: 14, code: "HUL", team: "Kick Sauber", gap: "+1 lap", status: "Finished", points: 0 },
        { position: 15, code: "ALO", team: "Aston Martin", gap: "+1 lap", status: "Finished", points: 0 },
        { position: 16, code: "STR", team: "Aston Martin", gap: "+1 lap", status: "Finished", points: 0 },
        { position: "NC", code: "LAW", team: "Racing Bulls", status: "DNF", points: 0, note: "Completed 36 laps" },
        { position: "NC", code: "BOR", team: "Kick Sauber", status: "DNF", points: 0, note: "Completed 30 laps" },
        { position: "NC", code: "BEA", team: "Haas", status: "DNF", points: 0, note: "Completed 27 laps" },
        { position: "NC", code: "DOO", team: "Alpine", status: "DNF", points: 0, note: "Retired on lap 1" }
      ],

      strategy: [
        "Oscar Piastri moved forward from fourth on the grid and converted McLaren's race pace into victory.",
        "Lando Norris completed a McLaren one-two, while George Russell finished third after Mercedes executed a strong race strategy."
      ],

      keyMoments: [
        "Oscar Piastri passed Max Verstappen for the lead and went on to win.",
        "McLaren secured a dominant one-two finish.",
        "George Russell completed the podium for Mercedes.",
        "Alex Albon finished fifth for Williams.",
        "Lando Norris set the fastest lap on lap 36."
      ],

      penalties: [
        "Yuki Tsunoda received a five-second time penalty for speeding in the pit lane."
      ],

      notes: [
        "Oscar Piastri was voted Driver of the Day.",
        "Lando Norris set the official fastest lap with a 1:29.746 on lap 36.",
        "The fastest pit-lane time in the official pit stop summary was Alex Albon's 21.906s stop."
      ]
    }
  },
  7: {
    fp1: {
      status: "Verified",
      headline: "FP1 classification",
      classification: [
        { position: 1, code: "PIA", team: "McLaren", time: "1:16.545", gap: "—", laps: 23, tyres: [] },
        { position: 2, code: "NOR", team: "McLaren", time: "", gap: "+0.032s", laps: 23, tyres: [] },
        { position: 3, code: "SAI", team: "Williams", time: "", gap: "+0.052s", laps: 19, tyres: [] },
        { position: 4, code: "RUS", team: "Mercedes", time: "", gap: "+0.054s", laps: 26, tyres: [] },
        { position: 5, code: "HAM", team: "Ferrari", time: "", gap: "+0.096s", laps: 22, tyres: [] },
        { position: 6, code: "GAS", team: "Alpine", time: "", gap: "+0.151s", laps: 21, tyres: [] },
        { position: 7, code: "VER", team: "Red Bull Racing", time: "", gap: "+0.360s", laps: 15, tyres: [] },
        { position: 8, code: "ALB", team: "Williams", time: "", gap: "+0.377s", laps: 21, tyres: [] },
        { position: 9, code: "BOR", team: "Kick Sauber", time: "", gap: "+0.380s", laps: 23, tyres: [] },
        { position: 10, code: "HUL", team: "Kick Sauber", time: "", gap: "+0.453s", laps: 23, tyres: [] },
        { position: 11, code: "STR", team: "Aston Martin", time: "", gap: "+0.487s", laps: 23, tyres: [] },
        { position: 12, code: "LEC", team: "Ferrari", time: "", gap: "+0.532s", laps: 23, tyres: [] },
        { position: 13, code: "ANT", team: "Mercedes", time: "", gap: "+0.549s", laps: 23, tyres: [] },
        { position: 14, code: "ALO", team: "Aston Martin", time: "", gap: "+0.576s", laps: 22, tyres: [] },
        { position: 15, code: "LAW", team: "Racing Bulls", time: "", gap: "+0.741s", laps: 22, tyres: [] },
        { position: 16, code: "TSU", team: "Red Bull Racing", time: "", gap: "+0.811s", laps: 18, tyres: [] },
        { position: 17, code: "COL", name: "Franco Colapinto", team: "Alpine", time: "", gap: "+0.828s", laps: 21, tyres: [] },
        { position: 18, code: "BEA", team: "Haas", time: "", gap: "+0.901s", laps: 20, tyres: [] },
        { position: 19, code: "HAD", team: "Racing Bulls", time: "", gap: "+1.096s", laps: 19, tyres: [] },
        { position: 20, code: "OCO", team: "Haas", time: "", gap: "+1.117s", laps: 20, tyres: [] }
      ],
      notes: [
        "Oscar Piastri topped FP1 for McLaren.",
        "Franco Colapinto appeared for Alpine at Imola."
      ]
    },

    fp2: {
      status: "Verified",
      headline: "FP2 classification",
      classification: [
        { position: 1, code: "PIA", team: "McLaren", time: "1:15.293", gap: "—", laps: 28, tyres: [] },
        { position: 2, code: "NOR", team: "McLaren", time: "", gap: "+0.025s", laps: 25, tyres: [] },
        { position: 3, code: "GAS", team: "Alpine", time: "", gap: "+0.276s", laps: 29, tyres: [] },
        { position: 4, code: "RUS", team: "Mercedes", time: "", gap: "+0.400s", laps: 23, tyres: [] },
        { position: 5, code: "VER", team: "Red Bull Racing", time: "", gap: "+0.442s", laps: 26, tyres: [] },
        { position: 6, code: "LEC", team: "Ferrari", time: "", gap: "+0.475s", laps: 28, tyres: [] },
        { position: 7, code: "HAD", team: "Racing Bulls", time: "", gap: "+0.499s", laps: 22, tyres: [] },
        { position: 8, code: "TSU", team: "Red Bull Racing", time: "", gap: "+0.534s", laps: 29, tyres: [] },
        { position: 9, code: "ALB", team: "Williams", time: "", gap: "+0.623s", laps: 29, tyres: [] },
        { position: 10, code: "SAI", team: "Williams", time: "", gap: "+0.641s", laps: 29, tyres: [] },
        { position: 11, code: "HAM", team: "Ferrari", time: "", gap: "+0.650s", laps: 26, tyres: [] },
        { position: 12, code: "BEA", team: "Haas", time: "", gap: "+0.716s", laps: 26, tyres: [] },
        { position: 13, code: "COL", name: "Franco Colapinto", team: "Alpine", time: "", gap: "+0.751s", laps: 29, tyres: [] },
        { position: 14, code: "ALO", team: "Aston Martin", time: "", gap: "+0.927s", laps: 21, tyres: [] },
        { position: 15, code: "LAW", team: "Racing Bulls", time: "", gap: "+0.962s", laps: 22, tyres: [] },
        { position: 16, code: "BOR", team: "Kick Sauber", time: "", gap: "+1.046s", laps: 27, tyres: [] },
        { position: 17, code: "STR", team: "Aston Martin", time: "", gap: "+1.048s", laps: 23, tyres: [] },
        { position: 18, code: "ANT", team: "Mercedes", time: "", gap: "+1.113s", laps: 27, tyres: [] },
        { position: 19, code: "HUL", team: "Kick Sauber", time: "", gap: "+1.126s", laps: 26, tyres: [] },
        { position: 20, code: "OCO", team: "Haas", time: "", gap: "+1.127s", laps: 24, tyres: [] }
      ],
      notes: [
        "Oscar Piastri topped FP2 ahead of Lando Norris.",
        "McLaren finished first and second on Friday afternoon."
      ]
    },

    fp3: {
      status: "Verified",
      headline: "FP3 classification",
      classification: [
        { position: 1, code: "NOR", team: "McLaren", time: "1:14.897", gap: "—", laps: 19, tyres: [] },
        { position: 2, code: "PIA", team: "McLaren", time: "", gap: "+0.100s", laps: 19, tyres: [] },
        { position: 3, code: "VER", team: "Red Bull Racing", time: "", gap: "+0.181s", laps: 17, tyres: [] },
        { position: 4, code: "ANT", team: "Mercedes", time: "", gap: "+0.502s", laps: 15, tyres: [] },
        { position: 5, code: "LEC", team: "Ferrari", time: "", gap: "+0.554s", laps: 26, tyres: [] },
        { position: 6, code: "SAI", team: "Williams", time: "", gap: "+0.560s", laps: 21, tyres: [] },
        { position: 7, code: "HAD", team: "Racing Bulls", time: "", gap: "+0.611s", laps: 20, tyres: [] },
        { position: 8, code: "RUS", team: "Mercedes", time: "", gap: "+0.765s", laps: 14, tyres: [] },
        { position: 9, code: "ALB", team: "Williams", time: "", gap: "+0.835s", laps: 20, tyres: [] },
        { position: 10, code: "HAM", team: "Ferrari", time: "", gap: "+0.890s", laps: 25, tyres: [] },
        { position: 11, code: "ALO", team: "Aston Martin", time: "", gap: "+0.922s", laps: 18, tyres: [] },
        { position: 12, code: "BEA", team: "Haas", time: "", gap: "+1.047s", laps: 14, tyres: [] },
        { position: 13, code: "STR", team: "Aston Martin", time: "", gap: "+1.078s", laps: 22, tyres: [] },
        { position: 14, code: "LAW", team: "Racing Bulls", time: "", gap: "+1.080s", laps: 21, tyres: [] },
        { position: 15, code: "GAS", team: "Alpine", time: "", gap: "+1.093s", laps: 14, tyres: [] },
        { position: 16, code: "BOR", team: "Kick Sauber", time: "", gap: "+1.149s", laps: 17, tyres: [] },
        { position: 17, code: "TSU", team: "Red Bull Racing", time: "", gap: "+1.213s", laps: 14, tyres: [] },
        { position: 18, code: "COL", name: "Franco Colapinto", team: "Alpine", time: "", gap: "+1.313s", laps: 14, tyres: [] },
        { position: 19, code: "HUL", team: "Kick Sauber", time: "", gap: "+1.341s", laps: 16, tyres: [] },
        { position: 20, code: "OCO", team: "Haas", time: "", gap: "+1.490s", laps: 15, tyres: [] }
      ],
      notes: [
        "Lando Norris topped FP3 ahead of Oscar Piastri.",
        "McLaren again finished first and second before qualifying."
      ]
    },

    qualifying: {
      status: "Verified",
      pole: "PIA",

      q1: {
        classification: [
          { position: 1, code: "PIA", time: "1:15.500" },
          { position: 2, code: "VER", time: "1:15.175" },
          { position: 3, code: "RUS", time: "1:15.852" },
          { position: 4, code: "NOR", time: "1:15.894" },
          { position: 5, code: "ALO", time: "1:15.695" },
          { position: 6, code: "SAI", time: "1:15.987" },
          { position: 7, code: "ALB", time: "1:16.123" },
          { position: 8, code: "STR", time: "1:15.817" },
          { position: 9, code: "HAD", time: "1:16.253" },
          { position: 10, code: "GAS", time: "1:15.937" },
          { position: 11, code: "LEC", time: "1:16.108" },
          { position: 12, code: "HAM", time: "1:16.163" },
          { position: 13, code: "ANT", time: "1:15.943" },
          { position: 14, code: "BOR", time: "1:16.340" },
          { position: 15, code: "COL", name: "Franco Colapinto", time: "1:16.256" },
          { position: 16, code: "LAW", time: "1:16.379" },
          { position: 17, code: "HUL", time: "1:16.518" },
          { position: 18, code: "OCO", time: "1:16.613" },
          { position: 19, code: "BEA", time: "1:16.918" },
          { position: 20, code: "TSU", time: "DNF" }
        ]
      },

      q2: {
        classification: [
          { position: 1, code: "PIA", time: "1:15.214" },
          { position: 2, code: "VER", time: "1:15.394" },
          { position: 3, code: "RUS", time: "1:15.334" },
          { position: 4, code: "NOR", time: "1:15.261" },
          { position: 5, code: "ALO", time: "1:15.442" },
          { position: 6, code: "SAI", time: "1:15.198" },
          { position: 7, code: "ALB", time: "1:15.521" },
          { position: 8, code: "STR", time: "1:15.497" },
          { position: 9, code: "HAD", time: "1:15.510" },
          { position: 10, code: "GAS", time: "1:15.505" },
          { position: 11, code: "LEC", time: "1:15.604" },
          { position: 12, code: "HAM", time: "1:15.765" },
          { position: 13, code: "ANT", time: "1:15.772" },
          { position: 14, code: "BOR", time: "1:16.260" },
          { position: 15, code: "COL", name: "Franco Colapinto", time: "DNF" }
        ]
      },

      q3: {
        classification: [
          { position: 1, code: "PIA", time: "1:14.670" },
          { position: 2, code: "VER", time: "1:14.704" },
          { position: 3, code: "RUS", time: "1:14.807" },
          { position: 4, code: "NOR", time: "1:14.962" },
          { position: 5, code: "ALO", time: "1:15.431" },
          { position: 6, code: "SAI", time: "1:15.432" },
          { position: 7, code: "ALB", time: "1:15.473" },
          { position: 8, code: "STR", time: "1:15.581" },
          { position: 9, code: "HAD", time: "1:15.746" },
          { position: 10, code: "GAS", time: "1:15.787" }
        ]
      },

      notes: [
        "Oscar Piastri took pole position for McLaren.",
        "Yuki Tsunoda failed to set a Q1 time and raced at the Stewards' discretion.",
        "Franco Colapinto received a one-place grid penalty for failing to follow the Race Director's instructions."
      ]
    },

    startingGrid: {
      status: "Verified",
      poleSide: "left",
      positions: [
        { grid: 1, code: "PIA", team: "McLaren", qualified: 1, note: "Pole position" },
        { grid: 2, code: "VER", team: "Red Bull Racing", qualified: 2 },
        { grid: 3, code: "RUS", team: "Mercedes", qualified: 3 },
        { grid: 4, code: "NOR", team: "McLaren", qualified: 4 },
        { grid: 5, code: "ALO", team: "Aston Martin", qualified: 5 },
        { grid: 6, code: "SAI", team: "Williams", qualified: 6 },
        { grid: 7, code: "ALB", team: "Williams", qualified: 7 },
        { grid: 8, code: "STR", team: "Aston Martin", qualified: 8 },
        { grid: 9, code: "HAD", team: "Racing Bulls", qualified: 9 },
        { grid: 10, code: "GAS", team: "Alpine", qualified: 10 },
        { grid: 11, code: "LEC", team: "Ferrari", qualified: 11 },
        { grid: 12, code: "HAM", team: "Ferrari", qualified: 12 },
        { grid: 13, code: "ANT", team: "Mercedes", qualified: 13 },
        { grid: 14, code: "BOR", team: "Kick Sauber", qualified: 14 },
        { grid: 15, code: "LAW", team: "Racing Bulls", qualified: 16 },
        {
          grid: 16,
          code: "COL",
          name: "Franco Colapinto",
          team: "Alpine",
          qualified: 15,
          reason: "One-place grid penalty for failing to follow Race Director instructions"
        },
        { grid: 17, code: "HUL", team: "Kick Sauber", qualified: 17 },
        { grid: 18, code: "OCO", team: "Haas", qualified: 18 },
        { grid: 19, code: "BEA", team: "Haas", qualified: 19 },
        { grid: 20, code: "TSU", team: "Red Bull Racing", qualified: 20, reason: "Raced at the Stewards' discretion after failing to set a qualifying time" }
      ],
      notes: [
        "Oscar Piastri started from pole.",
        "Franco Colapinto dropped one place for failing to follow the Race Director's instructions.",
        "Yuki Tsunoda started 20th after failing to set a qualifying time."
      ]
    },

    race: {
      status: "Verified",

      fastestLap: {
        code: "VER",
        time: "1:17.988",
        lap: 58
      },

      fastestPitStop: {
        team: "McLaren",
        driver: "NOR",
        time: "29.513s pit-lane time"
      },

      driverOfTheDay: "VER",

      podium: [
        { position: 1, code: "VER", team: "Red Bull Racing", time: "1:31:33.199" },
        { position: 2, code: "NOR", team: "McLaren", gap: "+6.109s" },
        { position: 3, code: "PIA", team: "McLaren", gap: "+12.956s" }
      ],

      fullClassification: [
        { position: 1, code: "VER", team: "Red Bull Racing", time: "1:31:33.199", status: "Finished", points: 25 },
        { position: 2, code: "NOR", team: "McLaren", gap: "+6.109s", status: "Finished", points: 18 },
        { position: 3, code: "PIA", team: "McLaren", gap: "+12.956s", status: "Finished", points: 15 },
        { position: 4, code: "HAM", team: "Ferrari", gap: "+14.356s", status: "Finished", points: 12 },
        { position: 5, code: "ALB", team: "Williams", gap: "+17.945s", status: "Finished", points: 10 },
        { position: 6, code: "LEC", team: "Ferrari", gap: "+20.774s", status: "Finished", points: 8 },
        { position: 7, code: "RUS", team: "Mercedes", gap: "+22.034s", status: "Finished", points: 6 },
        { position: 8, code: "SAI", team: "Williams", gap: "+22.898s", status: "Finished", points: 4 },
        { position: 9, code: "HAD", team: "Racing Bulls", gap: "+23.586s", status: "Finished", points: 2 },
        { position: 10, code: "TSU", team: "Red Bull Racing", gap: "+26.446s", status: "Finished", points: 1 },
        { position: 11, code: "ALO", team: "Aston Martin", gap: "+27.250s", status: "Finished", points: 0 },
        { position: 12, code: "HUL", team: "Kick Sauber", gap: "+30.296s", status: "Finished", points: 0 },
        { position: 13, code: "GAS", team: "Alpine", gap: "+31.424s", status: "Finished", points: 0 },
        { position: 14, code: "LAW", team: "Racing Bulls", gap: "+32.511s", status: "Finished", points: 0 },
        { position: 15, code: "STR", team: "Aston Martin", gap: "+32.993s", status: "Finished", points: 0 },
        { position: 16, code: "COL", name: "Franco Colapinto", team: "Alpine", gap: "+33.411s", status: "Finished", points: 0 },
        { position: 17, code: "BEA", team: "Haas", gap: "+33.808s", status: "Finished", points: 0 },
        { position: 18, code: "BOR", team: "Kick Sauber", gap: "+38.572s", status: "Finished", points: 0 },
        { position: "NC", code: "ANT", team: "Mercedes", status: "DNF", points: 0, note: "Completed 44 laps" },
        { position: "NC", code: "OCO", team: "Haas", status: "DNF", points: 0, note: "Completed 27 laps" }
      ],

      strategy: [
        "Max Verstappen took the lead at the start and controlled the race from the front.",
        "Virtual Safety Car and Safety Car timing reshuffled the McLaren fight behind Verstappen."
      ],

      keyMoments: [
        "Max Verstappen passed Oscar Piastri at the start and went on to win.",
        "Lando Norris passed Piastri late in the race to finish second.",
        "Oscar Piastri completed the podium after starting from pole.",
        "Lewis Hamilton recovered to fourth for Ferrari at Imola.",
        "Kimi Antonelli and Esteban Ocon retired from the race."
      ],

      penalties: [],

      notes: [
        "Max Verstappen set the fastest lap on lap 58.",
        "Max Verstappen was voted Driver of the Day.",
        "Lando Norris had the quickest listed pit-lane time in the official pit stop summary."
      ]
    }
  },
  8: {
    fp1: {
      status: "Verified",
      headline: "FP1 classification",
      classification: [
        { position: 1, code: "LEC", team: "Ferrari", time: "1:11.964", gap: "—", laps: 33, tyres: [] },
        { position: 2, code: "VER", team: "Red Bull Racing", time: "", gap: "+0.163s", laps: 30, tyres: [] },
        { position: 3, code: "NOR", team: "McLaren", time: "", gap: "+0.326s", laps: 32, tyres: [] },
        { position: 4, code: "ALB", team: "Williams", time: "", gap: "+0.350s", laps: 33, tyres: [] },
        { position: 5, code: "PIA", team: "McLaren", time: "", gap: "+0.378s", laps: 28, tyres: [] },
        { position: 6, code: "RUS", team: "Mercedes", time: "", gap: "+0.518s", laps: 33, tyres: [] },
        { position: 7, code: "SAI", team: "Williams", time: "", gap: "+0.570s", laps: 36, tyres: [] },
        { position: 8, code: "GAS", team: "Alpine", time: "", gap: "+0.705s", laps: 29, tyres: [] },
        { position: 9, code: "HAM", team: "Ferrari", time: "", gap: "+0.726s", laps: 30, tyres: [] },
        { position: 10, code: "ALO", team: "Aston Martin", time: "", gap: "+0.763s", laps: 28, tyres: [] },
        { position: 11, code: "ANT", team: "Mercedes", time: "", gap: "+0.801s", laps: 34, tyres: [] },
        { position: 12, code: "HUL", team: "Kick Sauber", time: "", gap: "+1.015s", laps: 30, tyres: [] },
        { position: 13, code: "HAD", team: "Racing Bulls", time: "", gap: "+1.223s", laps: 35, tyres: [] },
        { position: 14, code: "TSU", team: "Red Bull Racing", time: "", gap: "+1.268s", laps: 32, tyres: [] },
        { position: 15, code: "BEA", team: "Haas", time: "", gap: "+1.365s", laps: 34, tyres: [] },
        { position: 16, code: "OCO", team: "Haas", time: "", gap: "+1.430s", laps: 31, tyres: [] },
        { position: 17, code: "LAW", team: "Racing Bulls", time: "", gap: "+1.465s", laps: 37, tyres: [] },
        { position: 18, code: "BOR", team: "Kick Sauber", time: "", gap: "+1.506s", laps: 29, tyres: [] },
        { position: 19, code: "COL", name: "Franco Colapinto", team: "Alpine", time: "", gap: "+1.856s", laps: 32, tyres: [] },
        { position: 20, code: "STR", team: "Aston Martin", time: "", gap: "+3.671s", laps: 4, tyres: [] }
      ],
      notes: [
        "Charles Leclerc topped FP1 at his home Grand Prix.",
        "Lance Stroll completed only four laps in the opening practice session."
      ]
    },

    fp2: {
      status: "Verified",
      headline: "FP2 classification",
      classification: [
        { position: 1, code: "LEC", team: "Ferrari", time: "1:11.355", gap: "—", laps: 32, tyres: [] },
        { position: 2, code: "PIA", team: "McLaren", time: "", gap: "+0.038s", laps: 28, tyres: [] },
        { position: 3, code: "HAM", team: "Ferrari", time: "", gap: "+0.105s", laps: 30, tyres: [] },
        { position: 4, code: "NOR", team: "McLaren", time: "", gap: "+0.322s", laps: 32, tyres: [] },
        { position: 5, code: "LAW", team: "Racing Bulls", time: "", gap: "+0.468s", laps: 32, tyres: [] },
        { position: 6, code: "HAD", team: "Racing Bulls", time: "", gap: "+0.487s", laps: 17, tyres: [] },
        { position: 7, code: "ALO", team: "Aston Martin", time: "", gap: "+0.535s", laps: 30, tyres: [] },
        { position: 8, code: "ALB", team: "Williams", time: "", gap: "+0.563s", laps: 34, tyres: [] },
        { position: 9, code: "ANT", team: "Mercedes", time: "", gap: "+0.647s", laps: 32, tyres: [] },
        { position: 10, code: "VER", team: "Red Bull Racing", time: "", gap: "+0.713s", laps: 29, tyres: [] },
        { position: 11, code: "TSU", team: "Red Bull Racing", time: "", gap: "+0.717s", laps: 30, tyres: [] },
        { position: 12, code: "RUS", team: "Mercedes", time: "", gap: "+0.737s", laps: 32, tyres: [] },
        { position: 13, code: "SAI", team: "Williams", time: "", gap: "+0.796s", laps: 32, tyres: [] },
        { position: 14, code: "BOR", team: "Kick Sauber", time: "", gap: "+0.879s", laps: 29, tyres: [] },
        { position: 15, code: "BEA", team: "Haas", time: "", gap: "+0.904s", laps: 33, tyres: [] },
        { position: 16, code: "HUL", team: "Kick Sauber", time: "", gap: "+0.907s", laps: 32, tyres: [] },
        { position: 17, code: "GAS", team: "Alpine", time: "", gap: "+1.049s", laps: 34, tyres: [] },
        { position: 18, code: "STR", team: "Aston Martin", time: "", gap: "+1.157s", laps: 30, tyres: [] },
        { position: 19, code: "OCO", team: "Haas", time: "", gap: "+1.186s", laps: 33, tyres: [] },
        { position: 20, code: "COL", name: "Franco Colapinto", team: "Alpine", time: "", gap: "+2.060s", laps: 31, tyres: [] }
      ],
      notes: [
        "Charles Leclerc topped FP2 for Ferrari.",
        "Oscar Piastri finished second, only 0.038s behind."
      ]
    },

    fp3: {
      status: "Verified",
      headline: "FP3 classification",
      classification: [
        { position: 1, code: "LEC", team: "Ferrari", time: "1:10.953", gap: "—", laps: 25, tyres: [] },
        { position: 2, code: "VER", team: "Red Bull Racing", time: "", gap: "+0.280s", laps: 23, tyres: [] },
        { position: 3, code: "NOR", team: "McLaren", time: "", gap: "+0.294s", laps: 23, tyres: [] },
        { position: 4, code: "PIA", team: "McLaren", time: "", gap: "+0.445s", laps: 21, tyres: [] },
        { position: 5, code: "HAM", team: "Ferrari", time: "", gap: "+0.563s", laps: 26, tyres: [] },
        { position: 6, code: "ALB", team: "Williams", time: "", gap: "+0.715s", laps: 24, tyres: [] },
        { position: 7, code: "LAW", team: "Racing Bulls", time: "", gap: "+0.861s", laps: 33, tyres: [] },
        { position: 8, code: "SAI", team: "Williams", time: "", gap: "+0.940s", laps: 24, tyres: [] },
        { position: 9, code: "TSU", team: "Red Bull Racing", time: "", gap: "+0.999s", laps: 21, tyres: [] },
        { position: 10, code: "ANT", team: "Mercedes", time: "", gap: "+1.060s", laps: 23, tyres: [] },
        { position: 11, code: "RUS", team: "Mercedes", time: "", gap: "+1.113s", laps: 22, tyres: [] },
        { position: 12, code: "ALO", team: "Aston Martin", time: "", gap: "+1.148s", laps: 22, tyres: [] },
        { position: 13, code: "HUL", team: "Kick Sauber", time: "", gap: "+1.172s", laps: 25, tyres: [] },
        { position: 14, code: "GAS", team: "Alpine", time: "", gap: "+1.241s", laps: 20, tyres: [] },
        { position: 15, code: "STR", team: "Aston Martin", time: "", gap: "+1.249s", laps: 24, tyres: [] },
        { position: 16, code: "BEA", team: "Haas", time: "", gap: "+1.298s", laps: 20, tyres: [] },
        { position: 17, code: "HAD", team: "Racing Bulls", time: "", gap: "+1.318s", laps: 30, tyres: [] },
        { position: 18, code: "OCO", team: "Haas", time: "", gap: "+1.546s", laps: 25, tyres: [] },
        { position: 19, code: "BOR", team: "Kick Sauber", time: "", gap: "+1.648s", laps: 28, tyres: [] },
        { position: 20, code: "COL", name: "Franco Colapinto", team: "Alpine", time: "", gap: "+1.898s", laps: 32, tyres: [] }
      ],
      notes: [
        "Charles Leclerc completed a practice sweep by topping FP3.",
        "Max Verstappen was second, with Lando Norris third."
      ]
    },

    qualifying: {
      status: "Verified",
      pole: "NOR",

      q1: {
        classification: [
          { position: 1, code: "NOR", time: "1:11.285" },
          { position: 2, code: "LEC", time: "1:11.229" },
          { position: 3, code: "PIA", time: "1:11.308" },
          { position: 4, code: "HAM", time: "1:11.575" },
          { position: 5, code: "VER", time: "1:11.431" },
          { position: 6, code: "HAD", time: "1:11.811" },
          { position: 7, code: "ALO", time: "1:11.674" },
          { position: 8, code: "OCO", time: "1:11.839" },
          { position: 9, code: "LAW", time: "1:11.818" },
          { position: 10, code: "ALB", time: "1:11.629" },
          { position: 11, code: "SAI", time: "1:11.707" },
          { position: 12, code: "TSU", time: "1:11.800" },
          { position: 13, code: "HUL", time: "1:11.871" },
          { position: 14, code: "RUS", time: "1:11.507" },
          { position: 15, code: "ANT", time: "1:11.880" },
          { position: 16, code: "BOR", time: "1:11.902" },
          { position: 17, code: "BEA", time: "1:11.979" },
          { position: 18, code: "GAS", time: "1:11.994" },
          { position: 19, code: "STR", time: "1:12.563" },
          { position: 20, code: "COL", name: "Franco Colapinto", time: "1:12.597" }
        ]
      },

      q2: {
        classification: [
          { position: 1, code: "NOR", time: "1:10.570" },
          { position: 2, code: "LEC", time: "1:10.581" },
          { position: 3, code: "PIA", time: "1:10.858" },
          { position: 4, code: "HAM", time: "1:10.883" },
          { position: 5, code: "VER", time: "1:10.875" },
          { position: 6, code: "HAD", time: "1:11.040" },
          { position: 7, code: "ALO", time: "1:11.182" },
          { position: 8, code: "OCO", time: "1:11.262" },
          { position: 9, code: "LAW", time: "1:11.250" },
          { position: 10, code: "ALB", time: "1:10.732" },
          { position: 11, code: "SAI", time: "1:11.362" },
          { position: 12, code: "TSU", time: "1:11.415" },
          { position: 13, code: "HUL", time: "1:11.596" },
          { position: 14, code: "RUS", time: "DNF" },
          { position: 15, code: "ANT", time: "No time" }
        ]
      },

      q3: {
        classification: [
          { position: 1, code: "NOR", time: "1:09.954" },
          { position: 2, code: "LEC", time: "1:10.063" },
          { position: 3, code: "PIA", time: "1:10.129" },
          { position: 4, code: "HAM", time: "1:10.382" },
          { position: 5, code: "VER", time: "1:10.669" },
          { position: 6, code: "HAD", time: "1:10.923" },
          { position: 7, code: "ALO", time: "1:10.924" },
          { position: 8, code: "OCO", time: "1:10.942" },
          { position: 9, code: "LAW", time: "1:11.129" },
          { position: 10, code: "ALB", time: "1:11.213" }
        ]
      },

      notes: [
        "Lando Norris took pole position for McLaren.",
        "Lewis Hamilton qualified fourth but received a three-place grid penalty for impeding.",
        "George Russell stopped in Q2 and was classified 14th in qualifying."
      ]
    },

    startingGrid: {
      status: "Verified",
      poleSide: "left",
      positions: [
        { grid: 1, code: "NOR", team: "McLaren", qualified: 1, note: "Pole position" },
        { grid: 2, code: "LEC", team: "Ferrari", qualified: 2 },
        { grid: 3, code: "PIA", team: "McLaren", qualified: 3 },
        { grid: 4, code: "VER", team: "Red Bull Racing", qualified: 5 },
        { grid: 5, code: "HAD", team: "Racing Bulls", qualified: 6 },
        { grid: 6, code: "ALO", team: "Aston Martin", qualified: 7 },
        { grid: 7, code: "HAM", team: "Ferrari", qualified: 4, reason: "Three-place grid penalty for impeding in Qualifying" },
        { grid: 8, code: "OCO", team: "Haas", qualified: 8 },
        { grid: 9, code: "LAW", team: "Racing Bulls", qualified: 9 },
        { grid: 10, code: "ALB", team: "Williams", qualified: 10 },
        { grid: 11, code: "SAI", team: "Williams", qualified: 11 },
        { grid: 12, code: "TSU", team: "Red Bull Racing", qualified: 12 },
        { grid: 13, code: "HUL", team: "Kick Sauber", qualified: 13 },
        { grid: 14, code: "RUS", team: "Mercedes", qualified: 14, note: "Stopped in Q2" },
        { grid: 15, code: "ANT", team: "Mercedes", qualified: 15, note: "No Q2 time after Q1 crash damage" },
        { grid: 16, code: "BOR", team: "Kick Sauber", qualified: 16 },
        { grid: 17, code: "GAS", team: "Alpine", qualified: 18 },
        { grid: 18, code: "COL", name: "Franco Colapinto", team: "Alpine", qualified: 20 },
        { grid: 19, code: "STR", team: "Aston Martin", qualified: 19, reason: "Grid penalties for collision in practice and impeding in Qualifying" },
        { grid: 20, code: "BEA", team: "Haas", qualified: 17, reason: "10-place grid penalty for overtaking under red flags in practice" }
      ],
      notes: [
        "Lando Norris started from pole.",
        "Lewis Hamilton dropped from fourth to seventh after a three-place penalty.",
        "Oliver Bearman received a 10-place grid penalty for overtaking under red flags in practice.",
        "Lance Stroll received grid penalties for causing a collision during practice and impeding during Qualifying."
      ]
    },

    race: {
      status: "Verified",

      fastestLap: {
        code: "NOR",
        time: "1:13.221",
        lap: 78
      },

      fastestPitStop: {
        team: "Ferrari",
        driver: "HAM",
        time: "23.565s pit-lane time"
      },

      driverOfTheDay: "LEC",

      podium: [
        { position: 1, code: "NOR", team: "McLaren", time: "1:40:33.843" },
        { position: 2, code: "LEC", team: "Ferrari", gap: "+3.131s" },
        { position: 3, code: "PIA", team: "McLaren", gap: "+3.658s" }
      ],

      fullClassification: [
        { position: 1, code: "NOR", team: "McLaren", time: "1:40:33.843", status: "Finished", points: 25 },
        { position: 2, code: "LEC", team: "Ferrari", gap: "+3.131s", status: "Finished", points: 18 },
        { position: 3, code: "PIA", team: "McLaren", gap: "+3.658s", status: "Finished", points: 15 },
        { position: 4, code: "VER", team: "Red Bull Racing", gap: "+20.572s", status: "Finished", points: 12 },
        { position: 5, code: "HAM", team: "Ferrari", gap: "+51.387s", status: "Finished", points: 10 },
        { position: 6, code: "HAD", team: "Racing Bulls", gap: "+1 lap", status: "Finished", points: 8 },
        { position: 7, code: "OCO", team: "Haas", gap: "+1 lap", status: "Finished", points: 6 },
        { position: 8, code: "LAW", team: "Racing Bulls", gap: "+1 lap", status: "Finished", points: 4 },
        { position: 9, code: "ALB", team: "Williams", gap: "+2 laps", status: "Finished", points: 2 },
        { position: 10, code: "SAI", team: "Williams", gap: "+2 laps", status: "Finished", points: 1 },
        { position: 11, code: "RUS", team: "Mercedes", gap: "+2 laps", status: "Finished", points: 0, note: "Drive-through penalty served during the race" },
        { position: 12, code: "BEA", team: "Haas", gap: "+2 laps", status: "Finished", points: 0 },
        { position: 13, code: "COL", name: "Franco Colapinto", team: "Alpine", gap: "+2 laps", status: "Finished", points: 0 },
        { position: 14, code: "BOR", team: "Kick Sauber", gap: "+2 laps", status: "Finished", points: 0 },
        { position: 15, code: "STR", team: "Aston Martin", gap: "+2 laps", status: "Finished", points: 0 },
        { position: 16, code: "HUL", team: "Kick Sauber", gap: "+2 laps", status: "Finished", points: 0 },
        { position: 17, code: "TSU", team: "Red Bull Racing", gap: "+2 laps", status: "Finished", points: 0 },
        { position: 18, code: "ANT", team: "Mercedes", gap: "+3 laps", status: "Finished", points: 0 },
        { position: "NC", code: "ALO", team: "Aston Martin", status: "DNF", points: 0, note: "Completed 36 laps" },
        { position: "NC", code: "GAS", team: "Alpine", status: "DNF", points: 0, note: "Completed 7 laps" }
      ],

      strategy: [
        "Monaco used a mandatory two-stop format, making race strategy unusually important for the street circuit.",
        "Max Verstappen ran an alternate strategy and led until the penultimate lap before making his final stop.",
        "Lando Norris controlled the crucial track position phases and converted pole into victory."
      ],

      keyMoments: [
        "Lando Norris converted pole position into victory.",
        "Charles Leclerc chased Norris to the finish and took second at his home Grand Prix.",
        "Oscar Piastri completed the podium for McLaren.",
        "Fernando Alonso retired after 36 laps.",
        "Pierre Gasly retired early after completing seven laps."
      ],

      penalties: [
        "George Russell served a drive-through penalty after leaving the track and gaining an advantage while passing Alex Albon.",
        "Lewis Hamilton started seventh after a three-place grid penalty from qualifying."
      ],

      notes: [
        "Charles Leclerc was voted Driver of the Day.",
        "Lando Norris set the fastest lap on lap 78.",
        "The fastest listed pit-lane time in the official pit stop summary was Lewis Hamilton's 23.565s stop."
      ]
    }
  },
  9: {
    fp1: {
      status: "Verified",
      headline: "FP1 classification",
      classification: [
        { position: 1, code: "NOR", team: "McLaren", time: "1:13.718", gap: "—", laps: 29, tyres: [] },
        { position: 2, code: "VER", team: "Red Bull Racing", time: "", gap: "+0.367s", laps: 18, tyres: [] },
        { position: 3, code: "HAM", team: "Ferrari", time: "", gap: "+0.378s", laps: 29, tyres: [] },
        { position: 4, code: "LEC", team: "Ferrari", time: "", gap: "+0.520s", laps: 31, tyres: [] },
        { position: 5, code: "PIA", team: "McLaren", time: "", gap: "+0.576s", laps: 28, tyres: [] },
        { position: 6, code: "LAW", team: "Racing Bulls", time: "", gap: "+0.621s", laps: 28, tyres: [] },
        { position: 7, code: "BEA", team: "Haas", time: "", gap: "+0.879s", laps: 26, tyres: [] },
        { position: 8, code: "HAD", team: "Racing Bulls", time: "", gap: "+0.887s", laps: 26, tyres: [] },
        { position: 9, code: "TSU", team: "Red Bull Racing", time: "", gap: "+0.925s", laps: 27, tyres: [] },
        { position: 10, code: "GAS", team: "Alpine", time: "", gap: "+1.028s", laps: 28, tyres: [] },
        { position: 11, code: "RUS", team: "Mercedes", time: "", gap: "+1.033s", laps: 32, tyres: [] },
        { position: 12, code: "STR", team: "Aston Martin", time: "", gap: "+1.068s", laps: 24, tyres: [] },
        { position: 13, code: "ALO", team: "Aston Martin", time: "", gap: "+1.080s", laps: 20, tyres: [] },
        { position: 14, code: "HUL", team: "Kick Sauber", time: "", gap: "+1.147s", laps: 21, tyres: [] },
        { position: 15, code: "SAI", team: "Williams", time: "", gap: "+1.217s", laps: 26, tyres: [] },
        { position: 16, code: "BOR", team: "Kick Sauber", time: "", gap: "+1.437s", laps: 23, tyres: [] },
        { position: 17, code: "HIR", name: "Ryo Hirakawa", team: "Haas", time: "", gap: "+1.580s", laps: 23, tyres: [] },
        { position: 18, code: "ANT", team: "Mercedes", time: "", gap: "+1.651s", laps: 31, tyres: [] },
        { position: 19, code: "MAR", name: "Victor Martins", team: "Williams", time: "", gap: "+1.804s", laps: 26, tyres: [] },
        { position: 20, code: "COL", name: "Franco Colapinto", team: "Alpine", time: "", gap: "+1.812s", laps: 19, tyres: [] }
      ],
      notes: [
        "Lando Norris topped FP1 for McLaren.",
        "Ryo Hirakawa appeared for Haas and Victor Martins appeared for Williams in FP1."
      ]
    },

    fp2: {
      status: "Verified",
      headline: "FP2 classification",
      classification: [
        { position: 1, code: "PIA", team: "McLaren", time: "1:12.760", gap: "—", laps: 28, tyres: [] },
        { position: 2, code: "RUS", team: "Mercedes", time: "", gap: "+0.286s", laps: 32, tyres: [] },
        { position: 3, code: "VER", team: "Red Bull Racing", time: "", gap: "+0.310s", laps: 30, tyres: [] },
        { position: 4, code: "NOR", team: "McLaren", time: "", gap: "+0.310s", laps: 31, tyres: [] },
        { position: 5, code: "LEC", team: "Ferrari", time: "", gap: "+0.500s", laps: 33, tyres: [] },
        { position: 6, code: "ANT", team: "Mercedes", time: "", gap: "+0.538s", laps: 31, tyres: [] },
        { position: 7, code: "ALO", team: "Aston Martin", time: "", gap: "+0.541s", laps: 28, tyres: [] },
        { position: 8, code: "GAS", team: "Alpine", time: "", gap: "+0.625s", laps: 30, tyres: [] },
        { position: 9, code: "HAD", team: "Racing Bulls", time: "", gap: "+0.640s", laps: 29, tyres: [] },
        { position: 10, code: "LAW", team: "Racing Bulls", time: "", gap: "+0.734s", laps: 29, tyres: [] },
        { position: 11, code: "HAM", team: "Ferrari", time: "", gap: "+0.773s", laps: 29, tyres: [] },
        { position: 12, code: "HUL", team: "Kick Sauber", time: "", gap: "+0.832s", laps: 30, tyres: [] },
        { position: 13, code: "TSU", team: "Red Bull Racing", time: "", gap: "+0.923s", laps: 31, tyres: [] },
        { position: 14, code: "SAI", team: "Williams", time: "", gap: "+0.961s", laps: 34, tyres: [] },
        { position: 15, code: "ALB", team: "Williams", time: "", gap: "+1.079s", laps: 32, tyres: [] },
        { position: 16, code: "STR", team: "Aston Martin", time: "", gap: "+1.079s", laps: 17, tyres: [] },
        { position: 17, code: "BOR", team: "Kick Sauber", time: "", gap: "+1.199s", laps: 27, tyres: [] },
        { position: 18, code: "OCO", team: "Haas", time: "", gap: "+1.245s", laps: 30, tyres: [] },
        { position: 19, code: "BEA", team: "Haas", time: "", gap: "+1.366s", laps: 20, tyres: [] },
        { position: 20, code: "COL", name: "Franco Colapinto", team: "Alpine", time: "", gap: "+1.543s", laps: 31, tyres: [] }
      ],
      notes: [
        "Oscar Piastri topped FP2 for McLaren.",
        "George Russell was second, with Max Verstappen and Lando Norris setting identical gaps behind Piastri."
      ]
    },

    fp3: {
      status: "Verified",
      headline: "FP3 classification",
      classification: [
        { position: 1, code: "PIA", team: "McLaren", time: "1:12.387", gap: "—", laps: 14, tyres: [] },
        { position: 2, code: "NOR", team: "McLaren", time: "", gap: "+0.526s", laps: 18, tyres: [] },
        { position: 3, code: "LEC", team: "Ferrari", time: "", gap: "+0.743s", laps: 17, tyres: [] },
        { position: 4, code: "RUS", team: "Mercedes", time: "", gap: "+0.752s", laps: 18, tyres: [] },
        { position: 5, code: "VER", team: "Red Bull Racing", time: "", gap: "+0.988s", laps: 14, tyres: [] },
        { position: 6, code: "HAD", team: "Racing Bulls", time: "", gap: "+0.995s", laps: 17, tyres: [] },
        { position: 7, code: "ANT", team: "Mercedes", time: "", gap: "+1.018s", laps: 12, tyres: [] },
        { position: 8, code: "ALO", team: "Aston Martin", time: "", gap: "+1.027s", laps: 17, tyres: [] },
        { position: 9, code: "HAM", team: "Ferrari", time: "", gap: "+1.140s", laps: 17, tyres: [] },
        { position: 10, code: "LAW", team: "Racing Bulls", time: "", gap: "+1.250s", laps: 18, tyres: [] },
        { position: 11, code: "BOR", team: "Kick Sauber", time: "", gap: "+1.335s", laps: 19, tyres: [] },
        { position: 12, code: "HUL", team: "Kick Sauber", time: "", gap: "+1.346s", laps: 18, tyres: [] },
        { position: 13, code: "SAI", team: "Williams", time: "", gap: "+1.371s", laps: 16, tyres: [] },
        { position: 14, code: "TSU", team: "Red Bull Racing", time: "", gap: "+1.505s", laps: 13, tyres: [] },
        { position: 15, code: "STR", team: "Aston Martin", time: "", gap: "+1.517s", laps: 20, tyres: [] },
        { position: 16, code: "GAS", team: "Alpine", time: "", gap: "+1.567s", laps: 20, tyres: [] },
        { position: 17, code: "COL", name: "Franco Colapinto", team: "Alpine", time: "", gap: "+1.698s", laps: 23, tyres: [] },
        { position: 18, code: "OCO", team: "Haas", time: "", gap: "+1.751s", laps: 14, tyres: [] },
        { position: 19, code: "ALB", team: "Williams", time: "", gap: "+1.902s", laps: 5, tyres: [] },
        { position: 20, code: "BEA", team: "Haas", time: "", gap: "+2.073s", laps: 12, tyres: [] }
      ],
      notes: [
        "Oscar Piastri topped FP3 ahead of Lando Norris.",
        "McLaren finished first and second before qualifying."
      ]
    },

    qualifying: {
      status: "Verified",
      pole: "PIA",

      q1: {
        classification: [
          { position: 1, code: "PIA", time: "1:12.551" },
          { position: 2, code: "NOR", time: "1:12.799" },
          { position: 3, code: "VER", time: "1:12.798" },
          { position: 4, code: "RUS", time: "1:12.806" },
          { position: 5, code: "HAM", time: "1:13.058" },
          { position: 6, code: "ANT", time: "1:12.815" },
          { position: 7, code: "LEC", time: "1:13.014" },
          { position: 8, code: "GAS", time: "1:13.081" },
          { position: 9, code: "HAD", time: "1:13.139" },
          { position: 10, code: "ALO", time: "1:13.102" },
          { position: 11, code: "ALB", time: "1:13.044" },
          { position: 12, code: "BOR", time: "1:13.045" },
          { position: 13, code: "LAW", time: "1:13.039" },
          { position: 14, code: "STR", time: "1:13.038" },
          { position: 15, code: "BEA", time: "1:13.074" },
          { position: 16, code: "HUL", time: "1:13.190" },
          { position: 17, code: "OCO", time: "1:13.201" },
          { position: 18, code: "SAI", time: "1:13.203" },
          { position: 19, code: "COL", name: "Franco Colapinto", time: "1:13.334" },
          { position: 20, code: "TSU", time: "1:13.385" }
        ]
      },

      q2: {
        classification: [
          { position: 1, code: "PIA", time: "1:11.998" },
          { position: 2, code: "NOR", time: "1:12.056" },
          { position: 3, code: "VER", time: "1:12.358" },
          { position: 4, code: "RUS", time: "1:12.407" },
          { position: 5, code: "HAM", time: "1:12.447" },
          { position: 6, code: "ANT", time: "1:12.585" },
          { position: 7, code: "LEC", time: "1:12.495" },
          { position: 8, code: "GAS", time: "1:12.611" },
          { position: 9, code: "HAD", time: "1:12.461" },
          { position: 10, code: "ALO", time: "1:12.523" },
          { position: 11, code: "ALB", time: "1:12.641" },
          { position: 12, code: "BOR", time: "1:12.756" },
          { position: 13, code: "LAW", time: "1:12.763" },
          { position: 14, code: "STR", time: "1:13.058" },
          { position: 15, code: "BEA", time: "1:13.315" }
        ]
      },

      q3: {
        classification: [
          { position: 1, code: "PIA", time: "1:11.546" },
          { position: 2, code: "NOR", time: "1:11.755" },
          { position: 3, code: "VER", time: "1:11.848" },
          { position: 4, code: "RUS", time: "1:11.848" },
          { position: 5, code: "HAM", time: "1:12.045" },
          { position: 6, code: "ANT", time: "1:12.111" },
          { position: 7, code: "LEC", time: "1:12.131" },
          { position: 8, code: "GAS", time: "1:12.199" },
          { position: 9, code: "HAD", time: "1:12.252" },
          { position: 10, code: "ALO", time: "1:12.284" }
        ]
      },

      notes: [
        "Oscar Piastri took pole position for McLaren.",
        "Lando Norris completed a McLaren front-row lockout.",
        "Max Verstappen and George Russell set identical Q3 times, with Verstappen classified ahead."
      ]
    },

    startingGrid: {
      status: "Verified",
      poleSide: "left",
      positions: [
        { grid: 1, code: "PIA", team: "McLaren", qualified: 1, note: "Pole position" },
        { grid: 2, code: "NOR", team: "McLaren", qualified: 2 },
        { grid: 3, code: "VER", team: "Red Bull Racing", qualified: 3 },
        { grid: 4, code: "RUS", team: "Mercedes", qualified: 4 },
        { grid: 5, code: "HAM", team: "Ferrari", qualified: 5 },
        { grid: 6, code: "ANT", team: "Mercedes", qualified: 6 },
        { grid: 7, code: "LEC", team: "Ferrari", qualified: 7 },
        { grid: 8, code: "GAS", team: "Alpine", qualified: 8 },
        { grid: 9, code: "HAD", team: "Racing Bulls", qualified: 9 },
        { grid: 10, code: "ALO", team: "Aston Martin", qualified: 10 },
        { grid: 11, code: "ALB", team: "Williams", qualified: 11 },
        { grid: 12, code: "BOR", team: "Kick Sauber", qualified: 12 },
        { grid: 13, code: "LAW", team: "Racing Bulls", qualified: 13 },
        { grid: 14, code: "BEA", team: "Haas", qualified: 15, note: "Moved up after Lance Stroll withdrew" },
        { grid: 15, code: "HUL", team: "Kick Sauber", qualified: 16 },
        { grid: 16, code: "OCO", team: "Haas", qualified: 17 },
        { grid: 17, code: "SAI", team: "Williams", qualified: 18 },
        { grid: 18, code: "COL", name: "Franco Colapinto", team: "Alpine", qualified: 19 },
        {
          grid: 19,
          code: "TSU",
          team: "Red Bull Racing",
          qualified: 20,
          reason: "Required to start from the pit lane after Parc Ferme changes"
        }
      ],
      notes: [
        "Oscar Piastri started from pole.",
        "Lance Stroll withdrew due to injury.",
        "Yuki Tsunoda was required to start from the pit lane after his car was modified under Parc Ferme conditions."
      ]
    },

    race: {
      status: "Verified",

      fastestLap: {
        code: "PIA",
        time: "1:15.743",
        lap: 61
      },

      fastestPitStop: {
        team: "Mercedes",
        driver: "RUS",
        time: "21.739s pit-lane time"
      },

      driverOfTheDay: "VER",

      podium: [
        { position: 1, code: "PIA", team: "McLaren", time: "1:32:57.375" },
        { position: 2, code: "NOR", team: "McLaren", gap: "+2.471s" },
        { position: 3, code: "LEC", team: "Ferrari", gap: "+10.455s" }
      ],

      fullClassification: [
        { position: 1, code: "PIA", team: "McLaren", time: "1:32:57.375", status: "Finished", points: 25 },
        { position: 2, code: "NOR", team: "McLaren", gap: "+2.471s", status: "Finished", points: 18 },
        { position: 3, code: "LEC", team: "Ferrari", gap: "+10.455s", status: "Finished", points: 15 },
        { position: 4, code: "RUS", team: "Mercedes", gap: "+11.359s", status: "Finished", points: 12 },
        { position: 5, code: "HUL", team: "Kick Sauber", gap: "+13.648s", status: "Finished", points: 10 },
        { position: 6, code: "HAM", team: "Ferrari", gap: "+15.508s", status: "Finished", points: 8 },
        { position: 7, code: "HAD", team: "Racing Bulls", gap: "+16.022s", status: "Finished", points: 6 },
        { position: 8, code: "GAS", team: "Alpine", gap: "+17.882s", status: "Finished", points: 4 },
        { position: 9, code: "ALO", team: "Aston Martin", gap: "+21.564s", status: "Finished", points: 2 },
        { position: 10, code: "VER", team: "Red Bull Racing", gap: "+21.826s", status: "Finished", points: 1, note: "10-second time penalty for causing a collision" },
        { position: 11, code: "LAW", team: "Racing Bulls", gap: "+25.532s", status: "Finished", points: 0 },
        { position: 12, code: "BOR", team: "Kick Sauber", gap: "+25.996s", status: "Finished", points: 0 },
        { position: 13, code: "TSU", team: "Red Bull Racing", gap: "+28.822s", status: "Finished", points: 0 },
        { position: 14, code: "SAI", team: "Williams", gap: "+29.309s", status: "Finished", points: 0 },
        { position: 15, code: "COL", name: "Franco Colapinto", team: "Alpine", gap: "+31.381s", status: "Finished", points: 0 },
        { position: 16, code: "OCO", team: "Haas", gap: "+32.197s", status: "Finished", points: 0 },
        { position: 17, code: "BEA", team: "Haas", gap: "+37.065s", status: "Finished", points: 0, note: "10-second time penalty for leaving the track and gaining an advantage" },
        { position: "NC", code: "ANT", team: "Mercedes", status: "DNF", points: 0, note: "Completed 53 laps" },
        { position: "NC", code: "ALB", team: "Williams", status: "DNF", points: 0, note: "Completed 27 laps" }
      ],

      strategy: [
        "Oscar Piastri controlled the race from pole and managed the late Safety Car restart to secure victory.",
        "The late Safety Car reshuffled tyre choices, leaving Max Verstappen vulnerable on hard tyres while several rivals restarted on softs."
      ],

      keyMoments: [
        "Oscar Piastri converted pole into victory.",
        "McLaren completed a one-two finish with Piastri ahead of Norris.",
        "Charles Leclerc finished third for Ferrari.",
        "Nico Hulkenberg delivered a major result for Kick Sauber with fifth.",
        "Kimi Antonelli retired with an issue, triggering the late Safety Car.",
        "Max Verstappen dropped to tenth after a 10-second penalty for causing a collision with George Russell."
      ],

      penalties: [
        "Max Verstappen received a 10-second time penalty for causing a collision.",
        "Oliver Bearman received a 10-second time penalty for leaving the track and gaining an advantage."
      ],

      notes: [
        "Oscar Piastri set the fastest lap on lap 61.",
        "Max Verstappen was voted Driver of the Day.",
        "George Russell had the quickest listed pit-lane time in the official pit stop summary."
      ]
    }
  },
  10: {
    fp1: {
      status: "Verified",
      headline: "FP1 classification",
      classification: [
        { position: 1, code: "VER", team: "Red Bull Racing", time: "1:13.193", gap: "—", laps: 28, tyres: [] },
        { position: 2, code: "ALB", team: "Williams", time: "", gap: "+0.039s", laps: 28, tyres: [] },
        { position: 3, code: "SAI", team: "Williams", time: "", gap: "+0.082s", laps: 31, tyres: [] },
        { position: 4, code: "RUS", team: "Mercedes", time: "", gap: "+0.342s", laps: 29, tyres: [] },
        { position: 5, code: "HAM", team: "Ferrari", time: "", gap: "+0.427s", laps: 30, tyres: [] },
        { position: 6, code: "HAD", team: "Racing Bulls", time: "", gap: "+0.438s", laps: 31, tyres: [] },
        { position: 7, code: "NOR", team: "McLaren", time: "", gap: "+0.458s", laps: 30, tyres: [] },
        { position: 8, code: "LAW", team: "Racing Bulls", time: "", gap: "+0.544s", laps: 30, tyres: [] },
        { position: 9, code: "GAS", team: "Alpine", time: "", gap: "+0.624s", laps: 29, tyres: [] },
        { position: 10, code: "LEC", team: "Ferrari", time: "", gap: "+0.692s", laps: 9, tyres: [] },
        { position: 11, code: "TSU", team: "Red Bull Racing", time: "", gap: "+0.734s", laps: 27, tyres: [] },
        { position: 12, code: "ALO", team: "Aston Martin", time: "", gap: "+0.779s", laps: 25, tyres: [] },
        { position: 13, code: "ANT", team: "Mercedes", time: "", gap: "+0.809s", laps: 30, tyres: [] },
        { position: 14, code: "PIA", team: "McLaren", time: "", gap: "+1.005s", laps: 28, tyres: [] },
        { position: 15, code: "STR", team: "Aston Martin", time: "", gap: "+1.010s", laps: 25, tyres: [] },
        { position: 16, code: "BOR", team: "Kick Sauber", time: "", gap: "+1.131s", laps: 30, tyres: [] },
        { position: 17, code: "BEA", team: "Haas", time: "", gap: "+1.327s", laps: 30, tyres: [] },
        { position: 18, code: "OCO", team: "Haas", time: "", gap: "+1.412s", laps: 23, tyres: [] },
        { position: 19, code: "COL", name: "Franco Colapinto", team: "Alpine", time: "", gap: "+1.452s", laps: 29, tyres: [] },
        { position: 20, code: "HUL", team: "Kick Sauber", time: "", gap: "+1.628s", laps: 28, tyres: [] }
      ],
      notes: [
        "Max Verstappen topped FP1 in Montréal.",
        "Williams showed strong early pace with Alexander Albon second and Carlos Sainz third."
      ]
    },

    fp2: {
      status: "Verified",
      headline: "FP2 classification",
      classification: [
        { position: 1, code: "RUS", team: "Mercedes", time: "1:12.123", gap: "—", laps: 33, tyres: [] },
        { position: 2, code: "NOR", team: "McLaren", time: "", gap: "+0.028s", laps: 32, tyres: [] },
        { position: 3, code: "ANT", team: "Mercedes", time: "", gap: "+0.288s", laps: 33, tyres: [] },
        { position: 4, code: "ALB", team: "Williams", time: "", gap: "+0.322s", laps: 36, tyres: [] },
        { position: 5, code: "ALO", team: "Aston Martin", time: "", gap: "+0.335s", laps: 31, tyres: [] },
        { position: 6, code: "PIA", team: "McLaren", time: "", gap: "+0.439s", laps: 32, tyres: [] },
        { position: 7, code: "SAI", team: "Williams", time: "", gap: "+0.508s", laps: 37, tyres: [] },
        { position: 8, code: "HAM", team: "Ferrari", time: "", gap: "+0.530s", laps: 34, tyres: [] },
        { position: 9, code: "VER", team: "Red Bull Racing", time: "", gap: "+0.543s", laps: 31, tyres: [] },
        { position: 10, code: "LAW", team: "Racing Bulls", time: "", gap: "+0.628s", laps: 30, tyres: [] },
        { position: 11, code: "HAD", team: "Racing Bulls", time: "", gap: "+0.676s", laps: 31, tyres: [] },
        { position: 12, code: "GAS", team: "Alpine", time: "", gap: "+0.751s", laps: 34, tyres: [] },
        { position: 13, code: "BOR", team: "Kick Sauber", time: "", gap: "+0.773s", laps: 32, tyres: [] },
        { position: 14, code: "HUL", team: "Kick Sauber", time: "", gap: "+0.791s", laps: 33, tyres: [] },
        { position: 15, code: "TSU", team: "Red Bull Racing", time: "", gap: "+0.816s", laps: 35, tyres: [] },
        { position: 16, code: "BEA", team: "Haas", time: "", gap: "+0.957s", laps: 36, tyres: [] },
        { position: 17, code: "OCO", team: "Haas", time: "", gap: "+1.052s", laps: 33, tyres: [] },
        { position: 18, code: "COL", name: "Franco Colapinto", team: "Alpine", time: "", gap: "+1.775s", laps: 33, tyres: [] },
        { position: 19, code: "STR", team: "Aston Martin", time: "", gap: "No time", laps: 2, tyres: [] }
      ],
      notes: [
        "George Russell topped FP2 for Mercedes.",
        "Charles Leclerc did not set a time in FP2 after his FP1 crash."
      ]
    },

    fp3: {
      status: "Verified",
      headline: "FP3 classification",
      classification: [
        { position: 1, code: "NOR", team: "McLaren", time: "1:11.799", gap: "—", laps: 24, tyres: [] },
        { position: 2, code: "LEC", team: "Ferrari", time: "", gap: "+0.078s", laps: 29, tyres: [] },
        { position: 3, code: "RUS", team: "Mercedes", time: "", gap: "+0.151s", laps: 20, tyres: [] },
        { position: 4, code: "HAM", team: "Ferrari", time: "", gap: "+0.251s", laps: 26, tyres: [] },
        { position: 5, code: "VER", team: "Red Bull Racing", time: "", gap: "+0.273s", laps: 20, tyres: [] },
        { position: 6, code: "ALO", team: "Aston Martin", time: "", gap: "+0.448s", laps: 21, tyres: [] },
        { position: 7, code: "ANT", team: "Mercedes", time: "", gap: "+0.549s", laps: 21, tyres: [] },
        { position: 8, code: "PIA", team: "McLaren", time: "", gap: "+0.720s", laps: 18, tyres: [] },
        { position: 9, code: "SAI", team: "Williams", time: "", gap: "+0.720s", laps: 22, tyres: [] },
        { position: 10, code: "ALB", team: "Williams", time: "", gap: "+0.774s", laps: 22, tyres: [] },
        { position: 11, code: "HAD", team: "Racing Bulls", time: "", gap: "+0.852s", laps: 22, tyres: [] },
        { position: 12, code: "GAS", team: "Alpine", time: "", gap: "+0.885s", laps: 27, tyres: [] },
        { position: 13, code: "LAW", team: "Racing Bulls", time: "", gap: "+0.992s", laps: 27, tyres: [] },
        { position: 14, code: "STR", team: "Aston Martin", time: "", gap: "+0.995s", laps: 28, tyres: [] },
        { position: 15, code: "BEA", team: "Haas", time: "", gap: "+1.026s", laps: 27, tyres: [] },
        { position: 16, code: "OCO", team: "Haas", time: "", gap: "+1.028s", laps: 22, tyres: [] },
        { position: 17, code: "COL", name: "Franco Colapinto", team: "Alpine", time: "", gap: "+1.261s", laps: 27, tyres: [] },
        { position: 18, code: "HUL", team: "Kick Sauber", time: "", gap: "+1.273s", laps: 19, tyres: [] },
        { position: 19, code: "BOR", team: "Kick Sauber", time: "", gap: "+1.373s", laps: 22, tyres: [] },
        { position: 20, code: "TSU", team: "Red Bull Racing", time: "", gap: "+1.774s", laps: 14, tyres: [] }
      ],
      notes: [
        "Lando Norris topped FP3 ahead of Charles Leclerc.",
        "George Russell remained competitive for Mercedes before qualifying."
      ]
    },

    qualifying: {
      status: "Verified",
      pole: "RUS",

      q1: {
        classification: [
          { position: 1, code: "RUS", time: "1:12.075" },
          { position: 2, code: "VER", time: "1:12.054" },
          { position: 3, code: "PIA", time: "1:11.939" },
          { position: 4, code: "ANT", time: "1:12.279" },
          { position: 5, code: "HAM", time: "1:11.952" },
          { position: 6, code: "ALO", time: "1:12.073" },
          { position: 7, code: "NOR", time: "1:11.826" },
          { position: 8, code: "LEC", time: "1:12.038" },
          { position: 9, code: "HAD", time: "1:12.211" },
          { position: 10, code: "ALB", time: "1:12.090" },
          { position: 11, code: "TSU", time: "1:12.334" },
          { position: 12, code: "COL", name: "Franco Colapinto", time: "1:12.234" },
          { position: 13, code: "HUL", time: "1:12.323" },
          { position: 14, code: "BEA", time: "1:12.306" },
          { position: 15, code: "OCO", time: "1:12.378" },
          { position: 16, code: "BOR", time: "1:12.385" },
          { position: 17, code: "SAI", time: "1:12.398" },
          { position: 18, code: "STR", time: "1:12.517" },
          { position: 19, code: "LAW", time: "1:12.525" },
          { position: 20, code: "GAS", time: "1:12.667" }
        ]
      },

      q2: {
        classification: [
          { position: 1, code: "RUS", time: "1:11.570" },
          { position: 2, code: "VER", time: "1:11.638" },
          { position: 3, code: "PIA", time: "1:11.715" },
          { position: 4, code: "ANT", time: "1:11.974" },
          { position: 5, code: "HAM", time: "1:11.885" },
          { position: 6, code: "ALO", time: "1:11.805" },
          { position: 7, code: "NOR", time: "1:11.599" },
          { position: 8, code: "LEC", time: "1:11.626" },
          { position: 9, code: "HAD", time: "1:12.003" },
          { position: 10, code: "ALB", time: "1:11.892" },
          { position: 11, code: "TSU", time: "1:12.102" },
          { position: 12, code: "COL", name: "Franco Colapinto", time: "1:12.142" },
          { position: 13, code: "HUL", time: "1:12.183" },
          { position: 14, code: "BEA", time: "1:12.340" },
          { position: 15, code: "OCO", time: "1:12.634" }
        ]
      },

      q3: {
        classification: [
          { position: 1, code: "RUS", time: "1:10.899" },
          { position: 2, code: "VER", time: "1:11.059" },
          { position: 3, code: "PIA", time: "1:11.120" },
          { position: 4, code: "ANT", time: "1:11.391" },
          { position: 5, code: "HAM", time: "1:11.526" },
          { position: 6, code: "ALO", time: "1:11.586" },
          { position: 7, code: "NOR", time: "1:11.625" },
          { position: 8, code: "LEC", time: "1:11.682" },
          { position: 9, code: "HAD", time: "1:11.867" },
          { position: 10, code: "ALB", time: "1:11.907" }
        ]
      },

      notes: [
        "George Russell took pole position for Mercedes.",
        "Yuki Tsunoda received a 10-place grid penalty for overtaking under red flags in practice.",
        "Isack Hadjar received a three-place grid penalty for impeding in Qualifying."
      ]
    },

    startingGrid: {
      status: "Verified",
      poleSide: "left",
      positions: [
        { grid: 1, code: "RUS", team: "Mercedes", qualified: 1, note: "Pole position" },
        { grid: 2, code: "VER", team: "Red Bull Racing", qualified: 2 },
        { grid: 3, code: "PIA", team: "McLaren", qualified: 3 },
        { grid: 4, code: "ANT", team: "Mercedes", qualified: 4 },
        { grid: 5, code: "HAM", team: "Ferrari", qualified: 5 },
        { grid: 6, code: "ALO", team: "Aston Martin", qualified: 6 },
        { grid: 7, code: "NOR", team: "McLaren", qualified: 7 },
        { grid: 8, code: "LEC", team: "Ferrari", qualified: 8 },
        { grid: 9, code: "ALB", team: "Williams", qualified: 10 },
        { grid: 10, code: "COL", name: "Franco Colapinto", team: "Alpine", qualified: 12 },
        { grid: 11, code: "HUL", team: "Kick Sauber", qualified: 13 },
        { grid: 12, code: "HAD", team: "Racing Bulls", qualified: 9, reason: "Three-place grid penalty for impeding in Qualifying" },
        { grid: 13, code: "BEA", team: "Haas", qualified: 14 },
        { grid: 14, code: "OCO", team: "Haas", qualified: 15 },
        { grid: 15, code: "BOR", team: "Kick Sauber", qualified: 16 },
        { grid: 16, code: "SAI", team: "Williams", qualified: 17 },
        { grid: 17, code: "STR", team: "Aston Martin", qualified: 18 },
        { grid: 18, code: "TSU", team: "Red Bull Racing", qualified: 11, reason: "10-place grid penalty for overtaking under red flags in practice" },
        { grid: 19, code: "LAW", team: "Racing Bulls", qualified: 19, reason: "Required to start from the pit lane after Parc Ferme changes and additional power unit elements" },
        { grid: 20, code: "GAS", team: "Alpine", qualified: 20, reason: "Required to start from the pit lane after Parc Ferme changes and additional power unit elements" }
      ],
      notes: [
        "George Russell started from pole.",
        "Yuki Tsunoda and Isack Hadjar served grid penalties.",
        "Pierre Gasly and Liam Lawson were required to start from the pit lane."
      ]
    },

    race: {
      status: "Verified",

      fastestLap: {
        code: "RUS",
        time: "1:14.119",
        lap: 63
      },

      fastestPitStop: {
        team: "Red Bull Racing",
        driver: "VER",
        time: "23.121s pit-lane time"
      },

      driverOfTheDay: "ANT",

      podium: [
        { position: 1, code: "RUS", team: "Mercedes", time: "1:31:52.688" },
        { position: 2, code: "VER", team: "Red Bull Racing", gap: "+0.228s" },
        { position: 3, code: "ANT", team: "Mercedes", gap: "+1.014s" }
      ],

      fullClassification: [
        { position: 1, code: "RUS", team: "Mercedes", time: "1:31:52.688", status: "Finished", points: 25 },
        { position: 2, code: "VER", team: "Red Bull Racing", gap: "+0.228s", status: "Finished", points: 18 },
        { position: 3, code: "ANT", team: "Mercedes", gap: "+1.014s", status: "Finished", points: 15 },
        { position: 4, code: "PIA", team: "McLaren", gap: "+2.109s", status: "Finished", points: 12 },
        { position: 5, code: "LEC", team: "Ferrari", gap: "+3.442s", status: "Finished", points: 10 },
        { position: 6, code: "HAM", team: "Ferrari", gap: "+10.713s", status: "Finished", points: 8 },
        { position: 7, code: "ALO", team: "Aston Martin", gap: "+10.972s", status: "Finished", points: 6 },
        { position: 8, code: "HUL", team: "Kick Sauber", gap: "+15.364s", status: "Finished", points: 4 },
        { position: 9, code: "OCO", team: "Haas", gap: "+1 lap", status: "Finished", points: 2 },
        { position: 10, code: "SAI", team: "Williams", gap: "+1 lap", status: "Finished", points: 1 },
        { position: 11, code: "BEA", team: "Haas", gap: "+1 lap", status: "Finished", points: 0 },
        { position: 12, code: "TSU", team: "Red Bull Racing", gap: "+1 lap", status: "Finished", points: 0 },
        { position: 13, code: "COL", name: "Franco Colapinto", team: "Alpine", gap: "+1 lap", status: "Finished", points: 0 },
        { position: 14, code: "BOR", team: "Kick Sauber", gap: "+1 lap", status: "Finished", points: 0 },
        { position: 15, code: "GAS", team: "Alpine", gap: "+1 lap", status: "Finished", points: 0 },
        { position: 16, code: "HAD", team: "Racing Bulls", gap: "+1 lap", status: "Finished", points: 0 },
        { position: 17, code: "STR", team: "Aston Martin", gap: "+1 lap", status: "Finished", points: 0 },
        { position: 18, code: "NOR", team: "McLaren", status: "DNF", points: 0, note: "Classified after 66 laps; five-second penalty for causing a collision" },
        { position: "NC", code: "LAW", team: "Racing Bulls", status: "DNF", points: 0, note: "Completed 53 laps" },
        { position: "NC", code: "ALB", team: "Williams", status: "DNF", points: 0, note: "Completed 46 laps" }
      ],

      strategy: [
        "George Russell controlled the race from pole and survived late pressure after the Safety Car.",
        "Mercedes secured a double podium with Russell winning and Kimi Antonelli finishing third."
      ],

      keyMoments: [
        "George Russell converted pole into victory.",
        "Kimi Antonelli scored his first Formula 1 podium.",
        "Lando Norris and Oscar Piastri collided late in the race, forcing Norris to retire.",
        "Max Verstappen finished just 0.228s behind Russell."
      ],

      penalties: [
        "Lando Norris received a five-second penalty for causing a collision."
      ],

      notes: [
        "Kimi Antonelli was voted Driver of the Day after taking his maiden F1 podium.",
        "George Russell set the fastest lap on lap 63.",
        "Max Verstappen had the quickest listed pit-lane time in the official pit stop summary."
      ]
    }
  },
  11: {
    fp1: {
      status: "Verified",
      headline: "FP1 classification",
      classification: [
        { position: 1, code: "RUS", team: "Mercedes", time: "1:05.542", gap: "—", laps: 34, tyres: [] },
        { position: 2, code: "VER", team: "Red Bull Racing", time: "", gap: "+0.065s", laps: 30, tyres: [] },
        { position: 3, code: "PIA", team: "McLaren", time: "", gap: "+0.155s", laps: 33, tyres: [] },
        { position: 4, code: "DUN", name: "Alexander Dunne", team: "McLaren", time: "", gap: "+0.224s", laps: 29, tyres: [] },
        { position: 5, code: "GAS", team: "Alpine", time: "", gap: "+0.238s", laps: 34, tyres: [] },
        { position: 6, code: "BOR", team: "Kick Sauber", time: "", gap: "+0.332s", laps: 35, tyres: [] },
        { position: 7, code: "ALB", team: "Williams", time: "", gap: "+0.404s", laps: 35, tyres: [] },
        { position: 8, code: "SAI", team: "Williams", time: "", gap: "+0.475s", laps: 33, tyres: [] },
        { position: 9, code: "HAM", team: "Ferrari", time: "", gap: "+0.557s", laps: 20, tyres: [] },
        { position: 10, code: "HAD", team: "Racing Bulls", time: "", gap: "+0.568s", laps: 33, tyres: [] },
        { position: 11, code: "ANT", team: "Mercedes", time: "", gap: "+0.588s", laps: 35, tyres: [] },
        { position: 12, code: "HUL", team: "Kick Sauber", time: "", gap: "+0.598s", laps: 32, tyres: [] },
        { position: 13, code: "STR", team: "Aston Martin", time: "", gap: "+0.618s", laps: 32, tyres: [] },
        { position: 14, code: "ALO", team: "Aston Martin", time: "", gap: "+0.628s", laps: 32, tyres: [] },
        { position: 15, code: "LAW", team: "Racing Bulls", time: "", gap: "+0.647s", laps: 34, tyres: [] },
        { position: 16, code: "COL", name: "Franco Colapinto", team: "Alpine", time: "", gap: "+0.704s", laps: 34, tyres: [] },
        { position: 17, code: "TSU", team: "Red Bull Racing", time: "", gap: "+0.720s", laps: 30, tyres: [] },
        { position: 18, code: "BEG", name: "Dino Beganovic", team: "Ferrari", time: "", gap: "+0.827s", laps: 32, tyres: [] },
        { position: 19, code: "OCO", team: "Haas", time: "", gap: "+0.968s", laps: 32, tyres: [] },
        { position: 20, code: "BEA", team: "Haas", time: "", gap: "+1.196s", laps: 30, tyres: [] }
      ],
      notes: [
        "George Russell topped FP1 for Mercedes.",
        "Alexander Dunne appeared for McLaren and Dino Beganovic appeared for Ferrari."
      ]
    },

    fp2: {
      status: "Verified",
      headline: "FP2 classification",
      classification: [
        { position: 1, code: "NOR", team: "McLaren", time: "1:04.580", gap: "—", laps: 35, tyres: [] },
        { position: 2, code: "PIA", team: "McLaren", time: "", gap: "+0.157s", laps: 35, tyres: [] },
        { position: 3, code: "VER", team: "Red Bull Racing", time: "", gap: "+0.318s", laps: 24, tyres: [] },
        { position: 4, code: "STR", team: "Aston Martin", time: "", gap: "+0.442s", laps: 32, tyres: [] },
        { position: 5, code: "LEC", team: "Ferrari", time: "", gap: "+0.610s", laps: 32, tyres: [] },
        { position: 6, code: "RUS", team: "Mercedes", time: "", gap: "+0.649s", laps: 34, tyres: [] },
        { position: 7, code: "TSU", team: "Red Bull Racing", time: "", gap: "+0.712s", laps: 31, tyres: [] },
        { position: 8, code: "BOR", team: "Kick Sauber", time: "", gap: "+0.831s", laps: 31, tyres: [] },
        { position: 9, code: "ALO", team: "Aston Martin", time: "", gap: "+0.877s", laps: 31, tyres: [] },
        { position: 10, code: "HAM", team: "Ferrari", time: "", gap: "+0.931s", laps: 34, tyres: [] },
        { position: 11, code: "ANT", team: "Mercedes", time: "", gap: "+0.957s", laps: 35, tyres: [] },
        { position: 12, code: "LAW", team: "Racing Bulls", time: "", gap: "+0.963s", laps: 31, tyres: [] },
        { position: 13, code: "HAD", team: "Racing Bulls", time: "", gap: "+0.967s", laps: 34, tyres: [] },
        { position: 14, code: "GAS", team: "Alpine", time: "", gap: "+1.033s", laps: 36, tyres: [] },
        { position: 15, code: "OCO", team: "Haas", time: "", gap: "+1.118s", laps: 31, tyres: [] },
        { position: 16, code: "ALB", team: "Williams", time: "", gap: "+1.185s", laps: 37, tyres: [] },
        { position: 17, code: "SAI", team: "Williams", time: "", gap: "+1.234s", laps: 37, tyres: [] },
        { position: 18, code: "BEA", team: "Haas", time: "", gap: "+1.255s", laps: 35, tyres: [] },
        { position: 19, code: "HUL", team: "Kick Sauber", time: "", gap: "+1.338s", laps: 35, tyres: [] },
        { position: 20, code: "COL", name: "Franco Colapinto", team: "Alpine", time: "", gap: "+1.596s", laps: 34, tyres: [] }
      ],
      notes: [
        "Lando Norris topped FP2 for McLaren.",
        "Oscar Piastri completed a McLaren one-two."
      ]
    },

    fp3: {
      status: "Verified",
      headline: "FP3 classification",
      classification: [
        { position: 1, code: "NOR", team: "McLaren", time: "1:04.324", gap: "—", laps: 21, tyres: [] },
        { position: 2, code: "PIA", team: "McLaren", time: "", gap: "+0.118s", laps: 20, tyres: [] },
        { position: 3, code: "VER", team: "Red Bull Racing", time: "", gap: "+0.210s", laps: 28, tyres: [] },
        { position: 4, code: "LEC", team: "Ferrari", time: "", gap: "+0.250s", laps: 20, tyres: [] },
        { position: 5, code: "HAM", team: "Ferrari", time: "", gap: "+0.466s", laps: 23, tyres: [] },
        { position: 6, code: "RUS", team: "Mercedes", time: "", gap: "+0.694s", laps: 18, tyres: [] },
        { position: 7, code: "ANT", team: "Mercedes", time: "", gap: "+0.729s", laps: 18, tyres: [] },
        { position: 8, code: "STR", team: "Aston Martin", time: "", gap: "+0.738s", laps: 20, tyres: [] },
        { position: 9, code: "TSU", team: "Red Bull Racing", time: "", gap: "+0.815s", laps: 17, tyres: [] },
        { position: 10, code: "BOR", team: "Kick Sauber", time: "", gap: "+0.858s", laps: 18, tyres: [] },
        { position: 11, code: "LAW", team: "Racing Bulls", time: "", gap: "+0.858s", laps: 19, tyres: [] },
        { position: 12, code: "ALO", team: "Aston Martin", time: "", gap: "+0.919s", laps: 21, tyres: [] },
        { position: 13, code: "HUL", team: "Kick Sauber", time: "", gap: "+0.959s", laps: 18, tyres: [] },
        { position: 14, code: "ALB", team: "Williams", time: "", gap: "+0.990s", laps: 22, tyres: [] },
        { position: 15, code: "SAI", team: "Williams", time: "", gap: "+1.002s", laps: 21, tyres: [] },
        { position: 16, code: "BEA", team: "Haas", time: "", gap: "+1.042s", laps: 21, tyres: [] },
        { position: 17, code: "GAS", team: "Alpine", time: "", gap: "+1.042s", laps: 26, tyres: [] },
        { position: 18, code: "OCO", team: "Haas", time: "", gap: "+1.195s", laps: 21, tyres: [] },
        { position: 19, code: "COL", name: "Franco Colapinto", team: "Alpine", time: "", gap: "+1.222s", laps: 26, tyres: [] },
        { position: 20, code: "HAD", team: "Racing Bulls", time: "", gap: "+1.699s", laps: 18, tyres: [] }
      ],
      notes: [
        "Lando Norris topped FP3 ahead of Oscar Piastri.",
        "McLaren again finished first and second before qualifying."
      ]
    },

    qualifying: {
      status: "Verified",
      pole: "NOR",

      q1: {
        classification: [
          { position: 1, code: "NOR", time: "1:04.672" },
          { position: 2, code: "LEC", time: "1:05.197" },
          { position: 3, code: "PIA", time: "1:04.966" },
          { position: 4, code: "HAM", time: "1:05.115" },
          { position: 5, code: "RUS", time: "1:05.189" },
          { position: 6, code: "LAW", time: "1:05.017" },
          { position: 7, code: "VER", time: "1:05.106" },
          { position: 8, code: "BOR", time: "1:05.123" },
          { position: 9, code: "ANT", time: "1:05.178" },
          { position: 10, code: "GAS", time: "1:05.054" },
          { position: 11, code: "ALO", time: "1:05.197" },
          { position: 12, code: "ALB", time: "1:05.143" },
          { position: 13, code: "HAD", time: "1:05.063" },
          { position: 14, code: "COL", name: "Franco Colapinto", time: "1:05.278" },
          { position: 15, code: "BEA", time: "1:05.218" },
          { position: 16, code: "STR", time: "1:05.329" },
          { position: 17, code: "OCO", time: "1:05.364" },
          { position: 18, code: "TSU", time: "1:05.369" },
          { position: 19, code: "SAI", time: "1:05.582" },
          { position: 20, code: "HUL", time: "1:05.606" }
        ]
      },

      q2: {
        classification: [
          { position: 1, code: "NOR", time: "1:04.410" },
          { position: 2, code: "LEC", time: "1:04.734" },
          { position: 3, code: "PIA", time: "1:04.556" },
          { position: 4, code: "HAM", time: "1:04.896" },
          { position: 5, code: "RUS", time: "1:04.860" },
          { position: 6, code: "LAW", time: "1:05.041" },
          { position: 7, code: "VER", time: "1:04.836" },
          { position: 8, code: "BOR", time: "1:04.846" },
          { position: 9, code: "ANT", time: "1:05.052" },
          { position: 10, code: "GAS", time: "1:04.846" },
          { position: 11, code: "ALO", time: "1:05.128" },
          { position: 12, code: "ALB", time: "1:05.205" },
          { position: 13, code: "HAD", time: "1:05.226" },
          { position: 14, code: "COL", name: "Franco Colapinto", time: "1:05.288" },
          { position: 15, code: "BEA", time: "1:05.312" }
        ]
      },

      q3: {
        classification: [
          { position: 1, code: "NOR", time: "1:03.971" },
          { position: 2, code: "LEC", time: "1:04.492" },
          { position: 3, code: "PIA", time: "1:04.554" },
          { position: 4, code: "HAM", time: "1:04.582" },
          { position: 5, code: "RUS", time: "1:04.763" },
          { position: 6, code: "LAW", time: "1:04.926" },
          { position: 7, code: "VER", time: "1:04.929" },
          { position: 8, code: "BOR", time: "1:05.132" },
          { position: 9, code: "ANT", time: "1:05.276" },
          { position: 10, code: "GAS", time: "1:05.649" }
        ]
      },

      notes: [
        "Lando Norris took pole position for McLaren.",
        "Charles Leclerc qualified second for Ferrari, with Oscar Piastri third.",
        "Gabriel Bortoleto reached Q3 and qualified eighth for Kick Sauber."
      ]
    },

    startingGrid: {
      status: "Verified",
      poleSide: "left",
      positions: [
        { grid: 1, code: "NOR", team: "McLaren", qualified: 1, note: "Pole position" },
        { grid: 2, code: "LEC", team: "Ferrari", qualified: 2 },
        { grid: 3, code: "PIA", team: "McLaren", qualified: 3 },
        { grid: 4, code: "HAM", team: "Ferrari", qualified: 4 },
        { grid: 5, code: "RUS", team: "Mercedes", qualified: 5 },
        { grid: 6, code: "LAW", team: "Racing Bulls", qualified: 6 },
        { grid: 7, code: "VER", team: "Red Bull Racing", qualified: 7 },
        { grid: 8, code: "BOR", team: "Kick Sauber", qualified: 8 },
        { grid: 9, code: "ANT", team: "Mercedes", qualified: 9 },
        { grid: 10, code: "GAS", team: "Alpine", qualified: 10 },
        { grid: 11, code: "ALO", team: "Aston Martin", qualified: 11 },
        { grid: 12, code: "ALB", team: "Williams", qualified: 12 },
        { grid: 13, code: "HAD", team: "Racing Bulls", qualified: 13 },
        { grid: 14, code: "COL", name: "Franco Colapinto", team: "Alpine", qualified: 14 },
        { grid: 15, code: "BEA", team: "Haas", qualified: 15 },
        { grid: 16, code: "STR", team: "Aston Martin", qualified: 16 },
        { grid: 17, code: "OCO", team: "Haas", qualified: 17 },
        { grid: 18, code: "TSU", team: "Red Bull Racing", qualified: 18 },
        { grid: 19, code: "SAI", team: "Williams", qualified: 19 },
        { grid: 20, code: "HUL", team: "Kick Sauber", qualified: 20 }
      ],
      notes: [
        "Lando Norris started from pole.",
        "Gabriel Bortoleto started eighth after his first Q3 appearance."
      ]
    },

    race: {
      status: "Verified",

      fastestLap: {
        code: "PIA",
        time: "1:07.924",
        lap: 59
      },

      fastestPitStop: {
        team: "Williams",
        driver: "ALB",
        time: "21.210s pit-lane time"
      },

      driverOfTheDay: "BOR",

      podium: [
        { position: 1, code: "NOR", team: "McLaren", time: "1:23:47.693" },
        { position: 2, code: "PIA", team: "McLaren", gap: "+2.695s" },
        { position: 3, code: "LEC", team: "Ferrari", gap: "+19.820s" }
      ],

      fullClassification: [
        { position: 1, code: "NOR", team: "McLaren", time: "1:23:47.693", status: "Finished", points: 25 },
        { position: 2, code: "PIA", team: "McLaren", gap: "+2.695s", status: "Finished", points: 18 },
        { position: 3, code: "LEC", team: "Ferrari", gap: "+19.820s", status: "Finished", points: 15 },
        { position: 4, code: "HAM", team: "Ferrari", gap: "+29.020s", status: "Finished", points: 12 },
        { position: 5, code: "RUS", team: "Mercedes", gap: "+62.396s", status: "Finished", points: 10 },
        { position: 6, code: "LAW", team: "Racing Bulls", gap: "+67.754s", status: "Finished", points: 8 },
        { position: 7, code: "ALO", team: "Aston Martin", gap: "+1 lap", status: "Finished", points: 6 },
        { position: 8, code: "BOR", team: "Kick Sauber", gap: "+1 lap", status: "Finished", points: 4 },
        { position: 9, code: "HUL", team: "Kick Sauber", gap: "+1 lap", status: "Finished", points: 2 },
        { position: 10, code: "OCO", team: "Haas", gap: "+1 lap", status: "Finished", points: 1 },
        { position: 11, code: "BEA", team: "Haas", gap: "+1 lap", status: "Finished", points: 0 },
        { position: 12, code: "HAD", team: "Racing Bulls", gap: "+1 lap", status: "Finished", points: 0 },
        { position: 13, code: "GAS", team: "Alpine", gap: "+1 lap", status: "Finished", points: 0 },
        { position: 14, code: "STR", team: "Aston Martin", gap: "+1 lap", status: "Finished", points: 0 },
        { position: 15, code: "COL", name: "Franco Colapinto", team: "Alpine", gap: "+1 lap", status: "Finished", points: 0 },
        { position: 16, code: "TSU", team: "Red Bull Racing", gap: "+2 laps", status: "Finished", points: 0 },
        { position: "NC", code: "ALB", team: "Williams", status: "DNF", points: 0, note: "Completed 15 laps" },
        { position: "NC", code: "VER", team: "Red Bull Racing", status: "DNF", points: 0, note: "Retired on lap 1 after opening-lap collision" },
        { position: "NC", code: "ANT", team: "Mercedes", status: "DNF", points: 0, note: "Retired on lap 1 after opening-lap collision" },
        { position: "NC", code: "SAI", team: "Williams", status: "DNS", points: 0, note: "Did not start" }
      ],

      strategy: [
        "Lando Norris controlled the race from pole while Oscar Piastri kept pressure on him throughout.",
        "McLaren converted its pace into a one-two finish at the Red Bull Ring."
      ],

      keyMoments: [
        "Lando Norris converted pole into victory.",
        "Oscar Piastri finished second and set the fastest lap.",
        "Charles Leclerc completed the podium for Ferrari.",
        "Kimi Antonelli and Max Verstappen retired after an opening-lap collision.",
        "Gabriel Bortoleto scored his first Formula 1 points with eighth place."
      ],

      penalties: [],

      notes: [
        "Gabriel Bortoleto was voted Driver of the Day after scoring his maiden F1 points.",
        "Oscar Piastri set the fastest lap on lap 59.",
        "Alexander Albon had the quickest listed pit-lane time in the official pit stop summary."
      ]
    }
  },
  12: {
    fp1: {
      status: "Verified",
      headline: "FP1 classification",
      classification: [
        { position: 1, code: "HAM", team: "Ferrari", time: "1:26.892", gap: "—", laps: 26, tyres: [] },
        { position: 2, code: "NOR", team: "McLaren", time: "", gap: "+0.023s", laps: 26, tyres: [] },
        { position: 3, code: "PIA", team: "McLaren", time: "", gap: "+0.150s", laps: 28, tyres: [] },
        { position: 4, code: "LEC", team: "Ferrari", time: "", gap: "+0.203s", laps: 26, tyres: [] },
        { position: 5, code: "RUS", team: "Mercedes", time: "", gap: "+0.271s", laps: 25, tyres: [] },
        { position: 6, code: "HAD", team: "Racing Bulls", time: "", gap: "+0.325s", laps: 28, tyres: [] },
        { position: 7, code: "ALB", team: "Williams", time: "", gap: "+0.412s", laps: 30, tyres: [] },
        { position: 8, code: "LAW", team: "Racing Bulls", time: "", gap: "+0.459s", laps: 27, tyres: [] },
        { position: 9, code: "ANT", team: "Mercedes", time: "", gap: "+0.475s", laps: 25, tyres: [] },
        { position: 10, code: "VER", team: "Red Bull Racing", time: "", gap: "+0.540s", laps: 26, tyres: [] },
        { position: 11, code: "ALO", team: "Aston Martin", time: "", gap: "+0.786s", laps: 24, tyres: [] },
        { position: 12, code: "STR", team: "Aston Martin", time: "", gap: "+0.952s", laps: 22, tyres: [] },
        { position: 13, code: "SAI", team: "Williams", time: "", gap: "+1.017s", laps: 26, tyres: [] },
        { position: 14, code: "LIN", name: "Arvid Lindblad", team: "Red Bull Racing", time: "", gap: "+1.066s", laps: 22, tyres: [] },
        { position: 15, code: "OCO", team: "Haas", time: "", gap: "+1.165s", laps: 23, tyres: [] },
        { position: 16, code: "COL", name: "Franco Colapinto", team: "Alpine", time: "", gap: "+1.194s", laps: 27, tyres: [] },
        { position: 17, code: "ARO", name: "Paul Aron", team: "Kick Sauber", time: "", gap: "+1.250s", laps: 25, tyres: [] },
        { position: 18, code: "BEA", team: "Haas", time: "", gap: "+1.255s", laps: 24, tyres: [] },
        { position: 19, code: "GAS", team: "Alpine", time: "", gap: "+1.440s", laps: 23, tyres: [] },
        { position: 20, code: "BOR", team: "Kick Sauber", time: "", gap: "+1.505s", laps: 23, tyres: [] }
      ],
      notes: [
        "Lewis Hamilton topped FP1 at Silverstone for Ferrari.",
        "Arvid Lindblad drove for Red Bull Racing and Paul Aron drove for Kick Sauber in FP1."
      ]
    },

    fp2: {
      status: "Verified",
      headline: "FP2 classification",
      classification: [
        { position: 1, code: "NOR", team: "McLaren", time: "1:25.816", gap: "—", laps: 26, tyres: [] },
        { position: 2, code: "LEC", team: "Ferrari", time: "", gap: "+0.222s", laps: 29, tyres: [] },
        { position: 3, code: "HAM", team: "Ferrari", time: "", gap: "+0.301s", laps: 29, tyres: [] },
        { position: 4, code: "PIA", team: "McLaren", time: "", gap: "+0.470s", laps: 27, tyres: [] },
        { position: 5, code: "VER", team: "Red Bull Racing", time: "", gap: "+0.498s", laps: 23, tyres: [] },
        { position: 6, code: "ANT", team: "Mercedes", time: "", gap: "+0.567s", laps: 28, tyres: [] },
        { position: 7, code: "STR", team: "Aston Martin", time: "", gap: "+0.614s", laps: 24, tyres: [] },
        { position: 8, code: "RUS", team: "Mercedes", time: "", gap: "+0.707s", laps: 27, tyres: [] },
        { position: 9, code: "HAD", team: "Racing Bulls", time: "", gap: "+0.708s", laps: 27, tyres: [] },
        { position: 10, code: "LAW", team: "Racing Bulls", time: "", gap: "+0.808s", laps: 28, tyres: [] },
        { position: 11, code: "ALB", team: "Williams", time: "", gap: "+1.024s", laps: 30, tyres: [] },
        { position: 12, code: "ALO", team: "Aston Martin", time: "", gap: "+1.060s", laps: 24, tyres: [] },
        { position: 13, code: "BOR", team: "Kick Sauber", time: "", gap: "+1.088s", laps: 27, tyres: [] },
        { position: 14, code: "OCO", team: "Haas", time: "", gap: "+1.125s", laps: 26, tyres: [] },
        { position: 15, code: "TSU", team: "Red Bull Racing", time: "", gap: "+1.164s", laps: 25, tyres: [] },
        { position: 16, code: "SAI", team: "Williams", time: "", gap: "+1.343s", laps: 27, tyres: [] },
        { position: 17, code: "HUL", team: "Kick Sauber", time: "", gap: "+1.349s", laps: 29, tyres: [] },
        { position: 18, code: "GAS", team: "Alpine", time: "", gap: "+1.358s", laps: 24, tyres: [] },
        { position: 19, code: "BEA", team: "Haas", time: "", gap: "+1.410s", laps: 27, tyres: [] },
        { position: 20, code: "COL", name: "Franco Colapinto", team: "Alpine", time: "", gap: "+1.473s", laps: 29, tyres: [] }
      ],
      notes: [
        "Lando Norris topped FP2 for McLaren.",
        "Ferrari placed second and third with Charles Leclerc and Lewis Hamilton."
      ]
    },

    fp3: {
      status: "Verified",
      headline: "FP3 classification",
      classification: [
        { position: 1, code: "LEC", team: "Ferrari", time: "1:25.498", gap: "—", laps: 14, tyres: [] },
        { position: 2, code: "PIA", team: "McLaren", time: "", gap: "+0.068s", laps: 14, tyres: [] },
        { position: 3, code: "VER", team: "Red Bull Racing", time: "", gap: "+0.087s", laps: 14, tyres: [] },
        { position: 4, code: "NOR", team: "McLaren", time: "", gap: "+0.108s", laps: 17, tyres: [] },
        { position: 5, code: "TSU", team: "Red Bull Racing", time: "", gap: "+0.606s", laps: 13, tyres: [] },
        { position: 6, code: "BEA", team: "Haas", time: "", gap: "+0.614s", laps: 13, tyres: [] },
        { position: 7, code: "ALB", team: "Williams", time: "", gap: "+0.621s", laps: 15, tyres: [] },
        { position: 8, code: "RUS", team: "Mercedes", time: "", gap: "+0.627s", laps: 13, tyres: [] },
        { position: 9, code: "HAD", team: "Racing Bulls", time: "", gap: "+0.631s", laps: 14, tyres: [] },
        { position: 10, code: "LAW", team: "Racing Bulls", time: "", gap: "+0.758s", laps: 14, tyres: [] },
        { position: 11, code: "HAM", team: "Ferrari", time: "", gap: "+0.834s", laps: 17, tyres: [] },
        { position: 12, code: "SAI", team: "Williams", time: "", gap: "+0.834s", laps: 16, tyres: [] },
        { position: 13, code: "OCO", team: "Haas", time: "", gap: "+0.879s", laps: 12, tyres: [] },
        { position: 14, code: "ANT", team: "Mercedes", time: "", gap: "+0.924s", laps: 12, tyres: [] },
        { position: 15, code: "HUL", team: "Kick Sauber", time: "", gap: "+1.001s", laps: 19, tyres: [] },
        { position: 16, code: "BOR", team: "Kick Sauber", time: "", gap: "+1.003s", laps: 15, tyres: [] },
        { position: 17, code: "ALO", team: "Aston Martin", time: "", gap: "+1.396s", laps: 16, tyres: [] },
        { position: 18, code: "COL", name: "Franco Colapinto", team: "Alpine", time: "", gap: "+2.099s", laps: 14, tyres: [] },
        { position: 19, code: "STR", team: "Aston Martin", time: "", gap: "+2.102s", laps: 14, tyres: [] },
        { position: 20, code: "GAS", team: "Alpine", time: "", gap: "+2.380s", laps: 16, tyres: [] }
      ],
      notes: [
        "Charles Leclerc topped FP3 for Ferrari.",
        "Oscar Piastri and Max Verstappen completed the top three."
      ]
    },

    qualifying: {
      status: "Verified",
      pole: "VER",

      q1: {
        classification: [
          { position: 1, code: "VER", time: "1:25.886" },
          { position: 2, code: "PIA", time: "1:25.963" },
          { position: 3, code: "NOR", time: "1:26.123" },
          { position: 4, code: "RUS", time: "1:26.236" },
          { position: 5, code: "HAM", time: "1:26.296" },
          { position: 6, code: "LEC", time: "1:26.186" },
          { position: 7, code: "ANT", time: "1:26.265" },
          { position: 8, code: "BEA", time: "1:26.005" },
          { position: 9, code: "ALO", time: "1:26.108" },
          { position: 10, code: "GAS", time: "1:26.328" },
          { position: 11, code: "SAI", time: "1:26.175" },
          { position: 12, code: "TSU", time: "1:26.275" },
          { position: 13, code: "HAD", time: "1:26.177" },
          { position: 14, code: "ALB", time: "1:26.093" },
          { position: 15, code: "OCO", time: "1:26.136" },
          { position: 16, code: "LAW", time: "1:26.440" },
          { position: 17, code: "BOR", time: "1:26.446" },
          { position: 18, code: "STR", time: "1:26.504" },
          { position: 19, code: "HUL", time: "1:26.574" },
          { position: 20, code: "COL", name: "Franco Colapinto", time: "1:27.060" }
        ]
      },

      q2: {
        classification: [
          { position: 1, code: "VER", time: "1:25.316" },
          { position: 2, code: "PIA", time: "1:25.316" },
          { position: 3, code: "NOR", time: "1:25.231" },
          { position: 4, code: "RUS", time: "1:25.637" },
          { position: 5, code: "HAM", time: "1:25.084" },
          { position: 6, code: "LEC", time: "1:25.133" },
          { position: 7, code: "ANT", time: "1:25.620" },
          { position: 8, code: "BEA", time: "1:25.534" },
          { position: 9, code: "ALO", time: "1:25.593" },
          { position: 10, code: "GAS", time: "1:25.711" },
          { position: 11, code: "SAI", time: "1:25.746" },
          { position: 12, code: "TSU", time: "1:25.826" },
          { position: 13, code: "HAD", time: "1:25.864" },
          { position: 14, code: "ALB", time: "1:25.889" },
          { position: 15, code: "OCO", time: "1:25.950" }
        ]
      },

      q3: {
        classification: [
          { position: 1, code: "VER", time: "1:24.892" },
          { position: 2, code: "PIA", time: "1:24.995" },
          { position: 3, code: "NOR", time: "1:25.010" },
          { position: 4, code: "RUS", time: "1:25.029" },
          { position: 5, code: "HAM", time: "1:25.095" },
          { position: 6, code: "LEC", time: "1:25.121" },
          { position: 7, code: "ANT", time: "1:25.374" },
          { position: 8, code: "BEA", time: "1:25.471" },
          { position: 9, code: "ALO", time: "1:25.621" },
          { position: 10, code: "GAS", time: "1:25.785" }
        ]
      },

      notes: [
        "Max Verstappen took pole position at Silverstone.",
        "Kimi Antonelli received a three-place grid penalty for causing a collision at the previous round.",
        "Oliver Bearman received a 10-place grid penalty for a red flag infringement in FP3."
      ]
    },

    startingGrid: {
      status: "Verified",
      poleSide: "left",
      positions: [
        { grid: 1, code: "VER", team: "Red Bull Racing", qualified: 1, note: "Pole position" },
        { grid: 2, code: "PIA", team: "McLaren", qualified: 2 },
        { grid: 3, code: "NOR", team: "McLaren", qualified: 3 },
        { grid: 4, code: "RUS", team: "Mercedes", qualified: 4 },
        { grid: 5, code: "HAM", team: "Ferrari", qualified: 5 },
        { grid: 6, code: "LEC", team: "Ferrari", qualified: 6 },
        { grid: 7, code: "ALO", team: "Aston Martin", qualified: 9 },
        { grid: 8, code: "GAS", team: "Alpine", qualified: 10 },
        { grid: 9, code: "SAI", team: "Williams", qualified: 11 },
        { grid: 10, code: "ANT", team: "Mercedes", qualified: 7, reason: "Three-place grid penalty for causing a collision at the previous round" },
        { grid: 11, code: "TSU", team: "Red Bull Racing", qualified: 12 },
        { grid: 12, code: "HAD", team: "Racing Bulls", qualified: 13 },
        { grid: 13, code: "ALB", team: "Williams", qualified: 14 },
        { grid: 14, code: "OCO", team: "Haas", qualified: 15 },
        { grid: 15, code: "LAW", team: "Racing Bulls", qualified: 16 },
        { grid: 16, code: "BOR", team: "Kick Sauber", qualified: 17 },
        { grid: 17, code: "STR", team: "Aston Martin", qualified: 18 },
        { grid: 18, code: "BEA", team: "Haas", qualified: 8, reason: "10-place grid penalty for a red flag infringement in FP3" },
        { grid: 19, code: "HUL", team: "Kick Sauber", qualified: 19 },
        { grid: 20, code: "COL", name: "Franco Colapinto", team: "Alpine", qualified: 20, reason: "Required to start from pit lane after Parc Ferme changes and additional power unit elements" }
      ],
      notes: [
        "Max Verstappen started from pole.",
        "Kimi Antonelli dropped three places.",
        "Oliver Bearman dropped 10 places.",
        "Franco Colapinto was required to start from the pit lane."
      ]
    },

    race: {
      status: "Verified",

      fastestLap: {
        code: "PIA",
        time: "1:29.337",
        lap: 51
      },

      fastestPitStop: {
        team: "Red Bull Racing",
        driver: "VER",
        time: "28.182s pit-lane time"
      },

      driverOfTheDay: "HUL",

      podium: [
        { position: 1, code: "NOR", team: "McLaren", time: "1:37:15.735" },
        { position: 2, code: "PIA", team: "McLaren", gap: "+6.812s" },
        { position: 3, code: "HUL", team: "Kick Sauber", gap: "+34.742s" }
      ],

      fullClassification: [
        { position: 1, code: "NOR", team: "McLaren", time: "1:37:15.735", status: "Finished", points: 25 },
        { position: 2, code: "PIA", team: "McLaren", gap: "+6.812s", status: "Finished", points: 18 },
        { position: 3, code: "HUL", team: "Kick Sauber", gap: "+34.742s", status: "Finished", points: 15 },
        { position: 4, code: "HAM", team: "Ferrari", gap: "+39.812s", status: "Finished", points: 12 },
        { position: 5, code: "VER", team: "Red Bull Racing", gap: "+56.781s", status: "Finished", points: 10 },
        { position: 6, code: "GAS", team: "Alpine", gap: "+59.857s", status: "Finished", points: 8 },
        { position: 7, code: "STR", team: "Aston Martin", gap: "+60.603s", status: "Finished", points: 6 },
        { position: 8, code: "ALB", team: "Williams", gap: "+64.135s", status: "Finished", points: 4 },
        { position: 9, code: "ALO", team: "Aston Martin", gap: "+65.858s", status: "Finished", points: 2 },
        { position: 10, code: "RUS", team: "Mercedes", gap: "+70.674s", status: "Finished", points: 1 },
        { position: 11, code: "BEA", team: "Haas", gap: "+72.095s", status: "Finished", points: 0 },
        { position: 12, code: "SAI", team: "Williams", gap: "+76.592s", status: "Finished", points: 0 },
        { position: 13, code: "OCO", team: "Haas", gap: "+77.301s", status: "Finished", points: 0 },
        { position: 14, code: "LEC", team: "Ferrari", gap: "+84.477s", status: "Finished", points: 0 },
        { position: 15, code: "TSU", team: "Red Bull Racing", gap: "+1 lap", status: "Finished", points: 0 },
        { position: "NC", code: "ANT", team: "Mercedes", status: "DNF", points: 0, note: "Completed 23 laps" },
        { position: "NC", code: "HAD", team: "Racing Bulls", status: "DNF", points: 0, note: "Completed 17 laps" },
        { position: "NC", code: "BOR", team: "Kick Sauber", status: "DNF", points: 0, note: "Completed 3 laps" },
        { position: "NC", code: "LAW", team: "Racing Bulls", status: "DNF", points: 0, note: "Completed 0 laps" },
        { position: "NC", code: "COL", name: "Franco Colapinto", team: "Alpine", status: "DNS", points: 0 }
      ],

      strategy: [
        "The wet-dry conditions made timing and tyre choice crucial.",
        "Nico Hulkenberg rose from 19th on the grid to claim his first Formula 1 podium."
      ],

      keyMoments: [
        "Lando Norris won his home Grand Prix.",
        "McLaren completed a one-two finish.",
        "Nico Hulkenberg scored his maiden Formula 1 podium.",
        "Oscar Piastri set the fastest lap late in the race."
      ],

      penalties: [],

      notes: [
        "Nico Hulkenberg was voted Driver of the Day.",
        "Oscar Piastri set the fastest lap on lap 51.",
        "Max Verstappen had the quickest listed pit-lane time in the official pit stop summary."
      ]
    }
  },
  13: {
    fp1: {
      status: "Verified",
      headline: "FP1 classification",
      classification: [
        { position: 1, code: "PIA", team: "McLaren", time: "1:42.022", gap: "—", laps: 23, tyres: [] },
        { position: 2, code: "VER", team: "Red Bull Racing", time: "", gap: "+0.404s", laps: 23, tyres: [] },
        { position: 3, code: "NOR", team: "McLaren", time: "", gap: "+0.504s", laps: 22, tyres: [] },
        { position: 4, code: "RUS", team: "Mercedes", time: "", gap: "+0.576s", laps: 27, tyres: [] },
        { position: 5, code: "LEC", team: "Ferrari", time: "", gap: "+0.906s", laps: 22, tyres: [] },
        { position: 6, code: "ANT", team: "Mercedes", time: "", gap: "+0.957s", laps: 23, tyres: [] },
        { position: 7, code: "HAM", team: "Ferrari", time: "", gap: "+1.063s", laps: 24, tyres: [] },
        { position: 8, code: "STR", team: "Aston Martin", time: "", gap: "+1.090s", laps: 17, tyres: [] },
        { position: 9, code: "ALO", team: "Aston Martin", time: "", gap: "+1.098s", laps: 22, tyres: [] },
        { position: 10, code: "HAD", team: "Racing Bulls", time: "", gap: "+1.100s", laps: 19, tyres: [] },
        { position: 11, code: "SAI", team: "Williams", time: "", gap: "+1.195s", laps: 16, tyres: [] },
        { position: 12, code: "ALB", team: "Williams", time: "", gap: "+1.239s", laps: 24, tyres: [] },
        { position: 13, code: "BOR", team: "Kick Sauber", time: "", gap: "+1.240s", laps: 25, tyres: [] },
        { position: 14, code: "HUL", team: "Kick Sauber", time: "", gap: "+1.448s", laps: 20, tyres: [] },
        { position: 15, code: "LAW", team: "Racing Bulls", time: "", gap: "+1.456s", laps: 21, tyres: [] },
        { position: 16, code: "OCO", team: "Haas", time: "", gap: "+1.548s", laps: 22, tyres: [] },
        { position: 17, code: "GAS", team: "Alpine", time: "", gap: "+1.907s", laps: 21, tyres: [] },
        { position: 18, code: "TSU", team: "Red Bull Racing", time: "", gap: "+2.470s", laps: 23, tyres: [] },
        { position: 19, code: "COL", name: "Franco Colapinto", team: "Alpine", time: "", gap: "+2.825s", laps: 21, tyres: [] },
        { position: 20, code: "BEA", team: "Haas", time: "", gap: "+3.055s", laps: 22, tyres: [] }
      ],
      notes: [
        "Oscar Piastri topped the only practice session of the Belgian Sprint weekend.",
        "Max Verstappen was second, with Lando Norris third."
      ]
    },

    sprintQualifying: {
      status: "Verified",
      pole: "PIA",

      sq1: {
        classification: [
          { position: 1, code: "PIA", time: "1:41.769" },
          { position: 2, code: "VER", time: "1:42.043" },
          { position: 3, code: "NOR", time: "1:42.068" },
          { position: 4, code: "LEC", time: "1:42.763" },
          { position: 5, code: "OCO", time: "1:42.822" },
          { position: 6, code: "SAI", time: "1:42.776" },
          { position: 7, code: "BEA", time: "1:43.024" },
          { position: 8, code: "GAS", time: "1:43.171" },
          { position: 9, code: "HAD", time: "1:42.711" },
          { position: 10, code: "BOR", time: "1:42.806" },
          { position: 11, code: "LAW", time: "1:42.897" },
          { position: 12, code: "TSU", time: "1:42.912" },
          { position: 13, code: "RUS", time: "1:42.650" },
          { position: 14, code: "ALO", time: "1:42.427" },
          { position: 15, code: "STR", time: "1:42.736" },
          { position: 16, code: "ALB", time: "1:43.212" },
          { position: 17, code: "HUL", time: "1:43.217" },
          { position: 18, code: "HAM", time: "1:43.408" },
          { position: 19, code: "COL", name: "Franco Colapinto", time: "1:43.587" },
          { position: 20, code: "ANT", time: "1:45.394" }
        ]
      },

      sq2: {
        classification: [
          { position: 1, code: "PIA", time: "1:42.128" },
          { position: 2, code: "VER", time: "1:41.583" },
          { position: 3, code: "NOR", time: "1:41.412" },
          { position: 4, code: "LEC", time: "1:41.786" },
          { position: 5, code: "OCO", time: "1:41.801" },
          { position: 6, code: "SAI", time: "1:42.051" },
          { position: 7, code: "BEA", time: "1:42.019" },
          { position: 8, code: "GAS", time: "1:41.949" },
          { position: 9, code: "HAD", time: "1:42.088" },
          { position: 10, code: "BOR", time: "1:41.901" },
          { position: 11, code: "LAW", time: "1:42.169" },
          { position: 12, code: "TSU", time: "1:42.184" },
          { position: 13, code: "RUS", time: "1:42.330" },
          { position: 14, code: "ALO", time: "1:42.453" },
          { position: 15, code: "STR", time: "1:42.832" }
        ]
      },

      sq3: {
        classification: [
          { position: 1, code: "PIA", time: "1:40.510" },
          { position: 2, code: "VER", time: "1:40.987" },
          { position: 3, code: "NOR", time: "1:41.128" },
          { position: 4, code: "LEC", time: "1:41.278" },
          { position: 5, code: "OCO", time: "1:41.565" },
          { position: 6, code: "SAI", time: "1:41.761" },
          { position: 7, code: "BEA", time: "1:41.857" },
          { position: 8, code: "GAS", time: "1:41.959" },
          { position: 9, code: "HAD", time: "1:41.971" },
          { position: 10, code: "BOR", time: "1:42.176" }
        ]
      },

      notes: [
        "Oscar Piastri took Sprint pole for McLaren.",
        "Max Verstappen qualified second for the Sprint, ahead of Lando Norris."
      ]
    },

    sprintGrid: {
      status: "Verified",
      poleSide: "left",
      positions: [
        { grid: 1, code: "PIA", team: "McLaren", qualified: 1, note: "Sprint pole" },
        { grid: 2, code: "VER", team: "Red Bull Racing", qualified: 2 },
        { grid: 3, code: "NOR", team: "McLaren", qualified: 3 },
        { grid: 4, code: "LEC", team: "Ferrari", qualified: 4 },
        { grid: 5, code: "OCO", team: "Haas", qualified: 5 },
        { grid: 6, code: "SAI", team: "Williams", qualified: 6 },
        { grid: 7, code: "BEA", team: "Haas", qualified: 7 },
        { grid: 8, code: "GAS", team: "Alpine", qualified: 8 },
        { grid: 9, code: "HAD", team: "Racing Bulls", qualified: 9 },
        { grid: 10, code: "BOR", team: "Kick Sauber", qualified: 10 },
        { grid: 11, code: "LAW", team: "Racing Bulls", qualified: 11 },
        { grid: 12, code: "TSU", team: "Red Bull Racing", qualified: 12 },
        { grid: 13, code: "RUS", team: "Mercedes", qualified: 13 },
        { grid: 14, code: "ALO", team: "Aston Martin", qualified: 14 },
        { grid: 15, code: "STR", team: "Aston Martin", qualified: 15 },
        { grid: 16, code: "ALB", team: "Williams", qualified: 16 },
        { grid: 17, code: "HUL", team: "Kick Sauber", qualified: 17 },
        { grid: 18, code: "HAM", team: "Ferrari", qualified: 18 },
        { grid: 19, code: "ANT", team: "Mercedes", qualified: 20 },
        { grid: 20, code: "COL", name: "Franco Colapinto", team: "Alpine", qualified: 19, reason: "Required to start from pit lane after Parc Ferme changes" }
      ],
      notes: [
        "Oscar Piastri started the Sprint from pole.",
        "Franco Colapinto was required to start from the pit lane."
      ]
    },

    sprint: {
      status: "Verified",
      headline: "Sprint classification",
      classification: [
        { position: 1, code: "VER", team: "Red Bull Racing", time: "26:37.997", points: 8 },
        { position: 2, code: "PIA", team: "McLaren", gap: "+0.753s", points: 7 },
        { position: 3, code: "NOR", team: "McLaren", gap: "+1.414s", points: 6 },
        { position: 4, code: "LEC", team: "Ferrari", gap: "+10.176s", points: 5 },
        { position: 5, code: "OCO", team: "Haas", gap: "+13.789s", points: 4 },
        { position: 6, code: "SAI", team: "Williams", gap: "+14.964s", points: 3 },
        { position: 7, code: "BEA", team: "Haas", gap: "+18.610s", points: 2 },
        { position: 8, code: "HAD", team: "Racing Bulls", gap: "+19.119s", points: 1 },
        { position: 9, code: "BOR", team: "Kick Sauber", gap: "+22.183s", points: 0 },
        { position: 10, code: "LAW", team: "Racing Bulls", gap: "+22.897s", points: 0 },
        { position: 11, code: "TSU", team: "Red Bull Racing", gap: "+24.551s", points: 0 },
        { position: 12, code: "RUS", team: "Mercedes", gap: "+25.969s", points: 0 },
        { position: 13, code: "STR", team: "Aston Martin", gap: "+26.595s", points: 0 },
        { position: 14, code: "ALO", team: "Aston Martin", gap: "+29.046s", points: 0 },
        { position: 15, code: "HAM", team: "Ferrari", gap: "+30.175s", points: 0 },
        { position: 16, code: "ALB", team: "Williams", gap: "+30.941s", points: 0 },
        { position: 17, code: "ANT", team: "Mercedes", gap: "+31.981s", points: 0 },
        { position: 18, code: "HUL", team: "Kick Sauber", gap: "+32.867s", points: 0 },
        { position: 19, code: "COL", name: "Franco Colapinto", team: "Alpine", gap: "+38.072s", points: 0 },
        { position: "NC", code: "GAS", team: "Alpine", status: "DNF", points: 0, note: "Completed 12 laps" }
      ],
      notes: [
        "Max Verstappen won the Belgian Sprint.",
        "Oscar Piastri finished second after starting from Sprint pole."
      ]
    },

    qualifying: {
      status: "Verified",
      pole: "NOR",

      q1: {
        classification: [
          { position: 1, code: "NOR", time: "1:41.010" },
          { position: 2, code: "PIA", time: "1:41.201" },
          { position: 3, code: "LEC", time: "1:41.635" },
          { position: 4, code: "VER", time: "1:41.334" },
          { position: 5, code: "ALB", time: "1:41.772" },
          { position: 6, code: "RUS", time: "1:41.784" },
          { position: 7, code: "TSU", time: "1:41.840" },
          { position: 8, code: "HAD", time: "1:41.572" },
          { position: 9, code: "LAW", time: "1:41.748" },
          { position: 10, code: "BOR", time: "1:41.908" },
          { position: 11, code: "OCO", time: "1:41.884" },
          { position: 12, code: "BEA", time: "1:41.617" },
          { position: 13, code: "GAS", time: "1:41.800" },
          { position: 14, code: "HUL", time: "1:41.844" },
          { position: 15, code: "SAI", time: "1:41.691" },
          { position: 16, code: "HAM", time: "1:41.939" },
          { position: 17, code: "COL", name: "Franco Colapinto", time: "1:42.022" },
          { position: 18, code: "ANT", time: "1:42.139" },
          { position: 19, code: "ALO", time: "1:42.385" },
          { position: 20, code: "STR", time: "1:42.502" }
        ]
      },

      q2: {
        classification: [
          { position: 1, code: "NOR", time: "1:40.715" },
          { position: 2, code: "PIA", time: "1:40.626" },
          { position: 3, code: "LEC", time: "1:41.084" },
          { position: 4, code: "VER", time: "1:40.951" },
          { position: 5, code: "ALB", time: "1:41.505" },
          { position: 6, code: "RUS", time: "1:41.254" },
          { position: 7, code: "TSU", time: "1:41.245" },
          { position: 8, code: "HAD", time: "1:41.281" },
          { position: 9, code: "LAW", time: "1:41.297" },
          { position: 10, code: "BOR", time: "1:41.336" },
          { position: 11, code: "OCO", time: "1:41.525" },
          { position: 12, code: "BEA", time: "1:41.617" },
          { position: 13, code: "GAS", time: "1:41.633" },
          { position: 14, code: "HUL", time: "1:41.707" },
          { position: 15, code: "SAI", time: "1:41.758" }
        ]
      },

      q3: {
        classification: [
          { position: 1, code: "NOR", time: "1:40.562" },
          { position: 2, code: "PIA", time: "1:40.647" },
          { position: 3, code: "LEC", time: "1:40.900" },
          { position: 4, code: "VER", time: "1:40.903" },
          { position: 5, code: "ALB", time: "1:41.201" },
          { position: 6, code: "RUS", time: "1:41.260" },
          { position: 7, code: "TSU", time: "1:41.284" },
          { position: 8, code: "HAD", time: "1:41.310" },
          { position: 9, code: "LAW", time: "1:41.328" },
          { position: 10, code: "BOR", time: "1:42.387" }
        ]
      },

      notes: [
        "Lando Norris took Grand Prix pole position at Spa.",
        "Oscar Piastri qualified second, ahead of Charles Leclerc."
      ]
    },

    startingGrid: {
      status: "Verified",
      poleSide: "left",
      positions: [
        { grid: 1, code: "NOR", team: "McLaren", qualified: 1, note: "Pole position" },
        { grid: 2, code: "PIA", team: "McLaren", qualified: 2 },
        { grid: 3, code: "LEC", team: "Ferrari", qualified: 3 },
        { grid: 4, code: "VER", team: "Red Bull Racing", qualified: 4 },
        { grid: 5, code: "ALB", team: "Williams", qualified: 5 },
        { grid: 6, code: "RUS", team: "Mercedes", qualified: 6 },
        { grid: 7, code: "TSU", team: "Red Bull Racing", qualified: 7 },
        { grid: 8, code: "HAD", team: "Racing Bulls", qualified: 8 },
        { grid: 9, code: "LAW", team: "Racing Bulls", qualified: 9 },
        { grid: 10, code: "BOR", team: "Kick Sauber", qualified: 10 },
        { grid: 11, code: "OCO", team: "Haas", qualified: 11 },
        { grid: 12, code: "BEA", team: "Haas", qualified: 12 },
        { grid: 13, code: "GAS", team: "Alpine", qualified: 13 },
        { grid: 14, code: "HUL", team: "Kick Sauber", qualified: 14 },
        { grid: 15, code: "COL", name: "Franco Colapinto", team: "Alpine", qualified: 17 },
        { grid: 16, code: "STR", team: "Aston Martin", qualified: 20 },
        { grid: 17, code: "SAI", team: "Williams", qualified: 15, reason: "Required to start from pit lane after Parc Ferme changes" },
        { grid: 18, code: "HAM", team: "Ferrari", qualified: 16, reason: "Required to start from pit lane after Parc Ferme changes and additional power unit elements" },
        { grid: 19, code: "ANT", team: "Mercedes", qualified: 18, reason: "Required to start from pit lane after Parc Ferme changes and additional power unit elements" },
        { grid: 20, code: "ALO", team: "Aston Martin", qualified: 19, reason: "Required to start from pit lane after Parc Ferme changes and additional power unit elements" }
      ],
      notes: [
        "Lando Norris started from pole.",
        "Carlos Sainz, Lewis Hamilton, Kimi Antonelli, and Fernando Alonso were required to start from the pit lane."
      ]
    },

    race: {
      status: "Verified",

      fastestLap: {
        code: "ANT",
        time: "1:44.861",
        lap: 32
      },

      fastestPitStop: {
        team: "Mercedes",
        driver: "ANT",
        time: "23.059s pit-lane time"
      },

      driverOfTheDay: "HAM",

      podium: [
        { position: 1, code: "PIA", team: "McLaren", time: "1:25:22.601" },
        { position: 2, code: "NOR", team: "McLaren", gap: "+3.415s" },
        { position: 3, code: "LEC", team: "Ferrari", gap: "+20.185s" }
      ],

      fullClassification: [
        { position: 1, code: "PIA", team: "McLaren", time: "1:25:22.601", status: "Finished", points: 25 },
        { position: 2, code: "NOR", team: "McLaren", gap: "+3.415s", status: "Finished", points: 18 },
        { position: 3, code: "LEC", team: "Ferrari", gap: "+20.185s", status: "Finished", points: 15 },
        { position: 4, code: "VER", team: "Red Bull Racing", gap: "+21.731s", status: "Finished", points: 12 },
        { position: 5, code: "RUS", team: "Mercedes", gap: "+34.863s", status: "Finished", points: 10 },
        { position: 6, code: "ALB", team: "Williams", gap: "+39.926s", status: "Finished", points: 8 },
        { position: 7, code: "HAM", team: "Ferrari", gap: "+40.679s", status: "Finished", points: 6 },
        { position: 8, code: "LAW", team: "Racing Bulls", gap: "+52.033s", status: "Finished", points: 4 },
        { position: 9, code: "BOR", team: "Kick Sauber", gap: "+56.434s", status: "Finished", points: 2 },
        { position: 10, code: "GAS", team: "Alpine", gap: "+72.714s", status: "Finished", points: 1 },
        { position: 11, code: "BEA", team: "Haas", gap: "+73.145s", status: "Finished", points: 0 },
        { position: 12, code: "HUL", team: "Kick Sauber", gap: "+73.628s", status: "Finished", points: 0 },
        { position: 13, code: "TSU", team: "Red Bull Racing", gap: "+75.395s", status: "Finished", points: 0 },
        { position: 14, code: "STR", team: "Aston Martin", gap: "+79.831s", status: "Finished", points: 0 },
        { position: 15, code: "OCO", team: "Haas", gap: "+86.063s", status: "Finished", points: 0 },
        { position: 16, code: "ANT", team: "Mercedes", gap: "+86.721s", status: "Finished", points: 0 },
        { position: 17, code: "ALO", team: "Aston Martin", gap: "+87.924s", status: "Finished", points: 0 },
        { position: 18, code: "SAI", team: "Williams", gap: "+92.024s", status: "Finished", points: 0 },
        { position: 19, code: "COL", name: "Franco Colapinto", team: "Alpine", gap: "+95.250s", status: "Finished", points: 0 },
        { position: 20, code: "HAD", team: "Racing Bulls", gap: "+1 lap", status: "Finished", points: 0 }
      ],

      strategy: [
        "The race started after a long rain delay and became a wet-to-dry strategy fight.",
        "Oscar Piastri passed Lando Norris early and controlled the race from the front."
      ],

      keyMoments: [
        "Oscar Piastri overtook Lando Norris and went on to win.",
        "McLaren completed another one-two finish.",
        "Charles Leclerc completed the podium for Ferrari.",
        "Lewis Hamilton recovered from the pit lane to finish seventh."
      ],

      penalties: [],

      notes: [
        "Lewis Hamilton was voted Driver of the Day after recovering from the pit lane to seventh.",
        "Kimi Antonelli set the fastest lap on lap 32.",
        "Kimi Antonelli had the quickest listed pit-lane time in the official pit stop summary."
      ]
    }
  },
  14: {
    fp1: {
      status: "Verified",
      headline: "FP1 classification",
      classification: [
        { position: 1, code: "NOR", team: "McLaren", time: "1:16.052", gap: "—", laps: 26, tyres: [] },
        { position: 2, code: "PIA", team: "McLaren", time: "", gap: "+0.019s", laps: 30, tyres: [] },
        { position: 3, code: "LEC", team: "Ferrari", time: "", gap: "+0.217s", laps: 28, tyres: [] },
        { position: 4, code: "HAD", team: "Racing Bulls", time: "", gap: "+0.629s", laps: 31, tyres: [] },
        { position: 5, code: "HAM", team: "Ferrari", time: "", gap: "+0.682s", laps: 28, tyres: [] },
        { position: 6, code: "BEA", team: "Haas", time: "", gap: "+0.826s", laps: 26, tyres: [] },
        { position: 7, code: "ANT", team: "Mercedes", time: "", gap: "+0.828s", laps: 26, tyres: [] },
        { position: 8, code: "RUS", team: "Mercedes", time: "", gap: "+0.873s", laps: 26, tyres: [] },
        { position: 9, code: "VER", team: "Red Bull Racing", time: "", gap: "+0.888s", laps: 25, tyres: [] },
        { position: 10, code: "STR", team: "Aston Martin", time: "", gap: "+0.906s", laps: 25, tyres: [] },
        { position: 11, code: "ALB", team: "Williams", time: "", gap: "+0.932s", laps: 28, tyres: [] },
        { position: 12, code: "OCO", team: "Haas", time: "", gap: "+0.952s", laps: 26, tyres: [] },
        { position: 13, code: "GAS", team: "Alpine", time: "", gap: "+1.071s", laps: 27, tyres: [] },
        { position: 14, code: "LAW", team: "Racing Bulls", time: "", gap: "+1.132s", laps: 29, tyres: [] },
        { position: 15, code: "SAI", team: "Williams", time: "", gap: "+1.143s", laps: 31, tyres: [] },
        { position: 16, code: "DRU", name: "Felipe Drugovich", team: "Aston Martin", time: "", gap: "+1.217s", laps: 26, tyres: [] },
        { position: 17, code: "TSU", team: "Red Bull Racing", time: "", gap: "+1.341s", laps: 27, tyres: [] },
        { position: 18, code: "COL", name: "Franco Colapinto", team: "Alpine", time: "", gap: "+1.412s", laps: 29, tyres: [] },
        { position: 19, code: "BOR", team: "Kick Sauber", time: "", gap: "+1.600s", laps: 17, tyres: [] },
        { position: 20, code: "ARO", name: "Paul Aron", team: "Kick Sauber", time: "", gap: "+3.736s", laps: 9, tyres: [] }
      ],
      notes: [
        "Lando Norris topped FP1 for McLaren.",
        "Felipe Drugovich appeared for Aston Martin and Paul Aron appeared for Kick Sauber."
      ]
    },

    fp2: {
      status: "Verified",
      headline: "FP2 classification",
      classification: [
        { position: 1, code: "NOR", team: "McLaren", time: "1:15.624", gap: "—", laps: 27, tyres: [] },
        { position: 2, code: "PIA", team: "McLaren", time: "", gap: "+0.291s", laps: 30, tyres: [] },
        { position: 3, code: "LEC", team: "Ferrari", time: "", gap: "+0.399s", laps: 28, tyres: [] },
        { position: 4, code: "STR", team: "Aston Martin", time: "", gap: "+0.495s", laps: 28, tyres: [] },
        { position: 5, code: "ALO", team: "Aston Martin", time: "", gap: "+0.609s", laps: 25, tyres: [] },
        { position: 6, code: "HAM", team: "Ferrari", time: "", gap: "+0.705s", laps: 28, tyres: [] },
        { position: 7, code: "RUS", team: "Mercedes", time: "", gap: "+0.793s", laps: 27, tyres: [] },
        { position: 8, code: "HAD", team: "Racing Bulls", time: "", gap: "+0.803s", laps: 30, tyres: [] },
        { position: 9, code: "TSU", team: "Red Bull Racing", time: "", gap: "+0.861s", laps: 30, tyres: [] },
        { position: 10, code: "ANT", team: "Mercedes", time: "", gap: "+0.896s", laps: 26, tyres: [] },
        { position: 11, code: "BEA", team: "Haas", time: "", gap: "+0.943s", laps: 27, tyres: [] },
        { position: 12, code: "HUL", team: "Kick Sauber", time: "", gap: "+1.056s", laps: 31, tyres: [] },
        { position: 13, code: "OCO", team: "Haas", time: "", gap: "+1.080s", laps: 29, tyres: [] },
        { position: 14, code: "VER", team: "Red Bull Racing", time: "", gap: "+1.167s", laps: 25, tyres: [] },
        { position: 15, code: "LAW", team: "Racing Bulls", time: "", gap: "+1.188s", laps: 29, tyres: [] },
        { position: 16, code: "SAI", team: "Williams", time: "", gap: "+1.250s", laps: 32, tyres: [] },
        { position: 17, code: "BOR", team: "Kick Sauber", time: "", gap: "+1.322s", laps: 29, tyres: [] },
        { position: 18, code: "ALB", team: "Williams", time: "", gap: "+1.397s", laps: 30, tyres: [] },
        { position: 19, code: "GAS", team: "Alpine", time: "", gap: "+1.419s", laps: 25, tyres: [] },
        { position: 20, code: "COL", name: "Franco Colapinto", team: "Alpine", time: "", gap: "+1.535s", laps: 29, tyres: [] }
      ],
      notes: [
        "Lando Norris topped FP2 ahead of Oscar Piastri.",
        "McLaren completed a one-two in the second practice session."
      ]
    },

    fp3: {
      status: "Verified",
      headline: "FP3 classification",
      classification: [
        { position: 1, code: "PIA", team: "McLaren", time: "1:14.916", gap: "—", laps: 17, tyres: [] },
        { position: 2, code: "NOR", team: "McLaren", time: "", gap: "+0.032s", laps: 20, tyres: [] },
        { position: 3, code: "LEC", team: "Ferrari", time: "", gap: "+0.399s", laps: 17, tyres: [] },
        { position: 4, code: "HAM", team: "Ferrari", time: "", gap: "+0.768s", laps: 18, tyres: [] },
        { position: 5, code: "ANT", team: "Mercedes", time: "", gap: "+0.829s", laps: 18, tyres: [] },
        { position: 6, code: "ALO", team: "Aston Martin", time: "", gap: "+0.878s", laps: 18, tyres: [] },
        { position: 7, code: "STR", team: "Aston Martin", time: "", gap: "+0.912s", laps: 21, tyres: [] },
        { position: 8, code: "RUS", team: "Mercedes", time: "", gap: "+0.924s", laps: 17, tyres: [] },
        { position: 9, code: "BOR", team: "Kick Sauber", time: "", gap: "+1.062s", laps: 19, tyres: [] },
        { position: 10, code: "HUL", team: "Kick Sauber", time: "", gap: "+1.109s", laps: 21, tyres: [] },
        { position: 11, code: "BEA", team: "Haas", time: "", gap: "+1.211s", laps: 17, tyres: [] },
        { position: 12, code: "VER", team: "Red Bull Racing", time: "", gap: "+1.246s", laps: 19, tyres: [] },
        { position: 13, code: "COL", name: "Franco Colapinto", team: "Alpine", time: "", gap: "+1.331s", laps: 21, tyres: [] },
        { position: 14, code: "LAW", team: "Racing Bulls", time: "", gap: "+1.455s", laps: 21, tyres: [] },
        { position: 15, code: "SAI", team: "Williams", time: "", gap: "+1.526s", laps: 19, tyres: [] },
        { position: 16, code: "ALB", team: "Williams", time: "", gap: "+1.614s", laps: 20, tyres: [] },
        { position: 17, code: "OCO", team: "Haas", time: "", gap: "+1.615s", laps: 18, tyres: [] },
        { position: 18, code: "GAS", team: "Alpine", time: "", gap: "+1.654s", laps: 22, tyres: [] },
        { position: 19, code: "TSU", team: "Red Bull Racing", time: "", gap: "+1.962s", laps: 19, tyres: [] },
        { position: 20, code: "HAD", team: "Racing Bulls", time: "", gap: "+2.040s", laps: 18, tyres: [] }
      ],
      notes: [
        "Oscar Piastri topped FP3 for McLaren.",
        "Lando Norris finished second, only 0.032s behind."
      ]
    },

    qualifying: {
      status: "Verified",
      pole: "LEC",

      q1: {
        classification: [
          { position: 1, code: "LEC", time: "1:15.582" },
          { position: 2, code: "PIA", time: "1:15.211" },
          { position: 3, code: "NOR", time: "1:15.523" },
          { position: 4, code: "RUS", time: "1:15.627" },
          { position: 5, code: "ALO", time: "1:15.281" },
          { position: 6, code: "STR", time: "1:15.673" },
          { position: 7, code: "BOR", time: "1:15.586" },
          { position: 8, code: "VER", time: "1:15.736" },
          { position: 9, code: "LAW", time: "1:15.849" },
          { position: 10, code: "HAD", time: "1:15.516" },
          { position: 11, code: "BEA", time: "1:15.750" },
          { position: 12, code: "HAM", time: "1:15.733" },
          { position: 13, code: "SAI", time: "1:15.652" },
          { position: 14, code: "COL", name: "Franco Colapinto", time: "1:15.875" },
          { position: 15, code: "ANT", time: "1:15.782" },
          { position: 16, code: "TSU", time: "1:15.899" },
          { position: 17, code: "GAS", time: "1:15.966" },
          { position: 18, code: "OCO", time: "1:16.023" },
          { position: 19, code: "HUL", time: "1:16.081" },
          { position: 20, code: "ALB", time: "1:16.223" }
        ]
      },

      q2: {
        classification: [
          { position: 1, code: "LEC", time: "1:15.455" },
          { position: 2, code: "PIA", time: "1:14.941" },
          { position: 3, code: "NOR", time: "1:14.890" },
          { position: 4, code: "RUS", time: "1:15.201" },
          { position: 5, code: "ALO", time: "1:15.395" },
          { position: 6, code: "STR", time: "1:15.129" },
          { position: 7, code: "BOR", time: "1:15.687" },
          { position: 8, code: "VER", time: "1:15.547" },
          { position: 9, code: "LAW", time: "1:15.630" },
          { position: 10, code: "HAD", time: "1:15.469" },
          { position: 11, code: "BEA", time: "1:15.694" },
          { position: 12, code: "HAM", time: "1:15.702" },
          { position: 13, code: "SAI", time: "1:15.781" },
          { position: 14, code: "COL", name: "Franco Colapinto", time: "1:16.159" },
          { position: 15, code: "ANT", time: "1:16.386" }
        ]
      },

      q3: {
        classification: [
          { position: 1, code: "LEC", time: "1:15.372" },
          { position: 2, code: "PIA", time: "1:15.398" },
          { position: 3, code: "NOR", time: "1:15.413" },
          { position: 4, code: "RUS", time: "1:15.425" },
          { position: 5, code: "ALO", time: "1:15.481" },
          { position: 6, code: "STR", time: "1:15.498" },
          { position: 7, code: "BOR", time: "1:15.725" },
          { position: 8, code: "VER", time: "1:15.728" },
          { position: 9, code: "LAW", time: "1:15.821" },
          { position: 10, code: "HAD", time: "1:15.915" }
        ]
      },

      notes: [
        "Charles Leclerc took pole position for Ferrari.",
        "Gabriel Bortoleto reached Q3 and qualified seventh for Kick Sauber."
      ]
    },

    startingGrid: {
      status: "Verified",
      poleSide: "left",
      positions: [
        { grid: 1, code: "LEC", team: "Ferrari", qualified: 1, note: "Pole position" },
        { grid: 2, code: "PIA", team: "McLaren", qualified: 2 },
        { grid: 3, code: "NOR", team: "McLaren", qualified: 3 },
        { grid: 4, code: "RUS", team: "Mercedes", qualified: 4 },
        { grid: 5, code: "ALO", team: "Aston Martin", qualified: 5 },
        { grid: 6, code: "STR", team: "Aston Martin", qualified: 6 },
        { grid: 7, code: "BOR", team: "Kick Sauber", qualified: 7 },
        { grid: 8, code: "VER", team: "Red Bull Racing", qualified: 8 },
        { grid: 9, code: "LAW", team: "Racing Bulls", qualified: 9 },
        { grid: 10, code: "HAD", team: "Racing Bulls", qualified: 10 },
        { grid: 11, code: "BEA", team: "Haas", qualified: 11 },
        { grid: 12, code: "HAM", team: "Ferrari", qualified: 12 },
        { grid: 13, code: "SAI", team: "Williams", qualified: 13 },
        { grid: 14, code: "COL", name: "Franco Colapinto", team: "Alpine", qualified: 14 },
        { grid: 15, code: "ANT", team: "Mercedes", qualified: 15 },
        { grid: 16, code: "GAS", team: "Alpine", qualified: 17 },
        { grid: 17, code: "OCO", team: "Haas", qualified: 18 },
        { grid: 18, code: "HUL", team: "Kick Sauber", qualified: 19 },
        { grid: 19, code: "ALB", team: "Williams", qualified: 20 },
        {
          grid: 20,
          code: "TSU",
          team: "Red Bull Racing",
          qualified: 16,
          reason: "Required to start from pit lane after Parc Ferme changes and additional power unit elements"
        }
      ],
      notes: [
        "Charles Leclerc started from pole.",
        "Yuki Tsunoda was required to start from the pit lane."
      ]
    },

    race: {
      status: "Verified",

      fastestLap: {
        code: "RUS",
        time: "1:19.409",
        lap: 45
      },

      fastestPitStop: {
        team: "McLaren",
        driver: "NOR",
        time: "20.940s pit-lane time"
      },

      driverOfTheDay: "BOR",

      podium: [
        { position: 1, code: "NOR", team: "McLaren", time: "1:35:21.231" },
        { position: 2, code: "PIA", team: "McLaren", gap: "+0.698s" },
        { position: 3, code: "RUS", team: "Mercedes", gap: "+21.916s" }
      ],

      fullClassification: [
        { position: 1, code: "NOR", team: "McLaren", time: "1:35:21.231", status: "Finished", points: 25 },
        { position: 2, code: "PIA", team: "McLaren", gap: "+0.698s", status: "Finished", points: 18 },
        { position: 3, code: "RUS", team: "Mercedes", gap: "+21.916s", status: "Finished", points: 15 },
        { position: 4, code: "LEC", team: "Ferrari", gap: "+42.560s", status: "Finished", points: 12, note: "Five-second time penalty for driving erratically" },
        { position: 5, code: "ALO", team: "Aston Martin", gap: "+59.040s", status: "Finished", points: 10 },
        { position: 6, code: "BOR", team: "Kick Sauber", gap: "+66.169s", status: "Finished", points: 8 },
        { position: 7, code: "STR", team: "Aston Martin", gap: "+68.174s", status: "Finished", points: 6 },
        { position: 8, code: "LAW", team: "Racing Bulls", gap: "+69.451s", status: "Finished", points: 4 },
        { position: 9, code: "VER", team: "Red Bull Racing", gap: "+72.645s", status: "Finished", points: 2 },
        { position: 10, code: "ANT", team: "Mercedes", gap: "+1 lap", status: "Finished", points: 1 },
        { position: 11, code: "HAD", team: "Racing Bulls", gap: "+1 lap", status: "Finished", points: 0 },
        { position: 12, code: "HAM", team: "Ferrari", gap: "+1 lap", status: "Finished", points: 0 },
        { position: 13, code: "HUL", team: "Kick Sauber", gap: "+1 lap", status: "Finished", points: 0 },
        { position: 14, code: "SAI", team: "Williams", gap: "+1 lap", status: "Finished", points: 0 },
        { position: 15, code: "ALB", team: "Williams", gap: "+1 lap", status: "Finished", points: 0 },
        { position: 16, code: "OCO", team: "Haas", gap: "+1 lap", status: "Finished", points: 0 },
        { position: 17, code: "TSU", team: "Red Bull Racing", gap: "+1 lap", status: "Finished", points: 0 },
        { position: 18, code: "COL", name: "Franco Colapinto", team: "Alpine", gap: "+1 lap", status: "Finished", points: 0 },
        { position: 19, code: "GAS", team: "Alpine", gap: "+1 lap", status: "Finished", points: 0, note: "10-second time penalty for causing a collision" },
        { position: "NC", code: "BEA", team: "Haas", status: "DNF", points: 0, note: "Completed 48 laps" }
      ],

      strategy: [
        "Lando Norris won with a one-stop strategy, holding off Oscar Piastri in the closing laps.",
        "Charles Leclerc started from pole but faded from the lead battle during the race."
      ],

      keyMoments: [
        "Lando Norris beat Oscar Piastri by less than one second.",
        "George Russell completed the podium for Mercedes.",
        "Gabriel Bortoleto finished sixth for Kick Sauber.",
        "Charles Leclerc received a five-second penalty for driving erratically."
      ],

      penalties: [
        "Pierre Gasly received a 10-second time penalty for causing a collision.",
        "Charles Leclerc received a five-second time penalty for driving erratically."
      ],

      notes: [
        "Gabriel Bortoleto was voted Driver of the Day.",
        "George Russell set the fastest lap on lap 45.",
        "Lando Norris had the quickest listed pit-lane time in the official pit stop summary."
      ]
    }
  },
  15: {
    fp1: {
      status: "Verified",
      headline: "FP1 classification",
      classification: [
        { position: 1, code: "NOR", team: "McLaren", time: "1:10.278", gap: "—", laps: 35, tyres: [] },
        { position: 2, code: "PIA", team: "McLaren", time: "", gap: "+0.292s", laps: 32, tyres: [] },
        { position: 3, code: "STR", team: "Aston Martin", time: "", gap: "+0.501s", laps: 25, tyres: [] },
        { position: 4, code: "ALO", team: "Aston Martin", time: "", gap: "+0.563s", laps: 25, tyres: [] },
        { position: 5, code: "ALB", team: "Williams", time: "", gap: "+0.893s", laps: 33, tyres: [] },
        { position: 6, code: "VER", team: "Red Bull Racing", time: "", gap: "+0.940s", laps: 24, tyres: [] },
        { position: 7, code: "RUS", team: "Mercedes", time: "", gap: "+1.108s", laps: 29, tyres: [] },
        { position: 8, code: "SAI", team: "Williams", time: "", gap: "+1.180s", laps: 33, tyres: [] },
        { position: 9, code: "BOR", team: "Kick Sauber", time: "", gap: "+1.231s", laps: 30, tyres: [] },
        { position: 10, code: "GAS", team: "Alpine", time: "", gap: "+1.335s", laps: 30, tyres: [] },
        { position: 11, code: "LAW", team: "Racing Bulls", time: "", gap: "+1.475s", laps: 29, tyres: [] },
        { position: 12, code: "HAD", team: "Racing Bulls", time: "", gap: "+1.494s", laps: 30, tyres: [] },
        { position: 13, code: "HUL", team: "Kick Sauber", time: "", gap: "+1.597s", laps: 30, tyres: [] },
        { position: 14, code: "LEC", team: "Ferrari", time: "", gap: "+1.673s", laps: 32, tyres: [] },
        { position: 15, code: "HAM", team: "Ferrari", time: "", gap: "+1.682s", laps: 28, tyres: [] },
        { position: 16, code: "TSU", team: "Red Bull Racing", time: "", gap: "+1.848s", laps: 24, tyres: [] },
        { position: 17, code: "OCO", team: "Haas", time: "", gap: "+1.866s", laps: 29, tyres: [] },
        { position: 18, code: "COL", name: "Franco Colapinto", team: "Alpine", time: "", gap: "+1.998s", laps: 27, tyres: [] },
        { position: 19, code: "BEA", team: "Haas", time: "", gap: "+2.286s", laps: 30, tyres: [] },
        { position: 20, code: "ANT", team: "Mercedes", time: "", gap: "+3.997s", laps: 6, tyres: [] }
      ],
      notes: [
        "Lando Norris topped FP1 for McLaren.",
        "McLaren finished first and second, with Norris ahead of Piastri."
      ]
    },

    fp2: {
      status: "Verified",
      headline: "FP2 classification",
      classification: [
        { position: 1, code: "NOR", team: "McLaren", time: "1:09.890", gap: "—", laps: 28, tyres: [] },
        { position: 2, code: "ALO", team: "Aston Martin", time: "", gap: "+0.087s", laps: 20, tyres: [] },
        { position: 3, code: "PIA", team: "McLaren", time: "", gap: "+0.089s", laps: 29, tyres: [] },
        { position: 4, code: "RUS", team: "Mercedes", time: "", gap: "+0.384s", laps: 25, tyres: [] },
        { position: 5, code: "VER", team: "Red Bull Racing", time: "", gap: "+0.588s", laps: 23, tyres: [] },
        { position: 6, code: "HAM", team: "Ferrari", time: "", gap: "+0.848s", laps: 22, tyres: [] },
        { position: 7, code: "TSU", team: "Red Bull Racing", time: "", gap: "+0.905s", laps: 26, tyres: [] },
        { position: 8, code: "LEC", team: "Ferrari", time: "", gap: "+0.944s", laps: 23, tyres: [] },
        { position: 9, code: "COL", name: "Franco Colapinto", team: "Alpine", time: "", gap: "+1.067s", laps: 26, tyres: [] },
        { position: 10, code: "HUL", team: "Kick Sauber", time: "", gap: "+1.190s", laps: 25, tyres: [] },
        { position: 11, code: "BEA", team: "Haas", time: "", gap: "+1.223s", laps: 26, tyres: [] },
        { position: 12, code: "ANT", team: "Mercedes", time: "", gap: "+1.295s", laps: 21, tyres: [] },
        { position: 13, code: "BOR", team: "Kick Sauber", time: "", gap: "+1.430s", laps: 25, tyres: [] },
        { position: 14, code: "LAW", team: "Racing Bulls", time: "", gap: "+1.449s", laps: 25, tyres: [] },
        { position: 15, code: "OCO", team: "Haas", time: "", gap: "+1.471s", laps: 23, tyres: [] },
        { position: 16, code: "SAI", team: "Williams", time: "", gap: "+1.792s", laps: 30, tyres: [] },
        { position: 17, code: "ALB", team: "Williams", time: "", gap: "+1.866s", laps: 16, tyres: [] },
        { position: 18, code: "STR", team: "Aston Martin", time: "", gap: "+2.085s", laps: 7, tyres: [] },
        { position: 19, code: "GAS", team: "Alpine", time: "", gap: "+2.232s", laps: 28, tyres: [] },
        { position: 20, code: "HAD", team: "Racing Bulls", time: "No time", gap: "—", laps: 1, tyres: [] }
      ],
      notes: [
        "Lando Norris topped FP2 again.",
        "Fernando Alonso was second for Aston Martin, just 0.087s behind."
      ]
    },

    fp3: {
      status: "Verified",
      headline: "FP3 classification",
      classification: [
        { position: 1, code: "NOR", team: "McLaren", time: "1:08.972", gap: "—", laps: 16, tyres: [] },
        { position: 2, code: "PIA", team: "McLaren", time: "", gap: "+0.242s", laps: 15, tyres: [] },
        { position: 3, code: "RUS", team: "Mercedes", time: "", gap: "+0.886s", laps: 17, tyres: [] },
        { position: 4, code: "SAI", team: "Williams", time: "", gap: "+0.941s", laps: 23, tyres: [] },
        { position: 5, code: "VER", team: "Red Bull Racing", time: "", gap: "+0.953s", laps: 20, tyres: [] },
        { position: 6, code: "LEC", team: "Ferrari", time: "", gap: "+0.966s", laps: 23, tyres: [] },
        { position: 7, code: "ALB", team: "Williams", time: "", gap: "+1.127s", laps: 22, tyres: [] },
        { position: 8, code: "STR", team: "Aston Martin", time: "", gap: "+1.131s", laps: 24, tyres: [] },
        { position: 9, code: "HAD", team: "Racing Bulls", time: "", gap: "+1.194s", laps: 21, tyres: [] },
        { position: 10, code: "ALO", team: "Aston Martin", time: "", gap: "+1.260s", laps: 20, tyres: [] },
        { position: 11, code: "LAW", team: "Racing Bulls", time: "", gap: "+1.328s", laps: 17, tyres: [] },
        { position: 12, code: "TSU", team: "Red Bull Racing", time: "", gap: "+1.377s", laps: 19, tyres: [] },
        { position: 13, code: "BOR", team: "Kick Sauber", time: "", gap: "+1.389s", laps: 21, tyres: [] },
        { position: 14, code: "HAM", team: "Ferrari", time: "", gap: "+1.401s", laps: 20, tyres: [] },
        { position: 15, code: "BEA", team: "Haas", time: "", gap: "+1.623s", laps: 19, tyres: [] },
        { position: 16, code: "HUL", team: "Kick Sauber", time: "", gap: "+1.627s", laps: 24, tyres: [] },
        { position: 17, code: "ANT", team: "Mercedes", time: "", gap: "+1.725s", laps: 31, tyres: [] },
        { position: 18, code: "OCO", team: "Haas", time: "", gap: "+1.829s", laps: 18, tyres: [] },
        { position: 19, code: "GAS", team: "Alpine", time: "", gap: "+1.991s", laps: 24, tyres: [] },
        { position: 20, code: "COL", name: "Franco Colapinto", team: "Alpine", time: "", gap: "+2.082s", laps: 21, tyres: [] }
      ],
      notes: [
        "Lando Norris completed a practice sweep at Zandvoort.",
        "Oscar Piastri finished second for another McLaren one-two."
      ]
    },

    qualifying: {
      status: "Verified",
      pole: "PIA",

      q1: {
        classification: [
          { position: 1, code: "PIA", time: "1:09.338" },
          { position: 2, code: "NOR", time: "1:09.469" },
          { position: 3, code: "VER", time: "1:09.696" },
          { position: 4, code: "HAD", time: "1:09.966" },
          { position: 5, code: "RUS", time: "1:09.676" },
          { position: 6, code: "LEC", time: "1:09.906" },
          { position: 7, code: "HAM", time: "1:09.900" },
          { position: 8, code: "LAW", time: "1:09.779" },
          { position: 9, code: "SAI", time: "1:09.980" },
          { position: 10, code: "ALO", time: "1:09.950" },
          { position: 11, code: "ANT", time: "1:09.845" },
          { position: 12, code: "TSU", time: "1:09.954" },
          { position: 13, code: "BOR", time: "1:10.037" },
          { position: 14, code: "GAS", time: "1:09.894" },
          { position: 15, code: "ALB", time: "1:09.792" },
          { position: 16, code: "COL", name: "Franco Colapinto", time: "1:10.104" },
          { position: 17, code: "HUL", time: "1:10.195" },
          { position: 18, code: "OCO", time: "1:10.197" },
          { position: 19, code: "BEA", time: "1:10.262" },
          { position: 20, code: "STR", time: "DNF" }
        ]
      },

      q2: {
        classification: [
          { position: 1, code: "PIA", time: "1:08.964" },
          { position: 2, code: "NOR", time: "1:08.874" },
          { position: 3, code: "VER", time: "1:09.122" },
          { position: 4, code: "HAD", time: "1:09.439" },
          { position: 5, code: "RUS", time: "1:09.313" },
          { position: 6, code: "LEC", time: "1:09.304" },
          { position: 7, code: "HAM", time: "1:09.261" },
          { position: 8, code: "LAW", time: "1:09.383" },
          { position: 9, code: "SAI", time: "1:09.472" },
          { position: 10, code: "ALO", time: "1:09.366" },
          { position: 11, code: "ANT", time: "1:09.493" },
          { position: 12, code: "TSU", time: "1:09.622" },
          { position: 13, code: "BOR", time: "1:09.622" },
          { position: 14, code: "GAS", time: "1:09.637" },
          { position: 15, code: "ALB", time: "1:09.652" }
        ]
      },

      q3: {
        classification: [
          { position: 1, code: "PIA", time: "1:08.662" },
          { position: 2, code: "NOR", time: "1:08.674" },
          { position: 3, code: "VER", time: "1:08.925" },
          { position: 4, code: "HAD", time: "1:09.208" },
          { position: 5, code: "RUS", time: "1:09.255" },
          { position: 6, code: "LEC", time: "1:09.340" },
          { position: 7, code: "HAM", time: "1:09.390" },
          { position: 8, code: "LAW", time: "1:09.500" },
          { position: 9, code: "SAI", time: "1:09.505" },
          { position: 10, code: "ALO", time: "1:09.630" }
        ]
      },

      notes: [
        "Oscar Piastri took pole position for McLaren.",
        "Isack Hadjar qualified fourth for Racing Bulls.",
        "Lance Stroll failed to set a qualifying lap time."
      ]
    },

    startingGrid: {
      status: "Verified",
      poleSide: "left",
      positions: [
        { grid: 1, code: "PIA", team: "McLaren", qualified: 1, note: "Pole position" },
        { grid: 2, code: "NOR", team: "McLaren", qualified: 2 },
        { grid: 3, code: "VER", team: "Red Bull Racing", qualified: 3 },
        { grid: 4, code: "HAD", team: "Racing Bulls", qualified: 4 },
        { grid: 5, code: "RUS", team: "Mercedes", qualified: 5 },
        { grid: 6, code: "LEC", team: "Ferrari", qualified: 6 },
        { grid: 7, code: "HAM", team: "Ferrari", qualified: 7 },
        { grid: 8, code: "LAW", team: "Racing Bulls", qualified: 8 },
        { grid: 9, code: "SAI", team: "Williams", qualified: 9 },
        { grid: 10, code: "ALO", team: "Aston Martin", qualified: 10 },
        { grid: 11, code: "ANT", team: "Mercedes", qualified: 11 },
        { grid: 12, code: "TSU", team: "Red Bull Racing", qualified: 12 },
        { grid: 13, code: "BOR", team: "Kick Sauber", qualified: 13 },
        { grid: 14, code: "GAS", team: "Alpine", qualified: 14 },
        { grid: 15, code: "ALB", team: "Williams", qualified: 15 },
        { grid: 16, code: "COL", name: "Franco Colapinto", team: "Alpine", qualified: 16 },
        { grid: 17, code: "HUL", team: "Kick Sauber", qualified: 17 },
        { grid: 18, code: "OCO", team: "Haas", qualified: 18 },
        { grid: 19, code: "STR", team: "Aston Martin", qualified: 20, reason: "Raced at the Stewards' discretion after failing to set a lap time in Qualifying" },
        { grid: 20, code: "BEA", team: "Haas", qualified: 19, reason: "Required to start from pit lane after Parc Ferme changes and additional power unit elements" }
      ],
      notes: [
        "Oscar Piastri started from pole.",
        "Lance Stroll raced at the Stewards' discretion.",
        "Oliver Bearman was required to start from the pit lane."
      ]
    },

    race: {
      status: "Verified",

      fastestLap: {
        code: "PIA",
        time: "1:12.271",
        lap: 60
      },

      fastestPitStop: {
        team: "Ferrari",
        driver: "LEC",
        time: "17.081s pit-lane time"
      },

      driverOfTheDay: "HAD",

      podium: [
        { position: 1, code: "PIA", team: "McLaren", time: "1:38:29.849" },
        { position: 2, code: "VER", team: "Red Bull Racing", gap: "+1.271s" },
        { position: 3, code: "HAD", team: "Racing Bulls", gap: "+3.233s" }
      ],

      fullClassification: [
        { position: 1, code: "PIA", team: "McLaren", time: "1:38:29.849", status: "Finished", points: 25 },
        { position: 2, code: "VER", team: "Red Bull Racing", gap: "+1.271s", status: "Finished", points: 18 },
        { position: 3, code: "HAD", team: "Racing Bulls", gap: "+3.233s", status: "Finished", points: 15 },
        { position: 4, code: "RUS", team: "Mercedes", gap: "+5.654s", status: "Finished", points: 12 },
        { position: 5, code: "ALB", team: "Williams", gap: "+6.327s", status: "Finished", points: 10 },
        { position: 6, code: "BEA", team: "Haas", gap: "+9.044s", status: "Finished", points: 8 },
        { position: 7, code: "STR", team: "Aston Martin", gap: "+9.497s", status: "Finished", points: 6 },
        { position: 8, code: "ALO", team: "Aston Martin", gap: "+11.709s", status: "Finished", points: 4 },
        { position: 9, code: "TSU", team: "Red Bull Racing", gap: "+13.597s", status: "Finished", points: 2 },
        { position: 10, code: "OCO", team: "Haas", gap: "+14.063s", status: "Finished", points: 1 },
        { position: 11, code: "COL", name: "Franco Colapinto", team: "Alpine", gap: "+14.511s", status: "Finished", points: 0 },
        { position: 12, code: "LAW", team: "Racing Bulls", gap: "+17.063s", status: "Finished", points: 0 },
        { position: 13, code: "SAI", team: "Williams", gap: "+17.376s", status: "Finished", points: 0 },
        { position: 14, code: "HUL", team: "Kick Sauber", gap: "+19.725s", status: "Finished", points: 0 },
        { position: 15, code: "BOR", team: "Kick Sauber", gap: "+21.565s", status: "Finished", points: 0 },
        { position: 16, code: "ANT", team: "Mercedes", gap: "+22.029s", status: "Finished", points: 0, note: "10-second penalty for causing a collision and five-second penalty for speeding in the pit lane" },
        { position: 17, code: "GAS", team: "Alpine", gap: "+23.629s", status: "Finished", points: 0 },
        { position: 18, code: "NOR", team: "McLaren", status: "DNF", points: 0, note: "Completed 64 laps" },
        { position: "NC", code: "LEC", team: "Ferrari", status: "DNF", points: 0, note: "Completed 52 laps" },
        { position: "NC", code: "HAM", team: "Ferrari", status: "DNF", points: 0, note: "Completed 22 laps" }
      ],

      strategy: [
        "Oscar Piastri controlled the race from pole position.",
        "Multiple Safety Cars shaped the race and bunched the field late on."
      ],

      keyMoments: [
        "Oscar Piastri converted pole position into victory.",
        "Max Verstappen finished second at his home Grand Prix.",
        "Isack Hadjar scored his first Formula 1 podium.",
        "Lando Norris retired from second place after completing 64 laps.",
        "Both Ferrari drivers retired from the race."
      ],

      penalties: [
        "Kimi Antonelli received a 10-second penalty for causing a collision and a five-second penalty for speeding in the pit lane."
      ],

      notes: [
        "Isack Hadjar was voted Driver of the Day after taking his maiden F1 podium.",
        "Oscar Piastri set the fastest lap on lap 60.",
        "Charles Leclerc had the quickest listed pit-lane time in the official pit stop summary."
      ]
    }
  },
  16: {
    fp1: {
      status: "Verified",
      headline: "FP1 classification",
      classification: [
        { position: 1, code: "HAM", team: "Ferrari", time: "1:20.117", gap: "—", laps: 20, tyres: [] },
        { position: 2, code: "LEC", team: "Ferrari", time: "", gap: "+0.169s", laps: 24, tyres: [] },
        { position: 3, code: "SAI", team: "Williams", time: "", gap: "+0.533s", laps: 25, tyres: [] },
        { position: 4, code: "VER", team: "Red Bull Racing", time: "", gap: "+0.575s", laps: 22, tyres: [] },
        { position: 5, code: "ANT", team: "Mercedes", time: "", gap: "+0.823s", laps: 25, tyres: [] },
        { position: 6, code: "NOR", team: "McLaren", time: "", gap: "+0.904s", laps: 28, tyres: [] },
        { position: 7, code: "ALB", team: "Williams", time: "", gap: "+0.956s", laps: 25, tyres: [] },
        { position: 8, code: "RUS", team: "Mercedes", time: "", gap: "+0.993s", laps: 20, tyres: [] },
        { position: 9, code: "ALO", team: "Aston Martin", time: "", gap: "+0.997s", laps: 20, tyres: [] },
        { position: 10, code: "HAD", team: "Racing Bulls", time: "", gap: "+1.041s", laps: 25, tyres: [] },
        { position: 11, code: "BOR", team: "Kick Sauber", time: "", gap: "+1.055s", laps: 24, tyres: [] },
        { position: 12, code: "HUL", team: "Kick Sauber", time: "", gap: "+1.062s", laps: 26, tyres: [] },
        { position: 13, code: "LAW", team: "Racing Bulls", time: "", gap: "+1.084s", laps: 27, tyres: [] },
        { position: 14, code: "TSU", team: "Red Bull Racing", time: "", gap: "+1.175s", laps: 24, tyres: [] },
        { position: 15, code: "STR", team: "Aston Martin", time: "", gap: "+1.178s", laps: 26, tyres: [] },
        { position: 16, code: "DUN", name: "Alexander Dunne", team: "McLaren", time: "", gap: "+1.489s", laps: 26, tyres: [] },
        { position: 17, code: "OCO", team: "Haas", time: "", gap: "+1.525s", laps: 22, tyres: [] },
        { position: 18, code: "GAS", team: "Alpine", time: "", gap: "+1.536s", laps: 26, tyres: [] },
        { position: 19, code: "BEA", team: "Haas", time: "", gap: "+1.941s", laps: 23, tyres: [] },
        { position: 20, code: "ARO", name: "Paul Aron", team: "Alpine", time: "", gap: "+2.036s", laps: 23, tyres: [] }
      ],
      notes: [
        "Lewis Hamilton topped FP1 for Ferrari at Monza.",
        "Alexander Dunne appeared for McLaren and Paul Aron appeared for Alpine."
      ]
    },

    fp2: {
      status: "Verified",
      headline: "FP2 classification",
      classification: [
        { position: 1, code: "NOR", team: "McLaren", time: "1:19.878", gap: "—", laps: 28, tyres: [] },
        { position: 2, code: "LEC", team: "Ferrari", time: "", gap: "+0.083s", laps: 29, tyres: [] },
        { position: 3, code: "SAI", team: "Williams", time: "", gap: "+0.096s", laps: 30, tyres: [] },
        { position: 4, code: "PIA", team: "McLaren", time: "", gap: "+0.181s", laps: 29, tyres: [] },
        { position: 5, code: "HAM", team: "Ferrari", time: "", gap: "+0.192s", laps: 26, tyres: [] },
        { position: 6, code: "VER", team: "Red Bull Racing", time: "", gap: "+0.199s", laps: 27, tyres: [] },
        { position: 7, code: "ALB", team: "Williams", time: "", gap: "+0.301s", laps: 28, tyres: [] },
        { position: 8, code: "HUL", team: "Kick Sauber", time: "", gap: "+0.363s", laps: 27, tyres: [] },
        { position: 9, code: "TSU", team: "Red Bull Racing", time: "", gap: "+0.391s", laps: 28, tyres: [] },
        { position: 10, code: "RUS", team: "Mercedes", time: "", gap: "+0.398s", laps: 29, tyres: [] },
        { position: 11, code: "HAD", team: "Racing Bulls", time: "", gap: "+0.505s", laps: 24, tyres: [] },
        { position: 12, code: "BOR", team: "Kick Sauber", time: "", gap: "+0.597s", laps: 25, tyres: [] },
        { position: 13, code: "STR", team: "Aston Martin", time: "", gap: "+0.650s", laps: 28, tyres: [] },
        { position: 14, code: "BEA", team: "Haas", time: "", gap: "+0.729s", laps: 29, tyres: [] },
        { position: 15, code: "ALO", team: "Aston Martin", time: "", gap: "+0.767s", laps: 26, tyres: [] },
        { position: 16, code: "OCO", team: "Haas", time: "", gap: "+0.776s", laps: 29, tyres: [] },
        { position: 17, code: "LAW", team: "Racing Bulls", time: "", gap: "+0.933s", laps: 25, tyres: [] },
        { position: 18, code: "GAS", team: "Alpine", time: "", gap: "+1.224s", laps: 30, tyres: [] },
        { position: 19, code: "ANT", team: "Mercedes", time: "", gap: "+1.489s", laps: 4, tyres: [] },
        { position: 20, code: "COL", name: "Franco Colapinto", team: "Alpine", time: "", gap: "+1.686s", laps: 30, tyres: [] }
      ],
      notes: [
        "Lando Norris topped FP2 for McLaren.",
        "Kimi Antonelli completed only four laps in the session."
      ]
    },

    fp3: {
      status: "Verified",
      headline: "FP3 classification",
      classification: [
        { position: 1, code: "NOR", team: "McLaren", time: "1:19.331", gap: "—", laps: 21, tyres: [] },
        { position: 2, code: "LEC", team: "Ferrari", time: "", gap: "+0.021s", laps: 24, tyres: [] },
        { position: 3, code: "PIA", team: "McLaren", time: "", gap: "+0.165s", laps: 22, tyres: [] },
        { position: 4, code: "VER", team: "Red Bull Racing", time: "", gap: "+0.167s", laps: 18, tyres: [] },
        { position: 5, code: "RUS", team: "Mercedes", time: "", gap: "+0.184s", laps: 19, tyres: [] },
        { position: 6, code: "BOR", team: "Kick Sauber", time: "", gap: "+0.227s", laps: 18, tyres: [] },
        { position: 7, code: "HAM", team: "Ferrari", time: "", gap: "+0.267s", laps: 23, tyres: [] },
        { position: 8, code: "HAD", team: "Racing Bulls", time: "", gap: "+0.272s", laps: 20, tyres: [] },
        { position: 9, code: "ANT", team: "Mercedes", time: "", gap: "+0.365s", laps: 24, tyres: [] },
        { position: 10, code: "ALB", team: "Williams", time: "", gap: "+0.389s", laps: 23, tyres: [] },
        { position: 11, code: "HUL", team: "Kick Sauber", time: "", gap: "+0.406s", laps: 18, tyres: [] },
        { position: 12, code: "ALO", team: "Aston Martin", time: "", gap: "+0.530s", laps: 19, tyres: [] },
        { position: 13, code: "SAI", team: "Williams", time: "", gap: "+0.576s", laps: 23, tyres: [] },
        { position: 14, code: "COL", name: "Franco Colapinto", team: "Alpine", time: "", gap: "+0.703s", laps: 22, tyres: [] },
        { position: 15, code: "TSU", team: "Red Bull Racing", time: "", gap: "+0.728s", laps: 24, tyres: [] },
        { position: 16, code: "LAW", team: "Racing Bulls", time: "", gap: "+0.801s", laps: 14, tyres: [] },
        { position: 17, code: "BEA", team: "Haas", time: "", gap: "+0.878s", laps: 22, tyres: [] },
        { position: 18, code: "GAS", team: "Alpine", time: "", gap: "+0.916s", laps: 23, tyres: [] },
        { position: 19, code: "STR", team: "Aston Martin", time: "", gap: "+0.916s", laps: 22, tyres: [] },
        { position: 20, code: "OCO", team: "Haas", time: "", gap: "+0.973s", laps: 20, tyres: [] }
      ],
      notes: [
        "Lando Norris topped FP3 ahead of Charles Leclerc.",
        "The top five were covered by less than two tenths of a second."
      ]
    },

    qualifying: {
      status: "Verified",
      pole: "VER",

      q1: {
        classification: [
          { position: 1, code: "VER", time: "1:19.455" },
          { position: 2, code: "NOR", time: "1:19.517" },
          { position: 3, code: "PIA", time: "1:19.711" },
          { position: 4, code: "LEC", time: "1:19.689" },
          { position: 5, code: "HAM", time: "1:19.765" },
          { position: 6, code: "RUS", time: "1:19.414" },
          { position: 7, code: "ANT", time: "1:19.747" },
          { position: 8, code: "BOR", time: "1:19.688" },
          { position: 9, code: "ALO", time: "1:19.658" },
          { position: 10, code: "TSU", time: "1:19.619" },
          { position: 11, code: "BEA", time: "1:19.688" },
          { position: 12, code: "HUL", time: "1:19.777" },
          { position: 13, code: "SAI", time: "1:19.644" },
          { position: 14, code: "ALB", time: "1:19.837" },
          { position: 15, code: "OCO", time: "1:19.816" },
          { position: 16, code: "HAD", time: "1:19.917" },
          { position: 17, code: "STR", time: "1:19.948" },
          { position: 18, code: "COL", name: "Franco Colapinto", time: "1:19.992" },
          { position: 19, code: "GAS", time: "1:20.103" },
          { position: 20, code: "LAW", time: "1:20.279" }
        ]
      },

      q2: {
        classification: [
          { position: 1, code: "VER", time: "1:19.140" },
          { position: 2, code: "NOR", time: "1:19.293" },
          { position: 3, code: "PIA", time: "1:19.286" },
          { position: 4, code: "LEC", time: "1:19.310" },
          { position: 5, code: "HAM", time: "1:19.371" },
          { position: 6, code: "RUS", time: "1:19.287" },
          { position: 7, code: "ANT", time: "1:19.245" },
          { position: 8, code: "BOR", time: "1:19.323" },
          { position: 9, code: "ALO", time: "1:19.362" },
          { position: 10, code: "TSU", time: "1:19.433" },
          { position: 11, code: "BEA", time: "1:19.446" },
          { position: 12, code: "HUL", time: "1:19.498" },
          { position: 13, code: "SAI", time: "1:19.528" },
          { position: 14, code: "ALB", time: "1:19.583" },
          { position: 15, code: "OCO", time: "1:19.707" }
        ]
      },

      q3: {
        classification: [
          { position: 1, code: "VER", time: "1:18.792" },
          { position: 2, code: "NOR", time: "1:18.869" },
          { position: 3, code: "PIA", time: "1:18.982" },
          { position: 4, code: "LEC", time: "1:19.007" },
          { position: 5, code: "HAM", time: "1:19.124" },
          { position: 6, code: "RUS", time: "1:19.157" },
          { position: 7, code: "ANT", time: "1:19.200" },
          { position: 8, code: "BOR", time: "1:19.390" },
          { position: 9, code: "ALO", time: "1:19.424" },
          { position: 10, code: "TSU", time: "1:19.519" }
        ]
      },

      notes: [
        "Max Verstappen took pole position at Monza.",
        "Lewis Hamilton qualified fifth but received a five-place grid penalty for failing to slow for yellow flags at the previous round."
      ]
    },

    startingGrid: {
      status: "Verified",
      poleSide: "left",
      positions: [
        { grid: 1, code: "VER", team: "Red Bull Racing", qualified: 1, note: "Pole position" },
        { grid: 2, code: "NOR", team: "McLaren", qualified: 2 },
        { grid: 3, code: "PIA", team: "McLaren", qualified: 3 },
        { grid: 4, code: "LEC", team: "Ferrari", qualified: 4 },
        { grid: 5, code: "RUS", team: "Mercedes", qualified: 6 },
        { grid: 6, code: "ANT", team: "Mercedes", qualified: 7 },
        { grid: 7, code: "BOR", team: "Kick Sauber", qualified: 8 },
        { grid: 8, code: "ALO", team: "Aston Martin", qualified: 9 },
        { grid: 9, code: "TSU", team: "Red Bull Racing", qualified: 10 },
        { grid: 10, code: "HAM", team: "Ferrari", qualified: 5, reason: "Five-place grid penalty for failing to slow for yellow flags at the previous round" },
        { grid: 11, code: "BEA", team: "Haas", qualified: 11 },
        { grid: 12, code: "HUL", team: "Kick Sauber", qualified: 12 },
        { grid: 13, code: "SAI", team: "Williams", qualified: 13 },
        { grid: 14, code: "ALB", team: "Williams", qualified: 14 },
        { grid: 15, code: "OCO", team: "Haas", qualified: 15 },
        { grid: 16, code: "STR", team: "Aston Martin", qualified: 17 },
        { grid: 17, code: "COL", name: "Franco Colapinto", team: "Alpine", qualified: 18 },
        { grid: 18, code: "LAW", team: "Racing Bulls", qualified: 20 },
        { grid: 19, code: "HAD", team: "Racing Bulls", qualified: 16, reason: "Required to start from the pit lane after Parc Ferme changes and additional power unit elements" },
        { grid: 20, code: "GAS", team: "Alpine", qualified: 19, reason: "Required to start from the pit lane after Parc Ferme changes and additional power unit elements" }
      ],
      notes: [
        "Max Verstappen started from pole.",
        "Lewis Hamilton dropped from fifth to tenth after a five-place grid penalty.",
        "Isack Hadjar and Pierre Gasly were required to start from the pit lane."
      ]
    },

    race: {
      status: "Verified",

      fastestLap: {
        code: "NOR",
        time: "1:20.901",
        lap: 53
      },

      fastestPitStop: {
        team: "McLaren",
        driver: "PIA",
        time: "23.602s pit-lane time"
      },

      driverOfTheDay: "VER",

      podium: [
        { position: 1, code: "VER", team: "Red Bull Racing", time: "1:13:24.325" },
        { position: 2, code: "NOR", team: "McLaren", gap: "+19.207s" },
        { position: 3, code: "PIA", team: "McLaren", gap: "+21.351s" }
      ],

      fullClassification: [
        { position: 1, code: "VER", team: "Red Bull Racing", time: "1:13:24.325", status: "Finished", points: 25 },
        { position: 2, code: "NOR", team: "McLaren", gap: "+19.207s", status: "Finished", points: 18 },
        { position: 3, code: "PIA", team: "McLaren", gap: "+21.351s", status: "Finished", points: 15 },
        { position: 4, code: "LEC", team: "Ferrari", gap: "+25.624s", status: "Finished", points: 12 },
        { position: 5, code: "RUS", team: "Mercedes", gap: "+32.881s", status: "Finished", points: 10 },
        { position: 6, code: "HAM", team: "Ferrari", gap: "+37.449s", status: "Finished", points: 8 },
        { position: 7, code: "ALB", team: "Williams", gap: "+50.537s", status: "Finished", points: 6 },
        { position: 8, code: "BOR", team: "Kick Sauber", gap: "+58.484s", status: "Finished", points: 4 },
        { position: 9, code: "ANT", team: "Mercedes", gap: "+59.762s", status: "Finished", points: 2, note: "Five-second time penalty for driving erratically" },
        { position: 10, code: "HAD", team: "Racing Bulls", gap: "+63.891s", status: "Finished", points: 1 },
        { position: 11, code: "SAI", team: "Williams", gap: "+64.469s", status: "Finished", points: 0 },
        { position: 12, code: "BEA", team: "Haas", gap: "+79.288s", status: "Finished", points: 0, note: "10-second time penalty for causing a collision" },
        { position: 13, code: "TSU", team: "Red Bull Racing", gap: "+80.701s", status: "Finished", points: 0 },
        { position: 14, code: "LAW", team: "Racing Bulls", gap: "+82.351s", status: "Finished", points: 0 },
        { position: 15, code: "OCO", team: "Haas", gap: "+1 lap", status: "Finished", points: 0 },
        { position: 16, code: "GAS", team: "Alpine", gap: "+1 lap", status: "Finished", points: 0 },
        { position: 17, code: "COL", name: "Franco Colapinto", team: "Alpine", gap: "+1 lap", status: "Finished", points: 0 },
        { position: 18, code: "STR", team: "Aston Martin", gap: "+1 lap", status: "Finished", points: 0 },
        { position: "NC", code: "ALO", team: "Aston Martin", status: "DNF", points: 0, note: "Completed 24 laps" },
        { position: "NC", code: "HUL", team: "Kick Sauber", status: "DNS", points: 0 }
      ],

      strategy: [
        "Max Verstappen controlled the race from pole and built a dominant gap at the front.",
        "McLaren completed the podium behind Verstappen with Norris second and Piastri third."
      ],

      keyMoments: [
        "Max Verstappen converted pole into victory.",
        "Lando Norris finished second and set the fastest lap on the final lap.",
        "Oscar Piastri completed the podium for McLaren.",
        "Nico Hulkenberg did not start the race."
      ],

      penalties: [
        "Oliver Bearman received a 10-second time penalty for causing a collision.",
        "Kimi Antonelli received a five-second time penalty for driving erratically."
      ],

      notes: [
        "Max Verstappen was voted Driver of the Day.",
        "Lando Norris set the fastest lap on lap 53.",
        "Oscar Piastri had the quickest listed pit-lane time in the official pit stop summary."
      ]
    }
  },
  17: {
    fp1: {
      status: "Verified",
      headline: "FP1 classification",
      classification: [
        { position: 1, code: "NOR", team: "McLaren", time: "1:42.704", gap: "—", laps: 19, tyres: [] },
        { position: 2, code: "PIA", team: "McLaren", time: "", gap: "+0.310s", laps: 14, tyres: [] },
        { position: 3, code: "LEC", team: "Ferrari", time: "", gap: "+0.552s", laps: 17, tyres: [] },
        { position: 4, code: "RUS", team: "Mercedes", time: "", gap: "+0.553s", laps: 16, tyres: [] },
        { position: 5, code: "ALB", team: "Williams", time: "", gap: "+0.859s", laps: 17, tyres: [] },
        { position: 6, code: "TSU", team: "Red Bull Racing", time: "", gap: "+1.034s", laps: 16, tyres: [] },
        { position: 7, code: "VER", team: "Red Bull Racing", time: "", gap: "+1.086s", laps: 15, tyres: [] },
        { position: 8, code: "SAI", team: "Williams", time: "", gap: "+1.155s", laps: 17, tyres: [] },
        { position: 9, code: "LAW", team: "Racing Bulls", time: "", gap: "+1.199s", laps: 17, tyres: [] },
        { position: 10, code: "HAD", team: "Racing Bulls", time: "", gap: "+1.271s", laps: 17, tyres: [] },
        { position: 11, code: "ANT", team: "Mercedes", time: "", gap: "+1.281s", laps: 17, tyres: [] },
        { position: 12, code: "HUL", team: "Kick Sauber", time: "", gap: "+1.282s", laps: 18, tyres: [] },
        { position: 13, code: "HAM", team: "Ferrari", time: "", gap: "+1.383s", laps: 14, tyres: [] },
        { position: 14, code: "BOR", team: "Kick Sauber", time: "", gap: "+1.383s", laps: 18, tyres: [] },
        { position: 15, code: "ALO", team: "Aston Martin", time: "", gap: "+1.435s", laps: 15, tyres: [] },
        { position: 16, code: "BEA", team: "Haas", time: "", gap: "+1.447s", laps: 17, tyres: [] },
        { position: 17, code: "STR", team: "Aston Martin", time: "", gap: "+1.625s", laps: 15, tyres: [] },
        { position: 18, code: "OCO", team: "Haas", time: "", gap: "+1.735s", laps: 15, tyres: [] },
        { position: 19, code: "COL", name: "Franco Colapinto", team: "Alpine", time: "", gap: "+2.595s", laps: 14, tyres: [] },
        { position: 20, code: "GAS", team: "Alpine", time: "", gap: "+2.714s", laps: 17, tyres: [] }
      ],
      notes: [
        "Lando Norris topped FP1 in Baku.",
        "McLaren finished first and second in the opening session."
      ]
    },

    fp2: {
      status: "Verified",
      headline: "FP2 classification",
      classification: [
        { position: 1, code: "HAM", team: "Ferrari", time: "1:41.293", gap: "—", laps: 21, tyres: [] },
        { position: 2, code: "LEC", team: "Ferrari", time: "", gap: "+0.074s", laps: 23, tyres: [] },
        { position: 3, code: "RUS", team: "Mercedes", time: "", gap: "+0.477s", laps: 19, tyres: [] },
        { position: 4, code: "ANT", team: "Mercedes", time: "", gap: "+0.486s", laps: 22, tyres: [] },
        { position: 5, code: "BEA", team: "Haas", time: "", gap: "+0.598s", laps: 23, tyres: [] },
        { position: 6, code: "VER", team: "Red Bull Racing", time: "", gap: "+0.609s", laps: 22, tyres: [] },
        { position: 7, code: "LAW", team: "Racing Bulls", time: "", gap: "+0.696s", laps: 22, tyres: [] },
        { position: 8, code: "OCO", team: "Haas", time: "", gap: "+0.874s", laps: 23, tyres: [] },
        { position: 9, code: "ALB", team: "Williams", time: "", gap: "+0.884s", laps: 24, tyres: [] },
        { position: 10, code: "NOR", team: "McLaren", time: "", gap: "+0.906s", laps: 7, tyres: [] },
        { position: 11, code: "SAI", team: "Williams", time: "", gap: "+0.962s", laps: 24, tyres: [] },
        { position: 12, code: "PIA", team: "McLaren", time: "", gap: "+1.002s", laps: 23, tyres: [] },
        { position: 13, code: "HAD", team: "Racing Bulls", time: "", gap: "+1.150s", laps: 23, tyres: [] },
        { position: 14, code: "TSU", team: "Red Bull Racing", time: "", gap: "+1.151s", laps: 22, tyres: [] },
        { position: 15, code: "BOR", team: "Kick Sauber", time: "", gap: "+1.268s", laps: 22, tyres: [] },
        { position: 16, code: "GAS", team: "Alpine", time: "", gap: "+1.381s", laps: 22, tyres: [] },
        { position: 17, code: "STR", team: "Aston Martin", time: "", gap: "+1.478s", laps: 24, tyres: [] },
        { position: 18, code: "HUL", team: "Kick Sauber", time: "", gap: "+1.527s", laps: 22, tyres: [] },
        { position: 19, code: "ALO", team: "Aston Martin", time: "", gap: "+1.674s", laps: 24, tyres: [] },
        { position: 20, code: "COL", name: "Franco Colapinto", team: "Alpine", time: "", gap: "+2.029s", laps: 22, tyres: [] }
      ],
      notes: [
        "Lewis Hamilton topped FP2 for Ferrari.",
        "Charles Leclerc completed a Ferrari one-two."
      ]
    },

    fp3: {
      status: "Verified",
      headline: "FP3 classification",
      classification: [
        { position: 1, code: "NOR", team: "McLaren", time: "1:41.223", gap: "—", laps: 19, tyres: [] },
        { position: 2, code: "VER", team: "Red Bull Racing", time: "", gap: "+0.222s", laps: 19, tyres: [] },
        { position: 3, code: "PIA", team: "McLaren", time: "", gap: "+0.254s", laps: 21, tyres: [] },
        { position: 4, code: "HAM", team: "Ferrari", time: "", gap: "+0.276s", laps: 18, tyres: [] },
        { position: 5, code: "ANT", team: "Mercedes", time: "", gap: "+0.653s", laps: 17, tyres: [] },
        { position: 6, code: "RUS", team: "Mercedes", time: "", gap: "+0.741s", laps: 17, tyres: [] },
        { position: 7, code: "ALB", team: "Williams", time: "", gap: "+0.760s", laps: 19, tyres: [] },
        { position: 8, code: "BEA", team: "Haas", time: "", gap: "+0.762s", laps: 23, tyres: [] },
        { position: 9, code: "LAW", team: "Racing Bulls", time: "", gap: "+0.923s", laps: 21, tyres: [] },
        { position: 10, code: "LEC", team: "Ferrari", time: "", gap: "+0.986s", laps: 19, tyres: [] },
        { position: 11, code: "HAD", team: "Racing Bulls", time: "", gap: "+1.044s", laps: 22, tyres: [] },
        { position: 12, code: "HUL", team: "Kick Sauber", time: "", gap: "+1.205s", laps: 17, tyres: [] },
        { position: 13, code: "SAI", team: "Williams", time: "", gap: "+1.263s", laps: 17, tyres: [] },
        { position: 14, code: "ALO", team: "Aston Martin", time: "", gap: "+1.368s", laps: 17, tyres: [] },
        { position: 15, code: "COL", name: "Franco Colapinto", team: "Alpine", time: "", gap: "+1.566s", laps: 19, tyres: [] },
        { position: 16, code: "TSU", team: "Red Bull Racing", time: "", gap: "+1.617s", laps: 18, tyres: [] },
        { position: 17, code: "OCO", team: "Haas", time: "", gap: "+1.645s", laps: 20, tyres: [] },
        { position: 18, code: "BOR", team: "Kick Sauber", time: "", gap: "+1.837s", laps: 16, tyres: [] },
        { position: 19, code: "GAS", team: "Alpine", time: "", gap: "+2.099s", laps: 21, tyres: [] },
        { position: 20, code: "STR", team: "Aston Martin", time: "", gap: "+2.127s", laps: 17, tyres: [] }
      ],
      notes: [
        "Lando Norris topped FP3 ahead of Max Verstappen.",
        "Oscar Piastri completed the top three."
      ]
    },

    qualifying: {
      status: "Verified",
      pole: "VER",

      q1: {
        classification: [
          { position: 1, code: "VER", time: "1:41.331" },
          { position: 2, code: "SAI", time: "1:42.635" },
          { position: 3, code: "LAW", time: "1:42.257" },
          { position: 4, code: "ANT", time: "1:42.247" },
          { position: 5, code: "RUS", time: "1:41.646" },
          { position: 6, code: "TSU", time: "1:42.347" },
          { position: 7, code: "NOR", time: "1:41.322" },
          { position: 8, code: "HAD", time: "1:41.656" },
          { position: 9, code: "PIA", time: "1:41.839" },
          { position: 10, code: "LEC", time: "1:41.458" },
          { position: 11, code: "ALO", time: "1:42.211" },
          { position: 12, code: "HAM", time: "1:41.821" },
          { position: 13, code: "BOR", time: "1:42.511" },
          { position: 14, code: "STR", time: "1:42.101" },
          { position: 15, code: "BEA", time: "1:42.666" },
          { position: 16, code: "COL", name: "Franco Colapinto", time: "1:42.779" },
          { position: 17, code: "HUL", time: "1:42.916" },
          { position: 18, code: "GAS", time: "1:43.139" },
          { position: 19, code: "ALB", time: "1:43.778" },
          { position: "DQ", code: "OCO", time: "DSQ" }
        ]
      },

      q2: {
        classification: [
          { position: 1, code: "VER", time: "1:41.255" },
          { position: 2, code: "SAI", time: "1:41.675" },
          { position: 3, code: "LAW", time: "1:41.537" },
          { position: 4, code: "ANT", time: "1:41.464" },
          { position: 5, code: "RUS", time: "1:41.455" },
          { position: 6, code: "TSU", time: "1:41.788" },
          { position: 7, code: "NOR", time: "1:41.396" },
          { position: 8, code: "HAD", time: "1:41.647" },
          { position: 9, code: "PIA", time: "1:41.414" },
          { position: 10, code: "LEC", time: "1:41.519" },
          { position: 11, code: "ALO", time: "1:41.857" },
          { position: 12, code: "HAM", time: "1:42.183" },
          { position: 13, code: "BOR", time: "1:42.277" },
          { position: 14, code: "STR", time: "1:43.061" },
          { position: 15, code: "BEA", time: "DNF" }
        ]
      },

      q3: {
        classification: [
          { position: 1, code: "VER", time: "1:41.117" },
          { position: 2, code: "SAI", time: "1:41.595" },
          { position: 3, code: "LAW", time: "1:41.707" },
          { position: 4, code: "ANT", time: "1:41.717" },
          { position: 5, code: "RUS", time: "1:42.070" },
          { position: 6, code: "TSU", time: "1:42.143" },
          { position: 7, code: "NOR", time: "1:42.239" },
          { position: 8, code: "HAD", time: "1:42.372" },
          { position: 9, code: "PIA", time: "DNF" },
          { position: 10, code: "LEC", time: "DNF" }
        ]
      },

      notes: [
        "Max Verstappen took pole position in Baku.",
        "Carlos Sainz qualified second for Williams.",
        "Esteban Ocon was disqualified from Qualifying for a technical infringement."
      ]
    },

    startingGrid: {
      status: "Verified",
      poleSide: "left",
      positions: [
        { grid: 1, code: "VER", team: "Red Bull Racing", qualified: 1, note: "Pole position" },
        { grid: 2, code: "SAI", team: "Williams", qualified: 2 },
        { grid: 3, code: "LAW", team: "Racing Bulls", qualified: 3 },
        { grid: 4, code: "ANT", team: "Mercedes", qualified: 4 },
        { grid: 5, code: "RUS", team: "Mercedes", qualified: 5 },
        { grid: 6, code: "TSU", team: "Red Bull Racing", qualified: 6 },
        { grid: 7, code: "NOR", team: "McLaren", qualified: 7 },
        { grid: 8, code: "HAD", team: "Racing Bulls", qualified: 8 },
        { grid: 9, code: "PIA", team: "McLaren", qualified: 9, note: "No Q3 time after incident" },
        { grid: 10, code: "LEC", team: "Ferrari", qualified: 10, note: "No Q3 time after incident" },
        { grid: 11, code: "ALO", team: "Aston Martin", qualified: 11 },
        { grid: 12, code: "HAM", team: "Ferrari", qualified: 12 },
        { grid: 13, code: "BOR", team: "Kick Sauber", qualified: 13 },
        { grid: 14, code: "STR", team: "Aston Martin", qualified: 14 },
        { grid: 15, code: "BEA", team: "Haas", qualified: 15 },
        { grid: 16, code: "COL", name: "Franco Colapinto", team: "Alpine", qualified: 16 },
        { grid: 17, code: "HUL", team: "Kick Sauber", qualified: 17 },
        { grid: 18, code: "GAS", team: "Alpine", qualified: 18 },
        { grid: 19, code: "ALB", team: "Williams", qualified: 19 },
        { grid: 20, code: "OCO", team: "Haas", qualified: "DQ", reason: "Raced at the Stewards' discretion after disqualification from Qualifying" }
      ],
      notes: [
        "Max Verstappen started from pole.",
        "Esteban Ocon started at the back after being disqualified from Qualifying."
      ]
    },

    race: {
      status: "Verified",

      fastestLap: {
        code: "VER",
        time: "1:43.388",
        lap: 50
      },

      fastestPitStop: {
        team: "Mercedes",
        driver: "RUS",
        time: "19.809s pit-lane time"
      },

      driverOfTheDay: "SAI",

      podium: [
        { position: 1, code: "VER", team: "Red Bull Racing", time: "1:33:26.408" },
        { position: 2, code: "RUS", team: "Mercedes", gap: "+14.609s" },
        { position: 3, code: "SAI", team: "Williams", gap: "+19.199s" }
      ],

      fullClassification: [
        { position: 1, code: "VER", team: "Red Bull Racing", time: "1:33:26.408", status: "Finished", points: 25 },
        { position: 2, code: "RUS", team: "Mercedes", gap: "+14.609s", status: "Finished", points: 18 },
        { position: 3, code: "SAI", team: "Williams", gap: "+19.199s", status: "Finished", points: 15 },
        { position: 4, code: "ANT", team: "Mercedes", gap: "+21.760s", status: "Finished", points: 12 },
        { position: 5, code: "LAW", team: "Racing Bulls", gap: "+33.290s", status: "Finished", points: 10 },
        { position: 6, code: "TSU", team: "Red Bull Racing", gap: "+33.808s", status: "Finished", points: 8 },
        { position: 7, code: "NOR", team: "McLaren", gap: "+34.227s", status: "Finished", points: 6 },
        { position: 8, code: "HAM", team: "Ferrari", gap: "+36.310s", status: "Finished", points: 4 },
        { position: 9, code: "LEC", team: "Ferrari", gap: "+36.774s", status: "Finished", points: 2 },
        { position: 10, code: "HAD", team: "Racing Bulls", gap: "+38.982s", status: "Finished", points: 1 },
        { position: 11, code: "BOR", team: "Kick Sauber", gap: "+67.606s", status: "Finished", points: 0 },
        { position: 12, code: "BEA", team: "Haas", gap: "+68.262s", status: "Finished", points: 0 },
        { position: 13, code: "ALB", team: "Williams", gap: "+72.870s", status: "Finished", points: 0, note: "10-second time penalty for causing a collision" },
        { position: 14, code: "OCO", team: "Haas", gap: "+77.580s", status: "Finished", points: 0 },
        { position: 15, code: "ALO", team: "Aston Martin", gap: "+78.707s", status: "Finished", points: 0 },
        { position: 16, code: "HUL", team: "Kick Sauber", gap: "+80.237s", status: "Finished", points: 0 },
        { position: 17, code: "STR", team: "Aston Martin", gap: "+96.392s", status: "Finished", points: 0 },
        { position: 18, code: "GAS", team: "Alpine", gap: "+1 lap", status: "Finished", points: 0 },
        { position: 19, code: "COL", name: "Franco Colapinto", team: "Alpine", gap: "+1 lap", status: "Finished", points: 0 },
        { position: "NC", code: "PIA", team: "McLaren", status: "DNF", points: 0, note: "Retired on lap 1; five-second penalty for false start" }
      ],

      strategy: [
        "Max Verstappen controlled the race from pole and led the field around Baku.",
        "George Russell used strong race pace and strategy to finish second."
      ],

      keyMoments: [
        "Max Verstappen converted pole into victory.",
        "Carlos Sainz finished third and scored Williams' first podium of the season.",
        "Oscar Piastri retired on the opening lap after a difficult start.",
        "Liam Lawson finished fifth for Racing Bulls."
      ],

      penalties: [
        "Oscar Piastri received a five-second time penalty for a false start.",
        "Alexander Albon received a 10-second time penalty for causing a collision."
      ],

      notes: [
        "Carlos Sainz was voted Driver of the Day after his Williams podium.",
        "Max Verstappen set the fastest lap on lap 50.",
        "George Russell had the quickest listed pit-lane time in the official pit stop summary."
      ]
    }
  },
  18: {
    fp1: {
      status: "Verified",
      headline: "FP1 classification",
      classification: [
        { position: 1, code: "ALO", team: "Aston Martin", time: "1:31.116", gap: "—", laps: 23, tyres: [] },
        { position: 2, code: "LEC", team: "Ferrari", time: "", gap: "+0.150s", laps: 25, tyres: [] },
        { position: 3, code: "VER", team: "Red Bull Racing", time: "", gap: "+0.276s", laps: 24, tyres: [] },
        { position: 4, code: "HAM", team: "Ferrari", time: "", gap: "+0.364s", laps: 23, tyres: [] },
        { position: 5, code: "PIA", team: "McLaren", time: "", gap: "+0.365s", laps: 25, tyres: [] },
        { position: 6, code: "NOR", team: "McLaren", time: "", gap: "+0.582s", laps: 22, tyres: [] },
        { position: 7, code: "HAD", team: "Racing Bulls", time: "", gap: "+0.639s", laps: 28, tyres: [] },
        { position: 8, code: "SAI", team: "Williams", time: "", gap: "+0.696s", laps: 27, tyres: [] },
        { position: 9, code: "TSU", team: "Red Bull Racing", time: "", gap: "+0.744s", laps: 25, tyres: [] },
        { position: 10, code: "OCO", team: "Haas", time: "", gap: "+1.012s", laps: 24, tyres: [] },
        { position: 11, code: "RUS", team: "Mercedes", time: "", gap: "+1.023s", laps: 22, tyres: [] },
        { position: 12, code: "HUL", team: "Kick Sauber", time: "", gap: "+1.199s", laps: 29, tyres: [] },
        { position: 13, code: "GAS", team: "Alpine", time: "", gap: "+1.262s", laps: 26, tyres: [] },
        { position: 14, code: "ANT", team: "Mercedes", time: "", gap: "+1.283s", laps: 24, tyres: [] },
        { position: 15, code: "LAW", team: "Racing Bulls", time: "", gap: "+1.345s", laps: 27, tyres: [] },
        { position: 16, code: "BEA", team: "Haas", time: "", gap: "+1.422s", laps: 25, tyres: [] },
        { position: 17, code: "BOR", team: "Kick Sauber", time: "", gap: "+1.495s", laps: 27, tyres: [] },
        { position: 18, code: "STR", team: "Aston Martin", time: "", gap: "+1.918s", laps: 18, tyres: [] },
        { position: 19, code: "COL", name: "Franco Colapinto", team: "Alpine", time: "", gap: "+2.208s", laps: 26, tyres: [] },
        { position: 20, code: "ALB", team: "Williams", time: "", gap: "No time", laps: 2, tyres: [] }
      ],
      notes: [
        "Fernando Alonso topped FP1 for Aston Martin.",
        "Alexander Albon completed only two laps and did not set a representative time."
      ]
    },

    fp2: {
      status: "Verified",
      headline: "FP2 classification",
      classification: [
        { position: 1, code: "PIA", team: "McLaren", time: "1:30.714", gap: "—", laps: 19, tyres: [] },
        { position: 2, code: "HAD", team: "Racing Bulls", time: "", gap: "+0.132s", laps: 19, tyres: [] },
        { position: 3, code: "VER", team: "Red Bull Racing", time: "", gap: "+0.143s", laps: 19, tyres: [] },
        { position: 4, code: "ALO", team: "Aston Martin", time: "", gap: "+0.163s", laps: 19, tyres: [] },
        { position: 5, code: "NOR", team: "McLaren", time: "", gap: "+0.483s", laps: 18, tyres: [] },
        { position: 6, code: "STR", team: "Aston Martin", time: "", gap: "+0.508s", laps: 18, tyres: [] },
        { position: 7, code: "OCO", team: "Haas", time: "", gap: "+0.584s", laps: 19, tyres: [] },
        { position: 8, code: "SAI", team: "Williams", time: "", gap: "+0.585s", laps: 20, tyres: [] },
        { position: 9, code: "LEC", team: "Ferrari", time: "", gap: "+0.752s", laps: 18, tyres: [] },
        { position: 10, code: "HAM", team: "Ferrari", time: "", gap: "+0.777s", laps: 17, tyres: [] },
        { position: 11, code: "TSU", team: "Red Bull Racing", time: "", gap: "+0.994s", laps: 18, tyres: [] },
        { position: 12, code: "BEA", team: "Haas", time: "", gap: "+0.997s", laps: 18, tyres: [] },
        { position: 13, code: "ALB", team: "Williams", time: "", gap: "+1.346s", laps: 19, tyres: [] },
        { position: 14, code: "HUL", team: "Kick Sauber", time: "", gap: "+1.355s", laps: 19, tyres: [] },
        { position: 15, code: "BOR", team: "Kick Sauber", time: "", gap: "+1.605s", laps: 19, tyres: [] },
        { position: 16, code: "GAS", team: "Alpine", time: "", gap: "+1.744s", laps: 20, tyres: [] },
        { position: 17, code: "LAW", team: "Racing Bulls", time: "", gap: "+1.931s", laps: 10, tyres: [] },
        { position: 18, code: "ANT", team: "Mercedes", time: "", gap: "+2.005s", laps: 18, tyres: [] },
        { position: 19, code: "COL", name: "Franco Colapinto", team: "Alpine", time: "", gap: "+2.425s", laps: 20, tyres: [] },
        { position: 20, code: "RUS", team: "Mercedes", time: "", gap: "+2.517s", laps: 6, tyres: [] }
      ],
      notes: [
        "Oscar Piastri topped FP2 for McLaren.",
        "George Russell completed only six laps in the second practice session."
      ]
    },

    fp3: {
      status: "Verified",
      headline: "FP3 classification",
      classification: [
        { position: 1, code: "VER", team: "Red Bull Racing", time: "1:30.148", gap: "—", laps: 16, tyres: [] },
        { position: 2, code: "PIA", team: "McLaren", time: "", gap: "+0.017s", laps: 26, tyres: [] },
        { position: 3, code: "RUS", team: "Mercedes", time: "", gap: "+0.049s", laps: 18, tyres: [] },
        { position: 4, code: "ANT", team: "Mercedes", time: "", gap: "+0.089s", laps: 19, tyres: [] },
        { position: 5, code: "NOR", team: "McLaren", time: "", gap: "+0.089s", laps: 26, tyres: [] },
        { position: 6, code: "SAI", team: "Williams", time: "", gap: "+0.244s", laps: 23, tyres: [] },
        { position: 7, code: "HAD", team: "Racing Bulls", time: "", gap: "+0.341s", laps: 25, tyres: [] },
        { position: 8, code: "HAM", team: "Ferrari", time: "", gap: "+0.411s", laps: 23, tyres: [] },
        { position: 9, code: "HUL", team: "Kick Sauber", time: "", gap: "+0.489s", laps: 22, tyres: [] },
        { position: 10, code: "LEC", team: "Ferrari", time: "", gap: "+0.503s", laps: 23, tyres: [] },
        { position: 11, code: "ALB", team: "Williams", time: "", gap: "+0.520s", laps: 23, tyres: [] },
        { position: 12, code: "BOR", team: "Kick Sauber", time: "", gap: "+0.549s", laps: 25, tyres: [] },
        { position: 13, code: "OCO", team: "Haas", time: "", gap: "+0.636s", laps: 23, tyres: [] },
        { position: 14, code: "BEA", team: "Haas", time: "", gap: "+0.651s", laps: 24, tyres: [] },
        { position: 15, code: "ALO", team: "Aston Martin", time: "", gap: "+0.775s", laps: 22, tyres: [] },
        { position: 16, code: "COL", name: "Franco Colapinto", team: "Alpine", time: "", gap: "+0.899s", laps: 23, tyres: [] },
        { position: 17, code: "STR", team: "Aston Martin", time: "", gap: "+1.112s", laps: 24, tyres: [] },
        { position: 18, code: "TSU", team: "Red Bull Racing", time: "", gap: "+1.292s", laps: 25, tyres: [] },
        { position: 19, code: "GAS", team: "Alpine", time: "", gap: "+1.495s", laps: 23, tyres: [] },
        { position: 20, code: "LAW", team: "Racing Bulls", time: "", gap: "+3.480s", laps: 7, tyres: [] }
      ],
      notes: [
        "Max Verstappen topped FP3 for Red Bull Racing.",
        "Oscar Piastri was second, only 0.017s behind."
      ]
    },

    qualifying: {
      status: "Verified",
      pole: "RUS",

      q1: {
        classification: [
          { position: 1, code: "RUS", time: "1:29.928" },
          { position: 2, code: "VER", time: "1:30.028" },
          { position: 3, code: "PIA", time: "1:30.313" },
          { position: 4, code: "ANT", time: "1:30.036" },
          { position: 5, code: "NOR", time: "1:29.932" },
          { position: 6, code: "HAM", time: "1:29.765" },
          { position: 7, code: "LEC", time: "1:30.370" },
          { position: 8, code: "HAD", time: "1:30.214" },
          { position: 9, code: "BEA", time: "1:30.420" },
          { position: 10, code: "ALO", time: "1:30.745" },
          { position: 11, code: "HUL", time: "1:30.715" },
          { position: 12, code: "LAW", time: "1:30.681" },
          { position: 13, code: "TSU", time: "1:30.574" },
          { position: 14, code: "BOR", time: "1:30.820" },
          { position: 15, code: "STR", time: "1:30.949" },
          { position: 16, code: "COL", name: "Franco Colapinto", time: "1:30.982" },
          { position: 17, code: "OCO", time: "1:30.989" },
          { position: 18, code: "GAS", time: "1:31.261" },
          { position: "DQ", code: "ALB", time: "1:30.202" },
          { position: "DQ", code: "SAI", time: "1:30.235" }
        ]
      },

      q2: {
        classification: [
          { position: 1, code: "RUS", time: "1:29.562" },
          { position: 2, code: "VER", time: "1:29.572" },
          { position: 3, code: "PIA", time: "1:29.813" },
          { position: 4, code: "ANT", time: "1:29.649" },
          { position: 5, code: "NOR", time: "1:29.809" },
          { position: 6, code: "HAM", time: "1:29.936" },
          { position: 7, code: "LEC", time: "1:29.914" },
          { position: 8, code: "HAD", time: "1:30.016" },
          { position: 9, code: "BEA", time: "1:30.076" },
          { position: 10, code: "ALO", time: "1:30.054" },
          { position: 11, code: "HUL", time: "1:30.141" },
          { position: 12, code: "LAW", time: "1:30.320" },
          { position: 13, code: "TSU", time: "1:30.353" }
        ]
      },

      q3: {
        classification: [
          { position: 1, code: "RUS", time: "1:29.158" },
          { position: 2, code: "VER", time: "1:29.340" },
          { position: 3, code: "PIA", time: "1:29.524" },
          { position: 4, code: "ANT", time: "1:29.537" },
          { position: 5, code: "NOR", time: "1:29.586" },
          { position: 6, code: "HAM", time: "1:29.688" },
          { position: 7, code: "LEC", time: "1:29.784" },
          { position: 8, code: "HAD", time: "1:29.846" },
          { position: 9, code: "BEA", time: "1:29.868" },
          { position: 10, code: "ALO", time: "1:29.955" }
        ]
      },

      notes: [
        "George Russell took pole position for Mercedes.",
        "Carlos Sainz and Alexander Albon were disqualified from Qualifying for rear wing technical infringements."
      ]
    },

    startingGrid: {
      status: "Verified",
      poleSide: "left",
      positions: [
        { grid: 1, code: "RUS", team: "Mercedes", qualified: 1, note: "Pole position" },
        { grid: 2, code: "VER", team: "Red Bull Racing", qualified: 2 },
        { grid: 3, code: "PIA", team: "McLaren", qualified: 3 },
        { grid: 4, code: "ANT", team: "Mercedes", qualified: 4 },
        { grid: 5, code: "NOR", team: "McLaren", qualified: 5 },
        { grid: 6, code: "HAM", team: "Ferrari", qualified: 6 },
        { grid: 7, code: "LEC", team: "Ferrari", qualified: 7 },
        { grid: 8, code: "HAD", team: "Racing Bulls", qualified: 8 },
        { grid: 9, code: "BEA", team: "Haas", qualified: 9 },
        { grid: 10, code: "ALO", team: "Aston Martin", qualified: 10 },
        { grid: 11, code: "HUL", team: "Kick Sauber", qualified: 11 },
        { grid: 12, code: "LAW", team: "Racing Bulls", qualified: 12 },
        { grid: 13, code: "TSU", team: "Red Bull Racing", qualified: 13 },
        { grid: 14, code: "BOR", team: "Kick Sauber", qualified: 14 },
        { grid: 15, code: "STR", team: "Aston Martin", qualified: 15 },
        { grid: 16, code: "COL", name: "Franco Colapinto", team: "Alpine", qualified: 16 },
        { grid: 17, code: "OCO", team: "Haas", qualified: 17 },
        { grid: 18, code: "SAI", team: "Williams", qualified: "DQ", reason: "Raced at the Stewards' discretion after disqualification from Qualifying" },
        { grid: 19, code: "GAS", team: "Alpine", qualified: 18, reason: "Required to start from pit lane after Parc Ferme changes" },
        { grid: 20, code: "ALB", team: "Williams", qualified: "DQ", reason: "Disqualified from Qualifying and required to start from pit lane after Parc Ferme changes" }
      ],
      notes: [
        "George Russell started from pole.",
        "Carlos Sainz and Alexander Albon raced at the Stewards' discretion after disqualification from Qualifying.",
        "Alexander Albon and Pierre Gasly were required to start from the pit lane."
      ]
    },

    race: {
      status: "Verified",

      fastestLap: {
        code: "HAM",
        time: "1:33.808",
        lap: 48
      },

      fastestPitStop: {
        team: "McLaren",
        driver: "NOR",
        time: "23.314s pit-lane time"
      },

      driverOfTheDay: "ALO",

      podium: [
        { position: 1, code: "RUS", team: "Mercedes", time: "1:40:22.367" },
        { position: 2, code: "VER", team: "Red Bull Racing", gap: "+5.430s" },
        { position: 3, code: "NOR", team: "McLaren", gap: "+6.066s" }
      ],

      fullClassification: [
        { position: 1, code: "RUS", team: "Mercedes", time: "1:40:22.367", status: "Finished", points: 25 },
        { position: 2, code: "VER", team: "Red Bull Racing", gap: "+5.430s", status: "Finished", points: 18 },
        { position: 3, code: "NOR", team: "McLaren", gap: "+6.066s", status: "Finished", points: 15 },
        { position: 4, code: "PIA", team: "McLaren", gap: "+8.146s", status: "Finished", points: 12 },
        { position: 5, code: "ANT", team: "Mercedes", gap: "+33.681s", status: "Finished", points: 10 },
        { position: 6, code: "LEC", team: "Ferrari", gap: "+45.996s", status: "Finished", points: 8 },
        { position: 7, code: "ALO", team: "Aston Martin", gap: "+80.667s", status: "Finished", points: 6 },
        { position: 8, code: "HAM", team: "Ferrari", gap: "+85.251s", status: "Finished", points: 4, note: "Five-second time penalty for exceeding track limits" },
        { position: 9, code: "BEA", team: "Haas", gap: "+93.527s", status: "Finished", points: 2 },
        { position: 10, code: "SAI", team: "Williams", gap: "+1 lap", status: "Finished", points: 1 },
        { position: 11, code: "HAD", team: "Racing Bulls", gap: "+1 lap", status: "Finished", points: 0 },
        { position: 12, code: "TSU", team: "Red Bull Racing", gap: "+1 lap", status: "Finished", points: 0 },
        { position: 13, code: "STR", team: "Aston Martin", gap: "+1 lap", status: "Finished", points: 0 },
        { position: 14, code: "ALB", team: "Williams", gap: "+1 lap", status: "Finished", points: 0 },
        { position: 15, code: "LAW", team: "Racing Bulls", gap: "+1 lap", status: "Finished", points: 0 },
        { position: 16, code: "COL", name: "Franco Colapinto", team: "Alpine", gap: "+1 lap", status: "Finished", points: 0 },
        { position: 17, code: "BOR", team: "Kick Sauber", gap: "+1 lap", status: "Finished", points: 0 },
        { position: 18, code: "OCO", team: "Haas", gap: "+1 lap", status: "Finished", points: 0 },
        { position: 19, code: "GAS", team: "Alpine", gap: "+1 lap", status: "Finished", points: 0 },
        { position: 20, code: "HUL", team: "Kick Sauber", gap: "+1 lap", status: "Finished", points: 0 }
      ],

      strategy: [
        "George Russell controlled the race from pole position and was rarely troubled at the front.",
        "Lando Norris gained places early but made contact with Oscar Piastri and Max Verstappen at Turn 3.",
        "McLaren secured the Constructors' Championship in Singapore."
      ],

      keyMoments: [
        "George Russell converted pole into victory.",
        "Max Verstappen finished second for Red Bull Racing.",
        "Lando Norris completed the podium for McLaren.",
        "Fernando Alonso recovered to seventh and was voted Driver of the Day.",
        "Lewis Hamilton set the fastest lap but received a five-second penalty for track limits."
      ],

      penalties: [
        "Lewis Hamilton received a five-second time penalty for exceeding track limits."
      ],

      notes: [
        "Fernando Alonso was voted Driver of the Day.",
        "Lewis Hamilton set the fastest lap on lap 48.",
        "Lando Norris had the quickest listed pit-lane time in the official pit stop summary."
      ]
    }
  },
  19: createSprintWeekendTemplate(),
  20: createNormalWeekendTemplate(),
  21: createSprintWeekendTemplate(),
  22: createNormalWeekendTemplate(),
  23: createSprintWeekendTemplate(),
  24: createNormalWeekendTemplate()
};