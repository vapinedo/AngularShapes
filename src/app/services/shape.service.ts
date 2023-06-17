import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({ providedIn: "root" })
export class ShapeService {

    drawShape(shapeData: any) {
        console.log("Shape data", shapeData);
        return new Promise((resolve, reject) => {
            resolve(true);
        });        
    }
}