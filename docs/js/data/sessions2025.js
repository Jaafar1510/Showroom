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
  3: createNormalWeekendTemplate(),
  4: createNormalWeekendTemplate(),
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