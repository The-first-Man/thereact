import React from 'react';
class Lifecycle extends React.Commponent {
    constructor(props) {
        super(props)
        this.state = {
            title: '123'
        }
    }
    testClick() {
        console.log(1)
    }
    render() {
        console.log(this)
        return (
            <div onClick={
                this.testClick
            }>生命周期</div>
        )
    }
}
export default Lifecycle