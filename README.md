# ColorRuleEngine

Developed by Garvpreet Singh.

Problem:
Develop a screen with just one grid with bunch of rows and columns. Any type of data is ok. When screen is launched, it should fetch the data and display it.
This grid should have one feature – color rule engine. When the screen is up and running in chrome, user should be able to choose a context menu item on the grid, called “color rules”. When this item is clicked it should bring up a dialog where user can specify two things: a SQL-like condition and a color. User should be able to save these two attributes’ values to browser’s storage (lookup: localstorage). So for example, if your grid contains a column called “Country” and I use the color rules screen to specify a condition like “Country = ‘Canada’” and color as red, any row that has value of Country as red, should paint the row red colored.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
