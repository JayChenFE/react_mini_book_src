class Lesson extends Component {

    onClickHandler() {
        const { lesson: { title }, index } = this.props
        console.log(`${index} - ${title}`)
    }

    render() {
        const { lesson: { title, description } } = this.props
        return (
            <div onClick={this.onClickHandler.bind(this)}>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        )
    }
}

class LessonsList extends Component {

    render() {
        return (
            <div>{(this.props.lessons.map((lesson, index) => (
                <Lesson key={index} index={index} lesson={lesson} />
            )))}
            </div>
        )
    }
}