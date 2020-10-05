import React, { Component } from 'react';

class Demo extends Component {
    constructor() {
        super();
        this.state = {
            regsiters: null
        }
    }

    componentDidMount() {

        fetch('http://localhost:5000/Customer_Estimate_Flow').then(resp => {
            resp.json().then((result) => {
                console.warn(result)
                this.setState({ regsiters: result })
            })
        })
    }

    render() {
        // const registers = this.state.registers;

        return (
            <div><h4>Demo</h4>
                {
                    this.state.regsiters ?
                        this.state.regsiters.map((item, i) => <div key={i}>
                            {item.items.rooms.map((data) =>
                                <div>
                                    {console.log(data.categories)}
                                    {data.id}
                                    {/* {data.categories} */}
                                    {/* {data.categories.map((data1) => 
                                    <div>
                                        {console.log(data1)}
                                    </div>
                                    )} */}
                                </div>
                            )}
                        </div>
                        )
                        :
                        null
                }
                {/* {this.state.regsiters.name} */}
            </div>
        );
    }
}

export default Demo;