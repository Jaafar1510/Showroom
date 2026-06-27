const sessionDetails2025 = {
  1: {
    fp1: {
      status: "Demo data",
      headline: "Sample FP1 timing data to test the weekend session layout.",
      classification: [
        {
          position: 1,
          code: "NOR",
          team: "McLaren",
          time: "1:17.812",
          gap: "",
          laps: 24,
          tyres: ["C5 Soft"]
        },
        {
          position: 2,
          code: "VER",
          team: "Red Bull Racing",
          time: "1:17.954",
          gap: "+0.142",
          laps: 22,
          tyres: ["C5 Soft"]
        },
        {
          position: 3,
          code: "LEC",
          team: "Ferrari",
          time: "1:18.033",
          gap: "+0.221",
          laps: 25,
          tyres: ["C4 Medium"]
        }
      ],
      notes: [
        "Demo FP1 note: teams focused on setup checks and early tyre learning.",
        "Demo FP1 note: soft tyre runs appeared late in the session."
      ]
    },

    fp2: {
      status: "Demo data",
      headline: "Sample FP2 long-run and qualifying simulation data.",
      classification: [
        {
          position: 1,
          code: "PIA",
          team: "McLaren",
          time: "1:16.945",
          gap: "",
          laps: 28,
          tyres: ["C5 Soft"]
        },
        {
          position: 2,
          code: "RUS",
          team: "Mercedes",
          time: "1:17.081",
          gap: "+0.136",
          laps: 27,
          tyres: ["C5 Soft"]
        },
        {
          position: 3,
          code: "HAM",
          team: "Ferrari",
          time: "1:17.144",
          gap: "+0.199",
          laps: 26,
          tyres: ["C4 Medium"]
        }
      ],
      notes: [
        "Demo FP2 note: race pace comparison and tyre degradation notes will appear here.",
        "Demo FP2 note: this section can later include long-run observations."
      ]
    },

    fp3: {
      status: "Demo data",
      headline: "Sample FP3 final practice data before qualifying.",
      classification: [
        {
          position: 1,
          code: "VER",
          team: "Red Bull Racing",
          time: "1:16.702",
          gap: "",
          laps: 19,
          tyres: ["C5 Soft"]
        },
        {
          position: 2,
          code: "NOR",
          team: "McLaren",
          time: "1:16.811",
          gap: "+0.109",
          laps: 21,
          tyres: ["C5 Soft"]
        },
        {
          position: 3,
          code: "LEC",
          team: "Ferrari",
          time: "1:16.950",
          gap: "+0.248",
          laps: 20,
          tyres: ["C5 Soft"]
        }
      ],
      notes: [
        "Demo FP3 note: final qualifying preparation and balance checks."
      ]
    },

    qualifying: {
      status: "Demo data",
      pole: "NOR",

      q1: {
        classification: [
          { position: 1, code: "NOR", time: "1:16.582" },
          { position: 2, code: "VER", time: "1:16.671" },
          { position: 3, code: "PIA", time: "1:16.744" },
          { position: 4, code: "LEC", time: "1:16.812" },
          { position: 5, code: "RUS", time: "1:16.900" },
          { position: 16, code: "HUL", time: "1:17.431" },
          { position: 17, code: "OCO", time: "1:17.589" },
          { position: 18, code: "BOR", time: "1:17.601" },
          { position: 19, code: "DOO", time: "1:17.735" },
          { position: 20, code: "HAD", time: "1:17.899" }
        ]
      },

      q2: {
        classification: [
          { position: 1, code: "NOR", time: "1:16.122" },
          { position: 2, code: "PIA", time: "1:16.188" },
          { position: 3, code: "VER", time: "1:16.240" },
          { position: 4, code: "LEC", time: "1:16.315" },
          { position: 5, code: "RUS", time: "1:16.402" },
          { position: 11, code: "ALB", time: "1:16.998" },
          { position: 12, code: "SAI", time: "1:17.040" },
          { position: 13, code: "ALO", time: "1:17.108" },
          { position: 14, code: "TSU", time: "1:17.188" },
          { position: 15, code: "STR", time: "1:17.302" }
        ]
      },

      q3: {
        classification: [
          { position: 1, code: "NOR", time: "1:15.912" },
          { position: 2, code: "PIA", time: "1:16.021" },
          { position: 3, code: "VER", time: "1:16.103" },
          { position: 4, code: "LEC", time: "1:16.212" },
          { position: 5, code: "RUS", time: "1:16.350" }
        ]
      },

      notes: [
        "Demo qualifying note: Q1/Q2/Q3 are displayed together in one timing board.",
        "Demo qualifying note: drivers eliminated in Q1 or Q2 show no time in later phases."
      ]
    },

    startingGrid: {
      status: "Demo data",
      poleSide: "left",
      positions: [
        { grid: 1, code: "NOR", team: "McLaren", qualified: 1, note: "Pole position" },
        { grid: 2, code: "PIA", team: "McLaren", qualified: 2 },
        { grid: 3, code: "VER", team: "Red Bull Racing", qualified: 3 },
        { grid: 4, code: "LEC", team: "Ferrari", qualified: 4 },
        { grid: 5, code: "RUS", team: "Mercedes", qualified: 5 },
        { grid: 6, code: "HAM", team: "Ferrari", qualified: 6 },
        { grid: 7, code: "ALO", team: "Aston Martin", qualified: 8, note: "Demo grid change" },
        { grid: 8, code: "SAI", team: "Williams", qualified: 7, note: "Demo penalty/drop" },
        { grid: 9, code: "ALB", team: "Williams", qualified: 9 },
        { grid: 10, code: "TSU", team: "Racing Bulls", qualified: 10 }
      ],
      notes: [
        "Demo grid note: this layout is for testing the staggered F1 starting grid visual.",
        "Real data will include all 20 starters and penalty notes."
      ]
    },

    race: {
      status: "Demo data",

      podium: [
        {
          position: 1,
          code: "NOR",
          team: "McLaren",
          time: "1:42:06.304"
        },
        {
          position: 2,
          code: "VER",
          team: "Red Bull Racing",
          gap: "+0.895"
        },
        {
          position: 3,
          code: "PIA",
          team: "McLaren",
          gap: "+1.423"
        }
      ],

      fastestLap: {
        code: "LEC",
        time: "1:20.945",
        lap: 48
      },

      fastestPitStop: {
        team: "Ferrari",
        driver: "HAM",
        time: "2.21s"
      },

      driverOfTheDay: "NOR",

      fullClassification: [
        {
          position: 1,
          code: "NOR",
          team: "McLaren",
          time: "1:42:06.304",
          status: "Finished",
          points: 25
        },
        {
          position: 2,
          code: "VER",
          team: "Red Bull Racing",
          gap: "+0.895",
          status: "Finished",
          points: 18
        },
        {
          position: 3,
          code: "PIA",
          team: "McLaren",
          gap: "+1.423",
          status: "Finished",
          points: 15
        },
        {
          position: 4,
          code: "LEC",
          team: "Ferrari",
          gap: "+8.212",
          status: "Finished",
          points: 12
        },
        {
          position: 5,
          code: "RUS",
          team: "Mercedes",
          gap: "+11.944",
          status: "Finished",
          points: 10
        },
        {
          position: 6,
          code: "HAM",
          team: "Ferrari",
          gap: "+18.500",
          status: "Finished",
          points: 8
        },
        {
          position: 7,
          code: "ALO",
          team: "Aston Martin",
          gap: "+25.302",
          status: "Finished",
          points: 6
        },
        {
          position: 8,
          code: "SAI",
          team: "Williams",
          gap: "+31.880",
          status: "Finished",
          points: 4
        },
        {
          position: 9,
          code: "ALB",
          team: "Williams",
          gap: "+40.102",
          status: "Finished",
          points: 2
        },
        {
          position: 10,
          code: "TSU",
          team: "Racing Bulls",
          gap: "+48.700",
          status: "Finished",
          points: 1
        },
        {
          position: 11,
          code: "HUL",
          team: "Kick Sauber",
          gap: "+1 lap",
          status: "Finished",
          points: 0
        },
        {
          position: "DNF",
          code: "OCO",
          team: "Haas",
          status: "Retired",
          points: 0,
          note: "Demo retirement note"
        }
      ],

      strategy: [
        "Demo strategy note: race strategy summaries will describe tyre choices and stint lengths.",
        "Demo strategy note: this area can mention undercuts, overcuts, safety cars, or late stops."
      ],

      keyMoments: [
        "Demo key moment: opening lap battle for the lead.",
        "Demo key moment: safety car or weather event can be listed here.",
        "Demo key moment: late-race pressure between podium contenders."
      ],

      penalties: [
        "Demo penalty note: driver penalty or investigation details can appear here."
      ],

      notes: [
        "Demo race note: full classification starts from P4 visually because P1-P3 are already displayed on the podium.",
        "Demo race note: all demo values will be replaced with verified race data later."
      ]
    }
  }
};