# ACT Docusaurus Documentation

This is a template for docusaurus 2.x.  This creates a docusaurus site that is themed properly and a set of empty templates to fill in.

### Installation

From the folder where you want to create a documentation site.
```
npx create-docusaurus@latest documentation https://github.com/act-org/docusaurus-template.git --typescript -p npm -g copy
```

### Setup

Edit the .env file with the appropriate values for your project

```bash
PROJECT_NAME="Change Me"
BITBUCKET_REPO_NAME="Repository_Folder_Name"
PIPELINE_FOLDER_NAME="Pipeline_Folder_Name"
```

### Local Development

```
cd documentation
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

To generate a static version for app doc deployment
```
$ npm run build
```