import { useState } from "react";
import AddEntityComponent from "./AddEntityComponent";
import ModalComponent from "./ModalComponent";
import { Button } from "react-bootstrap";
import NextEntityComponent from "./NextEntityComponent";

export enum ModalName { add = 'add', map = 'map' }

export default function ModalEntityExcel() {

    const [show, setShow] = useState(true);
    const [text, setText] = useState(ModalName.add);
    const [select, setSelect] = useState(text);

    const handleClose = () => setShow(false);
    const handleTextChange = (e) => setText(e.target.value);

    const handleNext = () => setSelect(text)

    const modalSelected = () => {

        switch (select) {
            case ModalName.add:
                return (<AddEntityComponent text={text} handleTextChange={handleTextChange}></AddEntityComponent>)

            case ModalName.map:
                return (<NextEntityComponent></NextEntityComponent>)

            default:
                return (<NextEntityComponent></NextEntityComponent>)
        }
    };

    const footer = (
        <>
            <Button onClick={handleClose} variant='secondary'>Cancel</Button>
            <Button onClick={handleNext} variant='primary'>Next</Button>
        </>
    )

    return (
        <ModalComponent modalTittle="Add Entities" modalFooter={footer} handleClose={handleClose} show={show} size="xl">
            {modalSelected()}
        </ModalComponent>
    );

}