export default class ClientState {
    constructor(reactComponent: React.PureComponent) {
        this.reactComponent = reactComponent
    }

    private reactComponent: React.PureComponent

    private refresh() {
        this.reactComponent.forceUpdate()
    }
}
