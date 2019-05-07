import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import React from 'react';
import App from '../App';

jest.mock("../Api")

Enzyme.configure({adapter: new Adapter()});

describe('App', () => {
  const app = shallow(<App />);

  // it('initializes the states with contacts fetched with Api.getContacts()', () => {
  //   expect(app.state().stories).toEqual([{
  //     name: "Justyna",
  //            telephone: "111111",
  //            id: 1
  //   },
  //   {
  //     name: "kosia",
  //            telephone: "222",
  //            id: 2
  //   }]);
  // });
})