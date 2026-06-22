const racePointsSystem = {
  1: 25,
  2: 18,
  3: 15,
  4: 12,
  5: 10,
  6: 8,
  7: 6,
  8: 4,
  9: 2,
  10: 1
};

const raceResults2025 = [
  {
    round: 1,
    race: "Australian Grand Prix",
    results: [
      { code: "NOR", team: "McLaren" },
      { code: "VER", team: "Red Bull Racing" },
      { code: "RUS", team: "Mercedes" },
      { code: "ANT", team: "Mercedes" },
      { code: "ALB", team: "Williams" },
      { code: "STR", team: "Aston Martin" },
      { code: "HUL", team: "Kick Sauber" },
      { code: "LEC", team: "Ferrari" },
      { code: "PIA", team: "McLaren" },
      { code: "HAM", team: "Ferrari" }
    ]
  },
  {
    round: 2,
    race: "Chinese Grand Prix",
    results: [
      { code: "PIA", team: "McLaren" },
      { code: "NOR", team: "McLaren" },
      { code: "RUS", team: "Mercedes" },
      { code: "VER", team: "Red Bull Racing" },
      { code: "OCO", team: "Haas" },
      { code: "ANT", team: "Mercedes" },
      { code: "ALB", team: "Williams" },
      { code: "BEA", team: "Haas" },
      { code: "STR", team: "Aston Martin" },
      { code: "SAI", team: "Williams" }
    ]
  },
  {
    round: 3,
    race: "Japanese Grand Prix",
    results: [
      { code: "VER", team: "Red Bull Racing" },
      { code: "NOR", team: "McLaren" },
      { code: "PIA", team: "McLaren" },
      { code: "LEC", team: "Ferrari" },
      { code: "RUS", team: "Mercedes" },
      { code: "ANT", team: "Mercedes" },
      { code: "HAM", team: "Ferrari" },
      { code: "HAD", team: "Racing Bulls" },
      { code: "ALB", team: "Williams" },
      { code: "BEA", team: "Haas" }
    ]
  },
  {
    round: 4,
    race: "Bahrain Grand Prix",
    results: [
      { code: "PIA", team: "McLaren" },
      { code: "RUS", team: "Mercedes" },
      { code: "NOR", team: "McLaren" },
      { code: "LEC", team: "Ferrari" },
      { code: "HAM", team: "Ferrari" },
      { code: "VER", team: "Red Bull Racing" },
      { code: "GAS", team: "Alpine" },
      { code: "OCO", team: "Haas" },
      { code: "TSU", team: "Red Bull Racing" },
      { code: "BEA", team: "Haas" }
    ]
  },
  {
    round: 5,
    race: "Saudi Arabian Grand Prix",
    results: [
      { code: "PIA", team: "McLaren" },
      { code: "VER", team: "Red Bull Racing" },
      { code: "LEC", team: "Ferrari" },
      { code: "NOR", team: "McLaren" },
      { code: "RUS", team: "Mercedes" },
      { code: "ANT", team: "Mercedes" },
      { code: "HAM", team: "Ferrari" },
      { code: "SAI", team: "Williams" },
      { code: "ALB", team: "Williams" },
      { code: "HAD", team: "Racing Bulls" }
    ]
  },
    {
    round: 6,
    race: "Miami Grand Prix",
    results: [
      { code: "PIA", team: "McLaren" },
      { code: "NOR", team: "McLaren" },
      { code: "RUS", team: "Mercedes" },
      { code: "VER", team: "Red Bull Racing" },
      { code: "ALB", team: "Williams" },
      { code: "ANT", team: "Mercedes" },
      { code: "LEC", team: "Ferrari" },
      { code: "HAM", team: "Ferrari" },
      { code: "SAI", team: "Williams" },
      { code: "TSU", team: "Red Bull Racing" }
    ]
  },
  {
    round: 7,
    race: "Emilia-Romagna Grand Prix",
    results: [
      { code: "VER", team: "Red Bull Racing" },
      { code: "NOR", team: "McLaren" },
      { code: "PIA", team: "McLaren" },
      { code: "HAM", team: "Ferrari" },
      { code: "ALB", team: "Williams" },
      { code: "LEC", team: "Ferrari" },
      { code: "RUS", team: "Mercedes" },
      { code: "SAI", team: "Williams" },
      { code: "HAD", team: "Racing Bulls" },
      { code: "TSU", team: "Red Bull Racing" }
    ]
  },
  {
    round: 8,
    race: "Monaco Grand Prix",
    results: [
      { code: "NOR", team: "McLaren" },
      { code: "LEC", team: "Ferrari" },
      { code: "PIA", team: "McLaren" },
      { code: "VER", team: "Red Bull Racing" },
      { code: "HAM", team: "Ferrari" },
      { code: "HAD", team: "Racing Bulls" },
      { code: "OCO", team: "Haas" },
      { code: "LAW", team: "Racing Bulls" },
      { code: "ALB", team: "Williams" },
      { code: "SAI", team: "Williams" }
    ]
  },
  {
    round: 9,
    race: "Spanish Grand Prix",
    results: [
      { code: "PIA", team: "McLaren" },
      { code: "NOR", team: "McLaren" },
      { code: "LEC", team: "Ferrari" },
      { code: "RUS", team: "Mercedes" },
      { code: "HUL", team: "Kick Sauber" },
      { code: "HAM", team: "Ferrari" },
      { code: "HAD", team: "Racing Bulls" },
      { code: "GAS", team: "Alpine" },
      { code: "ALO", team: "Aston Martin" },
      { code: "VER", team: "Red Bull Racing" }
    ]
  },
  {
    round: 10,
    race: "Canadian Grand Prix",
    results: [
      { code: "RUS", team: "Mercedes" },
      { code: "VER", team: "Red Bull Racing" },
      { code: "ANT", team: "Mercedes" },
      { code: "PIA", team: "McLaren" },
      { code: "LEC", team: "Ferrari" },
      { code: "HAM", team: "Ferrari" },
      { code: "ALO", team: "Aston Martin" },
      { code: "HUL", team: "Kick Sauber" },
      { code: "OCO", team: "Haas" },
      { code: "SAI", team: "Williams" }
    ]
  },
    {
    round: 11,
    race: "Austrian Grand Prix",
    results: [
      { code: "NOR", team: "McLaren" },
      { code: "PIA", team: "McLaren" },
      { code: "LEC", team: "Ferrari" },
      { code: "HAM", team: "Ferrari" },
      { code: "RUS", team: "Mercedes" },
      { code: "LAW", team: "Racing Bulls" },
      { code: "ALO", team: "Aston Martin" },
      { code: "BOR", team: "Kick Sauber" },
      { code: "HUL", team: "Kick Sauber" },
      { code: "OCO", team: "Haas" }
    ]
  },
  {
    round: 12,
    race: "British Grand Prix",
    results: [
      { code: "NOR", team: "McLaren" },
      { code: "PIA", team: "McLaren" },
      { code: "HUL", team: "Kick Sauber" },
      { code: "HAM", team: "Ferrari" },
      { code: "VER", team: "Red Bull Racing" },
      { code: "GAS", team: "Alpine" },
      { code: "STR", team: "Aston Martin" },
      { code: "ALB", team: "Williams" },
      { code: "ALO", team: "Aston Martin" },
      { code: "RUS", team: "Mercedes" }
    ]
  },
  {
    round: 13,
    race: "Belgian Grand Prix",
    results: [
      { code: "PIA", team: "McLaren" },
      { code: "NOR", team: "McLaren" },
      { code: "LEC", team: "Ferrari" },
      { code: "VER", team: "Red Bull Racing" },
      { code: "RUS", team: "Mercedes" },
      { code: "ALB", team: "Williams" },
      { code: "HAM", team: "Ferrari" },
      { code: "LAW", team: "Racing Bulls" },
      { code: "BOR", team: "Kick Sauber" },
      { code: "GAS", team: "Alpine" }
    ]
  },
  {
    round: 14,
    race: "Hungarian Grand Prix",
    results: [
      { code: "NOR", team: "McLaren" },
      { code: "PIA", team: "McLaren" },
      { code: "RUS", team: "Mercedes" },
      { code: "LEC", team: "Ferrari" },
      { code: "ALO", team: "Aston Martin" },
      { code: "BOR", team: "Kick Sauber" },
      { code: "STR", team: "Aston Martin" },
      { code: "LAW", team: "Racing Bulls" },
      { code: "VER", team: "Red Bull Racing" },
      { code: "ANT", team: "Mercedes" }
    ]
  },
  {
    round: 15,
    race: "Dutch Grand Prix",
    results: [
      { code: "PIA", team: "McLaren" },
      { code: "VER", team: "Red Bull Racing" },
      { code: "HAD", team: "Racing Bulls" },
      { code: "RUS", team: "Mercedes" },
      { code: "ALB", team: "Williams" },
      { code: "BEA", team: "Haas" },
      { code: "STR", team: "Aston Martin" },
      { code: "ALO", team: "Aston Martin" },
      { code: "TSU", team: "Red Bull Racing" },
      { code: "OCO", team: "Haas" }
    ]
  },
    {
    round: 16,
    race: "Italian Grand Prix",
    results: [
      { code: "VER", team: "Red Bull Racing" },
      { code: "NOR", team: "McLaren" },
      { code: "PIA", team: "McLaren" },
      { code: "LEC", team: "Ferrari" },
      { code: "RUS", team: "Mercedes" },
      { code: "HAM", team: "Ferrari" },
      { code: "ALB", team: "Williams" },
      { code: "BOR", team: "Kick Sauber" },
      { code: "ANT", team: "Mercedes" },
      { code: "HAD", team: "Racing Bulls" }
    ]
  },
  {
    round: 17,
    race: "Azerbaijan Grand Prix",
    results: [
      { code: "VER", team: "Red Bull Racing" },
      { code: "RUS", team: "Mercedes" },
      { code: "SAI", team: "Williams" },
      { code: "ANT", team: "Mercedes" },
      { code: "LAW", team: "Racing Bulls" },
      { code: "TSU", team: "Red Bull Racing" },
      { code: "NOR", team: "McLaren" },
      { code: "HAM", team: "Ferrari" },
      { code: "LEC", team: "Ferrari" },
      { code: "HAD", team: "Racing Bulls" }
    ]
  },
  {
    round: 18,
    race: "Singapore Grand Prix",
    results: [
      { code: "RUS", team: "Mercedes" },
      { code: "VER", team: "Red Bull Racing" },
      { code: "NOR", team: "McLaren" },
      { code: "PIA", team: "McLaren" },
      { code: "ANT", team: "Mercedes" },
      { code: "LEC", team: "Ferrari" },
      { code: "ALO", team: "Aston Martin" },
      { code: "HAM", team: "Ferrari" },
      { code: "BEA", team: "Haas" },
      { code: "SAI", team: "Williams" }
    ]
  },
  {
    round: 19,
    race: "United States Grand Prix",
    results: [
      { code: "VER", team: "Red Bull Racing" },
      { code: "NOR", team: "McLaren" },
      { code: "LEC", team: "Ferrari" },
      { code: "HAM", team: "Ferrari" },
      { code: "PIA", team: "McLaren" },
      { code: "RUS", team: "Mercedes" },
      { code: "TSU", team: "Red Bull Racing" },
      { code: "HUL", team: "Kick Sauber" },
      { code: "BEA", team: "Haas" },
      { code: "ALO", team: "Aston Martin" }
    ]
  },
  {
    round: 20,
    race: "Mexico City Grand Prix",
    results: [
      { code: "NOR", team: "McLaren" },
      { code: "LEC", team: "Ferrari" },
      { code: "VER", team: "Red Bull Racing" },
      { code: "BEA", team: "Haas" },
      { code: "PIA", team: "McLaren" },
      { code: "ANT", team: "Mercedes" },
      { code: "RUS", team: "Mercedes" },
      { code: "HAM", team: "Ferrari" },
      { code: "OCO", team: "Haas" },
      { code: "BOR", team: "Kick Sauber" }
    ]
  },
    {
    round: 21,
    race: "São Paulo Grand Prix",
    results: [
      { code: "NOR", team: "McLaren" },
      { code: "ANT", team: "Mercedes" },
      { code: "VER", team: "Red Bull Racing" },
      { code: "RUS", team: "Mercedes" },
      { code: "PIA", team: "McLaren" },
      { code: "BEA", team: "Haas" },
      { code: "LAW", team: "Racing Bulls" },
      { code: "HAD", team: "Racing Bulls" },
      { code: "HUL", team: "Kick Sauber" },
      { code: "GAS", team: "Alpine" }
    ]
  },
  {
    round: 22,
    race: "Las Vegas Grand Prix",
    results: [
      { code: "VER", team: "Red Bull Racing" },
      { code: "RUS", team: "Mercedes" },
      { code: "ANT", team: "Mercedes" },
      { code: "LEC", team: "Ferrari" },
      { code: "SAI", team: "Williams" },
      { code: "HAD", team: "Racing Bulls" },
      { code: "HUL", team: "Kick Sauber" },
      { code: "HAM", team: "Ferrari" },
      { code: "OCO", team: "Haas" },
      { code: "BEA", team: "Haas" }
    ]
  },
  {
    round: 23,
    race: "Qatar Grand Prix",
    results: [
      { code: "VER", team: "Red Bull Racing" },
      { code: "PIA", team: "McLaren" },
      { code: "SAI", team: "Williams" },
      { code: "NOR", team: "McLaren" },
      { code: "ANT", team: "Mercedes" },
      { code: "RUS", team: "Mercedes" },
      { code: "ALO", team: "Aston Martin" },
      { code: "LEC", team: "Ferrari" },
      { code: "LAW", team: "Racing Bulls" },
      { code: "TSU", team: "Red Bull Racing" }
    ]
  },
  {
    round: 24,
    race: "Abu Dhabi Grand Prix",
    results: [
      { code: "VER", team: "Red Bull Racing" },
      { code: "PIA", team: "McLaren" },
      { code: "NOR", team: "McLaren" },
      { code: "LEC", team: "Ferrari" },
      { code: "RUS", team: "Mercedes" },
      { code: "ALO", team: "Aston Martin" },
      { code: "OCO", team: "Haas" },
      { code: "HAM", team: "Ferrari" },
      { code: "HUL", team: "Kick Sauber" },
      { code: "STR", team: "Aston Martin" }
    ]
  }
];