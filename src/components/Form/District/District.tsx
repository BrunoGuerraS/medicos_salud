import React, { useEffect } from "react";
import district from "../../../fakeData/district.json";
import { IUser } from "../../Search/Search";
import "./District.css";

interface Porps {
  state: IUser;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const District: React.FC<Porps> = ({ state, handleChange }) => {
  useEffect(() => {
    if (!state) return;
  }, [state]);

  return (
    <div className="District_container">
      <label htmlFor="">Distrito</label>
      <select
        name="distrito"
        id="distrito"
        value={state.distrito}
        onChange={handleChange}
      >
        <option value="-">-</option>
        {district
          .filter((dis) => {
            return dis.province_id === state.provincia;
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
