export const nameValidation = (value) => {
    return !/^[а-яА-ЯёЁ\s]*$/i.test(value) && 'Имя должно содержать только латыницу';
}

export const nameProfileValidation = (value, data) => {
    if (!/^[а-яА-ЯёЁ\s]*$/i.test(value)) return 'Имя должно содержать только латыницу';
    if (value == data[0]) return 'Имя должно отличаться от предыдущего'
}