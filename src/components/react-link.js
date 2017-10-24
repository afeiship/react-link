// import './style.scss';

import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import noop from 'noop';
import url from 'url';

const location = window.location;
const CLASS_NAME='__react-link__';

export default class extends React.PureComponent{
  static propTypes = {
    className:PropTypes.string,
    href:PropTypes.string,
    activeClassName:PropTypes.string,
    onClick:PropTypes.func,
    method:PropTypes.oneOf([
      'href','replace','other'
    ])
  };

  static defaultProps = {
    href:'#',
    activeClassName:'active',
    onClick:noop,
    method:'href'
  };


  constructor(props){
    super(props);
    this.attachEvents();
  }

  attachEvents(){
    window.onhashchange = window.onpopstate = () => {
      this.setActiveClass(location.href);
    };
  }

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

  _onClick = inEvent => {
    const {onClick,method,href} = this.props;
    switch(method){
      case 'href':
        location[method] = href;
        break;
      case 'replace':
        location.replace(href);
        break;
      case 'other':
        onClick(inEvent);
        break;
    }

    this.setActiveClass(location.href);
    inEvent.preventDefault();
    return false;
  };

  render(){
    const {className,activeClassName,children,href,onClick,...props} = this.props;
    return (
      <a
      {...props}
      href={href}
      onClick={this._onClick}
      className={classNames('react-link',CLASS_NAME,className)}>{children}</a>
    );
  }
}
