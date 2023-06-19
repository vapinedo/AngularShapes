import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ShapeService } from "src/app/services/shape.service";


@Component({
  selector: 'shape-create',
  templateUrl: './shape-create.component.html',
  styleUrls: ['./shape-create.component.scss']
})
export class ShapeCreateComponent implements OnInit {

  canvasContext: any;
  @ViewChild('canvas', { static: true })
  canvas!: ElementRef<HTMLCanvasElement>;

  shapeToRender: string = "";

  shapeList = [
    { key: "", value: "" },
    { key: "circle", value: "Circle" },
    { key: "equilateral_triangle", value: "Equilateral Triangle" },
    { key: "hexagon", value: "Hexagon" },
    { key: "heptagon", value: "Heptagon" },
    { key: "isosceles_triangle", value: "Isosceles Triangle" },
    { key: "parallelogram", value: "Parallelogram" },
    { key: "octagon", value: "Octagon" },
    { key: "oval", value: "Oval" },
    { key: "pentagon", value: "Pentagon" },
    { key: "rectangle", value: "Rectangle" },
    { key: "square", value: "Square" },
    { key: "scalene_triangle", value: "Scalene Triangle" },
  ];

  form = this.fb.group({
    shape: ["", { validators: [Validators.required] }],
    radius: ["", { validators: [Validators.pattern(/[0-9]/)] }],
    radius2: ["", { validators: [Validators.pattern(/[0-9]/)] }],
    side: ["", { validators: [Validators.pattern(/[0-9]/)] }],
    side2: ["", { validators: [Validators.pattern(/[0-9]/)] }],
    side3: ["", { validators: [Validators.pattern(/[0-9]/)] }],
    width: ["", { validators: [Validators.pattern(/[0-9]/)] }],
    height: ["", { validators: [Validators.pattern(/[0-9]/)] }],
  });

  constructor(
    private fb: FormBuilder,
    private shapeSvc: ShapeService
  ) { }

  ngOnInit(): void {
    this.canvasContext = this.canvas.nativeElement.getContext('2d');
    //this.drawPolygon(this.canvasContext, 5, 50, 0, 5.026548245743669, 50, 50, 50);
  }

  get shape() { return this.form.controls["shape"]; }

  async onSubmit() {
    console.log(this.shapeToRender);
    const formData = this.form.value;
    const canvasWidth = this.canvas.nativeElement.width;
    const canvasHeight = this.canvas.nativeElement.height;
    switch (this.shapeToRender) {
      case "circle":

        this.shapeSvc.getCicle(formData.shape, formData.radius, canvasWidth, canvasHeight)
          .subscribe(response => {

            this.drawCircle(this.canvasContext, this.canvas, formData.radius, response.x, response.y);

          });
        break;
      case "oval":

        this.shapeSvc.getOval(formData.shape, formData.radius, formData.radius2, canvasWidth, canvasHeight)
          .subscribe(response => {

            this.drawOval(this.canvasContext, this.canvas, formData.radius, formData.radius2, response.x, response.y);

          });
        break;
      case "pentagon":
        this.shapeSvc.getComplexShape(formData.shape, formData.side)
          .subscribe(response => {
            console.log([response.side, response.radius]);
            this.drawPolygon(this.canvasContext, response.side, response.radius, response.x, response.y);

          });
        break;
      case "hexagon":
        this.shapeSvc.getComplexShape(formData.shape, formData.side)
          .subscribe(response => {
            console.log([response.side, response.radius]);
            this.drawPolygon(this.canvasContext, response.side, response.radius, response.x, response.y);

          });
        break;//hexagon octagon
      case "heptagon":
        this.shapeSvc.getComplexShape(formData.shape, formData.side)
          .subscribe(response => {
            console.log([response.side, response.radius]);
            this.drawPolygon(this.canvasContext, response.side, response.radius, response.x, response.y);

          });
        break;
      case "octagon":
        this.shapeSvc.getComplexShape(formData.shape, formData.side)
          .subscribe(response => {
            console.log([response.side, response.radius]);
            this.drawPolygon(this.canvasContext, response.side, response.radius, response.x, response.y);

          });
        break;
      case "square":
        this.shapeSvc.getSquare(formData.shape, formData.side)
          .subscribe(response => {
            console.log([response.side, response.radius]);
            this.drawSquare(this.canvasContext, response.measurement1, response.x, response.y);

          });
        break;
      case "rectangle":
        this.shapeSvc.getRectangle(formData.shape, formData.width, formData.height)
          .subscribe(response => {
            console.log([response.side, response.radius]);
            this.drawRectangle(this.canvasContext, formData.width, formData.height, response.x, response.y);

          });
        break;
      case "isosceles_triangle":
        this.shapeSvc.getTriangle(formData.shape, formData.width, formData.height, canvasWidth, canvasHeight)
          .subscribe(response => {
            console.log([response.side, response.side2]);
            this.drawisoscelesTriangle(this.canvasContext, formData.width, response.side2, response.x, response.y);

          });
        break;
      case "equilateral_triangle":
        this.shapeSvc.getTriangle(formData.shape, formData.width, formData.height, canvasWidth, canvasHeight)
          .subscribe(response => {
            console.log([response.side, response.side2, response.side3]);
            this.drawEquilateralTriangle(this.canvasContext, response.side, response.side2, response.side3, response.x, response.y);

          });
        break;
      case "parallelogram":
        this.shapeSvc.getParallelogram(formData.shape, formData.width, formData.height)
          .subscribe(response => {
            console.log([canvasWidth, canvasHeight]);
            this.drawParallelogram(this.canvasContext, response.pointA, response.pointB, response.pointC, response.pointD, response.pointE, response.pointF, response.pointG, response.pointH, formData.width, formData.height);

          });
        break;
    }



    //   const point1 = {x: 30,  y: 180};
    //   const point2 = {x: 170, y: 160};
    //   const point3 = {x: 100, y: 30 };
    //   // this.drawTriangle(canvasContext, point1, point2, point3, true);    
  }




  // drawTriangle(context: any, side1: any, side2: any, side3: any, filled: boolean) {
  //   context.beginPath();
  //   context.moveTo(side1.x, side1.y);
  //   context.lineTo(side2.x, side2.y);
  //   context.lineTo(side3.x, side3.y);
  //   context.closePath();
  //   filled ? context.fill() : context.stroke();
  // }

  drawisoscelesTriangle(context: any, side: any, side2: any, x: any, y: any) {
    context.reset();
    context.translate(x, y);
    context.beginPath();
    context.moveTo(0, -side);
    context.lineTo(-side2, side);
    context.lineTo(side2, side);
    context.lineTo(0, -side);
    context.closePath();
    context.lineWidth = 2;
    context.strokeStyle = '#118ab2';
    context.stroke();
  }

  drawEquilateralTriangle(context: any, side: any, side2: any, side3: any, x: any, y: any) {
    context.reset();
    //context.translate(x, y);
    context.beginPath();
    context.moveTo(side, side);
    context.lineTo(side, side2);
    context.lineTo(side2, side2);
    context.closePath();
    context.lineWidth = 2;
    context.strokeStyle = '#118ab2';
    context.stroke();
  }

  drawCircle(context: any, canvas: any, radius: any, x: any, y: any) {
    context.reset();

    context.beginPath();

    context.arc(x, y, radius, 0, 2 * Math.PI, false);
    context.lineWidth = 2;
    context.strokeStyle = '#118ab2';
    context.stroke();
  }

  drawOval(context: any, canvas: any, radius1: any, radius2: any, x: any, y: any) {
    context.reset();
    context.beginPath();
    context.ellipse(x, y, radius1, radius2, Math.PI / 2, 0, 2 * Math.PI);
    context.stroke();
  }


  drawSquare(context: any, sides: any, x: any, y: any) {
    context.reset();

    context.beginPath();

    context.rect(x, y, sides, sides)
    context.lineWidth = 2;
    context.strokeStyle = '#118ab2';
    context.stroke();
  }

  drawRectangle(context: any, width: any, heigth: any, x: any, y: any) {
    context.reset();

    context.beginPath();

    context.rect(x, y, width, heigth)
    context.lineWidth = 2;
    context.strokeStyle = '#118ab2';
    context.stroke();
  }

  drawPolygon(context: any, sides: any, radius: any, x: any, y: any) {
    context.reset();
    context.translate(x, y);

    for (let i = 0; i < sides; i++) {

      const rotation = ((Math.PI * 2) / sides) * i;

      if (i === 0) {
        context.moveTo(radius * Math.cos(rotation), radius * Math.sin(rotation));
      }
      else {
        context.lineTo(radius * Math.cos(rotation), radius * Math.sin(rotation));
      }
    }
    context.closePath();
    context.lineWidth = 2;
    context.strokeStyle = '#118ab2';
    context.stroke();

  }

  drawParallelogram(context: any, pointA: any, pointB: any, pointC: any, pointD: any, pointE: any, pointF: any, pointG: any, pointH: any, width: any, heigth: any) {
    context.reset();

    context.translate(width / 2, heigth / 2);
    context.beginPath();

    context.moveTo(pointA, pointB);
    context.lineTo(pointC, pointD);
    context.lineTo(pointE, pointF);
    context.lineTo(pointG, pointH);
    context.lineTo(pointA, pointB);
    context.closePath();
    context.lineWidth = 2;
    context.strokeStyle = '#118ab2';
    context.stroke();
  }

  onShapeChange(event: any) {
    const currentShape = event.target.value;
    this.shapeToRender = currentShape;
  }

}