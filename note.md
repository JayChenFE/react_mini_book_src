## 生命周期

![](https://raw.githubusercontent.com/JayChenFE/pic/master/other/react_component_lifecycle.jpg)

### 挂载和删除

```js
-> constructor()
-> componentWillMount()
-> render()
// 然后构造 DOM 元素插入页面
-> componentDidMount()
// ...
// 即将从页面中删除
-> componentWillUnmount()
// 从页面中删除
```

- `componentWillMount`：组件挂载开始之前，也就是在组件调用 `render` 方法之前调用。
- `componentDidMount`：组件挂载完成以后，也就是 DOM 元素已经插入页面后调用。
- `componentWillUnmount`：组件对应的 DOM 元素从页面中删除之前调用。

### 作用

- `componentWillMount`：组件启动的动作，包括像 Ajax 数据的拉取操作、一些定时器的启动等
- `componentDidMount`：有些组件的启动工作是依赖 DOM 的，例如动画的启动，而 `componentWillMount` 的时候组件还没挂载完成，所以没法进行这些启动工作，这时候就可以把这些操作放在 `componentDidMount` 当中。
- `componentWillUnmount`：作用就是在组件销毁的时候，做这种清场的工作。例如清除该组件的定时器和其他的数据清理工作。

## ref

有些时候我们还是需要和 DOM 打交道。比如说你想进入页面以后自动 focus 到某个输入框，你需要调用 `input.focus()` 的 DOM API，比如说你想动态获取某个 DOM 元素的尺寸来做后续的动画，等等。

> **能不用 ref 就不用**。特别是要避免用 `ref` 来做 React.js 本来就可以帮助你做到的页面自动更新的操作和事件监听。多余的 DOM 操作其实是代码里面的“噪音”，不利于我们理解和维护。

```js
class AutoFocusInput extends Component {
  componentDidMount () {
    this.input.focus()
  }

  render () {
    return (
      <input ref={(input) => this.input = input} />
    )
  }
}

ReactDOM.render(
  <AutoFocusInput />,
  document.getElementById('root')
)
```

ref的属性值是一个函数,这个函数的入参是dom元素

## props.children

调用:

```js
ReactDOM.render(
  <Card>
    <h2>React.js 小书</h2>
    <div>开源、免费、专业、简单</div>
    订阅：<input />
  </Card>,
  document.getElementById('root')
)
```

内部:

```js
class Card extends Component {
  render () {
    return (
      <div className='card'>
        <div className='card-content'>
          {this.props.children}
        </div>
      </div>
    )
  }
}
```

`this.props.children`代表外面调用处的

```js
<h2>React.js 小书</h2>
<div>开源、免费、专业、简单</div>
订阅：<input />
```

`props.children是一个数组`,可以在组件内部把数组中的 JSX 元素安置在不同的地方

## dangerouslySetHTML



```js
 render () {
    return (
      <div
        className='editor-wrapper'
        dangerouslySetInnerHTML={{__html: this.state.content}} />
    )
  }
```

`dangerouslySetInnerHTML` 传入一个对象，这个对象的 `__html` 属性值就相当于元素的 `innerHTML`，这样我们就可以动态渲染元素的 `innerHTML` 结构了。

## style

```js
<h1 style={{fontSize: '12px', color: this.state.color}}>React.js 小书</h1>
```

`style` 接受一个对象，这个对象里面是这个元素的 CSS 属性键值对，原来 CSS 属性中带 `-` 的元素都必须要去掉 `-` 换成驼峰命名，如 `font-size` 换成 `fontSize`，`text-align` 换成 `textAlign`。

## 高阶组件（Higher-Order Components）

***高阶组件就是一个函数，传给它一个组件，它返回一个新的组件。***

```js
const NewComponent = higherOrderComponent(OldComponent)
```

***其实就是为了组件之间的代码复用***。组件可能有着某些相同的逻辑，把这些逻辑抽离出来，放到高阶组件中进行复用。**高阶组件内部的包装组件和被包装组件之间通过 `props` 传递数据**。

```js
Post = loadAndRefresh('/post')(Post)
```

这种方式其实是 React 里面高阶组件常用的套路，在 React-redux 里面就用到。`loadAndRefresh` 是一个函数，这个函数接受一个参数，然后返回一个函数，返回的函数接受组件作为参数，然后再返回一个组件。