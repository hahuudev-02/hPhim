import React, { useState } from 'react';
import PropTypes from 'prop-types';

function InputCreate({ values }) {
    const [addInput, setAddInput] = useState([1]);
    const handleAddInput = () => {
        setAddInput([...addInput, addInput.length + 1]);
    };
    return (
        <div>
            <div className="">
                {addInput.map((item) => (
                    <div key={item} className="flex mt-2">
                        <label className="text-green-500">Tập {item}</label>
                        <input type="text" />
                        {item == addInput.length && <button onClick={handleAddInput} className="text-white">Add</button>}
                    </div>
                ))}
            </div>
        </div>
    );
}

InputCreate.propTypes = {};

export default InputCreate;
