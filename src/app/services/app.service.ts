import { Injectable } from '@angular/core';
import {ICategory} from "~/app/interfaces/category.interface";

@Injectable({
  providedIn: 'root'
})
export class AppService {


  public categories: Array<ICategory>;
  private tabSelectedIndex: number;



  constructor() {
    this.tabSelectedIndex = 1;
  }


  get TabSelectedIndex(): number {
    return this.tabSelectedIndex;
  }
  set TabSelectedIndex(tab: number) {
    this.tabSelectedIndex = tab;
  }

}
