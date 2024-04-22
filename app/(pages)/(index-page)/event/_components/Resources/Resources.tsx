import styles from './Resources.module.scss';

type ResourceType = {
  icon: JSX.Element;
  title: string;
};

export default function Resources({
  resourcePack,
}: {
  resourcePack: ResourceType[];
}) {
  const numColumns = resourcePack.length;
  const gridTemplateColumns = `repeat(${numColumns}, 1fr)`;

  return (
    <main className={styles.main_container}>
      <h1 className="tw-font-semibold">Resources</h1>
      <div
        className="tw-grid tw-gap-6"
        style={{
          gridTemplateColumns,
          // gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        }}
      >
        {resourcePack.map((resource, index) => {
          return (
            <div
              key={index}
              className="tw-text-dark-blue sm:tw-aspect-content tw-flex tw-min-w-0 tw-cursor-pointer tw-flex-col tw-items-center tw-justify-center tw-gap-6 tw-rounded-3xl tw-border tw-p-9 md:tw-aspect-auto lg:tw-aspect-auto"
            >
              <div className={styles.card_icons}>{resource.icon}</div>
              <h4 className={styles.card_titles}>{resource.title}</h4>
            </div>
          );
        })}
      </div>
    </main>
  );
}
