import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({ providedIn: 'root'})
export class ToggleDarkThemeService {
    isToggle$: Subject<boolean> = new Subject();
    toggle(event) {
        this.isToggle$.next(event.target.checked);
    }
}