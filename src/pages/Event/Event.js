import React from "react";
import NavBar from "../../components/Nav/Nav";
import "./Event.css";

function Event() {
  return (
    <div className="event">
      <NavBar />
      <div className="section">
        <div className="sec-banner"></div>
        <div className="banner-card">
          <p className="banner-title">Pelumi</p>
          <p className="banner-details">A musical play by Muyiwa Adigun</p>
        </div>
      </div>
      <div className="event-detail">
        <EventCard
          title={"Event Description"}
          desc={`The play, "Pelumi," is a musical love story that revolves around Pelumi, a woman who was in a relationship with Adigun, a man with direction and purpose, but felt pressured by her mother to find love with someone else because of her mother's wealth and availability. You won’t want to miss this show on this year valentine.`}
        />
        <div>
          <p className="event-title">Date and Time</p>
          <div className="time-flex">
            <p className="event-desc">14th February, 2022</p>
            <p className="event-desc">5PM Prompt</p>
          </div>
        </div>
        <EventCard
          title={"Venue"}
          desc={"Oduduwa Hall, Obafemi Awolowo University, Ile-Ife, Osun State"}
        />
      </div>
      <div className="ticket-sec">
        <p className="tsec-title">Get Yout Ticket</p>
        <div className="tab-con">
          <TicketTab ticketType="Regular Ticket" price="N1000.00" color="red" />
          <TicketTab
            ticketType="Regular Ticket"
            price="N1000.00"
            color="blue"
          />
          <TicketTab
            ticketType="Regular Ticket"
            price="N1000.00"
            color="blue"
          />
          <TicketTab
            ticketType="Regular Ticket"
            price="N1000.00"
            color="blue"
          />
        </div>
      </div>
      <div className="event-detail">
        <div className="show">
          <p>MUYIWA ADIGUN SHOW </p>
          <div className="bottom">
            <p>
              Muyiwa Adigun Show, the producer and promoter of "PELUMI," is a
              non-governmental organization with the goal of uniting families
              and entertaining wisdom. Through entertainment, we hope to
              proclaim and promote the practice of sound family values, as well
              as educate young people on the dynamics of a fulfilling and decent
              relationship, thereby building a peaceful and productive society
              and nation.
            </p>
            <p className="bottom-p">
              We pursue this vision by organizing conferences, seminars, talk
              shows, online articles, and podcasts, as well as stage plays in
              places where young people congregate
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Event;

function EventCard({ desc, title }) {
  return (
    <div>
      <p className="event-title">{title}</p>
      <p className="event-desc">{desc}</p>
    </div>
  );
}

function TicketTab({ color, ticketType, price }) {
  return (
    <div className="t-tab">
      <div className="t-flex">
        <div className={`${color} `}></div>
        <p className="t-type">{ticketType}</p>
      </div>
      <p className="t-type w">{price}</p>
      <div className="q-flex">
        <p className="t-type">Quantity</p>
        <div className="q-box">
          <p className="zero">0</p>
          <div className="q-box-box"></div>
        </div>
      </div>
      <button className="tab-btn">Get Ticket</button>
    </div>
  );
}
