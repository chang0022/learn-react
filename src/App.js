import React, {Component} from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

import Clock from './components/Timer/Clock';

const data = require('./data/data.json');
const fetchEvents = () => Promise.resolve(data).then(json => json.slice(0, 4));

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {refreshing: false}
    }

    refresh() {
        this.setState({refreshing: true});
    }

    onComponentRefresh() {
        this.setState({refreshing: false});
    }

    render() {
        const {refreshing} = this.state;
        return (
            <div className="notificationsFrame">
                <div className="panel">
                    <Header title="Github activity"/>
                    <Clock/>
                    <Content
                        onComponentRefresh={this.onComponentRefresh.bind(this)}
                        requestRefresh={refreshing}
                        fetchData={fetchEvents}/>
                    <Footer>
                        <button onClick={this.refresh.bind(this)}>
                            <i className="fa fa-refresh"></i>
                            Refresh
                        </button>
                    </Footer>
                </div>
            </div>
        );
    }
}

export default App;
