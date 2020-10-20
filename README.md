# Quotes

Deployed version: <https://gary-lgy.github.io/cs3219-otot-task-b-frontend>

Quotes is a web app that allows users to view, create, edit, and delete quotes.

This is part of my submission for AY2020/21 Sem1 CS3219 "OTOT" Task B.

This repository contains:

- The React + TypeScript client

The backend repository can be found [here](https://www.github.com/gary-lgy/cs3219-otot-task-b-backend/).

## Development setup

### Clone the repository

```bash
git clone git@github.com:gary-lgy/cs3219-otot-task-b-frontend.git
```

### Install dependencies

```bash
cd cs3219-otot-task-b-frontend
yarn install
```

### Configure the environment variables

The `.env` file contains the configuration options.
Currently, it only contains the backend URL.

The backend URL included by default is the deployed RESTful API on AWS Lambda. To use another server instance, change the url to point to the instance.

### Build and run the project

```bash
yarn start
```
