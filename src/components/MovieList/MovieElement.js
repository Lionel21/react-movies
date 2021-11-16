import React, {Component} from 'react';

export default class MovieElement extends Component {
    render() {
        return (
            <div className="w-25 p-2">
                <div className="card">
                    <img
                        src="https://images.unsplash.com/photo-1588178465392-dcb5cde1e455?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFjayUyMHRvJTIwdGhlJTIwZnV0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        alt="Dolorean" className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">Retour vers le futur</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                            adipisci cum delectus, distinctio enim nam nihil nisi nobis officia veniam.</p>
                    </div>
                </div>
            </div>
        );
    };
};
