import React, { useState } from 'react'

const HideAndShow = () => {
    const [divs, setDivs] = useState({
        div1: true,
        div2: true,
        div3: true,
        div4: true
    })


    const HandleDivs = (divKey) => {
        setDivs((prev) => (
            {
                ...prev,
                [divKey]: !prev[divKey]
            }
        ))
    }
    console.log('divss', divs)

    return (
        <div>
            <div>
                <button onClick={() => HandleDivs('div1')}>{divs.div1 ? 'Hide Me' : 'Show Me'}</button>
                {divs.div1 && <div>This is div 1 element</div>}

            </div>

            <div>
                <button onClick={() => HandleDivs('div2')} >{divs.div2 ? 'Hide Me' : 'Show Me' }</button>
                {divs.div2 && <div>This is div 2 element</div>}
            </div>

            <div>
                <button onClick={() => HandleDivs('div3')}>{divs.div3 ? 'Hide Me' : 'Show Me' }</button>
                {divs.div3 && <div>This is div 3 element</div>}
            </div>

            <div>
                <button onClick={() => HandleDivs('div4')}>{divs.div4 ? 'Hide Me' : 'Show Me' }</button>
                {divs.div4 && <div>This is div 4 element</div>}
            </div>

        </div>
    )
}

export default HideAndShow