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
      </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
