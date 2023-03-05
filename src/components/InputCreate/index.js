import { memo, useState } from 'react';

function InputCreate({ name, value, onChange, errors }) {
    const [addInput, setAddInput] = useState(value);
    const handleAddInput = () => {
        setAddInput([...addInput, '']);
    };
    if (value & (value.length > 0)) {
        setAddInput(value);
    }
    const handleRemoveInput = () => {
        addInput.pop();
        setAddInput([...addInput]);
        value.pop();
    };

    return (
        <div className="mt-3">
            {addInput.map((item, index) => (
                <div key={item + index}>
                    <div className="flex mt-2 items-center">
                        <label className="w-20 text-green-500">Tập {index + 1}</label>
                        <input
                            type="text"
                            name={`${name}[${index}]`}
                            // value={item}
                            onChange={onChange}
                            className="w-full h-10 pl-4 rounded-2xl"
                        />
                    </div>
                    {errors && errors[index] && <span className="block text-red-500 text-center">{errors[index]}</span>}
                    {index + 1 === addInput.length && (
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
