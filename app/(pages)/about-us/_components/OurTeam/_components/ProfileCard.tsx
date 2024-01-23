import styles from './ProfileCard.module.scss';
import Image from 'next/image';
interface ProfileCardProps {
  name: string;
  title: string;
  imageUrl: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, title, imageUrl }) => {
  return (
    <div className={styles.profile_card}>
      <Image
        src={imageUrl ?? '/index/city.jpg'}
        alt={name}
        height={235}
        width={235}
        style={{ objectFit: 'cover' }}
      />
      <h3>{name}</h3>
      <p>{title}</p>
    </div>
  );
};

export default ProfileCard;
