import React, { useEffect, useReducer } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import reducerRequest, { STATUS_REQUEST } from './reducer/reducerRequest';
import requestAction from './actions/request';
import './App.css';

const App = () => {
  const [{ status, records: monsters, searchField }, dispatch] = useReducer(
    reducerRequest,
    {
      records: [],
      status: STATUS_REQUEST.LOADING,
      searchField: '',
    }
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );
        const data = await response.json();
        dispatch({
          type: requestAction.GET_ALL_REQUEST_SUCCESS,
          payload: { records: data },
        });
      } catch (e) {
        dispatch({ type: requestAction.GET_ALL_REQUEST_FAIL });
      }
    };
    fetchData();
  }, []);

  const handleSearch = (e) => {
    dispatch({
      type: requestAction.SEARCH_FILTER,
      payload: { searchQuery: e.target.value },
    });
  };

  return (
    <div className="App">
      {status === STATUS_REQUEST.LOADING && <h3>is Loading ...</h3>}
      {status === STATUS_REQUEST.ERROR && <h3> error !</h3>}
      {status === STATUS_REQUEST.SUCCESS && (
        <div>
          <h1>Monsters Rolodex</h1>
          <SearchBox placeholder="search monster" handleSearch={handleSearch} />
          <CardList
            monsters={monsters.filter((elem) => {
              return searchField?.length === 0
                ? true
                : elem.name.toLowerCase().includes(searchField.toLowerCase());
            })}
          />
        </div>
      )}
    </div>
  );
};

export default App;
