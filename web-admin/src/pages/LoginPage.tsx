import React, { useState } from 'react';
import ILoginDTO from '@shared/typings/dto/ILoginDTO';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { isAuthorizedAction } from '@store/actions/authorized.actions';

const LoginPage = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const history = useHistory();
    const dispatch = useDispatch();

    const onUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const submit = () => {
        const loginDTO: ILoginDTO = {
            username,
            password
        };

        axios
            .post(`http://${process.env.HOST_NAME}:${process.env.PORT}/api/token`, loginDTO, { withCredentials: true })
            .then(res => {
                dispatch(isAuthorizedAction(true));
                history.push('/');
            });
    };

    return (
        <div>
            <label htmlFor="">
                UserName:
                <input onChange={ev => onUserNameChange(ev)} value={username} type="text" />
            </label>
            <label htmlFor="">
                Password:
                <input onChange={ev => onPasswordChange(ev)} value={password} type="password" />
            </label>
            <button onClick={() => submit()}>Login</button>
        </div>
    );
};

export default LoginPage;
