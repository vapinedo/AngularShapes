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
    { key: "hexagon", value: "Hexagon" },
    { key: "heptagon", value: "Heptagon" },
    { key: "isosceles_triangle", value: "Isosceles Triangle"} , 
    { key: "parallelogram", value: "Parallelogram" },
    { key: "octagon", value: "Octagon" },
    { key: "oval", value: "Oval" },
    { key: "pentagon", value: "Pentagon" },
    { key: "rectangle", value: "Rectangle"} , 
    { key: "square", value: "Square" },
    { key: "scalene_triangle", value: "Scalene Triangle"} , 
    { key: "triangle", value: "Triangle"} , 
  ];

  form = this.fb.group({
    shape: ["", {validators: [Validators.required]}],
    radius: ["", {validators: [Validators.pattern(/[0-9]/)]}],
    side: ["", {validators: [Validators.pattern(/[0-9]/)]}],
    side2: ["", {validators: [Validators.pattern(/[0-9]/)]}],
    side3: ["", {validators: [Validators.pattern(/[0-9]/)]}],
    width: ["", {validators: [Validators.pattern(/[0-9]/)]}],
    height: ["", {validators: [Validators.pattern(/[0-9]/)]}],
  });

  constructor(
    private fb: FormBuilder,
    private shapeSvc: ShapeService
  ) {}

  ngOnInit(): void {
    this.canvasContext = this.canvas.nativeElement.getContext('2d');
  }

  get shape() { return this.form.controls["shape"]; }

  async onSubmit() {
    const formData = this.form.value;
    this.shapeSvc.getShape(formData.radius)
      .subscribe(response => {
        this.drawCircle(this.canvasContext, this.canvas, formData.radius, response.x, response.y);    
      })

    //   const point1 = {x: 30,  y: 180};
    //   const point2 = {x: 170, y: 160};
    //   const point3 = {x: 100, y: 30 };
    //   // this.drawTriangle(canvasContext, point1, point2, point3, true);    
  }

  drawTriangle(context: any, side1: any, side2: any, side3: any, filled: boolean) {
    context.beginPath();
    context.moveTo(side1.x, side1.y);
    context.lineTo(side2.x, side2.y);
    context.lineTo(side3.x, side3.y);
    context.closePath();
    filled ? context.fill() : context.stroke();
  }

  drawCircle(context: any, canvas: any, radius: any, x: any, y: any) {
    context.reset();

    // const x = canvas.nativeElement.width / 2;
    // const y = canvas.nativeElement.height / 2;

    context.beginPath();
    
    context.arc(x, y, radius, 0, 2 * Math.PI, false);
    context.lineWidth = 2;
    context.strokeStyle = '#118ab2';
    context.stroke();
  }

  onShapeChange(event: any) {
    const currentShape = event.target.value;
    this.shapeToRender = currentShape;
  }

}