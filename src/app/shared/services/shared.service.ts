import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private _isRightSideCollapsed = new BehaviorSubject<boolean>(false);
  public isRightSideCollapsed$ = this._isRightSideCollapsed.asObservable();

  private _isLeftSideCollapsed = new BehaviorSubject<boolean>(false);
  public isLeftSideCollapsed$ = this._isLeftSideCollapsed.asObservable();

  toggleRightSideCollapse() {
    this._isRightSideCollapsed.next(!this._isRightSideCollapsed.value);
    console.log('Toggling Right Side:', this._isRightSideCollapsed.value);
  }

  toggleLeftSideCollapse() {
    this._isLeftSideCollapsed.next(!this._isLeftSideCollapsed.value);
    console.log('Toggling Left Side:', this._isLeftSideCollapsed.value);
  }

  get isRightSideCollapsed(): boolean {
    return this._isRightSideCollapsed.value;
  }

  get isLeftSideCollapsed(): boolean {
    return this._isLeftSideCollapsed.value;
  }
}
