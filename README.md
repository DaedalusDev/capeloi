# capeloi
Le logiciel de gestion des matériel

## Installation

``` bash
# vue-cli global dependencies
npm install -g @vue/cli

# install dependencies
npm install

# php dependencies
composer install

```

## Configuration
Define ".env" DEV_API_URL if you run api in another location (default: http://localhost:8000)

## Build Setup
``` bash
# serve with hot reload at localhost:8080
npm run dev

# serve API at localhost:8000
php bin/console server:run

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run test:unit

# run e2e tests
npm run test:e2e
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
