import employees from './data.json' assert { type: 'json' }

for (let emp of employees) {
    for (let property in emp) {
        console.log(`${property}: ${emp[property]}`);
    }
    console.log('---')
};

for (let i = 0; i < employees.length; i++) {
    if (i===5) {
        break;
    };
    console.log(`${employees[i].firstName} ${employees[i].lastName}`)
}

console.log('-----------')

for (let employee of employees) {
    if(!employee.firstName.startsWith('B')){
        continue;
    }
    console.log(`${employee.firstName} ${employee.lastName}`);
}

for (let emp of employees) {
    for (let property in emp) {
        if(property === "dateBirth") {
          continue;
        }
        console.log(`${property}: ${emp[property]}`);
      }
    console.log('------');
}

// Nested loop control flow
employee: for (let emp of employees) {
    for (let property in emp) {
      if(property === "dateBirth") {
        continue employee;
      }
      console.log(`${property}: ${emp[property]}`);
    }
  }
  console.log('--');