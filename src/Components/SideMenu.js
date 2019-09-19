import React from 'react';

export function SideMenu({ toggleInfo }) {
  return (
    <div id="menu">
        <div className="pure-menu">
            <a className="pure-menu-heading" href="#">Wiki Wars</a>
            <ul className="pure-menu-list">
                <div  onClick={()=> toggleInfo(1)}><a href="#" className="pure-menu-link">Openig Crawl</a></div>
                <div  onClick={()=> toggleInfo(2)}><a href="#" className="pure-menu-link">Release Date</a></div>
                <div  onClick={()=> toggleInfo(3)}><a href="#" className="pure-menu-link">Director</a></div>
                <div  onClick={()=> toggleInfo(4)}><a href="#" className="pure-menu-link">Producer</a></div>
            </ul>
        </div>
    </div>
  );
}
