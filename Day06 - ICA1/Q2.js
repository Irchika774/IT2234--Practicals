function getUniqueProgrammingLanguages(students) {
    let allLanguages = [];
    
    for (let student of students) {
        for (let lang of student.Pro_languages) {
            let isUnique = true;
            for (let i = 0; i < allLanguages.length; i++) {
                if (allLanguages[i] === lang) {
                    isUnique = false;
                    break;
                }
            }
            if (isUnique) {
                allLanguages.push(lang);
            }
        }
    }
    
    return allLanguages;
}

console.log(getUniqueProgrammingLanguages(students));
