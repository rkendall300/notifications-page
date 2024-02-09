import './App.css';
import { useState } from 'react';
import avatarAngela from './assets/images/avatar-angela-gray.webp';
import avatarAnna from './assets/images/avatar-anna-kim.webp';
import avatarJacob from './assets/images/avatar-jacob-thompson.webp';
import avatarKimberly from './assets/images/avatar-kimberly-smith.webp';
import avatarMark from './assets/images/avatar-mark-webber.webp';
import avatarNathan from './assets/images/avatar-nathan-peterson.webp';
import avatarRizky from './assets/images/avatar-rizky-hasanuddin.webp';
import chessImage from './assets/images/image-chess.webp';

function App() {

  const [notificationCounter, setNotificationCounter] = useState(3);
  const [markRead, setMarkRead] = useState(false);
  const [angelaRead, setAngelaRead] = useState(false);
  const [jacobRead, setJacobRead] = useState(false);

  const markAllAsRead = () => {
    setMarkRead(true);
    setAngelaRead(true);
    setJacobRead(true);
    setNotificationCounter(0);
  }

  const decrementCounter = () => {
    if (notificationCounter !== 0) {
      setNotificationCounter(notificationCounter - 1);
    }
  }

  const markAsRead = (targetToMark) => {
    switch (targetToMark) {
      case "Mark":
        setMarkRead(true);
        decrementCounter();
        break;
      case "Angela":
        setAngelaRead(true);
        decrementCounter();
        break;
      case "Jacob":
        setJacobRead(true);
        decrementCounter();
        break;
      default:
        break;
    }
  }

  return (
    <main>
      <div id="backdrop">
        <div id="card">
          <div id="header">
            <h1 id="title">Notifications</h1>
            <div id="notification-number">{notificationCounter}</div>
            <button id="mark-read" onClick={markAllAsRead}>Mark all as read</button>
          </div>
          <div id="notification-container">
            <div className={markRead ? "notification" : "notification unread"} onClick={() => markAsRead("Mark")}>
              <img src={avatarMark} alt="avatar" className="avatar"></img>
              <div className="two-line">
                <p className="notify-text"><span className="bold">Mark Webber</span> reacted to your recent post <span className="heavier">My first tournament today!</span><span className={markRead ? "hide" : "unread-marker"}></span></p>
                <p className="time">1m ago</p>
              </div>
            </div>
            <div className={angelaRead ? "notification" : "notification unread"} onClick={() => markAsRead("Angela")}>
              <img src={avatarAngela} alt="avatar" className="avatar"></img>
              <div className="two-line">
                <p className="notify-text"><span className="bold">Angela Gray</span> followed you<span className={angelaRead ? "hide" : "unread-marker"}></span></p>
                <p className="time">5m ago</p>
              </div>
            </div>
            <div className={jacobRead ? "notification" : "notification unread"} onClick={() => markAsRead("Jacob")}>
              <img src={avatarJacob} alt="avatar" className="avatar"></img>
              <div className="two-line">
                <p className="notify-text"><span className="bold">Jacob Thompson</span> has joined your group <span className="group-name">Chess Club</span><span className={jacobRead ? "hide" : "unread-marker"}></span></p>
                <p className="time">1 day ago</p>
              </div>
            </div>
            <div className="notification" id="rizky-space">
              <img src={avatarRizky} alt="avatar" className="avatar"></img>
              <div className="two-line">
                <p className="notify-text"><span className="bold">Rizky Hasanuddin</span> sent you a private message</p>
                <p className="time">5 days ago</p>
              </div>
              <div id="message-container">
                <p id="private-message">Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.<span className="hide"></span></p>
              </div>
            </div>
            <div className="notification">
              <img src={avatarKimberly} alt="avatar" className="avatar"></img>
              <div className="two-line">
                <p className="notify-text" id="compact"><span className="bold">Kimberly Smith </span> commented on your picture<span className="hide"></span></p>
                <p className="time">1 week ago</p>
              </div>
              <img src={chessImage} alt="chess" id="chess-image"></img>
            </div>
            <div className="notification">
              <img src={avatarNathan} alt="avatar" className="avatar"></img>
              <div className="two-line">
                <p className="notify-text"><span className="bold">Nathan Peterson</span> reacted to your recent post <span className="heavier">5 end-game strategies to increase your win rate</span><span className="hide"></span></p>
                <p className="time">2 weeks ago</p>
              </div>
            </div>
            <div className="notification">
              <img src={avatarAnna} alt="avatar" className="avatar"></img>
              <div className="two-line">
                <p className="notify-text"><span className="bold">Anna Kim</span> left the group <span className="group-name">Chess Club</span><span className="hide"></span></p>
                <p className="time">2 weeks ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
