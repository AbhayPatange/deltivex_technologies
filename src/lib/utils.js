export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

// Small deterministic hash so procedural visuals (avatars, project covers)
// are stable across renders instead of re-randomizing.
export function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}
