define(function(require){

    var React = require('react');
    var DateTimeField = require('react-bootstrap-datetimepicker');

    function App() {
        this.AppView = React.createClass({
            render: function () {
                return (
                    <div>
                        <p>Hello, React!</p>
                        <DateTimeField/>
                    </div>
                );
            }
        });
    }

    App.prototype.init = function () {
        React.render(<this.AppView />, document.body);
    };

    return App;

});