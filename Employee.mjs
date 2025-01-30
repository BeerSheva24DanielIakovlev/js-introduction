export default class Employee {
    #id;
    #department;
    #basicSalary;

    constructor(id=-1, department ="", basicSalary=-1) {
        this.#basicSalary = basicSalary;
        this.#department = department;
    };

    computeSalary(this) {
        return this.basicSalary;
    };

    getId() {
        return this.#id
    };

    getBasicSalary() {
        return this.#basicSalary;
    };

    getDepartment() {
        return this.#department;
    }
}