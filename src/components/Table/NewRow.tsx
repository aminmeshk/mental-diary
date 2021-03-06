import React, { useCallback, useRef, useState } from 'react';
import useKeyboardShortcut from 'use-keyboard-shortcut';
import { DiaryItem } from '../../models';
import { englishDigitsToPersian, persianDigitsToEnglish } from '../../utils';
import Input from '../Input/Input';
import { TextArea } from '../TextArea';
import styles from './Table.module.css';

type Props = {
  onAdd: (newItem: DiaryItem) => void;
};

const resetInput = (element: { value: any }) => {
  element.value = '';
};

const NewRow: React.FC<Props> = ({ onAdd }) => {
  const [newItem, setNewItem] = useState<DiaryItem>({
    timestamp: '',
    description: '',
    pleasure: 0,
    skill: 0,
    isAvoiding: false,
  });

  const timeRef = useRef<HTMLInputElement>(null);
  const desRef = useRef<HTMLTextAreaElement>(null);
  const pleasureRef = useRef<HTMLInputElement>(null);
  const skillRef = useRef<HTMLInputElement>(null);

  const submit = useCallback(() => {
    onAdd({
      description: desRef.current?.value ?? '',
      isAvoiding: false,
      pleasure: parseFloat(
        persianDigitsToEnglish(pleasureRef.current?.value ?? '')
      ),
      skill: parseFloat(persianDigitsToEnglish(skillRef.current?.value ?? '')),
      timestamp: persianDigitsToEnglish(timeRef.current?.value ?? ''),
    });
    setNewItem({
      timestamp: '',
      description: '',
      pleasure: 0,
      skill: 0,
      isAvoiding: false,
    });
    resetInput(timeRef.current as HTMLInputElement);
    resetInput(desRef.current as HTMLTextAreaElement);
    resetInput(pleasureRef.current as HTMLInputElement);
    resetInput(skillRef.current as HTMLInputElement);
    timeRef.current?.focus();
  }, [onAdd]);

  useKeyboardShortcut(
    ['Meta', 'Enter'],
    () => {
      submit();
    },
    {
      overrideSystem: false,
      ignoreInputFields: false,
      repeatOnHold: false,
    }
  );

  useKeyboardShortcut(
    ['Tab'],
    () => {
      if (document.activeElement === skillRef.current) {
        submit();
        timeRef.current?.focus();
      }
    },
    {
      overrideSystem: false,
      ignoreInputFields: false,
      repeatOnHold: false,
    }
  );

  return (
    <div className={styles.row}>
      <div className={styles.colMin}>
        <Input
          className={`${styles.inputTime} ${styles.inputNew}`}
          value={englishDigitsToPersian(newItem.timestamp)}
          onUpdate={(v) =>
            setNewItem((p) => ({ ...p, timestamp: persianDigitsToEnglish(v) }))
          }
          ref={timeRef}
        />
      </div>
      <div className={styles.colBig}>
        <TextArea
          className={`${styles.inputDescription} ${styles.inputNew}`}
          spellCheck="false"
          value={newItem.description}
          onUpdate={(v) => setNewItem((p) => ({ ...p, description: v }))}
          ref={desRef}
        />
      </div>
      <div className={styles.colMin}>
        <Input
          className={`${styles.inputPleasure} ${styles.inputNew}`}
          value={englishDigitsToPersian(newItem.pleasure.toString())}
          onUpdate={(v) =>
            setNewItem((p) => ({
              ...p,
              pleasure: parseFloat(persianDigitsToEnglish(v)),
            }))
          }
          ref={pleasureRef}
        />
      </div>
      <div className={styles.colMin}>
        <Input
          className={`${styles.inputPleasure} ${styles.inputNew}`}
          value={englishDigitsToPersian(newItem.skill.toString())}
          onUpdate={(v) =>
            setNewItem((p) => ({
              ...p,
              skill: parseFloat(persianDigitsToEnglish(v)),
            }))
          }
          ref={skillRef}
        />
      </div>
    </div>
  );
};

export default NewRow;
