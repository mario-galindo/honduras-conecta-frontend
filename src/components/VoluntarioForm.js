import React from 'react'

class VoluntarioForm extends React.Component {

    constructor() {
        super();
        this.state = {
            nombre: '',
            causa: ''        
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        //this.props.onAddTodo(this.state);
        console.log(this.state)
        this.setState({
            nombre: '',
            causa: ''
        });
    }

    handleInputChange(e) {
        const { value, name } = e.target;
        console.log(value, name);
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className="container">
                <div className="col-md-6 text-center mx-auto">
                    <form onSubmit={this.handleSubmit} className="card-body">
                        <div className="form-group">
                            <input
                                type="text"
                                name="nombre"
                                value={this.state.nombre}
                                onChange={this.handleInputChange}
                                className="form-control"
                                placeholder="Nombre"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="causa"
                                value={this.state.causa}
                                onChange={this.handleInputChange}
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