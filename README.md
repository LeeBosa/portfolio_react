# Nexume

![Node](https://img.shields.io/badge/node-v18.+-%238A5CF5)
![Build](https://img.shields.io/badge/build-nextjs%20v14.+-%238A5CF5)
![Release](https://img.shields.io/github/v/release/taedonn/nexume?color=8A5CF5)
![Release data](https://img.shields.io/github/release-date/taedonn/nexume?color=8A5CF5)
![License](https://img.shields.io/badge/license-MIT-%238A5CF5)

`nexume` is a static resume template using [Next.js](https://github.com/vercel/next.js) and [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss).

- [Getting started](#getting-started)
- [Before installing](#before-installing)
- [Deploying your app](#deploying-your-app)

-----

## Getting started

`nexume` can be installed by running the following `npx` command.

```
npx create-nexume-app
```

> This will generate a folder containing basic `nexume` template.

-----

## Before installing

Make sure `node.js` version over 18 is installed on your machine.

```bash
node -v
```

> if node version is below 18, you can run one of the following commands to upgrade or change node version.

`Homebrew`

```bash
# Install node version using homebrew.
brew install node@18

# Unlink previously used node version.
brew unlink node

# Link newly installed node version.
brew link node@18
```

`nvm`

```bash
# Install node version using nvm.
nvm install v18.12.0

# Choose newly installed node version.
nvm use v18.12.0
```

`sudo`

```bash
# Install node version using sudo.
sudo n 18.12.0

# Choose newly installed node version on drop-down menu.
sudo n
```

-----

## Deploying your app

Most hosting platforms allow you to define `build` command and `output` folder. 

- Build command: `npm run build` or `next build`
- Output folder: `out`

> Make sure your hosting platform options are the same as above.

<table>
  <tr>
    <td>
      <img src="https://nexume.s3.ap-northeast-2.amazonaws.com/readme_deploying_your_app.png" alt="Deploying your app on vercel"/>
    </td>
  </tr>
  <tr>
    <td>
      <p align=center><a href="https://vercel.com">Vercel</a></p>
    </td>
  </tr>
</table>

-----

## License

MIT License © 2023-PRESENT, Nexume
