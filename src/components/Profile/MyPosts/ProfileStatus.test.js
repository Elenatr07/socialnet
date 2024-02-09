import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", ()=> {
    //проверка на то что в стайт поподают значения статуса
    test ("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="test status" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("test status")
    });
    //проверка на то что при editMode===false будет отражен span, а не input
    test ("after creation span should be displayed", () => {
        const component = create(<ProfileStatus status="test status" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNull()
    });
    //проверка на то что input отсутствует, проверка на его наличие ожидает выдачу ошибки
    test ("after creation input should not be displayed", () => {
        const component = create(<ProfileStatus status="test status" />);
        const root = component.root;
        
        expect(()=> {
            let input = root.findByType("input");
        }).toThrow()

    });
    //проверка на то что в span попадает правильный статус
    test ("status in span", () => {
        const component = create(<ProfileStatus status="test status" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe("test status")

    });
       //проверка на то что при editMode = true отражается input, а не span
       test ("after creating the editMode=true input should be displaid", () => {
        const component = create(<ProfileStatus status="test status" />);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input")
        expect(input.props.value).toBe("test status")

    });
     //проверка на вызов callback
     test ("callback should be called", () => {
        const moCallback = jest.fn();
        const component = create(<ProfileStatus status="test status" updateStatus={moCallback}/>);
        const instance = component.getInstance();
       instance.deactivateEditMode();
        expect(moCallback.mock.calls.length).toBe(1)

    });
})


