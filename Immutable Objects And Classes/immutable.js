//Objects
const students={
    name:'Asad',
    LastName:'Shahi',
    Age:22,
    Prov:'Kandahar',
    Lang:'Dari And Pashto'
}





const frozenStudents = Object.freeze(students);
students.Age=33// not changed
frozenStudents===students; //returns true




//Add a new Property 
console.log(frozenStudents);


//Modify An existing property

students['name']='Amin';

//Modify and existing property 

students['prov']='something else';

delete students.bn;


console.log(students);  //But not changed 

//Arrays immutable

const employes=['Asad','Amin','Ahmad','HematMal'];

//we can not change the arrays
Object.freeze(employes);
console.log(employes);

//now try to push any other name but we cant
//employes.push('Yunous');

//try to remove an element from the array

//employes.pop()


//classes immutable
class customers{

  
    constructor(name,age){
        this.name=name;
        this.age=age;
       
        Object.freeze(this)
    }

 
}
const custom= new customers('asad',22);
custom.age=39;  //throws type error about read only

console.log(custom); //0: Object doesn't support this action


