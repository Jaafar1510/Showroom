const races2025 = [
  {
    round: 1,
    name: "Australian Grand Prix",
    country: "Australia",
    city: "Melbourne",
    circuit: "Albert Park Circuit",
    date: "14 - 16 Mar"
  },
  {
    round: 2,
    name: "Chinese Grand Prix",
    country: "China",
    city: "Shanghai",
    circuit: "Shanghai International Circuit",
    date: "21 - 23 Mar"
  },
  {
    round: 3,
    name: "Japanese Grand Prix",
    country: "Japan",
    city: "Suzuka",
    circuit: "Suzuka Circuit",
    date: "04 - 06 Apr"
  },
  {
    round: 4,
    name: "Bahrain Grand Prix",
    country: "Bahrain",
    city: "Sakhir",
    circuit: "Bahrain International Circuit",
    date: "11 - 13 Apr"
  },
  {
    round: 5,
    name: "Saudi Arabian Grand Prix",
    country: "Saudi Arabia",
    city: "Jeddah",
    circuit: "Jeddah Corniche Circuit",
    date: "18 - 20 Apr"
  },
  {
    round: 6,
    name: "Miami Grand Prix",
    country: "United States",
    city: "Miami",
    circuit: "Miami International Autodrome",
    date: "02 - 04 May"
  },
  {
    round: 7,
    name: "Emilia-Romagna Grand Prix",
    country: "Italy",
    city: "Imola",
    circuit: "Autodromo Enzo e Dino Ferrari",
    date: "16 - 18 May"
  },
  {
    round: 8,
    name: "Monaco Grand Prix",
    country: "Monaco",
    city: "Monte Carlo",
    circuit: "Circuit de Monaco",
    date: "23 - 25 May"
  },
  {
    round: 9,
    name: "Spanish Grand Prix",
    country: "Spain",
    city: "Barcelona",
    circuit: "Circuit de Barcelona-Catalunya",
    date: "30 May - 01 Jun"
  },
  {
    round: 10,
    name: "Canadian Grand Prix",
    country: "Canada",
    city: "Montreal",
    circuit: "Circuit Gilles Villeneuve",
    date: "13 - 15 Jun"
  },
  {
    round: 11,
    name: "Austrian Grand Prix",
    country: "Austria",
    city: "Spielberg",
    circuit: "Red Bull Ring",
    date: "27 - 29 Jun"
  },
  {
    round: 12,
    name: "British Grand Prix",
    country: "Great Britain",
    city: "Silverstone",
    circuit: "Silverstone Circuit",
    date: "04 - 06 Jul"
  },
  {
    round: 13,
    name: "Belgian Grand Prix",
    country: "Belgium",
    city: "Spa-Francorchamps",
    circuit: "Circuit de Spa-Francorchamps",
    date: "25 - 27 Jul"
  },
  {
    round: 14,
    name: "Hungarian Grand Prix",
    country: "Hungary",
    city: "Budapest",
    circuit: "Hungaroring",
    date: "01 - 03 Aug"
  },
  {
    round: 15,
    name: "Dutch Grand Prix",
    country: "Netherlands",
    city: "Zandvoort",
    circuit: "Circuit Zandvoort",
    date: "29 - 31 Aug"
  },
  {
    round: 16,
    name: "Italian Grand Prix",
    country: "Italy",
    city: "Monza",
    circuit: "Autodromo Nazionale Monza",
    date: "05 - 07 Sep"
  },
  {
    round: 17,
    name: "Azerbaijan Grand Prix",
    country: "Azerbaijan",
    city: "Baku",
    circuit: "Baku City Circuit",
    date: "19 - 21 Sep"
  },
  {
    round: 18,
    name: "Singapore Grand Prix",
    country: "Singapore",
    city: "Singapore",
    circuit: "Marina Bay Street Circuit",
    date: "03 - 05 Oct"
  },
  {
    round: 19,
    name: "United States Grand Prix",
    country: "United States",
    city: "Austin",
    circuit: "Circuit of The Americas",
    date: "17 - 19 Oct"
  },
  {
    round: 20,
    name: "Mexico City Grand Prix",
    country: "Mexico",
    city: "Mexico City",
    circuit: "Autódromo Hermanos Rodríguez",
    date: "24 - 26 Oct"
  },
  {
    round: 21,
    name: "São Paulo Grand Prix",
    country: "Brazil",
    city: "São Paulo",
    circuit: "Interlagos",
    date: "07 - 09 Nov"
  },
  {
    round: 22,
    name: "Las Vegas Grand Prix",
    country: "United States",
    city: "Las Vegas",
    circuit: "Las Vegas Strip Circuit",
    date: "20 - 22 Nov"
  },
  {
    round: 23,
    name: "Qatar Grand Prix",
    country: "Qatar",
    city: "Lusail",
    circuit: "Lusail International Circuit",
    date: "28 - 30 Nov"
  },
  {
    round: 24,
    name: "Abu Dhabi Grand Prix",
    country: "United Arab Emirates",
    city: "Abu Dhabi",
    circuit: "Yas Marina Circuit",
    date: "05 - 07 Dec"
  }
];

const circuitImagePath = "./assets/images/circuits/";

const circuitImages2025 = {
  1: "australiagp.jpeg",
  2: "chinagp.jpeg",
  3: "japangp.jpeg",
  4: "bahraingp.jpeg",
  5: "saudiarabiagp.jpeg",
  6: "miamigp.jpeg",
  7: "emiliaromagnagp.jpeg",
  8: "monacogp.jpeg",
  9: "spaingp.jpeg",
  10: "canadagp.jpeg",
  11: "austriagp.jpeg",
  12: "silverstonegp.jpeg",
  13: "spagp.jpeg",
  14: "hungarygp.jpeg",
  15: "netherlandsgp.jpeg",
  16: "monzagp.jpeg",
  17: "azerbaijangp.jpeg",
  18: "singaporegp.jpeg",
  19: "austingp.jpeg",
  20: "mexicogp.jpeg",
  21: "brazilgp.jpeg",
  22: "vegasgp.jpeg",
  23: "qatargp.jpeg",
  24: "abudhabigp.jpeg"
};

races2025.forEach((race) => {
  race.image = circuitImagePath + circuitImages2025[race.round];
});