//  temporary stubs required for React. These will not be required as soon as the XD environment provides setTimeout/clearTimeout
const reactShim = require("./react-shim");
const style = require("./styles.css");
const React = require("react");
const ReactDOM = require("react-dom");


class HelloForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: props.name || "", 
            isCheck: props.isCheck || false,
            range: props.range || 50,
        };

        this.onInputChange = (e) => {
            console.log("change")
            this.setState({ name: e.target.value })
        }
        this.onCheckboxChange = (e) => {
            console.log("onCheckboxChange")
            this.setState({ isCheck: e.target.checked })
        }
        this.onRangeChange = (e) => {
            this.setState({ range: e.target.value })
        }
        this.onDoneClick = (e) => {
            console.log(this.state)
            this.props.dialog.close();
        }
    }

    render() {
        return (
            <form style={{ width: 500 }}>
                <h1>React with JSX Components</h1>
                <a href="https://adobexdplatform.com/" target="_blank">https://adobexdplatform.com/</a>
                <label>
                    <span>What is your name?</span>
                    <input className="input_text" onChange={this.onInputChange} />
                </label>
                <input type="checkbox" checked={this.state.isCheck} onChange={this.onCheckboxChange} />
                <input type="range" min="0" max="100" value={this.state.range} onChange={this.onRangeChange} />
                <p>{"Hello " + this.state.name}</p>
                <p>{"isChecked " + this.state.isCheck}</p>
                <footer>
                    <button type="submit" uxp-variant="cta" onClick={this.onDoneClick}>Done</button>
                </footer>
            </form>
        );
    }
}

let dialog;
function getDialog() {
    if (dialog == null) {
        dialog = document.createElement("dialog");
        ReactDOM.render(<HelloForm dialog={dialog} />, dialog);
    }
    return dialog
}
module.exports = getDialog;
