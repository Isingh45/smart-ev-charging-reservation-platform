
import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [selectedStation, setSelectedStation] = useState("Station A");

  const [reservations, setReservations] = useState([]);

  const stations = [
    { id: 1, name: "Station A", status: "Available" },
    { id: 2, name: "Station B", status: "Occupied" },
    { id: 3, name: "Station C", status: "Available" },
  ];

  const createReservation = async () => {
    if (!name || !vehicle || !timeSlot) {
      alert("Please fill out all fields.");
      return;
    }

    const newReservation = {
      name,
      vehicle,
      station: selectedStation,
      timeSlot,
      createdAt: new Date().toLocaleString(),
    };

    try {
      const response = await fetch(
        "https://kfor00micb.execute-api.us-east-2.amazonaws.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newReservation),
        }
      );

      const result = await response.json();

      console.log("AWS Response:", result);

      setReservations((prev) => [...prev, newReservation]);

      alert("Reservation submitted successfully!");

      setName("");
      setVehicle("");
      setTimeSlot("");
      setSelectedStation("Station A");
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Failed to submit reservation.");
    }
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Smart EV Charging Reservation Platform</h1>

      <h2>Create Reservation</h2>

      <div style={{ marginBottom: "25px" }}>
        <div>
          <label>Name:</label>
          <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Vehicle:</label>
          <br />
          <input
            type="text"
            value={vehicle}
            onChange={(e) => setVehicle(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Time Slot:</label>
          <br />
          <input
            type="text"
            placeholder="2:00 PM - 3:00 PM"
            value={timeSlot}
            onChange={(e) => setTimeSlot(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Station:</label>
          <br />
          <select
            value={selectedStation}
            onChange={(e) => setSelectedStation(e.target.value)}
          >
            <option>Station A</option>
            <option>Station B</option>
            <option>Station C</option>
          </select>
        </div>

        <br />

        <button onClick={createReservation}>
          Create Reservation
        </button>
      </div>

      <h2>Available Charging Stations</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Station</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {stations.map((station) => (
            <tr key={station.id}>
              <td>{station.name}</td>
              <td>{station.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 style={{ marginTop: "40px" }}>Reservations</h2>

      {reservations.length === 0 ? (
        <p>No reservations yet.</p>
      ) : (
        <ul>
          {reservations.map((reservation, index) => (
            <li key={index}>
              <strong>Name:</strong> {reservation.name}
              <br />
              <strong>Vehicle:</strong> {reservation.vehicle}
              <br />
              <strong>Station:</strong> {reservation.station}
              <br />
              <strong>Time Slot:</strong> {reservation.timeSlot}
              <br />
              <strong>Created:</strong> {reservation.createdAt}
              <br />
              <br />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default App;