const Intern = require('../lib/intern')

describe("Intern subclass", () =>{
    describe("Initialization", () => {
        it("should make an object with a name, id, email, and school", () => {
            const intern = new Intern('John', '23', 'email@email.com', 'School University')
            expect(intern).toEqual({
                name: 'John',
                id: '23',
                email: 'email@email.com',
                school: 'School University'
            })
        })
    })
    describe("getGithub function", () => {
        it("should return the value of this.school", () => {
            const intern = new Intern('John', '23', 'email@email.com', 'School University')
            expect(intern.getSchool()).toEqual('School University')
        })
    })
    describe("getRole function", () => {
        it("should return Intern", () => {
            const intern = new Intern('John', '23', 'email@email.com', 'School U')
            expect(intern.getRole()).toEqual('Intern')
        })
    })
})