import department from "../../../fakeData/department.json";
import { IUser } from "../../Search/Search";
import "./Department.css";

interface Props {
  state: IUser,
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}


export const Department: React.FC<Props> = ({ state, handleChange }) => {
  return (
    <div className="Department-container">
      <label htmlFor="">Departamento</label>
      <select
        id="departamento"
        name="departamento"
        value={state.departamento}
        onChange={handleChange}
      >
        <option value="-">-</option>
        {department &&
          department.map((item: any) => {
            return (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            );
          })}
      </select>
    </div>
  );
};
