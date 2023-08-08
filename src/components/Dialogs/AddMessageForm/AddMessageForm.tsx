import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import React from "react";


const maxLength50= maxLengthCreator(50)

const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    placeholder='Enter your message'
                    name={'newMessageBody'}
                    validate={[required, maxLength50]}
                />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export const AddMessageFormRedux = reduxForm({
        form: 'dialogAddMessageForm'
    }
)(AddMessageForm)
