import { TiDeleteOutline } from "react-icons/ti";

const List = ({ deleteContact, filtered }) => {
  return (
    <div>
      <ul>
        {filtered.map((x, i) => (
          <li key={i}>
            <div>{x.fullname}</div>
            <div>{x.phone_number}</div>
            <span>
              <TiDeleteOutline
              style={{color:"red",cursor:"pointer"}}  
              onClick={deleteContact}/>
            </span>
          </li>
        ))}
      </ul>

      <p>Total Contact ({filtered.length})</p>
    </div>
  );
};

export default List;
