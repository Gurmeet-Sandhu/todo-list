import DATA from './data/tasks.json';

const numtasks = DATA.length;

describe("numbers", () => {
    test("numbers of items is 3", () => {
        expect(numtasks).toBe(3);
    })

    test("numbers is greater than or equal to 3", () => {
        expect(numtasks).toBeGreaterThanOrEqual(3);
    })
})

const dataTest = DATA[0].name;

describe("strings", () => {
    test("if name contains the E letter", () => {
        expect(dataTest).toMatch(/E/);
    })

    test("if string contains the Eat", () => {
        expect(dataTest).toContain('Eat');
    })
})


describe("objects", () => {
    test("if the object have the name property", () => {
        expect(DATA[0]).toHaveProperty("name");
    })

    test("if object have name = Eat", () => {
        expect(DATA[1]).toHaveProperty("name", "Sleep");
    })
})