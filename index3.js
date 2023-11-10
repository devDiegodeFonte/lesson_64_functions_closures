//////////////////////
///////// Closures

function retirement(retirementAge){
    var a = ' years left until retirement.';
    return function(yearOfbirth){
        var age = 2023 - yearOfbirth;
        console.log((retirementAge - age)+ a);
    }
}

var retirementUs = retirement(68);

var retirementBRA = retirement(68);
retirementBRA(2023);

function interviewQA(job){
    if (job === 'Programmer'){
        //the Closures about that function above interview
        //That functions is working inside of the function's name argument
        return function(name){
            console.log(name + ', What kind of work you execute every day?')

        }
    }
    else if (job === 'Design'){
        //the Closures about that function above interview
        //That functions is working inside of the function's name argument
        return function(name){
            console.log('Can you please explain what UX design is ?' + name)

        }
    } else {
        return function(name){
            console.log('Hello ' + name + ', what do you do?')
        }
    }

}

interviewQA('Design')('Diego');
interviewQA('Programmer')('Diego')