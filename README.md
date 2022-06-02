# How I set everything up

1. First, I created a repo in github with the name `example-react-app` and selected the "Node" option when prompted for what type of .gitignore file to use.
1. Next, I cloned the repo to my machine using `git clone blahblahblah`. This created a folder titled `example-react-app`. I did _not_ cd into this folder after it was made.
1. Then, I ran `npx create-react-app example-react-app --template typescript` to create a React application using Typescript as a template - I recommend doing this because Typescript is a really valuable tool. `example-react-app` is of course an arbitrary application name, but because there was _already_ a folder titled example-react-app/ the script simply went into that already-existing folder and set up all the files.
1. After running the previous step, I saw that npm was spitting out an error, saying that it had found high-importance security vulnerabilities. I googled around and it turns out this is not a problem. The vulnerabilities are caused by the existence of the `react-scripts` package, which is installed automatically by create-react-app. This package is not used in the code that is sent to the browser - it is only used for development purposes (this GitHub issue goes into more detail https://github.com/facebook/create-react-app/issues/11174). To suppress this, I manually went into the package.json file and created a new key-value pair called `devDependencies` and then moved the `react-scripts` dependency into that object. See package.json lines 18-20.
1. To make sure everything works, I cd'd into the project directory (`cd example-react-app`) and then ran `npm run start`. This opened up a browser tab and I saw the default react application. Everything is good!
1. Finally, I started developing.

# The changes I made to the code base

1. First, I created a `src/components/` directory so I can place all my components in there.
1. Next, I deleted everything inside the `<App>` component in `App.tsx` - I don't want to just display the default stuff.
1. I knew that I wanted a generic layout to my application - a navbar, a sidebar, and a body. So, I created a Layout component in `components/Layout`. This component returns a div, and the css attached to that div turns it into a CSS grid. Here, I used the `grid-template-areas` css property to specify that the "navbar" section stretches across the screen at the top, the "sidebar" section sits on the left side, and the "body" section will take up the remaining space. For more information on how CSS grids work, take a look at https://css-tricks.com/snippets/css/complete-guide-grid/
1. Next, I made the Navbar, Sidebar, and AppBody components and placed them inside the `<Layout>` returned by the `App` component. Each of these child components place themselves into the appropriate CSS grid area by using the `grid-area` property.
1. Then I styled each of these components with background colors so you could clearly see where they were in the screen.
1. Finally, I had to make it so the app stretches to take up the entire browser viewport. To do this, I added the following css snippets:
    - In `index.css` (which is a global css file that affects everything) I added `html, body { margin: 0; height: 100%; }`. This, obviously, makes it so the html and the body stretch to take up the whole viewport. Unfortunately, the React root node doesn't take up the full space even though the body does.
    - So, I also added `#root { height: 100%; width: 100% }` to `index.css`. React requires you to set an HTML element as a root node that it uses to stick the entire application tree into. You can see this element being queried and set as the root in `index.tsx` lines 7-9. After running the app, you can open the page source and find the div in the HTML that has the `#root` id. So yeah, this element exists and has to be styled if you want it to take up all the space in the screen.
1. There was one more thing I wanted to edit: the README.
    - When I created the GitHub repo, it automatically created a README.md file in the directory. When I ran create-react-app, it created _its own_ README and saved it as `README.md`, and it _renamed_ the old README to `README.old.md`. Rude.
	- So I deleted the old README and then completely erased everything inside the new `README.md`.
	- Finally, I wrote the file you're reading now!
1. Now that all the code was done, I needed to commit it and push it to GitHub.

# Pushing up to GitHub

1. I made sure that my terminal was inside the git repo's folder on my machine (that is, the `example-react-app` folder).
1. I did a `git status` to see what files have been added and changed. I used to have absolutely nothing except a README and a LICENSE, so naturally git status showed _a lot_ of new files. One thing the git status did NOT show, however, was the existence of the `node_modules` folder. This is because `node_modules` is specified in the .gitignore folder to be ignored by git. _Never commit the node_modules folder_
1. Satisfied that everything I saw in `git status` was, in fact, everything I wanted to commit, I simply staged _everything_ by running `git add -A`, a command which automatically stages all files.
1. I ran `git status` once more and I found that instead of a bunch of red files listed out, I now had a bunch of _green_ files listed out! This means that all the green files are _staged_, so if I make a commit at this moment, all the green files will be in that commit.
1. I ran `git commit -m "created the initial react app"`. The commit command packages all the staged files into a single commit, and the `-m` flag makes it so the following string is marked as the message attached to that commit. If you scroll up on this page and look at the files listed above, you'll see that many of these files are listed as having last been changed by the commit titled "created the initial react app".
1. Now that all my changes were cleanly committed to my _local_ repo, I wanted to push them up to the server. So I ran `git push origin main` which pushed all local commits (in this case only 1 commit) up to the `main` branch on the `origin` server (the default git name for _the_ server your repo is hosted on).
1. I navigated to my repo in GitHub in my browser and saw that my commit was pushed succesfully.
1. Finally, I sent you this link, and now you're reading this!

# Running this app to see for yourself
1. First, clone this repo using git clone. If you've never cloned a repo, just come talk to me.
1. Next, navigate into the folder that was created by running `cd example-react-app`.
1. Next, we need to run `npm install` (or `npm i` for short). This will look at the `package.json` file and download all the necessary dependencies to the `node_modules/` folder.
1. Finally, run `npm run start`. A browser tab should automatically open. If it doesn't, open your browser and navigate to `localhost:3000`.
1. You should see the following screen:

![An image of what you would see if you run the previous commands and navigate to the page](./readme_images/example-react-app%20default%20page.png)

6. You did it! Nice. If you want, you can modify any files as you see fit and you should immediately see the changes in the browser once the files are saved.
