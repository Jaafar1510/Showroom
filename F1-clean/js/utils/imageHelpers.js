export const DEFAULT_SEASON = "2025";

export function getSeasonFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("season") || DEFAULT_SEASON;
}

export function normalizeImageKey(value) {
  return String(value || "")
    .trim()
    .toLowerCase();
}

export function getDriverImage(driver, season = DEFAULT_SEASON) {
  const key = normalizeImageKey(driver?.imageKey || driver?.code || driver);

  if (!key) {
    return "assets/img/drivers/fallback-driver.webp";
  }

  return `assets/img/drivers/${season}/${key}.webp`;
}

export function getTeamLogo(team, season = DEFAULT_SEASON) {
  const key = normalizeImageKey(team?.imageKey || team?.id || team);

  if (!key) {
    return "assets/img/teams/fallback-team-logo.webp";
  }

  return `assets/img/teams/${season}/${key}-logo.webp`;
}

export function getTeamCar(team, season = DEFAULT_SEASON) {
  const key = normalizeImageKey(team?.imageKey || team?.id || team);

  if (!key) {
    return "assets/img/teams/fallback-team-car.webp";
  }

  return `assets/img/teams/${season}/${key}-car.webp`;
}

export function getTeamHero(team, season = DEFAULT_SEASON) {
  const key = normalizeImageKey(team?.imageKey || team?.id || team);

  if (!key) {
    return "assets/img/teams/fallback-team-hero.webp";
  }

  return `assets/img/teams/${season}/${key}-hero.webp`;
}

export function applyImageFallback(img, fallbackSrc) {
  if (!img) return;

  img.addEventListener("error", () => {
    if (img.dataset.fallbackApplied === "true") return;

    img.dataset.fallbackApplied = "true";
    img.src = fallbackSrc;
  });
}