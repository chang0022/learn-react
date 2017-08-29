import React from 'react';

class ListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            curr: '',
            listVisible: false
        }
    }

    showList() {
        this.setState({
            listVisible: !this.state.listVisible
        })
    }

    render() {
        const {item, index, selectTab} = this.props;
        return (
            <li
                className={index === this.props.curr ? 'js-show' : ''}
                onClick={() => selectTab(index)}>
                <div className="weui-flex">
                    <p className="weui-flex__item">{item.name}</p>
                    <img src={item.icon} alt={item.name}/>
                </div>
            </li>
        );
    }
}

export default ListItem;