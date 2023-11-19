"use client";
import{useState}from"react";
const Button = function ({ title, className="",icon }) {
  return (
    <button className={"button-text "+className}>
      <div className="button-text-container">
        {icon && <div className="button-text-icon">{icon}</div>}
        <div style={icon ? null : { marginLeft: "14px" }}>{title}</div>
      </div>
    </button>
  );
};
export const metadata = {
  title: "Yoth - direct"
}
export default function ({ children }) {
  const [topIndex,setTopIndex]=useState(0);
  return (
    <div>
      <div>
        <div>
          <div>
            <Button title="Primarys" className={topIndex==0?"":"transparent"} onClick={()=>setTopIndex(0)}/>
            <Button title="Chennels" className={topIndex==1?"":"transparent"} onClick={()=>setTopIndex(1)}/>
            <Button title="Requires" className={topIndex==2?"":"transparent"} onClick={()=>setTopIndex(2)}/>
          </div>
          <List />
        </div>
        <div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}
const List = function () {
  const _ = {};
  const data = [
    _,
    _,
    _,
    _,
    _,
    _,
    _,
    _,
    _,
    _,
    _,
    _,
    _,
    _,
    _,
    _,
    _,
    _,
    _,
    _,
    _,
    _,
    _,
    _,
    _,
    _,
    _,
    _,
    _,
    _,
    _,
    _,
    _,
    _,
    _,
    _,
    _,
    _,
    _,
    _,
    _,
    _,
    _,
    _,
    _,
  ];
  return (
    <div>
      {data?.map(() => {
        return <div>X</div>;
      })}
    </div>
  );
};
