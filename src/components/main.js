import React from 'react';

const cardStyle = {
    color:"#000",
    margin: {
        // jss-expand gives more readable syntax
        
        bottom: 50, // jss-default-unit makes this 5px
      },
      padding:{
        bottom: 50,
        top:40

      }
  };

class Main extends React.Component{
    render(){
        return(
            <div className="col-md-4">
                <div className="card" style={cardStyle.margin}>
                    <div className="card-body">
        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">Unete a la causa y se parte del voluntariado.</p>
        <a href="#" className="btn btn-primary">{this.props.boton}</a>
                    </div>
                </div>
            </div>  
        );
    }
}
export default Main