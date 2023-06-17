import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';


@Injectable({ providedIn: "root" })
export class ShapeService {

    constructor(private http: HttpClient) {}

    private readonly url = "https://jsonplaceholder.typicode.com/users";
    

    getUsers(): Observable<any> {
        return this.http.get<any>(this.url);
    }
}