import React from 'react';
import logo from './logo.svg';
import './App.css';
import Panel from './component/panel'

function App() {

  const [rooms, setRooms] = React.useState(0)
  const [adults, setAdults] = React.useState(0)
  const [children, setChildren] = React.useState(0)
  const [count, setCount] = React.useState(0);

  function inc(type) {
    switch (type) {
      case "ROOMS":
        if (rooms > 4) {
          setRooms(rooms)
        } else {
          setRooms(rooms + 1)
          if (adults < rooms + 1) {
            setAdults(adults + 1)
            setCount(count + 1)
          }
        }
        break;
      case "ADULTS":
        if (parseInt((count) / 4) + 1 > rooms && rooms < 5) {
          setRooms(rooms + 1)
          setAdults(adults + 1)
          setCount(count + 1)
        } else if (rooms < 5) {
          setAdults(adults + 1)
          setCount(count + 1)
        }

        //setCount(count + 1)
        break;
      case "CHILDREN":
        if (rooms * 4 - adults - children > 0) {
          setChildren(children + 1)
          setCount(count + 1)
        }
        //setCount(count + 1)
        break;
      default:
        break;
    }
    // setRooms(parseInt((count - 1) / 4) + 1)
  }

  function dec(type) {
    setCount(adults + children)
    switch (type) {
      case "ROOMS":
        if (rooms - 1 > 0) {
          if ((rooms - 1) * 4 >= count) {
            setRooms(rooms - 1)
          } else if ((rooms - 1) * 4 < count) {
            var exceed = count - (rooms - 1) * 4
            if (exceed > children) {
              var total = exceed - children
              setChildren(0)
              if (total > adults) { }
              else {
                setAdults(adults - total)
              }
              setCount(count - exceed)
              setRooms(rooms - 1)
            } else {
              setChildren(children - exceed)
              setCount(count - exceed)
              setRooms(rooms - 1)
            }
          }
        }
        break;
      case "ADULTS":
        if (adults - 1 >= rooms) {
          setAdults(adults - 1)
        }
        //setCount(count - 1)
        break;
      case "CHILDREN":
        if ((children - 1) >= 0) {
          setChildren(children - 1)
        }
        //setCount(count - 1)
        break;
      default:
        break;
    }

  }

  React.useEffect(() => {
    // setCount(adults + children)
    // if (count / 4 > rooms) {

    // }

    // if (rooms > adults) {
    //   setAdults(rooms)
    // }

  })

  return (
    <div className="App">
      <div className="box">
        <Panel name="ROOMS" data={rooms} increment={inc} decrement={dec} />
        <div className="divider" />
        <Panel name="ADULTS" data={adults} increment={inc} decrement={dec} />
        <div className="divider" />
        <Panel name="CHILDREN" data={children} increment={inc} decrement={dec} />
      </div>
      <table>
        <tr>
          <th>Rooms</th>
          <td>{rooms}</td>
        </tr>
        <tr>
          <th>Adults</th>
          <td>{adults}</td>
        </tr>
        <tr>
          <th>Children</th>
          <td>{children}</td>
        </tr>
        <tr>
          <th>Total number of People</th>
          <td>{count}</td>
        </tr>
      </table>
    </div>
  );
}

export default App;
