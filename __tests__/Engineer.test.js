const Engineer = require('../lib/Engineer');

test('creates engineer object', () => {
    const engineer = new Engineer('Tom', 1, 'tomC@gmail.com', 'tomtom-git');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.git).toEqual(expect.any(String));
})

test('returns engineer name', () => {
    const engineer = new Engineer('Bob', 23, 'bobKelso@gmail.com', 'bob-git');

    expect(engineer.getName()).toEqual(expect.any(String));
})

test('returns engineer ID', () => {
    const engineer = new Engineer('Claire', 2, 'clairebell@gmail.com', 'clairebell-git');

    expect(engineer.getId()).toEqual(expect.any(Number));
})

test('returns engineer email', () => {
    const engineer = new Engineer('Janet', 34, 'janBam@gmail.com', 'janBam-git');

    expect(engineer.getEmail()).toEqual(expect.any(String));
})

test('returns engineer git', () => {
    const engineer = new Engineer('Alex', 88, 'youngAl@gmail.com', 'YungAl-git');

    expect(engineer.getGithub()).toEqual(expect.any(String));
})

test('returns engineer role', () => {
    const engineer = new Engineer('Terry', 3, 'scaryterry@gmail.com', 'scaryterry-git');

    expect(engineer.getRole()).toEqual('Engineer');
})