import { useState } from "react";

import { server } from "../../../helpers/fetch";

const IndexForm = () => {

    const nameMassive = ['Никита Жвалик', 'Вася Пупкин', 'Иван Иванов', 'Елена Полено', 'Игорь Кудрявцев'];
    const phoneMassive = ['+891324312140', '+427811412323', '+1348947432921', '+8295321345', '+7654532214'];
    const emailMassive = ['Vasya@mail.ru', 'Ivan@mail.ru', 'Nikita@mail.ru', 'Igor@mail.ru', 'Elena@mail.ru'];
    const productMassive = ['course-wordpress', 'course-js', 'course-html', 'course-php', 'course-vue']
    
    const randomForm = (array) => {
        return array[Math.floor(Math.random() * array.length)]
    }

    const [studentName, setStudentName] = useState(randomForm(nameMassive))
    const [studentPhone, setStudentPhone] = useState(randomForm(phoneMassive))
    const [studentEmail, setStudentEmail] = useState(randomForm(emailMassive))
    const [studentProduct, setStudentProduct] = useState(randomForm(productMassive))

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            dateTime: new Date().toLocaleTimeString(),
            date: new Date().toLocaleDateString(),
            name: studentName,
            email: studentEmail,
            phone: studentPhone,
            status: "new",
            product: studentProduct
        }

        fetch(server + `applications/`, {
            method: "POST",
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(data)
        })
        .then(() => {
            setStudentName(randomForm(nameMassive))
            setStudentPhone(randomForm(phoneMassive))
            setStudentEmail(randomForm(emailMassive))
            setStudentProduct(randomForm(productMassive))
        })
    }

    return (
            <form onSubmit={handleSubmit} id="form" method="POST" action="">
                <label>Ваши данные:</label>
                <div className="form-group">
                    <input value={studentName} onChange={(e) => setStudentName(e.target.value)} id="name" type="text" name="name" autoComplete="on" className="form-control" placeholder="Имя и Фамилия" required />
                </div>
                <div className="form-group">
                    <input value={studentPhone} onChange={(e) => setStudentPhone(e.target.value)} id="phone" type="text" name="phone" autoComplete="on" className="form-control" placeholder="Телефон" />
                </div>
                <div className="form-group">
                    <input value={studentEmail} onChange={(e) => setStudentEmail(e.target.value)} id="email" type="email" name="email" autoComplete="on" className="form-control" placeholder="Email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Продукт:</label>
                    <select value={studentProduct} onChange={(e) => setStudentProduct(e.target.value)} id="product" name="product" className="form-control">
                        <option value="course-html">Курс по верстке</option>
                        <option value="course-js">Курс по JavaScript</option>
                        <option value="course-vue">Курс по VUE JS</option>
                        <option value="course-php">Курс по PHP</option>
                        <option value="course-wordpress">Курс по WordPress</option>
                    </select>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-lg btn-primary btn-block">Оформить заявку</button>
                </div>
            </form>
    );
}
 
export default IndexForm;