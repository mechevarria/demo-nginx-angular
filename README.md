# Nginx Angular Demo

Responsive [Angular](https://angular.io/) and [Bootstrap](https://getbootstrap.com/) web application. This project was generated with [Angular CLI](https://github.com/angular/angular-cli) and is fully compatible. [Keycloak Angular](https://github.com/mauriciovigolo/keycloak-angular) for Single Sign-On, [CoreUI](https://coreui.io/docs/getting-started/introduction/) and [Leaflet](https://leafletjs.com/) are already integrated as well as API integration with [JSONPlaceholder](https://jsonplaceholder.typicode.com/). The project can be deployed as a [docker](https://docs.docker.com/install/) container or pushed directly with a [buildpack](https://docs.cloudfoundry.org/buildpacks/nginx/index.html) to [SAP Cloud Platform](https://www.sap.com/products/cloud-platform.html)

![image.png](screenshots/screenshot1.png)

![image.png](screenshots/screenshot2.png)

## Local Setup

* Install dependencies with
```bash
npm install
```

## Development Server

```bash
npm run start
```
* The server will be running on [http://localhost:4200](http://localhost:4200)

## Production Build

* Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.


## Run as docker container

>You can create a public registry with security scanning for free at [Quay.io](https://quay.io)

* Build and push the image with this script. You will have to edit the quay.io registry endpoint for the push command to work
```bash
docker-build.sh
```

* Run the continer with this script
```bash
docker-run.sh
```

## Deploy to SAP Cloud Platform

>You can create an account for free at [SAP Cloud Platform](https://www.sap.com/products/cloud-platform.html)

* Make sure you have the [Cloud Foundry Command Line Interface (cf CLI)](https://docs.cloudfoundry.org/cf-cli/) installed

* Update the `cf-login.sh` script with the values found in the SAP Cloud Foundry Cockpit. Then run the script to login.

```bash
cf-login.sh
```

![image.png](screenshots/cf-cockpit.png)

### Docker

* Deploy a docker container with the following command

```bash
cf-push-docker.sh
```

### Buildpack

* Push your code directly without the need of a container registry with the following command

```bash
cf-push-buildpack.sh
```

* You will find a url to your deployed application in the SAP Cloud Foundry Cockpit.

## Keycloak configuration

* Default configuration has keycloak integration disabled. To enable, set the runtime environment variable `KEYCLOAK` to **true**
* The `KEYCLOAK_URL` variable is externalized to allow deployment to different environments and passed via the `docker-run.sh`, `cf-push-buildpack.sh` and `cf-push-docker.sh` scripts.
* Complete keycloak configuration is located in [env.template.js](https://github.com/mechevarria/demo-nginx-angular/blob/master/src/assets/js/env.template.js). This environment variables are replaced at runtime.

## Code scaffolding

* Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

> If you do not have the [Angular CLI](https://cli.angular.io/) installed globally, the CLI is provided by the development dependencies. Use `npx ng` to call commands such as `npx ng generate component component-name`

## Further help

* Learn more about development on SAP Cloud Platform with this [tutorial](https://developers.sap.com/mission.scp-1-start-developing.html)

* [Keycloak](https://www.keycloak.org/) for Open Source application Single Sign-On

* To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

* To get started with Angular, this is an excellent official [tutorial](https://angular.io/tutorial)

* Leaflet component provided by [ngx-leaflet](https://github.com/Asymmetrik/ngx-leaflet)

* Bootstrap components were created using [ngx-bootstrap](https://github.com/valor-software/ngx-bootstrap)

* Chart library by [ng2-charts](https://valor-software.com/ng2-charts/)

* Toast notification done with [ngx-toastr](https://github.com/scttcper/ngx-toastr)
