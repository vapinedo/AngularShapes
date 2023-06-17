import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';


@Injectable({ providedIn: "root" })
export class ShapeService {

    constructor(private http: HttpClient) { }

    private readonly APIUrl = "https://localhost:7277/GabrielAppTest/Shape?";


    getShape(radius: any) {
        let ciculeAPI = `shapeType=circule&measurement1=${radius}&measurement2=0`;
        return this.http.get<any>(this.APIUrl + ciculeAPI);
    }
    // getUsers(): Observable<any> {
    //     return this.http.get<any>(this.url);
    // }
}