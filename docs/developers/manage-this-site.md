---
title: Manage this site
---

This site is constructed using [Docusaurus](https://docusaurus.io/).

## Installation

Download the sources for this site from [https://github.com/morea-framework/morea-framework.github.io](https://github.com/morea-framework/morea-framework.github.io).

Install third party libraries with:

```
npm install
```

## Run the site locally

To run the site locally, invoke:

```
npm start
```

The site should shortly appear at [http://localhost:3000](http://localhost:3000).

## Deploy the site

To deploy the site, make sure that GIT_USER is set and that you have commit privileges to the repo, then invoke:

```
npm run deploy
```

This builds the static HTML and commits the results to the `main` branch of the morea-framework.github.io repository.

## Commit changes to the sources

Note that the deploy command does not commit your changes to the source files (i.e. the `source` branch). So, make sure to commit your changes to the source files after deploying.


