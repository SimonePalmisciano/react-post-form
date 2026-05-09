import { useState } from "react"

const formDataInitial = {
    author: "",
    title: "",
    description: "",
    stato: false,
};

const API_URL = "https://69fdc18030ad0a6fd1c16e12.mockapi.io/api/v666/soul";

function Form() {
    const [dataForm, setDataForm] = useState(formDataInitial);

    const handleChange = (event) => {
        const target = event.target;
        console.log(target);

        const tagType = target.type;

        const {
            value,
            name,
            checked,
        } = target;

        const valueToUpdate = tagType === "checkbox" ? checked : value;

        const newDataForm = {
            ...dataForm,
            [name]: valueToUpdate,
        };

        setDataForm(newDataForm)
        console.log(dataForm);

    }

    const submitHandler = (event) => {
        event.preventDefault();

        // const postData = {
        //     author: 'Il Grande Mago delle Tastiere',
        //     title: 'Avventure di un Programmatore Pazzerello',
        //     body: 'Questa storia parla di un tizio che ha venduto l\'anima per un caffè gratis, ma ha finito per scrivere codice infinito! Con tanto di bug che si moltiplicano come conigli.',
        //     public: true,
        // };
        fetch('https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(dataForm)
        }).then(response => {
            return response.json();
        }).then(json => {
            console.log(json);
        });

        //     fetch(API_URL, {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(dataForm),
        //     })
        //         .then((response) => {
        //             return response.json();
        //         })
        //         .then((jsonData) => {
        //             console.log('risposta: ', jsonData);

        //             return jsonData
        //         })
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="mb-3">
                <label
                    htmlFor="authorName"
                    className="form-label"
                >
                    Inserisci il nome dell'autore
                </label>
                <input
                    className="form-control"
                    type="text"
                    id="authorName"
                    name="author"
                    value={dataForm.author}
                    onChange={handleChange}
                    placeholder="GianPeppe" />
            </div>

            <div className="mb-3">
                <label
                    htmlFor="titlePost"
                    className="form-label"
                >
                    Inserisci il Titolo del post
                </label>
                <input
                    className="form-control"
                    type="text"
                    id="titlePost"
                    name="title"
                    value={dataForm.title}
                    onChange={handleChange}
                    placeholder="Titolo post" />
            </div>

            <div className="mb-3">
                <label
                    htmlFor="descriptionPost"
                    className="form-label"
                >
                    Inserisci la descrizione
                </label>
                <textarea
                    className="form-control"
                    id="descriptionPost"
                    name="description"
                    rows={4}
                    value={dataForm.description}
                    onChange={handleChange}
                    placeholder="Descrizione del post..." />
            </div>
            <div className="mb-3">
                <input
                    type="checkbox"
                    className="form-check-input"
                    id="public"
                    checked={dataForm.stato}
                    name="stato"
                    onChange={handleChange}
                />
                <label
                    htmlFor="public"
                    className="form-label"
                >
                    Publlico
                </label>
            </div>
            <button className="btn btn-primary">Aggiungi post</button>
        </form >
    );
}
export default Form