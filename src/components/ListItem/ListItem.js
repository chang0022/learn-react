import React from 'react';

class ListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            curr: ''
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !(nextState.curr === this.state.curr)
    }

    handleClick(i) {
        this.setState({curr: i})
    }

    render() {
        const {item, index} = this.props;
        return (
            <li
                className={index === this.state.curr ? 'js-show' : ''}
                onClick={this.handleClick.bind(this, index)}>
                <div className="weui-flex">
                    <p className="weui-flex__item">{item.name}</p>
                    <img src={item.icon} alt={item.name}/>
                </div>
            </li>
        );
    }
}

export default ListItem;