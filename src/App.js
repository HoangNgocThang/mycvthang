import React, { useEffect } from 'react';
import './App.css';

function App() {

  const [data, setData] = React.useState(
    [
      {
        id: 1,
        ques: "Ngẫu hứng",
        selected: true,
        isDone: false
      },
      {
        id: 2,
        ques: "Ốc vít",
        selected: false,
        isDone: false
      },
      {
        id: 3,
        ques: "Cá chép",
        selected: false,
        isDone: false
      },
      {
        id: 4,
        ques: "Báo thức",
        selected: false,
        isDone: false
      },
      {
        id: 5,
        ques: "Cờ đỏ sao vàng",
        selected: false,
        isDone: false
      },
      {
        id: 6,
        ques: "Gà trống",
        selected: false,
        isDone: false
      },
      {
        id: 7,
        ques: "Mạnh mẽ",
        selected: false,
        isDone: false
      },
      {
        id: 8,
        ques: "Ngoằn ngoèo",
        selected: false,
        isDone: false
      },
      {
        id: 9,
        ques: "Ngoằn ngoèo",
        selected: false,
        isDone: false
      },
      {
        id: 10,
        ques: "Trứng vịt lộn",
        selected: false,
        isDone: false
      }
    ],
  )

  const [dataCustom, setDataCustom] = React.useState([])

  const [dataSelect, setDataSelect] = React.useState([])

  const randomData = () => {
    const itemSelected = data.find(e => e.selected == true).ques.split(' ').join('').split('');
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
    setDataCustom(arrDone.map((e, i) => { return { value: e, selected: false, index: i } }))
  }

  useEffect(() => {
    randomData()
  }, [])

  useEffect(() => {
    randomData()
  }, [data])

  const onClickButton = () => {
    const s1 = data.find(e => e.selected == true).ques.split(' ').join('');
    const s2 = dataSelect.map(e => e.value).toString().split(',').join('')
    console.log("onClickButton", s1, s2)
    if (s1 == s2) {
      alert('Đáp án bạn chính xác')
      onNext()
    } else {
      alert('Đáp án bạn đã sai')
    }
  }

  const onClickItem = (item, index) => {
    console.log('onClickItem', item,)
    if (item.selected == false) {
      const arr = dataCustom.map(e => {
        if (
          e.value == item.value &&
          e.index == item.index
        ) {
          return { ...e, selected: true, index: index }
        }
        return e
      })
      setDataSelect(dataSelect.concat(item))
      setDataCustom(arr)
    }
  }

  const onNext = () => {
    setDataCustom([])
    let id = data.find(e => e.selected == true).id || 1;
    if (id < 10) {
      id++

      const newArr = data.map(e => {
        if (e.id == id) {
          return { ...e, selected: true }
        }
        return { ...e, selected: false }
      })

      console.log("new ", newArr)

      setData(newArr)

      setDataSelect([])
    } else {
      alert("Đã hết bộ câu hỏi, đợi admin bổ sung thêm nhé !!!")
    }
  }

  return (
    <div className="App">
      <h1>TÌM CHỮ - ĐOÁN TỪ</h1>
      <p>Câu hỏi:</p>
      <div style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>
        {
          data && data.map((e, i) => {
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
                  setDataSelect([])
                  setData(newArr)
                }}
                style={{
                  display: 'flex',
                  width: 20,
                  height: 20,
                  margin: 10,
                  background: 'orange',
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
          dataCustom && dataCustom.map((e, i) => {
            return (
              <div
                onClick={() => onClickItem(e, i)}
                style={{
                  backgroundColor: e.selected ? 'green' : 'silver',
                  display: 'flex',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  width: 50,
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                key={`${i}`}
              >
                <p>{e.value}</p>
              </div>
            )
          })
        }
      </div>

      <p>Đáp án của tôi:</p>

      <div style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>
        {
          dataSelect && dataSelect.map((e, i) => {
            return (
              <div
                onClick={onClickItem}
                style={{
                  display: 'flex',
                  backgroundColor: '#3390FF',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  width: 50,
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                key={`${i}`}
              >
                <p>{e.value}</p>
              </div>
            )
          })
        }
      </div>

      <button
        onClick={onClickButton}
        style={{ marginTop: 30, }}>
        <p>Kiểm tra</p>
      </button>

      <button
        onClick={() => {
          const newArr = dataCustom.map(e => { return { ...e, selected: false } })
          setDataCustom(newArr)
          setDataSelect([])
        }}
        style={{ marginTop: 30, marginLeft: 10 }}>
        <p>Làm mới</p>
      </button>

      <button
        onClick={() => {
          onNext()
        }}
        style={{ marginTop: 30, marginLeft: 10 }}>
        <p>Chuyển câu</p>
      </button>

    </div>
  );

}

export default App;
