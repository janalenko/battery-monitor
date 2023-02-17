import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, take } from "rxjs";
import { BmsInfo } from "../_models/bms-info.model";
import { BmsData } from "../_models/bms-data.model";
import { Endpoints } from "../endpoints";

@Injectable({providedIn: 'root'})
export class DataService {

    public lastData$ = new Subject<BmsData>()

    constructor(
        private http: HttpClient
    ){}

    getAllData() {
        this.http.get<BmsInfo>(Endpoints.Data.getAll())
            .pipe(
                take(1),
            )
            .subscribe({
                next: res => this.setData(res),
                error: error => console.error('ERROR in loading data: ', error),
                complete: () => {}
            })
    }

    setData(data: BmsInfo){
        this.lastData$.next({
            bmsInfo: data,
            timeStamp: Date.now()
        })
    }
}