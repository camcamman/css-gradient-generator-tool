import React from "react";
import DaBox from "./DaBox";

export default function App () {
    const [color, setColor] = React.useState({

        color1: '#a90909',
        color2: '#ffffff',
        angle: 50
    })

    function handleChang (e) {
        const {value, name} = e.target
        // console.log(color)
        setColor(prevColor => {
            return {
                ...prevColor,
                [name]: value
            }
        })
    }

    let backColors = '';
    for (let i = 1; color['color'+i]; ++i) {
        backColors += `,` + color['color'+i];
     }

     console.log(backColors);
    let backgroundColorBox = {
        // background: `linear-gradient(${color.angle}deg, ${color.color1} , ${color.color2})`,
        background: `linear-gradient(${color.angle}deg ${backColors})`,
        height: `225px`
    }

    return(
        <div>
            <h1 className="header">CSS Gradient Generator Tool</h1>

            <div className="boxForTheBoxes">
                <DaBox>
                    <div style={backgroundColorBox} className="coloredBox"></div>
                    <p className="codeText">background: linear-gradient({color.angle}deg, {backColors}); 
                        -moz-background: linear-gradient({color.angle}deg, {backColors}); 
                        -webkit: linear-gradient({color.angle}deg, {backColors})
                    </p>
                </DaBox>
                <DaBox>
                    <h1>Options</h1>
                    

                    
                    <form>
                        <div className="colorSetter">
                            <p className="color1">Color 1</p>
                            <p className="color1">The color is {color.color1}</p>

                            <input 
                            type="color" 
                            name="color1" 
                            value={color.color1} 
                            onChange={handleChang}
                            placeholder="Color1"
                            className="color1"
                            ></input>
                        </div>

                        <div className="colorSetter">
                            <p className="color2">Color 2</p>
                            <p className="color2">The color is {color.color2}</p>

                            <input 
                            type="color" 
                            name="color2"
                            value={color.color2}
                            onChange={handleChang}
                            placeholder="Color2"
                            className="color2"
                            ></input>
                        </div>

                        <div className="angleDiv">
                            <p>Angle</p>

                            <input 
                            type="number" 
                            name="angle"
                            value={color.angle}
                            onChange={handleChang}
                            placeholder="num"
                            className="angle"
                            ></input>
                        </div>
                    </form>
                </DaBox>
            </div>
        </div>
    )
}