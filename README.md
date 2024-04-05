# Nexume

![Node](https://img.shields.io/badge/node-v18.+-%238A5CF5)
![Release](https://img.shields.io/github/v/release/taedonn/nexume?color=8A5CF5)
![Release data](https://img.shields.io/github/release-date/taedonn/nexume?color=8A5CF5)
![License](https://img.shields.io/badge/license-MIT-%238A5CF5)

`nexume` is a simple and static resume template using [Next.js](https://github.com/vercel/next.js) and [TypeScript](https://github.com/microsoft/TypeScript).

- [Nexume](#nexume)
  - [Getting started](#getting-started)
  - [Before installing](#before-installing)
  - [Deploying your app](#deploying-your-app)
  - [Folder structure](#folder-structure)
    - [`public`](#public)
    - [`app`](#app)
    - [`out`](#out)
  - [Config](#config)
    - [Options](#options)
  - [License](#license)

-----

## Getting started

`nexume` can be installed by running the following `npx` command.

```
npx create-nexume-app <my-app>
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

Most hosting platforms allow you to define `build` command and `output` folder:

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

## Folder structure

`nexume` requires a precise folder structure:

- `public`: Contains all publicly accessible images (`favicon.ico`, `profile_img.png`)
- `app`: Contains all tsx files (`page.tsx`, `layout.tsx`)
- `out`: Contains all static assets (`html`, `js`, `css`)

> See complete documentation at [Next.js project structure](https://nextjs.org/docs/getting-started/project-structure).

### `public`

Next.js serve static assets inside a folder called `public` in the root directory. 

Files inside `public` can be referenced starting from the base url(/).

For example, if you want to reference `/public/profile_img.png` in your code, 

you can do so by writing `/profile_img.png` as path.

### `app`

Next.js introduced `app router` in version 13, which argues to offer improved route handling.

It will be unnecessary to get into details of `app routing` in this doc, since `nexume` only offers single page resume template.

> You can explore more about `app routing` at [App Router | Next.js](https://nextjs.org/docs/app/building-your-application/routing#advanced-routing-patterns)

### `out`

Next.js allow you to export static files by breaking a strict SPA into individual HTML files.

This allows you to deploy this project on any hosting platform that serve static HTML/CSS/JS files.

Broken down static assets are all stored inside `out` folder in the root directory.

-----

## Config

Some configurable options are stored inside `nexume.config.ts` in the root directory.

This config file is made to offer easier customization of some basic layout of the template.

### Options

| name        | type    | default                         | description                                   |
|:----------- |:-------:|:------------------------------- |:--------------------------------------------- |
| title       | string  | John Doe's resume               | Title of the page.                            |
| description | string  | John Doe's resume using nexume. | Description metadata of the page.             |
| icon        | string  | /favicon.ico                    | Icon file path.                               |
| images      | string  | /og_img.png                     | Meta img path.                                |
| url         | string  | https://localhost:3000          | Public url.                                   |
| profileImg  | string  | /profile_img.png                | Profile image file path.                      |
| width       | integer | 794                             | Maximum width of the content.                 |
| color       | string  | #845CF5                         | Hex color code used as the basic theme color. |

-----

## License

MIT License © 2023-PRESENT, Nexume
