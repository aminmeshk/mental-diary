import React, { useCallback, useState } from 'react';
import { DiaryItem } from '../../models';
import styles from './Table.module.css';
import NewRow from './NewRow';
import EditableRow from './EditableRow';

type Props = {};

const contents: DiaryItem[] = [
  {
    timestamp: '12:30',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
    pleasure: 1,
    isAvoiding: false,
    skill: 3.5,
  },
  {
    timestamp: '1:00',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
    pleasure: 4.5,
    isAvoiding: false,
    skill: 3.5,
  },
  {
    timestamp: '1:00',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که  استفاده قرار گیرد.',
    pleasure: 4.5,
    isAvoiding: false,
    skill: 3.5,
  },
  {
    timestamp: '2:15',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
    pleasure: 5,
    isAvoiding: false,
    skill: 3.5,
  },
];

const Table: React.FC<Props> = () => {
  const [data, setData] = useState(contents);

  const updateItem = useCallback((updatedItem: DiaryItem, index: number) => {
    setData((prevData) => {
      const clonedData = [...prevData];
      clonedData.splice(index, 1, updatedItem);
      return clonedData;
    });
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const save = useCallback((theData) => {
    localStorage.setItem('data', JSON.stringify(theData));
    console.log('saved');
  }, []);

  const addItem = useCallback((item: DiaryItem) => {
    // console.log('newItem', item);
    setData((prev) => [...prev, item]);
  }, []);

  return (
    <div className={styles.table}>
      <div>
        <div className={styles.row}>
          <div
            className={`${styles.colMin} ${styles.header}`}
          >
            زمان
          </div>
          <div
            className={`${styles.colBig} ${styles.header}`}
          >
            توضیحات
          </div>
          <div
            className={`${styles.colMin} ${styles.header}`}
          >
            لذت
          </div>
          <div
            className={`${styles.colMin} ${styles.header}`}
          >
            تسلط
          </div>
        </div>
      </div>
      <div>
        {data.map((item, i) => (
          <EditableRow
            key={i}
            value={item}
            onUpdate={(updatedItem) => updateItem(updatedItem, i)}
          />
        ))}
        <NewRow onAdd={addItem} />
      </div>
    </div>
  );
};

export default Table;
