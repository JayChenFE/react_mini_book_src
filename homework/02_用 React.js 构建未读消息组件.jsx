// 函数 getNotificationsCount 已经可以直接调用
class Notification extends Component {
    render() {

        const msgCount = getNotificationsCount();
        const content = msgCount > 0 ? `有(${msgCount})条未读消息` : '没有未读消息';
        return (
            <span>{content}</span>
        )
    }
}