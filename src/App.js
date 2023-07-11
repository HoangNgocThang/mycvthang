import React, { useEffect } from 'react';
import './App.css';

function App() {

  const [data, setData] = React.useState(
    [
      {
        id: 1,
        ques: "Ngẫu hứng",
        selected: true
      },
      {
        id: 2,
        ques: "Ốc vít",
        selected: false
      },
      {
        id: 3,
        ques: "Cá chép",
        selected: false
      },
      {
        id: 4,
        ques: "Báo thức",
        selected: false
      },
      {
        id: 5,
        ques: "Cờ đỏ sao vàng",
        selected: false
      }
    ],
  )

  const [dataCustom, setDataCustom] = React.useState([])

  const randomData = () => {
    const itemSelected = data.find(e => e.selected == true).ques.split(' ').join('').split('');
    // const itemSelected = itemSelected
    console.log('itemSelected', itemSelected, itemSelected.length)
    const arr = []
    for (let i = itemSelected.length - 1; i >= 0; i--) {
      arr.push(itemSelected[i])
    }
    console.log('arr', arr)
    const arr2 = [];
    const arr3 = [];
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 == 0) {
        arr2.push(arr[i])
      } else {
        arr3.push(arr[i])
      }
    }
    console.log('arr2', arr2)
    console.log('arr3', arr3)
    const arrDone = arr2.concat(arr3)
    console.log('arrDone', arrDone)
    setDataCustom(arrDone)
  }

  useEffect(() => {
    randomData()
  }, [])

  useEffect(() => {
    randomData()
  }, [data])

  return (
    <div className="App">
      <div style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>
        {
          data.map((e, i) => {
            return (
              <div
                key={`${i}`}
                onClick={(ele) => {
                  console.log('a')
                  const newArr = data.map((it, index) => {
                    if (e.id == it.id) {
                      return {
                        ...it,
                        selected: true
                      }
                    } else {
                      return {
                        ...it,
                        selected: false
                      }
                    }
                  })
                  console.log('a1', newArr)
                  setData(newArr)
                }}
                style={{
                  display: 'flex',
                  width: 20, height: 20,
                  margin: 10,
                  background: 'grey',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                <p>{`${e.id}`}</p>
              </div>
            )
          })
        }
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>
        {
          dataCustom.map((e, i) => {
            return (
              <div
                style={{
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  width: 50,
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                key={`${i}`}
              >
                <p>{e}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  );

}

export default App;
