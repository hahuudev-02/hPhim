import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';

function Paging(props) {
    const [paging, setPaging] = useState(1);

    const arr = [1, 2, 3, 4, 5, 6, 7];
    return (
        <div className="w-full h-14 flex-center">
            <ul className="max-w-[400px] flex space-x-2">
                <li className="flex-center w-8 text-white p-2 rounded-md hover:border cursor-pointer">
                    <DoubleLeftOutlined className="mt-0.5" />
                </li>

                {arr.map((index, item) => {
                    let activePaging;
                    if (activePaging == index) {
                        activePaging = 'bg-red-500';
                    }
                    return (
                        <li
                            className={
                                'flex-center min-w-[32px] text-white p-2 rounded-md hover:border cursor-pointer ' + `${activePaging}`
                            }
                            key={index}
                            onClick={() => setPaging(index)}
                        >
                            {index}
                        </li>
                    );
                })}

                <li className="flex-center w-8 text-white p-2 rounded-md hover:border cursor-pointer">
                    <DoubleRightOutlined className="mt-0.5" />
                </li>
            </ul>
        </div>
    );
}

Paging.propTypes = {};

export default memo(Paging);
