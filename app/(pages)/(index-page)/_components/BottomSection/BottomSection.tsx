import FAQ from './FAQ/FAQ';
import BottomPolaroids from './BottomPolaroids/BottomPolaroids';
import style from './BottomSection.module.scss';
export default function BottomSection() {
  return (
    <div>
      <div className={style.container}>
        <FAQ />
        <BottomPolaroids />
      </div>
    </div>
  );
}
