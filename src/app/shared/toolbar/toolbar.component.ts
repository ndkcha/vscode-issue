/**
 * @author ndkcha
 * @since 0.1.0
 * @version 0.1.0
 */

import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { ToolbarService } from './toolbar.service';

@Component({
    selector: 'oz-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
    title: string = "Title";
    subtitle: string = "Subtitle";
    subscriptions: Subscription[] = [];

    constructor(private toolbarService: ToolbarService, private router: Router) {
        let chTitle: Subscription = toolbarService.title$.subscribe(
            (title: string) => {
                this.title = title
            }
        );
        this.subscriptions.push(chTitle);
        let chSubtitle: Subscription = toolbarService.subtitle$.subscribe(
            (subtitle: string) => {
                this.subtitle = subtitle;
            }
        );
        this.subscriptions.push(chSubtitle);
    }

    ngOnDestroy() {
        for (let subscription of this.subscriptions) {
            subscription.unsubscribe();
        }
    }

    /** Clear the localStorage and route to login page */
    logout(): void {
        localStorage.clear();
        this.router.navigate(['/login']);
    }
}