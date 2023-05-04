import React from "react";
import renderer from "react-test-renderer";
import Header from "../src/Header";



function toJson(component: renderer.ReactTestRenderer) {
  const result = component.toJSON()
  expect(result).toBeDefined()
  expect(result).not.toBeInstanceOf(Array)
  return result as renderer.ReactTestRendererJSON
}


test('Check the App components', () => {
    const AppComponent = renderer.create(
        <Header/>
    );

    let tree = toJson(AppComponent);
    console.log(tree);
    expect(tree).toMatchSnapshot();
});


