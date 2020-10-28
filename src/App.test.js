import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';
import DATA from './data/tasks.json'


test("App snapshot test", () => {
    const component = renderer.create(<App tasks = {DATA}/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})