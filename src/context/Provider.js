"use client";;import React, { useState } from 'react';
import SettingJson from './settingJson';

const MyProvider = ({ children }) => {
  const [value, setValue] = useState('Default Value');

  const updateValue = (newValue) => {
    setValue(newValue);
  };

  return (
    <SettingJson.Provider value={{ value, updateValue }}>
      {children}
    </SettingJson.Provider>
  );
};

export default MyProvider;