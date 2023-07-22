
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
        alert("fill the input");
    }else{
        removeElementInHTML();
    }

}
