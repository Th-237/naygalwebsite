import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "scripts/**",
  ]),
  {
    rules: {
      // French copy frequently contains apostrophes; this is a typography concern, not a runtime error.
      "react/no-unescaped-entities": "warn",
      // Existing JSX comments are non-blocking and can be cleaned up progressively.
      "react/jsx-no-comment-textnodes": "warn",
      // These client components synchronize browser-only state after hydration.
      "react-hooks/set-state-in-effect": "warn",
    },
  },
]);

export default eslintConfig;
