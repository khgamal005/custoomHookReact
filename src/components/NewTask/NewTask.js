
import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from './../../hooks/use-http';

const NewTask = (props) => {
 
  const { isLoading, error, sendRequest:sendRequest } = useHttp();

 

  const enterTaskHandler = async (taskText) => {
    const createData=(data)=>{

      const generatedId = data.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };
      props.onAddTask(createdTask);
  
    }
  
    
    sendRequest({
      url:'https://task-adadb-default-rtdb.firebaseio.com/tasks.json',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
      },
        body: { text: taskText },
    },
    // createData.bind((null, taskText)))
    createData)
  


   
   
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
