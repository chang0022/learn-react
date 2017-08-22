import React from 'react';

class ListItem extends React.Component {
    render() {
        const {item} = this.props;
        return (
            <li>
                <div className="weui-flex">
                    <p className="weui-flex__item">{item.name}</p>
                    <img src={item.icon} alt={item.name} />
                </div>
            </li>
        );
    }
}

export default ListItem;