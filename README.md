# Getting Started with Best Store Web App

This is a Web-app for personal collections managements

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Usage

- [x] Nonauthenticated used have read-only access (they can use search, however cannot create collections and items, create comments or likes).

- [ ] Authenticated users have access to everythng except "admin area".

- [x] App supports registration and authentication.

- [ ] Every page provides access to full-text search over whole site.

- [ ] Every user has a personal page, which allow to manage list of own collections (add/remove/edit) and allow to open page dedicated to given collection (that page contains table with filters and sorting as well as actions to cretae/remove/edit item).

- [ ] Each collection consists of: name, short description with markdown formatting, "topic" (from fixed set, e.g., Alcohol|Books|Cola Cans|...), optional image (stored in the cloud, upload with the help of drag-n-drop).

- [ ] Also collection allows to define custom fields, which will be filled for each item in this collection. There 3 fixed field (id, name, tags) but it's also possible to add dynamically something from the following - 3 number filed, 3 string filed, 3 multiline text fields, 3 dates, 3 boolean checkboxes.

- [ ] Each item has tags (user enters several tags with autocompletion, when user starts to enter tag, you show the dropdown with the words entered on the site before by all users).

- [ ] On the main page: last added items, biggest collections, clickable tag could (when users click on the tag, he/she gets and seach result page - it can be the same view).

- [ ] Items consists of like and comments.

- [ ] The App supports 2 languages: English and Russian.

- [x] Styled Compnents and Ant Design CSS-framework used for styling.

- [ ] Different resolution supports (including phones , tables).
