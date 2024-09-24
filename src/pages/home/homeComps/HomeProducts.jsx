import React from 'react'
import elevatorScreen from '../products/elevator_screen.png';
import hangingDisplay from '../products/hanging_display.png';
import interactiveCoffee from '../products/interactive_coffee.png';
import interactiveLCD from '../products/interactive_LCD.png';
const HomeProducts = () => {
    return (
        <section className='h_section'>
            <div className="partners_info_section">
                <h2 className='mt'>TRENDING PRODUCTS</h2>
            </div>
            <div className='home_products_cards_container'>
                <div className="home_products_container">
                    <div className="card">
                        <div className="imgBx">
                            <img src={elevatorScreen} alt="Elevator screen Display LCD 18.5 + 10.1" />
                        </div>
                        <div className="contentBx">
                            <h2>Elevator screen</h2>
                            <div className="size">
                                <h3>10.1 Inches</h3>
                            </div>
                            <div className="color">
                                <h3>Display LCD 18.5 + 10.1</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home_products_container">
                    <div className="card">
                        <div className="imgBx">
                            <img src={hangingDisplay} alt="Hanging Display Doubled Sided Glass Frame" />
                        </div>
                        <div className="contentBx">
                            <h2>Hanging Display</h2>
                            <div className="size">
                                <h3>43 Inches</h3>
                            </div>
                            <div className="color">
                                <h3>Doubled Sided Glass Frame</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home_products_container">
                    <div className="card">
                        <div className="imgBx">
                            <img src={interactiveCoffee} alt="Interactive Coffee Table" />
                        </div>
                        <div className="contentBx">
                            <h2>Interactive Table</h2>
                            <div className="size">
                                <h3>Multiple Sizes</h3>
                            </div>
                            <div className="color">
                                <h3>Interactive Coffee Table</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home_products_container">
                    <div className="card">
                        <div className="imgBx">
                            <img src={interactiveLCD} alt="Interactive LCD screens" />
                        </div>
                        <div className="contentBx">
                            <h2>LCD screens</h2>
                            <div className="size">
                                <h3>Multiple Sizes</h3>
                            </div>
                            <div className="color">
                                <h3>Interactive LCD screens</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeProducts
