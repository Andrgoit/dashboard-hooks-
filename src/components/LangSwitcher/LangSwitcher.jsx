import Switch from 'react-switch';
import { useState } from 'react';

import { useContext } from 'react';
import { langContext } from 'LangContext';

const LangSwitcher = () => {
  const [checked, setChecked] = useState(false);

  const { switchLang } = useContext(langContext);

  const handleChange = nextChecked => {
    setChecked(nextChecked);
    switchLang();
  };

  return (
    <div className="example">
      <label>
        <Switch
          onChange={handleChange}
          checked={checked}
          className="react-switch"
          height={28}
          width={58}
          uncheckedIcon={
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                fontSize: 15,
                color: 'white',
                paddingRight: 2,
              }}
            >
              Eng
            </div>
          }
          checkedIcon={
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                fontSize: 15,
                color: 'white',
                paddingRight: 2,
              }}
            >
              Ru
            </div>
          }
        />
      </label>
    </div>
  );
};

export default LangSwitcher;
