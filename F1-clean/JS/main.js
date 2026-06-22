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

  races2025.forEach((race) => {
    const raceCard = document.createElement("article");
    raceCard.classList.add("race-card");

    raceCard.innerHTML = `
      <div class="race-image-box">
        <img src="${race.image}" alt="${race.name} circuit layout" class="race-image">
      </div>

      <div class="race-card-content">
        <p class="race-round">Round ${race.round}</p>
        <h3>${race.name}</h3>
        <p><strong>${race.date}</strong></p>
        <p>${race.city}, ${race.country}</p>
        <p>${race.circuit}</p>
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

function renderDrivers() {
  driversGrid.innerHTML = "";

  drivers2025.forEach((driver) => {
    const driverCard = document.createElement("article");
    driverCard.classList.add("driver-card");

    driverCard.style.setProperty("--team-color", driver.teamColor);

    driverCard.innerHTML = `
  <div class="driver-image-box">
        ${
        driver.image
            ? `<img src="${driver.image}" alt="${driver.name}" class="driver-image">`
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

    driversGrid.appendChild(driverCard);
  });
}

renderDrivers();

const teamsGrid = document.getElementById("teamsGrid");

function renderTeams() {
  teamsGrid.innerHTML = "";

  teams2025.forEach((team) => {
    const teamCard = document.createElement("article");
    teamCard.classList.add("team-card");

    teamCard.style.setProperty("--team-color", team.color);

    teamCard.innerHTML = `
      <div class="team-image-box">
        <img src="${team.image}" alt="${team.name}" class="team-image">
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

    teamsGrid.appendChild(teamCard);
  });
}

renderTeams();

const standingsTable = document.getElementById("standingsTable");
const standingsTabs = document.querySelectorAll(".standings-tab");

function getDriverByCode(code) {
  return drivers2025.find((driver) => driver.code === code);
}

function getTeamByName(teamName) {
  return teams2025.find((team) => team.name === teamName);
}

function getLatestTeamForDriver(code) {
  let latestTeam = null;

  raceResults2025.forEach((race) => {
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

  drivers2025.forEach((driver) => {
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

  raceResults2025.forEach((race) => {
    race.results.forEach((result, index) => {
      const position = index + 1;
      const points = racePointsSystem[position] || 0;
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

      if (position === 1) {
        standingsMap[driverCode].wins += 1;
      }

      if (position <= 3) {
        standingsMap[driverCode].podiums += 1;
      }
    });
  });

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

  teams2025.forEach((team) => {
    constructorMap[team.name] = {
      team: team.name,
      teamColor: team.color,
      points: 0,
      wins: 0,
      podiums: 0
    };
  });

  raceResults2025.forEach((race) => {
    race.results.forEach((result, index) => {
      const position = index + 1;
      const points = racePointsSystem[position] || 0;
      const teamName = result.team;

      if (!constructorMap[teamName]) {
        console.warn(`Team not found: ${teamName}`);
        return;
      }

      constructorMap[teamName].points += points;

      if (position === 1) {
        constructorMap[teamName].wins += 1;
      }

      if (position <= 3) {
        constructorMap[teamName].podiums += 1;
      }
    });
  });

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