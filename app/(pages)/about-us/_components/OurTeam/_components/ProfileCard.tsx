import styles from './ProfileCard.module.scss';
import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';
interface ProfileCardProps {
  name: string;
  title: string;
  imageUrl: string;
  linkedInUrl: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  title,
  imageUrl,
  linkedInUrl,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={styles.profile_card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={imageUrl ?? '/index/city.jpg'}
        alt={name}
        height={235}
        width={235}
        style={{ objectFit: 'cover', borderRadius: 11 }}
      />
      {isHovered && ( // show LinkedIn icon on hover
        <div className={styles.profile_card_linkedIn}>
          <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={60} />
          </a>
        </div>
      )}
      <h3>{name}</h3>
      <p>{title}</p>
    </div>
  );
};

export default ProfileCard;
