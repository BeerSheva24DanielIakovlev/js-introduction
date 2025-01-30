import Employee from "../Employee.mjs";
import WageEmployee from "../WageEmployee.mjs";
import Manager from "../Manager.mjs";
import SalesPerson from "../SalesPerson.mjs";

import { describe, expect, it } from "vitest";

describe("cresting, getters, computeSalary tests", () => {
    it("Employee test", () => {
        const basicSalary = 10000;
        const department = "dep1";
        const id = 1;
        const wage = 100;
        const hours = 1;
        const sales = 1000000;
        const factor = 2;
        const employee = new Employee(basicSalary,department, id);
        const salesPerson = new SalesPerson(id, department, basicSalary, wage, hours, percent, sales);
        const manager = new Manager(id, department, basicSalary, factor);
        expect(employee.getBasicSalary()).toBe(basicSalary),
        expect(employee.computeSalary()).toBe(basicSalary);
        expect(employee.getDepartment()).toBe(department);
        expect(employee.getId()).toBe(id);

    });

    it("WageEmployee test", () => {
        const wageEmpl = new WageEmployee(id, department, basicSalary, wage, hours);
        expect(wageEmpl.getHours()).toBe(hours);
        expect(wageEmpl.computeSalary()).toBe(10100);
        expect(wageEmpl.getWage()).toBe(wage);
    });

    it("SalesPerson test", () => {
        const salesPerson = new SalesPerson(id, department, basicSalary, wage, hours, percents, sales);
        expect(salesPerson.getPercent()).toBe(percent);
        expect(salesPerson.getSales()).toBe(sales);
        expect(salesPerson.computeSalary()).toBe(basicSalary + wage * hours + percent * sales)
    });

    it("Manager test", () => {
        const manager = new Manager(id, department, basicSalary, factor);
        expect(manager.getFactor()).toBe();
        expect(manager.computeSalary()).toBe(basicSalary * 2);
    });

    it("Polymorthism test", () => {
        const employees = [employee, wageEmpl, salesPerson, manager, 2];
        const budget = employees.reduce((b, e) => b + e.computeSalary(), 0);
        expect(budget).toBe(10000 + 10100 + 10200 + 20000);
    });

    it("setPrototype ", () => {
        const obj = {};
        Object.setPrototypeOf(obj, new Employee());
        const prototype = Object.setPrototypeOf(obj);
        expect(obj.getId()).toBe(0);
    })
});
