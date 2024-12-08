![Next.js](https://img.shields.io/badge/Next.js-11.0.0-black?logo=next.js&logoColor=white&style=flat-square)  
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-blue?logo=tailwindcss&logoColor=white&style=flat-square)  
![SQL](https://img.shields.io/badge/SQL-2019-blue?logo=postgresql&logoColor=white&style=flat-square)  
# Portfolio Blog - Next.js

Welcome to the **Portfolio Blog** project! This is a personal portfolio and blog site built with **Next.js**, showcasing your work and posts with a sleek, modern design. This project leverages Next.js' features like server-side rendering, static site generation, and built-in optimizations.

## Features ✨

- **Server-side Rendering (SSR)** and **Static Site Generation (SSG)** for faster page loads 🚀
- **Dynamic Blog Posts** using markdown or a CMS 📝
- **Automatic Font Optimization** with `next/font` 💡
- **Responsive Design** for seamless mobile and desktop views 📱💻
- Easy **deployment to Vercel** ⚡

## Prerequisites 🛠️

Before you start, make sure you have the following tools installed:

- **Node.js** (v14 or higher) – [Download Node.js](https://nodejs.org) 🌐
- **Package manager**:
  - [npm](https://www.npmjs.com/) 🧳
  - [Yarn](https://classic.yarnpkg.com/en/docs/install/) 🧶
  - [pnpm](https://pnpm.io/) 📦
  - [bun](https://bun.sh/) 🍞

## Getting Started 🚀

### Step 1: Clone the repository

Clone this project to your local machine by running the following command in your terminal:


git clone https://github.com/turcudaniel22/next-js-blog.git
cd next-js-blog

Step 2: Install dependencies
Run the following command to install the necessary dependencies:

With npm:
npm install
With Yarn:
yarn install
With pnpm:
pnpm install
With Bun:
bun install
Step 3: Run the development server
Start the development server with one of the following commands:

With npm:
npm run dev
With Yarn:
yarn dev
With pnpm:
pnpm dev
With Bun:
bun dev
Step 4: Access the app 🌍
Open your browser and visit http://localhost:3000 to see your site in action.

Step 5: Start editing ✏️
The main page can be edited via the app/page.tsx file. As you save changes, the page will auto-refresh in your browser.

Project Structure 🗂️

Here’s an overview of the project structure:

├── .eslintrc.json         # ESLint configuration for code quality
├── .gitignore             # Git ignore rules
├── README.md              # Project documentation
├── auth.config.ts         # Configuration for authentication
├── next.config.mjs        # Next.js configuration file
├── package-lock.json      # Automatically generated lock file for npm
├── package.json           # Project dependencies and scripts
├── postcss.config.mjs     # PostCSS configuration
├── public/                # Public static assets like images and icons
├── scripts/               # Custom scripts, like for seeding the database
├── src/                   # Source code, including pages and components
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
src/: Contains all the application code, including pages and components.
public/: Stores static assets like images, icons, and other files that should be publicly accessible.
scripts/: Includes scripts like database seeding and custom utilities.
auth.config.ts: Configuration for handling authentication.
tailwind.config.ts: Configuration for Tailwind CSS.
Font Optimization 🎨

This project uses next/font to optimize the Geist font family. This provides faster font loading and improved performance.

For more information on font optimization in Next.js, refer to the Next.js Font Optimization documentation.

Learn More 📚

If you'd like to dive deeper into Next.js and its features, check out the following resources:

Next.js Documentation: Comprehensive documentation on Next.js features and API 📖
Learn Next.js: An interactive tutorial for getting started with Next.js 🎓
Next.js GitHub Repository: Explore the source code and contribute to the project 💻
Deployment 🌍

Deploy to Vercel ⚡
The easiest way to deploy your Next.js app is via Vercel, created by the same team behind Next.js. It offers one-click deployment and automated builds for every commit.

Push your project to a Git repository (GitHub, GitLab, Bitbucket) 🌱
Visit Vercel and click "New Project" 🚀
Import your repository and follow the prompts to deploy your app 🔧
For more details, check out the Next.js deployment documentation.

Contributing 🤝

We welcome contributions! To contribute to the project, follow these steps:

Fork the repository 🍴
Create a new branch (git checkout -b feature-branch) 🌱
Make your changes and commit them (git commit -am 'Add feature') 📝
Push your branch (git push origin feature-branch) 🚀
Open a pull request 📥
For bug reports or feature requests, please create an issue in the repository 🐞.

License 📄

This project is open-source and available under the MIT License.


### Key Changes:

1. **Clone Link**: I updated the clone link to your repository URL.
2. **Project Structure**: I added the directory structure of your project based on the information you provided. This helps contributors understand how the project is organized.
3. **Icons**: As before, icons are used to add visual flair to the different sections of the README file.
4. **`src/` and `public/`**: I mentioned the significance of the `src/` and `public/` folders, as those are typically the core places for code and static assets.
