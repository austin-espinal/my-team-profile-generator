const Employee = require('../lib/Employee');

test('creates employee object', () => {
    const employee = new Employee('Tom', 1, 'tomC@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

test('returns employee name', () => {
    const employee = new Employee('Bob', 23, 'bobKelso@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
})

test('returns employee ID', () => {
    const employee = new Employee('Claire', 2, 'clairebell@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
})

test('returns employee email', () => {
    const employee = new Employee('Janet', 34, 'janBam@gmail.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
})

test('returns employee role', () => {
    const employee = new Employee('Terry', 3, 'scaryterry@gmail.com');

    expect(employee.getRole()).toEqual('Employee');
})