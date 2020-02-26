import React from 'react';

export default function AdsFiltered({ location }) {
    let params = new URLSearchParams(location.search);

    //console.log(params.get("name"));
    return (
        <div>

        <Child 
            name={params.get("name")} 
            venta={params.get("venta")}
            tag={params.get("tag")}
            price={params.get("price")}
        />
        
        </div>
    );
}

function Child({ name, venta, tag, price }) {
    return (
        <div>
            <h3>
            The <code>name</code> in the query string is "{name}". and <code>venta</code> is "{venta}" y el <code>tag</code> es "{tag}" y el <code>precio</code> es "{price}"
            </h3>
        </div>
    );
}