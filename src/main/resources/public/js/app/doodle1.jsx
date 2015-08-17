/** @jsx React.DOM */
define(function (require) {

    var React = require('react');
    var ReactBootstrap = require('react-bootstrap');
    var ReactQuill = require('react-quill');

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
                                <label for="dateTime">Date / Time</label>
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
                                <ReactQuill value="<h1>Hodor!</h1>" theme="snow" className="editor"/>
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
        React.render(<this.DoodleForm/>, document.getElementById('reactForm'));
    };

    return Doodle;

});

