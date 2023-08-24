import {useEffect, useState} from 'react';
import {TextInput} from 'react-native';

interface IScreenProps {
  onSearch: (search: string) => void;
}

export function SearchInput({onSearch}: IScreenProps) {
  const [search, setSearch] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      onSearch(search);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [search, onSearch]);

  return (
    <TextInput
      style={{
        borderBottomWidth: 1,
        paddingVertical: 6,
        borderColor: '#bdbdbd',
      }}
      value={search}
      onChangeText={text => setSearch(text)}
      placeholder="Buscar"
    />
  );
}
