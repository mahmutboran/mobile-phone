import { useState ,useEffect} from "react";

const Form = ({setData, data}) => {
  const [form, setForm] = useState({ fullname: "", phone_number: "" });

  useEffect(() => {
    setForm({fullname:"", phone_number:""})
  }, [data])
  

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e)=>{
      e.preventDefault()
      setData([...data,form])
     // setForm({fullname:"", phone_number:""})


  }

  return (
    <div >
      <form action="#" onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            onChange={onChangeInput}
            required
            value={form.fullname}
          />
        </div>
        <div>
          <input
            type="text"
            name="phone_number"
            placeholder="Phone Numer"
            onChange={onChangeInput}
            required
            value={form.phone_number}
          />
        </div>
        <div className="btn">
          <button>ADD</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
