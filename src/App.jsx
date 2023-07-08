import React, { useState, useEffect } from "react";
import {v4} from 'uuid'
import {randomColor} from 'randomcolor'
import Draggable from "react-draggable";

function App() {

    const [item, setItem] = useState('')
    const [items, setItems] = useState(
        JSON.parse(localStorage.getItem('items')) || []
    )

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items))
    }, [items])

    const newItem = () => {
        if (item.trim() !== '') {
            const newItem = {
                id:v4(),
                item:item,
                color:randomColor({
                    luminosity: 'light'
                }),
                defaultPos:{
                    x: 500 + items.length * 10,
                    y: -500 + items.length * 10
                }
            }
            setItems((items) => [...items, newItem])
            setItem('')
        } else {
            alert('Enter something...')
            setItem('')
        }
    }

    const deleteItem = (itemID) => {
        setItems(items.filter((item) => item.id !== itemID))
    }

    const enterDown = (e) => {
        const code = e.onKeyDown || e.which
        code === 13 && newItem()
    }

    const updatePos = (data, item) => {
        const updateItems = [...items]
        const index = updateItems.indexOf(item)
        updateItems[index].defaultPos = {x:data.x, y:data.y}
        setItems(updateItems)
    }

    return (
      <div className="App">
        <div className="wrapper">
            <input
                value={item}
                type="text"
                placeholder="Enter something..."
                onChange={(e) => setItem(e.target.value)}
                onKeyDown={(e) => enterDown(e)}
            />
            <button
                className="enter"
                onClick={newItem}
                
            >ENTER</button>
        </div>
        {
            items.map((item, index) => {
                return (
                    <Draggable
                        key={item.id}
                        defaultPosition={item.defaultPos}
                        onStop={(_, data) => 
                            updatePos(data, item)
                        }
                    >
                        <div
                            style={{backgroundColor:item.color}}
                            className="todo__item"
                        >
                            {`${item.item}`}
                            <button
                                className="delete"
                                onClick={() => deleteItem(item.id)}
                            >X</button>
                        </div>
                        
                    </Draggable>
                )
            })
        }
      </div>
    );
  }

export default App

