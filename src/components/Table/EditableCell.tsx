import { FieldHookConfig, useField } from 'formik';
import React, { ComponentProps } from 'react';
import { englishDigitsToPersian } from '../../utils';

type Props = {} & ComponentProps<'input'> & FieldHookConfig<string>;

const EditableCell: React.FC<Props> = ({ ...props }) => {
  const [fieldProps] = useField(props);
  const { value, ...otherFieldProps } = fieldProps;
  return (
    <input
      {...props}
      value={englishDigitsToPersian(value)}
      {...otherFieldProps}
    />
  );
};

export default EditableCell;
