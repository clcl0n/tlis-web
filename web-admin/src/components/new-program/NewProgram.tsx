import React, { useState } from 'react';
import IAddNewProgramDTO from '@shared/typings/dto/IAddNewProgramDTO';
import Axios from 'axios';

const NewProgram = () => {
    const [programDate, setProgramDate] = useState<Date>(new Date());
    const [programDescription, setProgramDescription] = useState<string>('');
    const [programTitle, setProgramTitle] = useState<string>('');

    const [newProgram, setNewProgram] = useState<IAddNewProgramDTO>({
        program: {
            date: Date.now().toString(),
            description: 'test',
            imageUrl: '',
            title: 'test'
        },
        programParts: [
            {
                airtime: Date.now(),
                description: '',
                title: ''
            }
        ]
    });

    const submit = () => {
        Axios.post(`http://${process.env.HOST_NAME}:${process.env.PORT}/api/program`, newProgram, {
            withCredentials: true
        })
            .then(res => {
                console.warn(res);
            })
            .catch(err => console.error(err));
    };

    return (
        <div className="columns is-centered">
            <div className="column is-10    ">
                <div className="field">
                    <label className="label">Title</label>
                    <div className="control">
                        <input
                            type="text"
                            className="input"
                            placeholder="Program Title"
                            onChange={ev => setProgramTitle(ev.target.value)}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Description</label>
                    <div className="control">
                        <textarea
                            className="textarea"
                            placeholder="Textarea"
                            onChange={ev => setProgramDescription(ev.target.value)}
                        ></textarea>
                    </div>
                </div>
                <div className="file is-boxed">
                    <label className="file-label">
                        <input className="file-input" type="file" name="resume" />
                        <span className="file-cta">
                            <span className="file-icon">
                                <i className="fas fa-upload"></i>
                            </span>
                            <span className="file-label">Choose a file…</span>
                        </span>
                    </label>
                </div>
                <button onClick={() => submit()}>Vytvor</button>
                <input type="date" name="" id="" />
                <input type="time" name="" id="" />
            </div>
        </div>
    );
};

export default NewProgram;
