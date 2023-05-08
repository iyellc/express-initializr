#! /usr/bin/env node

const { execSync } = require("child_process")

const runCommand = command => {
    try {
        execSync(`${command}`, { stdio: "inherit" })
    } catch (e) {
        console.error(`😐 - Failed to run command ${command}`, e);
        return false;
    }
    return true;
}

const repoCloneName = process.argv[2];
const gitCloneCommand = `git clone --depth 1 https://github.com/iyellc/ExpressTemplate ${repoCloneName}`;
const npmInstallCommand = `cd ${repoCloneName} && npm install`;

console.log("🚀 - Cloning App On Folder, " + repoCloneName);

const checkedOut = runCommand(gitCloneCommand)
if (!checkedOut) process.exit(-1)

console.log("🚄 - Installing dependencies")

const installed = runCommand(npmInstallCommand)
if (!installed) process.exit(-1)

console.log("🤿 - You are ready to go! Run these commands to start development mode:")
console.log(`cd ${repoCloneName} && npm run dev`)