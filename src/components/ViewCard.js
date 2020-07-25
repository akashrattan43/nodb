import React, { Component } from 'react'

class ViewCard extends Component {
    constructor (props) {
        super(props)
        this.state = {
            robot: [],
            id: 0,
            name: ''
        };
    }

    componentDidMount () {
        this.setState({id: this.props.match.params.id})
        console.log(this.state.id)
        console.log(this.props.match.params.id)
        fetch(`http://localhost:3999/api/employee/${this.props.match.params.id}`)
        .then(response => {
            return response.json();
        })
        .then(user => {
            this.setState({ robot: user, id: user[0].id });
        }) 
        .catch (err => console.log(err))

    }

    deleteHandler (id) {
        fetch(`http://localhost:3999/api/employee/${this.props.match.params.id}`,{
            headers: new Headers(
                {
                    "Access-Control-Allow-Origin" : "*",
                    "Access-Control-Allow-Credentials" : true,
                    "Access-Control-Allow-Methods" : "DELETE",
                    "Access-Control-Allow-Headers" : "Origin, Content-Type, Accept"
                }
            ),
        })
        .then(response => {
            return response.json();
        })
        .then(user => {
            console.log('deleted ' + (id))
            this.setState({robot: [], id: 0,})
            window.location.replace('/')
        }) 
        .catch (err => console.log(err))

    }

    handleSubmission (){
        fetch(`http://localhost:3999/api/employee/edit/${this.state.id}`, {
            method: "patch",
            headers: new Headers(
                {
                    "Access-Control-Allow-Origin" : "*",
                    "Access-Control-Allow-Credentials" : true,
                    "Access-Control-Allow-Methods" : "PATCH",
                    "Access-Control-Allow-Headers" : "Origin, Content-Type, Accept"
                }
            ),
            body: {
                "name": this.state.name
            },
        })
        .then((res) => res.json())
        .then(response => {
            if (response.status !== 201){
                console.log('not editted')
            }
            window.location.replace('/')
        })
        .catch((error) => {
            console.log(error)
        })
    }

    render () {
        return(
            this.state.robot.length > 0 ?
            <React.Fragment >
                <div className="text-center">
                <h1> {this.state.robot.length > 0 ? `Greetings from ${this.state.robot[0].name}` : ''}</h1>
                <section className='tc bg-light-red dib br3 pa3 ma2  bw2 shadow-S'>
				<img src={`https://robohash.org/${this.props.match.params.id}?size=200x200`} alt='employees' />
				
		        </section>
                <div className="container text-center col-lg-6">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name"> Customer Name: </label>
                            <input type="text" className="form-control" 
                            onChange={(event) => this.setState({name: event.target.value})} defaultValue={this.state.robot[0].name ? this.state.robot[0].name: ''} name="name" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email"> Customer Email</label>
                            <input type="text" className="form-control" value={this.state.robot[0].email ? this.state.robot[0].email: ''}
                            name="email" readOnly/>
                        </div>
                        <div className="submit">
                        </div>
                    </form>
                    <button type="submit" onClick = {()=> this.handleSubmission()}className="btn btn-primary mr-2">Edit</button>
                    <button className="btn btn-danger mt-2 text-right" onClick = {() => this.deleteHandler(this.state.id)}>Delete User</button>
                </div>
                </div>
            </React.Fragment>
            : <div><h1>Loading...</h1></div>
        )
    }
}
export default ViewCard;