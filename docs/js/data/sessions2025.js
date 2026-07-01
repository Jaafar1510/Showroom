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
  5: createNormalWeekendTemplate(),
  6: createSprintWeekendTemplate(),
  7: createNormalWeekendTemplate(),
  8: createNormalWeekendTemplate(),
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