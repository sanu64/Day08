1.	https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md
Code:
class Movie {
    constructor(title , studio , rating ="PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }   
     getPG(movieArrays){
      return movieArrays.filter(movie => movie.rating == "PG");
     }  
    }
    let movie1 = new Movie("Avengers Endgame", "Marvel studios","PG");
    let movie2 = new Movie("Annabelle Creation", "New line cinema" ,"R");
    const movieArray = [movie1, movie2];
    let movie3 = new Movie(movieArray); //instance
    let film = new Movie("Jurassic Park", "Amblin Entertainment" ,"PG13");
  console.log(film);
  console.log(movie3.getPG(movieArray))

1.	Output: Movie {title: 'Jurassic Park', studio: 'Amblin Entertainment', rating: 'PG13'}
1.	rating: "PG13"
2.	studio: "Amblin Entertainment"
3.	title: "Jurassic Park"
4.	[[Prototype]]: Object
1.	[Movie]
1.	0: Movie {title: 'Avengers Endgame', studio: 'Marvel studios', rating: 'PG'}
2.	length: 1
3.	[[Prototype]]: Array(0)

2.	https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md
Code:
class Circle{
    constructor(radius=1.0,color="red"){
    this.radius=radius;
    this.color=color;
    }
  getRadius(){
    console.log(`Radius of circle: ${this.radius}`)
  }
  setRadius(x){
    this.radius=x;
    console.log(`Radius of circle is set to: ${this.radius}`)
  }
  getColor(){
    console.log(`Color of circle: ${this.color}`)
  } 
  setColor(aqua){
    this.color=aqua;
    console.log(`Color of circle is set to: ${this.color}`)
  }
  getArea(){
    console.log(`Area of circle: ${Math.PI*(this.radius*this.radius)}`)
  }
  getCircumference(){
    console.log(`Circumference of circle: ${Math.PI*(this.radius*this.radius*2)}`)
  }
  }
  const obj=new Circle(2,"skyblue")
  obj.getRadius()
  obj.setRadius(3)
  obj.getColor()
  obj.setColor("aqua")
  obj.getArea()
  obj.getCircumference()

Output:
Radius of circle: 2
Radius of circle is set to: 3
Color of circle: skyblue
Color of circle is set to: aqua
Area of circle: 28.274333882308138
Circumference of circle: 56.548667764616276

3.	Write a “person” class to hold all the details.
Code:
class Person{
    constructor(firstName, lastName, Age, emailId){
      this.firstName = firstName;
      this.lastName = lastName;
      this.Age = Age;
      this.emailId = emailId;
    }   
  }
  let person1 = new Person("Saniya","Sayed", "25","saniya@gmail.com");
  let person2 = new Person("Armaan","Sayyed", "28","armaan@gmail.com");
  let person3 = new Person("Rukhsar" ,"Sayed", "45" ,"rukh@gmail.com");
  console.log(person1);
  console.log(person2);
  console.log(person3);
Output:
1.	Person {firstName: 'Saniya', lastName: 'Sayed', Age: '25', emailId: 'saniya@gmail.com'}
1.	Age: "25"
2.	emailId: "saniya@gmail.com"
3.	firstName: "Saniya"
4.	lastName: "Sayed"
5.	[[Prototype]]: Object
1.	Person {firstName: 'Armaan', lastName: 'Sayyed', Age: '28', emailId: 'armaan@gmail.com'}
1.	Age: "28"
2.	emailId: "armaan@gmail.com"
3.	firstName: "Armaan"
4.	lastName: "Sayyed"
5.	[[Prototype]]: Object
1.	Person {firstName: 'Rukhsar', lastName: 'Sayed', Age: '45', emailId: 'rukh@gmail.com'}
1.	Age: "45"
2.	emailId: "rukh@gmail.com"
3.	firstName: "Rukhsar"
4.	lastName: "Sayed"
5.	[[Prototype]]: Object


4.	write a class to calculate uber price.
Code:
class Uber {
      constructor(distance, price ){
        this.distance = distance;
        this.price = price;
      }
      get cost(){
        return this.price*this.distance
      }
     }
    let location1 = new Uber(5, 18)
    console.log(`The price is: ${location1.cost}`);
    let location2 = new Uber(13, 18)
    console.log(`The price is: ${location2.cost}`);
Output:
The price is: 90
The price is: 234
