import './index.css'
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import NotificationItem from '../Notification'

const AlertNotifications = () => {
  const SuccessNotification = () => (
    <NotificationItem>
      <AiFillCheckCircle className="Success icons" />
      <div>
        <h1 className="success-text">Success</h1>
        <p>You can access all the files in the folder</p>
      </div>
    </NotificationItem>
  )

  const ErrorNotification = () => (
    <NotificationItem>
      <RiErrorWarningFill className="Error icons" />
      <div>
        <h1 className="error-text">Error</h1>
        <p>Sorry, you are not authorized to have access to delete the file</p>
      </div>
    </NotificationItem>
  )

  const WarningNotification = () => (
    <NotificationItem>
      <MdWarning className="Warning icons" />
      <div>
        <h1 className="warning-text">Warning</h1>
        <p>Viewers of this file can see comments and suggestions</p>
      </div>
    </NotificationItem>
  )

  const InfoNotification = () => (
    <NotificationItem>
      <MdInfo className="Info icons" />
      <div>
        <h1 className="info-text">Info</h1>
        <p>Anyone on the internet can view these files</p>
      </div>
    </NotificationItem>
  )

  return (
    <div className="bg-container">
      <h1 className="heading">Alert Notifications</h1>
      {SuccessNotification()}
      {ErrorNotification()}
      {WarningNotification()}
      {InfoNotification()}
    </div>
  )
}

export default AlertNotifications
