const Manager = require('../lib/manager')

describe("Manager subclass", () =>{
    describe("Initialization", () => {
        it("should make an object with a name id, email, and office number", () => {
            const manager = new Manager('John', '23', 'email@email.com', '1A')
            expect(manager).toEqual({
                name: 'John',
                id: '23',
                email: 'email@email.com',
                officeNumber: '1A'
            })
        })
    })
    describe("getRole function", () => {
        it("should return the value Manager", () => {
            const manager = new Manager('John', '23', 'email@email.com', 'JohnGithub')
            expect(manager.getRole()).toEqual('Manager')
        })
    })
})