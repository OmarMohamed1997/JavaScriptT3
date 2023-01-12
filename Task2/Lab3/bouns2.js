var shape = prompt("enter the name of the shape you want to calc area for circle, rectangle,tringle.square...");
var dim1,dim2,dim3,area;
var pi = Math.PI;
if(shape== "Triangle" || shape == "Rectangle" || shape == "Parallelogram" || shape == "Trapezium" || shape =="Ellipse")
    {  
          dim1 = Number(prompt("Please Enter width "));
          dim2 = Number(prompt("Please Enter long "));
          if(area == "Trapezium")
          dim2 = Number(prompt("Please Enter height "));
    }
 else
    {   
        dim1 = Number(prompt("Please Enter dimension "));

    }   

if(shape=="Circle")
    {
        
        alert("Area of circle : " + ( pi* dim1 * dim1));
    }
else if(shape=="Triangle")
    {
        alert("Area of Triangle : " + (0.5*dim1*dim2));
    }
else if(shape=="Square")
    {
        alert("Area of Triangle : " + (dim1*dim1));
    } 
else if(shape=="Rectangle")
    {
        alert("Area of Rectangle : " + (dim1*dim2));
    } 
else if(shape=="Parallelogram")
    {
        alert("Area of Parallelogram : " + (dim1*dim2));
    } 
else if(shape=="Trapezium")
    {
        alert("Area of Trapezium : " + (dim1+dim2)*0.5*dim3);
    }  
else if(shape=="Ellipse")
    {
        alert("Area of Ellipse: " + (pi*dim1*dim2));
    }     
    