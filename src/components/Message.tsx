// @flow 
import * as React from 'react';
import {useEffect} from "react";

type Props = {
    msg: string
};
export const Message = ({msg}: Props) => {

    console.log("message component body ...")

    useEffect(() => {
        console.log('component mount')

        return () => {
            console.log('component unmount')
        }
    }, [])

    return (
        <div>
            {msg}
        </div>
    );
};