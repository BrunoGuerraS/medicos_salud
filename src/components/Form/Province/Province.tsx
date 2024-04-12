import { FC, useEffect } from "react";
import province from "../../../fakeData/province.json";
import { IUser } from "../../Search/Search";
import "./Province.css";

interface Props {
  state: IUser;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  setState: (state: React.SetStateAction<IUser>) => void;
}

export const Province: FC<Props> = ({ state, setState, handleChange }) => {
  useEffect(() => {
    console.log("me activare si el departmento esta cambiando ");
    setState((cv: IUser) => ({
      ...cv,
      provincia: "",
    }));
  }, [state.departamento]);

  return (
    <div className="Province_container">
      <label htmlFor="">Provincia</label>
      <select
        disabled={!state.departamento}
        name="provincia"
        id="provincia"
        value={state.provincia}
        onChange={handleChange}
      >
        <option value="-">-</option>
        {province
          .filter((prov) => {
            return prov.department_id === state.departamento;
          })
          .map((item, index) => {
            return (
              <option key={index} value={item.id}>
                {item.name}
              </option>
            );
          })}
      </select>
    </div>
  );
};
