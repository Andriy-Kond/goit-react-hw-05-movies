import React, { useContext, useState } from 'react';

export const ErrorContext = React.createContext();
// export const ImgUserContext = React.createContext();

// Власні контенти (щоби менше імпортувати у компонентах-приймачах):
export const useCustomErrorContext = () => {
  return useContext(ErrorContext);
};
// export const useCustomImgUserContext = () => {
//   return useContext(ImgUserContext);
// };

export const Context = ({ children }) => {
  const [error, setError] = useState(null);

  return (
    // В value можна передати як одне значення, так і об'єкт зі значенням і функцією

    // Передача лише значення (функцію доведеться прокидувати пропсами як зазвичай):
    // <DataContext.Provider value={data}>

    // Передача об'єктом:
    <ErrorContext.Provider value={{ error, setError }}>
      {/* <ImgUserContext.Provider
        value={{ imgUser: imgUser, setImgUser: setImgUser }}
      > */}
      {children}
      {/* </ImgUserContext.Provider> */}
    </ErrorContext.Provider>
  );
};

// import { useCustomDataContext, useCustomPageContext } from 'Context/Context';
// const { data, setData } = useCustomDataContext();
// const { page, setPage } = useCustomPageContext();
// const loadMoreBtnClick = () => setPage(prevState => prevState + 1);
