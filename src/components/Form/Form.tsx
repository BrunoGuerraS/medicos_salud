import { useEffect, useState } from "react";
import department from "../../fakeData/department.json";
import district from "../../fakeData/district.json";
import province from "../../fakeData/province.json";
import { IUser } from "../Search/Search";
import "./Form.css";

export const Form = () => {
  const [state, setState] = useState<IUser>({
    id: "",
    am: "",
    ap: "",
    departamento: "",
    distrito: "",
    name: "",
    password: "",
    provincia: "",
    type: "",
    user: "",
  });

  const [foo, setFoo] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("value", value);
    setState({
      ...state,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log("into effect", state);
  }, [state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("datos", state);
  };

  return (
    <>
      <h1>Nuevo usuario</h1>
      <form className="Form-content" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Apellido paterno</label>
          <input
            type="text"
            id="aPaterno"
            name="ap"
            value={state.ap}
            onChange={handleChange}
          />
        </div>

        <div>
          <label> Apellido materno</label>
          <input
            type="text"
            id="aMaterno"
            name="am"
            value={state.am}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="">Nombres</label>
          <input
            type="text"
            id="nombre"
            name="name"
            value={state.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="">Departamento</label>
          <select
            id="departamento"
            name="departamento"
            value={state.departamento}
            onChange={handleChange}
          >
            {department &&
              department.map((item) => {
                return (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                );
              })}
          </select>
        </div>

        <div>
          <label htmlFor="">Provincia</label>
          <select
            name="provincia"
            id="provincia"
            value={state.provincia}
            onChange={handleChange}
          >
            {province
              .filter((prov) => {
                console.log(`${state.departamento}`);
                return prov.department_id === state.departamento;
              })
              .map((item) => {
                return <option value={item.id}>{item.name}</option>;
              })}
          </select>
        </div>
        <div>
          <label htmlFor="">Distrito</label>
          <select
            name="distrito"
            id="distrito"
            value={state.distrito}
            onChange={handleChange}
          >
            {district
              .filter((dis) => {
                return dis.province_id === state.provincia
              })
              .map((item) => {
                return <option value={item.id}>{item.name}</option>;
              })}
          </select>
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
          <button>Cancelar</button>
        </div>
      </form>
    </>
  );
};
