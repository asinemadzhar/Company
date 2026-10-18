class Company {

    constructor(){
        this.departments = {};
    }

    addEmployee(name, salary, position, department){
        if(name === '' || name === null || name === undefined ||
            salary === '' || salary === null || salary === undefined ||
            position === '' || position === null || position === undefined ||
            department === '' || department === null || department === undefined ||
            salary <0
        ){
            throw new Error('Invalid input!');
        }

        if(!departments[department]){
            this.departments[department] = [];
        }

        this.departments[department].push({name, salary, position});

        return `New employee is hired. Name: ${name}. Position :${position}`;
    }

    bestDepartment(){
        let bestDepartName = '';
        let highestAVGsalary = 0;

        for(const [depName, employees] of Object.entries(this.departments)){
            const avgSalary = employees.reduce((acc, e) => acc + e.salary, 0) / employees.length;

            if(avgSalary > highestAVGsalary){
                highestAVGsalary = avgSalary;
                bestDepartName = depName;
            }
        }

        const sortedEmployees = this.departments[bestDepartName].sort((a, b) => {
            return b.salary - a.salary ||a.name.localeCompare(b.name);
        });

        let result = `Best Department is ${bestDepartName}.\n`;
        result += `Average salary: ${highestAVGsalary.toFixed(2)}\n`;
        
        result += sortedEmployees.map((e) => `${e.name} ${e.salary} ${e.position}`).join('\n');

        return result;
    }
}