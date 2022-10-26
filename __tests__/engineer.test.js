const Engineer = require('../lib/engineer')

describe("Engineer subclass", () =>{
    describe("Initialization", () => {
        it("should make an object with a name id, email, and github", () => {
            const engineer = new Engineer('John', '23', 'email@email.com', 'JohnGithub')
            expect(engineer).toEqual({
                name: 'John',
                id: '23',
                email: 'email@email.com',
                github: 'JohnGithub'
            })
        })
    })
    describe("getGithub function", () => {
        it("should return the value of this.github", () => {
            const engineer = new Engineer('John', '23', 'email@email.com', 'JohnGithub')
            expect(engineer.getGithub()).toEqual('JohnGithub')
        })
    })
    describe("getRole function", () => {
        it("should return Engineer", () => {
            const engineer = new Engineer('John', '23', 'email@email.com', 'JohnGithub')
            expect(engineer.getRole()).toEqual('Engineer')
        })
    })
})