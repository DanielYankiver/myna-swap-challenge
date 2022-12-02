import React from "react";

export default function Card ({data}) {

  console.log(data[0].node.name) 
  console.log("name", data.map(x => x.node.name)) 

  // 

  return (
    <div>
      {data.map(x => {
        return (
          <div>
            <div className="name">
              {x.node.name}
            </div>
            <br/>
            <div className="retail-price">
              {x.node.retailPrice}
            </div>
            <br/>
            <div className="sku">
              {x.node.sku}
            </div>
          </div>
        )
      })}
    </div>
  )
}