
import {createPortal} from 'react-dom'
import {Component,Fragment} from 'react'
export default class Mask extends Component {
    constructor() {
        super()
        if(process.browser) {
            this.createMask()
        }
    }

    createMask = () => {
        this.node = document.createElement('div')
        document.body.appendChild(this.node)
    }

    render() {
        const { children, visible } = this.props
        return process.browser && visible && createPortal(
            <Fragment>
                <div
                  style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: '100',
                    backgroundColor: 'rgba(0, 0, 0, 0.4)'
                  }}
                />
              {children}
            </Fragment>,
            this.node
        )
    }
}