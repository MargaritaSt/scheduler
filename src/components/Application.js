import React, { useState, useEffect } from "react";
import axios from "axios";
import DayList from "components/DayList";
import Appointment from "components/Appointment";
import { getAppointmentsForDay, getInterview, getInterviewersForDay} from "../helpers/selectors";
import "components/Application.scss";

export default function Application(props) {
  
  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    setState({...state, appointments});
    console.log(appointment)
    axios.put('/api/appointments/:id', appointment)
  }
  
  const [state, setState] = useState({
    day: "Monday",
    days:[],
    appointments:{}
  });
  const  setDay = day => setState({...state, day })
  
  useEffect (() => {
    Promise.all ([
      Promise.resolve(axios.get("/api/days")),
      Promise.resolve(axios.get("/api/appointments")),
      Promise.resolve(axios.get("/api/interviewers"))
    ])
    .then ((all) => {
      setState (prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}))
    })
    .catch(error => console.log(error))
  },[]);
  
  
  const appointmentsData = getAppointmentsForDay(state, state.day).map(
    (appointment) => {
    const interview = getInterview(state, appointment.interview);
    const interviewers = getInterviewersForDay(state, state.day);
    return( 
      <Appointment 
        key={appointment.id} 
        id={appointment.id} 
        time={appointment.time} 
        interview={interview} 
        interviewers={interviewers}
        bookInterview={bookInterview}
        />
    )
  })
  return (
    <main className="layout">
      <section className="sidebar">
        {/* Replace this with the sidebar elements during the "Project Setup & Familiarity" activity. */}
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
           days={state.days}
           day={state.day}
           setDay={setDay}
         />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {/* Replace this with the schedule elements durint the "The Scheduler" activity. */}
          {appointmentsData}
      </section>
    </main>
  );
}
