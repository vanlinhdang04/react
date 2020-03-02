import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(prop){
        super(prop);
        this.state = {
            txtName : '',
            txtPassword : '',
            txtMota : '',
            gender : 1 ,
            rdLang : 'vi',
            trangThai : true
        };
    }
    onHandleChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === "checkbox" ? target.checked : target.value;
        this.setState({
            [name] : value
        });
        
    }
    onSubmitForm = (event) => {
        event.preventDefault();
        console.log(this.state);
    }
    render () {
        return(
            <div className="container">
                
                <div className="row">
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <div className="panel panel-primary">
                              <div className="panel-heading">
                                    <h3 className="panel-title">Form</h3>
                              </div>
                              <div className="panel-body">
                                    <form onSubmit={ this.onSubmitForm }>
                                        <legend>Thong tin</legend>
                                    
                                        <div className="form-group">
                                            <label>Tai khoan :</label>
                                            <input 
                                                type="text" 
                                                className="form-control"
                                                name="txtName"
                                                onChange={ this.onHandleChange }
                                                value = { this.state.txtName }
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label>Mat Khau :</label>
                                            <input 
                                                type="password" 
                                                name="txtPassword" 
                                                className="form-control"
                                                onChange={ this.onHandleChange }
                                                value = { this.state.txtPassword }
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Mo ta :</label>
                                            <textarea
                                                rows = "3"
                                                name="txtMota"
                                                className="form-control"
                                                onChange = { this.onHandleChange }
                                                value = { this.state.txtMota }
                                            />
                                        </div>
                                        
                                        <div className="form-group">
                                            <label>Gioi tinh :</label>
                                            <select 
                                                name="gender" 
                                                className="form-control"
                                                onChange={ this.onHandleChange }
                                                value={ this.state.gender }
                                            >
                                                    <option value={0}>Nam</option>
                                                    <option value={1}>Nu</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Ngon ngu :</label>
                                            <div className="radio">
                                                <label>
                                                    <input type="radio" 
                                                    name="rdLang" 
                                                    value="vi" 
                                                    onChange={ this.onHandleChange }
                                                    checked = { this.state.rdLang === 'vi' }
                                                />
                                                    Tieng Viet
                                                </label><br/>
                                                <label>
                                                    <input type="radio" 
                                                    name="rdLang" 
                                                    value="en" 
                                                    onChange={ this.onHandleChange }
                                                    checked = { this.state.rdLang === 'en' }
                                                />
                                                    Tieng Anh
                                                </label>
                                            </div>  
                                        </div>
                                        <div className="form-group"> 
                                            <label>Trang thai :</label>
                                            <div className="checkbox">
                                                <label>
                                                    <input 
                                                        type="checkbox" 
                                                        value={true} 
                                                        name="trangThai" 
                                                        onChange={ this.onHandleChange }
                                                        checked = { this.state.trangThai }
                                                    />
                                                    Active
                                                </label>
                                            </div>
                                        </div>

                                        <button type="submit" className="btn btn-primary">Luu</button>
                                    </form>
                                    
                              </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default App;
