import { Component } from "react";
import './ItemJoke.css'

type Props = {
    children: React.ReactNode
}

class ItemJoke extends Component<Props> {
    render() {
        return <div className="list_item">{this.props.children}</div>
    }
}

export default ItemJoke