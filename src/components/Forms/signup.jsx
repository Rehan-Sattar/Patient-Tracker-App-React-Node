import React from "react";
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import { bindActionCreators} from "redux";
import { getUserSignUp } from "../../store/Actions/ActionCreatorsForUsers";
import "./formStyles.css";
class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prevProps : props,
            firstName: '',
            lastName: '',
            doctorEmail: '',
            doctorPassword: '',
            doctorGender: '',
            authToken : null
        };
        this.submitHandler = this.submitHandler.bind(this);
    };
    
    static getDerivedStateFromProps(nextProps, prevState) {
        if(prevState.prevProps !== nextProps) {
            console.log(nextProps.authstate.Authreducer.authToken);
            nextProps.history.push('/dashboard')
            return {}
        }
        return null;
    }

    submitHandler(e) {
        e.preventDefault();
        console.log('STATE FROM SIGNUP COMPONENT: ', this.state);
        this.props.getuserSignin(this.state);
        this.setState({
            firstName: '',
            lastname: '',
            doctorEmail: '',
            doctorPassword: '',
            doctorGender: '',
        })
    }
    render() {
        return (
            <div>
                <section className="signup-form">
                    <div className="pt-5" style={{ height: '100vh', width: '100%', backgroundColor: "#0132408e" }}>
                        <div className="container">
                            <Link to="/"><button className="btn btn-info"><i className="fa fa-arrow-left"></i> back</button></Link>
                            <h1 className="text-center mb-4 text-white formHeading"> <i className="fa fa-users"></i>Sign up</h1>
                            <div className="row justify-content-center">
                                <div className="col-md-6 col-lg-6 col-sm-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <form onSubmit={this.submitHandler}>
                                                <div className="row">
                                                    <div className="col">
                                                        <input 
                                                            type="text" 
                                                            className="form-control" 
                                                            required
                                                            value={this.state.firstName}
                                                            onChange = { (e) => this.setState({ firstName : e.target.value}) }
                                                            placeholder="First name" />
                                                    </div>
                                                    <div className="col">
                                                        <input 
                                                            type="text" 
                                                            className="form-control" 
                                                            required
                                                            value={this.state.lastName}
                                                            onChange = { (e) => this.setState({ lastName : e.target.value}) }
                                                            placeholder="Last name" />
                                                    </div>
                                                </div>
                                                <br />
                                                <input 
                                                    className="form-control"
                                                    type="email" 
                                                    value={this.state.doctorEmail}
                                                    onChange={ (e) => this.setState({ doctorEmail : e.target.value})}
                                                    placeholder="Email: example@gmail.com" />  <br />
                                                <input 
                                                    className="form-control"
                                                    type="password" 
                                                    value={this.state.doctorPassword}
                                                    onChange={ (e) => this.setState({ doctorPassword : e.target.value})}
                                                    placeholder="Enter Password" /> <br />
                                                <input 
                                                    type="radio" 
                                                    onChange={ (e) => this.setState({ doctorGender:  e.target.value})} 
                                                    name="gender" value="male"  /> Male &nbsp;
                                                <input 
                                                    type="radio" 
                                                    onChange={ (e) => this.setState({ doctorGender:  e.target.value})} 
                                                     name="gender" value="female"  /> Female 
                                                    
                                                <button type="submit" className="btn btn-block btn-outline-info mt-3">Sign up</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    };
};

const mapStateToProps = (state) => ({
    authstate : state
});
const mapDispatchToProps = ( dispatch ) => {
    return bindActionCreators({
        getuserSignin : (state) => getUserSignUp(state)
    }, dispatch);
};
export default connect(mapStateToProps , mapDispatchToProps)(SignUp);