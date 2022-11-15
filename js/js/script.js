'use strict';

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(obj) {
        let {age} = obj;
        let {languages} = obj.skills;
        let result = `Мне ${age} и я владею языками:`;
        for (let lang in languages){
            result+= " " + languages[lang].toUpperCase();
        }
        return result;
    }
    
};

personalPlanPeter.showAgeAndLangs(personalPlanPeter);

function showExperience(plan) {
    return plan.skills.exp;
}

function showProgrammingLangs(plan) {
    let result = "";
    let languages = plan.skills.programmingLangs;

    for(let lang in languages){
        result += `Язык ${lang} изучен на ${languages[lang]}\n`;
        
    }
    return  result;
}
