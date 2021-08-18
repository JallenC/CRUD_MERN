import React from "react";
import { useForm } from "react-hook-form";

export const TodoForm = ({ todo, onSubmit }) => {
    const {register, handleSubmit} = useForm({ 
        defaultValues: { text: todo ? todo.text : "" },
    });

    const SubmitHandler = handleSubmit((data) => {
        onSubmit(data)
    });

    return (
            <form onSubmit={SubmitHandler}>
                <div className="form-group">
                    <label htmlFor="text">
                        Text: 
                    </label> 
                    <input className="form-control" {...register('text', { required: true })} type="text" name="text" id="text"/>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                        Save Todo
                    </button>
                </div>
            </form>
    );
};