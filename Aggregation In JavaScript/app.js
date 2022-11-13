

//implements aggreagation By Asad Shahi isA
//relashoin ship between thow classes
class Address{
    constructor(district, city,conuthry) {
        this.district=district
        this.city=city;
        this.conuthry=conuthry;
    }
}

class Emp{
    constructor(id , name , address) {
        this.id=id;
        this.name=name;
        this.Address=address;  //aggregation  aggregated class
    }
}

const add=new Address('first-district','kandahar','Afghanistan')
const emp= new Emp(6,'Asadullah',add)

console.log(add);//Address class
console.log(emp); //Emp class using  aggregation
console.log(emp.Address.district);