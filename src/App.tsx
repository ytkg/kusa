import './App.css'

function App() {
  const users = [
    { name: "ytkg", avater: "https://avatars.githubusercontent.com/u/12048864?v=4" },
    { name: "swfz", avater: "https://avatars.githubusercontent.com/u/4104038?v=4" },
    { name: "kosnu", avater: "https://avatars.githubusercontent.com/u/45652024?v=4" },
    { name: "luvsic-pt3", avater: "https://avatars.githubusercontent.com/u/97280024?v=4" },
    { name: "ruritoBlogger", avater: "https://avatars.githubusercontent.com/u/40134104?v=4" },
    { name: "umetsu", avater: "https://avatars.githubusercontent.com/u/4004120?v=4" },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Icon</th>
                <th>Name</th>
                <th>Kusa</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <tr>
                    <td>
                      <div className="avatar">
                        <div className="w-12 rounded-full">
                          <img src={user.avater} alt={`${user.name}'s Github chart`} />
                        </div>
                      </div>
                    </td>
                    <td><a className="App-link" href={`https://github.com/${user.name}`} target="_blank">{user.name}</a></td>
                    <td><img src={`http://ghchart.rshah.org/${user.name}`} alt={`${user.name}'s Github chart`} /></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </header>
    </div>
  )
}

export default App
