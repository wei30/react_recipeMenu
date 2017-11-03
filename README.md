https://wei30.github.io/react_recipeMenu/

Build a Recipe Box from FreecodeCamp

Objective:

User story: I can create recipes that have names and ingredients.
User story: I can see an index view where the names of all the recipes are visible.
User story: I can click into any of those recipes to view it
User Story: I can edit these recipes.
User Story: I can delete these recipes.
User Story: All new recipes I added are saved in my browser's local storage. If I refresh the page, these recipes will be there.
To run locally:

npm install
npm install react-bootstrap
npm start //localhost:3000
To build for production:

Add lines to the package.json a) add "homepage": "https://myusername.github.io/my-app"; b) add "scripts":{ "predeploy": "npm run build" "deploy": "gh-pages-d build" }
npm run build
npm install --save -dev gh-pages
npm run deploy
