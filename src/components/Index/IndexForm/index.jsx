import { useState } from "react";

import { server } from "../../../helpers/fetch";

import { randomApplication } from "../../../helpers/testData";

const IndexForm = () => {

    const [studentName, setStudentName] = useState(randomApplication().name)
    const [studentPhone, setStudentPhone] = useState(randomApplication().phone)
    const [studentEmail, setStudentEmail] = useState(randomApplication().email)
    const [studentProduct, setStudentProduct] = useState(randomApplication().product)

    const renderTestData = () => {
        const randomData = randomApplication()
        setStudentName(randomData.name)
        setStudentPhone(randomData.phone)
        setStudentEmail(randomData.email)
        setStudentProduct(randomData.product)
    }

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
            renderTestData()
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