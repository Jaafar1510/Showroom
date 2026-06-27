const sprintRounds2025 = [2, 6, 13, 19, 21, 23];

const raceDetails2025 = {
  1: {
    weekendFormat: "normal",
    circuit: {
      firstGrandPrix: "1996",
      length: "5.278 km",
      laps: 58,
      raceDistance: "306.124 km",
      lapRecord: "1:19.813 — Charles Leclerc, 2024"
    },
    tyres: {
      compounds: ["C3 Hard", "C4 Medium", "C5 Soft"],
      allocation: "2 hard sets, 3 medium sets, and 8 soft sets per driver"
    },
    notes: [
      "Albert Park opened the 2025 Formula 1 season.",
      "The circuit mixes fast straights with technical low and medium-speed corners."
    ]
  },

  2: {
    weekendFormat: "sprint",
    circuit: {
      firstGrandPrix: "2004",
      length: "5.451 km",
      laps: 56,
      raceDistance: "305.066 km",
      lapRecord: "1:32.238 — Michael Schumacher, 2004"
    }
  },

  3: {
    weekendFormat: "normal",
    circuit: {
      firstGrandPrix: "1987",
      length: "5.807 km",
      laps: 53,
      raceDistance: "307.471 km",
      lapRecord: "1:30.965 — Kimi Antonelli, 2025"
    }
  },

  4: {
    weekendFormat: "normal",
    circuit: {
      firstGrandPrix: "2004",
      length: "5.412 km",
      laps: 57,
      raceDistance: "308.238 km",
      lapRecord: "1:31.447 — Pedro de la Rosa, 2005"
    }
  },

  5: {
    weekendFormat: "normal",
    circuit: {
      firstGrandPrix: "2021",
      length: "6.174 km",
      laps: 50,
      raceDistance: "308.450 km",
      lapRecord: "1:30.734 — Lewis Hamilton, 2021"
    }
  },

  6: {
    weekendFormat: "sprint",
    circuit: {
      firstGrandPrix: "2022",
      length: "5.412 km",
      laps: 57,
      raceDistance: "308.326 km",
      lapRecord: "1:29.708 — Max Verstappen, 2023"
    }
  },

  7: {
    weekendFormat: "normal",
    circuit: {
      firstGrandPrix: "1980",
      length: "4.909 km",
      laps: 63,
      raceDistance: "309.049 km",
      lapRecord: "1:15.484 — Lewis Hamilton, 2020"
    }
  },

  8: {
    weekendFormat: "normal",
    circuit: {
      firstGrandPrix: "1950",
      length: "3.337 km",
      laps: 78,
      raceDistance: "260.286 km",
      lapRecord: "1:12.909 — Lewis Hamilton, 2021"
    }
  },

  9: {
    weekendFormat: "normal",
    circuit: {
      firstGrandPrix: "1991",
      length: "4.657 km",
      laps: 66,
      raceDistance: "307.236 km",
      lapRecord: "1:16.330 — Max Verstappen, 2023"
    }
  },

  10: {
    weekendFormat: "normal",
    circuit: {
      firstGrandPrix: "1978",
      length: "4.361 km",
      laps: 70,
      raceDistance: "305.270 km",
      lapRecord: "1:13.078 — Valtteri Bottas, 2019"
    }
  },

  11: {
    weekendFormat: "normal",
    circuit: {
      firstGrandPrix: "1970",
      length: "4.318 km",
      laps: 71,
      raceDistance: "306.452 km",
      lapRecord: "1:05.619 — Carlos Sainz, 2020"
    }
  },

  12: {
    weekendFormat: "normal",
    circuit: {
      firstGrandPrix: "1950",
      length: "5.891 km",
      laps: 52,
      raceDistance: "306.198 km",
      lapRecord: "1:27.097 — Max Verstappen, 2020"
    }
  },

  13: {
    weekendFormat: "sprint",
    circuit: {
      firstGrandPrix: "1950",
      length: "7.004 km",
      laps: 44,
      raceDistance: "308.052 km",
      lapRecord: "1:46.286 — Valtteri Bottas, 2018"
    }
  },

  14: {
    weekendFormat: "normal",
    circuit: {
      firstGrandPrix: "1986",
      length: "4.381 km",
      laps: 70,
      raceDistance: "306.630 km",
      lapRecord: "1:16.627 — Lewis Hamilton, 2020"
    }
  },

  15: {
    weekendFormat: "normal",
    circuit: {
      firstGrandPrix: "1952",
      length: "4.259 km",
      laps: 72,
      raceDistance: "306.587 km",
      lapRecord: "1:11.097 — Lewis Hamilton, 2021"
    }
  },

  16: {
    weekendFormat: "normal",
    circuit: {
      firstGrandPrix: "1950",
      length: "5.793 km",
      laps: 53,
      raceDistance: "306.720 km",
      lapRecord: "1:20.901 — Lando Norris, 2025"
    }
  },

  17: {
    weekendFormat: "normal",
    circuit: {
      firstGrandPrix: "2016",
      length: "6.003 km",
      laps: 51,
      raceDistance: "306.049 km",
      lapRecord: "1:43.009 — Charles Leclerc, 2019"
    }
  },

  18: {
    weekendFormat: "normal",
    circuit: {
      firstGrandPrix: "2008",
      length: "4.940 km",
      laps: 62,
      raceDistance: "306.143 km",
      lapRecord: "1:34.486 — Daniel Ricciardo, 2024"
    }
  },

  19: {
    weekendFormat: "sprint",
    circuit: {
      firstGrandPrix: "2012",
      length: "5.513 km",
      laps: 56,
      raceDistance: "308.405 km",
      lapRecord: "1:36.169 — Charles Leclerc, 2019"
    }
  },

  20: {
    weekendFormat: "normal",
    circuit: {
      firstGrandPrix: "1963",
      length: "4.304 km",
      laps: 71,
      raceDistance: "305.354 km",
      lapRecord: "1:17.774 — Valtteri Bottas, 2021"
    }
  },

  21: {
    weekendFormat: "sprint",
    circuit: {
      firstGrandPrix: "1973",
      length: "4.309 km",
      laps: 71,
      raceDistance: "305.879 km",
      lapRecord: "1:10.540 — Valtteri Bottas, 2018"
    }
  },

  22: {
    weekendFormat: "normal",
    circuit: {
      firstGrandPrix: "2023",
      length: "6.201 km",
      laps: 50,
      raceDistance: "309.958 km",
      lapRecord: "1:35.490 — Oscar Piastri, 2023"
    }
  },

  23: {
    weekendFormat: "sprint",
    circuit: {
      firstGrandPrix: "2021",
      length: "5.419 km",
      laps: 57,
      raceDistance: "308.611 km",
      lapRecord: "1:24.319 — Max Verstappen, 2023"
    }
  },

  24: {
    weekendFormat: "normal",
    circuit: {
      firstGrandPrix: "2009",
      length: "5.281 km",
      laps: 58,
      raceDistance: "306.183 km",
      lapRecord: "1:26.103 — Max Verstappen, 2021"
    }
  }
};

const tyreSelections2025 = {
  1: ["C3 Hard", "C4 Medium", "C5 Soft"],
  2: ["C2 Hard", "C3 Medium", "C4 Soft"],
  3: ["C1 Hard", "C2 Medium", "C3 Soft"],
  4: ["C1 Hard", "C2 Medium", "C3 Soft"],
  5: ["C3 Hard", "C4 Medium", "C5 Soft"],
  6: ["C3 Hard", "C4 Medium", "C5 Soft"],
  7: ["C4 Hard", "C5 Medium", "C6 Soft"],
  8: ["C4 Hard", "C5 Medium", "C6 Soft"],
  9: ["C1 Hard", "C2 Medium", "C3 Soft"],
  10: ["C4 Hard", "C5 Medium", "C6 Soft"],
  11: ["C3 Hard", "C4 Medium", "C5 Soft"],
  12: ["C2 Hard", "C3 Medium", "C4 Soft"],
  13: ["C1 Hard", "C3 Medium", "C4 Soft"],
  14: ["C3 Hard", "C4 Medium", "C5 Soft"],
  15: ["C2 Hard", "C3 Medium", "C4 Soft"],
  16: ["C3 Hard", "C4 Medium", "C5 Soft"],
  17: ["C4 Hard", "C5 Medium", "C6 Soft"],
  18: ["C3 Hard", "C4 Medium", "C5 Soft"],
  19: ["C1 Hard", "C3 Medium", "C4 Soft"],
  20: ["C2 Hard", "C4 Medium", "C5 Soft"],
  21: ["C2 Hard", "C3 Medium", "C4 Soft"],
  22: ["C3 Hard", "C4 Medium", "C5 Soft"],
  23: ["C1 Hard", "C2 Medium", "C3 Soft"],
  24: ["C3 Hard", "C4 Medium", "C5 Soft"]
};

Object.keys(tyreSelections2025).forEach((round) => {
  raceDetails2025[round].tyres = {
    compounds: tyreSelections2025[round],
    allocation: "Dry tyre compounds nominated for this Grand Prix weekend. Intermediate and Wet tyres are available if conditions require them."
  };
});