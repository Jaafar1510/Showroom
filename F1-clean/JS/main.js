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

addResultsToDriverStandings(raceResults2025, racePointsSystem, true);
addResultsToDriverStandings(sprintResults2025, sprintPointsSystem, false);

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

addResultsToConstructorStandings(raceResults2025, racePointsSystem, true);
addResultsToConstructorStandings(sprintResults2025, sprintPointsSystem, false);

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
  const events = type === "sprint" ? sprintResults2025 : raceResults2025;
  const pointsSystem = type === "sprint" ? sprintPointsSystem : racePointsSystem;

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
                  ${driver ? `${driver.flag} ${driver.name}` : result.code}
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
  return races2025.find((race) => race.round === Number(round));
}

function getRaceDetailsByRound(round) {
  return raceDetails2025[Number(round)] || null;
}

function getWeekendFormat(round, details) {
  if (details?.weekendFormat) return details.weekendFormat;

  return sprintRounds2025.includes(Number(round)) ? "sprint" : "normal";
}

function getWeekendSessions(format) {
  if (format === "sprint") {
    return [
      "FP1",
      "Sprint Qualifying",
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
  return raceResults2025.find((event) => event.round === Number(round));
}

function getSprintResultByRound(round) {
  return sprintResults2025.find((event) => event.round === Number(round));
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

function renderTyreCompounds(compounds) {
  return compounds
    .map((compound) => {
      const image = getTyreImage(compound);

      return `
        <div class="tyre-card">
          ${
            image
              ? `<img src="${image}" alt="${compound}" class="tyre-image">`
              : ""
          }
          <span>${compound}</span>
        </div>
      `;
    })
    .join("");
}

const sessionKeyMap = {
  "FP1": "fp1",
  "FP2": "fp2",
  "FP3": "fp3",
  "Sprint Qualifying": "sprintQualifying",
  "Sprint": "sprint",
  "Qualifying": "qualifying",
  "Starting Grid": "startingGrid",
  "Race": "race"
};

function getSessionDetails(round, sessionName) {
  const sessionKey = sessionKeyMap[sessionName];

  if (!sessionKey) return null;

  return sessionDetails2025?.[Number(round)]?.[sessionKey] || null;
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

function renderPracticeSession(sessionDetails) {
  if (!sessionDetails?.classification?.length) {
    return `
      <p class="empty-session">
        ${sessionDetails?.headline || "Practice details will be added later."}
      </p>
    `;
  }

  return `
    <div class="practice-list">
      ${sessionDetails.classification
        .map((entry) => {
          const driver = getDriverByCode(entry.code);

          return `
            <div class="practice-row">
              <span class="session-position">P${entry.position}</span>

              <div>
                <strong>${driver ? driver.name : entry.code}</strong>
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

function renderQualifyingGroup(label, group) {
  if (!group?.classification?.length) {
    return `
      <article class="quali-group">
        <h5>${label}</h5>
        <p class="empty-session">No ${label} data added yet.</p>
      </article>
    `;
  }

  return `
    <article class="quali-group">
      <h5>${label}</h5>

      <div class="practice-list">
        ${group.classification
          .map((entry) => {
            const driver = getDriverByCode(entry.code);

            return `
              <div class="practice-row">
                <span class="session-position">P${entry.position}</span>

                <div>
                  <strong>${driver ? driver.name : entry.code}</strong>
                  <small>${entry.team || driver?.team || "Team TBC"}</small>
                </div>

                <span>${entry.time || "—"}</span>
                <span>${entry.gap || "—"}</span>
                <span>${entry.tyres ? entry.tyres.join(", ") : "—"}</span>
              </div>
            `;
          })
          .join("")}
      </div>
    </article>
  `;
}

function renderQualifyingSession(round, sessionName = "Qualifying") {
  const qualifying = getSessionDetails(round, sessionName);

  if (!qualifying) {
    return `<p class="empty-session">Qualifying details will be added later.</p>`;
  }

  const poleDriver = qualifying.pole ? getDriverByCode(qualifying.pole) : null;

  return `
    ${
      poleDriver
        ? `
          <div class="pole-banner">
            <span>POLE POSITION</span>
            <strong>${poleDriver.name}</strong>
            <small>${poleDriver.team}</small>
          </div>
        `
        : `
          <p class="empty-session">
            Pole sitter will be added once qualifying data is filled.
          </p>
        `
    }

    <div class="quali-rounds">
      ${renderQualifyingGroup(sessionName === "Sprint Qualifying" ? "SQ1" : "Q1", qualifying.q1 || qualifying.sq1)}
      ${renderQualifyingGroup(sessionName === "Sprint Qualifying" ? "SQ2" : "Q2", qualifying.q2 || qualifying.sq2)}
      ${renderQualifyingGroup(sessionName === "Sprint Qualifying" ? "SQ3" : "Q3", qualifying.q3 || qualifying.sq3)}
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

function renderStartingGrid(round) {
  const gridData = getSessionDetails(round, "Starting Grid");

  if (!gridData?.positions?.length) {
    return `
      <p class="empty-session">
        Starting grid will be added here with the real staggered F1 layout.
      </p>
    `;
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

                <h5>${driver ? driver.name : entry.code}</h5>
                <p>${teamName || "Team TBC"}</p>

                ${
                  hasGridChange
                    ? `<small class="grid-change">Qualified P${entry.qualified}</small>`
                    : ""
                }

                ${
                  entry.note
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
        }));

  return `
    ${
      podium?.length
        ? `
          <div class="race-podium">
            ${podium
              .map((entry) => {
                const driver = getDriverByCode(entry.code);

                return `
                  <article class="podium-card podium-${entry.position}">
                    <span>P${entry.position}</span>
                    <h5>${driver ? driver.name : entry.code}</h5>
                    <p>${entry.team || driver?.team || "Team TBC"}</p>
                    <strong>${entry.time || entry.gap || "Time TBC"}</strong>
                  </article>
                `;
              })
              .join("")}
          </div>
        `
        : `<p class="empty-session">Race podium details will be added later.</p>`
    }

    <div class="race-extra-grid">
      <article>
        <h5>Fastest Lap</h5>
        <p>
          ${
            raceData?.fastestLap
              ? `${raceData.fastestLap.code} — ${raceData.fastestLap.time} on Lap ${raceData.fastestLap.lap}`
              : "Fastest lap will be added later."
          }
        </p>
      </article>

      <article>
        <h5>Fastest Pit Stop</h5>
        <p>
          ${
            raceData?.fastestPitStop
              ? `${raceData.fastestPitStop.team} — ${raceData.fastestPitStop.time}`
              : "Fastest pit stop will be added later."
          }
        </p>
      </article>

      <article>
        <h5>Driver of the Day</h5>
        <p>
          ${
            raceData?.driverOfTheDay
              ? getDriverByCode(raceData.driverOfTheDay)?.name || raceData.driverOfTheDay
              : "Driver of the Day will be added later."
          }
        </p>
      </article>
    </div>

    <h5 class="session-subtitle">Points Finishers</h5>
    ${renderMiniResultList(raceResult, racePointsSystem)}

    ${renderNotes(raceData?.keyMoments)}
    ${renderNotes(raceData?.penalties)}
    ${renderNotes(raceData?.notes)}
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
              <strong>${driver ? driver.name : result.code}</strong>
              <small>${result.team}</small>
              <b>${points} pts</b>
            </li>
          `;
        })
        .join("")}
    </ol>
  `;
}

function renderSessionCard(sessionName, round) {
  const sessionDetails = getSessionDetails(round, sessionName);

  if (sessionName === "Race") {
    return `
      <article class="session-card">
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

          ${renderMiniResultList(getSprintResultByRound(round), sprintPointsSystem)}
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
          details.tyres
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

    <div class="session-flow">
      ${sessions.map((session) => `<span>${session}</span>`).join("")}
    </div>

    <div class="sessions-grid">
      ${sessions.map((session) => renderSessionCard(session, race.round)).join("")}
    </div>

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