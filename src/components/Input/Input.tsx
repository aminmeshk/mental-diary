import React, { useState } from 'react';

type Props = {
  value: string;
  onUpdate: (data: string) => void;
} & React.ComponentPropsWithRef<'input'>;

const Input: React.FC<Props> = React.forwardRef(({
  value: initialValue,
  onUpdate,
  ...otherProps
}, ref) => {
  const [value, setValue] = useState(initialValue);
  return (
    <input
      {...otherProps}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={(e) => {onUpdate(e.target.value)}}
      ref={ref}
    />
  );
});

export default Input;
