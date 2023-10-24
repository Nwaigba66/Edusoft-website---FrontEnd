## Introduction

Welcome to the github repository of Edusoft website

Edusoft is an education website that allows people who desires to study in any university around the world search 
and connect to their desired university and course with an adequate informations with respect to course, tuition accommodation and application processess and procedures.

## Getting Started

To get started with the project in your local development environment, follow
these steps:

1. Clone the repository to your local machine.

```bash
https://github.com/Nwaigba66/Edusoft-website---FrontEnd.git
```

2. Open the cloned folder in your preferred code editor, install the required
   dependencies by running the following command in the terminal:

```bash
pip install node.js
```

Followed by 
```bash
npm install 
```

3. System Requirements:

Node.js 16.14 or later.
macOS, Windows (including WSL), and Linux are supported.



4. Start the development server by running the following command:

We recommend starting a new Next.js app using create-next-app, which sets up everything automatically for you. To create a project, run:

## Terminal:
npx create-next-app@latest

On installation, you'll see the following prompts:

What is your project named? my-app
Would you like to use TypeScript? No / Yes
Would you like to use ESLint? No / Yes
Would you like to use Tailwind CSS? No / Yes
Would you like to use `src/` directory? No / Yes
Would you like to use App Router? (recommended) No / Yes
Would you like to customize the default import alias (@/*)? No / Yes
What import alias would you like configured? @/*

After the prompts, create-next-app will create a folder with your project name and install the required dependencies.

## Manual Installation
To manually create a new Next.js app, install the required packages:

Terminal

npm install next@latest react@latest react-dom@latest
Open your package.json file and add the following scripts:

package.json

{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
These scripts refer to the different stages of developing an application:

dev: runs next dev to start Next.js in development mode.
build: runs next build to build the application for production usage.
start: runs next start to start a Next.js production server.
lint: runs next lint to set up Next.js' built-in ESLint configuration.


## Good to know:

Next.js now ships with TypeScript, ESLint, and Tailwind CSS configuration by default.
You can optionally use a src directory in the root of your project to separate your application's code from configuration files.

You are now ready to go!
