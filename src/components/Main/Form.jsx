import { useState } from "react"

const formDataInitial = {
    author: "",
    title: "",
    description: "",
    state: false,
};

function Form() {
    const [dataForm, setDataForm] = useState(formDataInitial);

    const handleChange = (event) => {
        const target = event.target;

        const {
            value,
            name,
            type,
            checked,
        } = target;

        const valueToUpdate = type === "checkbox" ? checked : value;

        const newDataForm = {
            ...dataForm,
            [name]: valueToUpdate,
        };

        setDataForm(newDataForm)
    }

    return (
        <form>
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
                    name="author"
                    rows={4}
                    value={dataForm.description}
                    onChange={handleChange}
                    placeholder="Descrizione del post..." />
            </div>
            <div className="mb-3">
                <span className="me-2">
                    <input
                        type="radio"
                        className="form-check-input me-2"
                        id="statoPubblico"
                        name="stato"
                        checked={dataForm.state === "public"}
                        onChange={handleChange}
                        value="pubblico"
                    />
                    <label
                        htmlFor="statoPubblico"
                        className="form-label"
                    >
                        Vuoi che il post sia pubblico?
                    </label>
                </span>
                <span>
                    <input
                        type="radio"
                        className="form-check-input me-2"
                        id="statoBozza"
                        name="stato"
                        checked={dataForm.state === "draft"}
                        onChange={handleChange}
                        value="bozza"
                    />
                    <label
                        htmlFor="statoBozza"
                        className="form-label"
                    >
                        Vuoi che il post sia pubblico?
                    </label>
                </span>
            </div>
        </form>
    );
}
export default Form