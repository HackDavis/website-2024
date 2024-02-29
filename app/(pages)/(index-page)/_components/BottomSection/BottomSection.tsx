import FAQ from './FAQ/FAQ';
import BottomPolaroids from './BottomPolaroids/BottomPolaroids';
import style from './BottomSection.module.scss';
export default function BottomSection() {
  return (
    <div>
      <div className={style.container}>
        <FAQ />
        <div className={style.polaroids}>
          <BottomPolaroids />
        </div>
      </div>
    </div>
  );
}
