import FAQ from './FAQ/FAQ';
import BottomPolaroids from './BottomPolaroids/BottomPolaroids';
import style from './BottomSection.module.scss';
import DirectorFAQ from './DirectorFAQ/DirectorFAQ';

export default function BottomSection() {
  return (
    <div className={style.container}>
      <DirectorFAQ />
      <FAQ />
      <div className={style.polaroids}>
        <BottomPolaroids />
      </div>
    </div>
  );
}
