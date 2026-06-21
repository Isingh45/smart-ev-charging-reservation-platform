import { useState } from "react";
import "./App.css";

function App() {
  const [reservations, setReservations] = useState([]);

  const stations = [
    { id: 1, name: "Station A", status: "Available" },
    { id: 2, name: "Station B", status: "Occupied" },
    { id: 3, name: "Station C", status: "Available" },
  ];

  const reserveStation = (stationName) => {
    setReservations([
      ...reservations,
      {
        station: stationName,
        time: new Date().toLocaleString(),
      },
    ]);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Smart EV Charging Reservation Platform</h1>

      <h2>Available Charging Stations</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Station</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {stations.map((station) => (
            <tr key={station.id}>
              <td>{station.name}</td>
              <td>{station.status}</td>

              <td>
                {station.status === "Available" ? (
                  <button
                    onClick={() =>
                      reserveStation(station.name)
                    }
                  >
                    Reserve
                  </button>
                ) : (
                  <button disabled>
                    Unavailable
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 style={{ marginTop: "40px" }}>
        Reservations
      </h2>

      {reservations.length === 0 ? (
        <p>No reservations yet.</p>
      ) : (
        <ul>
          {reservations.map((reservation, index) => (
            <li key={index}>
              {reservation.station} reserved at{" "}
              {reservation.time}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;