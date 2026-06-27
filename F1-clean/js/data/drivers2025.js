const drivers2025 = [
  {
    number: 1,
    code: "VER",
    name: "Max Verstappen",
    country: "Netherlands",
    flag: "🇳🇱",
    team: "Red Bull Racing",
    teamColor: "#1e41ff"
  },
  {
    number: 30,
    code: "LAW",
    name: "Liam Lawson",
    country: "New Zealand",
    flag: "🇳🇿",
    team: "Red Bull Racing",
    teamColor: "#1e41ff"
  },
  {
    number: 16,
    code: "LEC",
    name: "Charles Leclerc",
    country: "Monaco",
    flag: "🇲🇨",
    team: "Ferrari",
    teamColor: "#dc0000"
  },
  {
    number: 44,
    code: "HAM",
    name: "Lewis Hamilton",
    country: "Great Britain",
    flag: "🇬🇧",
    team: "Ferrari",
    teamColor: "#dc0000"
  },
  {
    number: 4,
    code: "NOR",
    name: "Lando Norris",
    country: "Great Britain",
    flag: "🇬🇧",
    team: "McLaren",
    teamColor: "#ff8700"
  },
  {
    number: 81,
    code: "PIA",
    name: "Oscar Piastri",
    country: "Australia",
    flag: "🇦🇺",
    team: "McLaren",
    teamColor: "#ff8700"
  },
  {
    number: 63,
    code: "RUS",
    name: "George Russell",
    country: "Great Britain",
    flag: "🇬🇧",
    team: "Mercedes",
    teamColor: "#00d2be"
  },
  {
    number: 12,
    code: "ANT",
    name: "Kimi Antonelli",
    country: "Italy",
    flag: "🇮🇹",
    team: "Mercedes",
    teamColor: "#00d2be"
  },
  {
    number: 14,
    code: "ALO",
    name: "Fernando Alonso",
    country: "Spain",
    flag: "🇪🇸",
    team: "Aston Martin",
    teamColor: "#006f62"
  },
  {
    number: 18,
    code: "STR",
    name: "Lance Stroll",
    country: "Canada",
    flag: "🇨🇦",
    team: "Aston Martin",
    teamColor: "#006f62"
  },
  {
    number: 10,
    code: "GAS",
    name: "Pierre Gasly",
    country: "France",
    flag: "🇫🇷",
    team: "Alpine",
    teamColor: "#0090ff"
  },
  {
    number: 7,
    code: "DOO",
    name: "Jack Doohan",
    country: "Australia",
    flag: "🇦🇺",
    team: "Alpine",
    teamColor: "#0090ff"
  },
  {
    number: 31,
    code: "OCO",
    name: "Esteban Ocon",
    country: "France",
    flag: "🇫🇷",
    team: "Haas",
    teamColor: "#b6babd"
  },
  {
    number: 87,
    code: "BEA",
    name: "Oliver Bearman",
    country: "Great Britain",
    flag: "🇬🇧",
    team: "Haas",
    teamColor: "#b6babd"
  },
  {
    number: 22,
    code: "TSU",
    name: "Yuki Tsunoda",
    country: "Japan",
    flag: "🇯🇵",
    team: "Racing Bulls",
    teamColor: "#6692ff"
  },
  {
    number: 6,
    code: "HAD",
    name: "Isack Hadjar",
    country: "France",
    flag: "🇫🇷",
    team: "Racing Bulls",
    teamColor: "#6692ff"
  },
  {
    number: 23,
    code: "ALB",
    name: "Alexander Albon",
    country: "Thailand",
    flag: "🇹🇭",
    team: "Williams",
    teamColor: "#005aff"
  },
  {
    number: 55,
    code: "SAI",
    name: "Carlos Sainz",
    country: "Spain",
    flag: "🇪🇸",
    team: "Williams",
    teamColor: "#005aff"
  },
  {
    number: 27,
    code: "HUL",
    name: "Nico Hulkenberg",
    country: "Germany",
    flag: "🇩🇪",
    team: "Kick Sauber",
    teamColor: "#00e701"
  },
  {
    number: 5,
    code: "BOR",
    name: "Gabriel Bortoleto",
    country: "Brazil",
    flag: "🇧🇷",
    team: "Kick Sauber",
    teamColor: "#00e701"
  }
];

const driverImagePath = "./assets/images/drivers/";

const driverImages2025 = {
  VER: "verstappen.jpeg",
  LEC: "leclerc.jpeg",
  NOR: "norris.jpeg",
  PIA: "piastri.jpeg",
  RUS: "russell.jpeg",
  ALO: "alonso.jpeg",
  STR: "stroll.jpeg",
  GAS: "gasly.jpeg",
  TSU: "tsunoda.jpeg",
  ALB: "albon.jpeg",
};

drivers2025.forEach((driver) => {
  const fileName = driverImages2025[driver.code];
  driver.image = fileName ? driverImagePath + fileName : null;
});