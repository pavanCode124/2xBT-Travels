// "use client";

// import { useEffect, useState } from "react";
// import { Sun, Moon } from "@phosphor-icons/react";

// type Mode = "light" | "dark";

// /**
//  * Light/dark switch. The page follows the OS until the visitor overrides it;
//  * the override is remembered and written to data-theme on <html>.
//  */
// export function ThemeToggle({ onDeep = false }: { onDeep?: boolean }) {
//   const [mode, setMode] = useState<Mode | null>(null);

//   useEffect(() => {
//     const stored = window.localStorage.getItem("2xbt-theme") as Mode | null;
//     const system: Mode = window.matchMedia("(prefers-color-scheme: dark)").matches
//       ? "dark"
//       : "light";
//     const next = stored ?? system;
//     setMode(next);
//     if (stored) document.documentElement.dataset.theme = stored;
//   }, []);

//   function toggle() {
//     const next: Mode = mode === "dark" ? "light" : "dark";
//     setMode(next);
//     document.documentElement.dataset.theme = next;
//     window.localStorage.setItem("2xbt-theme", next);
//   }

//   return (
//     <button
//       type="button"
//       onClick={toggle}
//       aria-label={mode === "dark" ? "Switch to light theme" : "Switch to dark theme"}
//       className="grid h-10 w-10 place-items-center rounded-full border transition-colors duration-200"
//       style={{
//         borderColor: onDeep ? "var(--rule-onDeep)" : "var(--rule-strong)",
//         color: onDeep ? "var(--ink-onDeep-soft)" : "var(--ink-soft)",
//       }}
//     >
//       {/* Rendered only once the stored preference is known, so the icon
//           never contradicts the painted theme during hydration. */}
//       {mode === "dark" ? <Sun size={18} weight="bold" /> : <Moon size={18} weight="bold" />}
//     </button>
//   );
// }


"use client";

export function ThemeToggle({ onDeep = false }: { onDeep?: boolean }) {
  // Returns nothing, completely hiding the button from the UI
  // while preventing "module not found" or import errors elsewhere.
  return null;
}