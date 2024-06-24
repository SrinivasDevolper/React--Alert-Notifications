import {GrFormClose} from 'react-icons/gr'

import './index.css'

const NotificationItem = props => {
  const {children} = props
  return (
    <div className="norification">
      <div className="notification-items">{children}</div>
      <GrFormClose className="delete" />
    </div>
  )
}

export default NotificationItem
