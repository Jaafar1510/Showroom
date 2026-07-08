const drivers2025 = [
  {
    number: 1,
    code: "VER",
    imageKey: "ver",
    name: "Max Verstappen",
    country: "Netherlands",
    flag: "🇳🇱",
    team: "Red Bull Racing",
    teamColor: "#1e41ff"
  },
  {
    number: 30,
    code: "LAW",
    imageKey: "law",
    name: "Liam Lawson",
    country: "New Zealand",
    flag: "🇳🇿",
    team: "Red Bull Racing",
    teamColor: "#1e41ff"
  },
  {
    number: 16,
    code: "LEC",
    imageKey: "lec",
    name: "Charles Leclerc",
    country: "Monaco",
    flag: "🇲🇨",
    team: "Ferrari",
    teamColor: "#dc0000"
  },
  {
    number: 44,
    code: "HAM",
    imageKey: "ham",
    name: "Lewis Hamilton",
    country: "Great Britain",
    flag: "🇬🇧",
    team: "Ferrari",
    teamColor: "#dc0000"
  },
  {
    number: 4,
    code: "NOR",
    imageKey: "nor",
    name: "Lando Norris",
    country: "Great Britain",
    flag: "🇬🇧",
    team: "McLaren",
    teamColor: "#ff8700"
  },
  {
    number: 81,
    code: "PIA",
    imageKey: "pia",
    name: "Oscar Piastri",
    country: "Australia",
    flag: "🇦🇺",
    team: "McLaren",
    teamColor: "#ff8700"
  },
  {
    number: 63,
    code: "RUS",
    imageKey: "rus",
    name: "George Russell",
    country: "Great Britain",
    flag: "🇬🇧",
    team: "Mercedes",
    teamColor: "#00d2be"
  },
  {
    number: 12,
    code: "ANT",
    imageKey: "ant",
    name: "Kimi Antonelli",
    country: "Italy",
    flag: "🇮🇹",
    team: "Mercedes",
    teamColor: "#00d2be"
  },
  {
    number: 14,
    code: "ALO",
    imageKey: "alo",
    name: "Fernando Alonso",
    country: "Spain",
    flag: "🇪🇸",
    team: "Aston Martin",
    teamColor: "#006f62"
  },
  {
    number: 18,
    code: "STR",
    imageKey: "str",
    name: "Lance Stroll",
    country: "Canada",
    flag: "🇨🇦",
    team: "Aston Martin",
    teamColor: "#006f62"
  },
  {
    number: 10,
    code: "GAS",
    imageKey: "gas",
    name: "Pierre Gasly",
    country: "France",
    flag: "🇫🇷",
    team: "Alpine",
    teamColor: "#0090ff"
  },
  {
    number: 7,
    code: "DOO",
    imageKey: "doo",
    name: "Jack Doohan",
    country: "Australia",
    flag: "🇦🇺",
    team: "Alpine",
    teamColor: "#0090ff"
  },
  {
    number: 31,
    code: "OCO",
    imageKey: "oco",
    name: "Esteban Ocon",
    country: "France",
    flag: "🇫🇷",
    team: "Haas",
    teamColor: "#b6babd"
  },
  {
    number: 87,
    code: "BEA",
    imageKey: "bea",
    name: "Oliver Bearman",
    country: "Great Britain",
    flag: "🇬🇧",
    team: "Haas",
    teamColor: "#b6babd"
  },
  {
    number: 22,
    code: "TSU",
    imageKey: "tsu",
    name: "Yuki Tsunoda",
    country: "Japan",
    flag: "🇯🇵",
    team: "Racing Bulls",
    teamColor: "#6692ff"
  },
  {
    number: 6,
    code: "HAD",
    imageKey: "had",
    name: "Isack Hadjar",
    country: "France",
    flag: "🇫🇷",
    team: "Racing Bulls",
    teamColor: "#6692ff"
  },
  {
    number: 23,
    code: "ALB",
    imageKey: "alb",
    name: "Alexander Albon",
    country: "Thailand",
    flag: "🇹🇭",
    team: "Williams",
    teamColor: "#005aff"
  },
  {
    number: 55,
    code: "SAI",
    imageKey: "sai",
    name: "Carlos Sainz",
    country: "Spain",
    flag: "🇪🇸",
    team: "Williams",
    teamColor: "#005aff"
  },
  {
    number: 27,
    code: "HUL",
    imageKey: "hul",
    name: "Nico Hulkenberg",
    country: "Germany",
    flag: "🇩🇪",
    team: "Kick Sauber",
    teamColor: "#00e701"
  },
  {
    number: 5,
    code: "BOR",
    imageKey: "bor",
    name: "Gabriel Bortoleto",
    country: "Brazil",
    flag: "🇧🇷",
    team: "Kick Sauber",
    teamColor: "#00e701"
  }
];

function getDriverImage(driver, season = "2025") {
  if (!driver || !driver.imageKey) {
    return "./assets/img/drivers/fallback-driver.webp";
  }

  return `./assets/img/drivers/${season}/${driver.imageKey}.webp`;
}