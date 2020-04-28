import React from 'react'

class VoluntarioForm extends React.Component {

    constructor() {
        super();
        this.state = {
            nombre: '',
            causa: '',
            horas: 0
        };
    }

    render() {
        return (
            <div className="container">
                <div className="col-md-6 text-center">
                    <form className="card-body">
                        <div className="form-group">
                            <input
                                type="text"
                                name="nombre"
                                className="form-control"
                                placeholder="Nombre"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="causa"
                                className="form-control"
                                placeholder="Causa"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Save
                    </button>
                    </form>
                </div>
            </div>
        )
    }

}

export default VoluntarioForm;