import React, { useState } from 'react';
import TextareaAutoSize from 'react-textarea-autosize';

type Props = {
  value: string;
  onUpdate: (data: string) => void;
} & React.ComponentPropsWithRef<typeof TextareaAutoSize>;

const TextArea: React.FC<Props> = React.forwardRef(({
  value: initialValue,
  onUpdate,
  ...otherProps
}, ref) => {
  const [value, setValue] = useState(initialValue);
  return (
    <TextareaAutoSize
      {...otherProps}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={(e) => onUpdate(e.target.value)}
      ref={ref}
    />
  );
});

export default TextArea;
