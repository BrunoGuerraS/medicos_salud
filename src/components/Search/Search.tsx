export interface IDepartamento {
  id: string;
  name: string;
}

export interface IProvincia {
  id: string;
  name: string;
  department_id: string;
}

export interface IDistrito {
  id: string;
  name: string;
  province_id: string;
  department_id: string;
}

export interface IUser {
  id: string;
  name: string;
  ap: string;
  am: string;
  departamento: string;
  provincia: string;
  distrito: string;
  user: string;
  password: string;
  type: string;
}

const fakeData: IUser[] = [
  {
    id: "1",
    name: "Juan",
    ap: "Perez",
    am: "Gomez",
    departamento: "Lima" ,
    provincia: "Lima",
    distrito: "lima",
    user: "juanperez",
    password: "123456",
    type: "user",
  },
];

export const Search = () => {
  return (
    <div>
      <div>
        <h2>lista de usuarios</h2>
        <div>
          <form action="">
            <input type="text" />
            <button>Filtrar</button>
            <button>Limpiar</button>
            <button>Nuevo</button>
          </form>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Usuario</th>
            <th>Tipo</th>
            <th>Departamento</th>
            <th>Provincia</th>
            <th>Distrito</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {fakeData &&
            fakeData.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{`${item.name} ${item.ap} ${item.am}`}</td>
                  <td>{item.type}</td>
                  <td>{item.departamento}</td>
                  <td>{item.provincia}</td>
                  <td>{item.distrito}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
