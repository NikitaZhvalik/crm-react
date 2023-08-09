const nameMassive = ['Никита Жвалик', 'Вася Пупкин', 'Иван Иванов', 'Елена Полено', 'Игорь Кудрявцев'];
const phoneMassive = ['+891324312140', '+427811412323', '+1348947432921', '+8295321345', '+7654532214'];
const emailMassive = ['Vasya@mail.ru', 'Ivan@mail.ru', 'Nikita@mail.ru', 'Igor@mail.ru', 'Elena@mail.ru'];
const productMassive = ['course-wordpress', 'course-js', 'course-html', 'course-php', 'course-vue']

const randomNum = (arr) => arr[Math.floor(Math.random() * arr.length)]

export const randomApplication = () => {
    return {
        name: randomNum(nameMassive),
        phone: randomNum(phoneMassive),
        email: randomNum(emailMassive),
        product: randomNum(productMassive)
    }
}

