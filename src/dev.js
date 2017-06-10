import './dev.scss';

import ReactLink from './main';

class App extends React.Component{
  _onClick(inEvent){
    console.log(this,inEvent);
  }
  render(){
    return (
      <div className="hello-react-link">
        <ReactLink className="test-link1" href='#link1' onClick={this._onClick.bind(this)} method='replace'>
          测试link1
        </ReactLink>

        <ReactLink className="test-link2" href='#link2' onClick={this._onClick.bind(this)} method='replace'>
          测试link2
        </ReactLink>

        <ReactLink className="test-link3" href='#link3' onClick={this._onClick.bind(this,'test3')} method='other'>
          我是自定义的
        </ReactLink>
      </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
