import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';


@Injectable({ providedIn: "root" })
export class ShapeService {

    constructor(private http: HttpClient) { }

    private readonly APIUrl = "https://localhost:7277/GabrielAppTest/";


    getCicle(shape: any, radius: any, canvasWidth: any, canvasHeight: any) {
        let circleAPI = `Shape?shapeType=${shape}&measurement1=${radius}&measurement2=0&canvasWidth=${canvasWidth}&canvasHeigth=${canvasHeight}`;
        return this.http.get<any>(this.APIUrl + circleAPI);
    }

    getOval(shape: any, radius1: any, radius2: any, canvasWidth: any, canvasHeight: any) {
        let ovalAPI = `Shape?shapeType=${shape}&measurement1=${radius1}&measurement2=${radius2}&canvasWidth=${canvasWidth}&canvasHeigth=${canvasHeight}`;
        return this.http.get<any>(this.APIUrl + ovalAPI);
    }

    getSquare(shape: any, legnth: any) {
        let rectangleAPI = `Shape?shapeType=${shape}&measurement1=${legnth}&measurement2=0`;
        return this.http.get<any>(this.APIUrl + rectangleAPI);
    }

    getRectangle(shape: any, width: any, height: any) {
        let rectangleAPI = `Shape?shapeType=${shape}&measurement1=${width}&measurement2=${height}`;
        return this.http.get<any>(this.APIUrl + rectangleAPI);
    }

    getParallelogram(shape: any, width: any, height: any) {
        let parallelogramAPI = `Parallelogram?shapeType=${shape}&measurement1=${width}&measurement2=${height}`;
        return this.http.get<any>(this.APIUrl + parallelogramAPI);
    }

    getTriangle(shape: any, width: any, height: any, canvasWidth: any, canvasHeight: any) {
        if (shape === "scalane_triangle") {
            let triangleAPI = `Triangle?shapeType=${shape}&measurement1=${width}&measurement2=${height}&canvasWidth=${canvasWidth}&canvasHeigth=${canvasHeight}`;
            return this.http.get<any>(this.APIUrl + triangleAPI);
        }
        if (shape === "isosceles_triangle") {
            let triangleAPI = `Triangle?shapeType=${shape}&measurement1=${width}&measurement2=0&canvasWidth=${canvasWidth}&canvasHeigth=${canvasHeight}`;
            return this.http.get<any>(this.APIUrl + triangleAPI);
        }
        let triangleAPI = `Triangle?shapeType=${shape}&measurement1=${width}&measurement2=${height ? height : 0}&canvasWidth=${canvasWidth}&canvasHeigth=${canvasHeight}`;
        return this.http.get<any>(this.APIUrl + triangleAPI);
    }

    getComplexShape(shape: any, legnth: any) {

        if (shape === 'pentagon') {
            let complexShapeAPI = `ComplexShape?shapeNumSide=5&measurement1=${legnth}&measurement2=0`;
            return this.http.get<any>(this.APIUrl + complexShapeAPI);
        }
        if (shape === 'hexagon') {
            let complexShapeAPI = `ComplexShape?shapeNumSide=6&measurement1=${legnth}&measurement2=0`;
            return this.http.get<any>(this.APIUrl + complexShapeAPI);
        }
        if (shape === 'heptagon') {
            let complexShapeAPI = `ComplexShape?shapeNumSide=7&measurement1=${legnth}&measurement2=0`;
            return this.http.get<any>(this.APIUrl + complexShapeAPI);
        }

        let complexShapeAPI = `ComplexShape?shapeNumSide=8&measurement1=${legnth}&measurement2=0`;
        return this.http.get<any>(this.APIUrl + complexShapeAPI);

    }

}