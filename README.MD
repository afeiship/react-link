#react-link
> Route link for react.


## resource:
+ http://www.cnblogs.com/Kummy/p/4966937.html
+ https://github.com/steven5538/vue-button
+ https://yarnpkg.com/en/docs/install


## props:
| name | type | value | description |
| :----| :----| :----| :----|
| className  | String | '' | Your className |
| href  | String | '#' | href |
| activeClassName  | String | 'active' | The class when active |
| method  | Enum | href/replace | location method |


## usage:
```html
<ReactLink method="replace" activeClassName='active' className="menu-sold" href='#/sold'>卖出的</ReactLink>
<ReactLink method="replace" activeClassName='active' className="menu-buy" href='#/buy'>买到的</ReactLink>
```
