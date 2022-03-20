import React, { useCallback, useState } from 'react';
import { DiaryItem } from '../../models';
import { englishDigitsToPersian, persianDigitsToEnglish } from '../../utils';
import { Input } from '../Input';
import { TextArea } from '../TextArea';
import styles from './Table.module.css';

type Props = {
  value: DiaryItem;
  onUpdate: (item: DiaryItem) => void;
};

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
    <tr className={styles.row}>
      <td className={styles.colMin}>
        <Input
          value={englishDigitsToPersian(item.timestamp)}
          onUpdate={(v) =>
            updateItemProperty('timestamp', persianDigitsToEnglish(v))
          }
          className={styles.inputTime}
        />
      </td>
      <td className={styles.colBig}>
        <TextArea
          value={item.description}
          onUpdate={(v) => updateItemProperty('description', v)}
          className={styles.inputDescription}
          spellCheck="false"
        />
        <div className={styles.printHelper}>{item.description}</div>
      </td>
      <td className={styles.colMin}>
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
      </td>
      <td className={styles.colMin}>
        <Input
          value={englishDigitsToPersian(item.skill.toString())}
          onUpdate={(v) =>
            updateItemProperty('skill', parseFloat(persianDigitsToEnglish(v)))
          }
          className={styles.inputPleasure}
        />
      </td>
    </tr>
  );
};

export default EditableRow;
