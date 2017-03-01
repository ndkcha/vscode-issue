/**
 * @author ndkcha
 * @since 0.1.0
 * @version 0.1.0
 */

import { Component } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { Router } from '@angular/router';

import { LoginService } from './login.service';

interface UserDetails {
    email: string;
    password: string;
}

@Component({
    selector: "sm-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
    /** details inputs by user */
    userDetails: UserDetails = {
        email: "",
        password: ""
    };
    /** 
     * A loading notifier.
     * It is used to keep track of the status of ongoing request and operations.
     * Enabling this boolean will display loading box on the login page.
     */
    isLoading: boolean = false;

    /* mainly used for dependency injections */
    /**
     * It initializes dependencies.
     * Check for user's authentication before proceeding ahead.
     * @param {MdSnackBar} snackBar Service to dispatch Material Design snack bar messages
     * @param {LoginService} loginService Handle data transfer to-from login mechanism
     * @param {Router} router Provides the navigation and url manipulation capabilities
     */
    constructor(private snackBar: MdSnackBar, private loginService: LoginService, private router: Router) { }

    doLogin(): void {
        this.isLoading = true;
    }
}