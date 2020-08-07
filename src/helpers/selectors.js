
 export function getAppointmentsForDay(state, day) {
    let newArray = [];
    const filteredDays = state.days.filter(dayItem => dayItem.name === day);
    if (filteredDays.length === 0){  
        return newArray;
    }   

    filteredDays[0].appointments.forEach((element) => {
        newArray.push(state.appointments[element]);
    })
    return newArray;
}

//retern interviw obj
  export function getInterview(state, interview) {
    if(!interview) {
        return null;
    }
    const interviewer = state.interviewers[interview.interviewer]
    return {
        ...interview,
        interviewer
    }
}


 export function getInterviewersForDay(state, day) {
    let interviewersArray = [];
    //find the object in the state.days BD matching day provided
    const filteredInterviewers = state.days.filter(dayItem => dayItem.name === day);
    //retern empty array
    if (filteredInterviewers.length === 0){  
        return interviewersArray;
    }   
    if (!filteredInterviewers) {
        return interviewersArray;
    }   
     //through the day obj-appointment array and retern the interviewer by id from bd interviewers
    console.log(filteredInterviewers);
  
    for (const item of filteredInterviewers) {
        for (const id of item.interviewers) {
           interviewersArray.push(state.interviewers[id]);
        }
    }
    return interviewersArray ;
}
