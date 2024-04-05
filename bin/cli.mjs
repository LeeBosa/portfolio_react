#!/usr/bin/env node

import { execSync } from "child_process";
import chalk from "chalk";
import path from "path";

const runCommand = (command) => {
    try {
        execSync(command, { stdio: "inherit" });

        return true;
    } catch (err) {
        console.log(`Failed to run ${command}`);
        console.log(err);

        return false;
    }
};

const dirName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/taedonn/nexume-template.git ${dirName}`;
const npmInstallCommand = `cd ${dirName} && npm install`;

// Create new create-nexume-app
console.log(
    chalk.blueBright(`Creating a new nexume app in`),
    chalk.magentaBright.bold.italic.underline(
        `${path.resolve(process.cwd(), dirName)}`,
    ),
);
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) {
    process.exit(1);
}

// Install dependencies
console.log(
    chalk.blueBright.bold(`Installing dependencies for`),
    chalk.redBright.bold(`${dirName}`),
);
const installedDeps = runCommand(npmInstallCommand);
if (!installedDeps) {
    process.exit(-1);
}

// Inform success and commands to start, build, test, prettier, and lint
console.log(
    "\n",
    chalk.greenBright.bold(`Success!`),
    `Created`,
    chalk.bold.italic.underline(`${dirName}`),
    `at`,
    chalk.bold.italic.underline(
        `${path.resolve(process.cwd(), dirName)}`,
    ),
    "\n\n",
    `Inside`,
    chalk.bold.italic.underline(`${dirName}`),
    `directory, you can run several commands`,
    `:`,
    "\n\n",
    chalk.greenBright.bold("  npm run dev"),
    "\n",
    "    Starts the dev server",
    "\n\n",
    chalk.greenBright.bold("  npm run build"),
    "\n",
    "    Bundles the app into static files for production",
    "\n\n",
    chalk.greenBright.bold("  npm run lint"),
    "\n",
    `    This command find and fix problems in your code by`,
    chalk.underline(`${dirName}/.eslintrc.json`),
    "\n\n",
    "We suggest that you begin by typing:",
    "\n\n",
    chalk.greenBright.bold(`cd ${dirName} && npm run dev`),
    "\n",
    "\n\n",
    chalk.greenBright.bold("Enjoy it!"),
);