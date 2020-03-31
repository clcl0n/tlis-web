import React, { useEffect } from 'react';
import axios from 'axios';
import NewProgram from '@components/new-program/NewProgram';

const ManageProgramPage = () => {
    useEffect(() => {
        axios.get('http://127.0.0.1:8081/api/heartbeat').then(() => console.warn('hearthbeat'));
    }, []);

    return (
        <div>
            <NewProgram />
        </div>
    );
};

export default ManageProgramPage;
