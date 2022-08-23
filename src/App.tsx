import './App.css'

const fetchUsernames = () => {
  const usernames = ["ytkg", "swfz", "kosnu", "luvsic-pt3", "ruritoBlogger", "umetsu"]
  const q = window.location.pathname.replace('/', '')

  if (q == '') { return usernames }

  try {
    return atob(q).split(',')
  } catch {
    return usernames
  }
}

function App() {
  const usernames = fetchUsernames()

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
              {usernames.map((username) => {
                return (
                  <tr>
                    <td>
                      <div className="avatar">
                        <div className="w-12 rounded-full">
                          <img src={`https://github.com/${username}.png`} alt={`${username}'s Picture`} />
                        </div>
                      </div>
                    </td>
                    <td><a className="App-link" href={`https://github.com/${username}`} target="_blank">{username}</a></td>
                    <td><img src={`https://ghchart.rshah.org/${username}`} alt={`${username}'s Github chart`} /></td>
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
