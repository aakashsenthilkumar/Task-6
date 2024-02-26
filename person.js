


class Person{
    name;
    age;
    job;
    constructor(name="sample",age="25",job="Sales"){
        this.name=name;
        this.age=age;
        this.job=job;

    }
    getName(){
        return this.name;

    }
    getAge(){
        return this.age;

    }
   getJob(){
    return this.job;
    }
setNewName(namechange){
    this.name=namechange;
}

setNewAge(agechange){
    this.age=agechange;
}
setNewJob(jobchange){
     this.job=jobchange;

}}
const person1 =new Person("David","25","Fsd");
person1.setNewName("siva");
console.log(person1.getName());
person1.setNewAge("40");
console.log(person1.getAge());



   