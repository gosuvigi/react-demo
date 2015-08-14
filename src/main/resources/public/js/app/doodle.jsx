/** @jsx React.DOM */
define(function (require) {

    var React = require('react');
    var ReactBootstrap = require('react-bootstrap');

    function Doodle() {
        var Input = ReactBootstrap.Input;
        var ButtonInput = ReactBootstrap.ButtonInput;

        this.DoodleForm = React.createClass({
            render: function () {
                return (
                    <form>
                        <div className="row">
                            <div className="form-group col-md-offset-2 col-md-8">
                                <Input type="text" label="Title" placeholder="Title"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-offset-2 col-md-8">
                                <label for="location">Location</label>
                                <input type="text" className="form-control" id="location" placeholder="Location"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-offset-2 col-md-8">
                                <label for="location">Date / Time</label>
                                <input type="text" className="form-control" id="dateTime" placeholder="Date / Time"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-offset-2 col-md-8">
                                <label for="initiator">Initiator</label>
                                <input type="text" className="form-control" id="initiator" placeholder="Initiator"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-offset-2 col-md-8">
                                <label for="emailText">Email Text</label>
                                <textarea className="form-control" id="emailText" placeholder="Email Text" rows="5"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-offset-2 col-md-8">
                                <label for="recipients">Recipients</label>
                                <input type="text" className="form-control" id="recipients" placeholder="Recipients"/>
                            </div>
                        </div>
                        <div className="row">
                            <ButtonInput type="submit" className="btn btn-primary col-md-offset-5 col-md-2">Submit</ButtonInput>
                        </div>
                    </form>
                );
            }
        });
    }

    Doodle.prototype.init = function () {
        React.render(
            <this.DoodleForm/>,
            document.getElementById('reactForm')
        );
    };

    return Doodle;

});

