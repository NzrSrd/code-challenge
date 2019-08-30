import React , { Component } from "react";


class ProductDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        this.displayEffect();
    }

    displayEffect() {
        const products = this.props.dataHits;

        this.myInterval = setInterval(() => {
            this.setState(prevState => ({
                count: prevState.count + 1,
                name: products.name,
                image: products.image
            }))
        }, 2000);
        return () => clearInterval(this.myInterval)
    }

    render() {
        let products = this.state;
        if(this.state !== {}) {
            return(
                <div className="product-container">
                    <div className="list-product">
                        <div className="product">
                            <img className="product-image"
                                 src={products.image} alt=""/>
                            <h1 className="product-name">
                                <strong>{products.name}</strong>
                            </h1>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default ProductDisplay;