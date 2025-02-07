import Maps from "../components/profile/Maps";
import Globe from "../components/map/Globe";

const ProfilePage = () => {
  return (
    <div className="container mx-auto max-w-7xl p-4 min-h-screen">
      {/* Use grid with 2 columns on medium (md) and larger screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
        <div className="h-screen">
          <Maps />
        </div>
        <div className="h-screen">
          <Globe />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
