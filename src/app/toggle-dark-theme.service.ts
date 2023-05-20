import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({ providedIn: 'root'})
export class ToggleDarkThemeService {
    isToggle$: Subject<boolean> = new Subject();
    toggle(value) {
        this.isToggle$.next(value);
    }
}