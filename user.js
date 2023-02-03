
let student = [
    { name: 'seetha', age: 12 },
    { name: 'karthi', age: 9 },
    { name: 'swetha', age: 22 }]

let studentCopy = student.slice();

function checkAge(stu) {
    var result = [];
    for (var i = 0; i < stu.length; i++) {
        if (stu[i].age < 15) {
            result.push({
                name: stu[i].name,
                age: stu[i].age + 4
            });
        } else {
            result.push(stu[i]);
        }
    }
    return result;
};

console.log(checkAge(studentCopy));

console.log(student)