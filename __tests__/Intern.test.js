const Intern = require('../lib/Intern');

test('creates intern object', () => {
    const intern = new Intern('Tom', 1, 'tomC@gmail.com', 'UCF');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})

test('returns intern name', () => {
    const intern = new Intern('Bob', 23, 'bobKelso@gmail.com', 'USF');

    expect(intern.getName()).toEqual(expect.any(String));
})

test('returns intern ID', () => {
    const intern = new Intern('Claire', 2, 'clairebell@gmail.com', 'Yale');

    expect(intern.getId()).toEqual(expect.any(Number));
})

test('returns intern email', () => {
    const intern = new Intern('Janet', 34, 'janBam@gmail.com', 'Oxford');

    expect(intern.getEmail()).toEqual(expect.any(String));
})

test('returns intern git', () => {
    const intern = new Intern('Alex', 88, 'youngAl@gmail.com', 'UWF');

    expect(intern.getSchool()).toEqual(expect.any(String));
})

test('returns intern role', () => {
    const intern = new Intern('Terry', 3, 'scaryterry@gmail.com', 'UF');

    expect(intern.getRole()).toEqual('Intern');
})