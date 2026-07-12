const teamProfiles = {
  "red-bull-racing": {
    fullName: "Oracle Red Bull Racing",
    firstTeamEntry: 1997,
    teamChief: "Laurent Mekies",
    technicalChief: "Pierre Waché",
    chassis: "RB22",
    powerUnit: "Red Bull Ford",
    teamStats: {
      grandsPrixEntered: 427,
      teamPoints: 8416,
      wins: 130,
      podiums: 235,
      poles: 111,
      championships: 6
    },
    records: [
      "Six-time Constructors' World Champion",
      "Dominant title-winning force of the early 2010s and early 2020s",
      "Home to Max Verstappen’s modern championship era"
    ],
    bio: "Red Bull Racing transformed from ambitious energy-drink-backed challengers into one of Formula 1’s defining modern powers, famous for aggressive design, fearless strategy, and championship-winning machinery."
  },

  ferrari: {
    fullName: "Scuderia Ferrari HP",
    firstTeamEntry: 1950,
    teamChief: "Frédéric Vasseur",
    technicalChief: "Loic Serra / Enrico Gualtieri",
    chassis: "SF-26",
    powerUnit: "Ferrari",
    teamStats: {
      grandsPrixEntered: 1132,
      teamPoints: 10930,
      wins: 251,
      podiums: 646,
      poles: 254,
      championships: 16
    },
    records: [
      "Most successful constructor in Formula 1 history",
      "Only team to compete in every F1 World Championship season",
      "Home of some of F1’s most iconic drivers and eras"
    ],
    bio: "Ferrari is Formula 1’s most historic name — a symbol of passion, pressure, glory, heartbreak, and racing mythology. Every Ferrari season carries the weight of Maranello’s legacy."
  },

  mclaren: {
    fullName: "McLaren Mastercard F1 Team",
    firstTeamEntry: 1966,
    teamChief: "Andrea Stella",
    technicalChief: "Peter Prodromou / Neil Houldey",
    chassis: "MCL40",
    powerUnit: "Mercedes",
    teamStats: {
      grandsPrixEntered: 1003,
      teamPoints: 7962.5,
      wins: 203,
      podiums: 448,
      poles: 177,
      championships: 10
    },
    records: [
      "Ten-time Constructors' World Champion",
      "One of Formula 1’s most decorated teams",
      "Modern resurgence led by Norris and Piastri"
    ],
    bio: "McLaren’s story is built on innovation, iconic champions, and eras of breathtaking speed. From Senna and Prost to Hamilton, Norris, and Piastri, the team remains one of F1’s great names."
  },

  mercedes: {
    fullName: "Mercedes-AMG PETRONAS Formula One Team",
    firstTeamEntry: 1970,
    teamChief: "Toto Wolff",
    technicalChief: "James Allison",
    chassis: "W17",
    powerUnit: "Mercedes",
    teamStats: {
      grandsPrixEntered: 338,
      teamPoints: 8492.5,
      wins: 129,
      podiums: 210,
      poles: 145,
      championships: 8
    },
    records: [
      "Eight-time Constructors' World Champion",
      "Dominant force of the turbo-hybrid era",
      "Known for technical discipline and operational excellence"
    ],
    bio: "Mercedes became the benchmark of modern Formula 1 through the hybrid era, combining engineering precision, race execution, and a dynasty built around Lewis Hamilton and the Silver Arrows."
  },

  "aston-martin": {
    fullName: "Aston Martin Aramco Formula One Team",
    firstTeamEntry: 2018,
    teamChief: "Adrian Newey",
    technicalChief: "Enrico Cardile",
    chassis: "AMR26",
    powerUnit: "Honda",
    teamStats: {
      grandsPrixEntered: 161,
      teamPoints: 864,
      wins: 1,
      podiums: 12,
      poles: 1,
      championships: 0
    },
    records: [
      "Modern Aston Martin project built from the Racing Point era",
      "Grand Prix-winning heritage through the team’s previous identity",
      "A major long-term project with championship ambitions"
    ],
    bio: "Aston Martin’s modern F1 identity is built around ambition, investment, and the pursuit of becoming a true front-running team, carrying British racing prestige into the modern grid."
  },

  alpine: {
    fullName: "BWT Alpine Formula One Team",
    firstTeamEntry: 1986,
    teamChief: "Flavio Briatore / Steve Nielsen",
    technicalChief: "David Sanchez",
    chassis: "A526",
    powerUnit: "Mercedes",
    teamStats: {
      grandsPrixEntered: 401,
      teamPoints: 2060,
      wins: 21,
      podiums: 61,
      poles: 20,
      championships: 2
    },
    records: [
      "Two-time Constructors' World Champion through Renault heritage",
      "French works-team identity on the F1 grid",
      "Alpine name continues Renault’s long F1 story"
    ],
    bio: "Alpine carries Renault’s Formula 1 heritage into a new era, mixing French identity, Enstone engineering, and the constant pressure to return to the sharp end of the grid."
  },

  haas: {
    fullName: "TGR Haas F1 Team",
    firstTeamEntry: 2016,
    teamChief: "Ayao Komatsu",
    technicalChief: "Andrea De Zordo",
    chassis: "VF-26",
    powerUnit: "Ferrari",
    teamStats: {
      grandsPrixEntered: 223,
      teamPoints: 407,
      wins: 0,
      podiums: 0,
      poles: 0,
      championships: 0
    },
    records: [
      "First American-led F1 team in decades",
      "Known for a lean, efficient operating model",
      "Ferrari-powered independent constructor"
    ],
    bio: "Haas entered Formula 1 with a different kind of model: practical, lean, and Ferrari-linked. Their story is one of survival, opportunism, and trying to turn midfield flashes into consistency."
  },

  "racing-bulls": {
    fullName: "Visa Cash App Racing Bulls Formula One Team",
    firstTeamEntry: 1985,
    teamChief: "Alan Permane",
    technicalChief: "Tim Goss",
    chassis: "VCARB 03",
    powerUnit: "Red Bull Ford",
    teamStats: {
      grandsPrixEntered: 408,
      teamPoints: 1006,
      wins: 2,
      podiums: 6,
      poles: 1,
      championships: 0
    },
    records: [
      "Developed through Minardi, Toro Rosso, AlphaTauri, RB, and Racing Bulls eras",
      "Famous for Sebastian Vettel’s fairytale Monza 2008 win",
      "Red Bull family team with its own constructor identity"
    ],
    bio: "Racing Bulls carries the soul of Faenza: the underdog spirit of Minardi, the young-driver mission of Toro Rosso, and the modern ambition of Red Bull’s second constructor."
  },

  williams: {
    fullName: "Atlassian Williams F1 Team",
    firstTeamEntry: 1978,
    teamChief: "James Vowles",
    technicalChief: "Pat Fry",
    chassis: "FW48",
    powerUnit: "Mercedes",
    teamStats: {
      grandsPrixEntered: 860,
      teamPoints: 3779,
      wins: 114,
      podiums: 245,
      poles: 128,
      championships: 8
    },
    records: [
      "One of Formula 1’s most historic independent teams",
      "Legendary Frank Williams era",
      "Home to several iconic championship-winning cars"
    ],
    bio: "Williams is one of Formula 1’s great names, built on independent grit, engineering bravery, and championship history. Its modern chapter is about recovery, patience, and rebuilding pride."
  },

  "kick-sauber": {
    fullName: "Stake F1 Team Kick Sauber",
    firstTeamEntry: 1993,
    teamChief: "Jonathan Wheatley",
    technicalChief: "James Key",
    chassis: "C45",
    powerUnit: "Ferrari",
    teamStats: {
      grandsPrixEntered: 615,
      teamPoints: 1088,
      wins: 1,
      podiums: 27,
      poles: 1,
      championships: 0
    },
    records: [
      "Swiss F1 team founded by Peter Sauber",
      "Race-winning history through the BMW Sauber era",
      "Bridge identity before the Audi works-team era"
    ],
    bio: "Sauber has long been one of Formula 1’s respected midfield operations — a Swiss team known for developing talent, surviving changing identities, and preparing for its future as Audi."
  }
};