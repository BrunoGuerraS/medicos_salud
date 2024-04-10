export interface IUser {
    id: string
    name: string
    ap: string
    am: string
    departamento: string
    provincia: string
    distrito: string
    user: string
    password: string
    type: string
}

const fakeData: IUser[] = [
    {
        id: "1",
        name: "Juan",
        ap: "Perez",
        am: "Gomez",
        departamento: "Lima",
        provincia: "Lima",
        distrito: "Lima",
        user: "juanperez",
        password: "123456",
        type: "user"
    },
    {
        id: "2",
        name: "Maria",
        ap: "Gomez",
        am: "Perez",
        departamento: "Lima",
        provincia: "Lima",
        distrito: "Lima",
        user: "mariagomez",
        password: "123456",
        type: "admin"
    },
    {
        id: "3",
        name: "Jose",
        ap: "Perez",
        am: "Gomez",
        departamento: "Lima",
        provincia: "Lima",
        distrito: "Lima",
        user: "joseperez",
        password: "123456",
        type: "admin"
    },
    

]


export const Search = () => {
  return (
    <div >
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
         {fakeData && fakeData.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{`${item.name} ${item.ap} ${item.am}`}</td>
                <td>{item.type}</td>
                <td>{item.departamento}</td>
                <td>{item.provincia}</td>
                <td>{item.distrito}</td>

              </tr>
            )
         })

         }
        </tbody>
      </table>

    </div>
  );
};
