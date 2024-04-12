import { useEffect, useState } from "react";
import { IUser } from "../Search/Search";
import { Department } from "./Department/Department";
import { District } from "./District/District";
import "./Form.css";
import { FullName } from "./FullName/FullName";
import { Province } from "./Province/Province";

const defaultValue: IUser = {
  id: "",
  am: "",
  ap: "",
  departamento: "",
  provincia: "",
  distrito: "",
  name: "",
  password: "",
  type: "",
  user: "",
};

export const Form = () => {
  const [state, setState] = useState<IUser>(defaultValue);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    console.log("value", value);
    setState({
      ...state,
      [name]: value,
    });
  };

  const handlerCancel = () => {
    setState(defaultValue);
  };

  useEffect(() => {}, [state]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
    // console.log(e.target)
  };

  return (
    <>
      <h1>Nuevo usuario</h1>
      <form className="Form-content" onSubmit={handleSubmit}>
        <FullName state={state} handleChange={handleChange} />
        <div className="Location-container">
          <Department state={state} handleChange={handleChange} />
          <Province setState={setState} state={state} handleChange={handleChange}/>
          <District state={state} handleChange={handleChange} />
        </div>

        <div>
          <label htmlFor="">Usuario</label>
          <input
            type="text"
            id="user"
            name="user"
            value={state.user}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            value={state.password}
            onChange={handleChange}
          />
        </div>

        <div>
          <button>Guardar</button>
          <button type="button" onClick={handlerCancel}>
            Cancelar
          </button>
        </div>
      </form>
    </>
  );
};
