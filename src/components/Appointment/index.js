import React, {Fragment } from 'react';
import "./styles.scss";
import  useVisualMode  from "../../hooks/useVisualMode";
import Empty from "./Empty";
import Show from "./Show";
import Header from "./Header";
import Form from "./Form";
import Status from "./Status";
import Confirm from './Confirm';
import Error from './Error';

//Variables to determine which window to display in the appointment list
const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETE = "DELETE";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE";

export default function Appointment (props) {
    const {mode, transition, back} = useVisualMode (props.interview ? SHOW : EMPTY)
    
    const save = (name, interviewer) =>  {
        const interview = {
          student: name,
          interviewer
        };
        
        transition(SAVING)
        props.bookInterview(props.id, interview)
            .then(() => transition(SHOW))
            .catch((error) => transition(ERROR_SAVE,true))
      };

    const del = () => {
        transition(DELETE,true)
        props
            .cancelInterview(props.id)
            .then(() => transition(EMPTY))
            .catch((error) => transition(ERROR_DELETE,true))
    };

    const confirm = () => {
        transition(CONFIRM)
    };

    const edit = () => {
        transition(EDIT);
    };
    
    
    //Generating HTML with the appropriate form or message that corresponds to the appropriate transition
    //when the user click on Create, Save, Edit or Delete button or just to display an appointment list 
    //with the poperly formated appointments.
    return (
            <Fragment>
                <Header 
                    time = {props.time}
                />
                <article className="appointment" data-testid="appointment" >
                    {mode === CONFIRM && (
                        <Confirm
                            message={"Delete the appointment?"}
                            onConfirm={del}
                            onCancel={back}
                        />
                    )}
                    {mode === SAVING && <Status message={"Saving"} />}
                    {mode === DELETE && <Status message={"Deleting"} />}
                    {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />} 
                    {mode === SHOW && (
                        <Show
                            student={props.interview.student}
                            interviewer={props.interview.interviewer}
                            onDelete={confirm}
                            onEdit={edit}
                        />
                    )}
                    {mode === CREATE && (
                        <Form 
                            interviewers={props.interviewers}
                            onCancel={() => back()}
                            onSave={save}
                        />
                    )}
                    {mode === EDIT && (
                        <Form 
                            name = {props.interview.student}
                            interviewers={props.interviewers}
                            onCancel={() => back()}
                            onSave={save}
                        />
                    )}
                    {mode === ERROR_SAVE && (
                        <Error 
                            message={"Could not save appointment."}
                            onClose={back}
                      />
                    )}
                    {mode === ERROR_DELETE && (
                        <Error 
                            message={"Could not cancel appointment."}
                            onClose={back}
                      />
                    )}
                    
                </article>
            </Fragment>
    )
}