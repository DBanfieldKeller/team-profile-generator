const { exportAllDeclaration } = require('@babel/types')
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
})