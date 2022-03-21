import { FieldHookConfig, useField } from 'formik';
import React, { ComponentProps } from 'react';
import TextareaAutoSize from 'react-textarea-autosize';

type Props = {} & ComponentProps<typeof TextareaAutoSize> &
  FieldHookConfig<string>;

const EditableTextAreaCell: React.FC<Props> = ({ ...props }) => {
  const [fieldProps] = useField(props);
  return <TextareaAutoSize {...props} {...fieldProps} />;
};

export default EditableTextAreaCell;
