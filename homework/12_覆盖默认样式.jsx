const getDefaultStyledPost = (defaultStyle) => {
    return props => <p style={{ ...defaultStyle, ...props.style }} />;
}