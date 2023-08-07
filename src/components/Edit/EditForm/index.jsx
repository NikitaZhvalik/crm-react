import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { server } from "../../../helpers/fetch";

const EditForm = () => {

        const [application, setApplication] = useState(null)
        const {id} = useParams();
        const abortCont = new AbortController();


        const [name, setName] = useState('')

        useEffect(() => {
            fetch(server + `applications/${id}`, {signal: abortCont.signal})
            .then((response) => {
                if (response.ok  !== true) {
                    throw Error ('Не получается загрузить данные с сервера(')
                }
                return response.json();
            })
            .then((data) => {
                setApplication(data)
            })
            .catch((error) => {
                if (error.name === "AbortError") {
                    console.warn('Запрос был остановлен')
                }
                else {
                    console.warn(error.message)
                }
            })
            return () => {
                abortCont.abort()
            }
        }, [])

        const changeApplication = (e) => {
            e.preventDefault()
            const data = {
                ...application,
                name: name,
                // email: application.email,
                // phone: application.phone,
                // status: application.status,
                // product: application.product
            }
    
            fetch(server + `applications/${id}`, {
                method: "PUT",
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify(data)
            })
            .catch((error) => {
                alert('При сохранении изменений произошел сбой')
                console.warn(error);
            })
            
        }

    return ( application &&
                (<div className="col">

                    <form onSubmit={changeApplication} id="form">
                        <div className="card mb-4">
                            <div className="card-header">Данные о заявке</div>
                            <div className="card-body">
                                <div className="row mb-3">
                                    <div className="col-md-2">
                                        <strong>ID:</strong>
                                    </div>
                                    <div className="col">Заявка №<span id="number">{application.id}</span></div>
                                    <input name="id" type="hidden" id="id" />
                                </div>

                                <div className="row mb-3">
                                    <div className="col-md-2">
                                        <strong>Дата создания:</strong>
                                    </div>
                                    <div className="col" id="date">{application.date} {application.dateTime}</div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-md-2">
                                        <strong>Продукт:</strong>
                                    </div>
                                    <div className="col">
                                        <select value={application.product} onChange={(e) => {}} id="product" name="product" className="custom-select" >
                                            <option value="course-html">Курс по верстке</option>
                                            <option value="course-js">
                                                Курс по JavaScript
                                            </option>
                                            <option value="course-vue">Курс по VUE JS</option>
                                            <option value="course-php">Курс по PHP</option>
                                            <option value="course-wordpress">
                                                Курс по WordPress
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-md-2">
                                        <strong>Имя:</strong>
                                    </div>
                                    <div className="col">
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            id="name"
                                            name="name"
                                        />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-md-2">
                                        <strong>Email:</strong>
                                    </div>
                                    <div className="col">
                                        <input
                                            type="text"
                                            className="form-control"
                                            defaultValue={application.email}
                                            id="email"
                                            name="email"
                                            />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-md-2">
                                        <strong>Телефон:</strong>
                                    </div>
                                    <div className="col">
                                        <input
                                            type="text"
                                            className="form-control"
                                            defaultValue={application.phone}
                                            id="phone"
                                            name="phone"
                                            />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-md-2">
                                        <strong>Статус заявки:</strong>
                                    </div>
                                    <div className="col">
                                        <select className="custom-select" id="status" name="status">
                                            <option defaultValue="">Выберите...</option>
                                            <option value="new">Новая</option>
                                            <option value="inwork">В работе</option>
                                            <option value="complete">Завершена</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row justify-content-between">
                            <div className="col flex-end">
                                <button type="submit" className="btn btn-primary">Удалить заявку</button>
                            </div>
                            <div className="text-right pr-15">
                                <button type="submit" className="btn btn-primary">Сохранить изменения</button>
                            </div>
                        </div>
                    </form>

                </div>)
    );
}
 
export default EditForm;