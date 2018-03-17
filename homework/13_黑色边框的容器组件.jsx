// /* 你也许会需要样式 */
// .black - border{
//     border: 1px solid #000000;
// }

class BlackBorderContainer extends Component {
    /* TODO */
    render() {
        return (
            <div>
                {
                    this.props.children.map(child => {
                        return (<div className='black-border'>{child}</div>)
                    }
                    )}
            </div>
        )
    }
}