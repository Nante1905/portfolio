import Image from "next/image";
import "./profile-premium.component.scss";

interface ProfilePremiumComponentProps {
  imageSrc: string;
  imageAlt: string;
}

const ProfilePremiumComponent = ({
  imageSrc,
  imageAlt,
}: ProfilePremiumComponentProps) => {
  return (
    <div className="profile-premium">
      <div className="profile-premium_image-container h-4">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          quality={100}
          className="profile-premium_image"
          priority
        />
      </div>
    </div>
  );
};

export default ProfilePremiumComponent;
