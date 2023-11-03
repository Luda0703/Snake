import {FC, ChangeEvent, FormEvent, useState} from 'react';
// import {handlePlayerNameSubmit} from '../../options';
import './RegisterForm.css';

interface PlayerNameFormProps {
    onSubmit: (name: string, surname: string) => void;
  }

const RegisterForm: FC<PlayerNameFormProps> = ({onSubmit}) => {
    const [name, setName] = useState<string>('');
    const [surname, setSurname] = useState<string>('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(name, surname);
      };

    return (
        <form onSubmit={handleSubmit} autoComplete="off" className='container_form'>
      <label className='label'>
        Name
        <input type="text" value={name} className='input_label' onChange={(e: ChangeEvent) => setName(e.target.value)} required/>
      </label>
      <label className='label'>
        Surname
        <input type="text" value={surname}  className='input_label' onChange={(e: ChangeEvent) => setSurname(e.target.value)} required/>
      </label>
      <button type="submit" className='btn'>Start the game</button>
    </form>
    )
}

export default RegisterForm;
