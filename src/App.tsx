import React from "react"
import ClientState from "./classes/client/ClientState"
import Router from "./components/router/Router"

export default class App extends React.PureComponent {
    private clientState: ClientState = new ClientState(this)

    render() {
        return <Router clientState={this.clientState} />
    }
}
