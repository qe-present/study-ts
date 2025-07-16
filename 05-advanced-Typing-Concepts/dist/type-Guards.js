"use strict";
// type admin={
//     name:string;
//     privileges:string[];
// }
// type Employee={
//     name:string;
//     startDate:Date;
// }
//  type ElevatedEmployee=admin & Employee;
// // interface ElevatedEmployee extends admin,Employee{}
//
// const el: ElevatedEmployee={
//
//     name:'Max',
//     privileges:['create-server'],
//     startDate:new Date()
// }
// type Combinable=string|number;
// type Numeric=number|boolean;
// type Universal=Combinable&Numeric;
// type UnknownEmployee=admin|Employee;
// function printEmployeeInformation(emp:UnknownEmployee){
//     console.log('Name:'+emp.name);
//     if('privileges' in emp){
//         console.log('Privileges:'+emp.privileges);
//     }
//     if('startDate' in emp){
//         console.log('Start Date:'+emp.startDate);
//     }
// }
// printEmployeeInformation(el);
// class Car{
//     drive(){
//         console.log('Driving...');
//     }
// }
// class Truck{
//     drive(){
//         console.log('Driving a truck...');
//     }
//     loadCargo(amount:number){
//         console.log('Loading cargo...'+amount);
//     }
// }
// type Vehicle=Car|Truck;
// const v1=new Car();
// const v2=new Truck();
// function useVehicle(vehicle:Vehicle){
//     vehicle.drive();
//     if(vehicle instanceof Truck){
//         vehicle.loadCargo(1000);
//     }
// }
// useVehicle(v1);
// useVehicle(v2);
