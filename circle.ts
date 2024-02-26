class Circle {
     radius: number;
     color: string;

    constructor(radius: number = 1, color: string = 'Red') {
        this.radius = radius;
        this.color = color;
    }

    
    getRadius(): number {
        return this.radius;
    }

   
    setRadius(radius: number): void {
        this.radius = radius;
    }

    
    getColour(): string {
        return this.color;
    }

   
    setColour(colour: string): void {
        this.color = colour;
    }

  
    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }

   
    getCircumference(): number {
        return 2 * Math.PI * this.radius;
    }

   
    toString(): string {
        return `Circle [radius=${this.radius}, colour=${this.color}]`;
    }
}
const Circle1= new Circle(5,"Red");
console.log(Circle1.toString());
