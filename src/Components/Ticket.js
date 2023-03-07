import { useLocation,Link } from 'react-router-dom';
import '../ticket.css'
import Helper from './Helper'

export default function Ticket(){

    const {state} = useLocation();
    const {isLoggedIn,getSessionStorage,clearStorage} = Helper();
    const ticketDetails = JSON.parse(getSessionStorage("ticketDetails"));
    const trainDetails = ticketDetails.trainId;
    const userDetails = ticketDetails.userid;

if(isLoggedIn && getSessionStorage("isTicketGenerated")=="true")
    return (
        <>
        <div class="ticket">
    <div class="ticket-header">
      <p className="mt-3">Railway Ticket</p>
    </div>
    <div class="ticket-details">
      <div>
        <label>Train No:</label>
        <p>{trainDetails.train_code}</p>
      </div>
      <div>
        <label>Train Name:</label>
        <p>{trainDetails.trainName}</p>
      </div>
    </div>
    <div class="ticket-details">
      <div>
        <label>Date:</label>
        <p>{ticketDetails.date}</p>
        <p className="text-muted">YYYY-MM-DD</p>
      </div>
      <div>
        <label>Seats Booked&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <p>{state.noOfPassengers}</p>
      </div>
    </div>
    <div class="ticket-details">
      <div>
        <label>Name:</label>
        <p>{userDetails.firstName+" "+userDetails.lastName}</p>
      </div>
      <div>
        <label>PNR:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <p>{ticketDetails.pnrno}</p>
      </div>
    </div>
    <div class="ticket-details">
      <div>
        <label>From:</label>
        <p>{trainDetails.startStation}</p>
      </div>
      <div>
        <label>To:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <p>{trainDetails.endStation}</p>
      </div>
    </div>
    <div class="ticket-details">
      <div>
        <label>Start Time:</label>
        <p>{trainDetails.startTime}</p>
      </div>
      <div>
        <label>End Time:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <p>{trainDetails.endTime}</p>
      </div>
    </div>
    <div class="ticket-footer mt-3">
      <p>Thank You for Travelling with Indian Railways</p>
    </div>
  </div>
  </>
    )
    else
    return <center><h1>Resource not found</h1></center>
}