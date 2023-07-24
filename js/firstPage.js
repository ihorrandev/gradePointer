
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
        newButton.textContent = "Enter your grade";
        
        let activities = valueFrominputNumberActivities;
        let gradesArray = [];


        let spanGrade = document.createElement('p');
        spanGrade.textContent = gradesArray;
        spanGrade.classList.add('blue-text')
        divNewForm.appendChild(spanGrade);

        let spanAverage = document.createElement('p');
        spanAverage.textContent = gradesArray;
        divNewForm.appendChild(spanAverage);

        newButton.onclick = function () {

            if(gradesArray.length < activities){
                let trackerActivities = inputTrackerActivities.value;
                gradesArray.push(parseFloat(trackerActivities));
                console.log(gradesArray);


                for(let i=0; i < gradesArray.length; i++){
                    spanGrade.textContent = `Grades: ${gradesArray}`;
                }
               

                let sumMedia = gradesArray.reduce((accumulator, value) => accumulator + value,0);
                let gradeMedia = sumMedia/activities;
                

                //spanGrade.textContent = `Your grade: ${trackerActivities}`;

                //Write in the HTML for people see the grades
                console.log(`Your grade: ${gradesArray}`);
                console.log(gradeMedia);

                spanAverage.textContent = `${valueFrominputStudentName} average is: ${gradeMedia.toFixed(1)}`; 


            }else{
                let spanError = document.createElement('p');
                spanError.textContent = "You have exceeded the grade limit";
                divNewForm.appendChild(spanError);
                newButton.style.display = 'none';

                let linkBtn = document.createElement('a');
                linkBtn.href = '../pages/formPage.html';
                linkBtn.classList.add('btnGp-root-mainForm');
                linkBtn.textContent = "Return to form";

                mainContent.appendChild(linkBtn);

                return false;
            }
        };
       

        mainContent.appendChild(newButton);
        firstBtn.style.display = 'none';
    }
}
