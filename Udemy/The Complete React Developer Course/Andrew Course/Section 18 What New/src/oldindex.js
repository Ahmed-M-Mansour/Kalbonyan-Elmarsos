import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

// addExpense, removeExpense, editExpense, setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate
import { addExpense  } from './actions';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({description: 'Water Bill', amount: 300.15 ,createdAt: 1638871200000}));
store.dispatch(addExpense({description: 'Gaz Bill', amount: 150 ,createdAt: 1639303200000}));
store.dispatch(addExpense({description: 'Rent', amount: 200 ,createdAt: 1638352800000}));
store.dispatch(addExpense({description: 'VF Cash', amount: 350 ,createdAt: 1638698400000}));
// store.dispatch(setTextFilter('bill'));

ReactDOM.render(
    <Provider store={store} >
        <AppRouter />
    </Provider>,
    document.getElementById('app')
);