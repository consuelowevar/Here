import React, {Component} from 'react'


class ListItem extends Component {
    render() {
         return <li>
            <input type="checkbox" defaultChecked={this.props.item.check}/>
            {this.props.item.text}
        </li>;
    }
}

export default ListItem;
