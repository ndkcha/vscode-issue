/**
 * @author ndkcha
 * @since 0.0.1
 * @version 0.0.1
 */

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ToolbarService {
    private toolbarTitleSource = new Subject<string>();
    title$ = this.toolbarTitleSource.asObservable();
    private toolbarSubtitle = new Subject<string>();
    subtitle$ = this.toolbarSubtitle.asObservable();

    changeToolbarTitle(title: string) {
        this.toolbarTitleSource.next(title);
    }

    changeSubtitle(subtitle: string) {
        this.toolbarSubtitle.next(subtitle);
    }
}