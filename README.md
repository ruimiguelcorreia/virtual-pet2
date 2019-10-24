VIRTUAL PET

1. Creating the project - cmd:

Create a virtual-pet directory:

mkdir virtual-pet

Initialize an NPM project in that repository:

cd virtual-pet
npm init

Initialize a git repository within that directory:

git init

Install Jest and save it as a dev dependency:

using: npm i --D jest

Create a README.md file:

touch README.md

Create a .gitignore file:

touch .gitignore

Open all the files with the IDE:

code .

2 - Working on the files - IDE

Add node_modules to the .gitignore file

In the package.json, set Jest as the test command for the project:

"scripts": {
    "test": "jest"
  },

Write a clear README.md file, while having in mind that it is important because it contains a set of instructions of what needs to be done to reproduce and develop the same project.

3 - Pushing initial stage of the project to GitHub:

Get the SSH link to the GitHub repo and link it to the local one:

git remote add origin {SSH link}

Add the README.md to the staging area:

git add README.md

Commit your changes with a clear message:

git commit -m '{message}'

Push the project to GitHub:

git push origin master