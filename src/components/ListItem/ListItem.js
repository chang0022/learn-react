import React from 'react';

class ListItem extends React.Component {
    render() {
        return (
            <li>
                <div className="weui-flex">
                    <p className="weui-flex__item">表单</p>
                    <img src="./images/icon_nav_form.png" />
                </div>
            </li>
        )
    }
}

export default ListItem;