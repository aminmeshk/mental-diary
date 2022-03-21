import { Form, Formik } from 'formik';
import React, { useCallback, useState } from 'react';
import { DiaryItem } from '../../models';
import { englishDigitsToPersian, persianDigitsToEnglish } from '../../utils';
import { Input } from '../Input';
import { TextArea } from '../TextArea';
import EditableCell from './EditableCell';
import EditableTextAreaCell from './EditableTextAreaCell';
import styles from './Table.module.css';

type Props = {
  value: DiaryItem;
  onUpdate: (item: DiaryItem) => void;
};

// const toUiModel = (diaryItem: DiaryItem) => {
//   return {
//     timestamp: diaryItem.timestamp,
//   }
// };

const EditableRow: React.FC<Props> = ({ value: initialValue, onUpdate }) => {
  const [item, setItem] = useState(initialValue);

  const updateItemProperty = useCallback(
    (fieldName: keyof DiaryItem, value: any) => {
      setItem((prevData) => ({
        ...prevData,
        [fieldName]: value,
      }));
      onUpdate(item);
    },
    [item, onUpdate]
  );

  return (
    <Formik
      initialValues={initialValue}
      onSubmit={(values) => {
        onUpdate(values);
      }}
    >
      <Form>
        <div className={styles.row}>
          <div className={styles.colMin}>
            {/* <Input
              value={englishDigitsToPersian(item.timestamp)}
              onUpdate={(v) =>
                updateItemProperty('timestamp', persianDigitsToEnglish(v))
              }
              className={styles.inputTime}
            /> */}
            <EditableCell
              className={styles.inputTime}
              name="timestamp"
              type="text"
              placeholder=""
            />
          </div>
          <div className={styles.colBig}>
            {/* <TextArea
              value={item.description}
              onUpdate={(v) => updateItemProperty('description', v)}
              className={styles.inputDescription}
              spellCheck="false"
            /> */}
            <EditableTextAreaCell
              className={styles.inputDescription}
              spellCheck="false"
              name="description"
              type="text"
              placeholder=""
            />
            <div className={styles.printHelper}>{item.description}</div>
          </div>
          <div className={styles.colMin}>
            <Input
              value={englishDigitsToPersian(item.pleasure.toString())}
              onUpdate={(v) =>
                updateItemProperty(
                  'pleasure',
                  parseFloat(persianDigitsToEnglish(v))
                )
              }
              className={styles.inputPleasure}
            />
          </div>
          <div className={styles.colMin}>
            <Input
              value={englishDigitsToPersian(item.skill.toString())}
              onUpdate={(v) =>
                updateItemProperty(
                  'skill',
                  parseFloat(persianDigitsToEnglish(v))
                )
              }
              className={styles.inputPleasure}
            />
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default EditableRow;
