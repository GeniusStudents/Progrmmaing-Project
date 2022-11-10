//JavaScript Collections
//Object
//Arrays 
//Map
//Set


//objects
console.log("...............................objects..................................");
let employers={
    Name:'Asad',
    LastName:'Shahi',
    Age:22,
    City:'Kandahar',
    Skills:['Html','Html', 'Css','Bootstrap','Mobile Technician']
}

for(const item in employers){

    let value
    //get values
    value=employers[item]
    console.log( item +" :" + value);
}

console.log('..................arrays......................');
//Arrays
let scores=[55,66,77,90,12,13]
scores.map(item=>console.log(item))


console.log('............................Set..........');
//Set
const stores = new Set([
    "charger",
    "Usb",
    "handsFree",
    "Screen",
    'Mouse'
]);

//Add elements in sets
stores.add('Screen Recorder');
stores.add('KeyBoard')

//removes 
stores.delete('Mouse')
for(const item  of stores ){
    console.log(item);
}



console.log('.....  ...........................Maps....................................');

const studentsInfo= new Map([
    ['Name','Asad'],
    ['F/Name', 'Sultan'],
    ['Age',    22]
]);

for(const item of studentsInfo){
    console.log(item);
}
