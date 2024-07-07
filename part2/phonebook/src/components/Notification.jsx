/* eslint-disable react/prop-types */
const Notification = ({message, type}) => {
    if (message === null) {
        return null
    }
    let className = 'success'
    if (type === 'error') {
        className = 'error'
    }
    return <div className={className}>{message}</div>
}

export default Notification