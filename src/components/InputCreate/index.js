import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import { connect, Form, Field } from 'formik';

function InputCreate({ name, value, onChange, errors }) {
    const [addInput, setAddInput] = useState([1]);
    const handleAddInput = () => {
        setAddInput([...addInput, addInput.length + 1]);
    };
    const handleRemoveInput = () => {
        addInput.pop();
        setAddInput([...addInput]);
        value.pop();
    };
    return (
        <div className="mt-3">
            {addInput.map((item, index) => (
                <div key={item}>
                    <div className="flex mt-2 items-center">
                        <label className="w-20 text-green-500">Tập {item}</label>
                        <input
                            type="text"
                            name={`${name}[${index}]`}
                            // value={//value[index]}
                            onChange={onChange}
                            className="w-full h-10 pl-4 rounded-2xl"
                        />
                    </div>
                    {errors && errors[index] && <span className="block text-red-500 text-center">{errors[index]}</span>}

                    {item == addInput.length && (
                        <div className="mt-4 w-full flex-center">
                            <button onClick={handleAddInput} className="w-20 h-10 bg-yellow rounded-3xl text-white">
                                Add
                            </button>
                            {addInput.length > 1 && (
                                <button
                                    onClick={handleRemoveInput}
                                    className="ml-4 w-20 h-10 bg-yellow rounded-3xl text-white"
                                >
                                    Remove
                                </button>
                            )}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

InputCreate.propTypes = {};

export default memo(InputCreate);
