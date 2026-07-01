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
  9: createNormalWeekendTemplate(),
  10: createNormalWeekendTemplate(),
  11: createNormalWeekendTemplate(),
  12: createNormalWeekendTemplate(),
  13: createSprintWeekendTemplate(),
  14: createNormalWeekendTemplate(),
  15: createNormalWeekendTemplate(),
  16: createNormalWeekendTemplate(),
  17: createNormalWeekendTemplate(),
  18: createNormalWeekendTemplate(),
  19: createSprintWeekendTemplate(),
  20: createNormalWeekendTemplate(),
  21: createSprintWeekendTemplate(),
  22: createNormalWeekendTemplate(),
  23: createSprintWeekendTemplate(),
  24: createNormalWeekendTemplate()
};