import { Injectable } from '@angular/core';
import { KeycloakService, KeycloakOptions } from 'keycloak-angular';

@Injectable({
    providedIn: 'root'
})
export class AppInitService {
    private options: KeycloakOptions;

    // _env is defined in env.js
    constructor(private keycloak: KeycloakService) {
        this.options = {
            config: {
                realm: window['_env'].keycloak.realm,
                url: window['_env'].keycloak.url,
                clientId: window['_env'].keycloak.id
            },
            initOptions: {
                onLoad: 'login-required'
            }
        };
    }

    init(): Promise<any> {
        let promise: Promise<any>;

        if (window['_env'].keycloak.enabled === 'true') {
            console.log('[app-init.service] initializing keycloak');
            promise = this.keycloak.init(this.options);
        } else {
            console.log('[app-init.service] keycloak is not enabled');
            promise = Promise.resolve(true);
        }

        return promise;
    }
}
