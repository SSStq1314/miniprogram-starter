import http from '../optimizer/request';

export const addEvent = (data) => http.POST('/tbyEvent/event/addEvent', data, { custom: { isLoading: false } });

export const getHomePage = (data) => http.POST('/system/customPage/selectId', data, { custom: { isLoading: false } });
