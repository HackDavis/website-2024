import styles from './Resources.module.scss';
import Link from 'next/link';
import type { ResourceType } from '../../../_data/resourceData';

export default function Resources({
  resourcePack,
}: {
  resourcePack: ResourceType[];
}) {
  return (
    <main className={styles.main_container}>
      <h1 className="tw-font-semibold">Resources</h1>
      <div
        className="tw-grid tw-gap-6"
        style={{
          // gridTemplateColumns,
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        }}
      >
        {resourcePack.map((resource, index) => {
          return (
            <Link key={index} href={resource.url}>
              <div className="sm:tw-aspect-content tw-flex tw-min-w-0 tw-cursor-pointer tw-flex-col tw-items-center tw-justify-center tw-gap-6 tw-rounded-3xl tw-border tw-p-9 tw-text-dark-blue md:tw-aspect-auto lg:tw-aspect-auto">
                <div className={styles.card_icons}>{resource.icon}</div>
                <h4 className="tw-text-base tw-font-semibold">
                  {resource.title}
                </h4>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
