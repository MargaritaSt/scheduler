import React, {Fragment } from 'react'
import "./styles.scss"
import  useVisualMode  from "../../hooks/useVisualMode";
import Empty from "./Empty";
import Show from "./Show";
import Header from "./Header";
import Form from "./Form";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";

export default function Appointment (props) {
    const save = (name, interviewer) =>  {
        const interview = {
          student: name,
          interviewer
        };
        props.bookInterview(props.id, interview)
        transition(SHOW)
      }

    //let render;
    //props.interview ? render = <Show student = {props.interview.student} interviewer = {props.interview.interviewer }/> : render = <Empty/>
    const {mode, transition, back} = useVisualMode (props.interview ? SHOW : EMPTY)
    //console.log(mode)
     return (
            <Fragment>
                <Header 
                    time = {props.time}
                />
                <article className="appointment">
                    {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />} 
                    {mode === SHOW && (
                        <Show
                            student={props.interview.student}
                            interviewer={props.interview.interviewer}
                            
                        />
                    )}
                    {mode === CREATE && (
                        <Form 
                            interviewers={props.interviewers}
                            onCancel={() => back()}
                            onSave={save}
                        />
                    )}
                </article>
            </Fragment>
    )
}