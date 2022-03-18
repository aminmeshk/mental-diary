import React, { useState } from "react";
import styles from "./Table.module.css";
import TextareaAutoSize from "react-textarea-autosize";
import useKeyboardShortcut from "use-keyboard-shortcut";

type Props = {};

const contents = [
  {
    time: "۱۲:۳۰",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    pleasure: "۱",
  },
  {
    time: "۱:۰۰",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    pleasure: "۴.۵",
  },
  {
    time: "۱:۰۰",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که  استفاده قرار گیرد.",
    pleasure: "۴.۵",
  },
  {
    time: "۲:۱۵",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    pleasure: "۵",
  },
];

const Table: React.FC<Props> = () => {
  const [data, setData] = useState(contents);
  const { flushHeldKeys } = useKeyboardShortcut(
    ["Meta", "Enter"],
    (shortcutKeys) => console.log(shortcutKeys),
    {
      overrideSystem: false,
      ignoreInputFields: false,
      repeatOnHold: false,
    }
  );

  return (
    <table className={styles.styledTable}>
      <thead>
        <tr>
          <th
            className={`${styles.styledTableCol1} ${styles.styledTableHeader}`}
          >
            زمان
          </th>
          <th
            className={`${styles.styledTableCol2} ${styles.styledTableHeader}`}
          >
            توضیحات
          </th>
          <th
            className={`${styles.styledTableCol3} ${styles.styledTableHeader}`}
          >
            لذت
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((c, i) => (
          <tr key={i}>
            <td className={styles.styledTableCol1}>
              <input className={styles.inputTime} value={c.time} onChange={(v) =>
                  setData((d) => {
                    const newD = [...d];
                    const item = {...newD[i]};
                    item.time = v.target.value;
                    newD.splice(i, 1, item);
                    return newD;
                  })
                } />
            </td>
            <td className={styles.styledTableCol2}>
              <TextareaAutoSize
                className={styles.inputDescription}
                spellCheck="false"
                value={c.content}
                onChange={(v) =>
                  setData((d) => {
                    const newD = [...d];
                    const item = {...newD[i]};
                    item.content = v.target.value;
                    newD.splice(i, 1, item);
                    return newD;
                  })
                }
              />
            </td>
            <td className={styles.styledTableCol3}>
              <input className={styles.inputPleasure} value={c.pleasure} onChange={(v) =>
                  setData((d) => {
                    const newD = [...d];
                    const item = {...newD[i]};
                    item.pleasure = v.target.value;
                    newD.splice(i, 1, item);
                    return newD;
                  })
                } />
            </td>
          </tr>
        ))}
        <tr>
          <td className={styles.styledTableCol1}>
            <input className={styles.inputTime} />
          </td>
          <td className={styles.styledTableCol2}>
            <TextareaAutoSize
              className={styles.inputDescription}
              spellCheck="false"
            />
          </td>
          <td className={styles.styledTableCol3}>
            <input className={styles.inputPleasure} />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
