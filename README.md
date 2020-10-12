# Carlist Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.6.

## Development server

```bash
npm install
npm start
```

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Start Server in Local

```bash
npm run server
```

## Start Angular App in Local

```bash
npm run client
```

## Build

```bash
npm run build
```

## File Structure

```bash
BE Code: ./routes
    APIs:
    - getCarDetails/:id  : get car details by ID
    - getListByQuarter/:year/:quarter : get car list of provided year and quarter

FE Code: ./src

MongoDB Data: ./src/assets/data.json
```

## Features

```bash
 - Home page show timeline by Quarter
 - Expand any Quarter will load Car list for that Quarter
 - Clicking on any Car Box will redirect to Car Details Page.
```

## Technology Stack

```bash
Angular 10
NodeJs
ExpressJs
MongoDB
```

The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
