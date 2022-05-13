// 1."Question 1 : We are interested in retrieving only the name of the students and all the names should be in caps.

// ['JOHN', 'BABA', 'YAGA', 'WICK']
// "

let studentRecords = [ {name: 'John', id: 123, marks : 98 },
                       {name: 'Baba', id: 101, marks : 23 },
                       {name: 'yaga', id: 200, marks : 45 },
                       {name: 'Wick', id: 115, marks : 75 } ] ;

var result = studentRecords.map (x => x.name.toUpperCase());
console.log(result);

// "Question 2: Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.

// [{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }]"

let record = studentRecords.filter(x => x.marks>50);

console.log(record);

//Question 3: Retrieve the details of students who scored more than 50 marks and have id greater than 120.

let names = studentRecords.filter(stu => stu.marks>50 && stu.id>120);
console.log(names);

// 4.Question 4: Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.

let total = studentRecords.reduce( ((a,b) => a+b.marks), 0);
console.log(total);

// 5.Question 5: This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.

let detail = studentRecords.filter(stu => stu.marks>50).map (x => x.name);
console.log(detail);

// 6. Question 6: This time we are required to print the sum of marks of the students with id > 120.

let detail1 = studentRecords.filter(stu => stu.id>120).reduce(((a,b) => a+b.marks),0);
console.log(detail1);

// Question 7: This time we are required to print the total marks of the students with marks greater than 50 after a grace
//  of 15 marks has been added to those students who scored less than 50.

let detail2 = studentRecords.map(function(stu){
         if(stu.marks<50){
             stu.marks += 15; }
             return(stu);
}) .filter(stu => stu.marks > 50).reduce((a,b) => a+b.marks, 0);
console.log(detail2);

// 6.Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects. 


function Student(name,cls,rollno ){
    this.name = name;
    this.cls = cls;
    this.rollno = rollno;

}

let student = [ new Student("Niraj",3, 21),
                new Student("Prem", 4, 22),
                new Student("Pawan", 5, 23),
                new Student("Pooja", 6, 24),
                new Student("Prince",7, 25),
                new Student("Prince",8, 26),];


console.log(student);

