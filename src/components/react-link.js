import './style.scss';
import classNames from 'classnames';
import noop from 'noop';
import url from 'url';


const location = window.location;
const CLASS_NAME='__react-link__';

export default class extends React.Component{
  static propTypes = {
    className:React.PropTypes.string,
    href:React.PropTypes.string,
    activeClassName:React.PropTypes.string,
    method:React.PropTypes.oneOf(['href','replace','other'])
  };

  static defaultProps = {
    href:'#',
    activeClassName:'active',
    method:'href'
  };

  componentDidMount(){
    this.setActiveClass(location.href);
  }

  setActiveClass(inTargetUrl){
    const docUrl = location.href;
    const {href,activeClassName} = this.props;
    const links = document.querySelectorAll(`.${CLASS_NAME}`);
    let _links = Array.prototype.slice.call(links);

    _links.forEach((item)=>{
      let expectUrl = url.resolve(docUrl,item.getAttribute('href'));
      if(expectUrl === inTargetUrl){
        item.classList.add(activeClassName);
      } else {
        item.classList.remove(activeClassName);
      }
    });
  }

  _onClick(inEvent){
    const {onClick,method,href} = this.props;
    switch(method){
      case 'href':
        location[method] = href;
        this.setActiveClass(location.href);
        break;
      case 'replace':
        location.replace(href);
        this.setActiveClass(location.href);
        break;
      case 'other':
        onClick.call(this,inEvent);
        break;
    }
    inEvent.preventDefault();
    return false;
  }

  render(){
    const {className,children,href} = this.props;
    return (
      <a href={href} onClick={this._onClick.bind(this)} className={classNames('react-link',CLASS_NAME,className)}>{children}</a>
    );
  }
}
