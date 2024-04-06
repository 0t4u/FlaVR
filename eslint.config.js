// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginSvelte from "eslint-plugin-svelte";
import { typescript as tsConfig, javascript as jsConfig, astro as astroConfig } from "@augu/eslint-config";

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.stylisticTypeChecked,
    ...tseslint.configs.recommendedTypeChecked,
    // @ts-expect-error incompatible type declarations that are compatible
    ...eslintPluginSvelte.configs["flat/recommended"],
    jsConfig(),
    await tsConfig(),
    await astroConfig(),
    {
        languageOptions: {
            parserOptions: {
                project: true,
                tsconfigRootDir: import.meta.dirname,
                ecmaVersion: "latest",
                sourceType: "module",
            },
        },
        rules: {
            quotes: ["error", "double"],
        },
    },
);