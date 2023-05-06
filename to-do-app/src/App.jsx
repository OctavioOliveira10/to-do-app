import { Button, Checkbox, TextField } from "@mui/material"
import "./style.css"
import { useState } from "react"
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


function App() {
  const [textTarefa, setTextTarefa] = useState("");
  const [listTarefa, setListTarefa] = useState([])

  /*const teste = [
    {
      id: 1,
      title: "teste"
    },
    {
      id: 1,
      title: "teste2"
    },
  ]*/

  function mostrarvalor() {

    if(!textTarefa){
      alert('Nome obrigatório')
    }else{
    setListTarefa((old) => [...old, {id:Date.now(), title: textTarefa, indFinished: false}]);
    setTextTarefa("");
    }
  }

  function apagar() {
    setListTarefa([]);
  }

  function handleDeletetask(idTask) {
    
    setListTarefa(listTarefa.filter(el => el.id !== idTask))
  }

  function handleFinishedTask(idTask){
    setListTarefa(listTarefa.map((task) => task.id === idTask ? {...task, indFinished: !task.indFinished}: task ))
  }


  return (
    <>
      <div className="container-principal">
        <form className="form-container">
          <TextField value={textTarefa} id="standard-basic" label="Tarefa"
            variant="standard" placeholder="Digite a tarefa"
            onChange={({ target }) => setTextTarefa(target.value)} />
          <Button onClick={mostrarvalor} variant="contained" >Add</Button>
          <Button onClick={apagar} variant="contained" color="secondary" >Delete</Button>

          {console.log(listTarefa)}
        </form>

      </div>
        <div className="container-task">
        <div className="dadosArray">
          {
            listTarefa.map((tarefa) => (
              <div key={tarefa.id}>
                <div className="task-principal">
                  
                  <div className="task">
                  <Checkbox onClick={() => handleFinishedTask(tarefa.id)}/>

                    <span style={{color: tarefa.indFinished ? 'red' : " "}}>{tarefa.title}</span>
                  
                  </div>
                  <HighlightOffIcon onClick={() => handleDeletetask(tarefa.id)} className="icon-delete"/>
                </div>


                <div className="linha"></div>
              </div>
            
            ))
          }


        </div>
      </div>
    </>
  )
}

export default App
