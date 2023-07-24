
/* /----------------------/
    /                      /
    /      VARIABLES       /
    /                      /
    /----------------------/ */

    let inputs = document.getElementsByClassName('inputRoot');
    let mainContent = document.getElementById('divMainForm');
    let mainTittle = document.getElementById('tittleContent');


    let valueFrominputSchoolSubject = "";
    let valueFrominputStudentName = "";
    let valueFrominputNumberActivities = "";



const removeElementInHTML = () => {
    // Function to remove an HTML element 

    //Create an Array with inputs.
    Array.from(inputs).forEach(input => {

        //the method Array will get the inputs(var, declared up there), insert the value in the foreach parameter and the parameter value will trigger the remove function, which will remove each entry from the input variable.
        input.remove();
    });
}

const getFirstContact = (position) => {
    valueFrominputSchoolSubject = document.getElementById('inputSchoolSubject').value;
    valueFrominputStudentName = document.getElementById('inputStudentName').value;
    valueFrominputNumberActivities = document.getElementById('inputNumberActivities').value;
    
    let valueInput = [valueFrominputNumberActivities,valueFrominputSchoolSubject,valueFrominputStudentName];
    
    const especificValue = valueInput[position];

    return especificValue;
}


const clickButton = () => {

    if(getFirstContact(0) == "" || getFirstContact(1) == "" || getFirstContact(2) == ""){
        alert('Fill the inputs');
        return false;        
    }else{
        removeElementInHTML();
        let divNewForm = document.getElementById('forNewForm');
        let firstBtn = document.getElementById('buttonForm');

        let inputTrackerActivities = document.createElement('input');
        inputTrackerActivities.placeholder = `Enter 1 ${valueFrominputStudentName} grade`;
        inputTrackerActivities.classList.add('inputRoot');

        divNewForm.appendChild(inputTrackerActivities);
        
        

        let newButton = document.createElement("button");
        newButton.classList.add('btnGp-root-mainForm');
        newButton.textContent = "Calculate";
        
        let activities = valueFrominputNumberActivities;
        let gradesArray = [];

        newButton.onclick = function () {
            if(gradesArray.length < activities){
                let trackerActivities = inputTrackerActivities.value;
                gradesArray.push(parseFloat(trackerActivities));
                console.log(gradesArray);

                let sumMedia = gradesArray.reduce((accumulator, value) => accumulator + value,0);
                let gradeMedia = sumMedia/activities;

                //Write in the HTML for people see the grades
                console.log(`Your grade: ${gradesArray}`);
                console.log(gradeMedia);

            }else{
                alert('Não da mais!');
            }
        };

        

        mainContent.appendChild(newButton);
        firstBtn.style.display = 'none';
    }
}
