import React from 'react';

export default function SideMenu({ toggleInfo }) {
  return (
    <div id="menu">
        <div className="pure-menu">
            <a className="pure-menu-heading" href="#">Wiki Wars</a>
            <ul className="pure-menu-list">
                <div className="button_cont" onClick={()=> toggleInfo(1)}><a href="#" className="pure-menu-link">Openig Crawl</a></div>
                <div className="button_cont" onClick={()=> toggleInfo(2)}><a href="#" className="pure-menu-link">Release Date</a></div>
                <div className="button_cont" onClick={()=> toggleInfo(3)}><a href="#" className="pure-menu-link">Director</a></div>
                <div className="button_cont" onClick={()=> toggleInfo(4)}><a href="#" className="pure-menu-link">Producer</a></div>
            </ul>
        </div>
    </div>
  );
}
