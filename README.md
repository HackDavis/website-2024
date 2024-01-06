# Some Notes Before You Begin
Make sure you follow all of the steps in "Setting Up Your Development Environment" before attempting to even look at the code. 

Also, read through the docs linked under the "Contributing to the Codebase" section so you can get a feel for the tools and syntax we will be going through.

# Setting Up Your Development Environment

Before you begin, create a folder for this team wherever you want to store any GitHub repos that you will be cloning on your device in this cohort. You can name it include, platform_team, or literally anything you want to. If you choose to name it "include", **do not use a '#' in your folder name**, it'll cause a bunch of problems later.

## 1. NODE.JS

Node.js is a runtime environment that is used to run Javascript code. It comes with the Node Package Manager (npm) that helps us manage the Javascript packages used in our project. To set up node.js:

1. Download the Node.js installer for your OS from https://nodejs.org/en/download/current
2. Run the installer and follow the installation wizard.
3. Once the installation finishes, open a terminal on VSCode and type _node --version_ to verify your node installation. Type _npm --v_ to verify your npm installation.

   a. If you get an error saying that node or npm is not recognized as a command, try restarting VSCode to see if the issue fixes itself. (If you had VSCode opened while installing Node, this should fix it.)
   b. If the problem persists, search for _Environment variables_ in your Start menu. Click on _Edit your Environment variables_. Click on _Environment Variables_ in the new window that opens up.
   c. Find the variable _Path_ and click on _Edit_.
   d. Check for _C:\Program Files\nodejs\\_ in the list of paths that appear. If it's not there, click on _New_ and add it to the list.
   e. Restart VSCode and it should ideally work now.

**If you already have node**  
Try to update your node version to roughly v21.1.0 so you don't get random warnings.

## 2. ESLINT EXTENSION

ESLint is an extension that ensures that your code adheres to certain code style. It also auto-formats your code on save in VSCode. To enable it:

1. Go to the Extensions tab on VSCode and install _ESLint_.
2. Once it is installed, open your Command Palette by pressing **Ctrl + SHift + P**/**Command + Shift + P** and search for **Preferences: Open Workspace Settings (JSON)**. Open the file and add this code into the file. This will autoformat your code on save and also configure tab sizes:

   ```json
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": "explicit"
    },
    "eslint.validate": [
        "javascript"
    ],
    "[javascriptreact]": {
        "editor.indentSize": 2
    }
   ```

## 3. Optional Extension
- Auto Rename Tag — useful for JSX

## 4. MongoDB
### 4.1 Installation
To get MongoDB set up locally, you'll need to install MongoDB on your machine along with mongosh (the command line tool for MongoDB). Then, you'll also need MongoDBCompass to view your database with a new interface. **The goal is to have mongosh working, once that works, other parts of the tutorial are optional.**
- Install MongoDB on Mac: https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/
- Install MongoDB on Windows: https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/
- https://www.mongodb.com/products/tools/compass
- 
### 4.2 Database and User setup
Inside MongoDB Compass, connect to the client and create a new database using the plus sign near the Database part of the sidebar menu. For collections, just name it anything since it will be deleted later.

You will also need to create a user that has a username, password, and dbOwnership role using the mongo shell (mongosh). To enter your mongo shell, type `mongosh` into your terminal.
To switch to your newly created database:
```bash
use DBNAME
```
Replace `DBNAME` with the actual name of your database.

Then, to create a user that has ownership of the database:
```js
db.createUser({
   user: "USERNAME",
   pwd: "PASSWORD",
   roles: ['dbOwner']
})
```

### 4.3 Connecting with the Codebase
If that worked, then you should be ready to connect using the codebase! To do so, create a file called `.env` in the root of the repository (same level as package.json) and input the following:
```
MONGO_USERNAME=<USERNAME>
MONGO_PASSWORD=<PASSWORD>
MONGO_DB_HOST=127.0.0.1:27017/<DBNAME>
```
Replace `<USERNAME>, <PASSWORD>, <DBNAME>` with the actual username, password, and database names. (Don't include the angle brackets).

### 4.4 Testing & Initialization
Do this after the getting started portion (right after this section)

Assuming you have already run `npm install` and `npm run dev` is producing a web page for you to view, you can continue with this part. You will be running the `npm run init` command which will **wipe your database** and initialize it with a `pokemon` and `trainers` collection. In the future, you can edit this initialization in the `_data/collections.json` file. If this works, then your MongoDB Compass (after a refresh) should display that your database has these two collections. This means everything is working!

## Getting Started
Set up:

`npm install` for package installations. This will install all packages specified in the package.json file.

Run the development server:

```bash
npm run dev
```

Run a linting test:

```bash
npm run lint
```

# Contributing to the Codebase
## React Resources
- https://react.dev/learn/tutorial-tic-tac-toe
- https://react.dev/reference/react/useState
- https://react.dev/reference/react/useEffect
- Read up on React Hooks
- Read up on React Context (global state management | optional)

## HTML/CSS Resources
- https://css-tricks.com/snippets/css/a-guide-to-flexbox/

## App Router
Next.js versions 13+ implemented the App Router which allows for colocation of files. With the Page Router, we used to define pages directly by creating a `jsx` file with the page name inside of a pages directory.

Now, with App Router, we define pages by creating a directory within the `app` folder where a route is defined only when there is a `page.jsx` file inside of the directory. To create a new route, you will create a folder, for example: `about-us` and create a `page.jsx` file inside. Once you populate the `page.jsx` file with a React Component, the route `http://[domain]/about-us` should exist.

To create directories that are guarenteed to never produce a new route in your app, prefix the directory name with `_`, for example: `_components`. You can achieve the same thing by just naming it `components` and ensuring that no `page.jsx` file ever appears in the directory, however, I want to keep things explicit so we will stick with the underscore.

To create groupings of files without affecting the routes, you can wrap your folder name with parenthesis: `(index-page)`. In our codebase, I have done this to seperate the front and backend by creating a grouping for `(api)` and `(pages)`. Notice how `(api)` or `(pages)` never appears in our route when we navigate through the app. I have done this to `(index-page)` to group our page information for the route at `/` inside a folder rather than having it linger in the root of our `(pages)` directory.

### Resources
- https://nextjs.org/docs/app/building-your-application/routing/defining-routes
- https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts
- https://nextjs.org/docs/app/building-your-application/routing/route-groups
- https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes

## Layouts
Next.js 13+ also added in the super useful tool called layouts. Layouts essentially wrap around your pages to provide the same "layout" to each page that the layout applies to. An example is having a Navbar and Footer that are shared by every page of the app. Rather than defining the Navbar and Footer in each page, you can add it to the root layout and have the layout apply to each page by writing the code once.

Layouts are defined with a `layout.jsx` file and the layout applies to:
- the page in the directory of the layout file
- all other pages that are descendents of the directory that `layout.jsx` is in.

Layouts also stack on top of each other. You could have a root layout that puts a navbar on the top of the page and another layout in the `/examples` route that puts a sidebar on anything examples related. This means when you navigate to `/examples` or `/examples/some-example`, you will see both a navbar and a sidebar. However, other routes like `/about-us` will only have a navbar since this route is only affected by the root layout.

Since we have a `layout.jsx` in the root of the `(pages)` directory, all of our frontend is affected by this file.

### Resources
- https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts

## File Structure
To keep a maintainable codebase, we will be following strict rules that allow us to keep our codebase organized and clean. In the root of `(pages)`, you will notice that we have three folders:
- _components
- _data
- _hooks

These three folders should account for every type of file you'll ever need to create. In each subdirectory, for example, `about-us`, we can also have these three folders.

Lets say I want to create the Navbar component. I will first think about which parts of the codebase the navbar is used by. Since the Navbar is a part of every page and called by the root layout, it makes sense to define the Navbar inside the `_components` folder of the root folder.

If I want to define a Sidebar that is only used by the `examples` route, and children of the `examples` route, then it makes sense to put the Sidebar component inside the `_components` folder of the `examples` directory. In short, find the level of nesting that accounts for all use cases for your component, data, utils, hooks and define your code in that level.

**Note:** The `layout.jsx` file in the root of `(pages)` sort of breaks the pattern I was talking about. It was supposed to be in the `(index-page)` directory since that handles all of the `/` routes, but a nuance of using the parenthesis to create route groupings forces us to put the `layout.jsx` on layer above. This won't be an issue for other pages however, so just put the `layout.jsx` with the `page.jsx` file whenever you plan on making a layout for certain routes.

### Public Folder
The public folder is where we can store media such as pdfs, images, videos. To keep this organized, create a new folder for each page the content is related to. To access content in the public folder, you don't need to do any of the `../../public` stuff. Next.js automatically routes `/` to the public folder.

For example, if you have an image stored in `/public/about-us/alec.png`, you can access it with `/about-us/alec.png` from anywhere in your code.

## SCSS Modules
We will be using SCSS since it just provides more options for how to format our CSS code. If you don't want to learn SCSS, it's fine, since CSS works just as well in scss files. Also, we will be using css modules for our Next.js app. CSS Modules (in our case SCSS modules) are defined like so: `Navbar.module.scss`. The reason we are using modules is because they localize our CSS classes so there is no possibility of 2 people using the same class name and having conflict.

### Resources
- https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/

## Serverless Functions
To create your API from serverless functions, go to the `(api)` folder which contains a file structure similar to the `(pages)` folder. Instead of having `_components` and `_hooks`, the `(api)` folder only has the `_utils` folder which will be used to define global utility functions. I defined three folders: `db`, `request`, and `response`. These are designed such that all database related utility functions are defined in `db`, request processing related functions will be in `request`, and response related utility such as custom Errors are defined in `reponse`.

If you see a case where some utility only applies to a certain set of endpoints, feel free to create local `_utils` folders using the same logic as before for local `_components` and `_hooks`.

You'll see that there are folders defined with square brackets around the name such as `[id]`. These are dynamic routes and they work on the frontend as well. 

**Resources**
- https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes
- https://restfulapi.net/http-methods/
- https://medium.com/@nadinCodeHat/rest-api-naming-conventions-and-best-practices-1c4e781eb6a5

**Note**
If your app only has a frontend, feel free to delete the `(api)` folder. 
