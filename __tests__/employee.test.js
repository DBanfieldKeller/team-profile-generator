const Employee = require('../lib/employee')

describe("Employee Class", () => {
    describe("Initialization", () => {
        it("should make an object with name, id and email properties", () =>{
            // arrange
            const employee = new Employee ('John', '23', 'email@email.com')
            // act
            // assert
            expect(employee).toEqual({
                name: "John",
                id: '23',
                email: 'email@email.com'
            })
        })
    })
    describe("getName function", () => {
        it("should return the name stored under this.name", () =>{
            const employee = new Employee ('John', '23', 'email@email.com')
            expect(employee.getName()).toEqual('John')
        })
    })
    describe("getId function",()=> {
        it("should return the id stored in this.id", () =>{
            const employee = new Employee ('John', '23', 'email@email.com')
            expect(employee.getId()).toEqual('23')
        })
    })
    describe("getEmail function",()=> {
        it("should return the email stored in this.email", () =>{
            const employee = new Employee ('John', '23', 'email@email.com')
            expect(employee.getEmail()).toEqual('email@email.com')
        })
    })
    describe("getRole function",()=> {
        it("should return Employee", () =>{
            const employee = new Employee ('John', '23', 'email@email.com')
            expect(employee.getRole()).toEqual('Employee')
        })
    })
})