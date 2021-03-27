export function validateLoginValues(values) {
    let errors = {};
    if (!values.email) {
        errors.email = 'Электронная почта обязательна';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Электронная почта не соответствует формату';
    }
    if (!values.password) {
        errors.password = 'Пароль обязателен';
    } else if (values.password.length < 8) {
        errors.password = 'Минимальная длинна пароля - 6 символов';
    }
    return errors;
};

export function validateSignupValues(values) {
    let errors = {};
    if (!values.name) {
        errors.name = 'Имя обязательно'
    } else if (!/^[а-яА-Я\s]*$/i.test(values.name)) {
        errors.name = 'Имя может содержать только латыницу';
    }
    if (!values.email) {
        errors.email = 'Электронная почта обязательна';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Электронная почта не соответствует формату';
    }
    if (!values.password) {
        errors.password = 'Пароль обязателен';
    } else if (values.password.length < 8) {
        errors.password = 'Минимальная длинна пароля - 6 символов';
    }
    return errors;
};

export function validateProfileUpdate(values, validationInfo) {
    let errors = {};
    if (!values.name) {
        errors.name = 'Имя обязательно'
    } else if (!/^[а-яА-Я\s]*$/i.test(values.name)) {
        errors.name = 'Имя может содержать только латыницу';
    } else if (values.name === validationInfo[0]) {
        errors.name = 'Имя должно отличаться';
    }
    if (!values.email) {
        errors.email = 'Электронная почта обязательна';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Электронная почта не соответствует формату';
    } else if (values.email === validationInfo) {
        errors.email = 'Почта должна отличаться';
    }
    return errors;
}