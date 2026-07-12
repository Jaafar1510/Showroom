let currentSeason = 2025;

const seasonRegistry = {
  2025: {
    label: "2025",
    status: "Available",
    available: true,
    races: races2025,
    drivers: drivers2025,
    teams: teams2025,
    raceResults: raceResults2025,
    sprintResults: sprintResults2025,
    raceDetails: raceDetails2025,
    sessionDetails: sessionDetails2025,
    sprintRounds: sprintRounds2025,
    racePointsSystem: racePointsSystem,
    sprintPointsSystem: sprintPointsSystem
  },

  2026: {
    label: "2026",
    status: "Coming soon",
    available: false,
    races: races2026,
    drivers: drivers2026,
    teams: teams2026,
    raceResults: raceResults2026,
    sprintResults: sprintResults2026,
    raceDetails: raceDetails2026,
    sessionDetails: sessionDetails2026,
    sprintRounds: sprintRounds2026,
    racePointsSystem: racePointsSystem2026,
    sprintPointsSystem: sprintPointsSystem2026
  }
};

function getActiveSeasonData() {
  return seasonRegistry[currentSeason] || seasonRegistry[2025];
}

function getSeasonRaces() {
  return getActiveSeasonData().races || [];
}

function getSeasonDrivers() {
  return getActiveSeasonData().drivers || [];
}

function getSeasonTeams() {
  return getActiveSeasonData().teams || [];
}

function getSeasonRaceResults() {
  return getActiveSeasonData().raceResults || [];
}

function getSeasonSprintResults() {
  return getActiveSeasonData().sprintResults || [];
}

function getSeasonRaceDetails() {
  return getActiveSeasonData().raceDetails || {};
}

function getSeasonSessionDetails() {
  return getActiveSeasonData().sessionDetails || {};
}

function getSeasonSprintRounds() {
  return getActiveSeasonData().sprintRounds || [];
}

function slugify(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getDriverImagePath(driver) {
  const season = getActiveSeasonData().label || String(currentSeason);
  const key = driver.imageKey || slugify(driver.code);

  if (!key) return "";

  return `./assets/img/drivers/${season}/${key}.webp`;
}

function getTeamImagePath(team) {
  const season = getActiveSeasonData().label || String(currentSeason);
  const key = team.imageKey || team.slug || team.id || slugify(team.name);

  if (!key) return "";

  return `./assets/img/teams/${season}/${key}-car.webp`;
}

function getSeasonRacePointsSystem() {
  return getActiveSeasonData().racePointsSystem || {};
}

function getSeasonSprintPointsSystem() {
  return getActiveSeasonData().sprintPointsSystem || {};
}

function isSeasonAvailable(season) {
  return Boolean(seasonRegistry[season]?.available);
}

const raceCalendar = document.getElementById("raceCalendar");

function createSummerBreakCard() {
  const breakCard = document.createElement("article");
  breakCard.classList.add("summer-break-card");

  breakCard.innerHTML = `
    <p class="eyebrow">Season Pause</p>
    <h3>Summer Break</h3>
    <p>
      After the Hungarian Grand Prix, Formula 1 enters its summer shutdown
      before racing returns at Zandvoort.
    </p>
    <span>04 Aug - 28 Aug</span>
  `;

  return breakCard;
}

function renderRaceCalendar() {
  raceCalendar.innerHTML = "";

  getSeasonRaces().forEach((race) => {
    const raceCard = document.createElement("article");
    raceCard.classList.add("race-card");

    raceCard.innerHTML = `
      <div class="race-image-box" data-round="${race.round}">
        <img src="${race.image}" alt="${race.name} circuit layout" class="race-image">
      </div>

      <div class="race-card-content">
        <p class="race-round">Round ${race.round}</p>
        <h3>${race.name}</h3>
        <p><strong>${race.date}</strong></p>
        <p>${race.city}, ${race.country}</p>
        <p>${race.circuit}</p>
        
        <button class="race-result-btn" data-round="${race.round}">
          View Results
        </button>

        <button class="race-weekend-btn" data-round="${race.round}">
          View Weekend
        </button>
      </div>
    `;

    raceCalendar.appendChild(raceCard);

    if (race.round === 14) {
      raceCalendar.appendChild(createSummerBreakCard());
    }
  });
}

renderRaceCalendar();

const driversGrid = document.getElementById("driversGrid");
const driverProfilePanel = document.getElementById("driverProfilePanel");

function renderDrivers() {
  driversGrid.innerHTML = "";

  getSeasonDrivers().forEach((driver) => {
    const driverCard = document.createElement("article");
    driverCard.classList.add("driver-card");

    driverCard.style.setProperty("--team-color", driver.teamColor);

    driverCard.tabIndex = 0;
    driverCard.setAttribute("role", "link");
    driverCard.setAttribute("aria-label", `Open ${driver.name} profile`);

    driverCard.addEventListener("click", () => {
      openDriverProfile(driver.code);
    });

    driverCard.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openDriverProfile(driver.code);
      }
    });

    const driverImage = getDriverImagePath(driver);

    driverCard.innerHTML = `
      <div class="driver-image-box">
        ${
          driverImage
            ? `<img src="${driverImage}" alt="${driver.name}" class="driver-image">`
            : `<div class="driver-placeholder">${driver.code}</div>`
        }
      </div>

      <div class="driver-info">
        <div class="driver-top">
          <span class="driver-number">#${driver.number}</span>
          <span class="driver-code">${driver.code}</span>
        </div>

        <div class="driver-main">
          <h3>${driver.name}</h3>
          <p>${driver.flag} ${driver.country}</p>
        </div>

        <div class="driver-team">
          ${driver.team}
        </div>
      </div>
    `;

    const img = driverCard.querySelector(".driver-image");

    if (img) {
      img.addEventListener(
        "error",
        () => {
          img.outerHTML = `<div class="driver-placeholder">${driver.code}</div>`;
        },
        { once: true }
      );
    }

    driversGrid.appendChild(driverCard);
  });
}

renderDrivers();

const teamsGrid = document.getElementById("teamsGrid");

function renderTeams() {
  teamsGrid.innerHTML = "";

  getSeasonTeams().forEach((team) => {
    const teamCard = document.createElement("article");
    teamCard.classList.add("team-card");

    teamCard.style.setProperty("--team-color", team.color);

    const teamImage = getTeamImagePath(team);

    teamCard.innerHTML = `
      <div class="team-image-box">
        ${
          teamImage
            ? `<img src="${teamImage}" alt="${team.name}" class="team-image">`
            : `<div class="team-placeholder">${team.name}</div>`
        }
      </div>

      <div class="team-content">
        <h3>${team.name}</h3>

        <p><strong>Base:</strong> ${team.base}</p>
        <p><strong>Power Unit:</strong> ${team.powerUnit}</p>

        <div class="team-drivers">
          <span>${team.drivers[0]}</span>
          <span>${team.drivers[1]}</span>
        </div>
      </div>
    `;

    const img = teamCard.querySelector(".team-image");

    if (img) {
      img.addEventListener("error", () => {
        img.outerHTML = `<div class="team-placeholder">${team.name}</div>`;
      }, { once: true });
    }

    teamsGrid.appendChild(teamCard);
  });
}

renderTeams();

const standingsTable = document.getElementById("standingsTable");
const standingsTabs = document.querySelectorAll(".standings-tab");

function getDriverByCode(code) {
  return getSeasonDrivers().find((driver) => driver.code === code);
}

/* DRIVER PROFILE PANEL */

function findTeamByDriver(driver) {
  return getSeasonTeams().find((team) => {
    if (team.name === driver.team) return true;

    if (Array.isArray(team.drivers) && team.drivers.includes(driver.name)) {
      return true;
    }

    return false;
  });
}

function getDriverTeammate(driver, team) {
  if (!team || !Array.isArray(team.drivers)) {
    return "Season teammate";
  }

  return team.drivers.find((name) => name !== driver.name) || "Season teammate";
}

function closeDriverProfile(shouldScroll = true) {
  if (!driverProfilePanel) return;

  driverProfilePanel.classList.add("hidden-section");
  driverProfilePanel.classList.remove("visible-section");

  if (shouldScroll) {
    document.getElementById("explore")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

function openDriverProfile(code) {
  if (!driverProfilePanel) return;

  const driver = getDriverByCode(code);

  const profile = typeof driverProfiles !== "undefined"
  ? driverProfiles[code] || {}
  : {};

  if (!driver) {
    driverProfilePanel.innerHTML = `
      <div class="driver-profile-empty">
        Driver profile not found.
      </div>
    `;

    driverProfilePanel.classList.remove("hidden-section");
    driverProfilePanel.classList.add("visible-section");

    driverProfilePanel.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    return;
  }

  const team = findTeamByDriver(driver);
  const teammate = getDriverTeammate(driver, team);
  const teamColor = driver.teamColor || team?.color || "#e10600";
  const driverImage = getDriverImagePath(driver);
  const teamImage = team ? getTeamImagePath(team) : "";

  driverProfilePanel.innerHTML = `
    <div class="driver-profile-card" style="--team-color: ${teamColor}">
      <div class="driver-profile-hero">
        <div class="driver-profile-copy">
          <button class="driver-profile-back" type="button" data-driver-profile-close>
            ← Back to Data Hub
          </button>

          <span class="driver-profile-kicker">Driver Career Profile</span>

          <h3>${driver.name}</h3>

          <div class="driver-profile-meta">
            <span>#${driver.number}</span>
            <span>${driver.code}</span>
            <span>${driver.flag || ""} ${driver.country || ""}</span>
          </div>

          <p>
            ${profile.bio || `${driver.name} is part of the Formula 1 grid, with this profile combining career identity and season context.`}
          </p>
        </div>

        <div class="driver-profile-image-box">
          ${
            driverImage
              ? `<img src="${driverImage}" alt="${driver.name}" class="driver-profile-image">`
              : `<div class="driver-profile-placeholder">${driver.code}</div>`
          }
        </div>
      </div>

      <div class="driver-profile-content">
        <section>
          <div class="driver-profile-section-header">
            <span>Career Numbers</span>
            <h4>${profile.fullName || driver.name}</h4>
          </div>

          <div class="driver-profile-stat-grid">
            <article class="driver-profile-stat">
              <span>World Titles</span>
              <strong>${profile.championships ?? "—"}</strong>
            </article>

            <article class="driver-profile-stat">
              <span>Wins</span>
              <strong>${profile.careerStats?.wins || "—"}</strong>
            </article>

            <article class="driver-profile-stat">
              <span>Podiums</span>
              <strong>${profile.careerStats?.podiums || "—"}</strong>
            </article>

            <article class="driver-profile-stat">
              <span>Pole Positions</span>
              <strong>${profile.careerStats?.poles || "—"}</strong>
            </article>

            <article class="driver-profile-stat">
              <span>Fastest Laps</span>
              <strong>${profile.careerStats?.fastestLaps || "—"}</strong>
            </article>

            <article class="driver-profile-stat">
              <span>GP Entries</span>
              <strong>${profile.careerStats?.grandsPrixEntered || "—"}</strong>
            </article>
          </div>
        </section>

        <section class="driver-profile-records">
          <div class="driver-profile-section-header">
            <span>Records & Legacy</span>
            <h4>Career Highlights</h4>
          </div>

          <div class="driver-profile-record-grid">
            ${
              (profile.records || ["Career records will be updated soon."])
                .map((record) => `<article>${record}</article>`)
                .join("")
            }
          </div>
        </section>

        <section class="driver-profile-split">
          <article class="driver-profile-info-card">
            <div class="driver-profile-section-header">
              <span>Driver Details</span>
              <h4>Profile</h4>
            </div>

            <div class="driver-profile-detail-list">
              <p>
                Full Name
                <strong>${profile.fullName || driver.name}</strong>
              </p>

              <p>
                Nationality
                <strong>${profile.nationality || driver.country || "Not added yet"}</strong>
              </p>

              <p>
                Date of Birth
                <strong>${profile.dateOfBirth || "Not added yet"}</strong>
              </p>

              <p>
                Place of Birth
                <strong>${profile.placeOfBirth || "Not added yet"}</strong>
              </p>

              <p>
                Race Number
                <strong>${driver.number}</strong>
              </p>

              <p>
                Driver Code
                <strong>${driver.code}</strong>
              </p>
            </div>
          </article>

          <article class="driver-profile-info-card">
            <div class="driver-profile-section-header">
              <span>Career Numbers</span>
              <h4>${profile.fullName || driver.name}</h4>
            </div>

            ${
              teamImage
                ? `<img src="${teamImage}" alt="${driver.team} car" class="driver-profile-team-car">`
                : `<div class="team-placeholder">${driver.team}</div>`
            }

            <p class="driver-profile-note">
              <!-- Team colors, driver image, and car image are pulled from the active season. -->
            </p>
          </article>
        </section>
      </div>
    </div>
  `;

  const closeButton = driverProfilePanel.querySelector("[data-driver-profile-close]");

  if (closeButton) {
    closeButton.addEventListener("click", () => closeDriverProfile(true));
  }

  const driverImg = driverProfilePanel.querySelector(".driver-profile-image");

  if (driverImg) {
    driverImg.addEventListener(
      "error",
      () => {
        driverImg.outerHTML = `<div class="driver-profile-placeholder">${driver.code}</div>`;
      },
      { once: true }
    );
  }

  const teamImg = driverProfilePanel.querySelector(".driver-profile-team-car");

  if (teamImg) {
    teamImg.addEventListener(
      "error",
      () => {
        teamImg.outerHTML = `<div class="team-placeholder">${driver.team}</div>`;
      },
      { once: true }
    );
  }

  driverProfilePanel.classList.remove("hidden-section");
  driverProfilePanel.classList.add("visible-section");

  driverProfilePanel.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function getDriverDisplayName(entryOrCode) {
  const code =
    typeof entryOrCode === "string"
      ? entryOrCode
      : entryOrCode?.code;

  const driver = getDriverByCode(code);

  if (typeof entryOrCode === "object" && entryOrCode?.name) {
    return entryOrCode.name;
  }

  return driver?.name || code || "Driver TBC";
}

function getDriverDisplayLabel(entryOrCode) {
  const code =
    typeof entryOrCode === "string"
      ? entryOrCode
      : entryOrCode?.code;

  const driver = getDriverByCode(code);
  const flag =
    typeof entryOrCode === "object" && entryOrCode?.flag
      ? entryOrCode.flag
      : driver?.flag || "";

  return `${flag ? `${flag} ` : ""}${getDriverDisplayName(entryOrCode)}`;
}

function getTeamByName(teamName) {
  return getSeasonTeams().find((team) => team.name === teamName);
}

function getLatestTeamForDriver(code) {
  let latestTeam = null;

  getSeasonRaceResults().forEach((race) => {
    race.results.forEach((result) => {
      if (result.code === code) {
        latestTeam = result.team;
      }
    });
  });

  return latestTeam;
}

function calculateDriverStandings() {
  const standingsMap = {};

  getSeasonDrivers().forEach((driver) => {
    standingsMap[driver.code] = {
      code: driver.code,
      name: driver.name,
      team: driver.team,
      teamColor: driver.teamColor,
      flag: driver.flag,
      points: 0,
      wins: 0,
      podiums: 0
    };
  });

  function addResultsToDriverStandings(resultsList, pointsSystem, countsAsWinAndPodium = false) {
  resultsList.forEach((event) => {
    event.results.forEach((result, index) => {
      const position = index + 1;
      const points = pointsSystem[position] || 0;
      const driverCode = result.code;

      if (!standingsMap[driverCode]) {
        console.warn(`Driver code not found: ${driverCode}`);
        return;
      }

      standingsMap[driverCode].points += points;

      const latestTeam = getLatestTeamForDriver(driverCode);
      const latestTeamData = getTeamByName(latestTeam);

      if (latestTeam) {
        standingsMap[driverCode].team = latestTeam;
      }

      if (latestTeamData) {
        standingsMap[driverCode].teamColor = latestTeamData.color;
      }

      if (countsAsWinAndPodium && position === 1) {
        standingsMap[driverCode].wins += 1;
      }

      if (countsAsWinAndPodium && position <= 3) {
        standingsMap[driverCode].podiums += 1;
      }
    });
  });
}

addResultsToDriverStandings(getSeasonRaceResults(), getSeasonRacePointsSystem(), true);
addResultsToDriverStandings(getSeasonSprintResults(), getSeasonSprintPointsSystem(), false);

  return Object.values(standingsMap).sort((a, b) => {
    return (
      b.points - a.points ||
      b.wins - a.wins ||
      b.podiums - a.podiums
    );
  });
}

function calculateConstructorStandings() {
  const constructorMap = {};

  getSeasonTeams().forEach((team) => {
    constructorMap[team.name] = {
      team: team.name,
      teamColor: team.color,
      points: 0,
      wins: 0,
      podiums: 0
    };
  });

  function addResultsToConstructorStandings(resultsList, pointsSystem, countsAsWinAndPodium = false) {
  resultsList.forEach((event) => {
    event.results.forEach((result, index) => {
      const position = index + 1;
      const points = pointsSystem[position] || 0;
      const teamName = result.team;

      if (!constructorMap[teamName]) {
        console.warn(`Team not found: ${teamName}`);
        return;
      }

      constructorMap[teamName].points += points;

      if (countsAsWinAndPodium && position === 1) {
        constructorMap[teamName].wins += 1;
      }

      if (countsAsWinAndPodium && position <= 3) {
        constructorMap[teamName].podiums += 1;
      }
    });
  });
}

addResultsToConstructorStandings(getSeasonRaceResults(), getSeasonRacePointsSystem(), true);
addResultsToConstructorStandings(getSeasonSprintResults(), getSeasonSprintPointsSystem(), false);

  return Object.values(constructorMap).sort((a, b) => {
    return (
      b.points - a.points ||
      b.wins - a.wins ||
      b.podiums - a.podiums
    );
  });
}

function renderDriverStandings() {
  const standings = calculateDriverStandings();

  standingsTable.innerHTML = `
    <table class="standings-table">
      <thead>
        <tr>
          <th>Pos</th>
          <th>Driver</th>
          <th>Team</th>
          <th>Wins</th>
          <th>Podiums</th>
          <th>Pts</th>
        </tr>
      </thead>

      <tbody>
        ${standings
          .map(
            (driver, index) => `
              <tr>
                <td class="position">${index + 1}</td>
                <td>
                  <span class="standing-name">${driver.flag} ${driver.name}</span>
                  <span class="standing-code">${driver.code}</span>
                </td>
                <td>
                  <span class="team-dot" style="background: ${driver.teamColor};"></span>
                  ${driver.team}
                </td>
                <td>${driver.wins}</td>
                <td>${driver.podiums}</td>
                <td class="points">${driver.points}</td>
              </tr>
            `
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function renderConstructorStandings() {
  const standings = calculateConstructorStandings();

  standingsTable.innerHTML = `
    <table class="standings-table">
      <thead>
        <tr>
          <th>Pos</th>
          <th>Constructor</th>
          <th>Wins</th>
          <th>Podiums</th>
          <th>Pts</th>
        </tr>
      </thead>

      <tbody>
        ${standings
          .map(
            (team, index) => `
              <tr>
                <td class="position">${index + 1}</td>
                <td>
                  <span class="team-dot" style="background: ${team.teamColor};"></span>
                  <span class="standing-name">${team.team}</span>
                </td>
                <td>${team.wins}</td>
                <td>${team.podiums}</td>
                <td class="points">${team.points}</td>
              </tr>
            `
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function setActiveStanding(type) {
  standingsTabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.standing === type);
  });

  if (type === "drivers") {
    renderDriverStandings();
  } else {
    renderConstructorStandings();
  }
}

standingsTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    setActiveStanding(tab.dataset.standing);
  });
});

setActiveStanding("drivers");

const resultsGrid = document.getElementById("resultsGrid");
const resultsTabs = document.querySelectorAll(".results-tab");

function getResultTitle(event, type) {
  return type === "sprint"
    ? `${event.race} Sprint`
    : event.race;
}

function renderResults(type = "race") {
  const events = type === "sprint" ? getSeasonSprintResults() : getSeasonRaceResults();
  const pointsSystem = type === "sprint" ? getSeasonSprintPointsSystem() : getSeasonRacePointsSystem(); 

  resultsGrid.innerHTML = "";

  events.forEach((event) => {
    const resultCard = document.createElement("article");
    resultCard.classList.add("result-card");
    resultCard.id = `result-${type}-${event.round}`;

    resultCard.innerHTML = `
      <div class="result-card-header">
        <p class="race-round">Round ${event.round}</p>
        <h3>${getResultTitle(event, type)}</h3>
      </div>

      <ol class="result-list">
        ${event.results
          .map((result, index) => {
            const position = index + 1;
            const points = pointsSystem[position] || 0;
            const driver = getDriverByCode(result.code);
            const team = getTeamByName(result.team);

            return `
              <li>
                <span class="result-position">P${position}</span>

                <span class="result-driver">
                  ${getDriverDisplayLabel(result)}
                  <small>${result.code}</small>
                </span>

                <span class="result-team">
                  <span class="team-dot" style="background: ${team ? team.color : "#e10600"};"></span>
                  ${result.team}
                </span>

                <span class="result-points">${points} pts</span>
              </li>
            `;
          })
          .join("")}
      </ol>
    `;

    resultsGrid.appendChild(resultCard);
  });
}

function setActiveResults(type) {
  resultsTabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.results === type);
  });

  renderResults(type);
}

resultsTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    setActiveResults(tab.dataset.results);
  });
});

setActiveResults("race");

function connectCalendarToResults() {
  const resultButtons = document.querySelectorAll(".race-result-btn");

  resultButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const round = button.dataset.round;

      setActiveExplore("results");
      setActiveResults("race");

      setTimeout(() => { 
        const resultCard = document.getElementById(`result-race-${round}`);

        if (!resultCard) return;

        resultCard.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });

        document.querySelectorAll(".result-card").forEach((card) => {
          card.classList.remove("result-card-selected");
        });

        resultCard.classList.add("result-card-highlight");
        resultCard.classList.add("result-card-selected");

        setTimeout(() => {
          resultCard.classList.remove("result-card-highlight");
        }, 1400);
      }, 100);
    });
  });
}

connectCalendarToResults();

const raceWeekendPanel = document.getElementById("raceWeekendPanel");

function getRaceByRound(round) {
  return getSeasonRaces().find((race) => race.round === Number(round));
}

function getRaceDetailsByRound(round) {
  return getSeasonRaceDetails()[Number(round)] || null;
}

function getWeekendFormat(round, details) {
  if (details?.weekendFormat) return details.weekendFormat;

  return getSeasonSprintRounds().includes(Number(round)) ? "sprint" : "normal";
}

function getWeekendSessions(format) {
  if (format === "sprint") {
    return [
      "FP1",
      "Sprint Qualifying",
      "Sprint Grid",
      "Sprint",
      "Qualifying",
      "Starting Grid",
      "Race"
    ];
  }

  return [
    "FP1",
    "FP2",
    "FP3",
    "Qualifying",
    "Starting Grid",
    "Race"
  ];
}

function getRaceResultByRound(round) {
  return getSeasonRaceResults().find((event) => event.round === Number(round));
}

function getSprintResultByRound(round) {
  return getSeasonSprintResults().find((event) => event.round === Number(round));
}

const tyreImagePath = "./assets/images/tyres/";

function getTyreImage(compound) {
  const tyreName = compound.toLowerCase();

  if (tyreName.includes("hard")) {
    return tyreImagePath + "hard.jpeg";
  }

  if (tyreName.includes("medium")) {
    return tyreImagePath + "medium.jpeg";
  }

  if (tyreName.includes("soft")) {
    return tyreImagePath + "soft.jpeg";
  }

  if (tyreName.includes("intermediate")) {
    return tyreImagePath + "intermediate.jpeg";
  }

  if (tyreName.includes("wet")) {
    return tyreImagePath + "wet.jpeg";
  }

  return null;
}

const tyreEncyclopedia = {
  c1: {
    name: "C1",
    label: "Hardest Slick",
    style: "Maximum durability",
    brief:
      "C1 is the hardest dry compound in the range. It is designed for circuits that put very high energy through the tyres, such as tracks with fast corners, heavy braking zones, rough asphalt, or high temperatures.",
    behavior:
      "It usually offers the longest life, but it needs more warm-up and gives less peak grip than softer compounds.",
    bestFor:
      "Long race stints, high-degradation circuits, and conservative strategies."
  },

  c2: {
    name: "C2",
    label: "Hard Range",
    style: "Durability with more grip",
    brief:
      "C2 sits on the harder side of the slick range. It gives better grip and warm-up than C1 while still offering strong durability for demanding circuits.",
    behavior:
      "Teams often use it when they need a reliable race tyre that can survive longer stints without losing too much lap time.",
    bestFor:
      "Race stints, one-stop strategies, and tracks that punish softer tyres."
  },

  c3: {
    name: "C3",
    label: "Balanced Compound",
    style: "Grip and life balance",
    brief:
      "C3 is one of the most flexible compounds in the range. Depending on the weekend, it can be nominated as Hard, Medium, or Soft.",
    behavior:
      "It gives teams a balanced option between durability and performance, making it useful in both race strategy and qualifying preparation.",
    bestFor:
      "Balanced strategies, medium-length stints, and mixed track conditions."
  },

  c4: {
    name: "C4",
    label: "Soft Range",
    style: "Higher grip",
    brief:
      "C4 is a softer compound that gives stronger grip and quicker lap time potential. It is usually chosen for smoother circuits or tracks with lower tyre energy.",
    behavior:
      "It can be fast over short and medium runs, but if pushed too hard it may degrade faster than the harder compounds.",
    bestFor:
      "Shorter stints, qualifying preparation, and races where track position matters."
  },

  c5: {
    name: "C5",
    label: "Very Soft Slick",
    style: "Fast warm-up",
    brief:
      "C5 is a very soft dry compound with strong warm-up and high grip. It is often useful on street circuits or low-grip tracks where drivers need the tyre to switch on quickly.",
    behavior:
      "It can produce strong one-lap performance, but its race life is usually shorter and it needs careful management.",
    bestFor:
      "Qualifying laps, street circuits, and short aggressive stints."
  },

  c6: {
    name: "C6",
    label: "Softest 2025 Slick",
    style: "Maximum short-run grip",
    brief:
      "C6 was introduced as the softest compound in the 2025 range. It is aimed at circuits where peak grip and fast warm-up matter more than long durability.",
    behavior:
      "It can be very strong over one lap, but it is the least durable slick option and can be sensitive in race conditions.",
    bestFor:
      "Qualifying-style runs, very low-energy circuits, and short stints."
  },

  intermediate: {
    name: "Intermediate",
    label: "Damp Track Tyre",
    style: "Between slicks and wets",
    brief:
      "The Intermediate tyre is used when the track is wet or damp, but not wet enough for the full Wet tyre.",
    behavior:
      "Its grooves clear water while still keeping more contact with the track than a full Wet. Teams use it when conditions are between slick running and heavy rain.",
    bestFor:
      "Light rain, drying tracks, and mixed conditions."
  },

  wet: {
    name: "Wet",
    label: "Heavy Rain Tyre",
    style: "Maximum water clearance",
    brief:
      "The Wet tyre is built for heavy rain and standing water. Its deeper tread pattern helps clear water and reduce aquaplaning.",
    behavior:
      "It is safer in heavy rain, but slower than the Intermediate once the track starts drying.",
    bestFor:
      "Heavy rain, standing water, and very wet race starts."
  }
};

function getTyreInfo(compound) {
  const tyreName = compound.toLowerCase();

  if (tyreName.includes("c1")) return tyreEncyclopedia.c1;
  if (tyreName.includes("c2")) return tyreEncyclopedia.c2;
  if (tyreName.includes("c3")) return tyreEncyclopedia.c3;
  if (tyreName.includes("c4")) return tyreEncyclopedia.c4;
  if (tyreName.includes("c5")) return tyreEncyclopedia.c5;
  if (tyreName.includes("c6")) return tyreEncyclopedia.c6;
  if (tyreName.includes("intermediate")) return tyreEncyclopedia.intermediate;
  if (tyreName.includes("wet")) return tyreEncyclopedia.wet;

  return {
    name: compound,
    label: "Tyre Info",
    style: "Race-dependent",
    brief:
      "Tyre performance depends on circuit layout, track temperature, asphalt roughness, fuel load, car setup, and driver style.",
    behavior:
      "The same compound can behave very differently from one Grand Prix to another.",
    bestFor:
      "Understanding race strategy and tyre management."
  };
}

function renderTyreCompounds(compounds) {
  return compounds
    .map((compound) => {
      const image = getTyreImage(compound);
      const tyreInfo = getTyreInfo(compound);

      return `
        <article class="tyre-card tyre-info-card" tabindex="0">
          ${image ? `<img src="${image}" alt="${compound}" class="tyre-image">` : ""}

          <span>${compound}</span>

          <div class="tyre-info-panel">
            <div class="tyre-info-header">
              <strong>${tyreInfo.name}</strong>
              <small>${tyreInfo.label}</small>
            </div>

            <p>${tyreInfo.brief}</p>

            <div class="tyre-info-grid">
              <div>
                <b>Behaviour</b>
                <span>${tyreInfo.behavior}</span>
              </div>

              <div>
                <b>Best for</b>
                <span>${tyreInfo.bestFor}</span>
              </div>
            </div>
          </div>
        </article>
      `;
    })
  .join("");
}

const sessionKeyMap = {
  "FP1": "fp1",
  "FP2": "fp2",
  "FP3": "fp3",
  "Sprint Qualifying": "sprintQualifying",
  "Sprint Grid": "sprintGrid",
  "Sprint": "sprint",
  "Qualifying": "qualifying",
  "Starting Grid": "startingGrid",
  "Race": "race"
};

function getSessionDetails(round, sessionName) {
  const sessionKey = sessionKeyMap[sessionName];

  if (!sessionKey) return null;

  return getSeasonSessionDetails()?.[Number(round)]?.[sessionKey] || null;
}

function renderTyreTags(tyres = []) {
  if (!tyres.length) return "";

  return `
    <div class="session-tyres">
      ${tyres.map((tyre) => `<span>${tyre}</span>`).join("")}
    </div>
  `;
}

function renderNotes(notes = []) {
  if (!notes.length) return "";

  return `
    <ul class="session-notes">
      ${notes.map((note) => `<li>${note}</li>`).join("")}
    </ul>
  `;
}

function renderComingSoonSession(title, description, items = []) {
  return `
    <article class="coming-soon-session">
      <span class="coming-soon-label">Coming Soon</span>
      <h5>${title}</h5>
      <p>${description}</p>

      ${
        items.length
          ? `
            <ul>
              ${items.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          `
          : ""
      }
    </article>
  `;
}

function renderPracticeSession(sessionDetails) {
  if (!sessionDetails?.classification?.length) {
    return renderComingSoonSession(
      sessionDetails?.headline || "Practice data will be added later.",
      "Timing classification, tyre usage, lap counts, and session notes will appear here once the data is added.",
      ["Classification", "Lap count", "Tyre notes", "Session observations"]
    );
  }

  return `
    <div class="practice-list">
      ${sessionDetails.classification
        .map((entry) => {
          const driver = getDriverByCode(entry.code);
          const team = getTeamByName(entry.team || driver?.team);

          return `
            <div class="practice-row" style="--team-color: ${team ? team.color : "#e10600"}">
              <span class="session-position">P${entry.position}</span>

              <div>
                <strong>${entry.name || (driver ? driver.name : entry.code)}</strong>
                <small>${entry.team || driver?.team || "Team TBC"}</small>
                ${renderTyreTags(entry.tyres)}
              </div>

              <span>${entry.time || "—"}</span>
              <span>${entry.gap || "—"}</span>
              <span>${entry.laps ? `${entry.laps} laps` : "—"}</span>
            </div>
          `;
        })
        .join("")}
    </div>

    ${renderNotes(sessionDetails.notes)}
  `;
}

function getQualifyingGroups(qualifying, sessionName) {
  const isSprintQualifying = sessionName === "Sprint Qualifying";

  return {
    phase1Label: isSprintQualifying ? "SQ1" : "Q1",
    phase2Label: isSprintQualifying ? "SQ2" : "Q2",
    phase3Label: isSprintQualifying ? "SQ3" : "Q3",
    phase1: isSprintQualifying ? qualifying.sq1 : qualifying.q1,
    phase2: isSprintQualifying ? qualifying.sq2 : qualifying.q2,
    phase3: isSprintQualifying ? qualifying.sq3 : qualifying.q3
  };
}

function getQualifyingEntryMap(classification = []) {
  const map = {};

  classification.forEach((entry) => {
    map[entry.code] = entry;
  });

  return map;
}

function buildQualifyingRows(qualifying, sessionName) {
  const groups = getQualifyingGroups(qualifying, sessionName);

  const phase1Entries = groups.phase1?.classification || [];
  const phase2Entries = groups.phase2?.classification || [];
  const phase3Entries = groups.phase3?.classification || [];

  const phase1Map = getQualifyingEntryMap(phase1Entries);
  const phase2Map = getQualifyingEntryMap(phase2Entries);
  const phase3Map = getQualifyingEntryMap(phase3Entries);

  const driverCodes = [
    ...new Set([
      ...phase1Entries.map((entry) => entry.code),
      ...phase2Entries.map((entry) => entry.code),
      ...phase3Entries.map((entry) => entry.code)
    ])
  ];

  return driverCodes
    .map((code) => {
      const q1 = phase1Map[code] || null;
      const q2 = phase2Map[code] || null;
      const q3 = phase3Map[code] || null;

      let status = `Out in ${groups.phase1Label}`;
      let statusClass = "eliminated-q1";
      let sortGroup = 3;
      let sortPosition = q1?.position || 99;

      if (q2 && !q3) {
        status = `Out in ${groups.phase2Label}`;
        statusClass = "eliminated-q2";
        sortGroup = 2;
        sortPosition = q2.position || 99;
      }

      if (q3) {
        status = groups.phase3Label;
        statusClass = "advanced-q3";
        sortGroup = 1;
        sortPosition = q3.position || 99;
      }

      if (qualifying.pole === code) {
        status = "POLE";
        statusClass = "pole-status";
        sortGroup = 0;
        sortPosition = 1;
      }

      const qualifyingPosition =
        q3?.position || q2?.position || q1?.position || "—";

      return {
        code,
        name: q3?.name || q2?.name || q1?.name || "",
        team: q3?.team || q2?.team || q1?.team || "",
        q1,
        q2,
        q3,
        qualifyingPosition,
        status,
        statusClass,
        sortGroup,
        sortPosition
      };
    })
    .sort((a, b) => {
      return a.sortGroup - b.sortGroup || a.sortPosition - b.sortPosition;
    });
}

function renderQualifyingSession(round, sessionName = "Qualifying") {
  const qualifying = getSessionDetails(round, sessionName);

  if (!qualifying) {
    return renderComingSoonSession(
      `${sessionName} details will be added later.`,
      "The full timing board will show each driver's Q1, Q2, and Q3 times with elimination status.",
      ["Q1 / Q2 / Q3 times", "Pole position", "Eliminated drivers", "Session notes"]
    );
  }

  const rows = buildQualifyingRows(qualifying, sessionName);
  const groups = getQualifyingGroups(qualifying, sessionName);
  if (!rows.length) {
    return renderComingSoonSession(
      `${sessionName} timing board coming soon.`,
      "Once qualifying data is filled, this section will display every phase in one clean timing board.",
      ["Fastest laps", "Status badges", "Pole marker", "Notes"]
    );
  }

  return `

    <div class="qualifying-board-wrapper">
      <table class="qualifying-board">
        <thead>
          <tr>
          <th>Pos</th>
          <th>Driver</th>
          <th>${groups.phase1Label}</th>
          <th>${groups.phase2Label}</th>
          <th>${groups.phase3Label}</th>
          <th>Status</th>
        </tr>
        </thead>

        <tbody>
          ${rows
            .map((row) => {
              const driver = getDriverByCode(row.code);

              return `
                <tr>
                <td class="quali-position">
                  ${
                    typeof row.qualifyingPosition === "number"
                      ? `P${row.qualifyingPosition}`
                      : row.qualifyingPosition
                  }
                </td>

                <td>
                  <span class="quali-driver-name">
                    ${getDriverDisplayName(row)}
                  </span>
                  <span class="standing-code">${row.code}</span>
                </td>

                <td>${row.q1?.time || "—"}</td>
                  <td>${row.q2?.time || "—"}</td>
                  <td>${row.q3?.time || "—"}</td>

                  <td>
                    <span class="quali-status ${row.statusClass}">
                      ${row.status}
                    </span>
                  </td>
                </tr>
              `;
            })
            .join("")}
        </tbody>
      </table>
    </div>

    ${renderNotes(qualifying.notes)}
  `;
}

function getGridSide(position, poleSide) {
  const isOdd = position % 2 !== 0;

  if (poleSide === "right") {
    return isOdd ? "right" : "left";
  }

  return isOdd ? "left" : "right";
}

function renderStartingGrid(round, sessionName = "Starting Grid") {
  const gridData = getSessionDetails(round, sessionName);
  const isSprintGrid = sessionName === "Sprint Grid";

  if (!gridData?.positions?.length) {
    return renderComingSoonSession(
      isSprintGrid ? "Sprint grid coming soon." : "Starting grid coming soon.",
      isSprintGrid
        ? "The official Sprint starting grid will appear here once Sprint Qualifying data is added."
        : "The official race grid will appear here in a staggered F1-style layout once qualifying and penalty data are added.",
      ["Grid position", "Qualified position", "Penalty reasons", "Pole side"]
    );
  }

  return `
    <div class="f1-grid-track">
      ${gridData.positions
        .map((entry) => {
          const driver = getDriverByCode(entry.code);
          const teamName = entry.team || driver?.team;
          const team = getTeamByName(teamName);
          const side = getGridSide(entry.grid, gridData.poleSide);

          const hasGridChange =
            entry.qualified && entry.qualified !== entry.grid;

          return `
            <div class="grid-slot ${side}">
              <article class="grid-position-card ${entry.grid === 1 ? "pole-grid-card" : ""}"
                style="--team-color: ${team ? team.color : "#e10600"}"
              >
                <div class="grid-card-top">
                  <span>P${entry.grid}</span>
                  ${entry.grid === 1 ? `<b>POLE</b>` : ""}
                </div>

                <h5>${getDriverDisplayName(entry)}</h5>
                <p>${teamName || "Team TBC"}</p>

                ${
                  hasGridChange
                    ? `<small class="grid-change">Qualified P${entry.qualified}</small>`
                    : ""
                }

                ${
                  entry.reason
                    ? `<small class="grid-note">Reason: ${entry.reason}</small>`
                    : entry.note
                      ? `<small class="grid-note">${entry.note}</small>`
                      : ""
                }
              </article>
            </div>
          `;
        })
        .join("")}
    </div>

    ${renderNotes(gridData.notes)}
  `;
}

function getRaceHighlightCards(raceData) {
  return [
    {
      title: "Fastest Lap",
      value: raceData?.fastestLap
        ? getDriverDisplayName(raceData.fastestLap)
        : "Coming soon",
      detail: raceData?.fastestLap
        ? `${raceData.fastestLap.time} — Lap ${raceData.fastestLap.lap}`
        : "Fastest lap data will be added later."
    },
    {
      title: "Fastest Pit Stop",
      value: raceData?.fastestPitStop
        ? raceData.fastestPitStop.team
        : "Coming soon",
      detail: raceData?.fastestPitStop
        ? `${raceData.fastestPitStop.time}${raceData.fastestPitStop.driver ? ` — ${raceData.fastestPitStop.driver}` : ""}`
        : "Fastest pit stop data will be added later."
    },
    {
      title: "Driver of the Day",
      value: raceData?.driverOfTheDay
        ? getDriverDisplayName(raceData.driverOfTheDay)
        : "Coming soon",
      detail: raceData?.driverOfTheDay
        ? "Fan-voted Driver of the Day."
        : "Driver of the Day will be added later."
    }
  ];
}

function renderRaceHighlights(raceData) {
  return `
    <section class="race-highlights">
      ${getRaceHighlightCards(raceData)
        .map(
          (highlight) => `
            <article class="race-highlight-card">
              <span>${highlight.title}</span>
              <strong>${highlight.value}</strong>
              <p>${highlight.detail}</p>
            </article>
          `
        )
        .join("")}
    </section>
  `;
}

function renderRacePodium(podium = []) {
  if (!podium.length) {
    return renderComingSoonSession(
      "Podium coming soon.",
      "The race podium will appear here in P2, P1, P3 order after race data is added.",
      ["Winner", "Second place", "Third place", "Race time and gaps"]
    );
  }

  const p1 = podium.find((entry) => entry.position === 1);
  const p2 = podium.find((entry) => entry.position === 2);
  const p3 = podium.find((entry) => entry.position === 3);

  function renderPodiumStep(entry, medalClass, medalIcon) {
    if (!entry) return "";

    const driver = getDriverByCode(entry.code);

    return `
      <article class="podium-step ${medalClass}">
        <div class="podium-medal">${medalIcon}</div>
        <span>P${entry.position}</span>
        <h5>${getDriverDisplayName(entry)}</h5>
        <p>${entry.team || driver?.team || "Team TBC"}</p>
        <strong>${entry.time || entry.gap || "Time TBC"}</strong>
      </article>
    `;
  }

  return `
    <section class="real-podium">
      <div class="podium-side podium-second">
        ${renderPodiumStep(p2, "silver-step", "🥈")}
      </div>

      <div class="podium-center podium-first">
        ${renderPodiumStep(p1, "gold-step", "🥇")}
      </div>

      <div class="podium-side podium-third">
        ${renderPodiumStep(p3, "bronze-step", "🥉")}
      </div>
    </section>
  `;
}

function getFullRaceClassification(round, raceData) {
  if (raceData?.fullClassification?.length) {
    return raceData.fullClassification;
  }

  const raceResult = getRaceResultByRound(round);

  if (!raceResult?.results?.length) return [];

  return raceResult.results.map((result, index) => ({
    position: index + 1,
    code: result.code,
    team: result.team,
    gap: index === 0 ? "Winner" : "Gap TBC",
    status: "Finished",
    points: getSeasonRacePointsSystem()[index + 1] || 0,
    note: index > 9 ? "No points" : ""
  }));
}

function renderFullRaceClassification(round, raceData) {
  const classification = getFullRaceClassification(round, raceData).filter((entry) => {
    return typeof entry.position === "number" ? entry.position > 3 : true;
  });

  if (!classification.length) {
    return renderComingSoonSession(
      "Full classification coming soon.",
      "The complete race result from P4 downward will appear here after the race data is added.",
      ["Finishing position", "Driver and team", "Gap or status", "Points"]
    );
  }

  return `
    <section class="full-classification">
      <h5 class="session-subtitle">Full Race Classification</h5>

      <div class="classification-list">
        ${classification
          .map((entry) => {
            const driver = getDriverByCode(entry.code);
            const team = getTeamByName(entry.team || driver?.team);

            return `
              <article class="classification-row" style="--team-color: ${team ? team.color : "#e10600"}">
                <span class="classification-position">
                  ${typeof entry.position === "number" ? `P${entry.position}` : entry.position}
                </span>

                <div class="classification-driver">
                  <strong>${getDriverDisplayName(entry)}</strong>
                  <small>${entry.team || driver?.team || "Team TBC"}</small>
                </div>

                <span class="classification-gap">
                  ${entry.time || entry.gap || entry.status || "—"}
                </span>

                <span class="classification-points">
                  ${entry.points ? `${entry.points} pts` : "0 pts"}
                </span>

                ${
                  entry.note
                    ? `<small class="classification-note">${entry.note}</small>`
                    : ""
                }
              </article>
            `;
          })
          .join("")}
      </div>
    </section>
  `;
}

function renderRaceSession(round) {
  const raceData = getSessionDetails(round, "Race");
  const raceResult = getRaceResultByRound(round);

  const podium =
    raceData?.podium?.length
      ? raceData.podium
      : raceResult?.results.slice(0, 3).map((result, index) => ({
          position: index + 1,
          code: result.code,
          team: result.team,
          time: index === 0 ? "Winner time TBC" : "Gap TBC"
        })) || [];

  return `
    ${renderRaceHighlights(raceData)}

    ${renderRacePodium(podium)}

    ${renderFullRaceClassification(round, raceData)}

    ${renderNotes(raceData?.strategy)}
    ${renderNotes(raceData?.keyMoments)}
    ${renderNotes(raceData?.penalties)}
    ${renderNotes(raceData?.notes)}
  `;
}

function renderSprintSession(round) {
  const sprintData = getSessionDetails(round, "Sprint");

  if (!sprintData?.classification?.length) {
    return renderMiniResultList(
      getSprintResultByRound(round),
      getSeasonSprintPointsSystem()
    );
  }

  return `
    <ol class="weekend-result-list">
      ${sprintData.classification
        .map((entry) => {
          const driver = getDriverByCode(entry.code);

          return `
            <li>
              <span>
                ${typeof entry.position === "number" ? `P${entry.position}` : entry.position}
              </span>

              <strong>${getDriverDisplayName(entry)}</strong>

              <small>${entry.team}</small>

              <b>
                ${entry.time || entry.gap || entry.status || "—"}
                ${entry.points !== undefined ? ` · ${entry.points} pts` : ""}
              </b>
            </li>
          `;
        })
        .join("")}
    </ol>

    ${renderNotes(sprintData.notes)}
  `;
}

function renderMiniResultList(event, pointsSystem) {
  if (!event) {
    return `<p class="empty-session">Results will be added later.</p>`;
  }

  return `
    <ol class="weekend-result-list">
      ${event.results
        .map((result, index) => {
          const driver = getDriverByCode(result.code);
          const points = pointsSystem[index + 1] || 0;

          return `
            <li>
              <span>P${index + 1}</span>
              <strong>${getDriverDisplayName(result)}</strong>
              <small>${result.team}</small>
              <b>${points} pts</b>
            </li>
          `;
        })
        .join("")}
    </ol>
  `;
}

function renderWeekendSessionContent(sessionName, round) {
  const sessionDetails = getSessionDetails(round, sessionName);

  if (sessionName === "Race") {
    return renderRaceSession(round);
  }

  if (sessionName === "Sprint") {
    return renderSprintSession(round);
  }

  if (sessionName === "Qualifying" || sessionName === "Sprint Qualifying") {
    return renderQualifyingSession(round, sessionName);
  }

  if (sessionName === "Sprint Grid") {
    return renderStartingGrid(round, "Sprint Grid");
  }

  if (sessionName === "Starting Grid") {
    return renderStartingGrid(round);
  } 

  return renderPracticeSession(sessionDetails);
}

function renderWeekendSessionTabs(round, sessions) {
  return `
    <section class="weekend-session-area">
      <div class="weekend-session-tabs">
        ${sessions
          .map(
            (sessionName, index) => `
              <button 
                class="weekend-session-tab ${index === 0 ? "active" : ""}" 
                data-session="${sessionName}"
              >
                ${sessionName}
              </button>
            `
          )
          .join("")}
      </div>

      <div class="weekend-session-panels">
        ${sessions
          .map(
            (sessionName, index) => `
              <section 
                class="weekend-session-panel ${index === 0 ? "active" : ""}" 
                data-session-panel="${sessionName}"
              >
                <div class="weekend-session-panel-header">
                <div class="session-header-top">
                  <h4>${sessionName}</h4>
                  <span class="session-status-badge">
                    ${getSessionDetails(round, sessionName)?.status || "Coming soon"}
                  </span>
                </div>

                <p>${getSessionSmallDescription(sessionName)}</p>
              </div>

                ${renderWeekendSessionContent(sessionName, round)}
              </section>
            `
          )
        .join("")}
      </div>
    </section>
  `;
}

function getSessionSmallDescription(sessionName) {
  const descriptions = {
    "FP1": "Opening practice session data and notes.",
    "FP2": "Second practice session, pace runs, and tyre work.",
    "FP3": "Final practice before qualifying.",
    "Sprint Qualifying": "SQ1, SQ2, and SQ3 timing board.",
    "Sprint Grid": "Official Sprint starting grid layout.",
    "Sprint": "Sprint result and points finishers.",
    "Qualifying": "Q1, Q2, and Q3 timing board.",
    "Starting Grid": "Official race starting grid layout.",
    "Race": "Highlights, podium, full classification, and notes."
  };

  return descriptions[sessionName] || "Session details.";
}

function connectWeekendSessionTabs() {
  const sessionAreas = document.querySelectorAll(".weekend-session-area");

  sessionAreas.forEach((area) => {
    const tabs = area.querySelectorAll(".weekend-session-tab");
    const panels = area.querySelectorAll(".weekend-session-panel");

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const selectedSession = tab.dataset.session;

        tabs.forEach((item) => {
          item.classList.toggle(
            "active",
            item.dataset.session === selectedSession
          );
        });

        panels.forEach((panel) => {
          panel.classList.toggle(
            "active",
            panel.dataset.sessionPanel === selectedSession
          );
        });
      });
    });
  });
}

function renderSessionCard(sessionName, round) {
  const sessionDetails = getSessionDetails(round, sessionName);

  if (sessionName === "Race") {
    return `
      <article class="session-card race-session-card">
        <details class="session-details">
          <summary>
            <span>${sessionName}</span>
            <small>Podium, fastest lap, DOTD</small>
          </summary>

          ${renderRaceSession(round)}
        </details>
      </article>
    `;
  }

  if (sessionName === "Sprint") {
    return `
      <article class="session-card">
        <details class="session-details">
          <summary>
            <span>${sessionName}</span>
            <small>Sprint result</small>
          </summary>

          ${renderSprintSession(round)}
        </details>
      </article>
    `;
  }

  if (sessionName === "Qualifying" || sessionName === "Sprint Qualifying") {
    return `
      <article class="session-card">
        <details class="session-details">
          <summary>
            <span>${sessionName}</span>
            <small>Q1 / Q2 / Q3</small>
          </summary>

          ${renderQualifyingSession(round, sessionName)}
        </details>
      </article>
    `;
  }

  if (sessionName === "Starting Grid") {
    return `
      <article class="session-card starting-grid-session">
        <details class="session-details">
          <summary>
            <span>${sessionName}</span>
            <small>Real grid layout</small>
          </summary>

          ${renderStartingGrid(round)}
        </details>
      </article>
    `;
  }

  return `
    <article class="session-card">
      <details class="session-details">
        <summary>
          <span>${sessionName}</span>
          <small>${sessionDetails?.status || "Details coming soon"}</small>
        </summary>

        ${renderPracticeSession(sessionDetails)}
      </details>
    </article>
  `;
}

function renderRaceWeekend(round = 1) {
  const race = getRaceByRound(round);
  const details = getRaceDetailsByRound(round);
  const format = getWeekendFormat(round, details);
  const sessions = getWeekendSessions(format);

  if (!race) return;

  raceWeekendPanel.innerHTML = `
    <div class="weekend-actions">
      <button class="weekend-back-btn" id="backToCalendarBtn">
        ← Back to Calendar
      </button>

      <button class="weekend-close-btn" id="closeWeekendBtn">
        Close Details ×
      </button>
    </div>

    <article class="weekend-hero-card">
      <div>
        <p class="race-round">Round ${race.round}</p>
        <h3>${race.name}</h3>
        <p>${race.city}, ${race.country}</p>
        <p>${race.circuit}</p>

        <div class="weekend-circuit-preview">
          <img src="${race.image}" alt="${race.name} circuit layout">
        </div>
      </div>

      <span class="weekend-format ${format}">
        ${format === "sprint" ? "Sprint Weekend" : "Normal Weekend"}
      </span>
    </article>

    <div class="weekend-grid">
      <article class="weekend-info-card">
        <h4>Circuit Details</h4>

        ${
          details
            ? `
              <ul class="weekend-stats">
                <li><strong>First GP:</strong> ${details.circuit.firstGrandPrix}</li>
                <li><strong>Length:</strong> ${details.circuit.length}</li>
                <li><strong>Laps:</strong> ${details.circuit.laps}</li>
                <li><strong>Race Distance:</strong> ${details.circuit.raceDistance}</li>
                <li><strong>Lap Record:</strong> ${details.circuit.lapRecord}</li>
              </ul>
            `
            : `
              <p class="empty-session">
                Circuit details for this race will be added later.
              </p>
            `
        }
      </article>

      <article class="weekend-info-card">
        <h4>Tyres</h4>

        ${
          details?.tyres
            ? `
              <div class="tyre-cards">
                ${renderTyreCompounds(details.tyres.compounds)}
              </div>

              <p class="tyre-note">${details.tyres.allocation}</p>
            `
            : `
              <p class="empty-session">
                Tyre compounds for this race will be added later.
              </p>
            `
        }
      </article>
    </div>

    ${renderWeekendSessionTabs(race.round, sessions)}

    ${
      details?.notes
        ? `
          <article class="weekend-notes">
            <h4>Weekend Notes</h4>
            <ul>
              ${details.notes.map((note) => `<li>${note}</li>`).join("")}
            </ul>
          </article>
        `
        : ""
    }
  `;
}

function closeWeekendPanel() {
  const raceWeekendSection = document.getElementById("race-weekend");

  raceWeekendSection.classList.remove("visible-section");
  raceWeekendSection.classList.add("hidden-section");
}

function connectWeekendActionButtons() {
  const calendarSection = document.getElementById("calendar");

  const closeWeekendBtn = document.getElementById("closeWeekendBtn");
  const backToCalendarBtn = document.getElementById("backToCalendarBtn");

  if (closeWeekendBtn) {
    closeWeekendBtn.addEventListener("click", () => {
      closeWeekendPanel();
    });
  }

  if (backToCalendarBtn) {
    backToCalendarBtn.addEventListener("click", () => {
      closeWeekendPanel();

      calendarSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  }
}

function connectCalendarToWeekendDetails() {
  const weekendTriggers = document.querySelectorAll(".race-weekend-btn, .race-image-box");
  const raceWeekendSection = document.getElementById("race-weekend");

  weekendTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const round = trigger.dataset.round;

      if (!round) return;

      raceWeekendSection.classList.remove("hidden-section");
      raceWeekendSection.classList.add("visible-section");

      renderRaceWeekend(round);
      connectWeekendActionButtons();
      connectWeekendSessionTabs();

      raceWeekendSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

      raceWeekendPanel.classList.add("weekend-panel-highlight");

      setTimeout(() => {
        raceWeekendPanel.classList.remove("weekend-panel-highlight");
      }, 1400);
    });
  });
}

connectCalendarToWeekendDetails();

const exploreTabs = document.querySelectorAll(".explore-tab");
const explorePanels = document.querySelectorAll(".explore-panel");

function setActiveExplore(sectionName) {
  exploreTabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.explore === sectionName);
  });

  explorePanels.forEach((panel) => {
    panel.classList.toggle("active", panel.id === `explore-${sectionName}`);
  });
}

exploreTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    setActiveExplore(tab.dataset.explore);
  });
});

const seasonButtonsContainer = document.getElementById("seasonButtons");

function getAvailableSeasons() {
  return Object.keys(seasonRegistry)
    .map(Number)
    .sort((a, b) => a - b);
}

function renderSeasonButtons() {
  if (!seasonButtonsContainer) return;

  seasonButtonsContainer.innerHTML = getAvailableSeasons()
    .map((season) => {
      const seasonData = seasonRegistry[season];
      const isActive = season === currentSeason;
      const isAvailable = isSeasonAvailable(season);

      return `
        <button 
          class="season-btn ${isActive ? "active" : ""} ${!isAvailable ? "season-unavailable" : ""}" 
          data-season="${season}"
          title="${seasonData.status}"
        >
          ${seasonData.label}
        </button>
      `;
    })
    .join("");

  seasonButtonsContainer.querySelectorAll(".season-btn").forEach((button) => {
    button.addEventListener("click", () => {
      setActiveSeason(button.dataset.season);
    });
  });
}

function updateHeroSeasonText() {
  const heroTitle = document.getElementById("heroSeasonTitle");
  const heroDescription = document.getElementById("heroSeasonDescription");
  const heroStatus = document.getElementById("heroSeasonStatus");

  const seasonData = getActiveSeasonData();

  if (heroTitle) {
    heroTitle.textContent = `Formula 1 ${seasonData.label} Season`;
  }

  if (heroDescription) {
    heroDescription.textContent = `Explore the ${seasonData.label} Formula 1 season with races, teams, drivers, standings, results, and full race weekend details.`;
  }

  if (heroStatus) {
    heroStatus.textContent = seasonData.status;
  }
}

function refreshSeasonButtons() {
  seasonButtonsContainer?.querySelectorAll(".season-btn").forEach((button) => {
    button.classList.toggle(
      "active",
      Number(button.dataset.season) === currentSeason
    );
  });
}

function refreshActiveSeasonUI() {
  updateHeroSeasonText();

  renderRaceCalendar();
  renderDrivers();
  renderTeams();
  closeDriverProfile(false);

  const activeStanding =
    document.querySelector(".standings-tab.active")?.dataset.standing || "drivers";
  setActiveStanding(activeStanding);

  const activeResults =
    document.querySelector(".results-tab.active")?.dataset.results || "race";
  setActiveResults(activeResults);

  closeWeekendPanel();
  connectCalendarToResults();
  connectCalendarToWeekendDetails();
}

function setActiveSeason(season) {
  const selectedSeason = Number(season);

  if (!isSeasonAvailable(selectedSeason)) {
    alert(`${selectedSeason} season data will be added soon.`);
    refreshSeasonButtons();
    return;
  }

  if (selectedSeason === currentSeason) {
    return;
  }

  currentSeason = selectedSeason;

  refreshSeasonButtons();

  console.log(`Active season: ${currentSeason}`);
  refreshActiveSeasonUI();
}

renderSeasonButtons();
updateHeroSeasonText();