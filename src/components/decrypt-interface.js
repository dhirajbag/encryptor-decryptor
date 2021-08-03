import { React, Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { decrypt } from '../algorithms/decryption';
import { encrypt } from '../algorithms/encryption';
class Decryption extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
            passphrase: "",
            decrypted_msg: ""
        };

        this.handleMsgChange = this.handleMsgChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleCopy = this.handleCopy.bind(this);
    }

    handleMsgChange(event) {
        this.setState({ message: event.target.value });
    }

    handlePassChange(event) {
        this.setState({ passphrase: event.target.value });
    }

    handleSubmit(event) {
        this.setState({
            decrypted_msg: decrypt(this.state.message, this.state.passphrase)
        });
        event.preventDefault();
    }
    handleCopy(event) {
        var encrypted_msg = document.getElementById("encrypted_msg");
        encrypted_msg.select();
        document.execCommand("copy");
    }

    render() {
        return (
            <div className="row" >
                <div className="col-12 col-md-6 mt-3">
                    <Form>
                        <div className="row">
                            <div className="col-1"></div>
                            <div className="col-10">
                                <FormGroup>
                                    <Input type="textarea" name="message" id="msg" placeholder="Enter the encrypted message here."
                                        value={this.state.msg}
                                        onChange={this.handleMsgChange}
                                        rows={15} />
                                </FormGroup>
                                <br />
                                <FormGroup className="mt-10">
                                    <Input type="password" name="passphrase" id="pass" placeholder="Enter the secret passphrase."
                                        value={this.state.passphrase}
                                        onChange={this.handlePassChange}
                                    />
                                </FormGroup>
                            </div>
                            <div className="col-1"></div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-3"></div>
                            <div className="col-6">
                                <Button
                                    onClick={this.handleSubmit}
                                >Decrypt The Message</Button>
                            </div>
                            <div className="col-3"></div>
                        </div>
                    </Form>

                </div>
                <div className="col-12 col-md-6 mt-3">
                    <Form>
                        <div className="row">
                            <div className="col-1"></div>
                            <div className="col-10">

                                <FormGroup>
                                    <Input type="textarea" name="encrypted_msg" id="encrypted_msg" placeholder="Decrypted message will appear here."
                                        value={this.state.decrypted_msg}
                                        rows={15}/>
                                </FormGroup>

                            </div>
                            <div className="col-1"></div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-3"></div>
                            <div className="col-6">
                                <Button
                                    onClick={this.handleCopy}
                                >Copy To Clipboard</Button>
                            </div>
                            <div className="col-3"></div>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Decryption;