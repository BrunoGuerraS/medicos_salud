import React, { FC } from "react";
import { IUser } from "../../Search/Search";
import "./FullName.css";

interface Props {
  state: IUser;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FullName: FC<Props> = ({ state, handleChange }) => {
  return (
    <div className="Fullname-container">
      <div className="Input-container">
        <label htmlFor="">Apellido paterno</label>
        <input
          type="text"
          id="aPaterno"
          name="ap"
          value={state.ap}
          onChange={handleChange}
        />
      </div>

      <div className="Input-container">
        <label> Apellido materno</label>
        <input
          type="text"
          id="aMaterno"
          name="am"
          value={state.am}
          onChange={handleChange}
        />
      </div>

      <div className="Input-container">
        <label htmlFor="">Nombres</label>
        <input
          type="text"
          id="nombre"
          name="name"
          value={state.name}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
