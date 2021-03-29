import { useState, useEffect } from 'react';

const useForm = (callback, validate, validationInfo) => {

    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        setErrors(validate(values, validationInfo));
    }, [])

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
            setIsSubmitting(false);
            console.log('CALLBACK')
        }
    }, [errors]);

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
        console.log('FORM SUBMITED');
    };

    const handleChange = (event) => {
        // event.persist();
        console.log(event.target.value);
        setValues({ ...values, [event.target.name]: event.target.value });
        setErrors(validate(values, validationInfo));
        console.log(values);
    };

    return {
        handleChange,
        handleSubmit,
        values,
        errors,
    }
};

export default useForm;