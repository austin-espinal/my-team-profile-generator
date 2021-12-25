const Manager = require('../lib/Manager');

test('creates manager object', () => {
    const manager = new Manager('Tom', 1, 'tomC@gmail.com', 100023);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.office).toEqual(expect.any(Number));
})

test('returns manager name', () => {
    const manager = new Manager('Bob', 23, 'bobKelso@gmail.com', 20002);

    expect(manager.getName()).toEqual(expect.any(String));
})

test('returns manager ID', () => {
    const manager = new Manager('Claire', 2, 'clairebell@gmail.com', 3000);

    expect(manager.getId()).toEqual(expect.any(Number));
})

test('returns manager email', () => {
    const manager = new Manager('Janet', 34, 'janBam@gmail.com', 45000);

    expect(manager.getEmail()).toEqual(expect.any(String));
})

test('returns manager role', () => {
    const manager = new Manager('Terry', 3, 'scaryterry@gmail.com', 5000);

    expect(manager.getRole()).toEqual('Manager');
})