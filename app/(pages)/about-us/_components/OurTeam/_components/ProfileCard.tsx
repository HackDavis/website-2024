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
    <div className={styles.profile_card}>
      <div
        className={styles.profile_card_image}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={imageUrl}
          alt={name}
          layout="fill"
          className={styles.profile_card_image_image}
          placeholder="blur"
          blurDataURL={imageUrl}
          style={{ objectFit: 'cover', borderRadius: 11 }}
        />
        <div
          className={`${styles.profile_card_image_hover} ${
            isHovered ? styles.visible : ''
          }`}
        >
          <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
            <FaLinkedin
              size={60}
              className={styles.profile_card_image_linkedIn_icon}
              color="white"
            />
          </a>
        </div>
      </div>
      <h3>{name}</h3>
      <p>{title}</p>
    </div>
  );
};

export default ProfileCard;
